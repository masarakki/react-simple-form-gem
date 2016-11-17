import React from 'react';
import Month from '~/datetime/month';

describe('Datetime::Month', () => {
  it('node is select tag', () => {
    const result = render(<Month />);
    assert(result.type === 'select');
  });

  it('generate name', () => {
    const result = render(<Month object="book" name="start_at" />);
    assert(result.props.name === 'book[start_at(2i)]');
  });

  it('contains month', () => {
    const result = render(<Month />);
    const [jun] = result.props.children;
    assert(result.props.children.length === 12);
    assert(jun.type === 'option');
    assert(jun.props.value === 1);
    assert(jun.props.children === 'January');
  });
});
