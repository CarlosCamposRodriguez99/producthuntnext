export default function validarCrearCuenta(valores) {

  let errores = {};

  // Validar el nombre del usuario
  if(!valores.nombre) {
      errores.nombre = "El Nombre es Obligatorio"
  }

  if(!valores.email)
}