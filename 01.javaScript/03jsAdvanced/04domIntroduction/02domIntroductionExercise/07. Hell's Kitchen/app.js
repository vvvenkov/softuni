function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);
   function onClick() {
      const arr = JSON.parse(document.getElementById("inputs").children[1].value);
      let totalSalaries = 0;
      let employeeCount = 0;
      let averageSalary = 0;
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

      document.getElementById("bestRestaurant").children[2].textContent = `Name: ${result.restaurant} Average Salary:
      ${result.averageSalary} Best Salary: ${(result.maxSalary).toFixed(2)}`;

      document.getElementById("workers").children[2].textContent = result.Bob;
   }
}