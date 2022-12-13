var listElement = document.querySelector('.list');
var textElement = document.querySelector('input');
var buttonElement = document.querySelector('button');


var arr = [
    'https://projetowebacademy.online/labcheck/login.php',
    'Assistir cursos que tão atrasados',
    'ver ani',
];

function renderTodo(){
    /*
    for(var i = 0; i < arr.length; i++){
        console.log(i)
    }
    */
    listElement.innerHTML = '';

    arr.forEach((item, index) => {
        var liElement = document.createElement('li');
        var liText = document.createTextNode(item);

        var linkLi = document.createElement('a');
        var TextLink = document.createTextNode('Excluir');
        linkLi.setAttribute('href', '#');
        linkLi.setAttribute('onclick', 'deleteItem('+ index +')')

        linkLi.appendChild(TextLink);

        liElement.appendChild(liText);
        liElement.appendChild(linkLi);
        listElement.appendChild(liElement);

        //linkElement.addEventListener('click', deleteItem);
    })
}

renderTodo();

buttonElement.addEventListener('click', addItem)

function addItem(){
    var itemTexto = textElement.value;
    arr.push(itemTexto);
    renderTodo();
}

function deleteItem(pos){
    arr.splice(pos, 1);

    renderTodo();
}