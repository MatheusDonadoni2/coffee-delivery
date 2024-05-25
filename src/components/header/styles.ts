import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    position: absolute;
    height: 6.5rem;
    width: 100%;
    padding: 2rem 10rem;

`

export const Logo = styled.img``

export const ContainerButtons = styled.div`
    display: flex;
    gap: 0.25rem;
    height: 2.375rem;    
`

export const LocationButton = styled.button`    
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.5rem;
    gap: 0.25rem;
    border: none;
    border-radius: 6px;
    background-color: ${({ theme }) => theme.colors.brand["purple-light"]};
`

export const CartButton = styled.button`    
    display: flex;
    align-items: center;
    justify-content: center;
    height: 2.375rem;
    width: 2.375rem;
    gap: 0.25rem;
    background-color: red;
    border: none;
    border-radius: 6px;
    background-color: ${({ theme }) => theme.colors.brand["yellow-light"]};
    
`