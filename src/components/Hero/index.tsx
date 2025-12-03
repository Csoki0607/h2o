import Link from "next/link";

const Hero = () => {
  return (
    <>
      <section
        id="home"
        className="relative z-10 overflow-hidden pb-16 pt-[120px] md:pb-[120px] md:pt-[150px] xl:pb-[160px] xl:pt-[180px] 2xl:pb-[200px] 2xl:pt-[210px] min-h-screen"
        style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.4), rgba(255,255,255,0.4)), url(/kepek/bg.webp)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div className="mx-auto max-w-[800px] text-center">
                          <h1 className="mb-5 text-4xl md:text-5xl font-extrabold leading-tight text-black">
                            Vízszerelő gyorsszolgálat Budapest – azonnali kiszállás
                          </h1>
                          <p className="mb-6 text-lg md:text-xl text-gray-800 font-medium">
                            Profi vízszerelés, non-stop ügyelet, korszerű gépek, korrekt árak. Hívjon most, 24/7 elérhetőek vagyunk Budapesten és környékén!
                          </p>
                        <div className="mt-16">
                          <Link
                            href="tel:+36201234567"
                            className="rounded-lg bg-blue-600 px-10 py-5 text-lg font-bold text-white shadow-lg hover:bg-blue-700 transition"
                          >
                            📞 Hívás most
                          </Link>
                        </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
