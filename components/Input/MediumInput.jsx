import React from 'react'

/**
* @author
* @function MediumInput
**/

 const MediumInput = ({name, inputRef}) => {
  return(
    <div>
         <input 
         ref={inputRef}
         className='w-[300px] border-[1px] border-gray-600 p-2 rounded-full outline-none mb-5' placeholder={name}/>
    </div>
   )
  }
  export default MediumInput;