let person = {firstName: 'Armando', lastName: 'Sierra', age: 25 }

function bithday(obj) {
    let clone = Object.assign({}, obj)
    clone.age++
    return clone
}