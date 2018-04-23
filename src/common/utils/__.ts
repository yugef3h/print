export default class {
  constructor() {}
  deepcloneParam(source) {
    if (source === undefined || source === null) {
      return source
    }
    if (
      typeof source == 'string' ||
      typeof source == 'number' ||
      typeof source === 'boolean' ||
      typeof source === 'undefined' ||
      null === source
    ) {
      return source
    }

    if (Array.isArray(source)) {
      let newArray: Array<Object> = []
      for (let i = 0; i < source.length; i++) {
        newArray.push(this.deepcloneParam(source[i]))
      }
      return newArray
    }

    let newObject = Object.assign({}, source.to)
    for (let prop in newObject) {
      if (newObject.hasOwnProperty(prop)) {
        newObject[prop] = this.deepcloneParam(newObject[prop])
      }
    }
    return newObject
  }
}
