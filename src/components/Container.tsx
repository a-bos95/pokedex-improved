import { ElementType } from 'react';

interface Props {
  children: React.ReactNode;
  type: ElementType;
  className?: string;
}

export default function Container({ children, type, ...props }: Props) {
  const Element = type;
  return (
    <Element {...props}>
      {children}
    </Element>
  );
}