import Image from "next/image";
import React from "react";

const BoxIconButton: React.FC<{ src: string; color?: string }> = ({
  src,
  color,
}) => {
  return (
    <div
      className={`flex items-center justify-center p-2 bg-${color} border ring-1 ring-black shadow-neobrutalism border-black`}
    >
      <Image src={src} width="30px" height="30px" alt="google icon" />
    </div>
  );
};

BoxIconButton.defaultProps = {
  color: "white",
};

export default BoxIconButton;
