import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    max-width: 1120px;
    
    position: fixed;
    height: 6.5rem;
    
    padding: 2rem 0 2rem 0;

    background-color: ${({ theme }) => theme.colors.base.background};

`

export const Logo = styled.img``

export const ContainerButtons = styled.div`
    display: flex;
    gap: 0.75rem;
    height: 2.375rem;    
` 