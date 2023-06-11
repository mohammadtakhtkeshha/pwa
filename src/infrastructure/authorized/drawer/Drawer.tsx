import * as React from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RunningWithErrorsIcon from '@mui/icons-material/RunningWithErrors';
import ArticleIcon from '@mui/icons-material/Article';
import Paper from '@mui/material/Paper';
import { Link } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
function Drawer() {
  const [value, setValue] = React.useState(0);
  const ref = React.useRef<HTMLDivElement>(null);

  return (
    <Box  ref={ref}>
     
      <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 ,zIndex:"100" ,}}>
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          <BottomNavigationAction
            label='صفحه اصلی'
            component={Link}
            to='/'
            icon={<HomeIcon />}
          />

          <BottomNavigationAction
            label='اعتبارات'
            component={Link}
            to='/process'
            icon={<RunningWithErrorsIcon />}
          />
          <BottomNavigationAction
            label='پروژه'
            component={Link}
            to='/project'
            icon={<ArticleIcon />}
          />
        </BottomNavigation>
      </Paper>
    </Box>
  );
}

export default Drawer;
