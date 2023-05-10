import React from "react";

const FilterNav = () => {
  return (
    <div className="w-screen px-6 pt-4 xxsm:hidden flex justify-between">
      <input
        className="p-1 px-4  w-[30%] bg-[#515050] border border-[#515050] hover:border-[#f6c90e] focus:border-[#f6c90e] focus:outline-none  rounded-xl  text-[#f6c90e] "
        type="text"
        placeholder="از من بپرسید :)"
      />

      <select
        name="genre-input"
        className="xxsm:p-1 border bg-[#515050] border-[#757474] rounded-lg p-2 hover:border-[#f6c90e]  text-white focus:border-[#f6c90e] focus:outline-none text-white"
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
  );
};

export default FilterNav;
