import React from 'react';
import _ from 'lodash';
import utils from './utils';
import dateUtils from './date-utils';

class DateSelect extends React.Component {
  render() {
    const name = utils.generateName(this.props.object, this.props.name, 3);
    const options = _.range(1, dateUtils.getDaysInMonth(this.props.year, this.props.month) + 1).map(d => {
      const key = `date_${d}`;
      return (
        <option value={d} key={key}>{d}</option>
      );
    });
    return (
      <select className="form-control"
              name={name}
              value={this.props.value}
              onChange={this.props.onChange}>
        {options}
      </select>
    );
  }
}

export default DateSelect;
