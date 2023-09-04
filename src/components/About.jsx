import PageHeading from "./PageHeading";
import { BsArrowRight } from "react-icons/bs";
import AbtImg1 from "../assets/abt1.png";
import AbtImg2 from "../assets/abt2.png";

const About = () => {
  return (
    <div className="bg-primary pt-32 pb-16 px-20">
      <div className="flex w-full">
        <div className="w-1/2 h-full  flex flex-col justify-center py-20">
          <PageHeading heading={"about us"} />
          <span className="text-[40px] font-playfair font-medium text-black mt-5 mb-3">
            At Diamond Luxury Hotels
          </span>
          <span className="text-[20px] font-poppins text-black">
            Diamond Luxury Hotel offers opulent accommodations and world-class
            hospitality. With exquisite rooms, gourmet dining, and stunning
            amenities, it&apos;s the ultimate destination for a lavish and
            unforgettable getaway.
          </span>
          <div className="mt-20 bg-secondary py-3 px-4 flex items-center justify-center gap-2 text-primary cursor-pointer w-fit">
            Read More <BsArrowRight />
          </div>
        </div>
        <div className="w-1/2">
          <div className="relative w-full h-full">
            {/* Top-Right Image */}
            <img
              src={AbtImg1}
              alt="Image 1"
              className="absolute top-0 right-0 w-[55%] h-[90%] z-10"
            />

            {/* Bottom-Left Image (Overlaps) */}
            <img
              src={AbtImg2}
              alt="Image 2"
              className="absolute bottom-0 left-0 w-[50%] h-3/4 z-20"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
