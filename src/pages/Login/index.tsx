import FemaquaName from '../../components/FemaquaName'
import TextInput from '../../components/TextInput'
import { BackgroundImage, LoginArea, LoginContainer, LoginForm, LoginWrapper } from './style'
import { useForm } from 'react-hook-form'
import { LoginSchema } from '../../schemas/login'
import { yupResolver } from '@hookform/resolvers/yup'
import { iLoginData, UseForm } from '../../utils/interfaces'
import { useAuthentication } from '../../hooks/contexts'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import ButtonPrimaryNeutral from '../../components/ButtonPrimaryNeutral'

export default function Login() {
    const { login, isAuthenticated } = useAuthentication()

    const { register, trigger, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(LoginSchema)
    });

    const onLogin = async ({ email, password }: iLoginData)=> {
        await trigger()
        login({ email, password })
    }

    const navigate = useNavigate()
    useEffect(()=> {
        if (isAuthenticated) navigate('/dashboard')
    }, [navigate, isAuthenticated])

    return (
        <LoginContainer>
            <LoginArea>
                <LoginWrapper>
                    <FemaquaName small/>
                    
                    <LoginForm onSubmit={handleSubmit(onLogin)}>
                        <TextInput 
                            register={register as UseForm}
                            id='email' 
                            label='E-mail' 
                            placeholder='Insira seu e-mail' 
                            type='email'
                            error={errors.email?.message}
                        />
                        <TextInput
                            register={register as UseForm}
                            id='password' 
                            label='Senha' 
                            placeholder='Insira sua senha' 
                            type='password'
                            error={errors.password?.message}
                        />
                        
                        <ButtonPrimaryNeutral type="submit">
                            Entrar
                        </ButtonPrimaryNeutral>
                    </LoginForm>
                </LoginWrapper>
            </LoginArea>

            <BackgroundImage/>
        </LoginContainer>
    )
}