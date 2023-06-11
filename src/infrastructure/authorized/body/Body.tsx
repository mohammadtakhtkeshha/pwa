import { LoginBox, StyledContent } from 'components';
import Header from './../header/Header';

const Body = (props: any) => {
  const { children } = props;
  return (
    <>
      <Header />
      <LoginBox height={"94vh"} >
      <StyledContent>
        {children}
      </StyledContent>
        
        </LoginBox>
    </>
  );
};

export default Body;
