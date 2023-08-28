import * as React from 'react';
import dayjs from 'dayjs';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import css from './DateCalendar.module.css'

export default function DateCalendarFormProps() {
       return (
         <div className={css.calendarWrap}>
           <LocalizationProvider dateAdapter={AdapterDayjs}>
             <DemoContainer components={['DateCalendar', 'DateCalendar']}
             >
               <DemoItem>
                 <DateCalendar defaultValue={dayjs(new Date())} readOnly />
               </DemoItem>
             </DemoContainer>
           </LocalizationProvider>
         </div>
       );
     }
    