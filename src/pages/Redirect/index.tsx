import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import Spinner from "../../components/Spinner"
import { useAuthentication } from "../../hooks/contexts"
import { Container } from "./style"

export default function Redirect() {
    const navigate = useNavigate()
    const { isAuthenticated } = useAuthentication()

    useEffect(()=> {
        navigate(isAuthenticated ? '/dashboard' : '/login')
    }, [isAuthenticated, navigate])


    return (
        <Container>
            <Spinner/>
        </Container>
    )
}