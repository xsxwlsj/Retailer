/* eslint-disable react/jsx-no-target-blank */
import React, { Component } from "react";
import tee from "../classic-tee.jpg"

class Header extends Component {

    constructor(props) {
        super(props);
    
        this.state = {
            cardDisplayed : false
        };
    
        this.showCart = this.showCart.bind(this);
    }
  showCart() {
    this.setState({cardDisplayed: !this.state.cardDisplayed});
  }

  render() {
    const cartQuantity = this.props.content.small.quantity + this.props.content.medium.quantity + this.props.content.large.quantity;
    return (
      <div>
        <nav>
          <div className="container">
            <ul className="navbar-right">
              <li>
                <button id="cart" onMouseEnter={this.showCart} onMouseLeave={this.showCart} onTouchStart={this.showCart} onTouchEnd={this.showCart}>
                  My carts ( <span>{cartQuantity} )</span>
                </button>
              </li>
            </ul>
          </div>
        </nav>
        {this.state.cardDisplayed && (
          <div className="container">
            <div className="shopping-cart">
              <ul className="shopping-cart-items">
                {
                    this.props.content.small.quantity > 0 && 
                    <li className="clearfix">
                        <img
                            src={tee}
                            alt="item1"
                        />
                        <span className="item-name">{this.props.content.title}</span>
                        <span className="item-price">{this.props.content.small.quantity}x ${this.props.content.price}</span>
                        <span className="item-quantity">Size: {this.props.content.small.size}</span>
                    </li> 
                }
                {
                    this.props.content.medium.quantity > 0 && 
                    <li className="clearfix">
                        <img
                            src={tee}
                            alt="item1"
                        />
                        <span className="item-name">{this.props.content.title}</span>
                        <span className="item-price">{this.props.content.medium.quantity}x ${this.props.content.price}</span>
                        <span className="item-quantity">Size: {this.props.content.medium.size}</span>
                    </li> 
                }
                {
                    this.props.content.large.quantity > 0 && 
                    <li className="clearfix">
                        <img
                            src={tee}
                            alt="item1"
                        />
                        <span className="item-name">{this.props.content.title}</span>
                        <span className="item-price">{this.props.content.large.quantity}x ${this.props.content.price}</span>
                        <span className="item-quantity">Size: {this.props.content.large.size}</span>
                    </li> 
                }
                {
                  cartQuantity === 0 &&
                  <p>The cart is empty!</p>
                }
                
              </ul>
            </div>
          </div>
        )}
      </div>
    );
  }
}

Header.defaultProps = {
    cardDisplayed: undefined
  };
export default Header;
