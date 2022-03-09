//сделайте вид, что есть защита от того, что число может быть отрицательным
//Tasks 1

//1
/*
var name = prompt("Как вас зовут?");
alert(`Привет, ${name}`);
*/

//2
/*
const year = 2022;
var bd = prompt("Год вашего рождения?");
alert(`Вам стало/будет в этом году ${2022-bd} лет`);
*/

//3
/*
var side = prompt("Длина стороны квадрата?");
alert(`Периметр квадрата равен ${(side<0?-side:side)*4}`);
*/

//4
/*
var rad = prompt("Радиус круга?");
rad = rad<0?-rad:rad;
alert(`Площадь = ${rad**2}π или же ${rad**2*Math.PI}`);
*/

//5
/*
var s = prompt("Расстояние между городами:");
var t = prompt("Время, за которое надо добраться из одного города в другой:");
alert(`Средняя скорость должна быть больше или равна ${s/t}`);
*/

//6
/*
const dol_to_man = 1.7;
var dol = prompt("Сумма в долларах:");
alert(`Сумма в манатах: ${dol*dol_to_man}`);
*/

//7
/*
var size = prompt("ГБ места на флешке:")*1024;
alert(`Поместиться ${Math.floor(size/820)} файлов размером 820мб`);
*/

//8
/*
var wallet = prompt("Денег в кошельке (в $):");
var choco = prompt("Цена шоколадки (в $):");
alert(`Вы можете купить ${Math.floor(wallet/choco)} шоколадок и у вас останется ${wallet%choco}$`);
*/

//9
/*
var num = prompt("Введите число:");
var num2 = 0;
var size = num.toString().length;
for (let i = 0; i < size; i++) {
    num2 += (Math.floor(num%(10**(size-i))/(10**(size-i-1))))*(10**i);
}
alert(`Число задом-наперёд: ${num2}`);
*/

//10
/*
var num = prompt("Введите целое число:");
alert(num%1!==0?"Введите ЦЕЛОЕ число":
num%2===0?"Число чётное":"Число нечётное");
*/
















//Tasks 2
//1
/*
var age = prompt("Введите возраст:");
var response = "";
switch (true) {
    case age<0:
        response = "Ты кто вообще?!";
        break;
    case age<3:
        response = "Младенец";
        break;
    case age<12:
        response = "Ребёнок";
        break;
    case age<18:
        response = "Подросток";
        break;
    case age<60:
        response = "Взрослый"
        break;
    default:
        response = "Пенсионер";
        break;
}
alert(response);
*/

//2
/*
var num = prompt("Введите цифру 0-9");
var symb = "";
switch (Number.parseInt(num)) {
    case 0:
        symb = ")";
        break;
    case 1:
        symb = "!";
        break;
    case 2:
        symb = "@";
        break;
    case 3:
        symb = "#";
        break;
    case 4:
        symb = "$";
        break;
    case 5:
        symb = "%";
        break;
    case 6:
        symb = "^";
        break;
    case 7:
        symb = "&";
        break;
    case 8:
        symb = "*";
        break;
    case 9:
        symb = "(";
        break;
    default:
        symb = "Неверный ввод";
        break;
}
alert(symb);
*/

//3
/*
function hasSameDigits(orig){
    num = Number.parseInt(orig).toString();
    if(num.length > 10){
        return true;
    }
    for (let i = 0; i < num.length-1; i++) {
        for (let l = i+1; l < num.length; l++) {
            if(num[i]===num[l]){return true;}
        }
    }
    return false;
}

var num = prompt("Введите число");
alert(hasSameDigits(num)?"Есть одинаковые цифры":"Нет одинаковых цифр");
*/

//4
/*
var year = prompt("Введите год");
alert(year%400===0 || (year%100!=0&&year%4===0) ? "Год високосный" : "Год не високосный");
*/

//5
/*
function isPalindrome(num){
    var str = num.toString();
    var halfLength = (str.length%2==1?str.length-1:str)/2;
    for (let i = 0; i < halfLength; i++) {
        if(str[i]!==str[str.length-i-1]){
            return false;
        }
    }
    return true;
}

var num = prompt("Введите число");
alert(isPalindrome(num)?"Палиндром":"Не палиндром");
*/

//6
/*
var mode = prompt("Введите валюты (доступные: USD, EUR, UAN, AZN) в формате VAL1-VAL2");
var [val1, val2] = mode.split('-');
var first = prompt("Введите сумму в первой валюте");
var sum = first;

//сначала переводим в Доллары США
switch (val1) {
    case 'EUR':
        sum*=1.13;
        break;
    case 'UAN': //украинская гривна а не юань
        sum*=0.035;
        break;
    case 'AZN':
        sum*=0.59;
        break;
    default:
        break;
}

//потом из долларов США
switch (val2){
    case 'EUR':
        sum/=1.13;
        break;
    case 'UAN':
        sum/=0.035;
        break;
    case 'AZN':
        sum/=0.59;
        break;
}

alert(`${first} ${val1} = ${sum} ${val2}`);
*/

//7
/*
var sum = prompt("Введите сумму оплаты");
switch(true) {
    case sum >= 500:
        sum*=0.93;
        break;
    case sum >= 300:
        sum*=0.95;
        break;
    case sum >= 200:
        sum*=0.97;
        break;
    default:
        break;
}
alert(`Сумма к оплате со скидкой: ${sum}`);
*/

//8
/*
var circleDiameter = prompt("Введите длину окружности:")/Math.PI;
var squareSide = prompt("Введите периметер квадрата:")/4;
alert(circleDiameter<=squareSide?"Окружность поместиться в квадрат":"Окружность не поместиться в квадрат");
*/

//9
/*
var score = 0;
score += prompt("2+2=\nA) 3\nB) 4\n C) 5").toUpperCase()==="B"?1:0;
score += prompt("1/0==\nA) NaN\nB) null\n C) Infinity").toUpperCase()==="C"?1:0;
score += prompt("Math.Floor(3.9)\nA) 3\nB) 4\n C) 3.9").toUpperCase()==="A"?1:0;
alert(`Вы набрали ${score*2} балла(-ов)`);
*/

//10
/*
var date = prompt("Введите дату в стиле dd-mm-yyyy");
var [dd, mm, yyyy] = date.split('-').map(Number);
dd+=1;
var ddinmm = 0;
switch (mm) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
        ddinmm = 31;
        break;
    case 4:
    case 6:
    case 9:
    case 11:
        ddinmm = 30;
        break;
    case 2:
        ddinmm = (yyyy%400===0 || (yyyy%100!==0 && yyyy%4===0))?29:28;
        break;
    default:
        break;
}

if(dd>ddinmm){
    dd-=ddinmm;
    mm+=1;
}
if(mm>12){
    mm-=12;
    yyyy+=1;
}

alert(`Следующая дата: ${dd}-${mm}-${yyyy}`);
*/











//Tasks 3
//1
/*
function sumBetween(n1, n2){
    if(n1==1){
        return (n2*(n2-1)/2);
    }
    return sumBetween(1, n2) - sumBetween(1, n1);
}

var [num1, num2] = prompt("Введите два числа:").split(' ').map(Number);
alert(`Сумма чисел в диапазоне [num1, num2): ${sumBetween(num1, num2)}`);
*/

//2
/*
function NOD(num1, num2){
    if(num2 === 0){
        return num1;
    }
    return NOD(num2, num1%num2);
}

var [n1, n2] = prompt("Введите 2 числа").split(' ').map(Number);
alert(`НОД = ${NOD(n1, n2)}`);
*/

//3
/*
function allFactors(num){
    if(num == 1){
        return [1];
    }
    var arr = [1];
    for (let i = 2; i < Math.floor(num/2)+1; i++) {
        if(num%i==0){
            arr.push(i);
        }
    }
    arr.push(num);
    return arr;
}

alert(allFactors(prompt("Введите число")));
*/

//4
/*
function numLength(num){
    if(num==0){
        return 0;
    }
    if(num<0){
        num = -num;
    }
    return num.toString().length;
}
alert(`${numLength(prompt("Введите число:"))} цифр(-а/-ы) в числе`);
*/

//5
/*
var arr = prompt("Введите 10 чисел").split(' ').map(Number);
var zeros = 0, pos = 0, neg = 0;
arr.forEach(item => {
    if(item>0){pos++;}
    else if(item<0){neg++;}
    else{zeros++};
});
alert(`There are ${zeros} zeros, ${pos} positive and ${neg} negative numbers`);
*/

//6
/*
do {
    var[num1, symb, num2] = prompt("Введите арифметическое выражение вида 'a + b'").split(' ');
    num1 = Number.parseInt(num1);
    num2 = Number.parseInt(num2);
    var res = NaN;
    switch (symb) {
        case '+':
            res = num1+num2;
            break;
        case '-':
            res = num1-num2;
            break;
        case '*':
            res = num1*num2;
            break;
        case '/':
            res = num1/num2;
            break;
        default:
            res = NaN;
            break;
    }
    if(isNaN(res)){
        alert("Что-то пошло не так...");
    }
    else{
        alert(`${num1} ${symb} ${num2} = ${res}`);
    }
    var z = confirm("Продолжить?");
} while (z);
*/

//7
/*
var [num, offset] = prompt("Введите число и оффсет:").split(' ').map(Number);
offset = Number.parseInt(offset);
var str = num.toString();
while(offset<0){
    offset+=str.length;
}
offset %= str.length;
if(offset == 0){
    var newstr = str;
}
else{
var substr1 = str.substring(0, offset);
var substr2 = str.substring(offset);
var newstr = substr2+substr1;
}
alert(Number.parseInt(newstr));
*/

//8
/*
var num = 0;
do {
    num++;
    if(num>7){
        num=1;
    }
    var day = "";
    switch (num) {
        case 1:
            day = "Понедельник";
            break;
        case 2:
            day = "Вторник";
            break;
        case 3:
            day = "Среда";
            break;
        case 4:
            day = "Четверг";
            break;
        case 5:
            day = "Пятница";
            break;
        case 6:
            day = "Суббота";
            break;
        case 7:
            day = "Воскресенье";
            break;
        default:
            break;
    }
} while (confirm(`${day}, продолжить?`));
*/

//9
/*
let str = "";
const imax = 9;
const lmax = 10;
let lenmax = (imax*lmax).toString().length;
for (let i = 2; i <= imax; i++) {
    for (let l = 1; l <= lmax; l++) {
        let x = i*l;
        let xlen = x.toString().length;
        str += " ".repeat(lenmax-xlen);
        str += x;
        str += " ";
    }
    str+="\n";
}
alert(str); //Немного другой вывод из-за шрифта
console.log(str);
*/

//10
/*
class Handler{
    constructor(current, result, next = null){
        if(typeof(current) === 'function'){
            this.current = current;
        }
        else{
            throw Error("Not a function");
        }
        this.result = result;
        this.next = next instanceof Handler ? next : null;
    }
    handle(obj){
        if(this.current.call(this, obj) === true){
            return this.result;
        }
        if(this.next !== null){
            return this.next.handle(obj);
        }
        throw Error("Not defined");
    }
}

let l = 0, r = 100;

let isEqual = new Handler((num)=>{
    if(confirm(`Загаданное число равно ${num}?`)){
        return true;
    }
    return false;
}, "=");
let isLess = new Handler((num)=>{
    if(confirm(`Загаданное число меньше чем ${num}?`)){
        return true;
    }
    return false;
}, "<", isEqual);
let isGreater = new Handler((num)=>{
    if(confirm(`Загаданное число больше чем ${num}?`)){
        return true;
    }
    return false;
}, ">", isLess);

while (l<r) {
    try {
        let mid = Math.round((l+r)/2);
        switch (isGreater.handle(mid)) {
            case ">":
                l = mid+1;
                break;
            case "<":
                r = mid-1;
                break;
            case "=":
                l = mid;
                r = mid;
                break;
            default:
                break;
        }
    } catch (e) {
        if(e.message === "Not defined"){
            alert("Упс, что-то пошло не так...");
            l = 0;
            r = 100;
        }
    }
}
alert(`Загаданное число - ${l}`);
*/













//Tasks 4
//1
/*
function fun(x, y){
    return x>y ? 1 : x<y ? -1 : 0;
}
let x = 0, y = 1;
console.log(fun(x, y));
console.log(fun(y, x));
console.log(fun(x, x));
*/

//2
/*
function factorial(x){
    if(x==1){
        return 1;
    }
    if(x==0){
        return 0;
    }
    if(x<0){
        return undefined;
    }
    return x*(factorial(x-1));
}
console.log(factorial(10));
*/

//3
/*
function fun(x, y, z){
    return x*100+y*10+z;
}
console.log(fun(1, 4, 9));
*/

//4
/*
function fun(x, y){
    if(y===undefined){
        y = x;
    }
    return x*y;
}
console.log(fun(2));
console.log(fun(2, 3));
*/

//5
/*
function fun(x){
    if(x==6){
        return true;
    }
    let num = 0;
    for (let i = 2; num<=x; i++) {
        num = i*i*(2*i*i-1);
        if(num==x){
            return true;
        }
    }
    return false;
}
console.log(fun(1));
console.log(fun(5));
console.log(fun(6));
console.log(fun(7));
console.log(fun(27));
console.log(fun(28));
console.log(fun(29));
console.log(fun(495));
console.log(fun(496));
console.log(fun(497));
console.log(fun(8128));
console.log(fun(33550336));
console.log(fun(8589869056));
*/

//7
/*
function fun(hh, mm=0, ss=0){
    mm+=ss/60;
    ss%=60;
    hh+=mm/60;
    mm%=60;
    hh%=24;
    var str = "";
    if(hh<10){
        str+="0";
    }
    str+=hh;
    str+=":";
    if(mm<10){
        str+="0";
    }
    str+=mm;
    str+=":";
    if(ss<10){
        str+="0";
    }
    str+=ss;
    return str;
}
console.log(fun(23, 59, 60));
*/

//8
/*
function toMinutes(hh=0, mm=0){
    return hh*60+mm;
}
function toSeconds(hh=0, mm=0, ss=0){
    return toMinutes(hh, mm)*60+ss;
}
console.log(toSeconds(5, 5, 5));
*/

//9
/*
function fun(ss){
    let mm = Math.floor(ss/60);
    ss%=60;
    let hh = Math.floor(mm/60);
    mm%=60;
    var str = "";
    if(hh<10){
        str+="0";
    }
    str+=hh;
    str+=":";
    if(mm<10){
        str+="0";
    }
    str+=mm;
    str+=":";
    if(ss<10){
        str+="0";
    }
    str+=ss;
    return str;
}
console.log(fun(18305));
*/

//10
/*
function toMinutes(hh=0, mm=0){
    return hh*60+mm;
}
function toSeconds(hh=0, mm=0, ss=0){
    return toMinutes(hh, mm)*60+ss;
}
function fun(ss){
    let mm = Math.floor(ss/60);
    ss%=60;
    let hh = Math.floor(mm/60);
    mm%=60;
    var str = "";
    if(hh<10){
        str+="0";
    }
    str+=hh;
    str+=":";
    if(mm<10){
        str+="0";
    }
    str+=mm;
    str+=":";
    if(ss<10){
        str+="0";
    }
    str+=ss;
    return str;
}
function dateDiff(hh1, mm1, ss1, hh2, mm2, ss2){
    let sec1 = toSeconds(hh1, mm1, ss1);
    let sec2 = toSeconds(hh2, mm2, ss2);
    let diff = sec2-sec1>0?sec2-sec1:sec1-sec2;
    return fun(diff);
}
console.log(dateDiff(24, 24, 24, 12, 12, 12));
*/






//Tasks 5
//1
/*
function stepen(x, y){
    if(y==0){
        return 1;
    }
    if(y<0){
        return 1/stepen(x, -y);
    }
    return x*stepen(x, y-1);
}
console.log(stepen(2, 6));
console.log(stepen(2, -6));
console.log(stepen(6, 2));
console.log(stepen(6, -2));
*/

//2
/*
function nod(x, y){
    if(!y){
        return x;
    }
    return nod(y, x%y);
}
console.log(nod(36, 27));
console.log(nod(37, 27));
*/

//3
/*
function maxDigit(x){
    let str = x.toString();
    let max = 0;
    for (const item of str) {
        let tmp = Number.parseInt(item);
        if(tmp>max){
            max = tmp;
            if(max==9){
                break;
            }
        }
    }
    return max;
}
console.log(maxDigit(1234567890));
console.log(maxDigit(123456780));
console.log(maxDigit(12345670));
console.log(maxDigit(1234560));
console.log(maxDigit(123450));
console.log(maxDigit(12340));
console.log(maxDigit(1230));
console.log(maxDigit(120));
*/

//4
/*
function isPrime(x){
    function isPrimeCompare(x, y){
        if(x<y*y){
            return true;
        }
        if(x%y==0){
            return false;
        }
        return isPrime(x, y+2);
    }

    if(x<0){
        x = -x;
    }
    if(x==0){
        return false;
        //хз
    }
    if(x==1){
        return false;
        //если под простым числом подразумевается число у которого ровно 2 делителя, то false
        //если меньше 2, то true
        //если должно делиться только на самого себя и 1, то true
    }
    if(x==2){
        return true;
    }
    if(x%2==0){
        return false;
    }
    return isPrimeCompare(x, 3);
}
console.log(isPrime(0));
console.log(isPrime(1));
console.log(isPrime(2));
console.log(isPrime(3));
console.log(isPrime(4));
console.log(isPrime(5));
console.log(isPrime(6));
console.log(isPrime(7));
console.log(isPrime(8));
console.log(isPrime(9));
console.log(isPrime(10));
*/

//5
/*
function fun(arr, x){
    if(x==0){
        return arr;
    }
    if(x<=0){
        arr.push(-1);
        x=-x;
    }
    if(x==1){
        return arr;
    }
    if(x%2==0){
        arr.push(2);
        return fun(arr, x/2);
    }
    for (let i = 3; i*i < x; i+=2) {
        if(x%i==0){
            arr.push(i);
            return fun(arr, x/i);
        }
    }
    arr.push(x);
    return arr;
}
console.log(fun([], -10080));
*/

//6
/*
function fun(x, y, z){
    if(z===0){
        return x+y;
    }
    return fun(y, x+y, --z);
}
function fibo(z){
    if(z===0){
        return 0;
    }
    if(z===1){
        return 1;
    }
    return fun(0, 1, z-2);
}
console.log(fibo(0));
console.log(fibo(1));
console.log(fibo(2));
console.log(fibo(3));
console.log(fibo(4));
console.log(fibo(5));
console.log(fibo(6));
console.log(fibo(7));
console.log(fibo(8));
console.log(fibo(9));
*/