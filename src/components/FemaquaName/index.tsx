import { Acronym, FemaquaNameContainer, Fullname } from "./style";

export default function FemaquaName({ small = false }: { small?: boolean }) {

    return (
        <FemaquaNameContainer>
            <Acronym $small={small}>
                FEMAQUA
            </Acronym>

            <Fullname $small={small}>
                Ferramentas Maravilhosas que Adoro
            </Fullname>
        </FemaquaNameContainer>
    )
}