const { insertionSort } = require('../../sort/insertionSort.js');
describe('insertionSort', () => {
  it('should search number in sorted array', () => {
    const inputArray = [12, 11, 13, 5, 6, 7];
    insertionSort(inputArray,inputArray.length);
    expect(inputArray).toEqual([5, 6, 7, 11, 12, 13]);
  });
});
