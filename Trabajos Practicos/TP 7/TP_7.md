# TP 7

## Integrantes
* Cardozo, Carlos
* Luna Watkins, Ezequiel
* Marrero, Pablo

**1. ¿Cómo describís la estructura de esta proteína?**

Proteina 1LXA: Por la estructura terciaria se puede clasificar como una estructura de alfa/beta. Además tienen una característica fibrosa.
Proteina 1THJ: Por la estructura terciaria se puede clasificar como una estructura de alfa+beta. Además tienen una característica granulares.
Proteina 3OGB: Por la estructura terciaria se puede clasificar como una estructura de alfa. Además tienen una característica granulares.

**2. Proteínas con estructura cuaternaria**

Visualización en pymol.

**4. Un mar de conformaciones...**

La proteina 2CPE es una proteina desordenada. Tiene un nucleo concentrado pero con diferentes ramificaciones. Consta de 2 alfa helices, 4 beta plegadas y 7 loops. 

La mioglobina tiene un espacio HEM que la 2CPE no tiene. Además no tiene estructura beta-plegada sino que solo tiene alfa-helices y loops.
El HIS64 actua en la rotación y orientación
La HIS93 une la proteina con el HEM.


**RETO I: Estas estructuras difieren de las estructuras sobre las que venimos trabajando en su determinación. Como habrás notado estas fueron obtenidas mediante la técnica de MNR, pero ¿en qué consiste esta técnica?**

NMR de sus iniciales Nuclear Magnetic Resonance (o su traducción al español RMN resonancia magnética nuclear) sirve para ver a nivel molecular como interactuan y comportan las moléculas internas que componen un átomo.
Su funcionamiento se basa en "atacar" de radiación mediante radiofrecuencias las diferentes moléculas que componen un átomo de manera que éstos la absorban. Al absorberlo se produce un "desdoblamiento" de modo que pueden inducir transiciones entre ellas.
De esta manera, la intensidad de la radiofrecuencia, la forma y posición de las señales en el espectro de un núcleo determinado están intimamente relacionadas con su estructura molecular, por lo que un análisis detallado del espectro proporciona una valiosa información acerca de la estructura del compuesto que lo origina.
Tiene muhcas aplicaciones, en la búsqueda de la cura contra el cáncer. También puede ayudar a entender como funciona a nivel molecular la fotosíntesis. 
Otro uso totalmente distinto es en la creación de una nueva generación de baterias, para encontrar la mejor interacción entre moléculas que componen las baterias y ampliar el detalle molecular de como funcionan las moléculas.

**RETO II: Investigá en qué consisten las interacciones puentes de hidrógeno, π-π y π-catión y qué aminoácidos podrían intervenir en dichas interacciones**

Un puente de hidrógeno es una clase de enlace que se produce entre un átomo de hidrógeno y un átomo de oxigeno, flúor o nitrógeno con carga negativa. 

La interacción π-π o interacción aromática se refiere a interacciones no covalentes entre anillos aromáticos y contienen enlaces pi. Estas interacciones son importantes en el apilamiento de nucleobase dentro de moléculas de ADN y ARN, plegamiento de proteínas, síntesis dirigida por plantillas, ciencia de materiales y reconocimiento molecular.

La Interacción catión-π es una interacción molecular no covalente entre la cara de un sistema π (estos son enlaces químicos covalentes donde dos lóbulos de un orbital involucrado en el enlace solapan con dos lóbulos del otro orbital involucrado) rico en electrones y un catión adyacente (ion con carga positiva, por ej: Li+. NA+). 
Los amino ácidos cadenas laterales de fenilalanina , triptófano , tirosina , histidina , son capaces de unirse a especies catiónicas tales como cargadas cadenas de aminoácidos laterales

**5. Cálculo de la distancia promedio de un puente de hidrógeno**

Para le MET
	La medición entre el oxígeno y el hidrógeno es de 3.2 (rojo)
	La medición entre el hidrógeno y el nitrógeno es de 1.0 (azul)
Para ILE
	La medición entre el oxígeno y el hidrógeno es de 2.6
	La medición entre el hidrógeno y el nitrógeno es de 0.9
Para PHE
	La medición entre el oxígeno y el hidrógeno es de 2.6
	La medición entre el hidrógeno y el nitrógeno es de 1
	
Por promedio sabemos que entre el oxígeno y hidrógeno es de 2.9 y entre el nitrógeno y el hidrógeno varia entre 1.0 


**6. Identificación de interacciones π-π y π-catión**

Para la proteina 1A7E
	Realizando las mediciones encontramos que los anillos aromáticos que participan de interacciones π-π se encuentran en promedio a 6.7 de distancia entre uno y otro. Algunas mediciones nso dieron 5.2 mientras que otras 7.0 y 7.4

Para la proteina 1EJ1
	Realizando las mediciones encontramos que los anillos aromáticos que participan de interacciones π-π se encuentran en promedio a 3.1 de distancia entre uno y otro. Algunas mediciones nso dieron 2.7 mientras que otras 3.0.

**7. Sitio activo de la anhidrasa carbónica**

a.¿Cuántas subunidades tiene la estructura nativa?
	Tiene tres subunidades utilizando que se visualizan el comando split_chains.
b.¿Tiene heteroátomos esta molécula? ¿Cuáles?
	Encontramos algunos heteroatmos, por ejemplo el zinc
c.Identificá los residuos que unen el Zinc. Para ello utilizá los siguientes comandos:
	Se resuelve en PyMOL
d.¿Los residuos que unen el Zinc pertenecen a la misma subunidad?
	No, el Zinc es positivo mientras la cadena amino es negativa.
	
**8. Uso de superficies y slab mode en Pymol**

Visualización en PyMOL usando ctrl + ruedita para hacer zoom

**9. Estudio de la porina de ​N. gonorrhoeae**

Los ligandos de la proteina 4AUI son tres
	- El adenosín trifosfato (ATP)
	- El fosfato (PO4)
	- El magnesio (MG)

**10. Estudio de túneles**

La proteina 1THJ tiene 8 cavidades y enncontramos 11 túneles a lo largo de toda la secuencia de aminoácidos.
La proteina 1F90 tiene 6 cavidades y no encontramos túneles a lo largo de toda la secuencia de aminoácidos.


**11. Estudio de pockets en EGFR**

Notamos que los pockets de la proteina 1M14 (activo) ocupan mucho más espacio de la superficie mientras que los pockets de la proteina 3W32 (inactivo) se encuentran con mayor superficie por dentro de la proteina.
Los sitios activos presentan .... 

**12. Túneles y diseño de fármacos**

Analizando la proteina 3GPC post procesada con FPocket encontramos que el pocket 61 es un buen candidato para la unión con un fármaco. En dicho pocket intervienen los aminoácidos del 75 al 81 en la cadena.

**RETO III: Investigá en qué consiste el docking, en qué ideas basa su funcionamiento**

El docking (Acoplamiento molecular ) es usado para predecir la orientación del enlace de una molécula pequeña, que serán candidatos a fármacos, con la proteína que será donde ejercerán su acción, con lo que se podrá predecir la afinidad y la actividad de la molécula pequeña. 
Por esto que este método tiene un rol fundamental en el diseño racional de fármacos.

Primero se necesita la estructura de la proteína ya que sin ella no sabemos las cavidades que tendrá. Normalmente se utiliza la cristalografía de rayos X, o menos frecuente, una Espectroscopia de resonancia magnética nuclear. La estructura de esta proteína y la base de datos de ligandos potenciales sirven como los valores a ingresar en el programa que calcula el acoplamiento. El éxito del programa depende de dos factores: el algoritmo de búsqueda y la función de puntuación. 

Notamos que el inhibidor se aloja o acomoda en un tunel que cruza de lado a lado de la proteina. No coincide con el tunel que propusimos anteriormente, ya que el que encontramos nosotros era un poco más superficial. 
Lo que interpretamos nosotros es que dicho inhibidor va "rellenando" dichos espacios que se visualizan en la proteina, especialmente en este hueco de manera que impide el el accionar de ciertas proteinas en el crecimiento de las células cancerígenas. 
