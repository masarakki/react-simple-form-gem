import React from 'react';
import _ from 'lodash';

class YearInput extends React.Component {
  render() {
    const options = this.props.yearRange.map(y => {
      return (
        <option value={y}
                selected={this.props.year == y && "selected"}>
          {y}
        </option>
      );
    });

    return (
      <select className="form-control">
        {options}
      </select>
    );
  }
};

const thisYear = new Date().getFullYear();
YearInput.defaultProps = {
  yearRange: _.range(thisYear - 5, thisYear + 5)
};

export default YearInput;
