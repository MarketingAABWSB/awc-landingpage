const Benefit = () => {
  return (
    <section className="section" aria-labelledby="benefit-title">
      <div className="wrap two-col">
        <div>
          <div className="eyebrow">BUKAN SEKADAR “SERVIS AIRCOND”</div>
          <h2 id="benefit-title">KURANGKAN TEKA-TEKI SEBELUM BOOK.</h2>
          <p className="lead">
            Untuk orang yang mengurus premis, rasa “senang diurus” lebih penting daripada jargon teknikal panjang.
          </p>
          <div style={{ marginTop: '2rem' }}>
            <img src="/images/aircond.jpg" alt="Pemeriksaan Aircond" style={{ width: '100%', borderRadius: '8px', objectFit: 'cover', height: '280px' }} />
          </div>
        </div>
        <div className="benefit-grid">
          <div className="benefit">
            <b>Ada banyak unit?</b>
            <p>Beritahu jumlah unit dulu. Tak perlu terus commit semua.</p>
          </div>
          <div className="benefit">
            <b>Tak pasti servis / overhaul?</b>
            <p>WhatsApp simptom atau gambar untuk semakan awal.</p>
          </div>
          <div className="benefit">
            <b>Perlu quotation?</b>
            <p>Berikan jenis premis, lokasi dan skop supaya perbualan lebih jelas.</p>
          </div>
          <div className="benefit">
            <b>Ada kerja teknikal lain?</b>
            <p>Nombor yang sama boleh digunakan untuk Aircond, Wiring dan CCTV.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefit;
