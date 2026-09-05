import WaIcon from './WaIcon';

const Offer = () => {
  return (
    <section id="offer" className="section dark" aria-labelledby="offer-title" style={{ position: 'relative', overflow: 'hidden' }}>
      <img src="/images/aircond_service.jpg" alt="" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: 0.2, mixBlendMode: 'overlay', zIndex: 0, pointerEvents: 'none' }} />
      <div className="wrap" style={{ position: 'relative', zIndex: 1 }}>
        <div className="big-offer-head">
          <div className="eyebrow">PROMO KHAS CUSTOMER AZAM AUTO</div>
          <h2 id="offer-title">Kalau Memang Ada 2 Unit, Ini Cara Paling Mudah Nak Mulakan</h2>
          <p className="lead">Offer tak perlu dikira panjang. Buat 2, bayar 1.</p>
        </div>

        <div className="big-offer">
          <div className="big-offer-row">
            <div>
              <div className="name">SERVIS <em>2 UNIT</em></div>
              <div className="small">Hanya bayar untuk 1 unit</div>
            </div>
            <div className="amt">RM80</div>
          </div>
          <div className="big-offer-row">
            <div>
              <div className="name">OVERHAUL <em>2 UNIT</em></div>
              <div className="small">Hanya bayar untuk 1 unit</div>
            </div>
            <div className="amt">RM180</div>
          </div>
        </div>

        <a
          className="cta large"
          data-cta="offer-whatsapp"
          href="https://wa.me/60199778752?text=Assalamualaikum%20AWC.%20Saya%20nak%20semak%20servis%20aircond%20untuk%20premis%20saya.%0A%0ALokasi%3A%0AJenis%20premis%3A%0AJumlah%20unit%3A%0ANak%20servis%20/%20overhaul%20/%20installation%3A%0ACustomer%20Azam%20Auto%3A%20Ya%20/%20Tidak"
          target="_blank"
          rel="noopener noreferrer"
        >
          <WaIcon size={18} style={{ marginRight: '8px' }} /> SEMAK PROMO + SLOT DI WHATSAPP
        </a>
      </div>
    </section>
  );
};

export default Offer;
