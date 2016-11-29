import ReactTestUtils from 'react-addons-test-utils';
import assert from 'power-assert';
import _ from 'lodash';

global.assert = assert;
global._ = _;
global.render = (props) => {
  const renderer = ReactTestUtils.createRenderer();
  renderer.render(props);
  return renderer.getRenderOutput();
};
