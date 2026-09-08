import { useState, FormEvent, useRef, MouseEvent } from 'react';
import { siteConfig } from '../config/site';
import { security } from '../utils/security';
import { 
  MessageSquare, 
  Phone, 
  Mail, 
  Instagram,
  Copy, 
  Check, 
  ArrowUpRight, 
  MapPin, 
  Clock,
  ShieldCheck,
  AlertCircle,
  Send
} from 'lucide-react';

export default function Contact() {
  const [copiedType, setCopiedType] = useState<'email' | 'phone' | 'instagram' | null>(null);
  const [rateLimitWarning, setRateLimitWarning] = useState<string | null>(null);

  // Quick inquiry state
  const [senderName, setSenderName] = useState('');
  const [projectType, setProjectType] = useState('Website Builder / Business Site');
  const [inquiryMessage, setInquiryMessage] = useState('');
  const [honeypot, setHoneypot] = useState('');
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const formLoadTimeRef = useRef<number>(Date.now());

  // Generate clean WhatsApp link
  const cleanWhatsAppNumber = siteConfig.whatsapp.replace(/[^0-9]/g, '');
  const whatsAppUrl = `https://wa.me/${cleanWhatsAppNumber}?text=${encodeURIComponent(
    siteConfig.whatsappPrefillMessage
  )}`;

  const triggerRateLimitAlert = (remainingMs: number) => {
    const seconds = Math.ceil(remainingMs / 1000) || 5;
    setRateLimitWarning(`Rate limit protection active: Please wait ${seconds}s before performing another action.`);
    setTimeout(() => setRateLimitWarning(null), 4000);
  };

  const handleActionWithRateLimit = (e: MouseEvent) => {
    const check = security.checkRateLimit('contact_click');
    if (!check.allowed) {
      e.preventDefault();
      triggerRateLimitAlert(check.remainingCooldownMs);
      return;
    }
  };

  const copyToClipboard = (text: string, type: 'email' | 'phone' | 'instagram') => {
    const check = security.checkRateLimit('copy_action');
    if (!check.allowed) {
      triggerRateLimitAlert(check.remainingCooldownMs);
      return;
    }

    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => setCopiedType(null), 2500);
  };

  const handleQuickInquirySubmit = (e: FormEvent, channel: 'whatsapp' | 'email') => {
    e.preventDefault();

    // 1. Bot Honeypot Check
    if (honeypot.trim().length > 0) {
      console.warn('Bot submission blocked via honeypot trap.');
      return;
    }

    // 2. Timing Trap (Bot submissions completing within 1 second)
    const elapsed = Date.now() - formLoadTimeRef.current;
    if (elapsed < 1200) {
      triggerRateLimitAlert(4000);
      return;
    }

    // 3. Rate Limit Check
    const rateCheck = security.checkRateLimit('form_submit');
    if (!rateCheck.allowed) {
      triggerRateLimitAlert(rateCheck.remainingCooldownMs);
      return;
    }

    // 4. Sanitize inputs
    const cleanName = security.sanitize(senderName);
    const cleanMsg = security.sanitize(inquiryMessage);

    if (!cleanName && !cleanMsg) {
      setRateLimitWarning('Please enter your name or project details.');
      setTimeout(() => setRateLimitWarning(null), 3000);
      return;
    }

    const payloadText = `Hi Gaurav, I'm ${cleanName || 'a client'}.\nProject Type: ${projectType}\nDetails: ${cleanMsg || 'I want to discuss a project with you.'}`;

    if (channel === 'whatsapp') {
      const url = `https://wa.me/${cleanWhatsAppNumber}?text=${encodeURIComponent(payloadText)}`;
      window.open(url, '_blank', 'noopener,noreferrer');
    } else {
      const mailUrl = `mailto:${siteConfig.email}?subject=${encodeURIComponent(`Project Inquiry: ${projectType} from ${cleanName || 'Client'}`)}&body=${encodeURIComponent(payloadText)}`;
      window.location.href = mailUrl;
    }

    setSubmitSuccess(true);
    setTimeout(() => setSubmitSuccess(false), 5000);
  };

  return (
    <section 
      id="contact" 
      className="py-24 sm:py-32 relative border-t border-zinc-100 bg-white"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main CTA Card with Glass Border & Subtle Emerald Glow */}
        <div className="relative rounded-3xl p-8 sm:p-12 lg:p-16 bg-gradient-to-b from-zinc-50/80 to-white border border-zinc-200/90 shadow-[0_12px_40px_rgba(0,0,0,0.04)] overflow-hidden">
          
          {/* Subtle accent light */}
          <div 
            className="absolute top-0 right-1/4 w-72 h-72 bg-emerald-100/40 rounded-full blur-3xl -z-10 pointer-events-none" 
            aria-hidden="true" 
          />

          <div className="max-w-2xl mx-auto text-center space-y-6">
            
            {/* Status Pill & Security Indicator */}
            <div className="flex flex-wrap items-center justify-center gap-2">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200/70 text-xs font-semibold text-emerald-800">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>{siteConfig.status.badgeText}</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-zinc-100/80 border border-zinc-200/80 text-[11px] font-medium text-zinc-600">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>Rate-Limit &amp; Anti-DDoS Protected</span>
              </div>
            </div>

            {/* Rate limit warning banner */}
            {rateLimitWarning && (
              <div 
                role="alert"
                className="p-3 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 text-xs font-semibold flex items-center justify-center gap-2 animate-in fade-in zoom-in duration-200"
              >
                <AlertCircle className="w-4 h-4 text-amber-600 shrink-0" />
                <span>{rateLimitWarning}</span>
              </div>
            )}

            {/* Success banner */}
            {submitSuccess && (
              <div 
                role="status"
                className="p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-900 text-xs font-semibold flex items-center justify-center gap-2 animate-in fade-in duration-200"
              >
                <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Redirecting to message composer!</span>
              </div>
            )}

            {/* Heading */}
            <h2 
              id="contact-heading"
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-zinc-950 leading-tight"
            >
              Have something worth building?
            </h2>

            {/* Subheading */}
            <p className="text-base sm:text-lg text-zinc-600 leading-relaxed">
              If you have a genuine business idea, website, application or digital product in mind, let&apos;s talk about it.
            </p>

            {/* Direct Action Buttons */}
            <div className="pt-4 flex flex-wrap items-center justify-center gap-3">
              
              {/* Primary: WhatsApp */}
              <a
                id="contact-whatsapp-btn"
                href={whatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleActionWithRateLimit}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-[14.5px] transition-all duration-200 shadow-sm hover:shadow-[0_8px_20px_rgba(16,185,129,0.25)] hover:-translate-y-0.5 active:translate-y-0"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp</span>
                <ArrowUpRight className="w-3.5 h-3.5 opacity-80" />
              </a>

              {/* Secondary: Phone Call */}
              <a
                id="contact-call-btn"
                href={`tel:${siteConfig.phone.replace(/\s+/g, '')}`}
                onClick={handleActionWithRateLimit}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-full bg-white hover:bg-zinc-50 text-zinc-900 font-semibold text-[14.5px] border border-zinc-200 hover:border-zinc-300 transition-all duration-200 shadow-xs hover:-translate-y-0.5 active:translate-y-0"
              >
                <Phone className="w-4 h-4 text-emerald-600" />
                <span>Call {siteConfig.phone}</span>
              </a>

              {/* Tertiary: Email */}
              <a
                id="contact-email-btn"
                href={`mailto:${siteConfig.email}?subject=Project%20Inquiry%20from%20Portfolio`}
                onClick={handleActionWithRateLimit}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-full bg-white hover:bg-zinc-50 text-zinc-900 font-semibold text-[14.5px] border border-zinc-200 hover:border-zinc-300 transition-all duration-200 shadow-xs hover:-translate-y-0.5 active:translate-y-0"
              >
                <Mail className="w-4 h-4 text-zinc-500" />
                <span>Send Email</span>
              </a>

              {/* Quaternary: Instagram */}
              {siteConfig.socials.instagram && (
                <a
                  id="contact-instagram-btn"
                  href={siteConfig.socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={handleActionWithRateLimit}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-full bg-white hover:bg-zinc-50 text-zinc-900 font-semibold text-[14.5px] border border-zinc-200 hover:border-zinc-300 transition-all duration-200 shadow-xs hover:-translate-y-0.5 active:translate-y-0"
                >
                  <Instagram className="w-4 h-4 text-pink-600" />
                  <span>Instagram</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-70" />
                </a>
              )}

            </div>

            {/* Quick Instant Project Message Composer with Anti-Spam & Rate-Limiting */}
            <div className="pt-6 text-left max-w-xl mx-auto">
              <div className="p-5 sm:p-6 rounded-2xl bg-white border border-zinc-200/90 shadow-xs space-y-4">
                <div className="flex items-center justify-between border-b border-zinc-100 pb-3">
                  <div>
                    <h3 className="text-sm font-bold text-zinc-900">Direct Project Dispatch</h3>
                    <p className="text-xs text-zinc-500">Send brief project details straight to WhatsApp or Email</p>
                  </div>
                  <span className="text-[10px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200/60">
                    Spam Protected
                  </span>
                </div>

                <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
                  {/* Invisible Honeypot to trap automated bots */}
                  <div className="hidden" aria-hidden="true">
                    <input 
                      type="text" 
                      name="website_antispam_hp" 
                      tabIndex={-1} 
                      value={honeypot} 
                      onChange={(e) => setHoneypot(e.target.value)} 
                      autoComplete="off" 
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    <div>
                      <label htmlFor="inquiry-name" className="block text-[11px] font-semibold text-zinc-600 mb-1">
                        Your Name
                      </label>
                      <input 
                        id="inquiry-name"
                        type="text"
                        placeholder="e.g. Rahul Sharma"
                        value={senderName}
                        onChange={(e) => setSenderName(e.target.value)}
                        maxLength={60}
                        className="w-full px-3 py-2 text-xs rounded-xl bg-zinc-50 border border-zinc-200 focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500/30 focus:border-emerald-500 transition-all text-zinc-900"
                      />
                    </div>

                    <div>
                      <label htmlFor="inquiry-type" className="block text-[11px] font-semibold text-zinc-600 mb-1">
                        Project Category
                      </label>
                      <select
                        id="inquiry-type"
                        value={projectType}
                        onChange={(e) => setProjectType(e.target.value)}
                        className="w-full px-3 py-2 text-xs rounded-xl bg-zinc-50 border border-zinc-200 focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500/30 focus:border-emerald-500 transition-all text-zinc-900"
                      >
                        <option value="Website Builder / Business Site">Website Builder (Fast &amp; Affordable)</option>
                        <option value="Full-Stack Web Application">Full-Stack Web Application</option>
                        <option value="Android / Mobile App">Android / Mobile App</option>
                        <option value="E-Commerce Store">E-Commerce Store</option>
                        <option value="Custom Automation / Scripts">Custom Automation / Scripts</option>
                        <option value="Cybersecurity / Code Audit">Cybersecurity / Code Audit</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="inquiry-msg" className="block text-[11px] font-semibold text-zinc-600 mb-1">
                      Project Notes / Budget / Timeline
                    </label>
                    <textarea 
                      id="inquiry-msg"
                      rows={2}
                      placeholder="Briefly describe what you'd like to build..."
                      value={inquiryMessage}
                      onChange={(e) => setInquiryMessage(e.target.value)}
                      maxLength={500}
                      className="w-full px-3 py-2 text-xs rounded-xl bg-zinc-50 border border-zinc-200 focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500/30 focus:border-emerald-500 transition-all text-zinc-900 resize-none"
                    />
                  </div>

                  <div className="flex flex-col sm:flex-row items-center gap-2 pt-1">
                    <button
                      type="button"
                      id="inquiry-submit-whatsapp"
                      onClick={(e) => handleQuickInquirySubmit(e, 'whatsapp')}
                      className="w-full sm:flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold shadow-xs transition-all active:scale-[0.98]"
                    >
                      <MessageSquare className="w-3.5 h-3.5" />
                      <span>Send via WhatsApp</span>
                    </button>

                    <button
                      type="button"
                      id="inquiry-submit-email"
                      onClick={(e) => handleQuickInquirySubmit(e, 'email')}
                      className="w-full sm:flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-white text-xs font-semibold shadow-xs transition-all active:scale-[0.98]"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>Send via Email</span>
                    </button>
                  </div>
                </form>
              </div>
            </div>

            {/* Quick Contact Details & Copy to Clipboard (3-column responsive) */}
            <div className="pt-8 mt-6 border-t border-zinc-200/60 grid grid-cols-1 sm:grid-cols-3 gap-3.5 max-w-2xl mx-auto text-left">
              
              {/* Phone item */}
              <div className="flex items-center justify-between p-3.5 rounded-2xl bg-white border border-zinc-200/80 shadow-2xs">
                <div className="flex items-center gap-2.5 overflow-hidden">
                  <div className="w-8 h-8 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div className="truncate">
                    <p className="text-[10.5px] font-semibold text-zinc-400 uppercase tracking-wider">Mobile</p>
                    <a 
                      href={`tel:${siteConfig.phone.replace(/\s+/g, '')}`}
                      className="text-xs font-bold text-zinc-800 hover:text-emerald-600 transition-colors truncate block"
                    >
                      {siteConfig.phone}
                    </a>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => copyToClipboard(siteConfig.phone, 'phone')}
                  className="p-1.5 text-zinc-400 hover:text-zinc-700 rounded-lg hover:bg-zinc-50 transition-colors shrink-0 ml-1"
                  aria-label="Copy phone number"
                  title="Copy phone"
                >
                  {copiedType === 'phone' ? (
                    <Check className="w-4 h-4 text-emerald-600" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>

              {/* Email item */}
              <div className="flex items-center justify-between p-3.5 rounded-2xl bg-white border border-zinc-200/80 shadow-2xs">
                <div className="flex items-center gap-2.5 overflow-hidden">
                  <div className="w-8 h-8 rounded-xl bg-zinc-100 flex items-center justify-center shrink-0 text-zinc-700">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="truncate">
                    <p className="text-[10.5px] font-semibold text-zinc-400 uppercase tracking-wider">Email</p>
                    <a 
                      href={`mailto:${siteConfig.email}`}
                      className="text-xs font-bold text-zinc-800 hover:text-emerald-600 transition-colors truncate block"
                    >
                      {siteConfig.email}
                    </a>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => copyToClipboard(siteConfig.email, 'email')}
                  className="p-1.5 text-zinc-400 hover:text-zinc-700 rounded-lg hover:bg-zinc-50 transition-colors shrink-0 ml-1"
                  aria-label="Copy email address"
                  title="Copy email"
                >
                  {copiedType === 'email' ? (
                    <Check className="w-4 h-4 text-emerald-600" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>

              {/* Instagram item */}
              <div className="flex items-center justify-between p-3.5 rounded-2xl bg-white border border-zinc-200/80 shadow-2xs">
                <div className="flex items-center gap-2.5 overflow-hidden">
                  <div className="w-8 h-8 rounded-xl bg-pink-50 text-pink-600 flex items-center justify-center shrink-0">
                    <Instagram className="w-4 h-4" />
                  </div>
                  <div className="truncate">
                    <p className="text-[10.5px] font-semibold text-zinc-400 uppercase tracking-wider">Instagram</p>
                    <a 
                      href={siteConfig.socials.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-bold text-zinc-800 hover:text-pink-600 transition-colors truncate block"
                    >
                      {siteConfig.instagramHandle || "@gauravbeniwalx"}
                    </a>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => copyToClipboard(siteConfig.instagramHandle || "@gauravbeniwalx", 'instagram')}
                  className="p-1.5 text-zinc-400 hover:text-zinc-700 rounded-lg hover:bg-zinc-50 transition-colors shrink-0 ml-1"
                  aria-label="Copy Instagram handle"
                  title="Copy Instagram handle"
                >
                  {copiedType === 'instagram' ? (
                    <Check className="w-4 h-4 text-emerald-600" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>

            </div>

            {/* Quick Meta note */}
            <div className="pt-2 flex flex-wrap items-center justify-center gap-3 sm:gap-4 text-xs text-zinc-400">
              <span className="inline-flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5" />
                {siteConfig.location}
              </span>
              <span>•</span>
              <span className="inline-flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5" />
                Typical response in &lt;2 hours
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
