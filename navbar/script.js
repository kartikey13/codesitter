window.onload = () => {
var navbaritem = document.querySelectorAll('.navbar-item');
var dropdown = document.querySelectorAll('.dd-start');

//the main dropdown, if uh click any items on the navbar then the first dropdown will open
navbaritem.forEach(function (navbaritem_item){
    navbaritem_item.addEventListener("click", () => {
        navbaritem.forEach(function (navbaritem_item){
            navbaritem_item.classList.remove('active');
        })        
        navbaritem_item.classList.add('active');    

    })
})
//for the dropdown menu to appear, we add active class to every dd-start which is the first dropdown.
dropdown.forEach(function (dropdown_item){
    console.log(dropdown_item);
    dropdown_item.addEventListener("click", () => {
        dropdown.forEach(function (dropdown_item){
            dropdown_item.classList.remove('active');
        })        
        dropdown_item.classList.add('active');    
    })
})

}
