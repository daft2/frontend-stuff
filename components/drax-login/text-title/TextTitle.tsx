import React from "react";

const TextTitle: React.FC<{
  text: string;
  color?: string;
  className?: string;
}> = ({ text, color, className }) => {
  return (
    <span className={`text-2xl font-bold text-${color} ${className}`}>
      {text}
    </span>
  );
};

TextTitle.defaultProps = {
  color: "black",
};

export default TextTitle;
