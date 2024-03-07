const accordion = document.getElementsByClassName("collapse_container");
const accordionbutton = document.getElementsByClassName("collapse_button");

for (i =0; i<accordion.length; i++){
    accordion[i].addEventListener('click', function(){
        this.classList.toggle('active');
        if (this.children[0].children[1].innerHTML == "-"){
            this.children[0].children[1].innerHTML = "+";
        } else{
            this.children[0].children[1].innerHTML = "-";
        }
        
    })
}