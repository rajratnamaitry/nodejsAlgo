const { bubbleSort } = require('../../sort/bubbleSort.js');
describe('binarySearch', () => {
  it('should search number in sorted array', () => {
    expect(bubbleSort([3, 4, 2, 1, 0, 0, 4, 3, 4, 2])).toEqual([
        0, 0, 1, 2, 2,
        3, 3, 4, 4, 4
      ]);
  });
});
