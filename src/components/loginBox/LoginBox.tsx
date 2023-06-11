import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { StyledPaper } from 'components';
import background from 'assets/img/bgLogin.jpg';

const LoginBox = (props: any) => {
  const { children ,height} = props;

  return (
    <Container
      maxWidth='sm'
      sx={{
        height: {height},
      }}
    >
      {children}
    </Container>
  );
};
export default LoginBox;
