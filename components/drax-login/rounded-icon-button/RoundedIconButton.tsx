import Image from "next/image";
import React from "react";

const RoundedIconButton: React.FC<{
  icon: string;
  color?: string;
  className?: string;
  alt?: string;
}> = ({ icon, color, className, alt }) => {
  return (
    <div
      className={`flex bg-${color} w-24 h-10 rounded-2xl items-center justify-center ${className}`}
    >
      <Image width={"24px"} height={"24px"} src={icon} alt={alt} />
    </div>
  );
};

RoundedIconButton.defaultProps = {
  color: "white",
  alt: "Icon Button",
};

export default RoundedIconButton;
