const isAllTrue = (array, fn) => {
  let result

  if (!Array.isArray(array) || !array.length) {
    throw new Error('empty array')
  } else if (typeof fn !== 'function') {
    throw new Error('fn is not a function')
  }

  for (let i = 0; i < array.length; i++) {
    result = fn(array[i])
  }

  return result
}


const isSomeTrue = (array, fn) => {
  if (!Array.isArray(array) || !array.length) {
    throw new Error('empty array')
  } else if (typeof fn !== 'function') {
    throw new Error('fn is not a function')
  }

  for (let i = 0; i < array.length; i++) {
    if (fn(array[i]) === true) return true
  }
  
  return false
}

const returnBadArguments = (fn, ...rest) => {
  if (typeof fn !== 'function') {
    throw new Error('fn is not a function')
  }

  if (!rest.length) return []

  let arrayErrors = []

  rest.forEach((el, i, array) => {
    try {
      fn(el, i, array)
    } catch (e) {
      arrayErrors.push(array[i])
    }
  })
  
  return arrayErrors
}

const calculator = (number = 0) => {
  if (!isFinite(number)) {
    throw new Error("number is not a number")
  }
  return {
    sum (...args) {
      const result = [...args].reduce((acc, current) => {
        return acc + current
      }, number)
    return result
    },
    dif (...args) {
      const result = [...args].reduce((acc, current) => {
        return acc - current
    }, number)
    return result
    },
    div (...args) {
      [...args].forEach(number => {
        if (number === 0) {
        throw new Error("division by 0")
      }
    })
    const result = [...args].reduce((acc, current) => {
      return acc / current
    }, number)
    return result
    },
    mul (...args) {
      const result = [...args].reduce((acc, current) => {
        return acc * current
    }, number)
    return result
    }
  }
}

/* При решении задач, пострайтесь использовать отладчик */

export {
    isAllTrue,
    isSomeTrue,
    returnBadArguments,
    calculator
};
