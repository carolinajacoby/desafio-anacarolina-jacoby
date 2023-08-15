# DESAFIO START DB 2023 #

# 1º Parte: 
Criação da constante CARDÁPIO, que é um objeto que mapeia os códigos dos itens do cardápio para as informações sobre cada item, que possuem as seguintes propriedades:

price: O preço do item.
type: O tipo do item, que pode ser 'main' (item principal) ou 'extra' (item extra).
extras: Uma lista de códigos de itens extras que podem ser adicionados a este item.
mainItem: O código do item principal ao qual este item extra está associado.

Esse mapeamento facilita a busca de informações sobre os itens do cardápio e a verificação de itens extras associados a itens principais.

# 2° Parte :
Verificação de situações 
if (itens.length === 0):Verifica se a lista(itens) é vazia, em caso positivo, retorna a mensagem "Não há itens no carrinho de compra!"
Criação do array contendo as formas de pagamentos aceitas pelo programa.
formasDePagamentoValidas = ['dinheiro', 'debito', 'credito'];

# 3°) Parte: 
Validação da forma de pagamento
if (!formasDePagamentoValidas.includes(metodoDePagamento))
Atenção ao operador != ele inverte o resultado da verificação, ou seja, está verficando se o método de pagamento não está na lista de formas de pagamento.
Se a forma de pagamento não for válida, a função retorna a mensagem "Forma de pagamento inválida!".

# 4° Parte:
Iniciando a variavel 'let total= 0 em zero, que será usada para o calculo do valor total da compra.
Criação de uma matriz vazia chamada extraItemsWithoutMain = [], usada para armazenar itens extras que não tem um item principal correspondentes no pedido
for (const itemInfo of itens) : Criação de um for loop para percorrer a matriz 'itens'.

Para cada elemento, ele executa o seguinte código:

const [itemCode, quantity] = itemInfo.split(',');: Aqui, o elemento itemInfo (que parece ser uma string no formato "codigo,quantidade") é dividido em partes usando o método split(','). Isso cria um array contendo o código do item (itemCode) e a quantidade (quantity).
const item = cardapio[itemCode];: Aqui, estamos usando o código do item (itemCode) para acessar as informações do item no dicionário cardapio. Isso nos dá acesso a propriedades como o preço, tipo, itens extras, etc., relacionados ao item.

# 5° Parte
Verificando se o código do item existe:

if (!item) {
  return "Item inválido!";
Como temos o ! de negação, caso o código do item passado pelo cliente for inválido, o bloco retornará a mensagem "Item inválido".

# 6° Parte 
verifica se um item extra está sendo pedido sem o item principal correspondente e, se não for o caso, adiciona o preço do item principal (ou do item extra, se for o caso) ao valor total da compra. Além disso, ele garante que a restrição de itens extras sem itens principais seja respeitada.

InitemCode.startsWith('combo') é uma verificação para determinar se uma string começa com o texto "combo" ou não.

if (item.type === 'extra') é uma verificação se o tipo do item é "extra".

const mainItemCode = item.mainItem; = Obtém o código do item principal ao qual este item extra está associado. No cardápio, cada item extra tem a propriedade mainItem que indica o código do item principal correspondente.

const mainItemQuantity = itens.find(item => item.startsWith(mainItemCode));: Procura na lista de itens (itens) o item principal correspondente usando o código do item principal (mainItemCode). A função find retorna o primeiro item na lista que começa com o código do item principal.

 Verifica duas condições:
 
1 -Se mainItemQuantity não foi encontrado (ou seja, o cliente não pediu o item principal correspondente) OU
2 -Se a quantidade do item principal for igual a 0.

if (!mainItemQuantity || parseInt(mainItemQuantity.split(',')[1]) === 0) 

Se qualquer uma dessas condições for verdadeira, significa que o cliente está tentando pedir um item extra sem o item principal correspondente. Nesse caso, adicionamos o código do item extra à matriz extraItemsWithoutMain.

 # 7° Parte
Calcular o total parcial da compra somando o preço do item (item.price) multiplicado pela quantidade solicitada (quantity) à variável total.
total += item.price * quantity;

# 8° Parte
Verificar se o cliente não está pedindo um item extra, sem o seu item  principal correspondente.Se algum item extra tiver sido pedido sem um item principal correspondente, a função retornará a mensagem de erro apropriada. Isso ajuda a aplicar a regra de que itens extras devem ter itens principais associados e ajuda a evitar pedidos inválidos.

if (extraItemsWithoutMain.length > 0) {
    return "Item extra não pode ser pedido sem o principal";
}

# 9° Parte
Verificar a quantidade de itens
se for igual a 0, retornar a mensagem "Quantidade inválida!"

if (total === 0) {
        return "Quantidade inválida!";
      }

# 10° Parte
Aplicação do desconto ou acrescimo necessário

if (metodoDePagamento === 'dinheiro') {
        total *= 0.95; // Aplicando 5% de desconto
      } else if (metodoDePagamento === 'credito') {
        total *= 1.03; // Aplicando 3% de acréscimo
      }
      
# 11º Parte
Utilizando o método replace para substituir um caractere em uma string por outro caractere. No caso "." por "," conforme solicitadoo.

const formattedTotal = `R$ ${total.toFixed(2).replace('.', ',')}`;


