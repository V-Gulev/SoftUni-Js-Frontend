function solve() {
   const searchTextEl = document.getElementById('searchText');
   const foundElementsEl = document.getElementById('result');
   let foundTowns = 0;
   const townsEl = document.querySelectorAll('#towns li');


   for (let town of townsEl) {
      if (town.textContent.includes(searchTextEl.value)) {
         town.style.fontWeight = 'bold';
         town.style.textDecoration = 'underline';
         foundTowns += 1;
      } else {
         town.style.fontWeight = 'normal';
         town.style.textDecoration = 'none'
      }
   }
   
   foundElementsEl.textContent = `${foundTowns} matches found`;
}