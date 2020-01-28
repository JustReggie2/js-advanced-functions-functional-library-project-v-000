const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, callback) {
      if (typeof collection != "undefined") {
        const x = Object.values(collection);
        for (var i = 0; i < x.length; i++) {
          callback(x[i])
        }
      } else {
        for (var i = 0; i < collection.length; i++) {
          callback(collection[i])
        }
      }
      return collection
    },

    map: function(collection, callback) {
      const x1 = []
      if (typeof collection != "undefined") {
        const x = Object.values(collection);
        for (var i = 0; i < x.length; i++) {
          x1.push(callback(x[i]))
        }
      } else {
        for (var i = 0; i < collection.length; i++) {
          x1.push(callback(collection[i]))
        }
      }
      return x1
    },

    reduce: function(collection, callback, acc) {
      let total = 0;
      for (var i = 0; i < collection.length; i++) {
        total = callback(total, collection[i], collection)
      }
      if (!acc) {
        return total
      } else {
        return total + acc
      }
    },

    find: function(collection, predicate) {
      for (var i = 0; i < collection.length; i++) {
        let x = predicate(collection[i])
        if (x === collection[i]) {
          return collection[i]
        } 
      }
    },

    functions: function(object) {
      const x = []
      for (const [k, v] of Object.entries(object)) {
        if (typeof v === "function") {
          x.push(k)
        }
      }
      x.sort()
      return x
    },


  }
})()

fi.libraryMethod()
