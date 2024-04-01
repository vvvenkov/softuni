function onClick(arr) {
   let totalSalaries = 0;
   let employeeCount = 0;
   let averageSalary = 0;
   let employeeArr = [];
   let maxSalary = 0;
   let arrObj = [];
   let obj = {};

   for (let el of arr) {
      let [restaurant, employees] = el.split(" - ");
      let employeeAndSalary = employees.split(",");

      let find = arrObj.find(el => el.restaurant === restaurant);

      if (!find) {
         obj.restaurant = restaurant;
      }

      for (let el2 of employeeAndSalary) {
         let [employee, salary] = el2.trim().split(" ");
         employeeCount++;
         let curSalary = Number(salary);
         totalSalaries += Number(curSalary);
         if (curSalary > maxSalary) {
            maxSalary = curSalary;
         }
         obj[employee] = Number(salary);
      }
      averageSalary = Number(totalSalaries / employeeCount);
      obj.averageSalary = averageSalary.toFixed(2);
      obj.maxSalary = maxSalary;
      employeeCount = 0;
      totalSalaries = 0;
      arrObj.push(obj);
      obj = {};
   }

   arrObj.sort((a, b) => b.averageSalary - a.averageSalary);
   let result = arrObj[0];

   let sorted = Object.values(result).sort((a, b) => a[0] - b[0]);
   for (let el of sorted) {
      console.log(el);
   }
}
onClick(["PizzaHut - Peter 500, George 300, Mark 800",
   "TheLake - Bob 1300, Joe 780, Jane 660"]
)