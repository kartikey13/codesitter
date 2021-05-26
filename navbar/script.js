var parent = document.querySelectorAll('.navbar-item');
var drop = document.querySelector('.dd-menu');

parent.forEach(function(parent_item) {
    parent_item.onclick = function(){
        parent_item.classList.add('active');
    }
});