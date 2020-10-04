# TP 1

## Integrantes
* Cardozo, Carlos
* Luna Watkins, Ezequiel
* Marrero, Pablo

**RETO I: Podrías buscar un ejemplo de macromoléculas que almacenen información sobre la _identidad_ de un organismo dado?**

Los ácidos nucleícos son los encargados de almacenar información sobre la identidad de algún organismo. Dentro de esta categoría se encuentra el ADN (ácido desoxirribonucleico) y el ARN (ácido ribonucleico).
El ADN contiene información necesaria para determinar la forma, funciones específicas y que características tendrá dicho individuo.

**RETO II: Proponé una forma de expresar la información contenida en la estructura primaria de las proteínas usando tipos de datos de los lenguajes de programación que conocés**
Una estructura para almacerna la información primaria de las proteinas puede ser un string (que es una cadena de caracteres) ya que esta cadena puede ser iterable e ir recorriendo cada componente de la estructura.

**RETO III: ¿En qué tipo de datos podrías expresar la información de la estructura terciaria proteica?**

Una lista de puntos donde dicho punto sea una representación de los ejes x, y, z que corresponden al punto en el espacio.
De manera que si quisiera obtener y graficar la proteina en 3D debería recorrer esa lista y a cada punto preguntarte sus coordenadas.

Un ejemplo podría ser el siguiente intentado representar la proteina 1UBQ 
> 
> [ 
>
> 	{ aminoacido: MET, posicion: (x1, y1, z1)}, 
>
> 	{ aminoacido: GLN, posicion: (x2, y2, z2)}, 
>
> 	...
> 	{ aminoacido: GLY, posicion: (xn, yn, zn)} 
>
> ] 

Donde cada objeto representando en json tiene internamente el aminoacido que corresponde junto a su punto en el espacio.

**RETO IV Rosalind Franklin es una científica muy relevante, que tuvo menos reconocimiento del merecido.¿Cuáles fueron sus contribuciones en este campo? ¿Qué nos cuenta su historia acerca del mundo de la ciencia?**

Sus grandes contribuciones están dada por la utilización de rayos x para obtener imágenes de la estructura del ADN mediante la defracción de dichos rayos.
En su estadía en Paris pudo aprender sobre la utilización de los rayos X. 
En el King's College se perfeccionó y mejoró el aparato para obtener imágenes del ADN logrando una nitidez nunca antes alcanzada junto a su doctorando Raymong Gosling.

Su historia nos cuenta el machismo reinante en dicha época en el ámbito académicos el cual llevó a que nunca haya sido reconocida en vida y que muy merecido tenía.
Fue denigrada muchas veces por sus competidores y colegas del King's College: Maurice Wilkins, Francis Crick, James Watson por el solo hecho de ser mujer.

**RETO V:Proponé en pseudocódigo un programa que prediga la estructura secundaria que adoptará cada residuo(aminoácido) de la secuencia proteica dada, especificandola como H (si es una hélice), B (si es una hoja betaplegada) y L (si es un bucle o loop).**

Nuestra proteina
> 
> var proteina = [ M, Q, I, F, ...]
> 
> function predictHBL(proteina){
>
> 	var result = [];
> 
> 	for(Aminoacido aminoacido: proteina){	
>
> 		var h = getH(aminoacido);
>
> 		var b = getH(aminoacido);
>
> 		var l = getL(aminoacido);
>
> 		result.agregar( { amionacido: amionacido, values: (h, b, l)  });
>
> 	}
> 
> 	return result;
>
> }
> 

La salida sería la siguiente donde es un objeto donde contiene el aminoácido y otro componente donde es un objeto con los valores convertidos a HBL.
> [
>
> 	{M, (H, B, L )},
>
> 	{Q, (H, B, L)},
>
> 	{I, (H, B, L)},
>
> 	{F, (H, B, L)},
>
> 	...
>
> ]


**RETO VI: ¿Qué hace distintos a dos individuos de una especie? Propone una forma de corroborar tu respuesta realizando un diagrama de un posible método computacional para dicho fin**

Lo que hace distinto a los individuos de una especie es el ADN que es el que contiene la carga genética.
Una forma de poder corroborar es dado dos secuencias de ADN (es decir dos cadenas de nucleótidos que reprensenta cada uno a un individuo) recorrerlas e ir comparando cada nucleótido, en caso que uno no sea igual, quiere decir que no representa al mismo individuo.
> 
> secuenceADN1 = [...]
>
> secuencueADN2 = [...]
> 
> function compareTwoADN(secuenceADN1, secuencueADN2){
>
> 	result = true;
> 
> 	for (int i= 0 ; i < secuenceADN1.length ; i++){
>
> 		nucleotidoADN1 = secuenceADN1[i];
>
> 		nucleotidoADN2 = secuenceADN2[i];
>
> 		result = nucleotidoADN1.equals( nucleotidoADN2 );
>
> 		if ! result break;  [//] es decir al primero que encuentre que es distinto, ya se que no son el mismo individuo por > >  lo que sale de la iteración para que siga recorriendo.
> 	}
> 
> 	return result;
>
> }
