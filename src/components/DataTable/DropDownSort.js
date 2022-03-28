import React from "react";

export default function DropDownSort({ name, value, handleChange }) {
  return (
      <select
        className="flex flex-row justify-between items-center focus:border-indigo-400 bg-slate-100 rounded border-gray-300 text-violet-900  py-3 pl-3 pr-16 font-normal text-sm"
        name={name}
        value={value}
        onChange={handleChange}
      >
        <option value="recent">Sort by Most recent</option>
        <option value="lime">Lime</option>
      </select>
  );
}
