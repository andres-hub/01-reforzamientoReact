
export const TiposBasicos = () => {

    const nombre: string | number = 'Andres';
    const edad: number = 34;
    const estaActivo: boolean = true;
    const poderes: string[] = ['Velocidad','volar','Respirar bajo el agua'];

  return (
    <>
        <h3>
            Tipos basicos
        </h3>
        {nombre}, {edad}, {(estaActivo)? 'Activo':'Inactivo'}
        <br />
        {poderes.join(', ')}
    </>
  )
}
