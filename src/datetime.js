import React from 'react';
import dateUtils from './date-utils';

class DateTimeInput extends React.Component {

  handleChange() {
    this.props.onChange(this.refs.year.value,
                        this.refs.month.value,
                        Math.min(this.refs.date.value,
                                 dateUtils.getDaysInMonth(this.refs.year.value,
                                                          this.refs.month.value)),
                        this.refs.hours.value,
                        this.refs.minutes.value);
  }

  render() {
    const handleChange = this.handleChange.bind(this);
    const thisYear = new Date().getFullYear();
    const yearRange = _.range(thisYear - 5, thisYear + 5);

    const yearSelect = yearRange.map(y => {
      return (
        <option value={y} key={`year_${y}`}>
          {y}
        </option>
      );
    });
    const monthRange = ['January', 'Feburary', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const monthSelect = monthRange.map((m, i) => {
      return (
        <option value={i} key={`month_${i}`}>
          {m}
        </option>
      );
    });

    const dayRange = _.range(0, dateUtils.getDaysInMonth(this.props.datetime.getFullYear(),
                                                         this.props.datetime.getMonth()));
    const daySelect = dayRange.map(d => {
      return (
        <option value={d + 1} key={`day_${d + 1}`}>
          {d + 1}
        </option>
      );
    });

    const hourSelect = _.range(0, 24).map(h => {
      return (
        <option value={h} key={`hour_${h}`}>
          {h}
        </option>
      );
    });

    const minuteSelect = _.range(0, 60).map(m => {
      return (
        <option value={m} key={`minute_${m}`}>
          {m}
        </option>
      );
    });

    return(
      <div className="form-inline">
        <select className="form-control datetime"
                value={this.props.datetime.getFullYear()}
                onChange={handleChange}
                ref="year">
          {yearSelect}
        </select>
        &nbsp;
        <select className="form-control datetime"
                value={this.props.datetime.getMonth()}
                onChange={handleChange}
                ref="month">
          {monthSelect}
        </select>
        &nbsp;
        <select className="form-control datetime"
                value={this.props.datetime.getDate()}
                onChange={handleChange}
                ref="date">
          {daySelect}
        </select>
        —
        <select className="form-control datetime"
                value={this.props.datetime.getHours()}
                onChange={handleChange}
                ref="hours">
          {hourSelect}
        </select>
        :
        <select className="form-control datetime"
                value={this.props.datetime.getMinutes()}
                onChange={handleChange}
                ref="minutes">
          {minuteSelect}
        </select>
      </div>
    );
  }
}

export default DateTimeInput;
