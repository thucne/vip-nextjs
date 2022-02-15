import React from 'react'
import NewWords from './NewWords';
import WordsList from './WordsList';

/**
* @author
* @function WordsVerticalList
**/

const WordsVerticalList = (props) => {
    return (
        <div className='flex flex-col h-full mx-0 p-3 pt-7'>
            <h1 className="font-bold text-base text-[25px] mb-5">
                Public words
            </h1>
            <div className='flex md:basis-1/2 rounded-md bg-white shadow-md' style={{
            }}>
                <NewWords />
            </div>
            <div className='flex basis-1/2'>
                <WordsList />
            </div>
        </div>
    )
}

export default WordsVerticalList;