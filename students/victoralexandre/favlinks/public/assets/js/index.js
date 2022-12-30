// catch api links
const ul = document.querySelector('#ul-links')
const input = document.querySelector('#links-input')
const form = document.querySelector('form')

async function load() {
    const res = await fetch('http://localhost:3000').then(data => data.json())
    res.urls.map(({ name, url }) => addElement({ name, url }))
}

load()

//funcoes para adicionar e deletar elementos no arquivo usando a api
function addElementFile({ name, url }) {
    var url = "http://localhost:3000?" + "name=" + name + "&url=" + url
    fetch(url)
}
function removeElementFile({ name, url }) {
    var url = "http://localhost:3000?" + "name=" + name + "&url=" + url + "&del=true"
    fetch(url)
}

function addElement({ name, url }) {
    const li = document.createElement('li')
    const a = document.createElement("a")
    const trash = document.createElement("span")

    a.href = url
    a.innerHTML = name
    a.target = "_blank"

    trash.innerHTML = "x"
    trash.onclick = () => removeElement(trash, { name, url })

    li.append(a)
    li.append(trash)
    ul.append(li)
}
function removeElement(el, { name, url }) {
    if (confirm('Tem certeza que deseja deletar?'))
        el.parentNode.remove()
    removeElementFile({ name, url })
}

form.addEventListener('submit', (event) => {
    event.preventDefault();

    let { value } = input

    if (!value)
        return alert('Preencha o campo!')

    const [name, url] = value.split(',')

    if (!url)
        return alert('O texto não está formatado da maneira correta.')

    if (!/^http/.test(url))
        return alert('Digite a url da maneira correta.')

    addElementFile({ name, url })
    addElement({ name, url })

    input.value = ''
})

/* // CARECE DE AJUSTES
// change-size
window.onload = function() {
    var elementBody = document.querySelector('body');
    var elementBtnIncreaseFont = document.getElementById('increase-font');
    var elementBtnDecreaseFont = document.getElementById('decrease-font');
    // Padrão de tamanho, equivale a 100% do valor definido no Body
    var fontSize = 100;
    // Valor de incremento ou decremento, equivale a 10% do valor do Body
    var increaseDecrease = 10;

    // Evento de click para aumentar a fonte
    elementBtnIncreaseFont.addEventListener('click', function(event) {
        fontSize = fontSize + increaseDecrease;
        elementBody.style.fontSize = fontSize + '%';
    });

    // Evento de click para diminuir a fonte
    elementBtnDecreaseFont.addEventListener('click', function(event) {
        fontSize = fontSize - increaseDecrease;
        elementBody.style.fontSize = fontSize + '%';
    });
}
*/