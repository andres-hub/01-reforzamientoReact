interface Persona{
    nombreCompleto: string;
    edad: number;
    direccion:Dirreccion;
}

interface Dirreccion {
    pais:string;
    casa: number;
    codigo: string;
}

export const ObjetosLiterales = () => {

    const persona:Persona = {
        nombreCompleto: 'Andres',
        edad: 34,
        direccion:{
            pais:'Colombia',
            casa: 4589,
            codigo: '<tml></tml>'            
        }
    }

  return (
    <>
        <h3>Objetos Litelares</h3>
        <pre>{JSON.stringify(persona, null, 2)}</pre>
    </>
  )
}
