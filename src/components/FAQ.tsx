import { useState } from 'react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      q: "Promo aircond ni siapa boleh claim?",
      a: "Khas customer Azam Auto yang follow TikTok @azamworkconstruction. Sah sehingga 31/12/2026, area Kelantan dan wajib booking. Tertakluk kepada terma, jenis unit dan keadaan."
    },
    {
      q: "Saya bukan customer Azam Auto. Boleh tanya juga?",
      a: "Boleh. Promo khas mungkin tidak terpakai, tetapi anda masih boleh WhatsApp untuk semak harga biasa atau quotation premis."
    },
    {
      q: "Saya ada 6 atau 10 unit. Boleh tanya dulu?",
      a: "Boleh. Beritahu jumlah unit dan lokasi. Tak perlu terus buat semua sekali."
    },
    {
      q: "Saya tak tahu nak servis atau overhaul.",
      a: "Tak perlu teka. Terangkan simptom dan hantar gambar jika perlu supaya keperluan boleh disemak dulu."
    },
    {
      q: "Pemasangan RM990 tu termasuk apa?",
      a: "Harga bermula RM990 siap pasang, tetapi skop tepat bergantung kepada unit dan keperluan pemasangan. WhatsApp untuk semak sebelum membuat andaian tentang brand, HP, piping atau kerja tambahan."
    },
    {
      q: "Boleh minta quotation untuk kedai / syarikat?",
      a: "Beritahu jenis premis, lokasi, jumlah unit dan skop kerja. Maklumat itu membantu semakan keperluan dan quotation."
    },
    {
      q: "AWC buat wiring juga?",
      a: "Ya. Antara skop dalam profil AWC: single phase, three phase, plug point, lighting, short circuit dan DB board."
    },
    {
      q: "AWC pasang CCTV juga?",
      a: "Ya. AWC turut mempunyai bahagian CCTV dan sekarang ada kempen Tapo by TP-Link untuk customer Azam Auto yang memenuhi syarat promosi."
    },
    {
      q: "Lepas tekan WhatsApp, saya kena buat apa?",
      a: "Isi lokasi, jenis premis, jumlah unit dan jenis kerja yang anda nak semak. Itu sahaja untuk mula."
    }
  ];

  return (
    <section className="section cream line-top" aria-labelledby="faq-title">
      <div className="wrap two-col">
        <div>
          <div className="eyebrow">FAQ = BUANG KERAGUAN</div>
          <h2 id="faq-title">SOALAN YANG BIASANYA HALANG ORANG DARIPADA WHATSAPP.</h2>
          <p className="lead">
            Jawapan pendek. Kalau butiran bergantung pada unit atau keadaan, kami tak akan reka jawapan dalam page.
          </p>
        </div>
        <div className="faq">
          {faqs.map((faq, index) => (
            <details
              key={index}
              open={openIndex === index}
              onToggle={() => {
                // Ignore the toggle event if we are closing it manually via state
                // We use onClick on summary to handle state
              }}
            >
              <summary
                onClick={(e) => {
                  e.preventDefault();
                  setOpenIndex(openIndex === index ? null : index);
                }}
              >
                {faq.q}
              </summary>
              <p>{faq.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
