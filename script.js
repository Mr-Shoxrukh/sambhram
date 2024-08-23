
const inputClicks = document.querySelectorAll(".input-click");

inputClicks.forEach(function(inputClick) {
    inputClick.addEventListener('focus', function(){
        const parentDiv = this.parentElement;
        parentDiv.classList.add('active');
    })
    
    inputClick.addEventListener('blur', function(){
        const parentDiv = this.parentElement;
        parentDiv.classList.remove('active');
    })
});