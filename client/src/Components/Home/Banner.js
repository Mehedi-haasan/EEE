import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useState, useEffect } from "react";

const Banner = () => {
  const [data, setData] = useState([])



  const fetchCategory = async () => {
    const response = await fetch(`http://localhost:8050/api/get/carousel`);
    const data = await response.json();
    setData(data.items)
  }

  useEffect(() => {
    fetchCategory();
  }, [])

  var settings = {
    // dots: true,
    infinite: true,
    autoplaySpeed: 5000,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
  };


  return (
    <div>
      
      <Slider {...settings}>
        
        {
          data.map((image) => {
            return <div className="relative focus:outline-none bg-white">
              <img className="w-full mx-auto h-[280px] focus:outline-none md:h-[650px]"
                src={image.image_url}
                alt=""
              />
            </div>
          })
        }
      </Slider>
    </div>
  );
};

export default Banner;
