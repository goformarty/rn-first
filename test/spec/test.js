(function () {
  'use strict';

  describe('Roman Numerals', function () {
    describe('convert arabic to roman', function () {
      it('converts -1 to ""', function () {
        expect(convert(-1)).toBe('');
      });
      it('converts 0 to ""', function () {
        expect(convert(0)).toBe('');
      });
      it('converts 1 to "I"', function () {
        expect(convert(1)).toBe('I');
      });
      it('converts 2 to "II"', function () {
        expect(convert(2)).toBe('II');
      });
      it('converts 3 to "III"', function () {
        expect(convert(3)).toBe('III');
      });
      it('converts 4 to "IV"', function () {
        expect(convert(4)).toBe('IV');
      });
      it('converts 5 to "V"', function () {
        expect(convert(5)).toBe('V');
      });
    });
  });
})();
