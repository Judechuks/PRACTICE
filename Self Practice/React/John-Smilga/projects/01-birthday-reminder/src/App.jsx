import React, { useState } from "react";
import { BsTrash } from "react-icons/bs";
import friends from "./components/friends";

export default function App() {
  const [birthday, setBirthday] = useState(friends);

  const currentDate = new Date().getDate();
  const currentMonth = new Date().getMonth() + 1; // index based from 0 to 11 (+1 => 1 to 12)
  const currentYear = new Date().getFullYear();

  const birthdayToday = birthday.filter((friend) => {
    return friend.dob.month === currentMonth && friend.dob.day === currentDate;
  });

  const removeItem = (id) => {
    setBirthday(birthdayToday.filter((item) => item.id !== id));
  };

  return (
    <main className="main grid gap-4 p-6 bg-white shadow">
      <p className="text-lg font-semibold">
        {birthdayToday.length} birthdays today{" "}
        <span className="text-sm float-right">
          {currentDate}-{currentMonth}-{currentYear}
        </span>
      </p>
      {birthdayToday.map((item) => {
        return (
          <article
            key={item.id}
            className="item w-full flex gap-4 items-center">
            <img
              className="w-12 h-12 rounded-full basis-fit"
              src={`${item.profilePic}`}
            />
            <div className="info basis-full">
              <h2 className="text-xl font-bold">{item.fullName}</h2>
              <h6 className="text-sm font-semibold text-zinc-700">
                {currentYear - item.dob.year} years
              </h6>
            </div>
            <div
              className="removeBtn text-right basis-fit"
              onClick={() => removeItem(item.id)}>
              <BsTrash></BsTrash>
            </div>
          </article>
        );
      })}
      <button type="button" className="btn" onClick={() => setBirthday([])}>
        Clear All
      </button>
    </main>
  );
}
