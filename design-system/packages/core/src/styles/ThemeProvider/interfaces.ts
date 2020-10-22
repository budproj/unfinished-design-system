import { ReactNode } from 'react';
import { Theme } from '@theme-ui/core';

export interface ThemeProviderProps {
  theme?: Theme,
  children?: ReactNode,
};
