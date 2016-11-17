import React from 'react';
import Year from '~/datetime/year';

describe('Datetime::Year', () => {
  it('node is select tag', () => {
    const result = render(<Year />);
    assert(result.type === 'select');
  });

  it('generate name', () => {
    const result = render(<Year object="book" name="start_at" />);
    assert(result.props.name === 'book[start_at(1i)]');
  });

  it('default range', () => {
    const result = render(<Year />);
    const [option] = result.props.children;
    const year = new Date().getFullYear() - 5;

    assert(result.props.children.length === 11);
    assert(option.type === 'option');
    assert(option.props.value === year);
  });
});
