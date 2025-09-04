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


{% endtab %}

{% tab title="Cadena" %}
Equivale a una **cadena de caracteres**, y debemos posicionarla entrecomillada, bien sea con las <mark style="background-color:$info;">comillas simples</mark> ( 'hola' ) o con las <mark style="background-color:$info;">comillas dobles</mark> ( "hola" ). Además, tenemos una tercera opción (denominada como _funcionalidad extendida_) que consiste en posicionar una cadena entre <mark style="background-color:$info;">comillas invertidas</mark> para poder incrustar en ella alguna variable o expresión. Por ejemplo:

`let olor = 'vainilla' -->`` `_`comilla simple para almacenar una cadena en una variable.`_

``input --> console.log(`¿me compras una vela de ${olor}, porfi?`) -->``` `_`comilla invertida para que nos devuelva una frase dinámica, no rígidamente codificada.`_`   `&#x20;

`output -->¿me compras una vela de vainilla, porfi?` &#x20;
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





