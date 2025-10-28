import React from "react";

interface Props {
  className?: string;
  text?: string;
  onClick?: () => void;
  disabled?: boolean;
}

export const Button: React.FC<Props> = ({
  className,
  text,
  onClick,
  disabled,
}) => {
  return (
    <button
      type="submit"
      onClick={onClick}
      disabled={disabled}
      className={`w-36 bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700 transition ${className}`}
    >
      {text}
    </button>
  );
};
