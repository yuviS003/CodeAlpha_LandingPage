const Navbar = () => {
  return (
    <div className="bg-primary h-[110px] px-20 flex items-center justify-between">
      <span className="text-secondary font-playfair italic text-3xl font-medium tracking-tight">
        Diamond Luxury
      </span>
      <div className="flex items-center justify-center gap-16 font-poppins">
        {["Home", "About Us", "Our Services", "Blog", "Contact Us"].map(
          (label, i) => (
            <span
              className="text-black hover:text-secondary active:text-secondary transition duration-300 cursor-pointer"
              key={i}
            >
              {label}
            </span>
          )
        )}
        <div className="bg-secondary text-primary text-center py-3 px-4">
          Book Now
        </div>
      </div>
    </div>
  );
};

export default Navbar;
