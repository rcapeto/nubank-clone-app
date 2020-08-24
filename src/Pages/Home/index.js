import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Animated } from 'react-native';
import { PanGestureHandler, State } from 'react-native-gesture-handler';

import { 
  Container, 
  Content, 
  Card, 
  CardHeader,
  CardContent,
  Title,
  Description,
  Annotation,
  CardFooter
} from './styles';

import Header from '../../Components/Header';
import Tabs from '../../Components/Tabs';
import Menu from '../../Components/Menu';


export default function Home() {
  const translateY = new Animated.Value(0);
  let offset = 0;

  const AnimatedEvent = Animated.event(
    [
      {
        nativeEvent: {
          translationY: translateY,
        }
      },
    ], { useNativeDriver: true }
  );


  function onHandlerStateChange(event) {
    if(event.nativeEvent.oldState === State.ACTIVE) {
      let opened = false;

      const { translationY } = event.nativeEvent;

      offset += translationY;

      if(translationY >= 100) {
        opened = true;
      } else {
        translateY.setValue(offset);
        translateY.setOffset(0);
        offset = 0;
      }

      Animated.timing(translateY, { 
        toValue: opened ? 380: 0, 
        duration: 200, 
        useNativeDriver: true 
      }).start(() => {
        offset = opened ? 380: 0;

        translateY.setOffset(offset);

        translateY.setValue(0);
      });
    }
  }

  return (
     <Container>

      <Header />
      
      <Content>
        
        <Menu translateY={translateY} />

        <PanGestureHandler
          onGestureEvent={AnimatedEvent}
          onHandlerStateChange={onHandlerStateChange}
        >
          <Card
            style={{
              transform: [{
                translateY: translateY.interpolate({
                  inputRange: [-350, 0, 380],
                  outputRange: [-50, 0, 380],
                  extrapolate: 'clamp'//se tiver fora dos valores nao deixa acontecer
                })
              }]
            }}
          >
            <CardHeader>
              <Icon name="attach-money" size={28} color="#666" />
              <Icon name="visibility-off" size={28} color="#666" />
            </CardHeader>
            
            <CardContent>
              <Title>Saldo Disponível</Title>
              <Description>R$ 195.615,96</Description>
            </CardContent>

            <CardFooter>
              <Annotation>
                Transferência de R$ 60,00 recebida de Raphael Silas Capeto hoje às 18:00
              </Annotation>
            </CardFooter>
          </Card>
        </PanGestureHandler>
      </Content>
      <Tabs translateY={translateY}/>
     </Container>
  );
}
