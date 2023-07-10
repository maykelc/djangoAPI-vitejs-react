import { useEffect } from "react";
import { set, useForm } from "react-hook-form";
import {createLogin, deleteUser,updateUser, getUser} from '../api/Tasks.api'
import { useNavigate, useParams } from "react-router-dom";
export function TasksFormPage(){

    const { register, 
            handleSubmit, 
            formState:{errors}
    ,setValue
    } = useForm();
    
    const navigate = useNavigate();

    const params = useParams();
    console.log(params)
    
    const onSubmit = handleSubmit(async (data) =>{
        if(params.id){
            console.log('actualizando')
            await updateUser(params.id, data)
        }else{
            await createLogin(data);
        }
         
        navigate("/tasks");
    });

    useEffect(()=> {
        async function loadUser(){
            if(params.id){
                console.log('obteniendo datos')
               const res = await getUser(params.id)
                console.log(res);
                setValue('usuario', res.data.usuario)
                setValue('clave', res.data.clave)
            }
    }
    loadUser();
    },[])


    return(
        <div>
            <form onSubmit={onSubmit}>
                <input type="text" placeholder="Usuario" {...register("usuario", {required: true })}/>

                {errors.usuario && <span>este es un campo requerido</span> }
                
                <input type="password" placeholder="Contraseña" {...register("clave", {required: true })}/>
                {errors.clave && <span>este es un campo requerido</span> }
                
                <button>Guardar</button>
            </form>
        
            {params.id && <button onClick={async ()=>{
                const accepted= window.confirm('are you sure')
                if(accepted){
                    await deleteUser(params.id)
                    navigate("/tasks");
                }
            }}>delete</button>}
        </div>
    )
}