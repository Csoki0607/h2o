import SectionTitle from "../Common/SectionTitle";
import SingleFeature from "./SingleFeature";
import featuresData from "./featuresData";

const Features = () => {
  return (
    <>
      <section id="features" className="py-16 md:py-20 lg:py-28 relative">
        <div className="container">
          <SectionTitle
            title="Szolgáltatások"
            paragraph="Szakembereink 15 éves tapasztalattal a legkorszerübb teknikával állnak a rendelkezésére!"
            center
          />
          <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
            {featuresData.map((feature) => (
              <SingleFeature key={feature.id} feature={feature} />
            ))}
          </div>
          <div className="w-full flex justify-center mt-12">
            <a
              href="tel:+36301234567"
              className="font-bold text-lg text-white bg-primary px-8 py-4 rounded-xl shadow-lg hover:bg-blue-700 transition whitespace-nowrap"
            >
              Hívjon most!
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
