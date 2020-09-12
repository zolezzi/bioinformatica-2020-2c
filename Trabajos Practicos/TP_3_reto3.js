//Como invariante sabemos que siempre en una cadena aparece al menos una caja TATA y que se representa como TATAAA en la cadena de nucleótidos 

function searchBetweenTata(chain){
	//ATVEKGGKHKTATAAATGPNEKGSTOPTATAAAKKIFVQKCSQC
	var array =  splitSeparateByTataa(chain, "TATAAA");
	
	array = checkStopFirstElement(array);
	array = checkStopLastElement(array);
	return array;
}

function splitSeparateByTataa(string, subString) {
  return string.split(subString);
}

function checkStopFirstElement(chain){
	if (chain[0].indexOf("STOP")<0 ){
		chain.shift();
	}
	return chain;
}

function checkStopLastElement(chain){
	if (chain[chain.length-1].indexOf("STOP")<0 ){
		chain.length = chain.length-1;
	}
	return chain;
}
