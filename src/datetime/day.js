import React from 'react';
import _ from 'lodash';
import utils from '../utils';
import dateUtils from './utils';

class Day extends React.Component {
  render() {
    const name = utils.generateName(this.props.object, this.props.name, 3);
    const options = _.range(1, dateUtils.getDaysInMonth(this.props.year, this.props.month) + 1).map(d => <option value={d} key={d}>{d}</option>);

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

export default Day;
