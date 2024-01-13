import React from "react";

interface IToggleProps {
  toggle: (status: boolean) => void;
}

export default function Toggle({ toggle }: IToggleProps) {
  return (
    <label className="relative inline-flex items-center cursor-pointer">
      <input
        type="checkbox"
        className="sr-only peer"
        onChange={(e) => {
          toggle(e.target.checked);
        }}
      />
      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-gray-400 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-gray-500 after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all  peer-checked:bg-gray-700"></div>
      <span className="ms-3 text-sm font-medium text-gray-900">Select All</span>
    </label>
  );
}
