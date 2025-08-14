
interface ButtonProps {
  buttonText?: string;
  className?: string;
  href?: string;
  variant: "primary" | "secondary";
  onClick?: () => void;
  children?: React.ReactNode;
}

export const Button = () => {
  return (
    <div>button</div>
  )
}
