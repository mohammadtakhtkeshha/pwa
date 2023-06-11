import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import { Avatar, Grid, IconButton, Tooltip } from '@mui/material';
import { Item } from 'components';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import CircleRoundedIcon from '@mui/icons-material/CircleRounded';
function CardInformationFerst(props: any) {
  const {
    Title,
    ProjectStatusNumber,
    backgroundFoter,
    TopLeftIcon,
    trafficLight,
    Red,
    Yellow,
    Green,
  } = props;
  return (
    <Card sx={{ margin: ' 30px 0 ' }}>
      <Grid container spacing={0} sx={{  padding: '0px 20px', }}>
        <Grid item xs={8}>
          <Item sx={{ display: 'flex', alignItems: 'center' }}>
            <Typography
              sx={{
                color: '#919aa3',
              }}
              variant='subtitle1'
              gutterBottom
            >
              {Title}
            </Typography>
          </Item>
        </Grid>
        <Grid item xs={4}>
          <Item
            sx={{
              marginTop:'3px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'end',
            }}
          >
            {TopLeftIcon}
          </Item>
        </Grid>
      </Grid>

      <>
        <>
          <Grid
            container
            spacing={0}
            sx={{
              padding: '30px 30px',
              background: backgroundFoter,
              display: 'flex',
              justifyContent: 'start',
              alignItems: 'center',
            }}
          >
            <Grid
              item
              xs={9}
              sx={{
                display: 'flex',
                justifyContent: 'start',
                alignItems:'center'
              }}
            >
              <Typography variant='subtitle1' sx={{ color: '#fff' }}>
                {ProjectStatusNumber}
              </Typography>
            </Grid>
            <Grid
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'end',
              }}
              item
              xs={3}
            >
              {!trafficLight ? (
                <TrendingUpIcon sx={{ color: 'white' }} />
              ) : (
                <>
                  <Grid
                    item
                    xs={12}
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      
                    }}
                  >
                    <Tooltip title='تایید نشده  '>
                      <IconButton>
                        {Red ? (
                          <Avatar
                            sx={{
                              width: 18,
                              height: 18,
                              bgcolor: 'red',
                              zIndex: '10',
                            }}
                          >
                            <CircleRoundedIcon
                              sx={{
                                width: 18,
                                height: 18,
                                color: 'red',
                              }}
                            />
                          </Avatar>
                        ) : (
                          <Avatar
                            sx={{
                              width: 18,
                              height: 18,
                              bgcolor: 'grey',
                            }}
                          >
                            <CircleRoundedIcon
                              sx={{ color: 'grey' }}
                            />
                          </Avatar>
                        )}
                      </IconButton>
                    </Tooltip>

                    <Tooltip title='در حال بررسی'>
                      <IconButton>
                        {Yellow ? (
                          <Avatar
                            sx={{
                              width: 18,
                              height: 18,
                              bgcolor: 'rgb(223 190 16 / 80%)',
                            }}
                          >
                            <CircleRoundedIcon
                              sx={{ color: 'rgb(223 190 16 / 80%)' }}
                            />
                          </Avatar>
                        ) : (
                          <Avatar
                            sx={{
                              width: 18,
                              height: 18,
                              bgcolor: 'grey',
                            }}
                          >
                            <CircleRoundedIcon
                              sx={{ color: 'grey' }}
                            />
                          </Avatar>
                        )}
                      </IconButton>
                    </Tooltip>

                    <Tooltip title='تایید شده  '>
                      <IconButton>
                        {Green ? (
                          <Avatar
                            sx={{
                              width: 18,
                              height: 18,
                              bgcolor: 'green',
                            }}
                          >
                            <CircleRoundedIcon
                              sx={{ color: 'green' }}
                            />
                          </Avatar>
                        ) : (
                          <Avatar
                            sx={{
                              width: 18,
                              height: 18,
                              bgcolor: 'grey',
                            }}
                          >
                            <CircleRoundedIcon
                              sx={{ color: 'grey' }}
                            />
                          </Avatar>
                        )}
                      </IconButton>
                    </Tooltip>
                  </Grid>
                </>
              )}
            </Grid>
          </Grid>
        </>
      </>
    </Card>
  );
}
export default CardInformationFerst;
