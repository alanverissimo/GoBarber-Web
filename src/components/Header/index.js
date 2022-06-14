import React from 'react';
import { Link } from 'react-router-dom';

import Notifications from '~/components/Notifications';

import logo from '~/assets/logo-purple.svg';
import { Container, Content, Profile } from './styles';

export default function Header() {
    return (
    <Container>
        <Content>
            <nav>
                <img src ={logo} alt="GoBarber"/>
                <Link to="/dashboard">DASHBOARD</Link>

            </nav>
            <aside>
            <Notifications />
                <Profile>
                    <div>
                        <strong>Alan Verissimo</strong>
                        <Link to="/profile">Meu Perfil</Link>
                    </div>
                    <img src="https://i.ibb.co/cvXtwW6/alan-verissimo.jpg" alt="Alan Verissimo"/>
                </Profile>
            </aside>
        </Content>
    </Container>
    );
}