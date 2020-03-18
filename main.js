//1

var userObj = {
    firstName: 'Alex',
    lastName: 'Shenon',
    age: 22
}
console.log(userObj);

//2

var userObj = {
    firstName: 'Alex',
    lastName: 'Shenon',
    age: 22,
    fullName() {
        return `${userObj.firstName} ${userObj.lastName}`;
      }
}
console.log(userObj.fullName());

//3

function defUpperStr(str) {
    return (str || 'Default text').toUpperCase();
  }

  console.log(defUpperStr('My text')); 
  console.log(defUpperStr()); 

  //4

  function evenFn (n) {
      var num = []
      for (var i = 1; i <= n; i++) if (i % 2 === 0) num.push(i);
      return num;
  }
 console.log(evenFn(10)); 
console.log(evenFn(15)); 
console.log(evenFn(20)); 

//5

function weekFn(a) {
    var str = '';
    switch (a) {
      case 1: str = 'Понедельник'; break;
      case 2: str = 'Вторник'; break;
      case 3: str = 'Среда'; break;
      case 4:  str = 'Четверг'; break;
      case 5: str = 'Пятница'; break;
      case 6: str = 'Суббота'; break;
      case 7:  str = 'Воскресенье'; break;
      default: str = null;
    }
    return str;
  }
  console.log(weekFn(1)); 
  console.log(weekFn(3)); 
  console.log(weekFn(7)); 
  console.log(weekFn(9)); 
  console.log(weekFn(1.5));
  console.log(weekFn('2')); 

  //6

  function ageClassification(e) {
      return e > 0 ? e > 24 ? e > 44 ? e > 65 ? e > 75 ? e > 90 ? e > 122 ? null : 'долгожители' : 'старческий возраст' : 'пожилой возраст' : 'средний возраст' : 'молодой возраст' : 'детский возраст' : null;
  }
  console.log('-1 :', ageClassification(-1)); 
console.log('5 :', ageClassification(5)); 
console.log('34 :', ageClassification(34)); 
console.log('50 :', ageClassification(50)); 
console.log('65.1 :', ageClassification(65.1)); 
console.log('80 :', ageClassification(80)); 
console.log('110 :', ageClassification(110)); 
console.log('130 :', ageClassification(130)); 

//7

function oddFn(o) {
    var nar  = []
    var z = 0
    while (z++ < o) if (z % 2 !== 0) nar.push(z);
    return nar;
}
console.log(oddFn(10)); // [1, 3, 5, 7, 9]
console.log(oddFn(15)); // [1, 3, 5, 7, 9, 11, 13, 15]
console.log(oddFn(20)); // [1, 3, 5, 7, 9, 11, 13, 15, 17, 19]


//8

function mainFunc(a, b, cb) {
    if (cb && typeof cb === 'function') return cb(a, b);
  
    return false;
  }
  function cbRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  function cbPow(num, pow) {
    return Math.pow(num, pow);
  }
  function cbAdd(a, b) {
    return a + b;
  }
  console.log(mainFunc(2, 5, cbRandom)); 
  console.log(mainFunc(2, 5, cbPow)); 
  console.log(mainFunc(2, 5, cbAdd)); 
  console.log(mainFunc(2, 5, 'not a func'));   