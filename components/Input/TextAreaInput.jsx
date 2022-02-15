import React from 'react'

/**
* @author
* @function TextAreaInput
**/

 const TextAreaInput = ({name,inputRef}) => {
  return(
    <div>
        <textarea 
        rows={4}
         ref={inputRef}
         className='w-[300px] border-[1px] border-gray-600 p-2 rounded-lg outline-none mb-5' placeholder={name}/>
    </div>
   )
  }

  export default TextAreaInput;
