import React from 'react';
import { StatusBar } from 'react-native';

import Home from './Pages/Home';

export default function App() {
   return(
      <> 
         <StatusBar barStyle="light-content" backgroundColor="#8b10ae"/>
         <Home />
      </>
   );
}