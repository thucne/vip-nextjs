import React, { useEffect, useState } from "react";

import useSWR from 'swr';
import axios from 'axios';
import { API } from '@config';

import Image from 'next/image';

/**
 * @author
 * @function NewWords
 **/

const fetcher = (...args) => axios(...args).then((res) => res.data);

const NewWords = ({ hover, setHover }) => {

  const { data, error } = useSWR(`${API}/api/vips?populate=*`, fetcher);

  const vips = data?.data?.length ? data.data : [];

  return (
    <div className="w-full p-2">
      <div className="flex items-stretch gap-2 overflow-auto">
        {vips?.length > 0 && vips.map((vip, index) => {

          const vipName = vip.attributes.vip || '';
          const pronounce = vip.attributes.pronounce;
          const thumbnail = vip.attributes.illustration.data.attributes.formats.thumbnail.url;
          const splittedVipName = vipName.split(" ");
          let firstExample = vip.attributes.examples[0];

          splittedVipName.forEach((word, index) => {
            firstExample = firstExample.replace(word, `<span class="font-bold underline underline-offset-1">${word}</span>`)
          });

          return <EachWord
            key={`render-public-vip-${index}`}
            thumbnail={thumbnail}
            vipName={vipName}
            pronounce={pronounce}
            firstExample={firstExample}
            hover={hover}
            setHover={setHover}
          />
        })}
      </div>
    </div>
  );
};

const EachWord = ({ thumbnail, vipName, pronounce, firstExample, hover, setHover }) => {

  return <div
    className="rounded-[8px] cursor-pointer border border-transparent hover:border-gray-200 hover:brightness-75	 p-2 noselect"
    style={{ width: 'calc(150px + 1rem)', maxWidth: 'calc(150px + 1rem)' }}
    onMouseEnter={() => setHover(vipName)}
    onMouseLeave={() => setHover('')}
  >
    <div className="relative h-[150px] w-full bg-[#E9E5D6] rounded-[5px]">
      <Image
        src={thumbnail || 'https://img.upxi.me/wL7S9u'}
        layout="fill"
        alt={vipName}
        objectFit="contain"
      />
    </div>
    <div>
      <h3 className="text-center text-[27px] font-bold text-gray-800 w-[150px] break-words">{vipName}</h3>
    </div>
    <div>
      <h3 className="text-center text-[15px] font-semibold text-gray-800 w-[150px] break-words">{pronounce}</h3>
    </div>
    <div>
      <p className="text-center text-[13px] text-gray-800 mt-2 max-h-full overflow-auto prose w-[150px] break-words"
        dangerouslySetInnerHTML={{ __html: `${firstExample}` }}
      >
      </p>
    </div>
  </div>
}

export default NewWords;
