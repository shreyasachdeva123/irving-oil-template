import React, { useState } from "react";
import { StrictMode } from "react";
import ReactDOM from "react-dom";
import Carousel from "./Carousel";
import HeaderTop from "./HeaderTop";
import Navbar from "./Navbar";
import sliderImg1 from "./artwork/photos/pg8-2.JPG";
import sliderImg2 from "./artwork/photos/_81I2765.JPG";
import PetrolPumpImg from "./artwork/photos/petrolpump.jpg";
import ServerImg from "./artwork/photos/serverimg.png";
import DriverImg from "./artwork/photos/driverimg.JPG";
import Cards from "./Cards";
import Promotions from "./Promotions";
import HappyKid from "./artwork/photos/HappyKid.png";
import handSanitizer from "./artwork/photos/office-250ml-hand-sanitizer-DSC_9306 (1).jpg";
import Ads from "./Ads";
import Footer from "./Footer";


function App() {

  const sliderImgArray = [
    {
      img: sliderImg1,
      para: "Good energy, today & tomorrow",
      btnText: "Read our 2020 report on sustainability"
    },
    {
      img: sliderImg2,
      para: "Order your home eating fuel online",
      btnText: "Order now"
    }
  ];

  const [currentImg, setCurrentImg] = useState(0);

  const cardImgs = [{
    img: PetrolPumpImg,
    altTag: "petrol pump",
    heading: "Find a really clean washroom at one of over 900 locations",
    para: "With so many locations to serve you, one of our ",
    colouredPara: "really clean Irving washrooms",
    para2: " and great service is never too far down the road.",
    button: "Find a location",
    button2: ""
  }, {
    img: ServerImg,
    altTag: "smiling server",
    heading: "Enjoy a homestyle meal at our Big Stop Restaurants",
    para: "A stop at the Irving Big Stop has been a family tradition in the maritimes for over 30 years, and we're proud to see that tradition grown throughout New England and Atlantic Canada and beyond.",
    button: "Find an Irving Big Stop",
    button2: "See our menu"
  }, {
    img: DriverImg,
    altTag: "driver",
    heading: "Ask for advice from our home heating experts",
    para: "Our fleet of Irving Energy drivers and technicians support our customers 24 hours a day 7 days a week with expert advice and service.",
    button: "Learn more about Irving Energy",
    button2: "Order fuel online"
  }];

  const promotionContent = [
    {
      img: HappyKid,
      altTag: "smiling kid",
      heading: "Every mile gets you closer to your next Reward",
      para: "Earn one Air Miles Reward Miles everytime you spend $20 dollars in-store or at the pump! Link your AIR MILES Collector Card to your Irving Energy home heating account to earn even faster.",
      button: "Sign up for an AIR MILES Collector Card",
      button2: "Learn how to earn AIR MILES Reward Miles even faster"
    }, {
      img: handSanitizer,
      altTag: "bottle of hand sanitizer",
      heading: "Irving Oil Hand Sanitizer",
      para: "During the COVID-19 pandemic, we acted quickly and created a line of Hand Sanitizer that comes in four different sizes, from 950ml down to a small 50ml that can fit easily in your pocket or purse.",
      button: "Where to buy",
      button2: "Learn more about how this project came together"
    }
  ];

  const footerNav1 = ["About Irving Oil", "Leadership", "History", "Operations", "Locations", "Careers"];
  const footerNav2 = ["Community", "Environment", "Health and Safety", "Media", "Emergencies", "Contact us"];
  const bottomNav = ["Legal", "Privacy", "Sitemap", "Terms of use"];

  return (
    <div className="bodyWrapper">
      <HeaderTop />
      <Navbar />
      <Carousel
        setCurrentImg={setCurrentImg}
        sliderImgArray={sliderImgArray}
        currentImg={currentImg}
      />
      <Cards cardImgs={cardImgs} />
      <Promotions promotionContent={promotionContent} />
      <Ads />
      <Footer footerNav1={footerNav1} footerNav2={footerNav2} bottomNav={bottomNav} />
    </div>
  );
}

ReactDOM.render(<StrictMode><App /></StrictMode>, document.getElementById("root"));

export default App;
