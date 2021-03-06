import React, { useState, useEffect } from 'react';

const useValidacion = (stateInicial, validar, fn) => {

  const [valores, guardarValores] = useState(stateInicial);
  const [errores, guardarErrores] = useState({});
  const [submitForm, guardarSubmitForm] = useState(false);

  useEffect(() => {
      if(submitForm) {
          const noErrores = Object.keys(errores).length === 0;

          if(noErrores) {
              fn(); // fn = Funcion que se ejecuta en el componente
          }
          guardarSubmitForm(false);
      }
  }, []);

  // Funcion que se ejecuta conforme el usuario escribe algo
  

  return (  );
}

export default useValidacion;



















// NOTES 
// const [state, setState] = useState([]);
//