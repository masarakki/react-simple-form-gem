import React from 'react';
import _ from 'lodash';
import utils from './date-utils';

class YearSelect extends React.Component {
  render() {
    const name = utils.generateName(this.props.object, this.props.name, 1);
    const options = _.range(this.props.from, this.props.to + 1).map(y => {
      const key = `year_${y}`;
      return (
        <option value={y} key={key}>{y}</option>
      );
    });
    const handleChange = () => {
      this.props.onChange('year', this.refs.year.value);
    };

    return (
      <select className="form-control"
              name={name}
              value={this.props.value}
              onChange={handleChange}
              ref="year">
        {options}
      </select>
    );
  }
};

const thisYear = new Date().getFullYear();
YearSelect.defaultProps = {
  from: thisYear - 5,
  to: thisYear + 5
};

export default YearSelect;
