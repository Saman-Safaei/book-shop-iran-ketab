import type { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";

export interface ContainerProps<C extends ElementType> {
  component?: C | ElementType;
  children?: ReactNode;
  className?: string;
  divClassName?: string;
}

type PolymorphicType<C extends ElementType> = ContainerProps<C> &
  Omit<ComponentPropsWithoutRef<C>, keyof ContainerProps<C>>;

const Container = <C extends ElementType = "section">({
  children,
  component,
  className = "",
  divClassName = "",
  ...props
}: PolymorphicType<C>) => {
  const Component = component ?? "section";
  return (
    <Component className={className} {...props}>
      <div className={`mx-auto w-full max-w-7xl px-4 ${divClassName}`}>
        {children}
      </div>
    </Component>
  );
};

export default Container;
