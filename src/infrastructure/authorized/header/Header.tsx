import {
  Toolbar,
  Typography,
  IconButton,
  Box,
  Tooltip,
} from '@mui/material';
import { useTranslation } from 'react-i18next';
import { AppBar } from './style';
import Banner from 'assets/img/banner-moi.png';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Fade from '@mui/material/Fade';
import ExitToAppOutlinedIcon from '@mui/icons-material/ExitToAppOutlined';
import { useState } from 'react';
import FullScreenDialog from './DialogBox';

export default function Header(props: any) {
  const { t } = useTranslation('translation');
const [filterBandel, setFiltersBandel] = useState(false)
  const handlerFilter=()=>{
    setFiltersBandel(!filterBandel)
  }
  return (
    <AppBar
      style={{ background: '#404e67', height: '56px' }}
      position='fixed'
      sx={{ width: `calc(100% )` }}
    >
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Stack
          direction='row'
          sx={{ justifyContent: 'center', alignItems: 'center' }}
          spacing={1}
        >
          <Tooltip
            title='سازمان مدیریت و نظارت بر توسعه 
           استانهای کشور'
           TransitionComponent={Fade}
           TransitionProps={{ timeout: 600 }}
           
          >
           
            <Avatar onClick={handlerFilter} src={Banner} />
           
        
          </Tooltip>
          <Typography
            sx={{ color: '#fff' }}
            variant='subtitle1'
            noWrap
            component='div'
          >
            تحلیل عملکرد پروژه های اربعین
          </Typography>
        </Stack>
        <Box sx={{display:'flex'}}>
          <Tooltip title='خروج'>
            <IconButton aria-label='Example'>
              <ExitToAppOutlinedIcon sx={{ color: '#fff' }} />
            </IconButton>
          </Tooltip>

          <Tooltip title='فیلتر'>
              <FullScreenDialog />
            
          </Tooltip>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
