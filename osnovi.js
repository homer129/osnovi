let user = {};
user.name = "John";
user.surname = "Smith";
user.name = "Pete";
delete user.name;

function isEmpty(obj){
    for (let key in obj){
        return false;
    }
    return true;
}

let sum = 0;
for (let key in salaries){
    sum += salaries[key];
} 
alert(sum);

function multiplyNumeric(obj){
    for (let key in obj){
        if (typeof(obj[key]) === "number"){
            obj[key] *= 2;
        }
    }
}

**let calculator = {
    sum() {
        return this.a + this.b;
    },    
    mul() {
        return this.a * this.b;
    },
    read() {
        this.a = +prompt("Введите число а", '');
        this.b = +prompt("Введите число b", '');
    }
  };
  
  calculator.read();
  alert( calculator.sum() );
  alert( calculator.mul() );

**let ladder = {
    step: 0,
    up() {
      this.step++;
      return this;
    },
    down() {
      this.step--;
      return this;
    },
    showStep() {
      alert( this.step );
      return this;
    }
  };

**let obj = {};

function A() { return obj; }
function B() { return obj; }

alert( new A() == new B() );  

function Calculator() {
    this.read = function() {
        this.a = +prompt('Введите а', 0);
        this.b = +prompt('Введите b', 0);
    }
    this.sum = function() {
        return this.a + this.b;
    }
    this.mul = function() {
        return this.a * this.b;
    }
}


function Accumulator(startingValue) {
    this.value = startingValue;
    this.read = function() {
        this.value += +prompt('Введите новое значение', 0);
    }
}