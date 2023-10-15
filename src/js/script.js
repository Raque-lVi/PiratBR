
var mas_opcoes = document.getElementById("mas_opcoes");
var barrinha = document.getElementById("barrinha");
var categoria = document.getElementById("categoria");

var gostou_h2 = document.getElementById("gostou_h2");
var gostou_h1 = document.getElementById("gostou_h1");

var clic = 0;

mas_opcoes.addEventListener("click",function(){

    categoria.style.display = "block";

});

barrinha.addEventListener("click", function () {

    categoria.style.display = "none";
    
});

gostou_h2.addEventListener("click", function () {
    
    if (gostou_h2.style.opacity != "0") {

        gostou_h1.style.opacity = "25";
        gostou_h1.style.cursor = "pointer"

        gostou_h2.style.opacity = "0";
        gostou_h2.style.cursor = "default";
    }

})

gostou_h1.addEventListener("click", function(){

    if (gostou_h1.style.opacity != "0") {

        gostou_h2.style.opacity = "25";
        gostou_h2.style.cursor = "pointer"

        gostou_h1.style.opacity = "0";
        gostou_h1.style.cursor = "default";
    }

})
