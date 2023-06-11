import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Item } from 'components/commonStyles';
import { Card, Typography } from '@mui/material';
import { Home } from 'views';
import { Link } from 'react-router-dom';
import TrafficLight from 'components/trafficLight/TrafficLight';

const initialProducts: IProduct[] = [
  {
    title: 'تست امید ',
    Validity: 0,
    notpProvided: 'Red',
  },
  {
    title: 'ساخت بزرگراه',
    Validity: 50,
    notpProvided: 'Yellow',
  },
  {
    title: 'ساخت بزرگراه شرقی غربی',
    Validity: 98,
    notpProvided: 'Green',
  },
  {
    title: 'ایستگاه موقتی  مسافران',
    Validity: 91,
    notpProvided: 'Green',
  },
  {
    title: '   روشنایی مسیر',
    Validity: 84,
    notpProvided: 'Yellow',
  },
  {
    title: '   درخت کاری مسیر',
    Validity: 92,
    notpProvided: 'Green',
  },
  {
    title: '   آسفالت بزرگراه ',
    Validity: 0,
    notpProvided: 'Red',
  },
];

function ListLinkProject() {
  const [products, setProducts] = React.useState(initialProducts);

  return (
    <Card>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container sx={{ background: '#f3f3f3' }} spacing={0}>
          <Grid
            sx={{ textAlign: 'center', padding: '8px 0' }}
            item
            xs={4}
          >
            <Typography variant='subtitle2'>عنوان پروژه </Typography>
          </Grid>
          <Grid
            sx={{ textAlign: 'center', padding: '8px 0' }}
            item
            xs={4}
          >
            <Typography variant='subtitle2'>
              پیشرفت واقعی{' '}
              <span style={{ fontSize: '8px' }}>(%)</span>
            </Typography>
          </Grid>
          <Grid
            sx={{ textAlign: 'center', padding: '8px 0' }}
            item
            xs={4}
          >
            <Typography variant='subtitle2'>وضعیت</Typography>
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
                    sx={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      textAlign: 'center',
                      padding: '8px 0',
                    }}
                    item
                    xs={4}
                  >
                    <Typography variant='subtitle2'>
                      {product?.title}
                    </Typography>
                  </Grid>

                  <Grid
                    sx={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      textAlign: 'center',
                      padding: '8px 0',
                    }}
                    item
                    xs={4}
                  >
                    <Typography variant='subtitle2'>
                      <span style={{ fontSize: '12px' }}>%</span>
                      {product?.Validity}
                    </Typography>
                  </Grid>

                  <Grid
                    sx={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      textAlign: 'center',
                      padding: '8px 0',
                    }}
                    item
                    xs={4}
                  >
                    <Typography variant='subtitle2'>
                      <TrafficLight
                        trafficLight={product?.notpProvided}
                      />
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

export default ListLinkProject;
interface IProduct {
  title: string;
  Validity: number;
  notpProvided: string;
}
