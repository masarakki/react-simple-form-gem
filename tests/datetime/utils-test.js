import _ from 'lodash';
import utils from '~/datetime/utils';

describe('Datetime::Utils', () => {
  describe('isLeapYear', () => {
    it('1983 is not a leap year', () => {
      assert(utils.isLeapYear(1983) === false);
    });
    it('1984 is a leap year', () => {
      assert(utils.isLeapYear(1984) === true);
    });
    it('1000 is not leap year', () => {
      assert(utils.isLeapYear(1000) === false);
    });
    it('1600 is a leap year', () => {
      assert(utils.isLeapYear(1600) === true);
    });
  });

  describe('getDaysInMonth', () => {
    it('month is 0 origin', () => {
      assert(utils.getDaysInMonth(1983, 0) === 31);
    });

    describe('Febrary', () => {
      describe('of not a leap year', () => {
        it('should eq 28', () => {
          assert(utils.getDaysInMonth(1983, 1) === 28);
        });
      });

      describe('of a leap year', () => {
        it ('should eq 29', () => {
          assert(utils.getDaysInMonth(1984, 1) === 29);
        }) ;
      });
    });
  });
});
