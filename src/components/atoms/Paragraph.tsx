interface ParagraphProps {
  children: React.ReactNode;
  variant?: 'normal' | 'bold';
}

const Paragraph = ({ children, variant = 'normal' }: ParagraphProps) => {

  const base = 'mb-[30px]';
  
  const styles = {
    normal: 'font-light',
    bold: 'font-bold',
  };

  return <p className={`${base} ${styles[variant]}`}>{children}</p>;
};

export default Paragraph;
