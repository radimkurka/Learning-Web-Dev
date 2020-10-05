
var listicek = document.getElementsByTagName("li");
for(var i = 0; i < listicek.length; i++){
    listicek[i].addEventListener("mouseover", function(){
        this.classList.add("selected");
    });
    listicek[i].addEventListener("mouseout", function(){
        this.classList.remove("selected");
    });
    listicek[i].addEventListener("click", function(){
        this.classList.toggle("done");
    });
}