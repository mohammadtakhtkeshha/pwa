import { Avatar, Grid, IconButton, Tooltip } from '@mui/material';
import CircleRoundedIcon from '@mui/icons-material/CircleRounded';

const TrafficLight = (props: any) => {
  const { trafficLight } = props;

  return (
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
          <IconButton sx={{ padding: '4px' }}>
            {trafficLight === 'Red' ? (
              <Avatar
                sx={{
                  width: 18,
                  height: 18,
                  bgcolor: 'red',
                  zIndex: '10',
                }}
              >
                <CircleRoundedIcon
                  sx={{ width: 18, height: 18, color: 'red' }}
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
                <CircleRoundedIcon sx={{ color: 'grey' }} />
              </Avatar>
            )}
          </IconButton>
        </Tooltip>

        <Tooltip title='در حال بررسی'>
          <IconButton sx={{ padding: '4px' }}>
            {trafficLight === 'Yellow' ? (
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
                <CircleRoundedIcon sx={{ color: 'grey' }} />
              </Avatar>
            )}
          </IconButton>
        </Tooltip>

        <Tooltip title='تایید شده  '>
          <IconButton sx={{ padding: '4px' }}>
            {trafficLight === 'Green' ? (
              <Avatar
                sx={{
                  width: 18,
                  height: 18,
                  bgcolor: 'green',
                }}
              >
                <CircleRoundedIcon sx={{ color: 'green' }} />
              </Avatar>
            ) : (
              <Avatar
                sx={{
                  width: 18,
                  height: 18,
                  bgcolor: 'grey',
                }}
              >
                <CircleRoundedIcon sx={{ color: 'grey' }} />
              </Avatar>
            )}
          </IconButton>
        </Tooltip>
      </Grid>
    </>
  );
};

export default TrafficLight;
