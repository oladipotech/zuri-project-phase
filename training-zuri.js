/* when clicked toggle between hide or show the content */
function myFunction() {
    document.getElementById ("myDropdown") .classList.toggle("show");    
}
//close the dropdown if the outside is clicked
window.onclick = function (event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("content");
        var i;
        for (i = 0; i < dropdowns.length; i++){
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');                
            }
        }        
    }
}