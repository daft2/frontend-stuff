import React from "react";

const TextTitle: React.FC<{ text: String; color?: String }> = ({
  text,
  color,
}) => {
  return <span className={`text-2xl text-${color}`}>{text}</span>;
};

TextTitle.defaultProps = {
  color: "black",
};

export default TextTitle;
