---
description: >-
  ¿Cuál es la diferencia entre una declaración de función y una expresión de
  función?
---

# Declaración de función VS expresión de función

<figure><img src="https://www.desarrollolibre.net/public/images/example/javascript/funciones-declarativa-funcion-expresion.png" alt=""><figcaption></figcaption></figure>

{% tabs %}
{% tab title="Declaración de función" %}
Se dice que estamos **declarando una función** cuando la definimos:

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



La diferencia entre ambas radica, por ende, en los siguientes aspectos:



* Una expresión de función puede ser anónima, es decir, no tenemos por qué darle un nombre
