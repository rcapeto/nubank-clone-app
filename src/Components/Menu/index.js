import React from 'react';

import { Container, Code, Nav, NavItem, NavText, SignOutButton, SignOutButtonText } from './styles';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function Menu({ translateY }) {
   return(
      <Container
         style={{
            opacity: translateY.interpolate({
               inputRange: [0, 150],
               outputRange: [0, 1],
            })
         }}
      >
         <Code />

         <Nav>
            <NavItem>
               <Icon size={20} name="help-outline" color="#fff"/>
               <NavText>Me ajuda</NavText>
            </NavItem>

            <NavItem>
               <Icon size={20} name="person-outline" color="#fff"/>
               <NavText>Perfil</NavText>
            </NavItem>

            <NavItem>
               <Icon size={20} name="credit-card" color="#fff"/>
               <NavText>Configurar cartão</NavText>
            </NavItem>

            <NavItem>
               <Icon size={20} name="smartphone" color="#fff"/>
               <NavText>Configurações do App</NavText>
            </NavItem>
         </Nav>

         <SignOutButton
            onPress={() => {}}
         >
            <SignOutButtonText>SAIR DO APP</SignOutButtonText>
         </SignOutButton>

      </Container>
   );
}