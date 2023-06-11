import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Item } from 'components/commonStyles';
import { Card, Divider, Typography } from '@mui/material';

const initialProducts: IProduct[] = [
  {
    title: 'عنوان پروژه',
    Validity: 'اربعین ملی',
    notpProvided: 12000,
    realization: 18,
  },
  {
    title: 'کارگروه ',
    Validity: 'وزارت کشور',
    notpProvided: 12000,
    realization: 18,
  },
  {
    title: 'استان ',
    Validity: 'ایلام ',
    notpProvided: 12000,
    realization: 18,
  },
  {
    title: 'نوع پروژه ',
    Validity: ' پایانه مرزی',
    notpProvided: 12000,
    realization: 18,
  },
];

function ListFoundation() {
  const [products, setProducts] = React.useState(initialProducts);

  return (
    <Card>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={0}>
          <Grid
            sx={{ textAlign: 'center', padding: '8px 0' }}
            item
            xs={12}
          >
            <Typography variant='subtitle2'>اطلاعات پایه </Typography>
          </Grid>
        </Grid>
      </Box>

      <Box sx={{backgroundColor:"#f3f3f3"}}>
        <div className={'App-container'}>
          {products.map((product: any) => {
            return (
              <>
              <Grid  key={product?.Validity} container spacing={0}>
                <Grid
                  sx={{ textAlign: 'center', padding: '8px 0' }}
                  item
                  xs={6}
                >
                  <Typography variant='subtitle2'>
                    {product?.title}
                  </Typography>
                </Grid>
                <Grid
                  sx={{ textAlign: 'center', padding: '8px 0' }}
                  item
                  xs={6}
                >
                  <Typography variant='subtitle2'>
                    {product?.Validity}
                  </Typography>
                </Grid>
              </Grid>
                <Divider variant="middle" />
                </>
            );
          })}
        </div>
      </Box>
    </Card>
  );
}

export default ListFoundation;
interface IProduct {
  title: string;
  Validity: string;
  notpProvided: number;
  realization: number;
}
