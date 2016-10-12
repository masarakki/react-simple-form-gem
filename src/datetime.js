import React from 'react';
import dateUtils from './date-utils';
import YearSelect from './year_select';
import MonthSelect from './month_select';
import DateSelect from './date_select';
import SimpleSelect from './simple_select';
import _ from 'lodash';

const propTypes = {
  datetime: React.PropTypes.object
};

const defaultProps = {
  datetime: new Date()
};

class DateTimeInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      year: props.datetime.getFullYear(),
      month: props.datetime.getMonth(),
      date: props.datetime.getDate(),
      hours: props.datetime.getHours(),
      minutes: props.datetime.getMinutes(),
      seconds: 0
    };
  }

  handleChange(key, value) {
    const state = this.state;

    state[key] = Number(value);
    state.date = Math.min(state.date, dateUtils.getDaysInMonth(state.year, state.month));
    this.setState(state);

    if (this.props.onChange) {
      this.props.onChange.call(this, new Date(state.year, state.month, state.date, state.hours, state.minutes, state.seconds));
    }
  }

  render() {
    const handleChange = this.handleChange.bind(this);

    return(
      <div className="form-inline">
        <YearSelect
           value={this.state.year}
           object={this.props.object}
           name={this.props.name}
           onChange={handleChange} />
        &nbsp;
        <MonthSelect
           value={this.state.month}
           object={this.props.object}
           name={this.props.name}
           onChange={handleChange} />
        &nbsp;
        <DateSelect
           value={this.state.date}
           year={this.state.year}
           month={this.state.month}
           object={this.props.object}
           name={this.props.name}
           onChange={handleChange} />
        —
        <SimpleSelect
           value={this.state.hours}
           from={0} to={23} format="%02d"
           object={this.props.object}
           name={this.props.name}
           order={4}
           onChange={h => handleChange('hours', h.target.value)} />
          :
          <SimpleSelect
             value={this.state.minutes}
             from={0} to={59} format="%02d"
             object={this.props.object}
             name={this.props.name}
             order={5}
             onChange={m => handleChange('minutes', m.target.value)} />
      </div>
    );
  }
}

DateTimeInput.propTypes = propTypes;
DateTimeInput.defaultProps = defaultProps;

export default DateTimeInput;
