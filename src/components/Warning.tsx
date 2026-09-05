const Warning = () => {
  return (
    <section className="section line-top" aria-labelledby="warning-title">
      <div className="wrap warning">
        <div className="eyebrow">SATU PERKARA YANG SELALU JADI</div>
        <h2 id="warning-title">BILA BANYAK UNIT, MAINTENANCE MEMANG MUDAH JADI “NANTI DULU”.</h2>
        <p className="lead">
          Cuma kerja maintenance jarang jadi lebih senang bila terus ditangguh. Kalau dah lama tak periksa, WhatsApp dulu. Tak perlu terus buat semua.
        </p>
        <a
          className="cta secondary"
          data-cta="offer-whatsapp"
          href="https://wa.me/60199778752?text=Assalamualaikum%20AWC.%20Saya%20nak%20semak%20servis%20aircond%20untuk%20premis%20saya.%0A%0ALokasi%3A%0AJenis%20premis%3A%0AJumlah%20unit%3A%0ANak%20servis%20/%20overhaul%20/%20installation%3A%0ACustomer%20Azam%20Auto%3A%20Ya%20/%20Tidak"
          target="_blank"
          rel="noopener noreferrer"
        >
          SEMAK UNIT MANA NAK MULA DULU
        </a>
      </div>
    </section>
  );
};

export default Warning;
