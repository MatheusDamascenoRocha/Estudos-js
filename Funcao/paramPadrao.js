//Estrategia 1 para gerar valor padrão
function soma(a,b,c){
    a = a || 1
    b = b || 1
    c = c || 1
   return a+b+c
}
console.log(soma(2))
console.log(soma())

//estrategia 2 3 e 4
function soma2(a,b,c) {
    a = a !== undefined ? a:1
    b = 1 in arguments ? b : 1
    c = isNaN(c) ? 1 : c
    return a+b+c
}
console.log(soma2(), soma2(3), soma2(1,2,3), soma2(0,0,0))

//estrategia ecmascript 2015
function soma3(a=1,b=2,c=3){
    return a+b+c
}
console.log(soma3(), soma3(2), soma3(0,0,0))