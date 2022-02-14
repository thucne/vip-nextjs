import React from "react";
import { AiOutlinePlus } from "react-icons/ai";
/**
 * @author
 * @function MediumInput
 **/

const ImageInput = ({ name, setImageData }) => {

    const handleUploadImage = (e) => {
        if (e.target.files && e.target.files[0]) {
          let reader = new FileReader();
    
          reader.onload = function (e) {
            setImageData(e.target.result);
          };
          reader.readAsDataURL(e.target.files[0]);
        }
      };
  return (
    <div className="flex justify-center">
      <div className=" cursor-pointer flex items-center justify-center">
        <label htmlFor="photo-input" className="cursor-pointer">
          <AiOutlinePlus
            fontSize={30}
            className="text-stone-400 hover:text-stone-600 ease-in duration-150"
          ></AiOutlinePlus>
          <input
            id="photo-input"
            type="file"
            hidden
            onChange={handleUploadImage}
          />
        </label>
      </div>
    </div>
  );
};
export default ImageInput;
