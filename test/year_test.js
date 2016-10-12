import React from 'react';
import ReactTestUtils from 'react/lib/ReactTestUtils';
import ReactDOM from 'react-dom';
import YearSelect from '~/year_select';

describe('Year', () => {
  it('Should output year select', () => {
    let instance = ReactTestUtils.renderIntoDocument(
      <YearSelect year={2019} />
    );

    assert.equal(ReactDOM.findDOMNode(instance).nodeName, 'SELECT');
  });
});
