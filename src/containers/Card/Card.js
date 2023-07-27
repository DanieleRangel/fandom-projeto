import { Card } from '../../components/Card/Card.js'
import { useAppContext } from '../../store/AppContext.js';

export const CardContainer = (props) => {
  const { state, dispatch } = useAppContext();

  const handleClick = (id, quantity, image, title, valueTotal) => {
    // Recupera o carrinho atual do local storage
    let cart = JSON.parse(localStorage.getItem('my-cart')) || [];

    // Verifica se o item já está no carrinho
    let itemIndex = cart.findIndex(item => item.id === id);

    if (itemIndex !== -1) {
      // Se o item já estiver no carrinho, atualiza a quantidade
      cart[itemIndex] = { id, quantity, image, title, valueTotal };
    } else {
      // Se o item não estiver no carrinho, adiciona o item ao carrinho
      cart.push({ id, quantity, image, title, valueTotal });
    }

    // Salva o carrinho atualizado no local storage
    localStorage.setItem('my-cart', JSON.stringify(cart));
  }

  return (
    <Card {...props} onClick={handleClick} />
  )
}
