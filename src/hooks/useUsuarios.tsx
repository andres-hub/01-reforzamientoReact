import { useEffect, useRef, useState } from "react"
import { reqResApi } from "../api/reqRes"
import { ReqResListado, Usuario } from "../interfaces/reqRes"


export const useUsuarios = () => {
    const [usuarios, setUsuarios] = useState<Usuario[]>([])
    const paginaRef = useRef(1)
    const totalPagesRef = useRef(1); 

    useEffect(() => {
        cargarUsuarios()
    }, [])

    const cargarUsuarios = async ()=>{
        const resp = await reqResApi.get<ReqResListado>('/users', {params:{page: paginaRef.current}})
        totalPagesRef.current = resp.data.total_pages;
        setUsuarios(resp.data.data);
    }

    const paginaSigiente = ()=>{
        if(totalPagesRef.current == paginaRef.current)
            return;
        paginaRef.current ++;
        cargarUsuarios()
    }

    const paginaAnterior = ()=>{
        if( paginaRef.current == 1)
            return;
        paginaRef.current --;
        cargarUsuarios()
    }

    return {
        usuarios,
        paginaSigiente,
        paginaAnterior
    }
    
}
