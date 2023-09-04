import Polygon from "../assets/Polygon.png";

const PageHeading = ({ heading }) => {
  return (
    <span className="flex items-center justify-center gap-4 w-fit">
      <span className="text-secondary uppercase text-[24px] font-playfair font-medium tracking-tight">
        {heading}
      </span>
      <span className="flex items-center justify-center">
        <span className="w-[111px] h-1 bg-secondary" />
        <img src={Polygon} alt="poly" className="w-5 -ml-1" />
      </span>
    </span>
  );
};

export default PageHeading;
