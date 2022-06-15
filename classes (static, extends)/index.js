//-------------------------------------------------------------------------------------------------
/* 1. Создайте класс Работника. У каждого объекта обязательно должно быть свойства id, имя, категория и зарплата за месяц.
создайте следующие методы:
- вывод информации о зарплате
- подсчитать заработок за год
- подсчитать количество работников 
- *подсчитать сколько выплатили денег всем работникам за год
*/
class Employee{
    static totalSalary = 0; 
    static countEmployes = 0;

    constructor(Id, Name, Category, Salary){
        this._Id      = Id;
        this.Name     = Name;
        this.Category = Category;
        this.Salary   = Salary     
        Employee.totalSalary   += this.Salary;
        Employee.countEmployes ++;
    }

    getAnnualSalary() {return this.Salary*12} 
};

let empl1 = new Employee(1, 'Name1','Category1', 100);
let empl2 = new Employee(2, 'Name2','Category2', 150);
let empl3 = new Employee(3, 'Name3','Category3', 200);
let empl4 = new Employee(4, 'Name4','Category4', 250);

console.log(`empl1. salary = ${empl1.Salary}, annual salary = ${empl1.getAnnualSalary()}`);
console.log(`empl2. salary = ${empl2.Salary}, annual salary = ${empl2.getAnnualSalary()}`);
console.log(`empl3. salary = ${empl3.Salary}, annual salary = ${empl3.getAnnualSalary()}`);
console.log(`empl4. salary = ${empl4.Salary}, annual salary = ${empl4.getAnnualSalary()}`);
console.log(`Employes total count: ${Employee.countEmployes}`);
console.log(`Employes total month salary: ${Employee.totalSalary}`);
console.log(`- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -`);

//-------------------------------------------------------------------------------------------------
/* 2. Создайте класс Совместитель, который наследует Работника. У него есть дополнительные свойства
- количество отработанных часов в день, ставка за час. создайте методы:
- подсчитайте количество денег что зарабатывает за день
- подсчитайте ему зарплату за меняц (обновив свойство потом у родителя)
- подсчитайте количество совместителей
*/
class PartTime extends Employee{
    static countPartTime = 0;
    
    constructor(Id, Name, Category, Hour, Rate){
        super(Id, Name, Category);
        this.Hour = Hour;
        this.Rate = Rate;
        PartTime.countPartTime ++;
    }

    getDaySalary() {return this.Hour * this.Rate} 
    getMonthSalary() {return this.Hour * this.Rate * 25} 
}

let partTime1 = new PartTime(1, 'NamePT1','Category1', 2, 10);
let partTime2 = new PartTime(2, 'NamePT2','Category2', 3, 15);
let partTime3 = new PartTime(3, 'NamePT3','Category3', 4, 20);
let partTime4 = new PartTime(4, 'NamePT4','Category4', 5, 25);

console.log(`partTime1. day salary = ${partTime1.getDaySalary()}, month salary = ${partTime1.getMonthSalary()}`);
console.log(`partTime2. day salary = ${partTime2.getDaySalary()}, month salary = ${partTime2.getMonthSalary()}`);
console.log(`partTime3. day salary = ${partTime3.getDaySalary()}, month salary = ${partTime3.getMonthSalary()}`);
console.log(`partTime4. day salary = ${partTime4.getDaySalary()}, month salary = ${partTime4.getMonthSalary()}`);
console.log(`Part time employes total count: ${PartTime.countPartTime}`);
