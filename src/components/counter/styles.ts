import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    min-width: 4.5rem;

    padding: 0.5rem;

    gap:0.25rem;

    background-color: ${({ theme }) => theme.colors.base["base-button"]};
    border-radius: 6px;
`

export const CounterButton = styled.button`
    width: 0.875rem;
    height: 0.875rem;
    border: none;
`

export const CounterLabel = styled.p`
    color: ${({ theme }) => theme.colors.base["base-title"]};
    font-size: 1rem;
    line-height: 1.3;
`