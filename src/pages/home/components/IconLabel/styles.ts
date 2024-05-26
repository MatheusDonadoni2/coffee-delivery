
import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    gap:0.75rem;
    align-items: center;
`

export const Label = styled.p`
    color: ${({ theme }) => theme.colors.base["base-text"]};
    font-size: 1rem;
    line-height: 1.3;    
`

export interface ContainerIconProps {
    backgroundColor: string
}

export const ContainerIcon = styled.div<ContainerIconProps>`
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 99px;

    background-color: ${({ backgroundColor }) => backgroundColor};
    padding: 0.5rem;
`