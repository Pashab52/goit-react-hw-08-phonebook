import { Helmet } from 'react-helmet';
import DateCalendarFormProps from 'components/DateCalendar/DateCalendar';




const Calendar = () => {
     
  return (
    <div>
      <Helmet>
        <title>Date Calendar</title>
      </Helmet>
      <h2>Date Calendar</h2>
      {DateCalendarFormProps()}
    </div>
  );
};

export default Calendar;


