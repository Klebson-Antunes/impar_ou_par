var nComputador = '';
        var nJogador = '';
        var minhaEscolha = '';
        
        function sortear(max){
            return Math.floor(Math.random() * max);

        }
        function jogar(){
            nJogador =  document.querySelector('#meuNumero').value;

            nComputador = sortear(9);
            //mostar na tela os numeros escolhidos
           


         
            minhaEscolha = document.querySelector('input[type="radio"]:checked').value;

            document.querySelector('#escolhadojogador').innerHTML = minhaEscolha
            //mostrar na tela se maquina e par ou impar
            if(minhaEscolha === 'Você Escolheu Par'){
                document.querySelector('#escolhadamaquina').innerHTML = 'Maquina Ficou com Impar'
            }else{
                document.querySelector('#escolhadamaquina').innerHTML = 'Maquina Ficou com Par'

            }
            if(minhaEscolha === 'Você Escolheu Impar'){
                document.querySelector('#escolhadamaquina').innerHTML = 'Maquina Ficou com Par'

            }else{
                document.querySelector('#escolhadamaquina').innerHTML = 'Maquina Ficou com Impar'
            }
            

            if(!nJogador || nJogador > 9){
                alert('ops!! Primeiro digite um numero de 0 a 9');
                return;
            }

            nJogador = parseInt(nJogador);

            var total = nJogador + nComputador;

            var resultado = (total % 2 === 0) ? 'Você Escolheu Par' : 'Você Escolheu Impar';
            verificarResultado(resultado);
            document.querySelector('#resultado').innerHTML = 'Você Escolheu o número: '+ nJogador +', '+ ' E a Maquina: ' + nComputador + ' Resultado = ' + total
           

            
        }

        function verificarResultado(resultado){
            if(minhaEscolha === resultado){
                document.querySelector('#voce').innerHTML = 'Parabens!! Você ganhou 👏';
                document.querySelector('#computador').innerHTML = 'Maquina perdeu';

            } else{
                document.querySelector('#computador').innerHTML = 'maquina Ganhou';
                document.querySelector('#voce').innerHTML = 'Você perdeu 😱';

            }
        }
        
       
