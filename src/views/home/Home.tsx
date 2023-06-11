import { CardInformation } from 'components';
import AssignmentOutlinedIcon from '@mui/icons-material/AssignmentOutlined';
import AssignmentTurnedInOutlinedIcon from '@mui/icons-material/AssignmentTurnedInOutlined';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import TopicOutlinedIcon from '@mui/icons-material/TopicOutlined';
import ReactApexChart from 'react-apexcharts';
import { Card } from '@mui/material';
import CardInformationFerst from 'components/card/cardInformation/CardInformationFerst';

const dataArea = {
  series: [
    {
      name: 'اعتبار مورد نیاز',
      data: [
        {
          x: 1369,
          y: 322,
        },
        {
          x: 1370,
          y: 324,
        },
        {
          x: 1371,
          y: 329,
        },
        {
          x: 1372,
          y: 342,
        },
        {
          x: 1373,
          y: 348,
        },
        {
          x: 1374,
          y: 334,
        },
        {
          x: 1375,
          y: 325,
        },
        {
          x: 1376,
          y: 316,
        },
        {
          x: 1377,
          y: 318,
        },
        {
          x: 1378,
          y: 330,
        },
        {
          x: 1379,
          y: 355,
        },
        {
          x: 1380,
          y: 366,
        },
        {
          x: 1381,
          y: 337,
        },
        {
          x: 1382,
          y: 352,
        },
        {
          x: 1383,
          y: 377,
        },
        {
          x: 1384,
          y: 383,
        },
        {
          x: 1385,
          y: 344,
        },
        {
          x: 1386,
          y: 366,
        },
        {
          x: 1387,
          y: 389,
        },
        {
          x: 1388,
          y: 334,
        },
      ],
    },
    {
      name: 'اعتبار محقق شده',
      data: [
        {
          x: 1369,
          y: 222,
        },
        {
          x: 1370,
          y: 224,
        },
        {
          x: 1371,
          y: 229,
        },
        {
          x: 1372,
          y: 242,
        },
        {
          x: 1373,
          y: 248,
        },
        {
          x: 1374,
          y: 234,
        },
        {
          x: 1375,
          y: 225,
        },
        {
          x: 1376,
          y: 216,
        },
        {
          x: 1377,
          y: 218,
        },
        {
          x: 1378,
          y: 230,
        },
        {
          x: 1379,
          y: 255,
        },
        {
          x: 1380,
          y: 266,
        },
        {
          x: 1381,
          y: 237,
        },
        {
          x: 1382,
          y: 252,
        },
        {
          x: 1383,
          y: 277,
        },
        {
          x: 1384,
          y: 283,
        },
        {
          x: 1385,
          y: 244,
        },
        {
          x: 1386,
          y: 266,
        },
        {
          x: 1387,
          y: 289,
        },
        {
          x: 1388,
          y: 234,
        },
      ],
    },
  ],
  options: {
    chart: {
      fontFamily: 'iranyekan !important',
      toolbar: {
        show: false,
      },
      type: 'area',
      height: 350,
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: 'straight',
    },

    title: {
      text: 'نمودار پیشرفت اعتبارات',
      align: 'center',
      style: {
        fontFamily: 'iranyekan !important',
        fontSize: '19',
        fontWeight: '400',
        color:"#919aa3",
      },
    },
    xaxis: {
      type: 'datetime',
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
    yaxis: {
      tickAmount: 4,
      floating: false,

      labels: {
        style: {
          colors: '#919aa3',
        },
        offsetY: -7,
        offsetX: 0,
      },
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
    fill: {
      opacity: 0.5,
    },
    tooltip: {
      x: {
        format: 'yyyy',
      },
      fixed: {
        enabled: false,
        position: 'topRight',
      },
    },
    grid: {
      yaxis: {
        lines: {
          offsetX: -30,
        },
      },
      padding: {
        left: 20,
      },
    },
  },
} as any;

function Home() {
  return (
    <div>
      <CardInformation
        Title={'تعداد کل پروژه ها'}
        ProjectStatusNumber={'12 پروژه '}
        backgroundFoter={'linear-gradient(to right,#0ac282,#0df3a3)'}
        TopLeftIcon={<TopicOutlinedIcon />}
      />
      <CardInformation
        Title={'پیشرفت برنامه'}
        ProjectStatusNumber={'24.08%'}
        backgroundFoter={'linear-gradient(to right,#fe9365,#feb798)'}
        TopLeftIcon={<AssignmentOutlinedIcon />}
      />
        <CardInformationFerst
       Title={'پیشرفت برنامه'}
       ProjectStatusNumber={'24.08%'}
       backgroundFoter={'linear-gradient(to right,#fe9365,#feb798)'}
       TopLeftIcon={<AssignmentOutlinedIcon />}
      />
      
      <CardInformation
        Title={'پیشرفت واقعی'}
        ProjectStatusNumber={'26.6%'}
        backgroundFoter={'linear-gradient(to right,#01a9ac,#01dbdf)'}
        TopLeftIcon={<AssignmentTurnedInOutlinedIcon />}
        trafficLight={true}
        Yellow={true}
      />
    
      <CardInformation
        Title={'اعتبار مورد نیاز'}
        ProjectStatusNumber={'65,284,588,111,424,7 میلیارد تومان'}
        backgroundFoter={'linear-gradient(to right,#fe5d70,#fe909d)'}
        TopLeftIcon={<AccountBalanceWalletOutlinedIcon />}
      />

      <CardInformation
        Title={'اعتبار محقق شده'}
        ProjectStatusNumber={'12,323,123 میلیارد تومان'}
        backgroundFoter={'linear-gradient(to right,#01a9ac,#01dbdf)'}
        TopLeftIcon={<AccountBalanceWalletOutlinedIcon />}
        trafficLight={true}
        Red={true}
      />

      <Card sx={{ padding: '0 20px' }}>
        <ReactApexChart
          options={dataArea.options}
          series={dataArea.series}
          type='area'
          width={'100%'}
        />
      </Card>
    </div>
  );
}
export default Home;
