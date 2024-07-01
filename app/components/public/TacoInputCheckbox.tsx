import React, { ChangeEventHandler } from "react";

const TacoInputCheckbox: React.FunctionComponent<{
  onChange?: ChangeEventHandler<HTMLInputElement>;
  checked: boolean;
}> = ({ onChange, checked }) => {
  return (
    <label className="inline-flex cursor-pointer items-center">
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="peer sr-only"
      />
      <div className="peer relative mr-8 h-6 w-11 rounded-full bg-black after:absolute after:start-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-white peer-checked:after:translate-x-full peer-checked:after:border-white peer-checked:after:bg-taco-dark-primary lg:mr-10 rtl:peer-checked:after:-translate-x-full"></div>
    </label>
  );
};

export default TacoInputCheckbox;
