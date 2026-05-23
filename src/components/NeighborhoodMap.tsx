export default function NeighborhoodMap({ lang }: { lang: "en" | "fr" }) {
  const query = "1001 Nuit, Dollard-des-Ormeaux, Montreal";
  const embedUrl = `https://maps.google.com/maps?q=${encodeURIComponent(query)}&t=&z=16&ie=UTF8&iwloc=&output=embed`;

  return (
    <div className="w-full bg-[#141514] border border-[#333330] rounded-[2rem] overflow-hidden shadow-2xl relative h-[350px] group transition-all duration-500 hover:border-[#cfbe91]/50">
      <iframe
        title={lang === "fr" ? "Carte de localisation 1001 Nuits" : "1001 Nuits Location Map"}
        src={embedUrl}
        width="100%"
        height="100%"
        style={{ 
          border: 0, 
          filter: "invert(90%) hue-rotate(180deg) contrast(110%) brightness(95%)",
          opacity: 0.9
        }}
        allowFullScreen={true}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
}
