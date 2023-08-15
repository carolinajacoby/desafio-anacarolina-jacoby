class CaixaDaLanchonete {
    
    calcularValorDaCompra(metodoDePagamento, itens) {
      const cardapio = {
        cafe: { price: 3.00, type: 'main', extras: ['chantily'] },
        chantily: { price: 1.50, type: 'extra', mainItem: 'cafe' },
        suco: { price: 6.20, type: 'main', extras: [] },
        sanduiche: { price: 6.50, type: 'main', extras: ['queijo'] },
        queijo: { price: 2.00, type: 'extra', mainItem: 'sanduiche' },
        salgado: { price: 7.25, type: 'main', extras: [] },
        combo1: { price: 9.50, type: 'main', extras: [] },
        combo2: { price: 7.50, type: 'main', extras: [] }
      };
  
      if (itens.length === 0) {
        return "Não há itens no carrinho de compra!";
      }
  
      const formasDePagamentoValidas = ['dinheiro', 'debito', 'credito'];
  
      // Verificando se a forma de pagamento é válida
      if (!formasDePagamentoValidas.includes(metodoDePagamento)) {
        return "Forma de pagamento inválida!";
      }
  
      let total = 0;
      const extraItemsWithoutMain = [];
  
      for (const itemInfo of itens) {
        const [itemCode, quantity] = itemInfo.split(',');
        const item = cardapio[itemCode];
  
        // Verificando se o código do item existe
        if (!item) {
          return "Item inválido!";
        }
  
        // Verificando se o item é um item principal ou combo
        if (!itemCode.startsWith('combo')) {
          if (item.type === 'extra') {
            const mainItemCode = item.mainItem;
            const mainItemQuantity = itens.find(item => item.startsWith(mainItemCode));
            
            if (!mainItemQuantity || parseInt(mainItemQuantity.split(',')[1]) === 0) {
              extraItemsWithoutMain.push(itemCode);
            }
          }
          
          total += item.price * quantity;
        }
      }
  
      if (extraItemsWithoutMain.length > 0) {
        return "Item extra não pode ser pedido sem o principal";
      }
  
      // Verificando a quantidade de itens
      if (total === 0) {
        return "Quantidade inválida!";
      }
  
      // Aplicando desconto ou taxa de acordo com a forma de pagamento
      if (metodoDePagamento === 'dinheiro') {
        total *= 0.95; // Aplicando 5% de desconto
      } else if (metodoDePagamento === 'credito') {
        total *= 1.03; // Aplicando 3% de acréscimo
      }
  
      // Formatando o valor total da compra
      const formattedTotal = `R$ ${total.toFixed(2).replace('.', ',')}`;
  
      return formattedTotal;
    }
  }
  
  export { CaixaDaLanchonete };