function matematicas(numUno, numDos, numTres, numCuatro) {
  
    let num = (numUno + numDos) * (numTres + numCuatro);
    
    if (num > 50) {
      
      return "¡El número es mayor que 50!"
      
    } else {
      
      return "¡El número es menor que 50!"
      
    }
  }
  
  console.log(matematicas(4, 5, 6, 7));