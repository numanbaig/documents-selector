import React from "react";
import SearchIcon from "../Icons/SearchIcon";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}
export default function Input(props: InputProps) {
  return (
    <div className="relative">
      <div className="absolute inset-y-0 start-4 flex items-center justify-center pointer-events-none">
        <SearchIcon />
      </div>
      <input
        {...props}
        type="text"
        name=""
        id=""
        className="input-primary"
        placeholder="Search"
      />
    </div>
  );
}
