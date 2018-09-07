'use strict';
var date;

const Calendar = function (props) {
  date = props;

  const Day = function() {
    return <div className="ui-datepicker-material-day">{date.date.toLocaleString("ru", {weekday: 'long'})}</div>
  };

  const Today = function() {
    return (
      <div className="ui-datepicker-material-date">
        <div className="ui-datepicker-material-day-num">{date.date.toLocaleString("ru", {day: 'numeric'})}</div>
        <div className="ui-datepicker-material-month">{date.date.toLocaleString("ru", {month: 'long'})}</div>
        <div className="ui-datepicker-material-year">{date.date.toLocaleString("ru", {year: 'numeric'})}</div>
      </div>
    )
  };

  const DatePicker = function() {
    return (
      <div className="ui-datepicker-header">
        <div className="ui-datepicker-title">
          <span className="ui-datepicker-month">{date.date.toLocaleString("ru", {month: 'long'})}</span>&nbsp;<span class="ui-datepicker-year">{date.date.toLocaleString("ru", {year: 'numeric'})}</span>
        </div>
      </div>
    )
  }

  return (
    <div className="ui-datepicker">
      <div className="ui-datepicker-material-header">
        <Day />
        <Today />
        <DatePicker />
      </div>
    </div>
  )
}