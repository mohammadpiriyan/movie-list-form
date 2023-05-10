import React, { useState } from "react";
import { useMovieStore } from "../context/MovieStore";

const Modal = () => {
  const { openModal, setOpenModal, modalItem, setModalItem } = useMovieStore();
  return (
    <div
      className={`absolute w-screen h-screen backdrop-blur-sm flex justify-center items-center ${
        openModal ? "" : "hidden"
      }`}
    >
      <div className="bg-gray-200 p-6 px-10 flex flex-col rounded-md gap-4 w-[40rem] h-[20rem]">
        <div className="flex w-full justify-between">
          <p>توضیحات</p>
          <button
            className="text-gray-400"
            onClick={() => {
              setOpenModal(false);
              setModalItem({});
            }}
          >
            بستن ×
          </button>
        </div>
        <div className="border border-gray-600 p-4 rounded-md h-full">
          <p>{modalItem.about}</p>
        </div>
      </div>
    </div>
  );
};

export default Modal;
