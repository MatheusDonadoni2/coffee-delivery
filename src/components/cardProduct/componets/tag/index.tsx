import { Container, Label } from "./styles"

interface TagProps {
    label: string

}

export function Tag({ label }: TagProps) {
    return (
        <Container>
            <Label>{label}</Label>
        </Container>
    )
}