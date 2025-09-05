---
description: ¿Qué es la palabra clave "this" en JS?
---

# 'this'

'this' es una <mark style="background-color:$info;">palabra clave camaleón</mark>, que dinamiza los objetos en función del contexto en que se encuentren, es decir, la equivalencia (el color) de 'this' dependerá de dónde está integrada, de dónde la estamos utilizando.&#x20;

Por ejemplo, pongamos que tenemos una función que firma digitalmente los libros con una dedicatoria de la autora:&#x20;

```
let dedicatoria = {
    nombre: '',
    firmar: function() {
        return 'Hola ' + this.nombre + ', espero que disfrutes mucho esta historia, la he escrito para ti.'
    }
};

let personaUno = {
    nombre: 'Fulanita',
    firmar: dedicatoria.firmar
};

let personaDos = {
    nombre: 'Menganita',
    firmar: dedicatoria.firmar
};

personaUno.firmar() --> output --> "Hola Fulanita, espero que disfrutes mucho esta historia, la he escrito para ti."

personaDos.firmar() --> output --> "Hola Menganita, espero que disfrutes mucho esta historia, la he escrito para ti."
```

Como podemos ver, 'this.nombre' tiene un valor distinto al integrarlo en personsaUno o en personaDos, porque se ha adaptado al contexto del código en que se encontraba en cada momento. De esta manera, hemos podido crear un código reutilizable que cambia su output acorde a nuestras necesidades tan solo con que especifiquemos el valor personalizado de 'nombre' al crear las variables de personaNumero.

Es interesante saber que podemos usar 'this' en circunstancias muy diferentes, lo cual dinamiza la utilidad que esta palabra clave nos proporciona.

<details>

<summary>'this' global</summary>

Si, en Google Chrome, entramos en cualquier página web, buscamos la función de 'inspeccionar' y metemos _console.log(this);_ en la consola el output será el objeto global de la página, es decir 'Window' (objeto que, si queremos, podremos abrir y desglosar).

</details>

<details>

<summary>'this' en un método de objeto</summary>

```javacsript
let user = {
    nombre: "Nombre",
    apellido: "Apellido",
    id: 4444,
    veamosThis: function() {
      return this;
    }
};

console.log(user.veamosThis());


El output será --> // [object Object] {...} 
```



Y, si expandimos las llaves del output tendremos:

```
// [object Object] 

{
  "nombre": "Nombre",
  "apellido": "Apellido",
  "id": 4444,
  "veamosThis": function () {\n    return this;\n  }
}
```

Así, si deseamos profundizar, podemos acceder a las propiedades que se encuentran dentro del objeto:

```
let user = {
    nombre: "Nombre",
    apellido: "Apellido",
    id: 4444,
    obtenerInformacion: function() {
      return this.nombre + ' ' + this.apellido + ' tiene un id de ' + this.id;
    }
};

console.log(user.obtenerInformacion());

El output será --> "Nombre Apellido tiene un id de 4444"
```



</details>

<details>

<summary>'this' en una función</summary>

```
function thisFuncion() {
    console.log(this);
}
```

De nuevo, el output de la función thisFuncion será el objeto global de la página ('Window'), que, de nuevo, podremos abrir y desglosar, si lo deseamos.

</details>

<details>

<summary>'this' en una función flecha</summary>

Es importante que sepamos que, por medio de una función flecha, no vamos a poder acceder al objeto. Como demostración, implementemos, en el ejemplo previo, una función flecha, y veamos el output que nos ofrece:

```
let user = {
    nombre: "Nombre",
    apellido: "Apellido",
    id: 4444,
    veamosThis: () => this.nombre + ' ' + this.apellido + ' tiene un id de ' + this.id
        
};


console.log(user.veamosThis());


El output será --> undefined undefined tiene un id de undefined
```

</details>

<details>

<summary>'this' en un detector de eventos</summary>

En este contexto, 'this' hará referencia al elemento DOM que causó el evento. Para probarlo, añadamos a nuestra página el botón _probemos 'this'_:

```
<button id="pruebaThis">probemos 'this'</button>
```

Vamos a la consola del modo 'inspeccionar' y creamos un detector de eventos cuando pulsemos el botón, del cual el output que deseamos es el valor de 'this':

```
document.getElementById('pruebaThis').addEventListener('click', function() {
  console.log(this);
})
```

El output que obtendremos con esto será, como ya hemos dicho, el elemento que originó la activación del evento, es decir, nuestro botón _probemos 'this':_

```
output --> <button id="pruebaThis">probemos 'this'</button>
```

</details>

{% hint style="info" %}
**Método de aplicación** y **método de llamada**:

Contamos con otras dos herramientas para personalizar el comportamiento de 'this'. Volvamos a nuestra firma digital de libros, y probemos <mark style="background-color:$info;">el método de llamada</mark>:&#x20;

```

let dedicatoria = {
    nombre: '',
    firmar: function() {
        return 'Hola ' + this.nombre + ', espero que disfrutes mucho esta historia, la he escrito para ti.'
    }
};

let personaUno = {
    nombre: 'Fulanita',

};

console.log(dedicatoria.firmar.call(personaUno));
```



Esto nos daría el comportamiento de nuestro primer ejemplo, es decir:

```
output --> "Hola Fulanita, espero que disfrutes mucho esta historia, la he escrito para ti."
```



O incluso podemos usarlo para pasarle argumentos:

```
let dedicatoria = {
    nombre: '',
    firmar: function(ciudad, pais) {
        return 'Firmar a: ' + this.nombre + ", " + ciudad + ", " + pais
    }
};

let personaUno = {
    nombre: 'Fulanita',
};

console.log(dedicatoria.firmar.call(personaUno, 'La Habana', 'Cuba'));

output --> "Firmar a: Fulanita, La Habana, Cuba"

```

Ahora probemos <mark style="background-color:$info;">el método de aplicación</mark>:

```

let dedicatoria = {
    nombre: '',
    firmar: function(ciudad, pais) {
        return 'Firmar a: ' + this.nombre + ", " + ciudad + ", " + pais
    }
};

let personaUno = {
    nombre: 'Fulanita',
};

console.log(dedicatoria.firmar.apply(personaUno, ['La Habana', 'Cuba']));

output --> "Firmar a: Fulanita, La Habana, Cuba"
```



La única diferencia entre ambos métodos radica en que con el método de llamada introducimos los parámetros como una lista, únicamente separándolos con comas, y, con el método de aplicación, los introducimos por medio de una matriz.
{% endhint %}

```
```
