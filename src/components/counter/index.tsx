import { Minus, Plus } from "phosphor-react"
import { Container, CounterButton, CounterLabel } from "./styles"
import { useTheme } from "styled-components"

type CounterProps = {
    value: string
}

export function Counter() {

    const { colors } = useTheme()

    return (
        <Container>
            <CounterButton><Minus size={14} color={colors.brand.purple} /></CounterButton>
            <CounterLabel>1</CounterLabel>
            <CounterButton><Plus size={14} color={colors.brand.purple} /></CounterButton>
        </Container>
    )
}