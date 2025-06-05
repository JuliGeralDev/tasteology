interface TitleProps {
  children: React.ReactNode;
  variant?: 'main';
}

const Title = ({ children, variant = 'main' }: TitleProps) => {
  const base = 'font-medium uppercase tracking-widest';
  const styles = {
    main: 'text-white text-xl',
  };

  return <h1 className={`${base} ${styles[variant]}`}>{children}</h1>;
};

export default Title;
