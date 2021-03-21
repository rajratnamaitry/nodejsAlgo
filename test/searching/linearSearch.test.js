const { linearSearch } = require('../../searching/linearSearch.js');
describe('linearSearch', () => {
    it('should search all numbers in array', () => {
      const array = [1, 2, 4, 6, 2];
  
      expect(linearSearch(array, 10)).toEqual(-1);
      expect(linearSearch(array, 1)).toEqual(0);
      expect(linearSearch(array, 2)).toEqual(1);
    });
});  