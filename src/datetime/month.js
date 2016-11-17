import React from 'react';
import utils from '../utils';

const month_en = ['January', 'Febrary', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

class Month extends React.Component {
  render() {
    const name = utils.generateName(this.props.object, this.props.name, 2);
    const options = month_en.map((m, i) => <option value={i + 1} key={i + 1 }>{m}</option>);

    return (
      <select className="form-control"
              name={name}
              value={this.props.value + 1}
              onChange={this.props.onChange}>
        {options}
      </select>
    );
  }
}

export default Month;
