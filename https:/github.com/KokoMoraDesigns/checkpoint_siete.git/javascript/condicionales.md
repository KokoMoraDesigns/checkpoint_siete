---
description: ¿Qué es un condicional?
---

# Condicionales

<details>

<summary>Sintaxis básica</summary>

```
if condición {

    bloque de código a ejecutar
    
} else {

    bloque de código alternativo a ejecutar
}
```

</details>

Los condicionales son la manera en que nuestro código puede **tomar decisiones dependiendo del contexto en que se encuentre**. Por ejemplo, pongamos que tenemos instalada una aplicación que nos ayuda a ahorrar dinero para un plan o proyecto concreto.&#x20;

Esa aplicación vive _tres contextos diferentes_: o tenemos menos del 50% ahorrado, o tenemos ahorrado más de la mitad del dinero, o ya hemos conseguido el objetivo final. Dependiendo del contexto en que se encuentre, cada mañana nos mandará uno de los tres mensajes siguientes:

1. 'buenos días {nombre}, ahora mismo nos queda trabajo por hacer (tenemos un {porcentaje}%), ¡mucho ánimo para reunir ese dinero!'
2. 'buenos días {nombre}, ¡muy bien! Ya hemos cumplido un {porcentaje}% de nuestro objetivo, sigue así, ya estamos casi, casi en la meta.'
3. 'buenos días {nombre}, ¡¡enhorabuena!! Ya no necesitas mi ayuda para {nombre\_del\_proyecto}, disfrútalo mucho :smile:.'

¿Y cómo se verían esos mensajes desde la perspectiva de quien los ha programado?

Para ello utilizaríamos la declaración _<mark style="background-color:$primary;">if-else if-else:</mark>_

```
nombre = 'fulanita'
porcentaje = 59 --> (este valor no sería una codificación rígida, pero para este ejemplo fijémonos en la condicional)
nombre_del_proyecto = 'abrir mi librería'

function buenosDias() {
    if porcentaje < 50 {
        return `buenos días ${nombre}, ahora mismo nos queda trabajo por hacer (tenemos un ${porcentaje}%), ¡mucho ánimo para reunir ese dinero!´
    } else if porcentaje >= 50 < 100 {
        return `buenos días ${nombre}, ¡muy bien! Ya hemos cumplido un ${porcentaje}% de nuestro objetivo, sigue así, ya estamos casi, casi en la meta.
    } else {
        return ,`buenos días ${nombre}, ¡¡enhorabuena!! Ya no necesitas mi ayuda para {nombre_del_proyecto}, disfrútalo mucho.´
    }
}
        
    
```

<details>

<summary>Operadores de comparación</summary>

En el ejemplo anterior hemos utilizado los operadores <  y ≥ , que significan, respectivamente, 'menor que' y 'mayor o igual que', pero también tenemos disponibles las siguientes opciones:



* if a === b   --> la condición se cumple si 'a' es exactamente igual que 'b'
* if a !== b     --> la condición se cumple si 'a' es diferente a 'b'
* if a > b  o  if a  <=  b   --> la condición se cumple si 'a' es mayor que 'b' / la condición se cumple si  si 'a' es menor o igual que 'b' (es decir, los operadores contrarios a los que usamos antes)
* if ('condición' _true_) --> también podemos usar los comparadores binarios _true_ y _false_

</details>

Desarrollemos el operador de comparación _true_, y así también podemos mirar la condicional binaria _<mark style="background-color:$primary;">if-else</mark>_ (si bien antes teníamos un número ilimitado de posibles contextos-decisiones, ahora solo tendremos dos).

Ahora hemos instalado una aplicación de streaming que intenta evitar que veamos 'otro capítulo más' a costa de dejar de lado nuestros proyectos personales. Por ende, revisa si tenemos algún proyecto programado en los próximos 15 días, y, si es así, nos advierte.&#x20;

¿Cómo se vería esto desde la perspectiva de quien programó la función?&#x20;



```
let proyectos = ['filosofía', 'matemáticas', 'literatura']

function alert() {

    if (proyectos) {
        return 'es mejor que veas ese capítulo mañana, y hoy le dediques más tiempo a tu proyecto.'
    } else {
        return 'oye, ¿y si hacemos maratón de cine?'
    }
}
```

Es decir, si proyectos _true_ (si existen proyectos) envía este mensaje, si proyectos _false_ (si no existen proyectos) envía este otro.

También podemos, en caso necesario, <mark style="background-color:$primary;">anidar</mark> <mark style="background-color:$primary;"></mark>_<mark style="background-color:$primary;">if-else</mark>._ Es decir, ahora la aplicación tendrá en cuenta cuántos días nos quedan para la fecha límite de nuestro proyecto, y tomará dos decisiones diferentes en función de ello:

```
let proyectos = ['filosofía', 'matemáticas', 'literatura']
let fecha_limite = 9

function alert() {

    if (proyectos) {
        if(fecha_limite 7 > 15) {
            return 'un capítulo no hará daño a nadie, pero recuerda que después es mejor que empieces con tu proyecto, ¿vale?'
            
        } else if (fecha_limite <= 7) {
            return 'es mejor que veas ese capítulo mañana, y hoy le dediques más tiempo a tu proyecto.'
        }
    }
}
```

<details>

<summary>Operadores lógicos</summary>

Las mejores prácticas de programación siempre piden un código optimizado y fácilmente legible, por ello, si abusamos de los condicionales anidados, podemos estar descuidando las buenas prácticas en nuestra codificación, dejando un código demasiado largo y complejo de interpretar. Para evitar estas situaciones, podemos contar con los operadores lógicos _and_ y _or:_



* <mark style="background-color:purple;">and ( && ) :</mark> tanto la condición que pongamos a la izquierda de este operador como la(s) que coloquemos a su derecha deben ser ciertas para que la expresión completa sea cierta.   <mark style="color:orange;">if (ojos === 'marrones' && pasion === 'poesía')</mark>&#x20;



* <mark style="background-color:purple;">or ( || ) :</mark> para que la expresión entera resulte ser cierta. debe ser cierta o la condición que coloquemos a la izquierda del operador , o la(s) que coloquemos a su derecha. <mark style="color:orange;">if (ojos === 'marrones' && (pasion === 'poesía' || pasion === 'música' ))</mark>&#x20;

</details>



Otra manera de simplificar nuestro código es mediante los <mark style="background-color:$primary;">operadores ternarios.</mark> Un operador ternario consiste en una forma rápida de aplicar un condicional _if-else_ sencillo con un bloque de código reducido.

Por ejemplo:

`let precio = (socia = true) ? "precio_con_descuento" : "precio_sin_descuento";`

Si tenemos una librería con una app o web que muestre el catálogo de libros disponibles, así como su precio, en una sola línea tenemos la condicional que afectará al precio en que la persona compre el libro.

<details>

<summary>Sintaxis básica</summary>

```
( condición ) ? código a ejecutar si la condición es true : código a ejecutar si la condición es false
```

</details>



Por último, vamos a mirar los <mark style="background-color:$primary;">condicionales</mark> <mark style="background-color:$primary;"></mark>_<mark style="background-color:$primary;">switch</mark>_, idóneos para mantener el orden cuando tenemos un conjunto complejo de operadores lógicos o cuando el código a ejecutar es bastante extenso. Primero, observemos la siguiente imagen:

<figure><img src="https://lh3.googleusercontent.com/-XUiZSpb-Kmp-oKMed--BpHCTIZzs-z4YvezXHI2Uyx94xTK43aZwNxhJz7mIXnu81qPqX-n3C1VA-PYVsGJGRwT0Q8mjRrP4i-GG5y9_sxUjLLnLeh8jtL3OjLxd60yAi1C7pV1Fl_Mx-m9b8WpCcHQ0XgyI9iF_7S23y5kTgkPCaffaPWu-iJaAIJjpb-4R38x98L8_5CsqSZZpmKlThdwZf9N2hRvomLGDf9E2DRbn5U3oOF1WC_-M3_R5C_mhiGHCMAWHkF2QKVOvq1XGAauo4VGeKPsXG7DeI-nZ1cUA3BRF3twW0_PCKujK1R3EvTbs2n06X9phVOmZKNrZoEoV8YxMZLrDF9pkbgsT9eyITunMMUo8XeIXFxYo37u3qYB0fxDTsQ1EZl2CTATxFarKfn7we9CLJOU48lF9HkOKRAjzL6-cQmklVdVwUnBHdz1g_3kAGD4uvKw51xs1l2ra3Wxs4UoET1nZPA5q1cNiU8S28fbC-FbFg7donjcY9vHDLeeWDoEflxht7Eegm0vuNa_dmvRD-HFkc3DsoEBFmZKsKOrnYJQqeC6EgJanzL_7GIFkYuqfE1ilK-fzJsYcyTpyelgegBsh_uYVC2zUG5yjc7x=w560-h391-no" alt=""><figcaption></figcaption></figure>

<details>

<summary>Sintaxis básica</summary>



```
switch (expresión / valor) {

  case opción1:
    código a ejecutar si expresión / valor coincide con opción1
    break;
    

  case opción2:
    código a ejecutar si expresión / valor coincide con opción2
    break;
    

  default:
    código a ejecutar si ninguna opción anterior resulta compatible con expresión / valor
}
```

</details>

Los condicionales _switch_ toman de entrada una expresión o valor, después recorren una serie de diferentes opciones hasta que encuentran una compatible con la expresión o valor, y, una vez la encuentran, ejecutan el código que le corresponde a esa opción y la orden _break_ terminará el recorrido.&#x20;

Por ejemplo:

```
let dia = 'jueves'
let estudios;

switch (dia){

    case 'lunes':
    estudios = 'filosofía';
    break;
    
    case 'martes':
    estudios = 'literatura';
    break;
    
    case 'miércoles':
    estudios = 'codificación';
    break;
    
    case 'jueves':
    estudios = 'codificación'
    break;
    
    case 'viernes':
    estudios = 'literatura';
    break;
    
    case 'sábado':
    estudios = 'cine';
    break;
    
    case 'domingo':
    estudios = 'música';
    break;
    
console.log('hoy me toca estudiar', calificacion);

```



En el ejemplo anterior no hace falta incluir 'default', porque una de las opciones anteriores siempre serán compatibles con la variable que estamos analizando.
