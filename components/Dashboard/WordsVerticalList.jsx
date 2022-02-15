import React from 'react'
import NewWords from './NewWords';

/**
* @author
* @function WordsVerticalList
**/

 const WordsVerticalList = (props) => {
  return(
    <div className='flex flex-col h-full ml-10'>
        <div className='flex w-full basis-1/2'>
            <NewWords/>
        </div>

        <div className='flex basis-1/2'>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis minus perferendis officiis ad laudantium voluptatibus eum, sint earum veniam numquam maiores autem? Autem, a atque. Placeat vero ullam soluta odio.
        </div>
    </div>
   )
  }

  export default WordsVerticalList;