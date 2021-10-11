import { ChangeEvent, useEffect } from 'react'
import { Link, useHistory } from "react-router-dom";
import { Container } from "./styles";
import { useForm, FormActions } from '../../contexts/FormContext'
import { Theme } from "../../components/Theme"



export function FormStep3() {

    const history = useHistory()
    const { state, dispatch } = useForm()

    useEffect(() => {
        if (state.name === '') {
            history.push('/')
        } else {
            dispatch({
                type: FormActions.setCurrentStep,
                payload: 3
            })
        }
    }, [])

    function handleSubmit() {
        if(state.email !== '' && state.github !== '') {
            console.log(state);
        } else {
            alert('Preencha os dados')
        }
    }

    function handleEmailChange(e: ChangeEvent<HTMLInputElement>) {
        dispatch({ 
            type: FormActions.setEmail,
            payload: e.target.value
        })
    }

    function handleGithubChange(e: ChangeEvent<HTMLInputElement>) {
        dispatch({
            type: FormActions.setGithub,
            payload: e.target.value
        })
    }

    return(
        <Theme>
            <Container>
                <p>Passo 3/3</p>
                <h1>Legal {state.name}, e onde te achamos?</h1>
                <p>Preencha com seus dados para entrarmos em contato</p>

                <hr />

                <label>
                    Qual seu e-mail?
                    <input
                    type="text"
                    value={state.email}
                    onChange={handleEmailChange}
                    />
                </label>

                <label>
                    Qual seu Github?
                    <input
                        type="text"
                        value={state.github}
                        onChange={handleGithubChange}
                    />
                </label>

                <Link to='/step2' className="backButton">Voltar</Link>
                
                <button onClick={handleSubmit}>Finalizar Cadastro</button>
            </Container>
        </Theme>
    )
}