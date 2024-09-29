import { mts } from '../utils';

export const alphaColorMatrix = (alpha: number) => mts`
  1 0 0 0 0
  0 1 0 0 0
  0 0 1 0 0
  0 0 0 ${alpha} 0
`;

export const chartXLPadding = 40;

export const chartYScale = 0.9;
