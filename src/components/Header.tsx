import React from 'react';
import WaIcon from './WaIcon';

const Header = () => {
  return (
    <header className="header">
      <div className="wrap header-inner">
        <a href="#hero-title" className="logo">
          <img
            src="/images/LOGO_AWC.png"
            width="140"
            height="40"
            alt="Azam Work Construction"
            style={{ objectFit: 'contain' }}
          />
        </a>
        <div className="header-trust">
          <a
            className="cta"
            style={{ minHeight: '36px', padding: '6px 12px', fontSize: '0.85rem' }}
            href="https://wa.me/60199778752?text=Assalamualaikum%20AWC.%20Saya%20nak%20semak%20servis%20aircond%20untuk%20premis%20saya."
            target="_blank"
            rel="noopener noreferrer"
          >
            <WaIcon size={16} style={{ marginRight: '6px' }} /> WhatsApp AWC
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
