---
description: ¿Qué es un condicional?
---

# Condicionales

Los condicionales son la manera en que nuestro código puede tomar decisiones dependiendo del contexto en que se encuentre. Por ejemplo, pongamos que tenemos instalada una aplicación que nos ayuda a ahorrar dinero para un plan o proyecto concreto. Esa aplicación vive **tres contextos diferentes**: o tenemos menos del 50% ahorrado, o tenemos ahorrado más de la mitad del dinero, o ya hemos conseguido el objetivo final. Dependiendo del contexto en que se encuentre, cada mañana nos mandará uno de los tres mensajes siguientes:

1. 'buenos días {nombre}, ahora mismo nos queda trabajo por hacer (tenemos un {porcentaje}%), ¡mucho ánimo para reunir ese dinero!'
2. 'buenos días {nombre}, ¡muy bien! Ya hemos cumplido un {porcentaje}% de nuestro objetivo, sigue así, ya estamos casi, casi en la meta.'
3. 'buenos días {nombre}, ¡¡enhorabuena!! Ya no necesitas mi ayuda para {nombre\_del\_proyecto}, disfrútalo mucho :smile:.'

¿Y cómo se verían esos mensajes desde la perspectiva de quien los ha programado?

Para ello utilizaríamos la declaración _if-else if-else:_

```
nombre = 'fulanita'
porcentaje = 59 --> (este valor no sería una codificación rígida, pero para este ejemplo fijémonos en la condicional)
nombre_del_proyecto = 'abrir mi librería'

function buenosDias() {
    if porcentaje < 50:
        return 'buenos días {nombre}, ahora mismo nos queda trabajo por hacer (tenemos un {porcentaje}%), ¡mucho ánimo para reunir ese dinero!'
    else if porcentaje >= 50 < 100:
        return 'buenos días {nombre}, ¡muy bien! Ya hemos cumplido un {porcentaje}% de nuestro objetivo, sigue así, ya estamos casi, casi en la meta.'
    else:
        return 'buenos días {nombre}, ¡¡enhorabuena!! Ya no necesitas mi ayuda para {nombre_del_proyecto}, disfrútalo mucho.'
        
    
```

{% tabs %}
{% tab title="First Tab" %}

{% endtab %}

{% tab title="Second Tab" %}

{% endtab %}
{% endtabs %}
