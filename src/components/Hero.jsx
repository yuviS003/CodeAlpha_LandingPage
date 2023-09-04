import HeroBG from "../assets/HeroBG.png";
import { BsArrowRight } from "react-icons/bs";

const Hero = () => {
  return (
    <div className="relative h-[calc(100vh-110px)]">
      {/* Background Image with Black Overlay */}
      <div
        className="relative bg-cover bg-center h-full"
        style={{
          backgroundImage: `url(${HeroBG})`,
        }}
      >
        {/* Black Overlay */}
        <div className="absolute inset-0 bg-black opacity-50" />

        {/* Text Centered */}
        <div className="relative mx-auto w-[75%] flex flex-col justify-center items-center h-full text-center gap-16">
          <span className="text-tertiary uppercase font-playfair text-3xl font-medium text-center">
            get luxury and comfort
          </span>
          <span className="text-tertiary uppercase font-playfair text-[56px] font-medium text-center">
            Welcome To The Place Where Luxury Meets Affordability
          </span>
          <span className="font-poppins text-tertiary border border-tertiary px-5 py-3 flex items-center justify-center gap-4 cursor-pointer hover:bg-tertiary hover:text-secondary active:bg-tertiary active:text-secondary transition duration-300">
            Explore Now <BsArrowRight />
          </span>
        </div>
      </div>

      {/* Div at the Bottom Center */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 -mb-14">
        <div className="bg-secondary py-7 px-14 flex items-center justify-center gap-12 font-poppins">
          <div className="flex flex-col gap-5">
            <span className="text-primary text-[16px]">Check in</span>
            <input
              type="date"
              className="bg-transparent text-primary text-[20px] w-[200px]"
            />
          </div>
          <div className="flex flex-col gap-5">
            <span className="text-primary text-[16px]">Check out</span>
            <input
              type="date"
              className="bg-transparent text-primary text-[20px] w-[200px]"
            />
          </div>
          <div className="flex flex-col gap-5">
            <span className="text-primary text-[16px]">Guest</span>
            <select className="bg-transparent text-primary text-[20px] w-[200px]">
              <option value="1" className="text-black">1</option>
              <option value="2" className="text-black">2</option>
              <option value="3" className="text-black">3</option>
              <option value="4" className="text-black">4</option>
              <option value="5" className="text-black">5</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
