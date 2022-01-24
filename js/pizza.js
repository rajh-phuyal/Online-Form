document.getElementById("formPizza").addEventListener("submit", aluguer);
document.getElementById("id_pizza").addEventListener("change", mudaImg);
document.getElementById("btnReset").addEventListener("click", resetImg);

//função que altera a imagem de pizza
function mudaImg(event) {
    let PIZZA = document.getElementById("id_pizza").value;
    switch (PIZZA) {
        case '':
            document.getElementById("imgPizza").src = "https://www.crushpixel.com/big-static18/preview4/hand-drawn-vector-pizza-logo-3123589.jpg";
            break;
        case 'Marguerita':
            document.getElementById("id_Preco").value = '5.0 €';
            document.getElementById("imgPizza").src = "https://th.bing.com/th/id/R90d6462f9e3e23429c9b38e6f576b90f?rik=IzgXbDQwtoOzhA&riu=http%3a%2f%2frossopizza.com.br%2fsalao%2fwp-content%2fuploads%2f2019%2f09%2fistock-181175167-900x600.jpg&ehk=sOK1kVZpxqlaFR8w%2bQCJW%2fUBoE4uYSbXJJk3qBabo40%3d&risl=&pid=ImgRaw";
            break;
        case 'Napolitana':
            document.getElementById("id_Preco").value = '6.0 €';
            document.getElementById("imgPizza").src = "https://media.timeout.com/images/105595705/image.jpg";
            break;
        case 'Tropical':
            document.getElementById("id_Preco").value = '7.0 €';
            document.getElementById("imgPizza").src = "https://img-global.cpcdn.com/recipes/03ed071c6292a625/751x532cq70/foto-principal-da-receita-pizza-tropical-da-xana.jpg";
            break;
        case 'Atum':
            document.getElementById("id_Preco").value = '4.5 €';
            document.getElementById("imgPizza").src = "https://www.receiteria.com.br/wp-content/uploads/receitas-de-pizza-de-atum-05-730x449.jpg";
            break;
    }
}

//Função que altera para a imagem incial
function resetImg(event) {
    document.getElementById("imgPizza").src = "https://www.crushpixel.com/big-static18/preview4/hand-drawn-vector-pizza-logo-3123589.jpg";
}

function aluguer(event) {
    //Mantem o valor dos campos após submissão de dados
    event.preventDefault();

    //validação dos campos
    function validacao() {

        
        let PIZZA = document.getElementById("id_pizza").value;
        let quantidade_pza = document.getElementById("quantidade_pizza").value;
        let quantidade_B = document.getElementById("quantidade_bebidas").value;
        let bebiba_f_or_t = document.getElementById("bebidas").value
        let bebida = document.formPizza.bebida;
        let pagamento = document.formPizza.Pagamento; //array dos radio buttons Métodos Pagamento
        let tamanho = document.formPizza.tamanho;

        //Array erros que guarda os erros de informação em falta
        let erros = [];

        if (PIZZA == "") {
            erros.push("Tipo de pizza");
        }

        if (bebiba_f_or_t != "" && bebida[0].checked == false && bebida[1].checked == false) {
            erros.push("Tipo de bebida");
                if ( quantidade_B <= 0) {
                erros.push("Número de bebidas");
            }
        }

        if (isNaN(quantidade_pza) || quantidade_pza <= 0) {
            erros.push("Número de pizzas");
        }

        if (pagamento[0].checked == false && pagamento[1].checked == false && pagamento[2].checked == false) {
            erros.push("Métodos de Pagamento");
        }0

        //verifica se existem erros
        if (erros.length == 0) {
            return true;
        } else {
            alert("Informação em falta:\n" + erros.join("\n"));
            return false;
        }
    }

    if (validacao()) {


        let ingredientes = document.formPizza.ingridientes_extra;
        let quantidade_ingredientes_selecionados = 0;

        console.log(ingredientes); // como se fosse print("")

        // Verifica em cada botão para saber quandos ingredientes foram selecionados
        ingredientes.forEach(botao => {
            if (botao.checked) quantidade_ingredientes_selecionados += 1;
        });

        let preco_total_ingredientes_extra = quantidade_ingredientes_selecionados * 0.25;

        //declaração das variaveis
        var data = new Date();
        var total = 0.0;
        var tipo_bebida = 0.0;
        var tamanhoPreço = 0.0;
        var bebidaSel, modoPaga;
        var tamanhoSel, tamanhoPaga;
        var bebiba_f_or_t = document.getElementById("bebidas").value
        var PIZZA = document.getElementById("id_pizza").value;
        var precoBase = document.getElementById("id_Preco").value;
        var quantidade_pza = parseInt(document.getElementById("quantidade_pizza").value);
        var quantidade_B = parseInt(document.getElementById("quantidade_bebidas").value)
        var bebida = document.getElementById("formPizza").bebida; //retorna array dos radio buttons Marca
        var pagamento = document.getElementById("formPizza").Pagamento; //retorna array  dos radio buttons Pagamento
        var tamanho = document.getElementById("formPizza").tamanho
        var lingprogramas = '';
        var somador = 0;
        

        //gera o array ingridientes com cada opção de checkbox
        var linguagens = document.forms["formPizza"].ingridientes_extra;
        

        for(var i=0; i<linguagens.length; i++){
            if(linguagens[i].checked){
                somador += 1;
                lingprogramas += "\n" + linguagens[i].value + " ";
            }
        }

        /* Verifica qual foi a pizza selecionada, como se fosse varios ifs
            ou seja verifica em qual caso o valor está.
        */
        switch (PIZZA) {
            case 'Marguerita':
                precoBase = 5.0;
                break;
            case 'Napolitana':
                precoBase = 6.0;
                break;
            case 'Tropical':
                precoBase = 7.0;
                break;
            case 'Atum':
                precoBase = 4.5;
                break;
        }

        //Verificção dos Radio Buttons do tamanho das pizzas
        if (tamanho[0].checked == true) {
            tamanhoSel = "Pequena";
            tamanhoPreço = 0.0;
        } else if (tamanho[1].checked == true) {
            tamanhoSel = "Media";
            tamanhoPreço = 2.0;
        } else if (tamanho[2].checked == true) {
            tamanhoSel = "Grande";
            tamanhoPreço = 7.0;
        }

        //Verificção dos Radio Buttons do tamanho das bebidas
        if (bebida[0].checked == true) {
            bebidaSel = "Lata";
            tipo_bebida = 1.5;
        } else if (bebida[1].checked == true) {
            bebidaSel = "1/2 Litro";
            tipo_bebida = 3.0;
        }

        //Verificação dos Radio Buttons do Método de Pagamento
        if (pagamento[0].checked == true) {
            modoPaga = "Dinheiro";
        } else if (pagamento[1].checked == true) {
            modoPaga = "MULTIBANCO";
        } else {
            modoPaga = "MBWAY";
        }

        var  conta = quantidade_B * tipo_bebida;
        total =  precoBase + preco_total_ingredientes_extra + conta + tamanhoPreço * quantidade_pza ;

        //confirmação dos dados 
        var confirma = window.confirm("Selecionou o seguinte :\n" + "Tipo de pizza: "
            + PIZZA + "\nPreço base: " + precoBase + " €" + "\nQuantidade de pizzas: " + quantidade_pza 
            + "\n tamanho da pizza: " + tamanhoSel + "\nIngridientes extra: " + lingprogramas 
            + "\nPreço dos ingridientes extra: " + preco_total_ingredientes_extra 
            + "\nBebida: " + bebiba_f_or_t
            +"\nQuantidade de bebida: " * quantidade_B
            + "\nTamanho da Bebida : " + bebidaSel + "\npreço da bebida: " + tipo_bebida * quantidade_pza + " €"
            + "\nMétodo de Pagamento: " + modoPaga + "\nValor a pagar: " + total + " €" 
            +"\n" + data.toLocaleDateString() +"   " + "Hora: " + data.getHours() + ":" + data.getMinutes() + ":" + data.getSeconds() +"\n CONFIRMA ESTES DADOS?")

        if (confirma == true) {
            window.alert("Dados submetidos com sucesso!");
            document.getElementById("txtTotal").value = total.toFixed(2) + "€";
            return true;
        } else {
            return false;
        }
    }
}