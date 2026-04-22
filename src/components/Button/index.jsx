import PropTypes from 'prop-types';
import { Button as StyledButton } from './styles';

export function Button({ children, ...props }) {
  return <StyledButton {...props}>{children}</StyledButton>;
}

Button.propTypes = {
  children: PropTypes.node,
};
