import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import Icon from '../Icon';
import { getDisplayedValue } from './Select.helpers';

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <Container>
      <SelectValue>
        <span>{displayedValue}</span>
        <SelectIcon size={22} strokeWidth={2} id='chevron-down'/>
      </SelectValue>
      <ActualSelect value={value} onChange={onChange}>
        <label>{displayedValue}</label>
        {children}
      </ActualSelect>
    </Container>
  );
};

const SelectValue = styled.div`
  padding: 10px 12px;
  border: none;
  background-color: ${COLORS.transparentGray15};

  display: flex;
  align-items: center;
`


const SelectIcon = styled(Icon)`
  margin-inline-start: 16px;
`

const Container = styled.div`
  display: inline-block;
  position: relative;
  overflow: hidden;

  border-radius: 8px;
  color: ${COLORS.gray700};

  &:hover {
    color: ${COLORS.black};
      cursor: pointer;
  }

  &:focus-within {
    outline: 2px solid ${COLORS.primary};
  }
`

const ActualSelect =  styled.select`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  width: 100%;

  opacity: 0;
`

export default Select;
