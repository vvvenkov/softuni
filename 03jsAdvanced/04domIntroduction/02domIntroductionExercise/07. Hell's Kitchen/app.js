function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);

   function onClick() {
      const arr = Array.from(document.getElementById("inputs").children[1]);

      for (let el of arr) {
         let asd = el.split("-")
      }
   }

} 