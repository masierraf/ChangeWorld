let counterMemo =1
function fibonacciMemo(num, memo={}) {
    
    if(memo[num]) return memo[num]
    if(num == 0) return 0
    if(num == 1) return 1
    counterMemo++
    return memo[num] = fibonacciMemo(num-1, memo) + fibonacciMemo(num-2, memo)
}

let counterRec =1
function fibonacciRec(num) {
    
    if(num == 0) return 0
    if(num == 1) return 1
    counterRec++
    return  fibonacciRec(num-1) + fibonacciRec(num-2)
}

// excecute this functions and check wich value got the counters to see what differents they are