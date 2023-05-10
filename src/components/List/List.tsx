import React from "react";
import { useMovieStore } from "../context/MovieStore";
import { toast } from "react-toastify";

const List = () => {
  // add context state
  const {
    state,
    dispatch,
    editItem,
    setEditItem,
    onEdit,
    setOnEdit,
    openModal,
    setOpenModal,
    modalItem,
    setModalItem,
    filterInput,
    setFilterInput,
    searchInput,
    setSearchInput,
  } = useMovieStore();

  return (
    <div className="w-screen p-8 xxsm:p-6 bg-[#595959]">
      <div className="flex gap-3 mb-6">
        <div className="bg-[#f6c90e] p-[0.24rem]"></div>
        <p className="text-white font-bold">لیست فیلم</p>
      </div>
      <table className="w-full table-fixed text-center text-white">
        <thead className="p-8 xxsm:p-4 border-b-2">
          <tr className="xxsm:text-xs xsm:text-sm">
            <th className="xxsm:text-xs xsm:text-sm">ردیف</th>
            <th className="xxsm:text-xs xsm:text-sm">نام فیلم</th>
            <th className="xxsm:hidden xsm:text-sm">کارگردان</th>
            <th className="xxsm:text-xs xsm:text-sm">ژانرفیلم</th>
            <th className="xxsm:text-xs xsm:text-sm">سال ساخت</th>
            <th className="xxsm:text-xs xsm:text-sm">توضیحات</th>
            <th className="xxsm:hidden xsm:text-sm">ویرایش</th>
            <th className="xxsm:text-xs xsm:text-sm">حذف</th>
          </tr>
        </thead>

        <tbody>
          {(filterInput === "" && searchInput === "") ||
          (filterInput === "همه" && searchInput === "")
            ? state.map((item, index) => {
                // console.log(item);
                return (
                  <tr className="xsm:text-sm " key={index}>
                    <td className="p-2 xxsm:p-0 xxsm:text-xs ">{index + 1}</td>
                    <td className="p-2 xxsm:p-0 xxsm:text-xs">{item.name}</td>
                    <td className="p-2 xxsm:text-xs xxsm:hidden">
                      {item.director}
                    </td>
                    <td className="p-2 xxsm:text-xs">{item.genre}</td>
                    <td className="p-2 xxsm:text-xs">{item.year}</td>
                    <td className="p-2 xsm:p-0 xxsm:p-0 xxsm:text-xs">
                      <button
                        onClick={() => {
                          setModalItem(item);
                          setOpenModal(true);
                        }}
                        className="border xsm:p-2 hover:bg-sky-500 xxsm:hover:bg-sky-300 border-sky-600 xxsm:border-none rounded-md p-2 px-4 xxsm:p-1 xxsm:px-2 xxsm:text-xs "
                      >
                        <p className="xxsm:hidden">توضیحات</p>
                        <img
                          src="./src/images/icon/about.svg"
                          alt=""
                          className="w-4 hidden xxsm:block"
                        />
                      </button>
                    </td>
                    <td className="p-2 xsm:p-0 xxsm:hidden">
                      <button
                        onClick={() => {
                          dispatch({ type: "EDIT_LIST", payload: item });
                          setOnEdit(true);
                        }}
                        className="border xsm:p-2 hover:bg-emerald-500 border-emerald-600 rounded-md p-2 px-4 "
                      >
                        ویرایش
                      </button>
                    </td>
                    <td className="p-2 xsm:p-0 xxsm:p-0 xxsm:text-xs">
                      <button
                        className="border xsm:p-2 hover:bg-rose-500 xxsm:hover:bg-rose-300 border-rose-600 xxsm:border-none rounded-md p-2 px-4 xxsm:p-1 xxsm:px-2 xxsm:text-xs"
                        onClick={() => {
                          dispatch({
                            type: "REMOVE_FROM_LIST",
                            payload: item,
                          });
                          toast.error("با موفقیت حذف شد!");
                        }}
                      >
                        <p className="xxsm:hidden">حذف</p>
                        <img
                          src="./src/images/icon/delete.svg"
                          alt=""
                          className="w-4 hidden xxsm:block"
                        />
                      </button>
                    </td>
                  </tr>
                );
              })
            : searchInput === ""
            ? state.map((item, index) => {
                if (item.genre === filterInput) {
                  return (
                    <tr className="xsm:text-sm " key={index}>
                      <td className="p-2 xxsm:p-0 xxsm:text-xs ">
                        {index + 1}
                      </td>
                      <td className="p-2 xxsm:p-0 xxsm:text-xs">{item.name}</td>
                      <td className="p-2 xxsm:text-xs xxsm:hidden">
                        {item.director}
                      </td>
                      <td className="p-2 xxsm:text-xs">{item.genre}</td>
                      <td className="p-2 xxsm:text-xs">{item.year}</td>
                      <td className="p-2 xsm:p-0 xxsm:p-0 xxsm:text-xs">
                        <button
                          onClick={() => {
                            setModalItem(item);
                            setOpenModal(true);
                          }}
                          className="border xsm:p-2 hover:bg-sky-500 xxsm:hover:bg-sky-300 border-sky-600 xxsm:border-none rounded-md p-2 px-4 xxsm:p-1 xxsm:px-2 xxsm:text-xs "
                        >
                          <p className="xxsm:hidden">توضیحات</p>
                          <img
                            src="./src/images/icon/about.svg"
                            alt=""
                            className="w-4 hidden xxsm:block"
                          />
                        </button>
                      </td>
                      <td className="p-2 xsm:p-0 xxsm:hidden">
                        <button
                          onClick={() => {
                            dispatch({ type: "EDIT_LIST", payload: item });
                            setOnEdit(true);
                          }}
                          className="border xsm:p-2 hover:bg-emerald-500 border-emerald-600 rounded-md p-2 px-4 "
                        >
                          ویرایش
                        </button>
                      </td>
                      <td className="p-2 xsm:p-0 xxsm:p-0 xxsm:text-xs">
                        <button
                          className="border xsm:p-2 hover:bg-rose-500 xxsm:hover:bg-rose-300 border-rose-600 xxsm:border-none rounded-md p-2 px-4 xxsm:p-1 xxsm:px-2 xxsm:text-xs"
                          onClick={() => {
                            dispatch({
                              type: "REMOVE_FROM_LIST",
                              payload: item,
                            });
                            toast.error("با موفقیت حذف شد!");
                          }}
                        >
                          <p className="xxsm:hidden">حذف</p>
                          <img
                            src="./src/images/icon/delete.svg"
                            alt=""
                            className="w-4 hidden xxsm:block"
                          />
                        </button>
                      </td>
                    </tr>
                  );
                }
              })
            : searchInput !== ""
            ? state.map((item, index) => {
                if (
                  item.name.includes(searchInput) ||
                  item.director.includes(searchInput) ||
                  item.genre.includes(searchInput) ||
                  item.year.includes(searchInput)
                ) {
                  return (
                    <tr className="xsm:text-sm " key={index}>
                      <td className="p-2 xxsm:p-0 xxsm:text-xs ">
                        {index + 1}
                      </td>
                      <td className="p-2 xxsm:p-0 xxsm:text-xs">{item.name}</td>
                      <td className="p-2 xxsm:text-xs xxsm:hidden">
                        {item.director}
                      </td>
                      <td className="p-2 xxsm:text-xs">{item.genre}</td>
                      <td className="p-2 xxsm:text-xs">{item.year}</td>
                      <td className="p-2 xsm:p-0 xxsm:p-0 xxsm:text-xs">
                        <button
                          onClick={() => {
                            setModalItem(item);
                            setOpenModal(true);
                          }}
                          className="border xsm:p-2 hover:bg-sky-500 xxsm:hover:bg-sky-300 border-sky-600 xxsm:border-none rounded-md p-2 px-4 xxsm:p-1 xxsm:px-2 xxsm:text-xs "
                        >
                          <p className="xxsm:hidden">توضیحات</p>
                          <img
                            src="./src/images/icon/about.svg"
                            alt=""
                            className="w-4 hidden xxsm:block"
                          />
                        </button>
                      </td>
                      <td className="p-2 xsm:p-0 xxsm:hidden">
                        <button
                          onClick={() => {
                            dispatch({ type: "EDIT_LIST", payload: item });
                            setOnEdit(true);
                          }}
                          className="border xsm:p-2 hover:bg-emerald-500 border-emerald-600 rounded-md p-2 px-4 "
                        >
                          ویرایش
                        </button>
                      </td>
                      <td className="p-2 xsm:p-0 xxsm:p-0 xxsm:text-xs">
                        <button
                          className="border xsm:p-2 hover:bg-rose-500 xxsm:hover:bg-rose-300 border-rose-600 xxsm:border-none rounded-md p-2 px-4 xxsm:p-1 xxsm:px-2 xxsm:text-xs"
                          onClick={() => {
                            dispatch({
                              type: "REMOVE_FROM_LIST",
                              payload: item,
                            });
                            toast.error("با موفقیت حذف شد!");
                          }}
                        >
                          <p className="xxsm:hidden">حذف</p>
                          <img
                            src="./src/images/icon/delete.svg"
                            alt=""
                            className="w-4 hidden xxsm:block"
                          />
                        </button>
                      </td>
                    </tr>
                  );
                }
              })
            : console.log("reza")}
        </tbody>
      </table>
    </div>
  );
};

export default List;
