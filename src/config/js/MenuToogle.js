const hamburger = document.querySelector(".mobile");
const navMenu = document.querySelector(".list");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Código para o Search Bar 

const searchInput = document.getElementById("search")

searchInput.addEventListener('input', (event) => {
    const value = formatString(event.target.value);

    const items = document.querySelectorAll('.item-sear .boxGrup');

    const noResults =document.getElementById('no_results');

    let hasResults = false;

    if(value !== ''){
        items.forEach(item => {
            const itemTitle = item.querySelector('.tl1').textContent;
            const itemData = item.querySelector('.tl2-date').textContent;

            if(formatString(itemTitle).indexOf(value) !== -1 || formatString(itemData).indexOf(value) !== -1){ 
                item.style.display = 'flex';

                hasResults =  true;
            } else {
                item.style.display = 'none';
            }
        });

        if (hasResults){
            noResults.style.display = 'none';
        } else {
            noResults.style.display = 'block';
        }
    }  else {
        items.forEach(items => item.style.display = 'flex');
        
        noResults.style.display = 'none';
    }
       
});

function formatString(value){
    return value
    .toLowerCase()
    .trim()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '');
}