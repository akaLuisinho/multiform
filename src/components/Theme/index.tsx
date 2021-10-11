import { ReactNode } from 'react'
import { Container, Area, Steps, Sidebar, Page } from './styles'
import { Header } from '../Header'
import { SidebarItem } from '../SidebarItem'
import { useForm } from '../../contexts/FormContext'

type Props = { 
    children: ReactNode
}

export function Theme({ children }: Props) {

    const { state } = useForm()
    
    return(
        <Container>
            <Area>
                <Header/>

                <Steps>
                    <Sidebar>
                        <SidebarItem 
                            title="Pessoal"
                            description="Se identifique"
                            icon="profile"
                            path="/"    
                            active={state.currentStep === 1}
                        />
                        <SidebarItem 
                            title="Profissional"
                            description="Seu Nível"
                            icon="book"
                            path="/step2"
                            active={state.currentStep === 2}
                        />
                        <SidebarItem 
                            title="Contato"
                            description="Como te achar?"
                            icon="mail"
                            path="/step3"
                            active={state.currentStep === 3}
                        />
                        <SidebarItem
                            title="Finalizar"
                            description="Confira seus dados"
                            icon="mail"
                            path="/step4"
                            active={state.currentStep === 4}
                        />

                    </Sidebar>
                    <Page>
                        {children}
                    </Page>
                </Steps>
            </Area>
        </Container>
    )
}