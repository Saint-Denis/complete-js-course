const returnFirstArgument = param => param
const sumWithDefaults = (a, b = 100) => a + b
const returnFnResult = fn => fn()
const returnCounter = (number = 0) => () => ++number
const returnArgumentsArray = (...rest) => [...rest]
const bindFunction = (fn, ...res) =>  {
    return () => fn(...res)
}

export {
    returnFirstArgument,
    sumWithDefaults,
    returnArgumentsArray,
    returnFnResult,
    returnCounter,
    bindFunction
}
