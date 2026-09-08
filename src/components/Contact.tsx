import { useState } from 'react';
import { siteConfig } from '../config/site';
import { 
  MessageSquare, 
  Phone, 
  Mail, 
  Instagram,
  Copy, 
  Check, 
  ArrowUpRight, 
  MapPin, 
  Clock 
} from 'lucide-react';

export default function Contact() {
  const [copiedType, setCopiedType] = useState<'email' | 'phone' | 'instagram' | null>(null);

  // Generate clean WhatsApp link
  // Removes non-numeric characters from the configured phone number
  const cleanWhatsAppNumber = siteConfig.whatsapp.replace(/[^0-9]/g, '');
  const whatsAppUrl = `https://wa.me/${cleanWhatsAppNumber}?text=${encodeURIComponent(
    siteConfig.whatsappPrefillMessage
  )}`;

  const copyToClipboard = (text: string, type: 'email' | 'phone' | 'instagram') => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => setCopiedType(null), 2500);
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
            
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200/70 text-xs font-semibold text-emerald-800">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>{siteConfig.status.badgeText}</span>
            </div>

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
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-full bg-white hover:bg-zinc-50 text-zinc-900 font-semibold text-[14.5px] border border-zinc-200 hover:border-zinc-300 transition-all duration-200 shadow-xs hover:-translate-y-0.5 active:translate-y-0"
              >
                <Phone className="w-4 h-4 text-emerald-600" />
                <span>Call {siteConfig.phone}</span>
              </a>

              {/* Tertiary: Email */}
              <a
                id="contact-email-btn"
                href={`mailto:${siteConfig.email}?subject=Project%20Inquiry%20from%20Portfolio`}
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
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-full bg-white hover:bg-zinc-50 text-zinc-900 font-semibold text-[14.5px] border border-zinc-200 hover:border-zinc-300 transition-all duration-200 shadow-xs hover:-translate-y-0.5 active:translate-y-0"
                >
                  <Instagram className="w-4 h-4 text-pink-600" />
                  <span>Instagram</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-70" />
                </a>
              )}

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
