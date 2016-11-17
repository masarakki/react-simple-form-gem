import React from 'react';
import Datetime from '~/datetime';

describe('Datetime', () => {
  it('node is div tag', () => {
    const result = render(<Datetime />);
    assert(result.type === 'div');
    assert(result.props.className === 'form-inline');
  });

  it('default datetime', () => {
    const t = new Date("2016-01-01 09:00:00+0900");
    const result = render(<Datetime datetime={t} />);
    const values = result.props.children.filter(x => x.props).map(x => x.props.value);
    assert(JSON.stringify(values) === JSON.stringify([2016, 0, 1, 9, 0]));
  });
});
