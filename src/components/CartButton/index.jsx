import { Button } from '../Button';

export function CartButton({ children, ...props }) {
  return <Button {...props}>{children}</Button>;
}