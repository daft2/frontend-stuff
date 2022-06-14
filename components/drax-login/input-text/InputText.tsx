import React from "react";

const InputText: React.FC<{
  label: string;
  placeholder?: string;
}> = ({ label, placeholder }) => {
  return (
    <div>
      <span className="text-xs">{label}</span>
      <input
        type="text"
        className="placeholder:text-slate-400 placeholder:p-4 h-8"
        placeholder={placeholder}
      />
    </div>
  );
};

export default InputText;
