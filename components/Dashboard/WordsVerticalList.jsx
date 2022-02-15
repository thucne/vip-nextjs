import React, { useState } from 'react'
import NewWords from './NewWords';
import WordsList from './WordsList';

/**
* @author
* @function WordsVerticalList
**/

const WordsVerticalList = (props) => {
    const [hover, setHover] = useState('');

    return (
        <div className='flex flex-col h-full mx-0 p-3 pt-7'>
            <h1 className="font-bold text-base text-[25px] mb-5">
                Public words{' '}
                {
                    hover.length > 0 && <span className='text-emerald-400 px-2 border border-emerald-400 rounded-md'>Go to {hover} &rarr;</span>
                }
            </h1>
            <div className='flex md:basis-1/2 rounded-[10px] bg-white shadow-md border' style={{
            }}>
                <NewWords hover={hover} setHover={setHover} />
            </div>
            <div className='flex basis-1/2'>
                <WordsList />
            </div>
        </div>
    )
}

export default WordsVerticalList;