import React, { useState } from "react";
import {vi} from "date-fns/locale";
import {addDays} from "date-fns";
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRange } from 'react-date-range';
import Button from "../ui/button/Button";
import './_date-picker.scss'

function DatePickerDropdown(){
    const [state, setState] = useState([
      {
        startDate: new Date(),
        endDate: addDays(new Date(), 0),
        key: "selection",
      },
    ]);
    return (
      <div className="date-range-picker">
        <DateRange
          onChange={(item) => setState([item.selection])}
          showSelectionPreview={true}
          moveRangeOnFirstSelection={false}
          ranges={state}
          className="date-range-picker__body"
          locale={vi}
          showMonthAndYearPickers={false}
        />
      </div>
    );
  };
  
  
  export default DatePickerDropdown;