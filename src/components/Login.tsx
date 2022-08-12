import { useEffect, useReducer } from "react"
import { type } from '@testing-library/user-event/dist/type';

interface AuthState{
    validando: boolean,
    token: string | null,
    userName: string,
    nombre: string
}

const initialState: AuthState = {
    validando: true,
    token: null,
    userName:'',
    nombre:''
}

type LoginPayload = {
    userName: string,
    nombre: string
}

type AuthAction = 
      | { type: 'logout' }
      | { type: 'login', payload:LoginPayload}

const authReducer = (state: AuthState, action: AuthAction):AuthState =>{
    switch (action.type) {
        case 'logout':
            return {
                validando: false,
                token: null,
                userName: '',
                nombre: ''
            }
        case 'login':
            const {nombre, userName} = action.payload;
            return{
                validando: false,
                token: 'dfgdf',
                nombre,
                userName
            }
        default:
            return state;
    }
}

export const Login = () => {
    const [{validando, token, userName}, dispatch] = useReducer(authReducer, initialState);
    useEffect(() => {
      setTimeout(()=>{
        dispatch({type: 'logout'})
      },1500)
    
      
    }, [])

    const login = ()=>{
        dispatch({type: 'login', 
        payload:{nombre: 'Andres', userName:'Andrescl'}
     })
    }

    const logout = ()=>{
        dispatch({type:'logout'})
    }

    if(validando){
        return (
            <>
                <h3>Login</h3>
                <div className="alert alert-info">
                    Validando...
                </div>
            </>
        )
    }
    
  return (
    <>
      
      <h3>Login</h3>
      {
        (token)
       ? <div className="alert alert-success">Autenticado como {userName}</div>
        :<div className="alert alert-danger">No autenticado</div> 
      }{
        (token)?(
            <button className="btn btn-danger" onClick={logout}>
                Logout
            </button>
        ):(
            <button className="btn btn-info" onClick={login}>
             Login
            </button>
        )
      }
 
    </>
  )
}