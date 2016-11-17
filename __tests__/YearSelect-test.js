import React from 'react';
import ReactDOM from 'react-dom';
import ReactTestUtils from 'react-addons-test-utils';
import assert from 'power-assert';
import YearSelect from '~/year_select';

const renderer = ReactTestUtils.createRenderer();

describe('YearSelect', () => {
  it('node is select tag', () => {
    const year = ReactTestUtils.renderIntoDocument(
      <YearSelect />
    );
    const dom = ReactDOM.findDOMNode(year);
    assert(dom.nodeName === 'SELECT');
  });
});
