$(document).ready(function(){

    $("#barras").click(function(){
        $("#menu").toggleClass("#menu-ativo")
    // $("#barras").click(function(){
    //     if($("#menu").hasClass("#menu-ativo")){
    //         $("#menu").removeClass("#menu-ativo")
    //     }else{
    //         $("#menu").addclass("menu-ativo")
    //     }

    // })
    
})
})

$(document).ready(function(){
    $("#carrosel img:eq(0)").addClass("banner-ativo").show()

})

setInterval(slide,5000)
function slide(){

    if($(".banner-ativo").next().length){
        $(".banner-ativo").removeClass("banner-ativo").hide().next().addClass("banner-ativo").show()   
    }else{
        $(".banner-ativo").removeClass("banner-ativo").hide()
        $("#carrosel img:eq(0)").addClass("banner-ativo").show()
    }
}

// function mostrarPopup(){
//     window.alert("hello world")
// }

// let pesquisa = document.getElementById("pesquisa");

// function enviarPesquisa(){
//     let enviarPesquisa = pesquisa.value;
//     console.log(enviarPesquisa)
// }

// let noticias = [
//     {
//         titulo:"Brasil leva 1 gol no inicio",
//         descricao:"Houve uma falha de defesa brasileira, que deixou atacante adaversário cara acara com o goleiro ",
//     },
//     {
//         titulo:"Brasil leva 1 gol no inicio",
//         descricao:"Houve uma falha de defesa brasileira, que deixou atacante adaversário cara acara com o goleiro ",
//     },
//     {
//         titulo:"Brasil leva 1 gol no inicio",
//         descricao:"Houve uma falha de defesa brasileira, que deixou atacante adaversário cara acara com o goleiro ",
//     },
//     {
//         titulo:"Brasil leva 1 gol no inicio",
//         descricao:"Houve uma falha de defesa brasileira, que deixou atacante adaversário cara acara com o goleiro ",
//     },
//     {
//         titulo:"Brasil leva 1 gol no inicio",
//         descricao:"Houve uma falha de defesa brasileira, que deixou atacante adaversário cara acara com o goleiro ",
//     },
//     {
//         titulo:"Dolár está em queda",
//         descricao:"Dolár está em queda recentemente"
//     },

   
// ]
// function renderizarNoticias(){
//     let espaco = document.getElementById("espaço-noticias")

//     let template ="";

//     for (let index = 0; index < noticias.length; index++) {
//         const noticias = noticias[index];
        
//         template += `´<div class= "Cardnews"'>
//         <img src="img/cardnews.jpg" alt="foto da joagadora profissional">
//             <h3>${noticias.titulo}</h3>
//             <p>${noticias.descricao}</p>
//     </div>`        
//     }
//     espaco.innerHTML = template;