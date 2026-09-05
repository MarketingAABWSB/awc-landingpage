const CrossSell = () => {
  return (
    <>
      <section className="section cream line-top" aria-labelledby="wiring-title">
        <div className="wrap cross">
          <div>
            <div className="eyebrow">CROSS-SELL, BUKAN HERO</div>
            <h2 id="wiring-title">ADA KERJA ELEKTRIK DEKAT PREMIS SEKALI?</h2>
            <p className="lead">Tak perlu cari nombor lain semata-mata nak mula bertanya.</p>
            <div className="service-lines" aria-label="Skop wiring AWC" style={{ margin: '24px 0' }}>
              <span>Single phase / three phase</span>
              <span>Tambah plug point / lighting</span>
              <span>Masalah short circuit / trip</span>
              <span>DB board & kerja wiring berkaitan</span>
            </div>
            <a
              className="cta secondary"
              data-cta="wiring-whatsapp"
              href="https://wa.me/60199778752?text=Assalamualaikum%20AWC.%20Saya%20nak%20tanya%20kerja%20wiring%20untuk%20premis%20saya.%0A%0ALokasi%3A%0AJenis%20premis%3A%0AKerja%20/%20masalah%3A%0AGambar%20%28jika%20ada%29%3A"
              target="_blank"
              rel="noopener noreferrer"
            >
              WHATSAPP AWC UNTUK WIRING
            </a>
          </div>
          <div style={{ display: 'flex', height: '100%', alignSelf: 'stretch' }}>
            <img 
              src="/images/wiring 1.jpeg" 
              alt="Kerja Elektrik AWC" 
              style={{ width: '100%', height: '100%', minHeight: '300px', objectFit: 'cover', objectPosition: 'center', borderRadius: '12px', boxShadow: '0 8px 24px rgba(0,0,0,0.1)' }} 
            />
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="cctv-title">
        <div className="wrap cctv-layout">
          <img
            src="/images/cctv.jpg"
            width="760"
            height="1076"
            loading="lazy"
            decoding="async"
            alt="Poster promosi CCTV Tapo by TP-Link AWC untuk customer Azam Auto, 1 September hingga 31 Disember 2026"
          />
          <div>
            <div className="eyebrow">PROMOSI CCTV TAPO by TP-LINK</div>
            <h2 id="cctv-title">ADA CCTV NAK PASANG DEKAT PREMIS?</h2>
            <div className="promo-points">
              <p><strong>Bayar harga CCTV sahaja.</strong></p>
              <p>Upah pemasangan <strong>RM50 / CCTV - PERCUMA.</strong></p>
              <p>Deal harga menarik.</p>
              <p><strong>1 SEPT – 31 DIS 2026</strong> • By booking sahaja • Kelantan sahaja.</p>
              <p>Khas customer Azam Auto yang follow <strong>@azamworkconstruction</strong>.</p>
            </div>
            <a
              className="cta"
              data-cta="cctv-whatsapp"
              href="https://wa.me/60199778752?text=Assalamualaikum%20AWC.%20Saya%20nak%20semak%20promosi%20CCTV%20Tapo%20untuk%20premis%20saya.%0A%0ALokasi%3A%0AJenis%20premis%3A%0ACustomer%20Azam%20Auto%3A%20Ya%20/%20Tidak%0AFollow%20%40azamworkconstruction%3A%20Ya%20/%20Tidak"
              target="_blank"
              rel="noopener noreferrer"
            >
              SEMAK PROMO CCTV DI WHATSAPP
            </a>
            <p className="micro">
              Model, megapixel, storage, night vision, AI detection dan warranty tidak dinyatakan di sini kerana tidak diberikan sebagai fakta kempen.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default CrossSell;
