import React from 'react';
import { Image } from 'react-native';
import { Container } from './styles';
import Logo from '../../assets/logo.png';

const Header = () => {
  return (
    <Container>
      <Image
        source={Logo}
        style={{
          width: 430,
          height: 100,
          borderRadius: 20,
          marginTop: 40,
          marginLeft: 30,
        }}
      />
    </Container>
  );
};

export default Header;
