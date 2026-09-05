const Process = () => {
  return (
    <section className="section cream line-top" aria-labelledby="risk-title">
      <div className="wrap two-col">
        <div>
          <div className="eyebrow">TAK PASTI? JANGAN TEKA.</div>
          <h2 id="risk-title">WHATSAPP DULU. BAGI MAKLUMAT. BARU SEMAK.</h2>
          <p className="lead">
            Tak perlu pilih servis secara membuta tuli. Beritahu lokasi, jenis premis, jumlah unit dan apa yang anda perasan. Jika perlu, sertakan gambar.
          </p>
          <a
            className="cta"
            data-cta="offer-whatsapp"
            href="https://wa.me/60199778752?text=Assalamualaikum%20AWC.%20Saya%20nak%20semak%20servis%20aircond%20untuk%20premis%20saya.%0A%0ALokasi%3A%0AJenis%20premis%3A%0AJumlah%20unit%3A%0ANak%20servis%20/%20overhaul%20/%20installation%3A%0ACustomer%20Azam%20Auto%3A%20Ya%20/%20Tidak"
            target="_blank"
            rel="noopener noreferrer"
          >
            MULAKAN SEMAKAN DI WHATSAPP
          </a>
        </div>
        <div>
          <div className="steps" aria-label="Tiga langkah mudah">
            <div className="step">
              <div>
                <b>WHATSAPP</b>
                <p>Beritahu lokasi + jenis premis + berapa unit.</p>
              </div>
            </div>
            <div className="step">
              <div>
                <b>KAMI SEMAK</b>
                <p>Jenis kerja, keperluan dan kelayakan promo.</p>
              </div>
            </div>
            <div className="step">
              <div>
                <b>BOOK SLOT</b>
                <p>Confirm timing yang sesuai selepas semakan.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
