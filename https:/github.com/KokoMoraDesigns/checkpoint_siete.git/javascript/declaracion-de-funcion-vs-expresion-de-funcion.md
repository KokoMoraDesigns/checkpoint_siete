---
description: >-
  ¿Cuál es la diferencia entre una declaración de función y una expresión de
  función?
---

# Declaración de función VS expresión de función

<figure><img src="https://www.desarrollolibre.net/public/images/example/javascript/funciones-declarativa-funcion-expresion.png" alt=""><figcaption></figcaption></figure>

{% tabs %}
{% tab title="Declaración de función" %}
Se dice que estamos **declarando una función** cuando la definimos de esta manera:

```
function nombre() {
    código a ejecutar
}
```

De esta manera, los elementos de la declaración de función son los siguientes:

1. La palabra clave 'function'
2. El nombre que le queramos dar a la función
3. Paréntesis que contendrán, en caso de haberlos, los parámetros de la función, es decir, las variables con las que va a trabajar
4. La llave de inicio
5. El bloque de código que queremos ejecutar dentro de la función
6. La llave de cierre



Por ejemplo:



<figure><img src="https://www.aluracursos.com/blog/assets/funciones-en-java-script/IMG_2.png" alt=""><figcaption></figcaption></figure>
{% endtab %}

{% tab title="Expresión de función" %}
La **expresión de una función**, por otro lado, consiste en definirla asignándole la función a una variable:

```
let variable = funcion() { 
    bloque de código a ejecutar 
};
```

<figure><img src="https://miro.medium.com/v2/resize:fit:1122/1*03OsXPg7_aNWEQlG3kGE1g.png" alt=""><figcaption></figcaption></figure>
{% endtab %}
{% endtabs %}





{% hint style="info" %}
Para desarrollar las diferencias entre ambas maneras de definir las funciones, así como en qué contexto es más útil una u otra, primero es aconsejable explicar en qué orden JavaScript ejecuta el código.&#x20;

Debemos tener en cuenta que JavaScript **primero declara las funciones y las variables,** y **después les asigna sus valores**, ese es el orden en que opera su sistema (lo conocemos como hoisting), con lo que, si utilizamos variables declaradas con 'var', estas se inicializarán antes (sin sus valores, es decir, en modo _undefined)._





Pongamos una **declaración de función**:



```
alumnado(clase, media)

var clase = "4a"

var media = 9

function alumnado(clase, media) {
  return `la clase ${clase} tiene una media de ${media}`
}



```

Y ahora, una **expresión de función**:



```
notaMedia(media);

var media = 9

var notaMedia = function (media) {
  console.log(`tienen una media de ${media}`)
}



```

La interpretación gráfica del hoisting sería:



```
En su primer recorrido por el código, declara las funciones y las variables:


var clase;

var media;

function alumnado(clase, media) {
    return `la clase ${clase} tiene una media de ${media}`
}

var notaMedia;



En su segundo recorrido, les asigna los valores:

clase = '4a'

media = 9

notaMedia = function(media) {
    console.log(`tienen una media de ${media}`)
    

```



Como podemos ver, una misma línea de código _( var notaMedia = function (media) {  )_  se ejecuta en tiempos diferentes.



Es decir:



El **output de la declaración** será: "la clase undefined tiene una media de undefined".



El **output de la expresión** será: Uncaught TypeError: notaMedia is not a function.



En cambio, si utilizamos **variables declaradas con let o const**, no se van a inicializar al principio, con lo que, si llamamos a la función antes de que estén asignadas, el output será: Uncaught ReferenceError: Cannot access 'clase' before initialization.


{% endhint %}



Y esto nos lleva, por fin, a las **diferencias entre declaración y expresión de funciones**.

La primera: debido al hoisting, las <mark style="background-color:$info;">declaraciones de funciones se pueden ejecutar antes de ser definidas</mark>, mientras que <mark style="background-color:$info;">las expresiones no</mark>. Pongamos ahora un ejemplo sin asignaciones:

```
DECLARACIÓN DE FUNCIÓN:


saludo();


function saludo () {
  console.log('buenos días, mi amor')
}

output --> "buenos días, mi amor"


o


suma(5, 7)

function suma(num_uno, num_dos) {
  return num_uno + num_dos;
}

output --> 12



EXPRESIÓN DE FUNCIÓN:


saludo();


var saludo = function () {
  console.log('buenos días, mi amor')
}

output --> Uncaught TypeError: saludo is not a function 


```



La segunda: si usamos una declaración de función es obligatorio <mark style="background-color:$info;">darle un nombre</mark> a la función ( _function saludo()_ ), mientras que, con una expresión de función, el nombre es un aspecto opcional, así que podemos usar una función anónima, es decir, una función sin nombre ( _var saludo = function ()_ ).



La tercera: justo debido a la posibilidad de crear funciones anónimas, es <mark style="background-color:$info;">más difícil corregir los errores</mark> que deriven de una expresión de función (anónima) que los de una declaración de función. Esto se debe a que, si tenemos la posibilidad de poder ver los errores y su origen en la cola de ejecución, gastaremos mucho menos tiempo intentando acotar de dónde vienen y qué los ha creado, con lo que tendremos un flujo de trabajo más eficiente.



Por todo ello, algunos casos en que sería conveniente hacer uso de una declaración de función es cuando deseas ejecutarla antes de ser definidas o cuando tienes intención de reciclarla a lo largo del programa, y algunos casos en que sería conveniente hacer uso de una expresión de función es, por ejemplo, cuando deseas pasarle esa función a otra función como un argumento.
