import React from 'react';
import utils from './date-utils';

const month_en = ['January', 'Febrary', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

class MonthSelect extends React.Component {
  render() {
    const name = `${this.props.object}[${this.props.name}(2i)}]`;
    const options = month_en.map((m, i) => {
      const key = `month_${i}`;
      return (
        <option value={i + 1} key={key}>{m}</option>
      );
    });
    const handleChange = () => {
      this.props.onChange('month', this.refs.month.value - 1);
    };
    return (
      <select className="form-control"
              name={name}
              value={this.props.value + 1}
              onChange={handleChange}
              ref="month">
        {options}
      </select>
    );
  }
}

export default MonthSelect;
