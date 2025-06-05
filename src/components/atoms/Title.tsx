import type { ElementType, ReactNode } from "react";

interface TitleProps {
  children: ReactNode;
  variant?: "main" | "caption";
  as?: ElementType; 
}


const Title = ({ children, variant = "main", as: Tag = "h1" }: TitleProps) => {
  const base = "uppercase tracking-widest";
  const variants = {
    main: "text-big font-light title-underline mb-[30px]",
    caption: "text-small font-bold text-[#cf1430]  mb-[10px]",
  };

  return <Tag className={`${base} ${variants[variant]}`}>{children}</Tag>;
};

export default Title;
