import React, { useCallback, useRef} from 'react';
import {Form} from '@unform/web'
import { Container, Content, Background, AnimationContainer } from './styles';
import LogoImg from '../../assets/logo.svg'
import Input from '../../components/Input/Input'
import Button from '../../components/Button/Button'
import {FiLogIn, FiMail} from 'react-icons/fi'
import {FormHandles} from '@unform/core'
import * as Yup from 'yup'
import getValidationErrors from '../../utils/getValidationErrors'
import {useToast} from '../../hooks/Toast'
import {Link, useHistory} from 'react-router-dom'

interface ForgotPasswordFormData{
    email: string;
}

const ForgotPassword: React.FC = () => {
    const formRef = useRef<FormHandles>(null)

    const {addToast} = useToast();
    //const history = useHistory()

    const handleSubmit = useCallback(async (data: ForgotPasswordFormData) => {
        try{
            formRef.current?.setErrors({})
            const schema = Yup.object().shape({
                email: Yup.string().required('E-mail obrigatório').email('Digite um e-mail válido'),
            })

            await schema.validate(data, {
                abortEarly: false,
            })


            //history.push('/dashboard')
        
        }catch(err){
            if(err instanceof Yup.ValidationError){
            const errors = getValidationErrors(err)

            formRef.current?.setErrors(errors)
            }
            
            addToast({
                type: 'info',
                title: 'Erro na recuperação de senha',
                description: 'Ocorreu um erro ao fazer a recupreação de senha, tente novamente'
            });
        }
    }, [addToast])
    
    return(
    <>
    <div>
        <Container>
            <Content>
                <AnimationContainer>
                    <img style={{paddingTop: 50}} src={LogoImg} alt="logo"></img>

                    <Form ref={formRef} onSubmit={handleSubmit}>
                        <h1>Recuperar senha</h1>
                        <Input name="email" icon={FiMail} placeholder="Email"></Input>
            
                        <Button type="submit">Recuperar</Button>

                        <Link to="/"><FiLogIn/>Voltar ao login</Link>
                    </Form>

                </AnimationContainer> 
            </Content>
            <Background></Background>
        </Container>
    </div>
    </>
  
)}

export default ForgotPassword
