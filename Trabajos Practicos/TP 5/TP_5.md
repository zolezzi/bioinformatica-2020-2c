# TP 5

## Integrantes
* Cardozo, Carlos
* Luna Watkins, Ezequiel
* Marrero, Pablo

**RETO I: Intentemos, entonces alinear estas dos palabras, para comprender mejor el problema. Alineá en la siguiente table de comparaciones las palabras "BANANA" y "MANZANA".**


**PREGUNTAS DISPARADORAS: ¿Existe una única forma de alinearlas? ¿Es alguno de los posibles alineamientos mejor que otro? Si así fuera ¿Por qué?**

No, existen diferentes maneras de alinear dos cadenas ya que difieren en varios aspectos: ya sea largo y si además puedo inferir gaps o espacios en cada palabra para poder lograr mayor similitud en la comparación.
Si, hay mejores alineamientos que otros pero lo que se tiene que tener en cuenta es el contexto ya que si quisiera comparar BANANA con MANZANA puedo hacerlo de las siguientes maneras:

>BAN-ANA
>MANZANA

De esta manera "rompiendo" el contexto de la palabra BANANA logramos que haya mayor acierto en la comparación.
Ahora bien, si no podemos usar gaps o espacios nos restringe mucho más ya que solo podemos lograr un corrimiento.

>BANANA
>MANZANA

> BANANA
>MANZANA

**RETO II: En la siguiente tabla probá distintos alineamientos para las palabras "ANA" y "ANANA". Verás que en el margen superior izquierdo aparece un valor de identidad calculado para cada alineamiento que intentes.**
**Tomá nota de los valores de identidad observados y de las conclusiones que se desprendan de estas observaciones. **

**PREGUNTAS DISPARADORAS: ¿Son todos los valores iguales? ¿Qué consideraciones deberían tenerse en cuenta a la hora de realizar el cálculo? ¿Se te ocurre, distintas formas de calcularlo? ¿Serán todas ellas igualmente válidas en Biología?**

>ANA--
>ANANA

Se logra una identidad de 0.6

>A--NA
>ANANA

Se logra una identidad de 0.6

>-A-NA
>ANANA

Se logra una identidad de 0.4

>--ANA
>ANANA

Se logra una identidad de 0.6

No, no todos tienen los valores iguales ya que difieren en las diferentes combinaciones. 
A pesar de que hay combinaciones que logran una identidad de 0.6, otras logran una identidad de 0.4 mientras otras logran una identidad de 0.2.
Ahora bien, si la penalidad es mayor se pueden lograr identidades negativas ya que no siempre es bueno ni tampoco no genera efectos adversos en la similitud de un alineamiento. Debemos analizar bien si queremos una penalidad en cuanto a gap o a que no sean similares cada comparación de aminoácidos.
Se nos ocurre darle valores tanto de identidad y de similitud a cada aminoácido y en función de sumar cuando sean idénticos y/o similares y restar cuando sean disímiles y comparar los valores de la sumatoria (aunque no siempre es suma porque puede haber restas) de la identidad y la similitud.


**RETO III: En la siguiente tabla probá distintos alineamientos para las palabras "ANA" y "ANANA". Verás que en el margen superior izquierdo aparece un valor de identidad calculado para cada alineamitno que intentes y un botón para cambiar la penalidad que se le otorga a dicho para el cálculo de identidad.**

**Probá varias combinaciones, tomá nota de los valores de identidad observados y de las conclusiones que se desprendan de estas observaciones. **

**PREGUNTAS DISPARADORAS: ¿Cómo se relacionan los valores de identidad obtenidos con las penalizaciones que se imponen al gap? ¿Qué implicancias crees que tiene una mayor penalización de gaps? ¿Se te ocurre alguna otra forma de penalización que no haya sido tenido en cuenta en este ejemplo? **

Si la penalidad es 0 notamos que no influye en el valor obtenido para el cálculo de identidad, sin importar si el par de gaps está al comienzo, en el medio o al final.
Ahora bien, si aumentamos la penalidad a 1 podemos ver que ahora si tiene inferencia en el valor calculado para la identidad logrando que por cada gap se descuente un 0.2 al valor final (es decir, resta en lugar de sumar 0 o positivamente). 
De igual manera si aumentamos la penalidad a n el valor que se descuenta está dado por el cálculo de 
> -( n * 0.2) 
De manera que a medida que aumenta la penalidad obtenemos una identidad más negativa. 

A mayor penalidad es más difícil lograr una identidad positiva para cualquier alineamiento dado sin importar cuales sean las cadenas a comparar.

**PARA PENSAR: Entonces, pensando en un alineamiento de ácidos nucleicos ¿Cuáles te parece que son las implicancias de abrir un gap en el alineamiento? ¿Qué implicaría la inserción o deleción de una región de más de un residuo?

Si abrimos un gap en un alineamiento de  ácidos nucléicos generamos una divergencia ya que si nos falta un componente del codón no podemos saber a que aminóacido traduce dicho codón porque como bien vimos la variabilidad es tan alta que no podemos obtener un aminoácido en concreto.

**RETO IV: En la siguiente tabla probá distintos alineamientos para las secuencias nucleotídicas. Podrás ver las traducciones para cada secuencia.**

**Probá varias combinaciones, tomá nota de las observaciones y de las conclusiones que se desprendan de estas. **

Lo que podemos observar en este caso es que podemos lograr una identidad de ~0.77 con el siguiente alineamiento
>TGC-GA-GG
>TGCCGAAGG

Pero lo que notamos es que como tenemos dos pares de codones incompletos no se puede generar una traducción para cada codón.
En este caso si aumentamos la penalidad n veces se obtiene una identidad menor dada por el cálculo
> -( n * 0.1^)

Otra cosa que notamos es que cuando se comparan las traducciones dada por los codones la comparativa entre un gap y un aminoácido cualquiera es mejor que dos aminoácidos que son distintos.

**PARA PENSAR: ¿Dá lo mismo si el gap que introducís cae en la primera, segunda o tercer posición del codón? ¿Cómo ponderarías las observaciones de este ejercicio para evaluar el parecido entre dos secuencias? **

A nivel traducción es indistinto en que posición cae el gap ya que no se podrá traducir a un aminoácido. Ahora bien, a nivel identidad no da lo mismo ya que deberíamos obtener un alineamiento donde el aminácido sea igual al otro en comparación.
 
