import { palette } from './palette';
import {
  Gray,
  Green,
  Red,
  Blue,
  Purple,
  Yellow,
  Orange,
  White,
  Black,
} from 'types/color.types';

declare module '@mui/material/styles' {
  interface Theme {
    shadow: {
      0: string;
      1: string;
      2: string;
    };
    borders: {
      input: string;
      lang: string;
      uploader: string;
      dialog: string;
      dialog2: string;
      permissionBorder: string;
      permissionItem: string
    };
    colors: {
      gray: Gray;
      green: Green;
      red: Red;
      blue: Blue;
      purple: Purple;
      yellow: Yellow;
      orange: Orange;
      white: White;
      black: Black;
    };
    zIndices: {
      0: string;
      1: string;
    };
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    shadow?: {
      0: string;
      1: string;
      2: string;
    };
    borders?: {
      input: string;
      lang: string;
      uploader: string;
      dialog: string;
      negativeBorder: string;
      positiveBorder: string;
      homeBorderSide: string;
    };
    colors?: {
      gray: Gray;
      green: Green;
      red: Red;
      blue: Blue;
      purple: Purple;
      yellow: Yellow;
      orange: Orange;
      white: White;
      black: Black;
    };
    zIndices?: {
      0: string;
      1: string;
    };
  }
}
export const theme = {
  backgroundColor: 'red',
  fontFamily: `iranyekan !important`,
  colors: palette,
  typography: {
    fontFamily: `iranyekan !important`,
  },
  zIndices: {
    0: '99999 !important',
    1: '10',
    2: '9997',
  },
  radii: {
    xxs: '2px',
    xs: '5px',
    sm: '6px',
    md: '8px',
    lg: '10px',
    xl: '12px',
    xxl: '20px',
    chart: '50px',
    item: '68px',
    full: '100%',
  },
  borders: {
    input: '10px solid #B8B1A4',
    lang: '1px solid #B8B1A4',
    uploader: '2px dotted #6B7C93',
    dialog: '2px solid #BBC3CE',
    dialog2: '1px solid #BBC3CE',
    negativeBorder: 'solid 10px #ff4d4d',
    positiveBorder: 'solid 10px #6ccf59',
    homeBorderSide: 'solid 7px transparent',
    permissionBorder: 'solid 1px #ced4da',
    permissionItem: '1px solid #EDEDED',
  },
  shadow: {
    0: '0px 1px 6px rgba(0, 0, 0, 0.161)',
    1: ' 0px 4px 8px rgba(0, 0, 0, 0.2)',
    2: '0 3px 6px rgba(96,108,236,.15),0 1px 3px rgba(0,0,0,.11)',
    3: '0 2px 10px rgba(31,45,61,0.16)',
  },
  fontSizes: {
    0: '1rem',
    1: '1.1rem',
    2: '1.2rem',
    3: '1.3rem',
    4: '1.4rem',
    5: '1.5rem',
    6: '1.6rem',
    7: '1.7rem',
    8: '1.8rem',
    9: '1.9rem',
    10: '2rem',
    11: '2.1rem',
    12: '2.2rem',
    13: '2.3rem',
    14: '2.4rem',
    15: '2.5rem',
    16: '2.6rem',
    17: '2.7rem',
    18: '2.8rem',
    19: '2.9rem',
    20: '3rem',
    21: '3.1rem',
    22: '3.2rem',
    23: '3.3rem',
    24: '3.4rem',
    25: '3.5rem',
    26: '3.6rem',
    27: '3.7rem',
    28: '3.8rem',
    29: '3.9rem',
    30: '4rem',
    31: '4.1rem',
    32: '4.2rem',
    33: '4.3rem',
    34: '4.4rem',
    35: '4.5rem',
    36: '4.6rem',
    37: '4.7rem',
    38: '4.8rem',
    39: '4.9rem',
    40: '5rem',
    50: '6rem',
    51: '.75rem',
    52: '.875rem',
  },
  fontWeights: [
    'normal',
    'bold',
    100,
    200,
    300,
    400,
    500,
    600,
    700,
    800,
    900,
  ],
};
