import React, { useState } from "react";
import { className } from "../utiles/classNames";

interface Iinput {
  type: React.HTMLInputTypeAttribute;
  placeholder: string;
  classname?: string;
  value?: string | number;
  onChange: (value: string | number) => void;
  validator?: (_: string) => boolean;
}

function Input({
  type,
  placeholder,
  classname,
  value,
  onChange,
  validator,
}: Iinput) {
  const [error, seterror] = useState("");
  console.log(error);

  const onchangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
    if (validator && !validator?.(event.target.value)) {
      seterror("it's not valid!");
      return
    } else {
      seterror("");
    }
    // if (validator && !validator?.(event.target.value)) return;
    if (onChange) onChange(event.target.value);
  };

  return (
    <div className="flex justify-start w-full flex-col ">
      <input
        type={type}
        placeholder={placeholder}
        // value={value}
        onChange={onchangeHandler}
        className={`mt-6 border-b-2 border-gray-400 w-full p-1 outline-none ${classname}`}
      />
      <p
        className={className(
          "text-red-600 text-sm py-2",
          !error ? "hidden" : ""
        )}
      >
        {error}
      </p>
    </div>
  );
}

export default Input;