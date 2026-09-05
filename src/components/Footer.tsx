import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import WaIcon from './WaIcon';

const Footer = () => {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <section className="section dark final" aria-labelledby="final-title">
        <div className="wrap">
          <div className="eyebrow">LAST REMINDER</div>
          <h2 id="final-title">ADA 2 UNIT NAK SERVIS? JANGAN MULAKAN DENGAN TEKA-TEKI.</h2>
          <div className="final-offer">SERVIS 2 - BAYAR 1 • RM80<br />OVERHAUL 2 - BAYAR 1 • RM180</div>
          <div className="promo-points-inline">
            <span>Kelantan sahaja</span>
            <span className="dot">•</span>
            <span>Khas customer Azam Auto</span>
            <span className="dot">•</span>
            <span>Follow @azamworkconstruction</span>
            <span className="dot">•</span>
            <span>Wajib booking</span>
            <span className="dot">•</span>
            <span>Sah sehingga 31/12/2026</span>
          </div>
          <a
            className="cta large"
            data-cta="final-whatsapp"
            href="https://wa.me/60199778752?text=Assalamualaikum%20AWC.%20Saya%20nak%20semak%20servis%20aircond%20untuk%20premis%20saya."
            target="_blank"
            rel="noopener noreferrer"
          >
            <WaIcon size={18} style={{ marginRight: '8px' }} /> SEMAK PROMO + SLOT DI WHATSAPP
          </a>
          <p className="micro">WhatsApp: +60 19-977 8752</p>
        </div>
      </section>

      <footer id="hubungi-kami" className="footer">
        <div className="wrap">
          <div className="footer-grid-corp">
            {/* Brand Column */}
            <div className="footer-brand">
              <div className="footer-logo">
                <img src="/images/LOGO_AWC.png" alt="Azam Work Construction" style={{ height: '60px', objectFit: 'contain' }} className="footer-logo-img" />
              </div>
              <p className="footer-tagline">
                Pakar Penyelesaian Teknikal & Utiliti Anda
              </p>
              <div className="social-links">
                <a href="https://www.tiktok.com/@azamworkconstruction" target="_blank" rel="noopener noreferrer" className="social-icon" title="@azamworkconstruction">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"></path>
                  </svg>
                </a>
                <a href="https://www.facebook.com/profile.php?id=61592751865212" target="_blank" rel="noopener noreferrer" className="social-icon" title="Azam Work Construction">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                </a>
                <a href="https://api.whatsapp.com/send/?phone=60199778752&text=Assalamualaikum+AWC.+Saya+nak+semak+servis+aircond+untuk+premis+saya.&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer" className="social-icon" title="Hubungi Kami di WhatsApp">
                  <WaIcon size={18} />
                </a>
              </div>
            </div>

            {/* Contact Column */}
            <div>
              <h4 className="footer-heading">Hubungi Kami</h4>
              <div className="contact-info">
                <div className="contact-item">
                  <MapPin size={18} style={{ flexShrink: 0, marginTop: '4px' }} />
                  <span>
                    <a href="https://maps.app.goo.gl/sJMaPrHHePjaCtUH8" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none' }} className="hover-underline">
                      Lot 1966a, Jalan Wakaf Stan,<br />
                      Kubang Kerian,<br />
                      16150 Kota Bharu, Kelantan.
                    </a>
                  </span>
                </div>
                <div className="contact-item">
                  <Phone size={18} style={{ flexShrink: 0 }} />
                  <span>
                    <a href="https://api.whatsapp.com/send/?phone=60199778752&text=Assalamualaikum+AWC.+Saya+nak+semak+servis+aircond+untuk+premis+saya.&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none' }} className="hover-underline">
                      019-977 8752
                    </a>
                  </span>
                </div>
                <div className="contact-item" style={{ alignItems: 'flex-start' }}>
                  <Mail size={18} style={{ flexShrink: 0, marginTop: '4px' }} />
                  <span style={{ whiteSpace: 'nowrap' }}>
                    <a href="mailto:azam.wconstruction@gmail.com" style={{ color: 'inherit', textDecoration: 'none' }} className="hover-underline">
                      azam.wconstruction@gmail.com
                    </a>
                  </span>
                </div>
              </div>
              <div className="operating-hours">
                <h5 className="footer-heading-small">Waktu Operasi</h5>
                <p style={{ whiteSpace: 'nowrap', margin: 0 }}>Sab - Kha: 9:30 AM – 6:00 PM</p>
                <p style={{ color: 'var(--gold)', margin: 0 }}>Jumaat: Tutup</p>
              </div>
            </div>

            {/* Map Column */}
            <div>
              <h4 className="footer-heading">Cari Kami</h4>
              <div className="map-container">
                <iframe
                  title="Google Maps Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3967.334057889104!2d102.2618991!3d6.084126!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMDUnMDMuMyJOIDEwMsKwMTUnNDIuOCJF!5e0!3m2!1sen!2smy!4v1620000000000!5m2!1sen!2smy"
                  allowFullScreen={false}
                  loading="lazy">
                </iframe>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="wrap">
            © 2026 AZAM WORK CONSTRUCTION. Hak cipta terpelihara.
          </div>
        </div>
      </footer>

      {/* STICKY CTA (Keep existing from landing page) */}
      <div className="sticky" aria-label="WhatsApp sticky action">
        <a
          className="cta"
          data-cta="sticky-whatsapp"
          href="https://wa.me/60199778752?text=Assalamualaikum%20AWC.%20Saya%20nak%20semak%20servis%20aircond%20untuk%20premis%20saya."
          target="_blank"
          rel="noopener noreferrer"
        >
          <WaIcon size={18} style={{ marginRight: '8px' }} /> SEMAK PROMO + SLOT DI WHATSAPP
        </a>
      </div>
    </>
  );
};

export default Footer;
