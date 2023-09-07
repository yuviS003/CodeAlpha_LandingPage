import { images } from "../../constants";
import "./AboutUs.css";

const AboutUs = () => (
  <div
    className="app__aboutus app__bg flex__center section__padding"
    id="about"
  >
    <div className="app__aboutus-overlay flex__center">
      <img src={images.G} alt="g" />
    </div>
    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        <h1 className="headtext__cormorant">About us</h1>
        <img src={images.spoon} alt="spoon" className="spoon__image" />
        <p className="p__opensans">
          Experience the passion and creativity of our culinary team, dedicated
          to crafting unforgettable dining experiences for our guests.
        </p>
        <button type="button" className="custom__button">
          Know More
        </button>
      </div>
      <div className="app__aboutus-content_knife">
        <img src={images.knife} alt="knife" />
      </div>
      <div className="app__aboutus-content_history">
        <h1 className="headtext__cormorant">Our History</h1>
        <img src={images.spoon} alt="spoon" className="spoon__image" />
        <p className="p__opensans">
          Our restaurant has been a beloved local institution for decades,
          serving up authentic and delicious cuisine inspired by the rich
          cultural heritage of our region.
        </p>
        <button type="button" className="custom__button">
          Know More
        </button>
      </div>
    </div>
  </div>
);

export default AboutUs;
