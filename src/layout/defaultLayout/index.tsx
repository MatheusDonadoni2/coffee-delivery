import { Outlet } from 'react-router-dom'
import { Container, Content } from './styles'
import { Header } from '../../components/header'

export function DefaultLayout() {
    return (
        <Container>
            <Header />
            <Content>
                <Outlet />
            </Content>
        </Container>
    )
}