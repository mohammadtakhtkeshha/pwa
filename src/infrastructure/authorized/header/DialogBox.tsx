import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';
import Checkbox from '@mui/material/Checkbox';
import ArrowDownwardOutlinedIcon from '@mui/icons-material/ArrowDownwardOutlined';
import ArrowUpwardOutlinedIcon from '@mui/icons-material/ArrowUpwardOutlined';
import { Box, FormControlLabel, Stack } from '@mui/material';
import CheckOutlinedIcon from '@mui/icons-material/CheckOutlined';
import HorizontalRuleOutlinedIcon from '@mui/icons-material/HorizontalRuleOutlined';
import FilterCheckBox from './FilterCheckBox';
import { palette } from 'core';
const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction='up' ref={ref} {...props} />;
});

export default function FullScreenDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <IconButton aria-label='Example' onClick={handleClickOpen}>
        <FilterAltOutlinedIcon sx={{ color: '#fff' }} />
      </IconButton>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar
          sx={{
            position: 'relative',
            backgroundColor: 'rgb(64, 78, 103)',
          }}
        >
          <Toolbar>
            <IconButton
              edge='start'
              color='inherit'
              onClick={handleClose}
              aria-label='بستن'
            >
              <CloseIcon />
              <Typography
                sx={{ ml: 2, flex: 1 }}
                variant='h6'
                component='div'
              >
                بستن
              </Typography>
            </IconButton>
          </Toolbar>
        </AppBar>
        <Box
          sx={{
            margin: '20px 0',
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <Button
            sx={{
              ':hover': {
                bgcolor: '#fd7e14', // theme.palette.primary.main
                color: 'white',
              },
              backgroundColor: '#fe9365',
              borderColor: '#fe9365',
              color: '#fff',
            }}
            variant='contained'
            endIcon={<ArrowUpwardOutlinedIcon />}
          >
            <span style={{ padding: '0 20px 0 0' }}>
              <FormControlLabel
                sx={{ width: '100%' }}
                label='اولویت بالا'
                control={
                  <Checkbox
                    {...label}
                    icon={
                      <CheckOutlinedIcon sx={{ color: '#fe9365' }} />
                    }
                    checkedIcon={
                      <CheckOutlinedIcon sx={{ color: '#fff' }} />
                    }
                  />
                }
              />
            </span>
          </Button>

          <Button
            sx={{
              ':hover': {
                bgcolor: '#fd7e14', // theme.palette.primary.main
                color: 'white',
              },
              backgroundColor: '#fe9365',
              borderColor: '#fe9365',
              color: '#fff',
              margin: '0 10px',
            }}
            variant='contained'
            endIcon={<HorizontalRuleOutlinedIcon />}
          >
            <span style={{ padding: '0 20px 0 0' }}>
              <FormControlLabel
                label='اولویت متوسط'
                control={
                  <Checkbox
                    {...label}
                    icon={
                      <CheckOutlinedIcon sx={{ color: '#fe9365' }} />
                    }
                    checkedIcon={
                      <CheckOutlinedIcon sx={{ color: '#fff' }} />
                    }
                  />
                }
              />
            </span>
          </Button>

          <Button
            sx={{
              ':hover': {
                bgcolor: '#fd7e14', // theme.palette.primary.main
                color: 'white',
              },
              backgroundColor: '#fe9365',
              borderColor: '#fe9365',
              color: '#fff',
            }}
            variant='contained'
            endIcon={<ArrowDownwardOutlinedIcon />}
          >
            <span style={{ padding: '0 20px 0 0' }}>
              <FormControlLabel
                label='اولویت پایین'
                control={
                  <Checkbox
                    {...label}
                    icon={
                      <CheckOutlinedIcon sx={{ color: '#fe9365' }} />
                    }
                    checkedIcon={
                      <CheckOutlinedIcon sx={{ color: '#fff' }} />
                    }
                  />
                }
              />
            </span>
          </Button>
        </Box>

        <Box
          sx={{
            margin: '20px 0',
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <Button
            size='small'
            sx={{
              ':hover': {
                bgcolor: '#fd7e14', // theme.palette.primary.main
                color: 'white',
              },
              backgroundColor: '#fe9365',
              borderColor: '#fe9365',
              color: '#fff',
            }}
            variant='contained'
          >
            <span style={{ padding: '0 20px 0 0' }}>
              <FormControlLabel
                sx={{ width: '100%', fontSize: '5px' }}
                label='  اربعین 1402  '
                control={
                  <Checkbox
                    {...label}
                    icon={
                      <CheckOutlinedIcon sx={{ color: '#fe9365' }} />
                    }
                    checkedIcon={
                      <CheckOutlinedIcon sx={{ color: '#fff' }} />
                    }
                  />
                }
              />
            </span>
          </Button>

          <Button
            size='small'
            sx={{
              ':hover': {
                bgcolor: '#fd7e14', // theme.palette.primary.main
                color: 'white',
              },
              backgroundColor: '#fe9365',
              borderColor: '#fe9365',
              color: '#fff',
              margin: '0 10px',
            }}
            variant='contained'
          >
            <span style={{ padding: '0 20px 0 0' }}>
              <FormControlLabel
                label='   اربعین     1401'
                control={
                  <Checkbox
                    {...label}
                    icon={
                      <CheckOutlinedIcon sx={{ color: '#fe9365' }} />
                    }
                    checkedIcon={
                      <CheckOutlinedIcon sx={{ color: '#fff' }} />
                    }
                  />
                }
              />
            </span>
          </Button>

          <Button
            sx={{
              ':hover': {
                bgcolor: '#fd7e14', // theme.palette.primary.main
                color: 'white',
              },
              backgroundColor: '#fe9365',
              borderColor: '#fe9365',
              color: '#fff',
            }}
            size='small'
            variant='contained'
          >
            <span style={{ padding: '0 20px 0 0' }}>
              <FormControlLabel
                label='اربعین  1400'
                control={
                  <Checkbox
                    {...label}
                    icon={
                      <CheckOutlinedIcon sx={{ color: '#fe9365' }} />
                    }
                    checkedIcon={
                      <CheckOutlinedIcon sx={{ color: '#fff' }} />
                    }
                  />
                }
              />
            </span>
          </Button>
        </Box>
        <Box
          sx={{
            margin: '20px 0',
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <FilterCheckBox
            title='استان'
            names={['گیلان', ' مازندران', 'خراسان', 'تهران', 'قشم']}
          />
        </Box>
        <Box
          sx={{
            margin: '20px 0',
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <FilterCheckBox
            title='کارگروه'
            names={[
              'ستاد عراق',
              ' ستاد مرکزی',
              'ستاد مرزی',
              'تهران',
              'ستاد کل',
            ]}
          />
        </Box>

        <Box
          sx={{
            margin: '20px 0',
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <FilterCheckBox
            title='اجرایی'
            names={[
              ' وزارت کشور',
              ' ستاد کل',
              'ستاد مرزی',
              'تهران',
              'ستاد مرکزی',
            ]}
          />
        </Box>

        <Stack
          sx={{ margin: '10px 0' }}
          spacing={2}
          direction='row'
          justifyContent='space-evenly'
        >
          <Button
            sx={{
              background: palette.green[1],
              color: palette.white[0],
              ':hover': {
                background: palette.green[0],
                color: palette.white[0],
              },
            }}
            variant='contained'
          >
            جستجو
          </Button>
          <Button
            sx={{
              background: palette.white[2],
              color: palette.gray[0],
            }}
            variant='text'
          >
            حذف فیلتر
          </Button>
        </Stack>
      </Dialog>
    </div>
  );
}
