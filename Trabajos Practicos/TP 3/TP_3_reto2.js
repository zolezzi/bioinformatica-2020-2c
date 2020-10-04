	const mapAminoAcidToPeptide = {
		"F": ["UUU", "UUC"],
		"L": ["UUA", "UUG", "CUU", "CUC", "CUA", "CUG"],
		"I": ["AUU", "AUC", "AUA"],
		"M": ["AUG"],
		"V": ["GUU", "GUC", "GUA", "GUG"],
		"S": ["UCU", "UCC", "UCA", "UCG", "AGU", "AGC"],
		"P": ["CCU", "CCC", "CCA", "CCG"],
		"T": ["ACU", "ACC", "ACA", "ACG"],
		"A": ["GCU", "GCC", "GCA", "GCG"],
		"Y": ["UAU", "UAC"],
		"H": ["CAU", "CAC"],
		"Q": ["CAA", "CAG"],
		"N": ["AAU", "AAC"],
		"K": ["AAA", "AAG"],
		"D": ["GAU", "GAC"],
		"E": ["GAA", "GAG"],
		"C": ["UGU", "UGC"],
		"W": ["UGG"],
		"R": ["CGU", "CGC", "GCA", "CGG", "AGA", "AGG"],
		"G": ["GGU", "GGC", "GGA", "GGG"]
	}

	function arnToPeptide(arnString){
		//ATVEKGGKHKTGPNEKGKKIFVQKCSQCHTVLHGLFGRKTGQA
		var result= "";
		
		for(var i=0 ; i < arnString.length ; i++){
			var aminoacid = ""
			var chain = ""
			aminoacid = arnString[i];
			chain = obtainAleatory(aminoacid)
			result += chain;
		}
		return result;
	}

	function obtainAleatory(aminoacidString){
		var arrayResult = "";
		
		arrayResult = mapAminoAcidToPeptide[aminoacidString];
		
		return aleatory(arrayResult);
	}
	
	function aleatory(array){
		return array[Math.floor(Math.random() * array.length )]
	}