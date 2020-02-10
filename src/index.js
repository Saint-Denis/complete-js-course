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

/*
 Задание 3:

 3.1: Функция принимает заранее неизветсное количество аргументов, первым из которых является функция fn
 Функция должна поочередно запустить fn для каждого переданного аргумента (кроме самой fn)

 3.2: Функция должна вернуть массив аргументов, для которых fn выбросила исключение

 3.3: Необходимо выбрасывать исключение в случаях:
   - fn не является функцией (с текстом "fn is not a function")
 */
function returnBadArguments(fn, ...rest) {
  if (rest === undefined) return []
  
  let arrayErrors = []
  if (typeof fn !== 'function') {
    throw new Error('fn is not a function')
  }

  [...rest].forEach((el, i, array) => {
    try {
      fn(el, i, array)
    } catch (e) {
      arrayErrors.push(array[i])
    }
    console.log('arrayErrors', arrayErrors)
    return arrayErrors
  })
}

/*
 Задание 4:

 4.1: Функция имеет параметр number (по умолчанию - 0)

 4.2: Функция должна вернуть объект, у которого должно быть несколько методов:
   - sum - складывает number с переданными аргументами
   - dif - вычитает из number переданные аргументы
   - div - делит number на первый аргумент. Результат делится на следующий аргумент (если передан) и так далее
   - mul - умножает number на первый аргумент. Результат умножается на следующий аргумент (если передан) и так далее

 Количество передаваемых в методы аргументов заранее неизвестно

 4.3: Необходимо выбрасывать исключение в случаях:
   - number не является числом (с текстом "number is not a number")
   - какой-либо из аргументов div является нулем (с текстом "division by 0")
 */
function calculator() {
}

/* При решении задач, пострайтесь использовать отладчик */

export {
    isAllTrue,
    isSomeTrue,
    returnBadArguments,
    calculator
};
