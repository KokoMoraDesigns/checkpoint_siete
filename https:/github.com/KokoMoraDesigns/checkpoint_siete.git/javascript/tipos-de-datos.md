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
{% endtab %}

{% tab title="Cadena" %}

{% endtab %}

{% tab title="Booleano" %}

{% endtab %}

{% tab title="Nulo" %}

{% endtab %}
{% endtabs %}

