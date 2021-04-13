const { heapSort } = require('../../sort/heapSort.js');
describe('heapSort', () => {
  it('should search number in sorted array', () => {
    const inputArray = [12, 11, 13, 5, 6, 7];
    heapSort(inputArray,inputArray.length);
    expect(inputArray).toEqual([5, 6, 7, 11, 12, 13]);
  });
});
