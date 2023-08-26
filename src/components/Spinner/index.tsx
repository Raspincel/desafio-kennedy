import { SpinnerContainer } from "./style"

import spinnerImg from '../../assets/images/spinner.png'

export default function Spinner() {
    return (
        <SpinnerContainer>
            <img src={spinnerImg}/>
        </SpinnerContainer>
    )
}