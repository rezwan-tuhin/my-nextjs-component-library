import React from "react";
import { tv } from "tailwind-variants";

const loadingButton1 = tv({
  base: "bg-indigo-600 text-white px-6 py-2 rounded-full flex items-center font-bold cursor-no-drop"
})

const LoadingButton1 = ({children, className}) => {
  return (
    <button
      className={loadingButton1({className})}
      disabled
    >
      <svg
        className="mr-3 size-5 animate-spin duration-300"
        viewBox="0 0 24 24"
      >
        <circle
          className="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="4"
          fill="none"
        />
        <path
          className="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        />
      </svg>
      {children}
    </button>
  );
};

export default LoadingButton1;
