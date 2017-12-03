
function* fibonacci() {
    let a = 0, b =1
    while (true) {
        let f = a
        a = b
        b += f
        let reset = yield f
        if(reset) a = 0, b = 1
    }
}
const fibo = fibonacci()

fibo.next()
fibo.next()
fibo.next()
fibo.next()
fibo.next()
fibo.next()
fibo.next()
//copy into browser without fibo.next (true) line to see what happen and then you put fibo.next (true) line and the fibonacci is reset and start on zero
fibo.next(true)

