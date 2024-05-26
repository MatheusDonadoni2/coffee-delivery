import logoSVG from '../../assets/Logo.svg'
import { Container, ContainerButtons, Logo } from "./styles";
import { IconButton } from '../IconButton';
import { MapPin, ShoppingCart } from 'phosphor-react';
import { useTheme } from 'styled-components';

export function Header() {
    const { colors } = useTheme()

    return (
        <Container>
            <Logo src={logoSVG} />
            <ContainerButtons>
                <IconButton.root
                    backgroundColor={colors.brand['purple-light']}
                >
                    <IconButton.icon
                        icon={() => <MapPin
                            weight='fill' size={22}
                            color={colors.brand['purple-dark']} />}
                    />

                    <IconButton.label text='Muriaé, MG' />
                </IconButton.root>


                <IconButton.root
                    backgroundColor={colors.brand['yellow-light']}
                >
                    <IconButton.icon
                        icon={() => <ShoppingCart
                            weight='fill' size={22}
                            color={colors.brand['yellow-dark']} />}
                    />
                </IconButton.root>
            </ContainerButtons >
        </Container >
    )
}