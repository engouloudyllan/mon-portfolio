import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export const cn = (...inputs: Array<unknown>) => {
  return twMerge(clsx(inputs));
};
