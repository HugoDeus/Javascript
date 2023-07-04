<body>
    <header>
        <h1>Analisando Números</h1>
    </header>
    <section>
        <div>
            <p>
                coloque um número de 1 ate 100<input type="number" name="numero" id="numer" min="1" max="100" required> 
                <input type="button" value="adicionar" onclick="adicionar()">
                <br>
                <select name="lista" id="lista" size="6">
                <input type="button" value="calcular" onclick="calcular()">
                </select>
            </p>
        </div>
        <div id="res">
            ola
        </div>
    </section>
    <footer>
        <p>&copy; CursoemVideo</p>
    </footer>
    <script src="script.js"></script>
</body>

let num = document.getElementById('numer')
let list = document.getElementById('lista')
let res = document.querySelector('div#res')
let valores = []

function isNumero(n) {
    if (Number(n) >= 1 && Number(n) <=100){
        return true
    } else {
        return false
    }
}

function inLista(n, l) {
    if(l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function adicionar() {
    if(isNumero(num.value) && !inLista(num.value, valores)) {
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado!`
        list.appendChild(item)
        res.innerHTML = ''
    } else {
        alert('Número invalido ou ja se encontra na lista')
    }
    num.value = ''
    num.focus()
}

function calcular() {
    if (valores.lenght == 0) {
        windows.alert('Adicione valores antes de finalizar!')
    } else {
        let tot = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
        for(let pos in valores) {
            soma += valores[pos]
            if (valores[pos] > maior)
            maior = valores[pos]
            if (valores[pos] < menor)
            menor = valores[pos]
        }
        media = soma / tot
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo , temos ${tot} números registados.</p>`
        res.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`
        res.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`
        res.innerHTML += `<p>Somando todos os valores, temos ${soma}.</p>`
        res.innerHTML += `<p>A média dos valores digitados é ${media}.</p>`
    }
}