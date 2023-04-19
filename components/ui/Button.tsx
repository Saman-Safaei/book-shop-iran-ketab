import type { ComponentPropsWithoutRef, FC } from "react";

export interface ButtonProps extends ComponentPropsWithoutRef<"button"> {
  block?: boolean;
}

const Button: FC<ButtonProps> = ({ className, block, children, ...props }) => {
  const blockClasses = block ? "block w-full" : "";

  return (
    <button
      className={`${blockClasses} bg-primary-main border-solid border-2 border-primary-main hover:bg-primary-200 hover:text-text-main active:bg-primary-400 px-4 py-2 rounded-md text-white ${blockClasses} ${className} transition-colors duration-300`}
      {...props}>
      {children}
    </button>
  );
};

export default Button;
