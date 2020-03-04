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
        if (x) {
          return collection[i]
        }
      }
    },

    filter: function(collection, predicate) {
      const x = []
      for (var i = 0; i < collection.length; i++) {
        let x1 = predicate(collection[i])
        if (x1) {
          x.push(collection[i])
        }
      }
      return x
    },

    size: function(collection) {
      if (typeof collection != "undefined") {
        const x = Object.keys(collection)
        return x.length
      } else {
        return collection.length
      }
    },

    first: function(array, n) {
      if (n == null) {
        return array[0];
      } else {
        return array.slice(0, n);
      }
    },

    last: function(array, n) {
      if (n == null) {
        return array[array.length - 1]
      } else {
        return array.slice(Math.max(array.length - n, 0))
      }
    },

    compact: function(array) {
      let x = []
      for (var i = 0; i < array.length; i++) {
        if (array[i]) {
          x.push(array[i])
        }
      }
      return x
    },

    sortBy: function(array, callback) {
      const x = [...array]
      x.sort()
      for (var i = 0; i < x.length; i++) {
        callback(x[i])
      }
      return x
    },


    keys: function(object) {
      const x = []
      for (const [k, v] of Object.entries(object)) {
        x.push(k)
      }
      return x
    },

    values: function(object) {
      const x = []
      for (const [k, v] of Object.entries(object)) {
        x.push(v)
      }
      return x
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
