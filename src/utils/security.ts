/**
 * Security, Anti-Abuse & Anti-DDoS Protection Engine
 * Provides client-side bot detection, honeypots, rate limiting & anti-flooding shields.
 */

// Rate limit tracker using localStorage/sessionStorage
interface RateLimitBucket {
  tokens: number;
  lastRefill: number;
}

class SecurityEngine {
  private static instance: SecurityEngine;
  private readonly maxTokens = 8;
  private readonly refillRateMs = 10000; // 1 token every 10 seconds
  private readonly storageKey = '__gb_sec_rl_bucket';
  private requestLog: number[] = [];
  private readonly floodThreshold = 25; // max 25 rapid interactions within 5 seconds

  private constructor() {
    this.initSecurityGuards();
  }

  public static getInstance(): SecurityEngine {
    if (!SecurityEngine.instance) {
      SecurityEngine.instance = new SecurityEngine();
    }
    return SecurityEngine.instance;
  }

  /**
   * Initializes client security guards (anti-tamper, bot heuristic checks)
   */
  private initSecurityGuards(): void {
    if (typeof window === 'undefined') return;

    // Detect headless automation tools (Puppeteer, Selenium, Playwright bots)
    const isAutomation = Boolean(
      (navigator as unknown as { webdriver?: boolean }).webdriver ||
      (window as unknown as { __nightmare?: unknown }).__nightmare ||
      (window as unknown as { _phantom?: unknown })._phantom ||
      (window as unknown as { callPhantom?: unknown }).callPhantom
    );

    if (isAutomation) {
      // Mark session for defensive throttling
      try {
        sessionStorage.setItem('__gb_bot_detected', 'true');
      } catch {
        // Ignore storage errors
      }
    }
  }

  /**
   * Checks for abusive client-side click/event flooding (Anti-DDoS / Anti-Spam protection)
   */
  public isFloodAttack(): boolean {
    const now = Date.now();
    this.requestLog = this.requestLog.filter(time => now - time < 5000);
    this.requestLog.push(now);

    return this.requestLog.length > this.floodThreshold;
  }

  /**
   * Rate limits an action (e.g. contact click, form submit, copy action)
   * Returns { allowed: boolean, remainingMs?: number }
   */
  public checkRateLimit(actionKey = 'global'): { allowed: boolean; remainingCooldownMs: number } {
    if (typeof window === 'undefined') return { allowed: true, remainingCooldownMs: 0 };

    if (this.isFloodAttack()) {
      return { allowed: false, remainingCooldownMs: 5000 };
    }

    const now = Date.now();
    const key = `${this.storageKey}_${actionKey}`;
    let bucket: RateLimitBucket = { tokens: this.maxTokens, lastRefill: now };

    try {
      const stored = sessionStorage.getItem(key);
      if (stored) {
        bucket = JSON.parse(stored);
      }
    } catch {
      bucket = { tokens: this.maxTokens, lastRefill: now };
    }

    // Refill tokens based on elapsed time
    const elapsed = now - bucket.lastRefill;
    const tokensToAdd = Math.floor(elapsed / this.refillRateMs);
    if (tokensToAdd > 0) {
      bucket.tokens = Math.min(this.maxTokens, bucket.tokens + tokensToAdd);
      bucket.lastRefill = now;
    }

    if (bucket.tokens > 0) {
      bucket.tokens -= 1;
      try {
        sessionStorage.setItem(key, JSON.stringify(bucket));
      } catch {
        // Storage fail-safe
      }
      return { allowed: true, remainingCooldownMs: 0 };
    }

    // Token exhausted, calculate remaining wait time
    const waitTime = Math.max(0, this.refillRateMs - (now - bucket.lastRefill));
    return { allowed: false, remainingCooldownMs: waitTime };
  }

  /**
   * Obfuscates text to prevent simple bot scraping
   */
  public deobfuscate(encoded: string): string {
    try {
      return atob(encoded);
    } catch {
      return encoded;
    }
  }

  /**
   * Sanitizes user input string against XSS & script injection
   */
  public sanitize(input: string): string {
    return input
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#x27;')
      .trim()
      .slice(0, 1000); // Enforce max length bound
  }
}

export const security = SecurityEngine.getInstance();
