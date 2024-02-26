function calcular() {
    var peso_maximo = 50;

    var peso = parseFloat(document.getElementById('peso').value)

    if (peso > peso_maximo) {
        
        var execesso = peso - peso_maximo 
        var multa = execesso * 4
        var texto = (' Sua multa é de: ' + multa + ' reais. ')
        document.getElementById('result').value = texto
    }

    else (
        window.alert('Você não tem multas a pagar.')
    )
}