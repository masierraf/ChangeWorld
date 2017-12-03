
function fibonacci() {
    let a = 0, b =1
    return {
        next: function () {
            let f = a
            a = b
            b += f
            return {value:f, done: false}
        }
    }
}
const fibo = {}
fibo[Symbol.iterator] = fibonacci
function calculate(num) {
    let i = 0
    for(let value of fibo){
        console.log(value)
        i++
        if(i== num) break
    }
}