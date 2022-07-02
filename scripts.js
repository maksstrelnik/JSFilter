const filterItems = document.querySelectorAll('.filter__items')
const nav = document.querySelector('.nav_list')


nav.addEventListener('click', event=>{
    if(event.target.tagName !=="LI") return false;

    let filterClass = event.target.dataset['f']

    filterItems.forEach(elem=>{
        elem.classList.remove('hide');
        if (!elem.classList.contains(filterClass)&&(filterClass!=="all")){
        elem.classList.add('hide')
    }
    })
})