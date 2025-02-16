import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const formatToDoubleDigits = (number: number) => {
  return number < 10 ? `0${number}` : number;
};
