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
        interface PaletteOptions {
          white: White;
          black: Black;
          gray: Gray;
          green: Green;
          red: Red;
          blue: Blue;
          purple: Purple;
          yellow: Yellow;
          orange: Orange;
        }
        interface Palette {
          white: White;
          black: Black;
          gray: Gray;
          green: Green;
          red: Red;
          blue: Blue;
          purple: Purple;
          yellow: Yellow;
          orange: Orange;
        }
      }
      export const palette = {
        white: {
          0: 'rgba(255,255,255,.95)',
          1: 'rgba(255,255,255,1)',
          2: '#F0F2FA',
        },
        black: {
          0: '#0D0D0D',
        },
        gray: {
          0: '#32325D',
          1: '#6B7C93',
          2: '#EDEDED',
          3: '#F1F3F5',
          4: 'rgba(50,50,93,0.9)',
          5: '#FDFDFD',
          6: 'rgb(253, 253, 253)',
          7: 'rgb(253, 253, 253)',
          8: 'rgb(253, 253, 253)',
          9: '#77869c',
          11: '#e8e8e8',
          10: '#BBC3CE',
          12: '#B9B9B9',
          13: '#616161',
          14: '#faf9f9',
        },
        blue: {
          0: '#606CEC',
          1: '#42c5c3',
          2: '#8089f0',
          3: '#5dcdcc',
          4: '#51cac8',
          5: '#359e9c',
          6: '#51bfca',
          7: '#4d56bd',
          8: '#32325D',
          9: '#6d78ee',
        },
        green: {
          0: '#06d3d7',
          1: '#17a2b8',
          2: 'rgb(52, 179, 73)',
          3: 'rgba(8,209,88,0.1)',
          4: '#6ccf59',
        },
        red: {
          0: '#ff0000',
          1: 'rgb(240, 41, 52)',
          2: 'rgba(255,68,68,0.1)',
          3: '#ee6d6d',
          4: '#bd4d4d',
          5: '#EC6060',
        },
        yellow: { 0: '#ffff00' },
        orange: {
          0: '#ffa500',
          1: 'rgb(240, 125, 41)',
          2: '#bd7a4d',
          3: '#EC9860',
          4: '#eea06d',
        },
        purple: { 0: '#800080', 1: '#6d78ee' },
      };
      