"use client";

import { ButtonHTMLAttributes } from "react";
import clsx from "clsx";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
}

export default function Button({ variant = "primary", className, ...props }: ButtonProps) {
  return (
    <button
      {...props}
      className={clsx(
        "px-4 py-2 rounded font-medium transition",
        variant === "primary" && "bg-red-600 hover:bg-red-700 text-white",
        variant === "secondary" && "bg-gray-700 hover:bg-gray-600 text-white",
        className
      )}
    />
  );
}
