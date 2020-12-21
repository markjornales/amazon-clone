import React from "react";
import Product from "../components/Product";
import "../styles/home.css";
function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt="banner"
        />
        <div className="home__row">
          <Product
            id="1001"
            title="The lean startup: How Constant Innovation Creates Radically Successfull Businesses PaperBack"
            price={29.99}
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
            rating={4}
          />
          <Product
            id="1002"
            title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater,
Dough Hook and Whisk, 5 Litre Glass Bowl"
            price={239.0}
            rating={4}
            image="https://m.media-amazon.com/images/I/41FYkVPzrIL.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="1003"
            title="AmazonBasics 20 Pack AA High-Performance Alkaline Batteries, 10-Year Shelf Life, Easy to Open Value Pack"
            price={9.03}
            rating={2}
            image="https://m.media-amazon.com/images/I/71CjeIL3c5L._AC_SX679_.jpg"
          />
          <Product
            id="1004"
            title="Roku Streaming Stick+ | HD/4K/HDR Streaming Device with Long-range Wireless and Voice Remote with TV Controls"
            price={39}
            rating={3}
            image="https://images-na.ssl-images-amazon.com/images/I/41C4EsdONdL.jpg"
          />
          <Product
            id="1005"
            title="Samsung SSD 860 EVO 1TB 2.5 Inch SATA III Internal SSD (MZ-76E1T0B/AM)"
            price={99.99}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/41qR7C253KL.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="1006"
            title="DR. J Professional HI-04 Mini Projector Outdoor Movie Projector with 100Inch Projector Screen, 1080P Supported Compatible with TV Stick, Video Games, HDMI,USB,TF,VGA,AUX,AV [Latest Upgrade]"
            price={129.0}
            rating={3}
            image="https://m.media-amazon.com/images/I/718A7339wbL._AC_UY218_.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
