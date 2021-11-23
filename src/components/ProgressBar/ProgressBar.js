/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const SIZES = {
  small: {
    padding: '0',
    height: '12px',
    borderRadius: '6px',
    innerBorderRadius: '7px'
  },
  medium: {
    padding: '0',
    height: '16px',
    borderRadius: '6px',
    innerBorderRadius: '7px'
  },
  large: {
    padding: '4px',
    height: '32px',
    borderRadius: '12px',
    innerBorderRadius: '8px'
  }
}

const ProgressBar = ({ value, size }) => {
  const actualValue = Math.max(0, Math.min(100, value))
  return (
    <Wrapper role="progressbar" aria-valuenow={actualValue} aria-valuemin="0" aria-valuemax="100" style={{
      '--height': SIZES[size].height,
      '--padding': SIZES[size].padding,
      '--borderRadius': SIZES[size].borderRadius,
      '--innerBorderRadius': SIZES[size].innerBorderRadius,
    }}>
      <BarWrapper>
        <Bar value={actualValue}>
          <VisuallyHidden>{actualValue}%</VisuallyHidden>
        </Bar>
      </BarWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: ${COLORS.transparentGray15};
  height: var(--height);
  padding: var(--padding);

  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};

  border-radius: var(--borderRadius);
`

const BarWrapper = styled.div`
  border-radius: var(--innerBorderRadius);
  overflow: hidden;

  width: 100%;
  height: 100%;
`

const Bar = styled.div`
  width: ${({value}) => value}%;
  height: 100%;
  background-color: ${COLORS.primary};
`

export default ProgressBar;
