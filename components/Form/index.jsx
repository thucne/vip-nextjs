import ImageInput from "@components/Input/ImageInput";
import MediumInput from "@components/Input/MediumInput";
import TextAreaInput from "@components/Input/TextAreaInput";
import Modal from "@components/Modal";
import React, { useRef, useState } from "react";

/**
 * @author
 * @function FormModal
 **/

const FormModal = ({ formModalRef }) => {
  const vipInputRef = useRef(null);
  const exambleInputRef = useRef(null);
  const pronounceInputRef = useRef(null);
  const synonymInputRef = useRef(null);
 const imageInputRef = useRef(null)
const [imageData,setImageData] =useState("")

  const handleSubmit = (e) => {
    e.preventDefault();
    // Get value of input : inputRef.current.value
    console.log({imageData});
  };
  return (
    <Modal childRef={formModalRef}>
      <div className="mb-[100px]">
        <h1 className="text-gray-600 font-bold text-2xl uppercase">
          Let Create your new word
        </h1>
      </div>

      <div className="p-5">
        <MediumInput name="Vip..." inputRef={vipInputRef} />
        <MediumInput name="Pronounce..." inputRef={pronounceInputRef} />
        <MediumInput name="Synonym..." inputRef={synonymInputRef} />

        <TextAreaInput name="Example..." inputRef={exambleInputRef}/>
        <ImageInput setImageData={setImageData}/>
      </div>
      <div className="mt-5">
        <button
          className="py-2 px-5 bg-[#2C3333] text-white    hover:drop-shadow-lg rounded-full"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </div>
    </Modal>
  );
};

export default FormModal;
