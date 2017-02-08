import Article from '../domain/Article';

class CartAPI {

  async fetchCart() {
    return [
      new Article({ label: 'Hat', price: 7.65, quantity: 1 }),
      new Article({ label: 'Shoes', price: 19.95, quantity: 1, }),
      new Article({ label: 'Shirt', price: 39.99, quantity: 2 }),
      new Article({ label: 'Pants', price: 29.95, quantity: 1 }),
    ];
  }
}

export default new CartAPI();
