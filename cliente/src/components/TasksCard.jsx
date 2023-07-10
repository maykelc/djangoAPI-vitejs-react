import { useNavigate} from 'react-router-dom'

export function TasksCard({verUser}) {

    const navigate = useNavigate()

    return (
        <div style={{background: "black"}} 
        onClick={()=>{
            navigate(`/tasks/${verUser.id}`)
        }}>
                <h1>{verUser.usuario}</h1>
                <h1>{verUser.clave}</h1>
                <hr />
            </div>       
    )
}