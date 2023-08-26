import FemaquaName from '../../components/FemaquaName'
import TextInput from '../../components/TextInput'
import { BackgroundImage, LoginArea, LoginContainer, LoginForm, LoginWrapper } from './style'
import { useForm } from 'react-hook-form'
import { LoginSchema } from '../../schemas/login'
import { yupResolver } from '@hookform/resolvers/yup'
import { iLoginData, UseForm } from '../../utils/interfaces'
import { useAuthentication } from '../../hooks/contexts'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import ButtonPrimaryNeutral from '../../components/ButtonPrimaryNeutral'
import Spinner from '../../components/Spinner'

export default function Login() {
    const navigate = useNavigate()
    
    const { login, isAuthenticated, isSigningIn } = useAuthentication()
    const [isLoading, setIsLoading] = useState(false)
    const { register, trigger, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(LoginSchema)
    });

    const onLogin = async ({ email, password }: iLoginData)=> {
        await trigger()
        setIsLoading(true)
        login({ email, password })
    }

    useEffect(()=> {
        if (isAuthenticated) navigate('/dashboard')

    }, [navigate, isAuthenticated])

    useEffect(()=> {
        if (!isAuthenticated && !isSigningIn)
            setIsLoading(false)
    }, [isSigningIn, isAuthenticated])

    if (isLoading) return (
        <LoginContainer>
            <LoginArea>
                <Spinner/>
            </LoginArea>

            <BackgroundImage/>
        </LoginContainer>
    )

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