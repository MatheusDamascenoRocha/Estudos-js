// Criar de forma literal
function fun1(){}

//Armazernar dentro de uma variavel
const fun2 = function () {}

//Armazenar em um array
const array = [function (a,b){return a + b},fun1(),fun2()]
console.log(array[0](5,4))

//Armazenar em um objeto
const obj = {}
obj.fun3 = function () {return "ola mundo"}
console.log(obj.fun3())

//Usar de parametro
function run(fun){
    fun()
}
run(function (){console.log('oiii')})

//pode retornar/ober funcao
function soma(a,b){
    return function (c){
        console.log(a+b+c)
    }
}
soma(3,4)(5)