import React, { Component } from "react";
import tee from "./classic-tee.jpg";
import "./App.css";
import "./styles/header.css";
import "./components/header";
import Header from "./components/header";

class App extends Component {
  constructor() {
    super();
    this.state = {
      cartDisplayed: false,
      title: "Classic Tee",
      sizeSelected: false,
      clickedSmall: false,
      clickedMedium: false,
      clickedLarge: false,
      showWaringMessage: false,
      dispayedSize: "",
      clickedAddToButton: false,
      price: 75,
      small: {
        quantity: 0,
        size: "S"
      },
      medium: {
        quantity: 0,
        size: "M"
      },
      large: {
        quantity: 0,
        size: "L"
      }
    };

    this.clickSize = this.clickSize.bind(this);
    this.addToCart = this.addToCart.bind(this);
    this.blurSize = this.blurSize.bind(this);

  }

  addToCart() {
    if (this.state.sizeSelected) {
      // size selected
      this.setState({ showWaringMessage: true });
      if (this.state.clickedSmall) {
        const smallQuantity = { ...this.state.small };
        smallQuantity.quantity++;
        this.setState({
          clickedAddToButton: true,
          small: smallQuantity
        });
      }
      if (this.state.clickedMedium) {
        const mediumQuantity = { ...this.state.medium };
        mediumQuantity.quantity++;
        this.setState({
          clickedAddToButton: true,
          medium: mediumQuantity
        });
      }
      if (this.state.clickedLarge) {
        const largeQuantity = { ...this.state.large };
        largeQuantity.quantity++;
        this.setState({
          clickedAddToButton: true,
          large: largeQuantity
        });
      }
      this.blurSize();
      this.setState({ showWaringMessage: false });
    } else {
      // size not selected
      this.setState({ showWaringMessage: true })
    }

  }
  blurSize() {
    this.setState({
      sizeSelected: false,
      dispayedSize: "",
      clickedSmall: false,
      clickedMedium: false,
      clickedLarge: false
    });
  }
  clickSize(size) {
    if (size === "S") {
      this.setState({
        clickedSmall: true,
        clickedMedium: false,
        clickedLarge: false,
        dispayedSize: "S",
        sizeSelected: true
      });
    } else if (size === "M") {
      this.setState({
        clickedSmall: false,
        clickedMedium: true,
        clickedLarge: false,
        dispayedSize: "M",
        sizeSelected: true
      });
      console.log(this.state)
    } else {
      this.setState({
        clickedSmall: false,
        clickedMedium: false,
        clickedLarge: true,
        dispayedSize: "L",
        sizeSelected: true
      });
    }
    
  }
  render() {
    return (
      <div className="container">
        <Header content={this.state} />
        <div className="card">
          <div className="container-fliud">
            <div className="wrapper row">
              <div className="preview col-md-6">
                <div className="preview-pic tab-content">
                  <div className="tab-pane active" id="pic-1">
                    <img src={tee} alt="tee" />
                  </div>
                </div>
              </div>
              <div className="details col-md-6">
                <h3 className="product-title">Classic Tee</h3>
                <h2 className="price">$75.00</h2>
                <p className="product-description">
                  Dolor sit amet, consectetur adipiscing elit. Haec et tu ita
                  posuisti, et verba vestra sunt. Quod autem ratione actum est,
                  id officium appellamus dolor sit amet, consectetur adipiscing
                  elit. Haec et tu ita posuisti, et verba vestra sunt. Quod
                  autem ratione actum est, id officium appellamus
                </p>

                <h5 className="sizes">
                  Size
                <span className="star">* </span>
                  <span>{this.state.dispayedSize}</span>
                </h5>
                <div className="tee-sizes">
                  <div className={this.state.clickedSmall ? "clickedSize" : "nonClicked"} onClick={() => {this.clickSize("S")}}>S</div>
                  <div className={this.state.clickedMedium ? "clickedSize" : "nonClicked"} onClick={() => {this.clickSize("M")}}>M</div>
                  <div className={this.state.clickedLarge ? "clickedSize" : "nonClicked"} onClick={() => {this.clickSize("L")}}>L</div>
                </div>

                {
                  (this.state.showWaringMessage) &&
                  <p className="warningMessage">You must select a size before add to cart!</p>
                }

                <div className="action">
                  <button className="add-to-cart btn btn-default" type="button" onClick={this.addToCart}>
                    add to cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default App;
