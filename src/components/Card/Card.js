import React, { useState } from 'react';
import CardBS from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';

export const Card = ({ id, image, title, onClick }) => {
  const [total, setTotal] = useState(0);  // Inicializa o estado total com 0

  const handleAdd = () => {
    setTotal(total + 1);  // Aumenta o total em 1
  }

  const handleRemove = () => {
    if (total > 0) {  // Garante que o total nunca seja negativo
      setTotal(total - 1);  // Diminui o total em 1
    }
  }

  const handleAddToCart = () => {
    onClick(id, total, image, title);  // Adiciona o total de itens ao carrinho
  }

  return (
    <CardBS >
      <CardBS.Img src={image} alt="CardBS image" />
      <CardBS.Body>
        <CardBS.Title>{title}</CardBS.Title>
      </CardBS.Body>
      <CardBS.Footer className="text-center">
        <Button variant="danger m-1 rounded-circle" onClick={handleRemove}><FontAwesomeIcon icon={faMinus} /></Button>
        <Button variant="primary px-5 rounded-pill" disabled>{total}</Button>
        <Button variant="success m-1 rounded-circle" onClick={handleAdd}><FontAwesomeIcon icon={faPlus} /></Button>
      </CardBS.Footer>
      <Button variant="success" onClick={handleAddToCart} disabled={total === 0}>Adicionar ao Carrinho</Button>

    </CardBS>
  )
}
