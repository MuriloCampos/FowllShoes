import React from 'react';
import { useSelector } from 'react-redux';

import { MdShoppingBasket } from 'react-icons/md';

import { Container, Title, Cart } from './styles';

export default function Header() {
  const cartSize = useSelector(state => state.cart.length);
  return (
    <Container>
      <Title to="/">FowllShoes</Title>

      <Cart to="/cart">
        <div>
          <strong>Meu carrinho</strong>
          <span>{cartSize} itens</span>
        </div>
        <MdShoppingBasket size={36} color="#FFF" />
      </Cart>
    </Container>
  );
}
