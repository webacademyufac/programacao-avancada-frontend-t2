/* function clickMenu() {
    if(itens.styles.display == 'block'){
        itens.styles.display = 'none'
    }else{
        itens.styles.display = 'block'
    }
    window.alert("oi")
}  */

function clickMenu() {
    var element = document.getElementById("itens");
    if(element.style.display == 'block'){
        element.style.display = 'none'
    }else{
        element.style.display = 'block'
    }
  }

  function mudouTamanho(){
    if(window.innerWidth >= 768){
        itens.style.display = 'block'
    } else{
        itens.style.display = 'none'
    }
  }
