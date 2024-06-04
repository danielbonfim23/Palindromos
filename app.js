
function verificar () {
    let texto = document.querySelector('input').value;
    texto = texto.toLowerCase();
    let resultado = 10;
    let palavra;

    if (texto.length % 2 === 0) {
        for (let index = 0; index < texto.length/2 ; index++) {
        
            resultado = texto.charAt(index) == texto.charAt(texto.length - (1+index)) ?   resultado + 1 :  resultado - 1;

        }   
    } else  {
        for (let index = 0; index < Math.floor(texto.length/2) ; index++) {
        
            resultado = texto.charAt(index) == texto.charAt(texto.length - (1+index)) ?   resultado + 1 :  resultado - 1;

        }
    }
    
    if (resultado > 10) {
        let textoTela = document.querySelector('h2');
        textoTela.innerHTML = `A palavra ${texto} é um palíndromo`;
    } else {
        let textoTela = document.querySelector('h2');
        textoTela.innerHTML = `A palavra ${texto} não é um palíndromo`;
    }
    
    

}