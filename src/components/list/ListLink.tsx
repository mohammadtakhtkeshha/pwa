import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Item } from 'components/commonStyles';
import { Card, Typography } from '@mui/material';
import { Home } from 'views';
import { Link } from 'react-router-dom';

const initialProducts: IProduct[] = [
  {
    title: 'ملی',
    Validity: 10058,
    notpProvided: 12000,
    realization: 18,
  },
  {
    title: 'اربعین',
    Validity: 855484,
    notpProvided: 1245000,
    realization: 18,
  },
  {
    title: 'استانی',
    Validity: 84512,
    notpProvided: 1254000,
    realization: 18,
  },
  {
    title: 'سفر',
    Validity: 8451,
    notpProvided: 142000,
    realization: 18,
  },
];

function ListLink() {
  const [products, setProducts] = React.useState(initialProducts);

  return (
    <Card>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container sx={{ background: '#f3f3f3' }} spacing={0}>
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
              اعتبار مورد نیاز
              <span style={{ fontSize: '8px' }}>(ریال)</span>
            </Typography>
          </Grid>
          <Grid
            sx={{ textAlign: 'center', padding: '8px 0' }}
            item
            xs={3}
          >
            <Typography variant='subtitle2'>
              اعتبار محقق شده
              <span style={{ fontSize: '8px' }}>(ریال)</span>
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
              <Link
                style={{ textDecoration: 'none', color: '#000' }}
                to={`/projectDetile/${product?.Validity}`}
              >
                <Grid
                  container
                  spacing={0}
                  sx={{ marginTop: '5px', background: '#f3f3f3' }}
                >
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
              </Link>
            );
          })}
        </div>
      </Box>
    </Card>
  );
}

export default ListLink;
interface IProduct {
  title: string;
  Validity: number;
  notpProvided: number;
  realization: number;
}
