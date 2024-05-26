import styled from "styled-components";

export type ContainerProps = {
    backgroundColor?: string
}

export const Container = styled.button<ContainerProps>`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.5rem;
    gap: 0.25rem;
    background-color: red;
    border: none;
    border-radius: 6px;
    background-color: ${({ theme, backgroundColor }) => backgroundColor ? backgroundColor : theme.colors.brand["purple-light"]};
`

export const Label = styled.p`
    color: ${({ theme }) => theme.colors.brand["purple-dark"]};
    font-size: 0.875rem;
    line-height: 1.3;
`