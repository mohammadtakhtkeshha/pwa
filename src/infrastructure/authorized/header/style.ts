import { styled } from '@mui/material/styles';
import MuiAppBar from '@mui/material/AppBar';
import { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';

export interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}
export interface SelectProps {
  open?: boolean;
  value?: any;
  label?: string;
  onChange?: any;
}
const drawerWidth = 240;

export const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  height: 77,
  boxShadow: 'unset !important',
  backgroundColor: theme.colors.gray[14],
  color: theme.colors.blue[8],
  width: `calc(100% - (${theme.spacing(8)} + 1px))`,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));


