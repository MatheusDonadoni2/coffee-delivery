import styled from "styled-components";

export const Container = styled.div`
    border-radius: 100px;
    padding: 0.25rem 0.5rem;
    background-color: ${({ theme }) => theme.colors.brand["yellow-light"]};
`

export const Label = styled.p`
    color: ${({ theme }) => theme.colors.brand["yellow-dark"]};
    font-size: 0.725rem;
    line-height: 1.3;
    font-weight: 600;

`