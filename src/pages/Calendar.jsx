import { Helmet } from 'react-helmet';
import DateCalendarFormProps from 'components/DateCalendar/DateCalendar';




const Calendar = () => {
     
  return (
    <div>
      <Helmet>
        <title>Calendar</title>
      </Helmet>
      
      {DateCalendarFormProps()}
    </div>
  );
};

export default Calendar;


