import React from "react";

const Input = ({
  labelName,
  textType,
  name,
  value,
  placeholder,
  disable,
  handleChange,
}: any) => {
  return (
    <>
      <div>
        <label
          htmlFor="first_name"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          {labelName}
        </label>
        <input
          type={textType}
          id={name}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
           focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600
            dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={handleChange}
          disabled={disable}
          required
        />
      </div>
    </>
  );
};

export default Input;
