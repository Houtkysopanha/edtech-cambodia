import logo1 from '@/assets/images/MOEYS.png';
import logo2 from '@/assets/images/openDevCam.png';
import logo3 from '@/assets/images/logo-edtech.png';
import logo4 from '@/assets/images/ICT4E_logo.png';
import logo5 from '@/assets/images/B2B.png';

export default function PartnerLogos() {
  const logos = [
    logo1, logo2, logo3, logo4, logo5,
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