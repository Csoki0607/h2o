import { Feature } from "@/types/feature";

const SingleFeature = ({ feature }: { feature: Feature }) => {
  const { icon, title, paragraph } = feature;
  return (
    <div className="w-full">
      <div className="wow fadeInUp bg-white rounded-xl shadow-lg p-6 flex flex-col items-center h-[340px]">
        <div className="bg-primary/10 text-primary mb-6 flex h-[70px] w-[70px] items-center justify-center rounded-md">
          {icon}
        </div>
        <h3 className="mb-3 text-xl font-bold text-black text-center">
          {title}
        </h3>
        <p className="text-body-color text-base leading-relaxed font-medium text-center">
          {paragraph}
        </p>
      </div>
    </div>
  );
};

export default SingleFeature;
