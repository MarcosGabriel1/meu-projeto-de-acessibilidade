// Função para aumentar o tamanho da fonte
function aumentarFonte() {
    let body = document.body;
    let currentSize = window.getComputedStyle(body).fontSize;
    let newSize = parseFloat(currentSize) * 1.1;  // Aumenta a fonte em 10%
    body.style.fontSize = newSize + 'px';
}

// Função para diminuir o tamanho da fonte
function diminuirFonte() {
    let body = document.body;
    let currentSize = window.getComputedStyle(body).fontSize;
    let newSize = parseFloat(currentSize) * 0.9;  // Diminui a fonte em 10%
    body.style.fontSize = newSize + 'px';
}

// Atribuir os eventos aos botões de aumentar e diminuir a fonte
document.getElementById('aumentar-fonte').addEventListener('click', aumentarFonte);
document.getElementById('diminuir-fonte').addEventListener('click', diminuirFonte);
