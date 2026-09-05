import { Phone } from 'lucide-react';
import WaIcon from './WaIcon';

const Install = () => {
  return (
    <section className="section" aria-labelledby="install-title">
      <div className="wrap install">
        <div>
          <div className="eyebrow gold">NAK PASANG UNIT BARU PULA?</div>
          <div className="install-price">
            <small>Pemasangan Aircond Bermula</small>
            RM990
          </div>
          <h2 id="install-title" style={{ fontSize: 'clamp(1.8rem,4vw,3rem)' }}>
            SIAP PASANG*
          </h2>
        </div>
        <div className="install-note">
          <p className="lead">
            Harga akhir bergantung kepada unit dan keperluan pemasangan. Jangan teka package daripada harga mula sahaja - WhatsApp untuk semak skop yang sesuai.
          </p>
          <a
            className="cta"
            data-cta="install-whatsapp"
            href="https://wa.me/60199778752?text=Assalamualaikum%20AWC.%20Saya%20nak%20semak%20servis%20aircond%20untuk%20premis%20saya.%0A%0ALokasi%3A%0AJenis%20premis%3A%0AJumlah%20unit%3A%0ANak%20servis%20/%20overhaul%20/%20installation%3A%0ACustomer%20Azam%20Auto%3A%20Ya%20/%20Tidak"
            target="_blank"
            rel="noopener noreferrer"
          >
            <WaIcon size={18} style={{ marginRight: '8px' }} /> SEMAK PEMASANGAN DI WHATSAPP
          </a>
          <p className="micro">
            *Tiada brand, HP, panjang copper, bracket, wiring, drain atau warranty ditambah di sini kerana butiran tersebut belum disahkan sebagai sebahagian daripada harga RM990.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Install;
