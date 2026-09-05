const ProblemSolution = () => {
  return (
    <>
      <section className="section" aria-labelledby="problem-title">
        <div className="wrap two-col">
          <div>
            <div className="eyebrow">ADAKAH INI SITUASI ANDA?</div>
            <h2 id="problem-title">
              YANG PENING BILA BANYAK UNIT BUKAN CUCI.<br />
              NAK URUS TU.
            </h2>
            <p className="lead">
              Kalau rumah ada satu aircond, ceritanya lain. Kalau kedai, office atau branch ada beberapa unit, setiap keputusan kena fikir operasi sekali.
            </p>
            <div className="solution-strip">
              <span className="small">Sebab itu kempen ini tak suruh anda buat semua terus.</span>
              <strong>Mula dengan 2 unit dulu.</strong>
            </div>
            <a
              className="cta secondary"
              data-cta="hero-whatsapp"
              href="https://wa.me/60199778752?text=Assalamualaikum%20AWC.%20Saya%20nak%20semak%20servis%20aircond%20untuk%20premis%20saya.%0A%0ALokasi%3A%0AJenis%20premis%3A%0AJumlah%20unit%3A%0ANak%20servis%20/%20overhaul%20/%20installation%3A%0ACustomer%20Azam%20Auto%3A%20Ya%20/%20Tidak"
              target="_blank"
              rel="noopener noreferrer"
            >
              TANYA DULU DI WHATSAPP
            </a>
          </div>
          <div className="pain-list">
            <div className="pain">
              <div className="pain-num">01</div>
              <div>
                <h3>Satu unit buat hal. Unit lain mula ikut.</h3>
                <p>Staff atau customer mula complain, tapi servis selalu jatuh ke senarai “nanti dulu”.</p>
              </div>
            </div>
            <div className="pain">
              <div className="pain-num">02</div>
              <div>
                <h3>Banyak unit = kos kena fikir betul-betul.</h3>
                <p>Tak semestinya sesuai buat semua sekali. Yang penting tahu unit mana patut mula dulu.</p>
              </div>
            </div>
            <div className="pain">
              <div className="pain-num">03</div>
              <div>
                <h3>Nak arrange technician pun satu kerja.</h3>
                <p>PIC kena fikir waktu operasi, akses premis dan timing yang tak menyusahkan kerja harian.</p>
              </div>
            </div>
            <div className="pain">
              <div className="pain-num">04</div>
              <div>
                <h3>Tak pasti servis atau overhaul?</h3>
                <p>Tak perlu teka. Beritahu simptom dan hantar gambar jika perlu sebelum tentukan langkah seterusnya.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section cream line-top" aria-labelledby="solution-title" style={{ position: 'relative', overflow: 'hidden' }}>
        <img src="/images/AC5.jpeg" alt="" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: 0.08, zIndex: 0, pointerEvents: 'none' }} />
        <div className="wrap" style={{ position: 'relative', zIndex: 1 }}>
          <div className="eyebrow">CARA LEBIH MUDAH UNTUK MULA</div>
          <h2 id="solution-title">BANYAK UNIT TAK BERMAKNA KENA BUAT SEMUA SEKALI.</h2>
          <p className="quote-line">
            “Berapa unit aircond yang anda kena urus? Ada 2? Ada 6? Ada 10? Mulakan dengan maklumat yang betul dulu.”
          </p>
          <div className="proof-grid" aria-label="Trust layer">
            <div className="proof-item">
              <div className="big">1 nombor</div>
              <p>WhatsApp AWC untuk Aircond, Wiring dan CCTV.</p>
            </div>
            <div className="proof-item">
              <div className="big">1 premis</div>
              <p>Beritahu lokasi, jenis premis dan berapa unit yang perlu disemak.</p>
            </div>
            <div className="proof-item">
              <div className="big">1 langkah awal</div>
              <p>Semak keperluan, promo dan slot sebelum anda buat keputusan.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProblemSolution;
