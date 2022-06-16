import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const InputField: React.FC<{
  name: string;
  icon: IconDefinition;
  placeholder?: string;
  type?: string;
}> = ({ name, icon, placeholder, type }) => {
  return (
    <label className="relative block shadow-black">
      <span className="sr-only">{name}</span>
      <span className="absolute inset-y-0 left-0 flex items-center pl-2 text-neobrutalismText">
        <FontAwesomeIcon icon={icon} />
      </span>
      <input
        className="placeholder:text-neobrutalismText shadow-neobrutalism h-12 block bg-white w-full border-2 border-neobrutalismText rounded-sm py-2 pl-9 pr-3 focus:outline-none focus:shadow-none focus:ring-1 sm:text-sm"
        placeholder={placeholder}
        type={type}
        name={name}
      />
    </label>
  );
};

InputField.defaultProps = {
  type: "text",
};

export default InputField;
