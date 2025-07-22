export default function PartnerLogos() {
  const logos = [
    '/assets/logo1.png', '/assets/logo2.png', '/assets/logo3.png',
    '/assets/logo4.png', '/assets/logo5.png',
  ];

  return (
    <section className="py-16 bg-white text-center">
      <h2 className="text-2xl font-bold mb-10">Strategic Partners & Sponsors</h2>
      <div className="flex flex-wrap justify-center items-center gap-8 max-w-5xl mx-auto">
        {logos.map((logo, idx) => (
          <img key={idx} src={logo} alt={`logo-${idx}`} className="h-16 object-contain" />
        ))}
      </div>
    </section>
  );
}
