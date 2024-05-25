import { MapPin, ShoppingCart } from 'phosphor-react';
import logoSVG from '../../assets/Logo.svg'
import { CartButton, Container, ContainerButtons, LocationButton, Logo } from "./styles";
import { useTheme } from 'styled-components';

export function Header() {
    const theme = useTheme()

    return (
        <Container>
            <Logo src={logoSVG} />
            <ContainerButtons>
                <LocationButton>
                    <MapPin
                        weight='fill'
                        color={theme.colors.brand.purple}
                        size={22}
                    />
                    <p style={{
                        color: theme.colors.brand['purple-dark'],
                    }}>Muriaé, MG</p>
                </LocationButton>

                <CartButton>
                    <ShoppingCart
                        weight='fill'
                        color={theme.colors.brand['yellow-dark']}
                        size={22}
                    />
                </CartButton>
            </ContainerButtons>
        </Container >
    )
}