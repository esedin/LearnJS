const assert = require('assert');

function flatten(arr) {
   if (Array.isArray(arr)) {
      return arr.reduce(function(done,curr){
         return done.concat(flatten(curr));
      }, []);
   } else {
      return arr;
   }
}

assert.deepEqual(flatten([1, [2], [3, [[4]]]]), [1, 2, 3, 4, 5])
