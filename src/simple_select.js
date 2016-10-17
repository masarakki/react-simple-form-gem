import React from 'react';
import _ from 'lodash';
import { sprintf } from 'sprintf-js';
import utils from './utils';

const propTypes = {
  from: React.PropTypes.number,
  to: React.PropTypes.number,
  object: React.PropTypes.number,
  name: React.PropTypes.string,
  order: React.PropTypes.number,
  format: React.PropTypes.string
};

const defaultProps = {
  from: 0,
  order: null
};

class SimpleSelect extends React.Component {
  render() {
    const options = _.range(this.props.from, this.props.to + 1).map(v => {
      const string = this.props.format ? sprintf(this.props.format, v) : v;
      return <option value={v} key={v}>{string}</option>;
    });
    const name = utils.generateName(this.props.object,
                                    this.props.name,
                                    this.props.order);

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

SimpleSelect.propTypes = propTypes;
SimpleSelect.defaultProps = defaultProps;

export default SimpleSelect;
