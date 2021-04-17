const { selectionSort } = require('../../sort/selectionSort.js');
describe('selectionSort', () => {
  it('should search number in sorted array', () => {
    const inputArray = [12, 11, 13, 5, 6, 7];
    selectionSort(inputArray,inputArray.length);
    expect(inputArray).toEqual([5, 6, 7, 11, 12, 13]);
  });
});
