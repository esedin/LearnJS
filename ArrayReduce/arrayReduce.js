function flatten(arr) {
   if (Array.isArray(arr)) {
      return arr.reduce(function(done,curr){
         return done.concat(flatten(curr));
      }, []);
   } else {
      return arr;
   }
}

console.log(flatten([1, [2], [3, [[4]]]]))
