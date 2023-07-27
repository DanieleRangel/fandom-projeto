import React, { useState } from 'react';

function CarrinhoDeComprasReact() {
  // Inicie os estados para valorTotal, valorProduto e qtd
  const [valorTotal, setValorTotal] = useState([0, 0]);
  const valorProduto = [50.00, 30.00];
  const [qtd, setQtd] = useState([0, 0]);

  // Função para adicionar um item ao carrinho
  function adicionarItem(item) {
    // Atualize o estado para a quantidade e valorTotal
    setQtd((prevQtd) => {
      const updatedQtd = [...prevQtd];
      updatedQtd[item] += 1;
      return updatedQtd;
    });

    setValorTotal((prevValorTotal) => {
      const updatedValorTotal = [...prevValorTotal];
      updatedValorTotal[item] = valorProduto[item] * qtd[item];
      return updatedValorTotal;
    });
  }

  // Função para remover um item do carrinho
  function removerItem(item) {
    if (qtd[item] > 0) {
      // Atualize o estado para a quantidade e valorTotal
      setQtd((prevQtd) => {
        const updatedQtd = [...prevQtd];
        updatedQtd[item] -= 1;
        return updatedQtd;
      });

      setValorTotal((prevValorTotal) => {
        const updatedValorTotal = [...prevValorTotal];
        updatedValorTotal[item] = valorProduto[item] * qtd[item];
        return updatedValorTotal;
      });
    }
  }

  // Função para calcular o valor total da compra
  function valorCompra() {
    let valor = 0;
    for (let i = 0; i < valorTotal.length; i++) {
      valor += valorTotal[i];
    }
    return valor.toFixed(2);
  }

  return (
    <div>
      <h2>Meu Carrinho de Compras</h2>
      {/* Exemplo de renderização do carrinho */}
      <div>
        <p>Item 1</p>
        <button onClick={() => adicionarItem(0)}>Adicionar</button>
        <button onClick={() => removerItem(0)}>Remover</button>
        <p>Quantidade: {qtd[0]}</p>
        <p>Total: {valorTotal[0].toFixed(2)}</p>
      </div>
      <div>
        <p>Item 2</p>
        <button onClick={() => adicionarItem(1)}>Adicionar</button>
        <button onClick={() => removerItem(1)}>Remover</button>
        <p>Quantidade: {qtd[1]}</p>
        <p>Total: {valorTotal[1].toFixed(2)}</p>
      </div>
      <p>Valor Total da Compra: {valorCompra()}</p>
    </div>
  );
}

export default CarrinhoDeComprasReact;
