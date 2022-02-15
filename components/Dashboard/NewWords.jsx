import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

/**
 * @author
 * @function NewWords
 **/

var dummnyData = [
  {
    Vip: "outlet",
    Pronouce: "/ˈaʊt.let/",
  },
  {
    Vip: "outlet",
    Pronouce: "/ˈaʊt.let/",
  },
  {
    Vip: "outlet",
    Pronouce: "/ˈaʊt.let/",
  },
  {
    Vip: "outlet",
    Pronouce: "/ˈaʊt.let/",
  },
];
const NewWords = (props) => {
  var settings = {
    className: "slider variable-width",
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    variableWidth: true,
    responsive: [
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="w-full p-5">
      <h1 className="font-bold text-base md:text-[1.6rem] text-[#655D8A] mb-5">
        Recent Words
      </h1>

      <Slider {...settings}>
        {dummnyData?.map((word, index) => (
          <div
            key={`${word.Vip}-${index}`}
            className="h-[200px] bg-[#E9E5D6] "
            style={{ width: 175 }}
          >
            <div className=" h-full flex flex-col justify-center items-center ">
              <div>
                <h1>{word.Vip}</h1>
              </div>
              <div>
                <span>{word.Pronouce}</span>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default NewWords;
