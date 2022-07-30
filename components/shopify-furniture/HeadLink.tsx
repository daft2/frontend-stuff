import Link from "next/link";
import React from "react";

const HeadLink: React.FC<{
  label: string;
  target?: string;
  icon?: boolean;
}> = ({ label, target = "#", icon = false }) => {
  return (
    <Link href={target}>
      <a className="relative hover:underline underline-offset-2">
        {label}
        {icon && (
          <div className="absolute bg-orange-500 w-1 h-1 rounded-full top-1 -right-1" />
        )}
      </a>
    </Link>
  );
};

export default HeadLink;
