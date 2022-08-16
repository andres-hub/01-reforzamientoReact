import useForm from '../hooks/useForm';


export const Formularios = () => {
   const {formulario, onChange, emial, password} = useForm({
    emial: 'test@test.com',
    password: '123456'
})
  return (
    <>
        <h3>Formularios</h3>
        <input 
            type="text" 
            className="form-control"
            placeholder="Email"
            value={emial}
            onChange={( {target} )=>onChange( target.value, "emial")}
        />
          <input 
            type="text" 
            className="form-control mt-2 mb-2"
            placeholder="Password"
            value={password}
            onChange={( {target} )=>onChange( target.value, "password")}
        />
        <code>
            <pre>{JSON.stringify(formulario, null, 2)}</pre>
        </code>
    </>
    
  )
}
