import styled from 'styled-components/native';
import { Platform, Animated } from 'react-native';

export const Container = styled.View`
   flex: 1;
   background-color: #8b10ae;
   padding-top: ${Platform.OS === 'ios' ? '6px' : '0px'};
   justify-content: center;
`;

export const Content  = styled.View`
   flex: 1;
   max-height: 400px;
   z-index: 5;
`;

export const Card  = styled(Animated.View)`
   flex: 1;
   background-color: #FFF;
   border-radius: 4px;
   margin: 0 20px;
   height: 350px;
   position: absolute;
   left: 0;
   right: 0;
   top: 0;
`;

export const CardHeader = styled.View`
   flex-direction: row;
   justify-content: space-between;
   align-items: center;
   padding: 30px;
`;

export const CardContent = styled.View`
   flex: 1;
   padding: 0 30px;
   justify-content: center;
`;

export const Title = styled.Text`
   font-size: 13px;
   color: #999;
`;

export const Description = styled.Text`
   font-size: 32px;
   margin-top: 3px;
   color: #333;
`;

export const Annotation = styled.Text`
   font-size: 12px;
   color: #333;
`;

export const CardFooter = styled.Text`
   padding: 30px;
   background: #eee;
   border-radius: 4px;
`;