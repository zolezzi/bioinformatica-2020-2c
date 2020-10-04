# TP 2

## Integrantes
* Cardozo, Carlos
* Luna Watkins, Ezequiel
* Marrero, Pablo

**¿Por qué una célula querría destruir sus propias proteínas?**

Para poder reutilizar los aminoácidos sintetizándolos una vez terminado el proceso por el cual la proteina en si fue creada.

**Que información nos provee esta página?**

Es una gran base de datos que centraliza toda la información relacionada a la estructura de las proteínas que han sido cristalizadas por diferentes grupos de trabajo. Es decir, es una base de datos abierta para que cada persona o grupo de trabajo suba sus ensayos relacionados al estudio de proteinas.

**¿Cómo se determinó la estructura de esta proteina?**

Se utilizó el método de difracción por rayos x de manera que cada electrón que rebota sobre la cristalización de la proteína permite ir construyendo el modelo estructural en el espacio.

**A la izquierda vemos un a representación de la estructura de ubiquitina. ¿Qué significan las cintas, las flechas y las regiones angostas?**

Es una representación de la estructura en 3D pero con una vista "plana" y general, ya que deja de lado detalles como cual es cada aminoácido de la cadena, que valores tiene sino que lo que muestra es un plegamiento de los aminoácidos de la proteina.

**¿Representa esa imagen a la realidad del sistema biológico?**

No, esta imagen no representa ya que al ser cristalizada para poder ser observada, pierde muchas propiedades que en la vida "real" tiene dado por el movimiento propio de cada proteina tomando diferentes formas.
Es decir, muestra la disposición de los aminoácidos en una "foto" de un momento dado.

**La estructura 1UBQ fue “refinada a una resolución de 1.8 Angstroms”. Éste es el error asociado al experimento: mientras mayor es la resolución, menor es la certeza al determinar la posición de cada átomo. ¿Cuál es la utilidad y los condicionamientos de usar un modelo científico que sabemos inexacto?**

La resolución es una medida de la calidad de los datos que se han recopilado en el cristal que contiene la proteína o el ácido nucleico.
Como la estructura de la proteina no está alineada de manera idéntica, es decir, no forma un cristal perfecto debido a la flexibilidad o movimiento local no se puede obtener información muy fina o detallada.
Por lo tanto, la resolución es una medida del nivel de detalle presente en el patrón de difracción de rayos y el nivel de detalle que se verá cuando se calcule el mapa de densidad de electrones.

A pesar de esto y de que no es preciso al 100% por limitaciones técnicas se pueden calcular y dicho método aporta una representación del modelo proteico para poder analizar las uniones y los aminoácidos.

**En la pantalla principal vemos una representación de la estructura de ubiquitina. ¿Qué significan las cintas, las flechas y las regiones angostas?**

Es una representación de la estructura secundaria de como se comporta la cadena de aminoácidos donde cada uno de dichos aminoácidos tiene un valor de alpha hélice, beta plegada o loop distinto y es por eso que toma dicha forma. 
Se puede observar con detalle cada componente de la cadena puntualizando sobre alguno en particular para profundizar la información encontrada.

**¿Qué diferencias y similitudes notamos respecto de la representación inicial?**

En esta visión de la estructura se puede ver como es la proteina en función del espacio. Es decir, en este caso es una representación gráfica de la proteína y como se va "acomodando" cada aminoácido en particular con el siguiente en la cadena, en cambio en la inicial no podíamos observar en detalle. 
Además se puede observar las moléculas de oxígeno alrededor de cada aminoácido que no pudieron ser cristalizados.
Las similitudes son que ambas representan a la misma proteína, su representación no cambia.


**En el menú de la derecha hay opciones de distintos tipos de representación y formas de colorear la estructura tridimensional.¿Para qué podría ser útil visualizar lo mismo de distintas maneras?**

Para poder centrar el enfoque según lo que deseemos observar y analizar. Por ejemplo, puede colorearse para poder observar loa estructura secundaria, identificar el conjunto de aminoácidos separándolos por cada color, etc.

**¿Qué información esperaría encontrar como resultado un experimento destinado a determinar la estructura terciaria de una molécula biológica?**

Se espera encontrar la ubicación de cada aminoácido en el espacio, es decir, las coordenadas x, y, y z correspondientes a cada componente de la cadena de aminoácido.

**Podemos explorar el contenido del archivo que acabamos dedescargar si lo observamos con un editor de texto. Haciendo clic con el botón derecho del mouse sobre el archivo descargado, usemos la opción ​Abrir con y seleccionemos el​ Bloc de Notas u otro editor de texto. ¿En qué consiste un archivo PDB?**

El archivo PDB es un formato estandar para la distribución y análisis de una proteina. Es decir, dentro de dicho archivo podemos encontrar quienes fueron el grupo de estudio que se encargó de secuenciar la proteina, como está compuesta dicha cadena, el orden de los aminoácidos, etc.

**Desplacémonos por el archivo hasta encontrar las líneas que comienzan con la palabra ATOM. ¿Qué tipo de información brinda esta sección?**

Dicha sección nos provee información sobre el orden de los aminoácidos en la cadena proteica y a la vez nos muestra el detalle de como está compuesto cada aminoácido con las coordenadas para poder ubicar cada aminoácido en el espacio.

**¿Podríamos extraer de este archivo información sobre la estructura primaria de la proteína en cuestión? ¿Cómo se presenta dicha información y qué significa la representación? Desde el punto de vista computacional: ¿de qué tipo de dato se trata esta información?**

Si, podemos extraer la estructura primaria y dicha información se encuentra en las lineas representadas por la etiqueta SEQRES.
Si queremos aún más detalle sobre como está compuesto cada aminoácido podemos revisar las lineas con las etiquetas ATOM como se menciona en el punto anterior.
Para el punto de vista computacional esta información es de tipo cadena de caracteres.

**¿Considera que el formato PDB es útil para presentar los resultados del experimento?**

Si, es muy útil ya que es un formato estándar que permite exportar toda la información.

**Observamos que la información respeta cierta estructura interna. ¿Cuáles son los beneficios y las limitaciones de imponer una estructura para comunicar los resultados de un experimento?

Como beneficio es que si se respeta siempre la misma estructura es más fácil para compartir y a la vez diferentes programas pueden leer dicha información para representar la proteína.
Como limitación es que si surge eventualmente una cuestión que acarrea un cambio, es más difícil o costoso realizarlo ya que todos los que utilicen este formato deben aplicar los mismos cambios.

**Hemos visto que las proteínas tienen estructura tridimensional y hemos podido observar algunas características de las mismas. ¿Será igual con los ácidos nucléicos?**

Entendemos que los ácidos nucléicos también presentan una cadena en la cual cada elemento de la cadena es un nucleótido y de similar manera tendrá una ubicación en el espacio.

**Rosalind Franklin es una científica muy relevante, que tuvo menos reconocimiento del merecido. Contanos sobre los procedimientos que puso a punto Rosalind.**

El más significativo fue el trabajo en el cual mejoró el aparato para obtener imágenes con ADN logrando obtener la estructura de doble hélice del mismo.
Además logró la construcción de una máscara de gas más eficaz en plena Guerra Mundial.
Por otro lado lideró trabajos pioneros relacionados con el virus del mosaico del tabaco y el poliovirus.