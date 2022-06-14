import { faEyeSlash } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

const InputText: React.FC<{
  label: string;
  placeholder?: string;
  password?: boolean;
  className?: string;
}> = ({ label, placeholder, password, className }) => {
  const [isShown, setIsShown] = useState(false);

  const handlePasswordVisibility = () => {
    setIsShown(!isShown);
  };

  return (
    <div className={`flex flex-col ${className}`}>
      <span className="text-xs">{label}</span>
      <label className="relative block">
        {password && (
          <span className="absolute inset-y-0 right-0 flex items-center text-slate-400 text-xs pr-4">
            <button onClick={handlePasswordVisibility}>
              <FontAwesomeIcon icon={faEyeSlash} />
            </button>
          </span>
        )}
        <input
          className="placeholder:text-slate-400 block bg-white w-full rounded py-2 pl-4 pr-9 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
          placeholder={placeholder}
          type={isShown ? "text" : "password"}
          name="search"
        />
      </label>
    </div>
  );
};

InputText.defaultProps = {
  password: false,
};

export default InputText;
