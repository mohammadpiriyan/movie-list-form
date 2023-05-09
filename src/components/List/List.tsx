import React from "react";
import { useMovieStore } from "../context/MovieStore";
import { toast } from "react-toastify";

const List = () => {
  // add context state
  const { state, dispatch, editItem, setEditItem, onEdit, setOnEdit } =
    useMovieStore();

  return (
    <div className="w-screen p-8 bg-[#595959]">
      <table className="w-full table-fixed text-center text-white">
        <thead className="divide-y divide-red-700">
          <tr>
            <th>ردیف</th>
            <th>نام فیلم</th>
            <th>کارگردان</th>
            <th>ژانرفیلم</th>
            <th>سال ساخت</th>
            <th>توضیحات</th>
            <th>ویرایش</th>
            <th>حذف</th>
          </tr>
        </thead>

        <tbody>
          {state.map((item, index) => {
            // console.log(item);
            return (
              <tr className="" key={index}>
                <td className="p-2">{index + 1}</td>
                <td className="p-2">{item.name}</td>
                <td className="p-2">{item.director}</td>
                <td className="p-2">{item.genre}</td>
                <td className="p-2">{item.year}</td>
                <td className="p-2">
                  <button className="border hover:bg-sky-500 border-sky-600 rounded-md p-2 px-4">
                    توضیحات
                  </button>
                </td>
                <td className="p-2">
                  <button
                    onClick={() => {
                      dispatch({ type: "EDIT_LIST", payload: item });
                      setOnEdit(true);
                    }}
                    className="border hover:bg-emerald-500 border-emerald-600 rounded-md p-2 px-4"
                  >
                    ویرایش
                  </button>
                </td>
                <td className="p-2">
                  <button
                    className="border hover:bg-rose-500 border-rose-600 rounded-md p-2 px-4"
                    onClick={() => {
                      dispatch({
                        type: "REMOVE_FROM_LIST",
                        payload: item,
                      });
                      toast.error("با موفقیت حذف شد!");
                    }}
                  >
                    حذف
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default List;
