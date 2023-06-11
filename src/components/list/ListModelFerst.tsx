import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Item } from 'components/commonStyles';
import { Card, Divider, Typography } from '@mui/material';


const initialProducts: IProduct[] = [
  {
    title: 'ملی',
    Validity: 5785745,
    notpProvided: 12000,
    realization: 18,
  },
  {
    title: 'اربعین',
    Validity: 5454,
    notpProvided: 12000,
    realization: 18,
  },
  {
    title: 'استانی',
    Validity: 98858454,
    notpProvided: 12000,
    realization: 18,
  },
  {
    title: 'سفر',
    Validity: 4442,
    notpProvided: 12000,
    realization: 18,
  },

];

function ListModelFerst() {
  const [products, setProducts] = React.useState(initialProducts);

  return (
    <Card sx={{margin:"20px 0"}}>
    

      <Box sx={{backgroundColor:"#f3f3f3"}}>
        <div className={'App-container'}>
          {products.map((product: any) => {
            return (
                <Item>
                <Grid container sx={{backgroundColor:"#f3f3f3", padding:'10px'}} spacing={0}>
                <Grid
                  sx={{ textAlign: 'center', padding: '8px 0' }}
                  item
                  xs={6}
                >
                  <Typography variant='subtitle2'>
                    منبع تامین اعتبار
                  </Typography>
                  <Divider />
                  <Typography variant='subtitle2'>
          {product.title}
                  </Typography>
                </Grid>
                <Grid
                  sx={{ textAlign: 'center', padding: '8px 0' }}
                  item
                  xs={6}
                >
                  <Typography variant='subtitle2'>
                   اعتبار مورد نیاز<span style={{fontSize:'8px'}}>(ریال)</span>
                   <Divider />
                  <Typography variant='subtitle2'>
                  {product.Validity}
                  </Typography>
                  </Typography>
                </Grid>
                
                <Grid
                  sx={{ textAlign: 'center', padding: '8px 0' }}
                  item
                  xs={6}
                >
                  <Typography variant='subtitle2'>
                 اعتبار محقق شده<span style={{fontSize:'8px'}}>(ریال)</span>
                 <Divider />
                  <Typography variant='subtitle2'>
                  {product.notpProvided}
                  </Typography>
                  </Typography>
                </Grid>
                <Grid
                  sx={{ textAlign: 'center', padding: '8px 0' }}
                  item
                  xs={6}
                >
                  <Typography variant='subtitle2'>درصد تحقیق</Typography>
                  <Divider />
                  <Typography variant='subtitle2'>
                  <span >%</span>
                  {product.realization}
                  </Typography>
                </Grid>
              </Grid>
              </Item>
            );
          })}
        </div>
      </Box>
    </Card>
  );
}

export default ListModelFerst;
interface IProduct {
        title: string;
        Validity: number;
        notpProvided: number;
        realization: number;
      }