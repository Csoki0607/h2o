import Image from "next/image";

const AboutSectionTwo = () => {
  return (
    <section className="py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap items-center">
          <div className="w-full px-4 lg:w-1/2">
            <div
              className="relative mx-auto mb-12 aspect-25/24 max-w-[500px] text-center lg:m-0"
              data-wow-delay=".15s"
            >
              <Image
                src="/kepek/kep1.webp"
                alt="about image"
                fill
                className="drop-shadow-three dark:hidden dark:drop-shadow-none"
              />
              <Image
                src="/public/kepek/kep1.png"
                alt="about image"
                fill
                className="hidden drop-shadow-three dark:block dark:drop-shadow-none"
              />
            </div>
          </div>
          <div className="w-full px-4 lg:w-1/2">
            <div className="max-w-[470px]">
              <div className="mb-9">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  Vízszerelés Budapesten és Pest megyében
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  A H2O Gyorsszervíz teljes körű vízszerelési szolgáltatást nyújt legyen szó csöpögő csapról, szivárgásról, csőtörésről, tapasztalt csapatunk gyorsan, tisztán és garanciával dolgozik. 0–24 órás elérhetőség, hétvégén és ünnepnapokon is.
                </p>
              </div>
              <div className="mb-9">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  Modern technológia, precíz kivitelezés
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  Korszerű eszközeinkkel a hibákat gyorsan, célzottan találjuk meg, így a javításokat a lehető legkisebb bontással végezzük. Kamerás csatornavizsgálat, hőkamerás és nyomáspróba-alapú vizsgálatok segítik a rejtett szivárgások, csőtörések feltárását. Minden munkánkra garanciát vállalunk.
                </p>
              </div>
              <div className="mb-1">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  Szolgáltatásaink
                </h3>
                <ul className="list-disc pl-5 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed mb-4">
                  <li>Csaptelep csere és javítás</li>
                  <li>Vízvezeték javítás, csere, szerelés</li>
                  <li>Szifoncsere, lefolyócsövek javítása</li>
                  <li>Csőtörés bemérése és javítása</li>
                  <li>Vízszivárgás felderítése kamerás vizsgálattal</li>
                  <li>Szelep, flexibilis cső, sarokszelep csere</li>
                  <li>WC tartály javítás, csere</li>
                  <li>Fürdőszobai és konyhai vízszerelés</li>
                  <li>Mosógép, mosogatógép bekötés</li>
                  <li>Teljes vízvezeték rendszer felújítása</li>
                  <li>Fagyás miatti csőrepedés javítása</li>
                </ul>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionTwo;
