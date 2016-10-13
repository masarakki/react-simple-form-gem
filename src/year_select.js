import React from 'react';
import _ from 'lodash';

class YearInput extends React.Component {
  render() {
    const options = _.range(this.props.from, this.props.to + 1).map(y => {
      return (
        <option value={y}>{y}</option>
      );
    });

    return (
      <select className="form-control"
              value={this.props.year}>
        {options}
      </select>
    );
  }
};

const thisYear = new Date().getFullYear();
YearInput.defaultProps = {
  from: thisYear - 5,
  to: thisYear + 5
};

export default YearInput;
