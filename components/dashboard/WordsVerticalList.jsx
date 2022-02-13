import React from 'react'
import NewWords from './NewWords';

/**
* @author
* @function WordsVerticalList
**/

 const WordsVerticalList = (props) => {
  return(
    <div className='flex flex-col h-full ml-10'>
        <div className='flex basis-1/2'>
            <NewWords/>
        </div>

        <div className='flex basis-1/2'>
            hello
        </div>
    </div>
   )
  }

  export default WordsVerticalList;
