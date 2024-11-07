import { Button } from "../ui";

interface SpecificationType {
  id: number;
  title: string;
  value: string;
}

interface ApartmentCardDataType {
  id: number;
  title: string;
  image: string;
  specifications: SpecificationType[];
}

interface ApartmentCardProps {
  data: ApartmentCardDataType;
}

export const ApartmentCard: React.FC<ApartmentCardProps> = ({ data }) => {
  return (
    <>
      <div className="card w-full h-full md:min-h-[660px]">
        <div className="text-center relative transition-transform duration-1000">
          <div className="lg:absolute top-0 bottom-0 right-0 left-0 px-[16px] py-[32px] sm:py-[64px] bg-white flex flex-col gap-[32px] items-center justify-between rounded-[6px] md:min-h-[660px]">
            <img
              src={data.image}
              alt="plan"
              loading="lazy"
              className="w-full object-contain max-h-[305px] aspect-[456/305]"
            />
            <p className="header_3 text-gold uppercase md:text-[40px]">
              {data.title}
            </p>
            <ul className="w-full max-w-[311px] sm:max-w-[368px] flex flex-col gap-[8px]">
              {data.specifications.map((spec) => (
                <li key={spec.title} className="flex justify-between">
                  <span className="text-grey body_base uppercase sm:text-[16px]">
                    {spec.title}
                  </span>
                  <span className="text-darkGrey body_base uppercase sm:text-[16px]">
                    {spec.value}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <div className="hidden lg:flex lg:absolute top-0 bottom-0 right-0 left-0 px-[16px] py-[32px] sm:p-[64px] bg-white flex-col gap-[32px] items-center rounded-[6px] md:min-h-[660px]">
            <img
              className="h-full w-full object-cover max-h-[430px]"
              src="/images/chairs.webp"
              alt="plan"
            />
            <Button variant="gold" className="text-white w-full !max-w-[100%]">
              Узнать подробнее
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};
