import React from 'react'
import NewWords from './NewWords';
import WordsList from './WordsList';

/**
* @author
* @function WordsVerticalList
**/

 const WordsVerticalList = (props) => {
  return(
    <div className='flex flex-col h-full ml-10'>
        <div className='flex  md:basis-1/2'>
            <NewWords/>
        </div>

        <div className='flex basis-1/2'>
            <WordsList/>
        </div>
    </div>
   )
  }

  export default WordsVerticalList;
