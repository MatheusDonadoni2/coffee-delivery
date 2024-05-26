import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 16rem;
    height:19.375rem;
    padding: 0 1.25rem 1.5rem 1.25rem;
    
    border-radius: 6px 36px 6px 36px;

    background-color: ${({ theme }) => theme.colors.base["base-card"]};
`

export const ProductImage = styled.img`
    margin-top: -1.25rem;
    margin-bottom: 0.75rem;
`

export const ContentTags = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.25rem ;
    margin-bottom: 1rem;
`

export const ContentInfoProduct = styled.div`
    flex: 1;    
`

export const ProductName = styled.p`
    color: ${({ theme }) => theme.colors.base["base-subtitle"]};
    text-align: center;
    font-family: 'Baloo 2';
    font-size: 1.25rem;
    line-height: 1.3;
    font-weight: 700;
`
export const ProductDescription = styled.p`
    color: ${({ theme }) => theme.colors.base["base-label"]};
    font-size: 0.875rem;
    line-height: 1.3;
    text-align: center;
`

export const ContentFooter = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 38px;
`

export const ContentFooterFooterPriceInfo = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap:0.3rem;
    font-weight: 400;

`

export const ContentFooterFooterCounteAndButton = styled.div`
    display: flex;
    gap:0.5rem;
`

export const SufixPrice = styled.p`
    color: ${({ theme }) => theme.colors.base["base-text"]};
    font-size: 0.875rem;
    line-height: 1.3;
`

export const Price = styled.p`
    color: ${({ theme }) => theme.colors.base["base-text"]};
    font-family: 'Baloo 2';
    font-size: 1.5rem;
    line-height: 1.3;
    font-weight: 900;
`
