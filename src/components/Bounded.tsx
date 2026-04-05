import React from "react";
import clsx from "clsx";

type BoundedProps = {
  as?: React.ElementType;
  className?: string;
  children: React.ReactNode;
};

const Bounded = React.forwardRef<HTMLDivElement, BoundedProps>(
  ({ as: Comp = "section", className, children, ...restProps }, ref) => {
    return (
      <Comp
        ref={ref}
        className={clsx(
          "px-3 py-10 md:px-5 md:py-16 lg:px-6 lg:py-20 xl:px-7",
          className,
        )}
        {...restProps}
      >
        <div className="mx-auto w-full max-w-[1920px]">{children}</div>
      </Comp>
    );
  },
);

// Set a display name for the component
Bounded.displayName = "Bounded";

export default Bounded;
