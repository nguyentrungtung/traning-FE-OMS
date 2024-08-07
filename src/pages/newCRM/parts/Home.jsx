import Header from '../../../modules/header/Header'
import 'react-toastify/dist/ReactToastify.css'; // Import CSS của Toastify
import ButtonComp from '../../../modules/components/ui/button/Button';
import Chart from '../../../modules/newCrm/charts/Chart'
import HorizontalBarChart from '../../../modules/newCrm/charts/content/HorizontalBarChart'
import LineChart from '../../../modules/newCrm/charts/content/LineChart'
import StackedChart from '../../../modules/newCrm/charts/content/StackedChart'
import Notification from '../../../modules/components/notification/Notification'
import GeneralReport from '../../../modules/newCrm/components/GeneralReport';
import { useState, useEffect } from 'react';

function Home() {
  const [notifications, setNotifications] = useState([]);
  useEffect(()=>{
      fetch('https://api.npoint.io/02017302163f77777d88')
      .then(response => response.json())
      .then(data => setNotifications(data));
  }, [])
  const [dateText, setDateText] = useState('Hôm nay')
  
  function onChangeDateText(prop){
    setDateText(prop);
  }
  const [activeChart1, setActiveChart1] = useState(1)
  const [activeChart2, setActiveChart2] = useState(1)
  const [activeChart3, setActiveChart3] = useState(1)
  return (
    <div className="App">
      <Header />
      <main className='d-flex gap-12px'>
        <div className="main-part flex-fill">
          <GeneralReport dateTextProps={onChangeDateText}/>
          <Chart.Wrapper>
            <Chart.Header>
              <Chart.Title>Doanh thu {dateText}</Chart.Title>
              <Chart.ActionTab>
                <ButtonComp className={activeChart1 === 1 ? 'tab--active btn--pill': 'btn--pill'} onClick={()=>{setActiveChart1(1)}}>Theo ngày</ButtonComp>
                <ButtonComp className={activeChart1 === 2 ? 'tab--active btn--pill': 'btn--pill'} onClick={()=>{setActiveChart1(2)}}>Theo thứ</ButtonComp>
                <ButtonComp className={activeChart1 === 3 ? 'tab--active btn--pill': 'btn--pill'} onClick={()=>{setActiveChart1(3)}}>Theo giờ</ButtonComp>
              </Chart.ActionTab>
            </Chart.Header>
            <Chart.Body>
              <LineChart/>
            </Chart.Body>
          </Chart.Wrapper>
          {/* Chart 2 */}
          <Chart.Wrapper>
            <Chart.Header>
              <Chart.Title>Doanh thu {dateText}</Chart.Title>
              <Chart.ActionTab>
                <ButtonComp className={activeChart2 === 1 ? 'tab--active btn--pill': 'btn--pill'} onClick={()=>{setActiveChart2(1)}} >Theo ngày</ButtonComp>
                <ButtonComp className={activeChart2 === 2 ? 'tab--active btn--pill': 'btn--pill'} onClick={()=>{setActiveChart2(2)}} >Theo thứ</ButtonComp>
                <ButtonComp className={activeChart2 === 3 ? 'tab--active btn--pill': 'btn--pill'} onClick={()=>{setActiveChart2(3)}} >Theo giờ</ButtonComp>
              </Chart.ActionTab>
            </Chart.Header>
            <Chart.Body>
              <StackedChart/>
            </Chart.Body>
          </Chart.Wrapper>
          {/* Chart 3 */}
          <Chart.Wrapper>
            <Chart.Header>
              <Chart.Title>Doanh thu {dateText}</Chart.Title>
              <Chart.ActionTab>
                <ButtonComp className={activeChart3 === 1 ? 'tab--active btn--pill': 'btn--pill'} onClick={()=>{setActiveChart3(1)}}>Theo doanh thu</ButtonComp>
                <ButtonComp className={activeChart3 === 2 ? 'tab--active btn--pill': 'btn--pill'} onClick={()=>{setActiveChart3(2)}}>Theo số lượng</ButtonComp>
              </Chart.ActionTab>
            </Chart.Header>
            <Chart.Body>
              <HorizontalBarChart/>
            </Chart.Body>
          </Chart.Wrapper>
          {/* 
          <ChartWrapper>
            <ChartWrapperHeader>
              <ChartWrapperTitle>Top 10 sản phẩm bán chạy </ChartWrapperTitle>
              <ChartWrapperTabs>
              </ChartWrapperTabs>
            </ChartWrapperHeader>
            <ChartWrapperBody>
              <HorizontalBarChart/>
            </ChartWrapperBody>
          </ChartWrapper> */}
        </div>
        <Notification.Wrapper>
          <Notification.Header>
            Thông báo
          </Notification.Header>
          <Notification.Body data={notifications}></Notification.Body>
          <Notification.Footer/>
        </Notification.Wrapper>
      </main>
    </div>
  );
}

export default Home;