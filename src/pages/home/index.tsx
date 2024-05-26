import { useTheme } from 'styled-components';
import { IconLabel } from './components/IconLabel'
import { Container, Content, ContentProducts, Image, Intro, IntroContent, IntroContentIconsTags, IntroContentTitles, IntroSubTitle, IntroTitle, TitleProducts } from "./styles";
import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react';
import HomeImagePNG from '../../assets/HomeImagem.png'
import { CardProduct, ProductProps } from '../../components/cardProduct';

import ExpressoTradicional from '../../assets/products/Expresso.png'
import Americano from '../../assets/products/Americano.png'
import ExpressoCremoso from '../../assets/products/Expresso-Cremoso.png'
import CafeGelado from '../../assets/products/Cafe-Gelado.png'
import CafeComLite from '../../assets/products/Cafe-com-Leite.png'
import Latte from '../../assets/products/Latte.png'
import Capuccino from '../../assets/products/Capuccino.png'
import Mochaccino from '../../assets/products/Mochaccino.png'
import Macchiato from '../../assets/products/Macchiato.png'
import ChocolateQuente from '../../assets/products/Chocolate-Quente.png'
import Cubano from '../../assets/products/Cubano.png'
import Havaiano from '../../assets/products/Havaiano.png'
import Arabe from '../../assets/products/Arabe.png'
import Irlandes from '../../assets/products/Irlandes.png'

const products: ProductProps[] = [
    {
        image: ExpressoTradicional,
        name: "Expresso Tradicional",
        description: "O tradicional café feito com água quente e grãos moídos",
        tags: ['TRADICIONAL', 'FORTE'],
        price: '9,90'
    },
    {
        image: Americano,
        name: "Expresso Americano",
        description: "Expresso diluído, menos intenso que o tradicional",
        tags: ['TRADICIONAL', 'FORTE'],
        price: '9,90'
    },
    {
        image: ExpressoCremoso,
        name: "Expresso Cremoso",
        description: "Café expresso tradicional com espuma cremosa",
        tags: ['TRADICIONAL', 'FORTE'],
        price: '9,90'
    },
    {
        image: CafeGelado,
        name: "Expresso Gelado",
        description: "Bebida preparada com café expresso e cubos de gelo",
        tags: ['TRADICIONAL', 'FORTE'],
        price: '9,90'
    },
    {
        image: CafeComLite,
        name: "Café com Leite",
        description: "Meio a meio de expresso tradicional com leite vaporizado",
        tags: ['TRADICIONAL', 'FORTE'],
        price: '9,90'
    },
    {
        image: Latte,
        name: "Latte",
        description: "Uma dose de café expresso com o dobro de leite e espuma cremosa",
        tags: ['TRADICIONAL', 'FORTE'],
        price: '9,90'
    },
    {
        image: Capuccino,
        name: "Capuccino",
        description: "Bebida com canela feita de doses iguais de café, leite e espuma",
        tags: ['TRADICIONAL', 'FORTE'],
        price: '9,90'
    },
    {
        image: Macchiato,
        name: "Macchiato",
        description: "Café expresso misturado com um pouco de leite quente e espuma",
        tags: ['TRADICIONAL', 'FORTE'],
        price: '9,90'
    }
    ,
    {
        image: Mochaccino,
        name: "Mochaccino",
        description: "Café expresso com calda de chocolate, pouco leite e espuma",
        tags: ['TRADICIONAL', 'FORTE'],
        price: '9,90'
    },
    {
        image: ChocolateQuente,
        name: "Chocolate Quente",
        description: "Bebida feita com chocolate dissolvido no leite quente e café",
        tags: ['TRADICIONAL', 'FORTE'],
        price: '9,90'
    },
    {
        image: Cubano,
        name: "Cubano",
        description: "Drink gelado de café expresso com rum, creme de leite e hortelã",
        tags: ['ESPECIAL', 'ALCOÓLICO', 'GELADO'],
        price: '9,90'
    },
    {
        image: Havaiano,
        name: "Havaiano",
        description: "Bebida adocicada preparada com café e leite de coco",
        tags: ['ESPECIAL'],
        price: '9,90'
    },
    {
        image: Arabe,
        name: "Árabe",
        description: "Bebida preparada com grãos de café árabe e especiarias",
        tags: ['ESPECIAL'],
        price: '9,90'
    }, {
        image: Irlandes,
        name: "Irlandês",
        description: "Bebida a base de café, uísque irlandês, açúcar e chantilly",
        tags: ['ESPECIAL', 'ALCOÓLICO'],
        price: '9,90'
    },

]


export function Home() {
    const theme = useTheme()

    return (
        <Container>
            <Intro>
                <IntroContent>
                    <IntroContentTitles>
                        <IntroTitle>Encontre o café perfeito para qualquer hora do dia</IntroTitle>
                        <IntroSubTitle>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</IntroSubTitle>
                    </IntroContentTitles>

                    <IntroContentIconsTags>
                        <IconLabel.root>
                            <IconLabel.icon
                                backgroundColor={theme.colors.brand['yellow-dark']}
                                icon={() => <ShoppingCart color={theme.colors.base.white} size={16} weight='fill' />}
                            />
                            <IconLabel.label text='Compra simples e segura' />
                        </IconLabel.root>

                        <IconLabel.root>
                            <IconLabel.icon
                                backgroundColor={theme.colors.base['base-text']}
                                icon={() => <Package color={theme.colors.base.white} size={16} weight='fill' />}
                            />
                            <IconLabel.label text='Embalagem mantém o café intacto' />
                        </IconLabel.root>

                        <IconLabel.root>
                            <IconLabel.icon
                                backgroundColor={theme.colors.brand['yellow']}
                                icon={() => <Timer color={theme.colors.base.white} size={16} weight='fill' />}
                            />
                            <IconLabel.label text='Entrega rápida e rastreada' />
                        </IconLabel.root>

                        <IconLabel.root>
                            <IconLabel.icon
                                backgroundColor={theme.colors.brand['purple']}
                                icon={() => <Coffee color={theme.colors.base.white} size={16} weight='fill' />}
                            />
                            <IconLabel.label text='O café chega fresquinho até você' />
                        </IconLabel.root>
                    </IntroContentIconsTags>
                </IntroContent>

                <Image src={HomeImagePNG} />
            </Intro>

            <Content>
                <TitleProducts> Nossos cafés</TitleProducts>
                <ContentProducts>
                    {products.map((product) => <CardProduct key={product.name} data={product} />)}
                </ContentProducts>
            </Content>
        </Container>
    )
}