import styled from "styled-components";

export const Container = styled.div`
    background-color: ${({ theme }) => theme.colors.base.background};
`

export const Title = styled.h1`
    color: ${({ theme }) => theme.colors.base["base-title"]};
    font-size: 12px;
`