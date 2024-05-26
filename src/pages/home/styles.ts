import styled from "styled-components";

export const Container = styled.div``

export const Title = styled.h1`
    color: ${({ theme }) => theme.colors.base["base-title"]};
    font-size: 12px;
`

export const Intro = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding: 5.875rem 0  6.75rem 0;
`

export const IntroContent = styled.div`
    width: 36.75rem;
`

export const IntroContentTitles = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 4.125rem;
`

export const IntroContentIconsTags = styled.div`
    display: grid;
    grid-template-columns: 14.4375rem 18.375rem;
    gap: 1.25rem;
`

export const IntroTitle = styled.h1`
    color: ${({ theme }) => theme.colors.base["base-title"]};
    font-family: 'Baloo 2';
    font-size: 3rem;
    line-height: 1.3;
    font-weight:800; 
    margin-bottom:1rem;
`
export const IntroSubTitle = styled.p`
    color: ${({ theme }) => theme.colors.base["base-subtitle"]};
    font-size: 1.25rem;
    line-height: 1.3;
    
`

export const Image = styled.img``

export const Content = styled.div`
    padding-top: 2rem;
`

export const ContentProducts = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr); /* Quatro colunas igualmente espaçadas */
    gap: 2.5rem 0;
    padding-bottom: 9.875rem;
`

export const TitleProducts = styled.h1`
    color: ${({ theme }) => theme.colors.base["base-subtitle"]};
    font-size: 2rem;
    line-height: 1.3;    
    font-family: 'Baloo 2';
    font-weight: 900;

    margin-bottom: 3.375rem;
    

`