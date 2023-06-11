import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Item } from 'components/commonStyles';
import { Card, Typography } from '@mui/material';


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

function List() {
  const [products, setProducts] = React.useState(initialProducts);

  return (
    <Card>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={0}>
          <Grid
            sx={{ textAlign: 'center', padding: '8px 0' }}
            item
            xs={3}
          >
            <Typography variant='subtitle2'>
              منبع تامین اعتبار
            </Typography>
          </Grid>
          <Grid
            sx={{ textAlign: 'center', padding: '8px 0' }}
            item
            xs={3}
          >
            <Typography variant='subtitle2'>
             اعتبار مورد نیاز<span style={{fontSize:'8px'}}>(ریال)</span>
            </Typography>
          </Grid>
          <Grid
            sx={{ textAlign: 'center', padding: '8px 0' }}
            item
            xs={3}
          >
            <Typography variant='subtitle2'>
           اعتبار محقق شده<span style={{fontSize:'8px'}}>(ریال)</span>
            </Typography>
          </Grid>
          <Grid
            sx={{ textAlign: 'center', padding: '8px 0' }}
            item
            xs={3}
          >
            <Typography variant='subtitle2'>درصد تحقیق</Typography>
          </Grid>
        </Grid>
      </Box>

      <Box>
        <div className={'App-container'}>
          {products.map((product: any) => {
            return (
              <Grid key={product?.Validity} container spacing={0}>
                <Grid
                  sx={{ textAlign: 'center', padding: '8px 0' }}
                  item
                  xs={3}
                >
                  <Typography variant='subtitle2'>
                  {product?.title}
                  </Typography>
                </Grid>
                <Grid
                  sx={{ textAlign: 'center', padding: '8px 0' }}
                  item
                  xs={3}
                >
                  <Typography variant='subtitle2'>
                  {product?.Validity}
                  </Typography>
                </Grid>
                <Grid
                  sx={{ textAlign: 'center', padding: '8px 0' }}
                  item
                  xs={3}
                >
                  <Typography variant='subtitle2'>
                  {product?.notpProvided} 
                  </Typography>
                </Grid>
                <Grid
                  sx={{ textAlign: 'center', padding: '8px 0' }}
                  item
                  xs={3}
                >
                  <Typography variant='subtitle2'>
                  {product?.realization} %
                  </Typography>
                </Grid>
              </Grid>
            );
          })}
        </div>
      </Box>
    </Card>
  );
}

export default List;
interface IProduct {
        title: string;
        Validity: number;
        notpProvided: number;
        realization: number;
      }