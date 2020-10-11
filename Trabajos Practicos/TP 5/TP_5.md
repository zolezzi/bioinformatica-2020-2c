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

A nivel traducción es indistinto en que posición cae el gap ya que no se podrá traducir a un aminoácido si no está completo. Ahora bien, a nivel identidad no da lo mismo ya que deberíamos obtener un alineamiento donde el aminácido sea igual al otro en comparación.
El desplazamiento de marco también puede provocar la aparición, o desaparición, de un codón de terminación o STOP (UAA, UGA, o UAG) en una posición diferente de la secuencia original. El polipéptido creado resulta entonces anormalmente corto o demasiado largo, y en la mayor parte de los casos esto lo afectaría negativamente, haciendo que pierda su funcionalidad.

**RETO V: Estuvimos viendo que el alineamiento de secuencias no es trivial y requiere contemplar los múltiples caminos posibles, teniendo en cuenta al mismo tiempo la información biológica que restringe ese universo de posibilidades.**

**¡Es momento de llevar entonces estos conceptos a lo concreto! Te proponemos pensar los pasos a seguir en una lineamiento de dos secuencias cortas, teniendo en cuenta una matriz genérica de scoring (puntuación) que contemple las complejidad es que estuvimos viendo, es decir que penalice de distinto modo una inserción o deleción, una discordancia (mismatch) o una coincidencia (match). Escribilos o esquematizalos en un diagrama de flujo.**

-Prim ero definimos arbitrariamente la siguiente matriz
 |A |T | G|
A| 1|-1|-2|
T| 0| 1|-1|
G|-2|-1| 1|
En caso de haber un GAP -4

- Segundo necesitamos ver si tienen el mismo largo. 
	- Opción a: En caso de tener el mismo largo solo se realiza la comparación uno a uno de cada residuo y se suman los valores que dan según la matriz cando un scoring puntual.
	- Opción b: Si no tienen la misma longitud se debe proceder a incorporar gaps realizando la combinatoria de posibilidades.

Para este ejemplo elegimos las cadenas ATG y TG. Como no tienen la misma longitud, procedemos a realizar las siguiene comparaciones:

a) ATG
   TG-

b) ATG
   T-G

c) ATG
   -TG
   
Donde para cada caso da el siguiente scoring:

a) (-1)+(-1)+(-4) = -6
b) (-1)+(-4)+  1  = -4
c) (-4)+  1 +  1  = -2

Por lo que el mejor caso sería el c) ya que nuestro scoring es el mayor, a pesar que es un valor negativo.

**PARA PENSAR: ¿En qué consiste la programación dinámica? ¿Por qué crees que es útil en este caso?**
La programación dinámica es una técnica que consiste en los siguientes pasos:
*Dividir un problema en dos o más subproblemas o reducirlo a una instancia más fácil de calcular del problema.
*Resolver las instancias de cada subproblema de la misma manera (dividiendo en subproblemas o reduciendo a otrainstancia) hasta llegar a un caso base.
*Guardar el resultado de cada instancia del problema la primeravez que se calcula, para que cada vez que se vuelva a necesitarel valor de esa instancia ya esté almacenado y no sea necesario calcularlo nuevamente.

Creemos que es útil para este caso ya que nos ayuda a comparar y a tener en cuenta la posibilidad de cambio en una cadena. De esta manera nos proporciona una herramienta eficaz para abordar el problema y evaluar las diferentes compensanciones a lo largo de la comparación. 

**RETO VI: Utilizando la herramienta interactiva desarrollada por el Grupo de Bioinformática de Freiburg probá distintos ​Gap penalties para el ejemplo propuesto y observá lo que ocurre. Interpretando la recursión, explicá con tus palabras de dónde salen los valores de la matriz  que se construye. ¡Esquematiza tus conclusiones!

- Primero definimos cuanto querramos que valga el match, dismatch y el gap. 
- Luego debemos poner una cadena en el eje x y otra en el eje y quedando de la siguiente manera
|D |  | A1| A2| C3| G4|
|  | 0|   |   |   |   |
|A1|  |   |   |   |   |
|A2|  |   |   |   |   |
|T3|  |   |   |   |   |
|C4|  |   |   |   |   |
|G5|  |   |   |   |   |	


Luego iniciando desde el 0 vamos sumando por cada columna, el valor del gap elegido para la columna y fila 2. 
Para este caso el valor del gap fue -2

|D |   | A1| A2| C3| G4|
|  | 0 | -2| -4| -6| -8|
|A1|-2 |   |   |   |   |
|A2|-4 |   |   |   |   |
|T3|-6 |   |   |   |   |
|C4|-8 |   |   |   |   |
|G5|-10|   |   |   |   |

Ahora siguiendo el sistema de ecuaciones planteado por la recursión debemos ver en que caso caemos

* Si ai == bi  entonces Di-1, j-1   +   m   
* Si ai != bi  entonces Di-1, j-1   +  d

Donde m es el valor del match elegido (para este caso es 1) y d es el valor de dismatch (para este caso es -1).
Analizamos el primer caso y vemos  que tanto el valor de i como de j es 1. Es por eso le corresponde la primera ecuación y nos queda que el valor calculado es 0 + 1 ya que 0 lo denota la posición de la matriz D(0,0) y 1 por ser match.
Entonces llegamos a que el valor en la comparación entre A1 y A1 es = 1

|D |   | A1| A2| C3| G4|
|  | 0 | -2| -4| -6| -8|
|A1|-2 |  1|   |   |   |
|A2|-4 |   |   |   |   |
|T3|-6 |   |   |   |   |
|C4|-8 |   |   |   |   |
|G5|-10|   |   |   |   |

Ahora procedemos con el caso a comparar A1 y A2. Como i y j son distintos, le coprresponde la segunda ecuación y nos queda que el valor calculado es _ + (-1) ya que el _ lo denota la posición de la matriz D(0,1) y -1 por ser dismatch.
Entonces llegamos a que el valor en la comparación entre A1 y A1 es = _

|D |   | A1| A2| C3| G4|
|  | 0 | -2| -4| -6| -8|
|A1|-2 |  1|   |   |   |
|A2|-4 |   |   |   |   |
|T3|-6 |   |   |   |   |
|C4|-8 |   |   |   |   |
|G5|-10|   |   |   |   |

Siguiendo esta lógica y esos cálculos se completa la matriz.

|D |   | A1| A2| C3| G4|
|  | 0 | -2| -4| -6| -8|
|A1|-2 |  1| -1| -3| -5|
|A2|-4 |   |  2| -2| -6|
|T3|-6 |   | -2|  1| -3|
|C4|-8 |   |   | -1|  0|
|G5|-10|   |   | -5|  0|


**PARA PENSAR: ¿En qué casos serán de utilidad uno u otro tipo de alineamientos? ¿Qué limitaciones tendrá cada uno? **

El alineamiento global es más util cuando se comparan secuencias de tamaño y composición similar. Pero de ser secuencias muy distintas no dará el mejor resultado. Mientras que el local, siver más para comparar regiones específicas de las secuencias por si tienen tamaños muy distintos.

**PARA PENSAR: Ingresá al servidor del NCBI y mirá los distintos programas derivados del BLAST que se ofrecen ¿Para qué sirve cada uno?¿En qué casos usarías cada uno? **

* Nucleotide BLAST: a partir del fasta de una secuencia de nucleotidos busca porcentualmente en la base especificada las secuencias similares. 
* Blastx: Sintetiza una proteina a partir de la secuencia de nucleotidos.
* Tblastn: A partir de una proteina devuelve la posinle secuencia de nucleotidos que lo forman.
* Protein BLAST: A partir del fasta de una proteina busca porcentualmente en la bd especificada las secuencias similares.

**RETO VII: calculá el E-value y % identidad utilizando el programa Blast de la siguiente secuencia input usando 20000 hits, un e-value de 100 y tomando aquellos hits con un mínimo de 70% cobertura. Observe y discuta el comportamiento de : E-value vs. % id, Score vs % id, Score vs E-value**

Secuencia: VVGGLGGYMLGSAMSRPIIHFGSDYEDRYYRENMHRYPNQVYYRPMDEYSNQNNFVHDCVNITIKQHTV TTTTKGENFTETDVKMMERVVEQMCITQYERESQAYYQRGSSMVLFSSPPVILLISFLIFLIVG


Estos valores están relacionados cuando varia uno, varian también los otros dos. 
El e-value es nuestro valor de referencia para saber que tan certero es esa proteina en esa cadena, cuando menor sea el valor mas confianza nos transmite. 
Corriendo en blast la proteina que tiene el menor e-value también tiene el mayor score y porcentaje de identidad, es decir que era la misma proteína. 
De igual forma, hay varias secuencias que disminuye el e-value pero el porcentaje de identidad sigue siendo 100%, viendo esto entre el score para desempatar y así podemos ver cual es la proteina que comparada con toda esta base de datos es la mas cercana o directamente es la misma

**RETO VIII: Realizá nuevas búsquedas usando la mitad de la secuencia problema y para un cuarto de la secuencia original. Compará los gráficos obtenidos.¿Qué conclusiones puede sacas?**

Al usar la mitad de la secuencia, cambiaron los valores. No solo el e-value más confiable es mayor que el valor con la cadena original, sino que el valor máximo también es mucho menor. Estos cambios también se reflejan con el resultado ya que también cambio la proteína con un coverage del 100%, antes era "prion protein precursor [Homo sapiens]" ahora con la secuencia por la mitad es "Chain A, Major prion protein". 
Todos estos valores se ven también y más agraviados cuando menor sea la longitud de la cadeana, con un cuarto de la misma el e-value paso de ser un valor negativo a ser 85 el max valu de casi 300 puntos a 23 pero la identidad como en los casos anteriores es 100% y da como resultado "biotin--[acetyl-CoA-carboxylase] ligase [Halorubrum saccharovorum]". Algo también para resaltar que llama mucho la atención es que los primeros dos resultados eran proteinas que se encontraban en el humano y esta última es una bacteria, es decir que dependiendo de la longitud de la cadena no solo altera los valores de evalu y maxscore sino de que estamos buscando y en que organismo aparece.

**RETO IX: Utilizando ​BLAST utilice búsquedas de similitud secuencial para identificar a la siguiente proteína:MIDKSAFVHPTAIVEEGASIGANAHIGPFCIVGPHVEIGEGTVLKSHVVVNGHTKIGRDNEIYQFASIGEVNQDLKYAGEPTRVEIGDRNRIRESVTIHRGTVQGGGLTKVGSDNLLMINAHIAHDCTVGNRCILANNATLAGHVSVDDFAIIGGMTAVHQFCIIGAHVMVGGCSGVAQDVPPYVIAQGNHATPFGVNIEGLKRRGFSREAITAIRNAYKLIYRSGKTLDEVKPEIAELAETYPEVKAFTDFFARSTRGLIR**

**PARA PENSAR: ¿Cuál es la función de la proteína? ¿ A qué grupo taxonómico pertenece? A un nivel de significancia estadística adecuado ¿cuántas secuencias similares se encuentran?**

Pertenece a la familia de [Escherichia coli K-12], es decir es una enzima. La función de esta proteina es la de catalizar reacciones químicas. 
Según NCBI taxonomy browser, esta enzima pertenece a la familia de los enterobacterias.

Según BLAST utilizando la base de datos PDB se encuentran unas 30 coincidencias de secuencias.
Ahora bien, si cambiamos la base de datos a "nr" nos encontramos con que las coincidencias son mayores a 100 y encuentra una mayor coincidencia con la familia de Protoebacterias.


**RETO X: Realizá una nueva corrida del BLASTp, utilizando la misma secuencia, pero ahora contra la base de datos PDB. ¿Se obtienen los mismo resultados? ¿Qué tipo de resultados (hits) se recuperan? ¿Cuándo nos podría ser útil este modo de corrida?**

Luego de realizar la comparación de la secuencia contra PDB da otro resultado, no podría ser que es totalmente diferente pero si que no es el mismo "UDP N-ACETYLGLUCOSAMINE O-ACYLTRANSFERASE" vs "UDP N-ACETYLGLUCOSAMINE O-ACYLTRANSFERASE" en la primera hay siete posibles organismo que poseen esta proteina mientras que en la segunda solo dos, pero esos dos son dos de los siete de la primer cadena. 
Viendo esto puedo asumir que en las bases de datos tienen cargados ambas cadenas pero con diferentes mutaciónes o datos de la mismas, ya que en ambas queries me dieron 100% de identidad, es decir que esa cadena era la misma que me estaba dando pero el resultado no es el mismo.
