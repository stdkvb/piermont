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
    <div className="container py-[32px] sm:py-[64px] bg-white flex flex-col gap-[32px] items-center">
      <img src="/images/plan1.png" alt="plan" />
      <p className="header_4 text-gold uppercase">{data.title}</p>
      <ul className="w-full max-w-[311px] sm:max-w-[368px] flex flex-col gap-[10px]">
        {data.specifications.map((spec) => (
          <li key={spec.title} className="flex justify-between">
            <span className="text-grey body_base uppercase">{spec.title}</span>
            <span className="text-darkGrey body_base uppercase">
              {spec.value}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};
