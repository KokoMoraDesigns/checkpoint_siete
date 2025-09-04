---
description: ¿Cuáles son algunos tipos de datos JS?
---

# Tipos de datos

Una variable puede contener en su interior cualquier tipo de dato; además, puede contener primero un tipo x (un número, por ejemplo), y después otro tipo diferente. A esta cualidad que posee, entre otros lenguajes, JavaScript, se le denomina _lenguaje dinámicamente tipado_. Es decir:

```javascript
let message = 4;
message = 'te quiero';
```

### Tipos de datos

{% tabs %}
{% tab title="Número" %}
Equivale a **números enteros** y a **números flotantes.**

```
let numero = 45;
let num = 45.7;
```

Además, también existen algunos valores numéricos especiales como **Infinity**, **-Infinity** y **NaN**:

Infinity y su expresión en negativo equivalen al conocido infinito matemático '∞', es decir, los valores más grande (∞) y más pequeño (-∞) que existen. Podemos representarlos bien dividiendo un número entre cero ( input: _4/0 --> output: Infinity_ ) o llamándolo de manera directa ( _input: Infinity --> output: Infinity_ ).

NaN significa que hay un error matemático, por ejemplo, si en una variable tenemos almacenado un número ( 9 ), y en otra, sin darnos cuenta, una cadena ( '9' ), al intentar dividirlas va a salir un error, pues no podemos realizar operaciones matemáticas con cadenas, y, si la operación que devuelve NaN forma parte de una operación más grande, el resultado de 'la operación grande' será también, lógicamente, NaN, pues habrá arrastrado el error en cada paso.

Algunos **operadores** que podemos utilizar para trabajar con números son la suma (+), la resta (-), la multiplicación (\*), la división (/) y el sobrante o módulo (%).

{% hint style="info" %}
'Únicamente' se pueden representar con precisión mediante _números_ los que se encuentren entre el rango -(2<sup>53</sup>-1) y (2<sup>53</sup>-1); es decir, si introducimos 9007199254740991 (el equivalente a (2<sup>53</sup>-1) ) + 1, tendremos como resultado 9007199254740992, y si introducimos 9007199254740991 + 2, también tendremos como resultado 9007199254740992.&#x20;

Si estamos trabajando en un ámbito que precise la utilización de números mayores o menores que el indicado, deberemos trabajar con otro tipo de datos numérico: **BigInt**.&#x20;

¿Y cómo le explicamos al sistema que estamos trabajando con BigInt? Añadiendo una 'n' al final del número, por ejemplo:

9007199254740992548769458654096504945n.
{% endhint %}

### Otras formas en que podemos escribir los números

Si estamos tratando con números largos, como cinco millones, sería fácil equivocarnos con el número de ceros al escribir 5000000. No obstante, existen otras maneras en que podemos escribir este número en JavaScript:

```
let millones = 5_000_000; --> sería como escribir 5.000.000 a mano, solo que el caracter " _ ", si lo colocamos entre dígitos, JavaScript lo ignoraría
```

```
let millones = 5e6; --> es decir, el número al principio (5), y el número de ceros que le siguen
                       la operación que JavaScript realizaría sería la siguiente: 5 * 1000000 ( el número de ceros que le hayamos pedido )
```

Esto también funciona a la inversa, si queremos escribir un decimal muy pequeño, por ejemplo, 0.000001:

```
 let inversa = 1e-6;
```
{% endtab %}

{% tab title="Cadena" %}
Equivale a una **cadena de caracteres**, y debemos posicionarla entrecomillada, bien sea con las <mark style="background-color:$info;">comillas simples</mark> ( 'hola' ) o con las <mark style="background-color:$info;">comillas dobles</mark> ( "hola" ). Además, tenemos una tercera opción (denominada como _funcionalidad extendida_) que consiste en posicionar una cadena entre <mark style="background-color:$info;">comillas invertidas</mark> para poder incrustar en ella alguna variable o expresión. Por ejemplo:

```
let olor = 'vainilla' --> comilla simple para almacenar una cadena en una variable.


input --> console.log(`¿me compras una vela de ${olor}, porfi?`) --> comilla invertida para que nos devuelva una frase dinámica, no rígidamente codificada.

output --> ¿me compras una vela de vainilla, porfi?  

```

{% hint style="info" %}
Si quisiéramos, dentro de la cadena, incluir unas comillas, tendríamos que hacer uso del carácter de escape, para que el motor de JavaScript no las confundiera con las comillas operacionales. El caracter de escape es ' / ', y tenemos que colocarlo antes de la comilla que deseemos 'esconderle' al motor, por ejemplo:

```
console.log (" ...y me dijo /" pues no vienes a casa /", ¿te lo puedes creer?")

output --> ...y me dijo " pues no vienes a casa " , ¿te lo puedes creer?
```

Otra solución (más fácilmente legible) sería utilizar comillas dentro de la cadena que sean diferentes a las que estamos usando para abrir y cerrar la cadena, por ejemplo:

```
console.log (" ...y me dijo 'pues no vienes a casa', ¿te lo puedes creer?")
```
{% endhint %}
{% endtab %}

{% tab title="Booleano" %}
De aquí solamente pueden salir dos tipos de valores: _**true**_**&#x20;o&#x20;**_**false.**_ Por ejemplo:

&#x20;_`let socia = true;`_&#x20;

A partir de este binarismo true-false sobre la condición de socia de la persona usuaria, derivaría una serie de codificación que definiría los privilegios si _socia = true._&#x20;

Debido a su esencia, el booleano es un tipo de datos no solo útil, sino imprescindible, para los condicionales:

```
let nombre = 'Mónica'

if nombre !== 'Mónica' {
    return 'no eres la persona con la que quería hablar'
} 
```

Es decir, si 'nombre igual a Mónica' no es verdad, envía este mensaje.
{% endtab %}

{% tab title="Nulo" %}
El valor nulo representa un campo que está vacío o tiene un valor desconocido. Por ejemplo, si estamos llenando un formulario, pero decidimos dejar algunos campos, como la edad, sin responder, esos campos de nuestro formulario equivaldrían a _null_.

```
let edad = null;
```

Otro caso aparentemente similar (al no devolvernos ningún valor) sería el de _undefined_, salvo que este lo que nos estaría indicando es que hemos declarado una variable que no está asignada. Por ejemplo:

```
let edad;
console.log(edad) --> el output sería undefined
```
{% endtab %}
{% endtabs %}





