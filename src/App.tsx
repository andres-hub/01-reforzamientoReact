import { TiposBasicos } from './typescript/TiposBasicos';
import { ObjetosLiterales } from './typescript/ObjetosLiterales';
import { Funciones } from './typescript/Funciones';
import { Contador } from './components/Contador';
import { ContadorConHook } from './components/ContadorConHook';
import { Login } from './components/Login';
import Usuarios from './components/Usuarios';
import { Formularios } from './components/Formularios';

const App = () => {
  return (
    <div className='mt-2'>App
      <h1>Introduccion a react</h1>
      <hr />
      <Formularios/>
      <hr/>
      <Usuarios/>
      <hr />
      <TiposBasicos/>
      <hr />
      <ObjetosLiterales/>
      <hr/>
      <Funciones/>
      <hr/>
      <Contador/>
      <hr/>
      <ContadorConHook/>
      <hr/>
      <Login/>
    </div>
  )
}

export default App;