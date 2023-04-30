import {faCircleCheck,faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { GroupInput, IconValidetion, Input, Label, LeyendError,ContenedorTerminos,ContentComponents } from '../elements-css/Formulario';
//import { validacionRFC } from './validacionRcf';

const ComponentsInput = ({title,estado, setEstado,tipo,label,placeholder,name,leyendaError,expresion,funcion})=>{
    const onChange = (e)=>{
        setEstado({campo:e.target.value});

      }

      const validationExpression = ()=>{
        if (expresion.test(estado.campo)) {
            setEstado({...estado,valido:"true"})
        //    if(validacionRFC){
        //     validacionRFC(estado)
        //    }
           if (funcion) {
            funcion(estado);
           }
           
        }else{
            setEstado({...estado,valido:"false"})
            console.log("No valido");
        }
      }

    return (
        <ContentComponents>
            <Label valido={estado.valido} htmlFor={name} >{label}</Label>
            <GroupInput>
                <Input 
                    title={title}
                    type={tipo}
                    placeholder={placeholder}
                    id={name}
                    value={estado.campo}
                    onChange={onChange}
                    onKeyUp={validationExpression}
                    onBlur={validationExpression}
                />
                <IconValidetion
                    icon={estado.valido === "true" ?faCircleCheck :faCircleXmark}
                    valido={estado.valido}
                />

            </GroupInput>
            <LeyendError valido={estado.valido} >{leyendaError}</LeyendError>
        </ContentComponents>
    )
}
const ComponentInputCheck = ({type,estado,setEstado,name})=>{
    const onChangeTerminos =(e)=>{
        setEstado(e.target.checked)
      }
    return(
        <>
            <ContenedorTerminos>
                <Label htmlFor={name} >
                    <input 
                        type={type}
                        name={name}
                        id={name} 
                        checked={estado}
                        onChange={onChangeTerminos}
                    />
                    Acepto los Terminos y Condiciones
                </Label>
            </ContenedorTerminos>
        </>
    )
}
export {ComponentsInput, ComponentInputCheck}