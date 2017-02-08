import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import logo from '../../logo.svg';
import './ShoppingCart.css';
import ArticleListItem from '../components/ArticleListItem';
import Article from '../domain/Article';
import * as cartActions from '../actions/cartActions';

class ShoppingCart extends Component {

  componentWillMount() {
    this.props.actions.fetchCart();
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Nexapp Cart</h2>
        </div>

        <h1>{'Mon panier d\'achat'}</h1>
        <ul>
          {this.props.items.map(item => <ArticleListItem article={item} key={item.label} />)}
        </ul>
      </div>
    );
  }
}

ShoppingCart.propTypes = {
  actions: PropTypes.shape({
    fetchCart: PropTypes.func.isRequired,
  }).isRequired,
  items: PropTypes.arrayOf(PropTypes.instanceOf(Article)).isRequired,
};

function mapStateToProps(state) {
  return {
    items: state.cart.items,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ ...cartActions }, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCart);
