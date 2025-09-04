---
description: ¿Cuáles son las tres funciones de String en JS?
---

# Funciones de las cadenas

Las tres funciones principales de las cadenas de JavaScript son concatenar, cambiar el formato de la cadena, y extraer subcadenas:

<details>

<summary>Concatenar varias cadenas</summary>

Es decir, unir varias cadenas para crear una nueva. Además de con la función, vamos a ver varias maneras de hacerlo:

**Con la función concat():**

```
let tarea = 'limpiar';
let area = 'habitacion';

let tareaHoy = tarea.concat(area);


También sería posible:

let tareaHoy = 'Hoy me toca'.concat(' ', tarea, ' la/el ', area);
```

**Con el operador de suma:**

<pre><code>let capitulo1 = 'este es el texto de mi primer capítulo.';
let capitulo2 = 'este es el texto de mi segundo capítulo.';

<strong>let libro = capitulo1 + capitulo2;
</strong><strong>
</strong>
También sería posible:

<strong>let libro = 'Hasta ahora he escrito todo esto: ' + capitulo1 + ' ' + capitulo2;
</strong></code></pre>

**Con las comillas invertidas:**

```
let alimento = 'tortilla';
let diaSemana = 'jueves';

let comida = `Este ${diaSemana} me apetece mucho comer {alimento}.`;
```

</details>

<details>

<summary>Cambiar el formato de la cadena</summary>

Es decir, convertir una cadena a mayúsculas o a minúsculas:

```
let texto = 'este es Un texto';

let textoEnMayuscula = texto.toUpperCase(); --> output: ESTE ES UN TEXTO

let textoEnMinuscula = texto.toLowerCase(); --> output: este es un texto
```

</details>

<details>

<summary>Extraer subcadenas</summary>

Es decir, separar (rebanar, según el nombre en inglés de la función) una cadena en varias:

<figure><img src="https://www.javascripttutorial.net/wp-content/uploads/2022/02/JavaScript-String-slice-end-greater-than-length.svg" alt=""><figcaption></figcaption></figure>

```
let saludo = 'hello';

let rebanada = saludo.slice(2,5);
  --> introducimos el índice inicial y el índice final con que nos queremos quedar.
  --> rebanada = 'llo'
```



{% hint style="info" %}
Recuerda que el índice empieza en cero, es decir, el índice de 'h' equivale a 0, no a 1.
{% endhint %}

</details>

Sin embargo, existen algunas más que se usan muy asiduamente, vamos a verlas:

<details>

<summary>Obtener la longitud de una cadena</summary>

Esta función resulta muy adecuada, por ejemplo, cuando hemos requerido que una contraseña contenga un número mínimo de caracteres:

```
let contraseña = 'mi contraseña';

console.log(contraseña.length); --> output --> 13
```

</details>

<details>

<summary>Acceder a un carácter o a un índice</summary>

La función charAt() nos permite saber qué carácter se encuentra en determinado índice, mientras que la función indexOf() nos permite saber qué índice tiene determinado carácter.

<figure><img src="https://media.geeksforgeeks.org/wp-content/uploads/20230906124433/Screenshot-(354).png" alt=""><figcaption></figcaption></figure>

```
let cadena = 'geeksforgeeks';

console.log(cadena.indexOf('s')); --> output --> 4

console.log(cadena.charAt(5)); --> output --> f

También podemos acceder a la 'f' de la siguiente manera:
console.log(cadena[5]);
```

{% hint style="info" %}
Si el carácter que estamos buscando aparece varias veces en la cadena, JavaScript nos informará exclusivamente sobre el primero que aparezca.
{% endhint %}

</details>

<details>

<summary>Dividir una cadena</summary>

La función _split_ nos permite separar una cadena en función al separador que le indiquemos. Por ejemplo:

```
let cadena = 'perrosygatosypájarosypecesycosasymáscosas';
let cadenaSeparada = cadena.split('y');
    --> output --> ['perros', 'gatos', 'pájaros', 'peces', 'cosas', 'máscosas']
```

{% hint style="info" %}
Ten presente que la función no nos devolverá una cadena, sino una colección (object array) de cadenas.
{% endhint %}

</details>
