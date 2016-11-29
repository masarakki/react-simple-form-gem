import React from 'react';
import Day from '~/datetime/day';

describe('Datetime::Day', () => {
  it('node is select tag', () => {
    const result = render(<Day />);
    assert(result.type === 'select');
  });

  it('generate name', () => {
    const result = render(<Day object="book" name="start_at" />);
    assert(result.props.name === 'book[start_at(3i)]');
  });

  it('contains days', () => {
    const result = render(<Day year="2000" month="1" />);
    assert(result.props.children.length === 29);
  });
});
