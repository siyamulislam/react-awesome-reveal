import * as React from 'react';
import { CommonProps } from '../const';
import { Reveal } from '../Reveal';

export const Tada: React.FC<CommonProps> = ({ ...props }) => (
  <Reveal animationIn="tada" {...props} />
);
