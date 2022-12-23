import React, { useState } from 'react';
import { Button, ListGroup, ListGroupItem, Modal, ModalBody, ModalFooter, ModalHeader, FormGroup, Label, Input, FormText, Radio } from 'reactstrap';

const Carrinho = (props) => {
  const { modalPagamento, setModalPagamento } = props;
  // Estado para armazenar os produtos adicionados ao carrinho
  const [produtos, setProdutos] = useState([]);
  // Estado para controlar a exibição do modal de pagamento

  // Estado para armazenar o tipo de pagamento selecionado
  const [tipoPagamento, setTipoPagamento] = useState('');
  // Estado para armazenar os dados do cartão
  const [dadosCartao, setDadosCartao] = useState({
    numero: '',
    nome: '',
    validade: '',
    cvv: '',
  });
  // Estado para armazenar o subtotal, frete e total da compra
  const [totais, setTotais] = useState({
    subtotal: 0,
    frete: 0,
    total: 0,
  });

  // Função para adicionar um produto ao carrinho
  const adicionarAoCarrinho = (produto) => {
    // Verifica se o produto já está no carrinho
    const produtoExistente = produtos.find((p) => p.id === produto.id);
    if (produtoExistente) {
      // Atualiza a quantidade do produto no carrinho
      const produtosAtualizados = produtos.map((p) => (p.id === produto.id ? { ...p, quantidade: p.quantidade + 1 } : p));
      setProdutos(produtosAtualizados);
    } else {
      // Adiciona o produto ao carrinho com quantidade 1
      setProdutos([...produtos, { ...produto, quantidade: 1 }]);
    }
    // Atualiza os totais
    atualizarTotais();
  };

  // Função para remover um produto do carrinho
  const removerDoCarrinho = (produto) => {
    // Remove o produto do carrinho
    const produtosAtualizados = produtos.filter((p) => p.id !== produto.id);
    setProdutos(produtosAtualizados);
    // Atualiza os totais
    atualizarTotais();
  };

  // Função para atualizar os totais (subtotal, frete e total)
  const atualizarTotais = () => {
    // Calcula o subtotal
    const subtotal = produtos.reduce((total, produto) => total + (produto.preco * produto.quantidade), 0);
    // Calcula o frete (valor falso para exemplo)
    const frete = 10;
    // Calcula o total
    const total = subtotal + frete;
    // Atualiza os totais no estado
    setTotais({ subtotal, frete, total });
  };

  // Função para abrir o modal de pagamento
  const abrirModalPagamento = () => setModalPagamento(true);

  // Função para fechar o modal de pagamento
  const fecharModalPagamento = () => setModalPagamento(false);

  // Função para atualizar o tipo de pagamento selecionado
  const atualizarTipoPagamento = (event) => setTipoPagamento(event.target.value);

  // Função para atualizar os dados do cartão
  const atualizarDadosCartao = (event) => {
    setDadosCartao({
      ...dadosCartao,
      [event.target.name]: event.target.value,
    });
  };

  // Função para finalizar a compra
  const finalizarCompra = () => {
    // Simula a finalização da compra
    console.log('Compra finalizada com sucesso!');
    // Fecha o modal de pagamento
    fecharModalPagamento();
    // Limpa o carrinho
    setProdutos([]);
  };

  return (
    <>
      {/* Lista de produtos no carrinho */}
      <ListGroup>
        {produtos.map((produto, index) => (
          <ListGroupItem key={index}>
            {produto.nome} ({produto.quantidade})
            <Button color="danger" onClick={() => removerDoCarrinho(produto)}>
              <i className="fas fa-trash" />
            </Button>
          </ListGroupItem>
        ))}
      </ListGroup>

      {/* Botão para abrir o modal de pagamento */}
      <Button color="primary" onClick={abrirModalPagamento}>
        Finalizar compra
      </Button>

      {/* Modal de pagamento */}
      <Modal isOpen={true} toggle={fecharModalPagamento}>
        <ModalHeader toggle={fecharModalPagamento}>Forma de pagamento</ModalHeader>
        <ModalBody>
          {/* Opções de pagamento */}
          <FormGroup>
            <Label for="tipoPagamento">Selecione a forma de pagamento:</Label>
            <Input type="select" name="tipoPagamento" id="tipoPagamento" value={tipoPagamento} onChange={atualizarTipoPagamento}>
              <option value="">Selecione</option>
              <option value="cartaoCredito">Cartão de crédito</option>
              <option value="cartaoDebito">Cartão de débito</option>
            </Input>
          </FormGroup>

          {/* Dados do cartão (apenas exibidos se o tipo de pagamento for cartão) */}
          {tipoPagamento === 'cartaoCredito' || tipoPagamento === 'cartaoDebito' ? (
            <>
              <FormGroup>
                <Label for="numeroCartao">Número do cartão:</Label>
                <Input type="text" name="numero" id="numeroCartao" value={dadosCartao.numero} onChange={atualizarDadosCartao} />
              </FormGroup>
              <FormGroup>
                <Label for="nomeCartao">Nome impresso no cartão:</Label>
                <Input type="text" name="nome" id="nomeCartao" value={dadosCartao.nome} onChange={atualizarDadosCartao} />
              </FormGroup>
              <FormGroup>
                <Label for="validadeCartao">Validade:</Label>
                <Input type="text" name="validade" id="validadeCartao" value={dadosCartao.validade} onChange={atualizarDadosCartao} />
                <FormText color="muted">
                  Formato: MM/YYYY
                </FormText>
              </FormGroup>
              <FormGroup>
                <Label for="cvvCartao">CVV:</Label>
                <Input type="text" name="cvv" id="cvvCartao" value={dadosCartao.cvv} onChange={atualizarDadosCartao} />
              </FormGroup>
            </>
          ) : null}

          {/* Totais */}
          <hr />
          <div>
            Subtotal: R$ {totais.subtotal.toFixed(2)}
          </div>
          <div>
            Frete: R$ {totais.frete.toFixed(2)}
          </div>
          <div>
            Total: R$ {totais.total.toFixed(2)}
          </div>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={finalizarCompra}>
            Finalizar compra
          </Button>
          <Button color="secondary" onClick={fecharModalPagamento}>
            Cancelar
          </Button>
        </ModalFooter>
      </Modal>
    </>

  );
};

export default Carrinho;




