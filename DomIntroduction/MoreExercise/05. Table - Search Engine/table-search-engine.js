function solve() {
   let persoalInfo = document.querySelectorAll('tbody tr');
   const searchText = document.getElementById('searchField');
   
   if (searchText.value === '') {
      return;
   }

   persoalInfo.forEach(person => person.classList.remove('select'));

   for (let person of persoalInfo) {
      let cells = person.querySelectorAll('td');
      
      for (let cell of cells) {
         if (cell.textContent.includes(searchText.value)) {
            person.classList.add('select');
            break;
         } 
      }
   }
}