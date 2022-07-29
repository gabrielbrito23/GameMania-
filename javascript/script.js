const labels = document.querySelectorAll('.formulario label')

labels.forEach(label => {
    label.innerHTML = label.innerText
    .split('')
    .map((letter, idx) => `<span style="transition-delay:${idx * 50}ms">${letter}</span>`)
    .join('')
})

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