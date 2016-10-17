import React from 'react';
import _ from 'lodash';
import utils from './utils';

const propTypes = {
  from: React.PropTypes.number,
  to: React.PropTypes.number
};

const thisYear = new Date().getFullYear();
const defaultProps = {
  from: thisYear - 5,
  to: thisYear + 5
};

class YearSelect extends React.Component {
  render() {
    const name = utils.generateName(this.props.object, this.props.name, 1);
    const options = _.range(this.props.from, this.props.to + 1).map(y => <option value={y} key={y}>{y}</option>);

    return (
      <select className="form-control"
              name={name}
              value={this.props.value}
              onChange={this.props.onChange}>
        {options}
      </select>
    );
  }
};

YearSelect.propTypes = propTypes;
YearSelect.defaultProps = defaultProps;

export default YearSelect;
