# TP 3

## Integrantes
* Cardozo, Carlos
* Luna Watkins, Ezequiel
* Marrero, Pablo

**Cuadro a completar**

| Secuencia      | Nombre taxonómico        | Nombre común      |
|----------------|--------------------------|-------------------|
| NP_061820.1    | Homo sapiens             | Humano            |
| NP_001072946.1 | Gallus gallus            | Gallo/Gallina     |
| NP_001065289.1 | Pan troglodytes          | Chimpancé         |
| NP_001157486.1 | Equus caballus           | Caballo/Yegua     |
| NP_001183974.1 | Canis lupus familiaris   | Perro/a           |
| AEP27192.1     | Gorilla gorilla          | Gorila            |
| XP_024245566.1 | Oncorhynchus tshawytscha | Salmón            |
| NP_001086101.1 | Xenopus laevis           | Rana africana     |
| NP_477164.1    | Drosophila melanogaster  | Mosca de la fruta |


**Secuencias FASTA del cytochrome c**

>NP_061820.1 cytochrome c [Homo sapiens]MGDVEKGKKIFIMKCSQCHTVEKGGKHKTGPNLHGLFGRKTGQAPGYSYTAANKNKGIIWGEDTLMEYLENPKKYIPGTKMIFVGIKKKEERADLIAYLKKATNE
>NP_001072946.1 cytochrome c [Gallus gallus]MGDIEKGKKIFVQKCSQCHTVEKGGKHKTGPNLHGLFGRKTGQAEGFSYTDANKNKGITWGEDTLMEYLENPKKYIPGTKMIFAGIKKKSERVDLIAYLKDATSK
>NP_001065289.1 cytochrome c [Pan troglodytes]
MGDVEKGKKIFIMKCSQCHTVEKGGKHKTGPNLHGLFGRKTGQAPGYSYTAANKNKGIIWGEDTLMEYLENPKKYIPGTKMIFVGIKKKEERADLIAYLKKATNE
>NP_001157486.1 cytochrome c [Equus caballus]
MGDVEKGKKIFVQKCAQCHTVEKGGKHKTGPNLHGLFGRKTGQAPGFSYTDANKNKGITWKEETLMEYLENPKKYIPGTKMIFAGIKKKTEREDLIAYLKKATNE
>NP_001183974.1 cytochrome c [Canis lupus familiaris]
MGDVEKGKKIFVQKCAQCHTVEKGGKHKTGPNLHGLFGRKTGQAPGFSYTDANKNKGITWGEETLMEYLENPKKYIPGTKMIFAGIKKTGERADLIAYLKKATKE
>AEP27192.1 cytochrome c [Gorilla gorilla]
MGDVEKGKKIFIMKCSQCHTVEKGGKHKTGPNLHGLFGRKTGQAPGYSYTAANKNKGIIWGEDTLMEYLENPKKYIPGTKMIFVGIKKKEERADLIAYLKKATNE
>XP_024245566.1 cytochrome c [Oncorhynchus tshawytscha]
MGDIEKGKKAFVQKCAQCHTVENGGKHKVGPNLWGLFGRKTGQAEGFSYTDANKAKGIVWDTDTLMTYLENPKKYIPGTKMIFAGIKKKGERADLIAYLKSATS
>NP_001086101.1 cytochrome c, testis-specific [Xenopus laevis]
MGDVEKGKKVFVQKCSQCHTVEKGGKHKTGPNLHGLFGRKTGQAEGFSYTDANKNKGIVWDEDTLMVYLENPKKYIPGTKMIFAGIKKKGERQDLIAYLKQSTSS
>NP_001285984.1 cytochrome c proximal, isoform B [Drosophila melanogaster]
MGVPAGDVEKGKKLFVQRCAQCHTVEAGGKHKVGPNLHGLIGRKTGQAAGFAYTDANKAKGITWNEDTLFEYLENPKKYIPGTKMIFAGLKKPNERGDLIAYLKSATK

**¿Cuán sencillo será alinear dos o más secuencias a mano? ¿Cuánto influirán el número de secuencias a alinear, su longitud, y la similitud entre ellas?

Alinear dos secuencias sería en principio sencillo ya que son secuencias de aminoácidos cortas que tienen una longitud de 100 caracteres en promedio, los cuales presentan similitudes apreciables. 
Llegado el caso de querer hacerlo a mano más de dos secuencias se tornaría muy complejo y escalaría la dificultad considerando las diferentes longitudes de la secuencia, sería muy poco eficiente y se perdería demasiado tiempo haciendolo.

**¿Son parecidos los citocromos c de humano y del gallo?**

Con respecto a estos dos casos puntuales presentan a simple vista un parecido aunque si nos ponemos a analizar elemento a lemento de ambas cadenas podemos notar diferencias que caracterizan a cada especie. 
El concepto de "parecidos" nos parece un poco arbitrario y no podemos hablar con certezas ya que presentan similitudes aunque podemos notar que hay casos donde no es el mismo caracter TODO

[Comparacion](https://imgur.com/9FzjriI)

**¿Qué teorías subyacen a este análisis?**

Las teorías que subyacen este análisis es la evolución con respecto al paso del tiempo, ya que de cierta madera podemos ir notan similitudes para poder ir agrupandolo en familia de especies.

**¿Cómo nos ayuda la evolución a explicar sus similitudes y diferencias?**

TODO

**Podemos elegir verlo en colores (Show Color) ¿Qué indican los colores?**

Los colores nos ayudan a indicar propiedades de los aminoácidos de la cadena para ayudar en la caracterización o en una sustitución aminoacídica dada. Cuando se introducen múltiples secuencias la última fila de cada columna suele representar la secuencia consenso determinada por el alineamiento.

**¿Qué indican el guión (-), los dos puntos (:) y el asterisco (*)?**

Sin símbolos consensuados, es decir cada símbolo denotan algo en particular y son un estándar dentro de la utilización de estos formatos como clustalw.
El guión (-) indica un GAP, UN corrimiento de una secuencia para hacer coincidir con otra
El (*) indica una coincidencia. Es decir, que en dicha posición los residuos son 100% idénticos.
Los dos puntos (:) indican conservación entre grupos de propiedades fuertemente similares.

**A simple viste, ¿se conserva la secuencia del citocromo c en los organismos?**

No, claramente notamos diferentes cambios ya que que cada secuencia FASTA varía al hacer el alineamiento.	

**¿Creeríamos que todos los organismos se asemejan por igual al resto, o se pueden identificar grupos de mayor similitud? Si es así, ¿tienen sentido?**

No, no se asemejan por igual al resto ya que cada organismo se vincula más con algunos organismos que con otros. Estas diferencias se pueden ver en el árbol filogenético en el cual es un esquema con forma arbórea que muestra las relaciones evolutivas entre varias especie que tienen una ascendencia común.

**¿Qué evidencias nos aportaría este análisis, a la luz de la evolución?**

Como se menciona en el punto anterior, en el árbol filogenético podemos ver cómo se agrupan los distintos organismos según sus similitudes y su relacion evolutiva. 
Muchas especies comparten una gran similitud, por ejemplo, el humano está en el mismo árbol que el chimpancé y este árbol nace de otro en el cual está compartido con el gorila. 
Esto nos indicaría que el chimpancé y el humano tienen la misma procedencia y a su vez esa rama compartiría el origen con el gorila. 
Toda esta información gráfica nos ayuda explicar cómo se dio la evolución de ciertos organismos a partir de sus similitudes en la secuencia de su ADN.

**A juzgar por los organismos participantes,¿cuáles creería que deberían estar más agrupados en el árbol filogenético?**

Creemos que deberian estar agrupados en mamíferos y los que no lo son. 
Por un lado creemos que debería estar relacionado el humano con el chimpance y gorila, el caballo con el perro pero con los demás no encontramos relación más allá que nacen desde huevos.

**Observemos el árbol filogenético. ¿Concuerda con lo esperado? ¿De qué organismos son los citocromos c más parecidos? ¿Cómo se explica?**

[arbol-filogenetico](https://imgur.com/2hhCQzI)

Como se puede observar el programa agrupa según lo que pensábamos: mamíferos y los que no lo son.
En gran parte concuerda con lo que esperabamos aunque nos sorprende que haya una relación entre el gallo y la rana con el salmón.
Los organmismos más parecidos son aquellos donde la relación es más estrecha: humano con chimpance, caballo con perro y rana con el salmón. Podemos explicarlo ya que pertenecen a una misma rama como por ejemplo el humano y el chimpance y otros casos en el cual nos faltan más datos para poder evaluarlo con mayor exactitud como lo son la rana con el salmón y el gallo.