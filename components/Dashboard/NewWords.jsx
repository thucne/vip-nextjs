import React, { useEffect, useState } from "react";
import Slider from "react-slick";

import useSWR from 'swr';
import axios from 'axios';
import { API } from '@config';

import Image from 'next/image';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

/**
 * @author
 * @function NewWords
 **/

const dummnyData = [
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

const fetcher = (...args) => axios(...args).then((res) => res.data);

const NewWords = (props) => {
  const { data, error } = useSWR(`${API}/api/vips?populate=*`, fetcher);

  const vips = data?.data?.length ? data.data : [];


  return (
    <div className="w-full p-2 pb-10">
      <Slider {...settings(vips?.length)}>
        {vips?.length > 0 && vips.map((vip, index) => {

          const vipName = vip.attributes.vip || '';
          const pronounce = vip.attributes.pronouce;
          const thumbnail = vip.attributes.illustration.data.attributes.formats.thumbnail.url;
          const englishFistMeaning = vip.attributes.meanings.english[0];
          const splittedVipName = vipName.split(" ");
          let firstExample = vip.attributes.examples[0];

          splittedVipName.forEach((word, index) => {
            firstExample = firstExample.replace(word, `<span class="italic underline underline-offset-1">${word}</span>`)
          });

          return (
            <div
              key={`render-public-vip-${index}`}
              className="h-[250px] sm:h-[270px] md:h-[290px] lg:h-[310px] rounded"
              style={{ width: 175 }}
            >
              <div className=" h-full flex flex-col justify-center items-center ">
                <div className="relative h-[150px] w-full bg-[#E9E5D6] rounded-lg">
                  <Image
                    src={thumbnail || 'https://img.upxi.me/wL7S9u'}
                    layout="fill"
                    alt={vip.attributes.vip}
                    objectFit="contain"
                  />
                </div>
                <div>
                  <h3 className="text-center text-[27px] font-bold text-gray-800">{vipName}</h3>
                </div>
                <div>
                  <h3 className="text-center text-[15px] font-semibold text-gray-800">{pronounce}</h3>
                </div>
                <div>
                  <p className="text-center text-[13px] text-gray-800 mt-2 max-h-full overflow-auto">{englishFistMeaning}</p>
                </div>
                <div>
                  <p className="text-center text-[13px] font-bold text-gray-800 mt-2 max-h-full overflow-auto prose"
                    dangerouslySetInnerHTML={{ __html: `${firstExample}` }}
                  >
                  </p>
                </div>
              </div>
            </div>
          )
        })}
      </Slider>
    </div>
  );
};

const settings = (count) => ({
  className: "slider variable-width rounded overflow-hidden",
  dots: true,
  infinite: count > 3,
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
        infinite: count > 2,
      },
    },
    {
      breakpoint: 900,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: count > 1,
      },
    },
  ],
});

export default NewWords;
