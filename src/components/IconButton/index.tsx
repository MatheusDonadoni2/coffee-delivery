import { ElementType, ReactNode } from "react";
import { Container, ContainerProps as ContainerPropsSTL, Label as LabelSTL } from "./styles";

interface RootProps extends ContainerPropsSTL {
    children: ReactNode
}

function Root({ children, ...rest }: RootProps) {
    return (
        <Container {...rest}>{children}</Container>
    )
}

interface TextProps {
    text: string
}

function Label({ text }: TextProps) {
    return (
        <LabelSTL>{text}</LabelSTL>
    )
}

interface IconsProps {
    icon: ElementType
}

function Icon({ icon: IconP }: IconsProps) {
    return (
        <IconP />
    )
}

export const IconButton = {
    root: Root,
    label: Label,
    icon: Icon
}