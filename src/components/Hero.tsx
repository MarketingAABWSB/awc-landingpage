import WaIcon from './WaIcon';

const Hero = () => {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="wrap hero-grid">
        <div>
          <div className="eyebrow">KEDAI • OFFICE • SYARIKAT | KELANTAN</div>
          <h1 id="hero-title">
            URUS BANYAK AIRCOND DEKAT PREMIS?<br />
            <span>MULAKAN DENGAN 2 BAYAR 1 SAHAJA.</span>
          </h1>
          <p className="lead">
            Bila unit banyak, bukan setakat “tak sejuk”. Kena fikir kos, timing kerja, staff, customer dan siapa yang nak urus semuanya.
          </p>

          <div className="offer-quick" aria-label="Ringkasan promosi aircond">
            <div>
              <div className="offer-label">SERVIS AIRCOND</div>
              <div className="offer-main">2 UNIT • BAYAR 1</div>
              <div className="price">RM80</div>
            </div>
            <div>
              <div className="offer-label">OVERHAUL AIRCOND</div>
              <div className="offer-main">2 UNIT • BAYAR 1</div>
              <div className="price">RM180</div>
            </div>
          </div>

          <a
            className="cta large"
            data-cta="hero-whatsapp"
            href="https://wa.me/60199778752?text=Assalamualaikum%20AWC.%20Saya%20nak%20semak%20servis%20aircond%20untuk%20premis%20saya.%0A%0ALokasi%3A%0AJenis%20premis%3A%0AJumlah%20unit%3A%0ANak%20servis%20/%20overhaul%20/%20installation%3A%0ACustomer%20Azam%20Auto%3A%20Ya%20/%20Tidak"
            target="_blank"
            rel="noopener noreferrer"
          >
            <WaIcon size={18} style={{ marginRight: '8px' }} /> SEMAK PROMO + SLOT DI WHATSAPP
          </a>
          <p className="micro">
            Promo khas customer Azam Auto + follow @azamworkconstruction • Kelantan sahaja • Wajib booking • Sah sehingga 31/12/2026 • Tertakluk terma, jenis unit dan keadaan.
          </p>
          <div className="trust-row" aria-label="Bukti kepercayaan ringkas">
            <span>AWC sejak Oktober 2022</span>
            <span>Kediaman + komersial</span>
            <span>Aircond + Wiring + CCTV</span>
          </div>
        </div>

        <figure className="campaign-visual">
          <img
            src="/images/AC1.jpeg"
            width="760"
            height="1078"
            alt="Poster promosi semasa Azam Work Construction: servis 2 aircond bayar 1, sah sehingga 31 Disember 2026"
            // fetchpriority="high" // React 18 supports it differently, or we can leave it
            decoding="async"
          />
          <figcaption className="visual-tag">PROMO SEMASA AWC • 31/12/2026</figcaption>
        </figure>
      </div>
    </section>
  );
};

export default Hero;
