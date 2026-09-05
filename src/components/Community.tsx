const Community = () => {
  return (
    <section className="section cream line-top" aria-labelledby="community-title">
      <div className="wrap community two-col">
        <div>
          <div className="eyebrow gold">PROGRAM KOMUNITI</div>
          <h2 id="community-title">ADA SURAU / RUANG KOMUNITI YANG PERLUKAN BANTUAN SERVIS?</h2>
        </div>
        <div>
          <strong className="big">SERVIS PERCUMA<br />2 UNIT AIRCOND 1HP</strong>
          <p className="lead" style={{ marginTop: '16px' }}>
            Untuk surau atau komuniti. Mengikut giliran • 1 lokasi setiap bulan.
          </p>
          <a
            className="cta secondary"
            data-cta="community-whatsapp"
            href="https://wa.me/60199778752?text=Assalamualaikum%20AWC.%20Saya%20nak%20tanya%20Program%20Komuniti%20servis%20aircond.%0A%0ANama%20surau%20/%20komuniti%3A%0ALokasi%3A%0ABilangan%20unit%201HP%3A%0ANama%20PIC%3A"
            target="_blank"
            rel="noopener noreferrer"
          >
            TANYA PROGRAM KOMUNITI DI WHATSAPP
          </a>
          <p className="micro">
            Program ini diletakkan sebagai inisiatif komuniti, bukan alasan untuk mendesak jualan.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Community;
