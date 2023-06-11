
import { createTheme, ThemeProvider } from '@mui/material/styles';
import rtlPlugin from 'stylis-plugin-rtl';
import { prefixer } from 'stylis';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import i18next from 'i18next';
import { useState } from 'react';

const theme = createTheme({
  direction: 'rtl', // Both here and <body dir="rtl">
});

const ltrTheme = createTheme({
  direction: 'ltr', // Both here and <body dir="rtl">
});

// Create rtl cache
const cacheRtl = createCache({
  key: 'muirtl',
  stylisPlugins: [prefixer, rtlPlugin],
});

function RTL(props: any): JSX.Element {
  const [direction, setDirection] = useState(i18next.dir());

  i18next.on('languageChanged', lng => {
    lng === 'en' ? setDirection('ltr') : setDirection('rtl');
  });

  if (direction === 'rtl') {
    return (
      <CacheProvider value={cacheRtl}>
        <ThemeProvider theme={theme}>
          <div dir='rtl'>{props.children}</div>
        </ThemeProvider>
      </CacheProvider>
    );
  } else {
    return (
      <ThemeProvider theme={ltrTheme}>
        <div dir='ltr'>{props.children}</div>
      </ThemeProvider>
    );
  }
}

export default RTL;

