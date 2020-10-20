/*
  I bought 5 more apples. Re-assign the value of the variable
*/
var applesOwned = 5;

//applesOwned = applesOwned + 5;
//or
applesOwned += 5;
console.log(applesOwned);

/*
  Re-assign all the values of the names in the array to have capital first letters
*/
var names = ["jared", "john", "joe", "jim"];

for(var i = 0; i < names.length; i++){
  names[i] = names[i].charAt(0).toUpperCase() + names[i].substring(1, names[i].length);
}
console.log(names);

/*
  employeeOne has been promoted to full time and the salary is now 52000
  update the employee
*/
var employeeOne = {
  name: "Jill Bonaventure",
  age: 42,
  gender: "Female",
  salary: 32000,
  fullTime: false
}
console.log(employeeOne);

employeeOne.salary = employeeOne.salary + 20000;
employeeOne.fullTime = true;
console.log(employeeOne);

/*
  1. Dwight added 5000 to his savings and also moved all of his checking to his savings
  2. Michael opened up a savings account and moved 1000 from his check to his savings
  3. Pamela withdrew 200 from her checking
  4. Phyllis's stock account rose by 2%
*/
var bankAccounts = [
  {
    name: "Dwight Schrute",
    checking: 1000,
    savings: 25000
  },
  {
    name: "Michael Scott",
    checking: 2000
  },
  {
    name: "Pam Beasley",
    checking: 1252
  },
  {
    name: "Phyllis Vance",
    stocks: 86000
  }
]
//1
for(var i = 0; i < bankAccounts.length; i++){
  if(bankAccounts[i].name.indexOf("Dwight") > -1){
    //current value of savings + 5000
    bankAccounts[i].savings = bankAccounts[i].savings + 5000;
    //current value of checking - 1000
    //bankAccounts[i].savings = bankAccounts[i].savings + 1000;
    bankAccounts[i].savings += bankAccounts[i].checking;
    bankAccounts[i].checking -= bankAccounts[i].checking;
    //bankAccounts[i].checking = bankAccounts[i].checking - 1000;
  } else if (bankAccounts[i].name.indexOf("Michael") > -1){
    bankAccounts[i].savings = 1000;
    bankAccounts[i].checking -= 1000;
    //bankAccounts[i].checking = bankAccounts[i].checking - 1000;
  } else if (bankAccounts[i].name.indexOf("Pam") > -1){
    bankAccounts[i].checking -= 200;
    //bankAccounts[i].checking = bankAccounts[i].checking - 200;
  } else if (bankAccounts[i].name.indexOf("Phyllis") > -1){
    bankAccounts[i].stocks += (bankAccounts[i].stocks * .02);
    //bankAccounts[i].stocks = bankAccounts[i].stocks + (bankAccounts[i].stocks * .02);
  }
}

console.log(bankAccounts);
