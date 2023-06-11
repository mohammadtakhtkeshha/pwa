import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import { palette } from 'core';


export const StyledPaper = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  boxShadow: 'none',
  background: 'none',
  padding: theme.spacing(1),
  textAlign: 'center',
  alignSelf: 'center',
  justifySelf: 'center',
  color: palette.gray[0],
}));

export const StyledContent = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  boxShadow: 'none',
  background: 'none',
  padding:"50px 10px 91px 10px",
  margin: '0 0px 91px 0px' ,
  alignSelf: 'center',
  justifySelf: 'center',
  color: palette.gray[0],
}));

export const StyledView = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  marginTop: theme.spacing(10),
  marginLeft: theme.spacing(3),
  marginRight: theme.spacing(3),
  width: '100%',
}));

export const Item = styled(Paper)(({ theme }) => ({
  backgroundColor:'#fff',
  boxShadow: 'none',
  ...theme.typography.body1,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));