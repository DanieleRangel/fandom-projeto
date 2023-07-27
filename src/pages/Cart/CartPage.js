import React from 'react';
import { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import { ListGroup, ListGroupItem, Button, Card, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import { useAppContext } from '../../store/AppContext';

// Função adapterItems
const adapterItems = (items) => {
    return items.map(item => ({
        id: item.id,
        image: item.image,
        title: item.title,
        total: item.quantity,
        valueTotal: item.valor * item.quantity, // Calcula o valor total do item
        soma: item.soma
    }));
};

export const CartPage = () => {
    const { state, dispatch } = useAppContext();

    const [cart, setCart] = React.useState(JSON.parse(localStorage.getItem('my-cart')) || []);

    const handleRemove = (id) => {
        const newCart = cart.filter(item => item.id !== id);
        setCart(newCart);
        localStorage.setItem('my-cart', JSON.stringify(newCart));
    }

    const handleAddQuantity = (id) => {
        const newCart = cart.map(item => item.id === id ? { ...item, total: item.total + 1 } : item);
        setCart(newCart);
        localStorage.setItem('my-cart', JSON.stringify(newCart));
    }

    const handleRemoveQuantity = (id) => {
        const newCart = cart.map(item => item.id === id && item.total > 0 ? { ...item, total: item.total - 1 } : item);
        setCart(newCart);
        localStorage.setItem('my-cart', JSON.stringify(newCart));
    }

    return (
        <Container>
            {adapterItems(cart).map(item => (
                <Card className="mb-4" key={item.id}>
                    <Row className="no-gutters">
                        <Col md={4}>
                            <Card.Img src={item.image} alt="CardBS image" />
                        </Col>
                        <Col md={8}>
                            <Card.Body>
                                <Card.Title>{item.title}</Card.Title>
                                <Card.Text>
                                    <p>Quantidade: {item.total}</p>
                                    <p>Valor: {item.valueTotal}</p>
                                </Card.Text>
                                <Button variant="danger m-1 rounded-circle" onClick={() => handleRemoveQuantity(item.id)}>
                                    <FontAwesomeIcon icon={faMinus} />
                                </Button>
                                <Button variant="success m-1 rounded-circle" onClick={() => handleAddQuantity(item.id)}>
                                    <FontAwesomeIcon icon={faPlus} />
                                </Button>
                                <Button onClick={() => handleRemove(item.id)}>Remove</Button>
                            </Card.Body>
                        </Col>
                    </Row>
                </Card>
            ))}
        </Container>
    )
}
