//alert("Arquivo externo utilizando js nesta pagina")

function cadastrarNewsletter(){
    let email = document.getElementById("campo-email").value
    alert(email)
}

function mostrarMenu($event){
    //identificar o elemento menu
    let menu = document.getElementById("menu")

    if(getComputedStyle(menu).display == "none"){
        menu.style.display = "flex"
    }
    else{
        menu.style.display = "none"
    }

    event.preventDefault()
}
