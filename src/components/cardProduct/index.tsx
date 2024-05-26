
import { Container, ContentFooter, ContentFooterFooterCounteAndButton, ContentFooterFooterPriceInfo, ContentInfoProduct, ContentTags, Price, ProductDescription, ProductImage, ProductName, SufixPrice } from "./styles";


import { Tag } from "./componets/tag";
import { IconButton } from "../IconButton";
import { useTheme } from "styled-components";
import { ShoppingCart } from "phosphor-react";
import { Counter } from "../counter";

export type ProductProps = {
    image: string
    name: string
    description: string
    tags: string[]
    price: string
}

type CardProductProps = {
    data: ProductProps
}

export function CardProduct({ data }: CardProductProps) {
    const { tags } = data
    const { colors } = useTheme()
    return (
        <Container>
            <ProductImage src={data.image} />
            <ContentTags>
                {
                    tags.map((label) => {
                        return (
                            <Tag key={label} label={label} />)
                    })
                }
            </ContentTags>

            <ContentInfoProduct>
                <ProductName>{data.name}</ProductName>
                <ProductDescription>{data.description}</ProductDescription>
            </ContentInfoProduct>

            <ContentFooter>
                <ContentFooterFooterPriceInfo>
                    <SufixPrice>R$</SufixPrice>
                    <Price>{data.price}</Price>
                </ContentFooterFooterPriceInfo>

                <ContentFooterFooterCounteAndButton>
                    <Counter />
                    <IconButton.root
                        backgroundColor={colors.brand['purple-dark']}
                    >
                        <IconButton.icon
                            icon={() => <ShoppingCart
                                weight='fill' size={22}
                                color={colors.base.white} />}
                        />

                    </IconButton.root>
                </ContentFooterFooterCounteAndButton>

            </ContentFooter>

        </Container>
    )
}