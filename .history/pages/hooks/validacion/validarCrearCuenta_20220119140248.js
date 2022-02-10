export default function validarCrearCuenta(valores) {

  let errores = {};

  // Validar el nombre del usuario
  if(!valores.nombre) {
      errores.nombre = "El Nombre es Obligatorio";
  }

  // Validar el email del usuario
  if(!valores.email) {
      errores.email = "El Email es Obligatorio";
  } else if( !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(valores.email) ) {
      errores
  }
}