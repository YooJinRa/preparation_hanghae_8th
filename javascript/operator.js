// 문자열 붙이기
console.log('My' + ' Car')
console.log('1' + 2) // 문자 + 숫자 = 문자
console.log(1 + 2)

const shoesPrice = 200000
console.log('이 신발의 가격은' + shoesPrice + '원 입니다.')
console.log(`이 신발의 가격은 ${shoesPrice}원 입니다.`) // 템플릿리터널 Template literals. 백틱(``) 을 사용

// 산술연산자 Numeric operators
console.log(2 + 1) // 3을 출력
console.log(2 - 1) // 1을 출력
console.log(4 / 2) // 2를 출력
console.log(2 * 3) // 6을 출력
console.log(10 % 3) // 나머지(remainder) 연산자. 1을 출력
console.log(10 ** 2) // exponentiation. 10의 2승인 100을 출력

// 증감연산자 Increment and Decrement operators
// : 자기 자신의 값을 증가시니거나 감소시키는 연산자(++, --)
// : 증감연산자를 변수 앞에 놓는지 뒤에 놓는지에 따라 값이 차이가 있음.(*****)

let count = 1 //증감 연산자를 활용해 count의 값을 계속 증가시키고 다시 count에 할당하고 있기 때문에 const를 사용하면 에러가 발생함.
const preIncrement = ++count //count 값도 더해주기
console.log(`count: ${count}, preIncrement: ${preIncrement}`)
//count = count + 1
//const preIncrement = count

let count2 = 1
const preIncrement2 = count2++ //count 값은 더하고 preIncrement값은 더하지 않기?!
console.log(`count2: ${count2}, preIncrement2: ${preIncrement2}`)
//const preIncrement2 = count2
//count2 = count2 + 1


// 대입연산자 Assignment operators
const shirtsPrice = 100000
const pantsPrice = 80000
let totalPrice = 0

totalPrice += shirtsPrice
console.log(totalPrice) // 100000 : totalPrice = totalPrice + shirtsPrice

totalPrice += pantsPrice
console.log(totalPrice) // 180000 : totalPrice = totalPrice + pantsPrice

totalPrice -= shirtsPrice
console.log(totalPrice) // 800000 : totalPrice = totalPrice - shirtsPrice 

