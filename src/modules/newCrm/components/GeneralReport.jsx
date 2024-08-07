import React from "react";
import "../newCrm.scss";
import Button from "../../components/ui/button/Button";
import { Dropdown } from "react-bootstrap";
import { useState, useEffect } from "react";
import DatePickerDropdown from '../../components/date-picker/Content';
import ReportCard from "./ReportCard";
import { getDate } from "date-fns";

export default function GeneralReport({dateTextProps}){
    // FUNCTIONS
    const report_card_1 = [[ 'Doanh thu', '1,000,480,000 VND']]
    const report_card_2 = [['Đơn hàng', '10k'], ['Chờ xử lý', '1k'], ['Hoàn thành', '1,2k'], ['Huỷ và hoàn trả', '7.8k']]
    const getToday = ()=>{
        let today = new Date();
        let month = today.getMonth() + 1;
        let year = today.getFullYear();
        let date = today.getDate();
        return `Hôm nay, ${date}/${month}/${year}`;
    }
    const getYesterday = ()=>{
        let today = new Date();
        let month = today.getMonth() + 1;
        let year = today.getFullYear();
        let date = today.getDate() - 1;
        let datesOfLastMonth = new Date(today.getFullYear(), today.getMonth(), 0);
        if(date < 1){
            date = datesOfLastMonth.getDate();
            month = datesOfLastMonth.getMonth() +1;
        }
        return `Hôm qua, ${date}/${month}/${year}`;
    }
    const getLast7Days = ()=>{
        let today = new Date();
        let datesOfLastMonth = new Date(today.getFullYear(), today.getMonth(), 0);
        let endYear = today.getFullYear();
        let endMonth = today.getMonth() + 1;
        let endDate = today.getDate();
        //
        let startYear = today.getFullYear();
        let startMonth = today.getMonth() + 1;
        let startDate = today.getDate() - 6;
        if(startDate < 1){
            startDate = datesOfLastMonth.getDate() + startDate;
            startMonth = today.getMonth();
        }
        return `7 ngày qua, ${startDate}/${startMonth}/${startYear} - ${endDate}/${endMonth}/${endYear}`;
    }
    const getDatesLastMonth = ()=>{
        let today = new Date();
        let datesOfLastMonth = new Date(today.getFullYear(), today.getMonth(), 0);
        return `Tháng trước, 1 - ${datesOfLastMonth.getDate()}/${datesOfLastMonth.getMonth() +1}/${datesOfLastMonth.getFullYear()}`
    }
    const getDatesPassedThisMonth = ()=>{
        let today = new Date();
        let endYear = today.getFullYear();
        let endMonth = today.getMonth() + 1;
        let endDate = today.getDate();
        return `Tháng này, 1 - ${endDate}/${endMonth}/${endYear}`;
    }
    const getDateFunctions = [getYesterday, getToday, getLast7Days, getDatesPassedThisMonth , getDatesLastMonth, '']
    const getDateFunctionsNames = ['Hôm qua', "Hôm nay", "7 ngày qua", "Tháng này", "Tháng Trước", "Tuỳ chỉnh"]

    // HOOKS
    const [date, setDate] = useState(getToday())
    const [dateText, setDateText] = useState('Hôm nay')
    const [showCalendar, setShowCalendar] = useState(false)
    const [companyBranch, setCompanyBranch] = useState('Tất cả chi nhánh')
    const [dateChecked, setDateChecked] = useState(1)
    const [locationBranchChecked, setLocationBranchChecked] = useState(1)
    useEffect(() => {
        const datePickerScript = document.createElement('script');
        datePickerScript.src = "../../../../src/utilities/helpers/datesFormatter.js";
        datePickerScript.async = true;
        document.body.appendChild(datePickerScript);
        return () => {
            document.body.removeChild(datePickerScript);
        }
    }, [showCalendar]);
    useEffect(()=>{
        dateTextProps(dateText);
    }, [dateText])

    return(
        <>
        <div className="general-report">
            <div className="general-report__header">
                <div className="title">Kết quả bán hàng</div>  
                <div className="menu">
                    <Dropdown className="dropdown--date">
                        <Dropdown.Toggle className="btn btn--pill btn--white text--primary">
                            {date}
                        </Dropdown.Toggle>
                        <div className="d-flex position-absolute dropdown-wrapper--date-picker">
                            <Dropdown.Menu className="position-static">
                                {getDateFunctionsNames.map((item, index)=>{
                                    if(index == getDateFunctionsNames.length-1){
                                        return (
                                            <Dropdown.Item className={dateChecked === index ? 'dropdown-item--active': ''} key={index} onClick={()=>{setDate('Tuỳ chỉnh'), setShowCalendar(true), setDateChecked(index), setDateText(getDateFunctionsNames[index])}}>
                                                <span>{item}</span>
                                                <i className="fas fa-check"></i>
                                            </Dropdown.Item>
                                        )
                                    }
                                    else{
                                        return (<Dropdown.Item className={dateChecked === index ? 'dropdown-item--active': ''} key={index} onClick={()=>{setDate(getDateFunctions[index], setDateChecked(index)), setShowCalendar(false), setDateText(getDateFunctionsNames[index])}}>
                                            <span>{item}</span>
                                            <i className="fas fa-check"></i>
                                        </Dropdown.Item>)
                                    }
                                })}
                            </Dropdown.Menu>
                            {showCalendar && 
                                <div className="date-range-picker__wrapper">
                                    <DatePickerDropdown/>
                                    <div className="date-range-picker__footer d-flex">
                                        <Button className="btn btn--light-primary flex-fill" onClick={()=>setShowCalendar(false)}>Quay lại</Button>
                                        <Button className="btn btn--primary flex-fill" onClick={()=>{setShowCalendar(false)}}>Xác nhận</Button>
                                    </div>
                                </div>
                            }
                        </div>
                    </Dropdown>
                    <Dropdown className="dropdown--date">
                        <Dropdown.Toggle className="btn btn--pill btn--white text--primary">
                            {companyBranch}
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item className={locationBranchChecked === 1 ? 'dropdown-item--active': ''} onClick={()=>{setCompanyBranch('Chi nhánh 1'), setLocationBranchChecked(1)}}>
                                <span>Chi nhánh 1</span>
                                <i className="fas fa-check"></i>
                            </Dropdown.Item>
                            <Dropdown.Item className={locationBranchChecked === 2 ? 'dropdown-item--active': ''} onClick={()=>{setCompanyBranch('Chi nhánh 2'), setLocationBranchChecked(2)}}>
                                <span>Chi nhánh 2</span>
                                <i className="fas fa-check"></i>
                            </Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
            </div>
            <div className="general-report__body">
                <ReportCard color='orange' data={report_card_1} icon='money-bag'/>
                <ReportCard color='pink' data={report_card_2} icon='receipt'/>
            </div>
        </div>
        </>
    )
}
// const Dropdown = () => {
//   const [activeIndex, setActiveIndex] = useState(null); // Theo dõi item hiện tại đang được chọn

//   // Danh sách các item cho dropdown
//   const items = ['Item 1', 'Item 2', 'Item 3', 'Item 4'];

//   const handleItemClick = (index) => {
//     setActiveIndex(index); // Đặt item được chọn hiện tại
//   };

//   return (
//     <div className="dropdown">
//       <button className="dropdown-button">Dropdown</button>
//       <div className="dropdown-menu">
//         {items.map((item, index) => (
//           <div
//             key={index}
//             className={`dropdown-item ${activeIndex === index ? 'active' : ''}`} // Thêm class 'active' nếu item được chọn
//             onClick={() => handleItemClick(index)}
//           >
//             {item}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Dropdown;