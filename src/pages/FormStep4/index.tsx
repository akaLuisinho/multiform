import { useEffect } from 'react'
import { Link, useHistory } from "react-router-dom";
import { Container, ShowArea, UserData } from "./styles";
import { useForm, FormActions } from '../../contexts/FormContext'
import { Theme } from "../../components/Theme"
import { SelectOption } from '../../components/SelectOption';



export function FormStep4() {

    const history = useHistory()
    const { state, dispatch } = useForm()

    useEffect(() => {
        if (state.name === '' && state.email === '' && state.github === '') {
            history.push('/')
        } else {
            dispatch({
                type: FormActions.setCurrentStep,
                payload: 4
            })
        }
    }, [])

    function setLevel(level: number) {
        dispatch({
            type: FormActions.setLevel,
            payload: level
        })
    }
    
    return(
        <Theme>
            <Container>
                <p>Passo 4/4</p>
                <h1>Legal {state.name}, podemos confirmar sua inscrição?</h1>
                <p>Confira seus dados para garantir que tudo vai dar certo!</p>

                <hr />

                <ShowArea>
                    <UserData>
                        <label>Seu nome</label>
                        <p>{state.name}</p>
                    </UserData>
                
                    <UserData>
                        <label>Seu nível</label>
                        { state.level === 0 && 
                            <SelectOption
                                title="sou iniciante"
                                description="Comecei a programar há menos de 2 anos"
                                icon="☺️"
                                selected={state.level === 0}
                                onClick={() => setLevel(0)}
                            />
                        }
                        
                        {state.level === 1 && 
                            <SelectOption
                                title="sou expert"
                                description="Comecei a programar há mais de 2 anos"
                                icon="🕶"
                                selected={state.level === 1}
                                onClick={() => setLevel(1)}
                            />
                        }
                    </UserData>

                    <UserData>
                        <label>Seu Email</label>
                        <p>{state.email}</p>
                    </UserData>

                    <UserData>
                        <label>Seu Github</label>
                        <p>{state.github}</p>
                    </UserData>
                </ShowArea>
                    
                <Link to='/step3' className="backButton">Voltar</Link>
            </Container>
        </Theme>
    )
}