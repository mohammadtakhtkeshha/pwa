import { CardInformation, List } from 'components';
import AssignmentOutlinedIcon from '@mui/icons-material/AssignmentOutlined';
import AssignmentTurnedInOutlinedIcon from '@mui/icons-material/AssignmentTurnedInOutlined';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import TopicOutlinedIcon from '@mui/icons-material/TopicOutlined';
import ReactApexChart from 'react-apexcharts';
import { Card } from '@mui/material';
import ListModelFerst from 'components/list/ListModelFerst';
import ListModelSecond from 'components/list/ListModelSecond';

type Props = {};

const Process = (props: Props) => {
  return (
    <div>
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
      
      />

      {/* <List /> */}
      <ListModelFerst/>
      {/* <ListModelSecond/> */}

      <Card sx={{padding:'20px 20px' , margin:'30px 0 '}} >
        
        <ReactApexChart
          options={dataProscess.options}
          series={dataProscess.series}
          type='area'
          width={"100%"}
        />
      </Card>

    
      <Card sx={{padding:'20px 20px' , margin:'30px 0 '}} >
        
        <ReactApexChart
          options={pie1.options}
          series={pie1.series}
          type='pie'
          width={"100%"}
        />
      </Card>

      <Card sx={{padding:'20px 20px' , margin:'30px 0 '}} >
        
        <ReactApexChart
          options={pieTow.options}
          series={pieTow.series}
          type='pie'
          width={"100%"}
        />
      </Card>
    </div>
  );
};

export default Process;

var dataProscess = {
          
  series: [{
    name: 'اعتبار مورد نیاز',
    data: [
      {
        x: 1398,
        y: 394
      },
      {
        x: 1399,
        y: 656
      },
      {
        x: 1400,
        y: 510
      },
      {
        x: 1401,
        y: 600
      }
    ]
  }],
  options: {
    chart: {
      
        fontFamily: ' iranyekan !important',
    
      toolbar: {
        show: false,
      },
      type: 'area',
      height: 350
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'straight'
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
        show: false
      },
      axisTicks: {
        show: false
      }
    },
    yaxis: {
      tickAmount: 4,
      floating: false,
    
      labels: {
        style: {
          colors: '#8e8da4',
        },
        offsetY: -7,
        offsetX: 0,
      },
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false
      }
    },
    fill: {
      opacity: 0.5
    },
    tooltip: {
      x: {
        format: "yyyy",
      },
      fixed: {
        enabled: false,
        position: 'topRight'
      }
    },
    grid: {
      yaxis: {
        lines: {
          offsetX: -30
        }
      },
      padding: {
        left: 20
      }
    }
  },


}as any;

var pie1 = {
          
  series: [44, 55, 13, 43],
  options: {
    chart: {
      width: 150,
      type: 'pie',
    },

  
    title: {
      text: ' تفکیک اعتبارات مورد نیاز',
      align: 'center',
      style: {
        fontFamily: 'iranyekan !important',
        fontSize: '19',
        fontWeight: '400',
        color:"#919aa3",
      },
    },
    labels: ['اعتبار  اربعین', 'اعتبار ملی', 'اعتبار استانی', 'اعتبارات سفر'],
    responsive: [{
      breakpoint: 480,
      options: {
        chart: {
          width: 320
        },
        legend: {
          position: 'bottom'
        }
      }
    }]
  },


}as any;

var pieTow = {
          
  series: [44, 55, 13, 43],
  options: {
    chart: {
      width: 150,
      type: 'pie',
    },

  
    title: {
      text: ' تفکیک اعتبارات محقق شده',
      align: 'center',
      style: {
        fontFamily: 'iranyekan !important',
        fontSize: '19',
        fontWeight: '400',
        color:"#919aa3",
      },
    },
    labels: ['ملی', 'اربعین', 'استانی', 'سفر' ],
    responsive: [{
      breakpoint: 480,
      options: {
        chart: {
          width: 320
        },
        legend: {
          position: 'bottom'
        }
      }
    }]
  },


}as any;

