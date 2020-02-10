const forEach = (array, fn) => {
    for (let i = 0; i < array.length; i++) {
        fn(array[i], i, array)
    } 
    return array
}

const map = (array, fn) =>  {
    let newArray = []
    for (let i = 0; i < array.length; i++) {
        newArray[i] = fn(array[i], i, array)
    } 
    return newArray
}


const reduce = (array, fn, initial) => {
    let prevValue = initial || array[0]
    let i = initial ? 0 : 1
    
    for (; i < array.length; i++) {
        prevValue = fn(prevValue, array[i], i, array)
    }
    return prevValue
}

const upperProps = (obj) => {
    const array = []
      for (let key in obj) {
          array.push(key.toUpperCase())
      }
      return array
}
 
const slice = (array, from, to) => {
  let newArray = []
  let start = from || 0;
  let end
  
  if (to) {
    end = to
  } 

  if (to === 0) {
    return newArray 
  }

  if (to > array.length) {
    end = array.length
  } 

  if (!to) {
    end = array.length
  }

  if (start < 0 && Math.abs(start) > array.length)  {
    start = 0
  } else if (start < 0 && Math.abs(start) <= array.length) {
    start = array.length + from
  }

  if (end < 0) {
    end = array.length + to;
  }

  for (let i = start; i < end; i++) {
    newArray.push(array[i])
  }
  return newArray
}

const createProxy = (obj) => {
    const handler = {
        set (target, prop, val) {
            if (typeof val == 'number') {
              target[prop] = val * val;
              return true;
            } else {
              return false;
          }        
        }
    }

  const proxy = new Proxy(obj, handler)
  return proxy
}


export {
    forEach,
    map,
    reduce,
    upperProps,
    slice,
    createProxy
};
