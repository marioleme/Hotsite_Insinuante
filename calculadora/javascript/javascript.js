function calcular(){
	
	if(document.getElementById("sol").value == 1){
		amb = document.getElementById("metro").value *  600;
		}else{
			
			amb = document.getElementById("metro").value * 800;
			
			}
				
	pessoas = document.getElementById("pessoas").value * 600;
	equipamento = document.getElementById("equipamento").value * 600;
	abertura = document.getElementById("abertura").value * 1500;
	
	document.getElementById("texto").innerHTML = ""; 
	document.getElementById("opcao").innerHTML = "";
	document.getElementById("total").innerHTML ="";
	
    if (form.metro.value=="") {
    document.getElementById("texto").innerHTML += "Preencher campo M&#178;";
    form.metro.focus();
    return false;
    }
	if (form.pessoas.value=="") {
    document.getElementById("texto").innerHTML += "Preencher campo pessoa";
    form.pessoas.focus();
    return false;
    }
	if (form.equipamento.value=="") {
   document.getElementById("texto").innerHTML += "Preencher campo equipamento";
    form.equipamento.focus();
    return false;
    }
	
	if (form.abertura.value=="") {
    document.getElementById("texto").innerHTML += "Preencher campo Entrada de Ar";
    form.abertura.focus();
    return false;
    }
	else{
		
	document.getElementById("total").innerHTML += parseFloat(amb+pessoas+equipamento+abertura);
		
		}

	total = (amb+pessoas+equipamento+abertura);
	
	document.getElementById("texto").innerHTML = ""; 
	document.getElementById("rodape").innerHTML = "";
	
	
	if(total <= 8500){
	
	document.getElementById("texto").innerHTML += "<a href=\"http://www.insinuante.com.br/Produto/Ar-Condicionado-Split-Electrolux-7000-Btus-Frio-Ecoturbo-TI07FTE07F/256-351-353-284656\" target=\"/_top\"><img src=\"imagens/imagem/imagens-ar-condicionado/ar-condicionado-de-5000-a-8500/01.jpg\"  \></a> ";

	
		}
	if(total > 8501 && total < 10000 ){
		
	document.getElementById("texto").innerHTML += "<a href=\"http://www.insinuante.com.br/Produto/Ar-Condicionado-Split-LG-9000-BTUs-Frio-Smile-TSUC092TNW6/256-351-353-516752\" target=\"/_top\"><img src=\"imagens/imagem/imagens-ar-condicionado/ar-condicionado-de-9000-a-10000/01.jpg\"  \></a> ";

		}
		
	if(total > 10001 && total < 18001 ){
		
	document.getElementById("texto").innerHTML += "<a href=\"http://www.insinuante.com.br/Produto/Ar-Condicionado-Split-Consul-12000-Btus-Bem-Estar-Frio-com-Controle-Remoto-CBY12CBV12CB/256-351-353-279980\" target=\"/_top\"><img src=\"imagens/imagem/imagens-ar-condicionado/ar-condicionado-de-12000-a-18000/01.jpg\"  \></a> ";


		}
		
	if(total > 18001&& total < 30000 ){
		
	document.getElementById("texto").innerHTML += "<a href=\"http://www.insinuante.com.br/Produto/Ar-Condicionado-Split-LG-22000-Btus-Frio-Libero-E-Inverter-US-Q242CSZ2/256-351-354-390142\" target=\"/_top\"><img src=\"imagens/imagem/imagens-ar-condicionado/ar-condicioando-de-19000-a-30000/01.jpg\"  \></a> ";


		}	
		
	if(total > 30001 ){
		
	document.getElementById("rodape").innerHTML += "<img src=\"imagens/imagem/naoencontrado.jpg\"  \>;";
		}	
		
    }