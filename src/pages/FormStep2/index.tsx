import { ChangeEvent, useEffect } from 'react'
import { Link, useHistory } from "react-router-dom";
import { Container } from "./styles";
import { useForm, FormActions } from '../../contexts/FormContext'
import { Theme } from "../../components/Theme"
import { SelectOption } from "../../components/SelectOption"


export function FormStep2() {

    const history = useHistory()
    const { state, dispatch } = useForm()

    useEffect(() => {
        if(state.name === '') {
            history.push('/')
        } else {
            dispatch({
                type: FormActions.setCurrentStep,
                payload: 2
            })
        }
    }, [])

    function handleNextStep() {
        if(state.name !== '') {
            history.push('./step3')
        } else {
            alert('Preencha os dados')
        }
    }

    function setLevel(level: number) {
        dispatch({ 
            type: FormActions.setLevel,
            payload: level
        })
    }
    return(
        <Theme>
            <Container>
                <p>Passo 2/3</p>
                <h1>{state.name}, o que melhor descreve você?</h1>
                <p>Escolha a opção que melhor condiz com seu estado atual</p>

                <hr />

                <SelectOption 
                    title="sou iniciante"
                    description="Comecei a programar há menos de 2 anos"
                    icon="☺️"
                    selected={state.level === 0}
                    onClick={() => setLevel(0)}
                />
                <SelectOption
                    title="sou expert"
                    description="Comecei a programar há mais de 2 anos"
                    icon="🕶"
                    selected={state.level === 1}
                    onClick={() => setLevel(1)}
                />

                <Link to='/' className="backButton">Voltar</Link>

                <button onClick={handleNextStep}>Próximo</button>
            </Container>
        </Theme>
    )
}