import React, { useState, useEffect } from "react";
import { useMovieStore } from "../context/MovieStore";
import { v4 as uuidv4 } from "uuid";
import * as Yup from "yup";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Form = () => {
  // add context state
  const {
    _,
    dispatch,
    newItem,
    setNewItem,
    editItem,
    setEditItem,
    onEdit,
    setOnEdit,
    filterInput,
    setFilterInput,
  } = useMovieStore();

  // --------------------------------------------------------------------

  const resetForm = () => {
    setNewItem({
      name: "",
      director: "",
      genre: "",
      year: "",
      about: "",
    });
    setOnEdit(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationSchema = Yup.object().shape({
      about: Yup.string().required("توضیحات الزامی است."),
      year: Yup.string().required("سال تولید الزامی است."),
      genre: Yup.string().required("ژانر فیلم الزامی است."),
      director: Yup.string().required("کارگردان الزامی است."),
      name: Yup.string()
        .required("نام فیلم الزامی است.")
        .min(5, "حداقل باید ۵ کاراکتر داشته باشد."),
    });

    try {
      if (onEdit == false) {
        await validationSchema.validate(newItem);
        toast.success("با موفقیت ثبت شد!");
        const newItemWithId = { ...newItem, id: uuidv4() };
        dispatch({ type: "ADD_TO_LIST", payload: newItemWithId });
        resetForm();
      } else {
        dispatch({ type: "IS_EDIT_LIST", payload: newItem });
        setOnEdit(false);
        toast.success("با موفقیت ویرایش شد!");
      }
    } catch (error) {
      toast.warning(`${error.errors}`);
    }
  };

  useEffect(() => {
    if (onEdit == true) {
      setNewItem({
        name: editItem.name,
        director: editItem.director,
        genre: editItem.genre,
        year: editItem.year,
        about: editItem.about,
      });
    } else {
      setNewItem({
        name: "",
        director: "",
        genre: "",
        year: "",
        about: "",
      });
    }
  }, [onEdit]);

  // ===========================\\\\\\====>FormBody<====//////===================================

  return (
    <div className="w-screen p-6 bg-[#515050]">
      <form onSubmit={handleSubmit}>
        <div className="flex gap-4 xxsm:flex-col">
          <div className="w-[30%] xxsm:w-full flex flex-col gap-9 xxsm:gap-3 xxsm:text-sm">
            <div className="flex flex-col gap-2">
              <div className="flex gap-2">
                <div className="bg-[#f6c90e] p-[0.2rem]"></div>
                <label className="text-white">نام فیلم</label>
              </div>
              <input
                className="xxsm:p-1 bg-transparent border border-[#757474] rounded-lg p-2 hover:border-[#f6c90e] focus:border-[#f6c90e] focus:outline-none text-white"
                type="text"
                name="name-input"
                value={newItem.name}
                placeholder="نام فیلم را بنویسید"
                onChange={(e) => {
                  setNewItem({ ...newItem, name: e.target.value });
                }}
              />
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex gap-2">
                <div className="bg-[#f6c90e] p-[0.2rem]"></div>
                <label className="text-white">کارگردان</label>
              </div>
              <input
                className="xxsm:p-1 bg-transparent border rounded-lg p-2 border-[#757474] hover:border-[#f6c90e] focus:border-[#f6c90e] focus:outline-none text-white"
                type="text"
                value={newItem.director}
                name="director-input"
                placeholder="نام کارگردان را بنویسید"
                onChange={(e) => {
                  setNewItem({ ...newItem, director: e.target.value });
                }}
              />
            </div>
          </div>

          <div className="w-[30%] xxsm:w-full flex flex-col gap-9 xxsm:gap-3 xxsm:text-sm">
            <div className="flex flex-col gap-2">
              <div className="flex gap-2">
                <div className="bg-[#f6c90e] p-[0.2rem]"></div>
                <label className="text-white">ژانر فیلم</label>
              </div>
              <select
                onChange={(e) => {
                  setNewItem({ ...newItem, genre: e.target.value });
                }}
                name="genre-input"
                className="xxsm:p-1 bg-transparent border border-[#757474] rounded-lg p-2 hover:border-[#f6c90e]  text-white focus:border-[#f6c90e] focus:outline-none text-white"
              >
                <option value="وحشت" className="bg-[#515050] p-1">
                  وحشت / هیجانی
                </option>
                <option value="اکشن" className="bg-[#515050] p-1">
                  اکشن
                </option>
                <option value="جنایی" className="bg-[#515050] p-1">
                  جنایی
                </option>
                <option value="درام" className="bg-[#515050] p-1">
                  درام
                </option>
                <option value="تاریخی" className="bg-[#515050] p-1">
                  تاریخی
                </option>
                <option value="اجتماعی" className="bg-[#515050] p-1">
                  اجتماعی
                </option>
              </select>
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex gap-2">
                <div className="bg-[#f6c90e] p-[0.2rem]"></div>
                <label className="text-white">سال تولید</label>
              </div>
              <input
                className="xxsm:p-1 bg-transparent border border-[#757474] rounded-lg p-2 hover:border-[#f6c90e] focus:border-[#f6c90e] focus:outline-none text-white"
                name="year-input"
                type="text"
                value={newItem.year}
                placeholder="سال ساخت فیلم را بنویسید"
                onChange={(e) => {
                  setNewItem({ ...newItem, year: e.target.value });
                }}
              />
            </div>
          </div>

          <div className="w-[30%] xxsm:w-full flex flex-col gap-6 xxsm:gap-3 xxsm:text-sm">
            <div className="flex flex-col gap-2">
              <div className="flex gap-2">
                <div className="bg-[#f6c90e] p-[0.2rem]"></div>
                <label className="text-white">توضیحات</label>
              </div>
              <textarea
                className="bg-transparent border rounded-lg p-2 xxsm:p-1 border-[#757474] hover:border-[#f6c90e] focus:border-[#f6c90e] focus:outline-none text-white"
                name="about-input"
                cols="30"
                rows="3"
                value={newItem.about}
                placeholder="توضیحات درباره فیلم"
                onChange={(e) => {
                  setNewItem({ ...newItem, about: e.target.value });
                }}
              ></textarea>
            </div>
            <div className="flex gap-4">
              <button className="p-2 px-8 text-[#515050] bg-[#f6c90e] hover:bg-[#ffe664] rounded-lg">
                {onEdit == true ? "ویرایش" : "ذخیره"}
              </button>
              <button
                type="button"
                onClick={resetForm}
                className="p-2 px-8 text-white bg-transparent border border-[#757474] hover:bg-[#ffe664] hover:text-[#515050] hover:border-none rounded-lg"
              >
                انصراف
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Form;
