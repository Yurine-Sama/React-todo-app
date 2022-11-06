import React, { useState } from "react";
import { db } from "../utils/firebase";
import { collection, addDoc } from "firebase/firestore";

function From() {
  const [title, setTitle] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (title !== "") {
      await addDoc(collection(db, "todos"), {
        title,
        completed: false,
      });
    } else {
      alert("you need to add some task!!");
    }
    setTitle("");
  };
  return (
    <div className="relative">
      <div className="flex w-96 p-0 pb-64 items-center justify-center">
        <div className="shrink-0 absolute w-[650px] shadow-xl rounded m-0 bg-white pt-2.5 py-5 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <form onSubmit={handleSubmit}>
            <h1 className="text-gray-800 pt-3 text-center font-bold text-2xl mt-2">
              Todo Manager
            </h1>
            <div className="flex items-center justify-center pt-5 ">
              <input
                type="text"
                className="flex w-[500px] border-b focus:outline-none "
                placeholder="eg.create some react app"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div className="flex items-center justify-center pt-5  ">
              <button className="bg-slate-800 text-white p-2 rounded-xl hover:bg-slate-700">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default From;
