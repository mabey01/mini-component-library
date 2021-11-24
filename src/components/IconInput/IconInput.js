import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const SIZES = {
  small: {
    icon: 16,
    strokeWidth: 1,
    borderWidth: '1px',
    fontSize: '16px'
  },
  large: {
    icon: 24,
    strokeWidth: 2,
    borderWidth: "2px",
    fontSize: '18px'
  }
}

const IconInput = ({
  label,
  icon,
  width = 250,
  size,
  placeholder,
}) => {
  return (
    <Container style={{'--border-width': SIZES[size].borderWidth, '--width': width + 'px', "--font-size": SIZES[size].fontSize}}>
      <InputIcon size={SIZES[size].icon} strokeWidth={SIZES[size].strokeWidth} id={icon}/>
      <Input type="text" placeholder={placeholder}/>
      <VisuallyHidden>{label}</VisuallyHidden>
    </Container>
  );
};

const Container = styled.div`
  border-bottom: var(--border-width) solid currentColor;
  border-radius: 1px;
  width: var(--width);
  padding: 4px;

  white-space: nowrap;

  &:focus-within {
    outline: 2px solid ${COLORS.primary};
    outline-offset: 4px;
  }
`

const InputIcon = styled(Icon)`
  display: inline-block;
`

const Input = styled.input`
  display: inline-block;
  padding: 0%;
  margin: 0 0 0 -20px;
  width: var(--width);
  border: none;
  background: none;


  color: ${COLORS.gray700};
  font-size: var(--font-size);
  text-indent: 25px;
  font-weight: 700;
  outline: none;

  &:hover {
    color: ${COLORS.black};
  }

  &::placeholder {
    font-weight: 400;
    color: ${COLORS.gray500}
  }
  
`

export default IconInput;
