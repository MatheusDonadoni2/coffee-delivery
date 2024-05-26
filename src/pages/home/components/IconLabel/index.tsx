import { ElementType, ReactNode } from "react"
import { Container, Label as LabelSTL, ContainerIcon, ContainerIconProps } from "./styles"

interface RootProps { children: ReactNode }


function Root({ children }: RootProps) {
    return <Container>{children}</Container>
}

interface IconProps extends ContainerIconProps {
    icon: ElementType
}
function Icon({ icon: Icon, ...props }: IconProps) {
    return (
        <ContainerIcon {...props}>
            <Icon />
        </ContainerIcon>
    )
}

interface LabelProps {
    text: string
}
function Label({ text }: LabelProps) {
    return <LabelSTL>{text}</LabelSTL>
}

export const IconLabel = {
    root: Root,
    icon: Icon,
    label: Label
}