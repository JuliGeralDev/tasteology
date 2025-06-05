interface ParagraphProps {
  children: React.ReactNode;
  variant?: 'normal' | 'strong';
}

const Paragraph = ({ children, variant = 'normal' }: ParagraphProps) => {
  const base = 'text-sm';
  const styles = {
    normal: '',
    strong: 'font-bold',
    uppercase: 'font-semibold',

  };

  return <p className={`${base} ${styles[variant]}`}>{children}</p>;
};

export default Paragraph;
