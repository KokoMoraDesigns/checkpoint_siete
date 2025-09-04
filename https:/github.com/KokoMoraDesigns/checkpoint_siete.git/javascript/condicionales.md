---
description: ¿Qué es un condicional?
---

# Condicionales

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
        return 'buenos días {nombre}, ahora mismo nos queda trabajo por hacer (tenemos un {porcentaje}%), ¡mucho ánimo para reunir ese dinero!'
    } else if porcentaje >= 50 < 100 {
        return 'buenos días {nombre}, ¡muy bien! Ya hemos cumplido un {porcentaje}% de nuestro objetivo, sigue así, ya estamos casi, casi en la meta.'
    } else {
        return 'buenos días {nombre}, ¡¡enhorabuena!! Ya no necesitas mi ayuda para {nombre_del_proyecto}, disfrútalo mucho.'
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

También podemos, en caso necesario, anidar _if-else._ Es decir, ahora la aplicación no se desencadena tendrá en cuenta cuántos días nos quedan para la fecha límite de nuestro proyecto, y tomará dos decisiones diferentes en función de ello:

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
