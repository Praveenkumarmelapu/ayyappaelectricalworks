import React, { useState, useRef, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import confetti from 'canvas-confetti';
import { PhoneCall, MapPin, CheckCircle2, Send, Clock, MessageSquare, ShieldCheck, Loader2 } from 'lucide-react';

const EMAILJS_SERVICE_ID = 'service_81hhvnh';
const EMAILJS_TEMPLATE_ID = 'template_riog98s';
const EMAILJS_PUBLIC_KEY = 'WkKTSzumYkiaSp5Cm';

export default function ContactQuotation() {
  const formRef = useRef(null);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: 'Electrical Wiring & Panel Setup',
    location: 'Makkuva Base',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState('');

  // Initialize EmailJS on component mount
  useEffect(() => {
    emailjs.init(EMAILJS_PUBLIC_KEY);
    console.log('✅ EmailJS initialized with public key');
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      alert("Please enter your name and phone number for field inspection dispatch.");
      return;
    }

    setSending(true);
    setError('');

    try {
      console.log('📧 Sending email via EmailJS...');
      console.log('Service ID:', EMAILJS_SERVICE_ID);
      console.log('Template ID:', EMAILJS_TEMPLATE_ID);

      const templateParams = {
        from_name: formData.name,
        name: formData.name,
        user_name: formData.name,
        phone: formData.phone,
        phone_number: formData.phone,
        mobile: formData.phone,
        service: formData.service,
        service_type: formData.service,
        location: formData.location,
        town: formData.location,
        message: formData.message || 'No additional notes provided',
        notes: formData.message || 'No additional notes provided',
        to_email: 'ayyappaelectrical.works@gmail.com',
      };

      let result;
      try {
        result = await emailjs.send(
          EMAILJS_SERVICE_ID,
          'template_riog98s',
          templateParams,
          EMAILJS_PUBLIC_KEY
        );
      } catch (err1) {
        console.warn('Retrying with template ID jub2gnn...');
        result = await emailjs.send(
          EMAILJS_SERVICE_ID,
          'jub2gnn',
          templateParams,
          EMAILJS_PUBLIC_KEY
        );
      }

      console.log('✅ EmailJS SUCCESS:', result.status, result.text);

      setSubmitted(true);
      confetti({
        particleCount: 100,
        spread: 60,
        origin: { y: 0.6 },
        colors: ['#FFB800', '#F5A623', '#FFFFFF', '#D97706'],
      });
    } catch (err) {
      console.error('❌ EmailJS Error:', err);
      console.error('Error status:', err?.status);
      console.error('Error text:', err?.text);
      setError(`Failed to send (${err?.text || err?.message || 'Unknown error'}). Please try calling us directly or use WhatsApp.`);
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" className="relative py-20 px-4 sm:px-6 lg:px-8 bg-[#0B0C10] overflow-hidden border-t border-white/10">
      
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FFB800]/10 border border-[#FFB800]/30 mb-3 text-xs font-mono tracking-widest text-[#FFB800] uppercase font-bold">
            DIRECT FIELD DISPATCH
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold uppercase tracking-tight text-white mb-2">
            Contact & Emergency <span className="text-gradient-yellow">Dispatch</span>
          </h2>
          <p className="text-gray-300 text-sm sm:text-base font-light">
            Fast site inspection across Makkuva, Bobbili, Salur, and Parvathipuram.
          </p>
        </div>

        {/* Direct Action Chips Strip */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
          <a
            href="tel:8919482946"
            className="card-rim-light bg-[#14171F] p-5 rounded-2xl border border-amber-500/40 hover:border-amber-500 flex items-center justify-between group shadow-xl transition-all"
          >
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-xl bg-[#FFB800] text-black shadow-md">
                <PhoneCall className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] font-mono uppercase text-amber-400 font-bold">MAKKUVA BASE LINE</span>
                <div className="text-xl font-display font-extrabold text-white">89194 82946</div>
              </div>
            </div>
            <span className="text-[10px] font-mono bg-amber-500/10 text-amber-400 px-2.5 py-1 rounded-full border border-amber-500/30">CALL</span>
          </a>

          <a
            href="tel:6304426153"
            className="card-rim-light bg-[#14171F] p-5 rounded-2xl border border-white/10 hover:border-amber-500/40 flex items-center justify-between group shadow-xl transition-all"
          >
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-xl bg-white/10 text-amber-400">
                <PhoneCall className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] font-mono uppercase text-gray-400">DEMOLITION LINE</span>
                <div className="text-xl font-display font-extrabold text-white">63044 26153</div>
              </div>
            </div>
            <span className="text-[10px] font-mono bg-white/5 text-gray-300 px-2.5 py-1 rounded-full border border-white/10">CALL</span>
          </a>

          <a
            href="https://wa.me/918919482946?text=Hello%20Ayyappa%20Works,%20I%20need%20a%20site%20inspection%20in%20Makkuva/nearby."
            target="_blank"
            rel="noopener noreferrer"
            className="card-rim-light bg-gradient-to-r from-emerald-950/80 to-emerald-900/80 p-5 rounded-2xl border border-emerald-500/40 hover:border-emerald-400 flex items-center justify-between group shadow-xl transition-all"
          >
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-xl bg-emerald-500 text-white">
                <MessageSquare className="w-5 h-5 fill-white text-emerald-500" />
              </div>
              <div>
                <span className="text-[10px] font-mono uppercase text-emerald-400 font-bold">WHATSAPP BOOKING</span>
                <div className="text-xl font-display font-extrabold text-white">Chat on WhatsApp</div>
              </div>
            </div>
            <span className="text-[10px] font-mono bg-emerald-500/20 text-emerald-300 px-2.5 py-1 rounded-full border border-emerald-500/40">CHAT</span>
          </a>
        </div>

        {/* Compact 3-Field Booking Form & Info */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Booking Form (7 cols) */}
          <div className="lg:col-span-7 bg-[#14171F] p-6 sm:p-8 rounded-3xl border border-white/10 shadow-2xl">
            {submitted ? (
              <div className="py-8 text-center flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-amber-500/20 text-[#FFB800] flex items-center justify-center mb-4 border border-amber-500/40">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-display font-bold text-white uppercase mb-2">Request Received!</h3>
                <p className="text-gray-300 text-xs max-w-sm mb-4">
                  Thank you, <strong className="text-amber-400">{formData.name}</strong>. Supervisor will call <strong className="text-amber-400">{formData.phone}</strong> within 15 minutes.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-5 py-2 bg-white/10 hover:bg-white/20 text-white rounded-full text-xs font-mono uppercase font-bold"
                >
                  Submit Another Request
                </button>
              </div>
            ) : (
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
                <h3 className="text-xl font-display font-bold text-white uppercase mb-2">Request On-Site Inspection Callback</h3>
                
                {/* Hidden fields for EmailJS template */}
                <input type="hidden" name="to_email" value="ayyappaelectrical.works@gmail.com" />
                <input type="hidden" name="location" value={formData.location} />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-mono text-gray-400 mb-1">Your Full Name *</label>
                    <input
                      type="text"
                      name="from_name"
                      required
                      placeholder="e.g. Sanyasi Rao"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-[#0B0C10] border border-white/10 focus:border-[#FFB800] rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-gray-600 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-gray-400 mb-1">Mobile Phone Number *</label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      placeholder="e.g. 89194 82946"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-[#0B0C10] border border-white/10 focus:border-[#FFB800] rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-gray-600 focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-gray-400 mb-1">Service Required *</label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full bg-[#0B0C10] border border-white/10 focus:border-[#FFB800] rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none font-semibold"
                  >
                    <option value="Electrical Wiring & Panel Setup">Electrical Wiring & 3-Phase DB Panel Setup</option>
                    <option value="Building & Structure Demolition">Building & RCC Structure Demolition</option>
                    <option value="Diamond Core Drilling">Diamond Core Drilling (AC & Exhaust Openings)</option>
                    <option value="CPVC/UPVC Plumbing Lines">CPVC/UPVC Water Supply & Plumbing Lines</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-mono text-gray-400 mb-1">Your Location / Town *</label>
                  <select
                    name="location"
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    className="w-full bg-[#0B0C10] border border-white/10 focus:border-[#FFB800] rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none font-semibold"
                  >
                    <option value="Makkuva">Makkuva</option>
                    <option value="Bobbili">Bobbili</option>
                    <option value="Salur">Salur</option>
                    <option value="Parvathipuram">Parvathipuram</option>
                    <option value="Manyam District">Manyam District / Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-mono text-gray-400 mb-1">Additional Notes</label>
                  <textarea
                    name="message"
                    placeholder="e.g. 2nd floor slab, need weekend visit, urgent..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={3}
                    className="w-full bg-[#0B0C10] border border-white/10 focus:border-[#FFB800] rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-gray-600 focus:outline-none resize-none"
                  />
                </div>

                {error && (
                  <div className="bg-red-500/10 border border-red-500/30 text-red-400 text-xs font-mono px-4 py-2.5 rounded-xl">
                    {error}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={sending}
                  className="w-full py-3.5 bg-gradient-to-r from-[#FFB800] via-amber-500 to-[#F5A623] hover:from-amber-400 hover:to-[#FFB800] text-black font-display font-extrabold uppercase text-base rounded-xl shadow-xl hover:scale-[1.01] transition-all flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100"
                >
                  {sending ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Sending Request...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Dispatch On-Site Supervisor Now
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Area Coverage Tags & Info (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="bg-[#14171F] p-6 rounded-3xl border border-white/10">
              <div className="flex items-center gap-2 mb-3">
                <MapPin className="w-5 h-5 text-[#FFB800]" />
                <h4 className="text-base font-display font-bold text-white uppercase">Regional Service Coverage</h4>
              </div>
              <p className="text-xs text-gray-300 mb-4 leading-relaxed">
                Operating base located in <strong className="text-amber-400 font-bold">Makkuva</strong> with fast technical crew dispatch to Bobbili, Salur, Parvathipuram, and surrounding Manyam mandals.
              </p>
              <div className="flex flex-wrap gap-1.5 font-mono text-[10px]">
                <span className="px-2.5 py-1 rounded bg-[#FFB800]/20 text-[#FFB800] border border-[#FFB800]/40 font-bold">Makkuva Hub</span>
                <span className="px-2.5 py-1 rounded bg-white/5 text-gray-300 border border-white/10">Bobbili</span>
                <span className="px-2.5 py-1 rounded bg-white/5 text-gray-300 border border-white/10">Salur</span>
                <span className="px-2.5 py-1 rounded bg-white/5 text-gray-300 border border-white/10">Parvathipuram</span>
                <span className="px-2.5 py-1 rounded bg-white/5 text-gray-300 border border-white/10">Manyam Mandals</span>
              </div>
            </div>

            <div className="bg-[#14171F] p-5 rounded-3xl border border-white/10 flex items-center gap-3">
              <ShieldCheck className="w-6 h-6 text-amber-400 flex-shrink-0" />
              <div className="text-xs text-gray-400">
                <strong className="text-white">Emergency Response Note:</strong> 24/7 technical crew dispatch available for line failures and urgent structural breaking.
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
