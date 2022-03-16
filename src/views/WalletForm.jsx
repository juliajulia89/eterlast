import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
//import Header from "../components/Header";

export class WalletForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      asset_id: "",
      name: "",
      picture: "",
      external_link: "",
      description: "",
      collection: "",
      supply: Number,
      royalties: Number,
      date_of_creation: "",
      newWalletAdded: false,
    };
  }
  handleInput = (event) => {
    const { value, name } = event.target;

    this.setState({
      [name]: value,
    });
  };
  handleWallet = (event) => {
    event.preventDefault();
    const newWallet = { ...this.state };
    this.setState({
      newWalletAdded: "on process",
    });
    axios
      .post("https://jsonplaceholder.typicode.com/users", newWallet) //get
      .then(() => {
        console.log("new wallet has been added", newWallet);
        this.setState({
          newWalletAdded: true,
        });
      })
      .catch((error) => console.log(error));
  };

  render() {
    const {
      asset_id,
      name,
      picture,
      external_link,
      description,
      collection,
      supply,
      royalties,
      date_of_creation,
      newWalletAdded,
    } = this.state;
    return (
      <>
      
        <main className="form-container">
          {newWalletAdded === "on process" && (
            <p className="text-paragraph"> Your wallet is beening created </p>
          )}
          {newWalletAdded === true && (
            <div>
              <p className="text-paragraph">
                {" "}
                Your wallet has been successfully created
              </p>
              <button className="button">
                <Link to="/">Go to Home Page</Link>
              </button>
            </div>
          )}
          {newWalletAdded === false && (
            <form className="form">
              <label htmlFor="asset_id" className="label-form">
                Asset ID
              </label>
              <br></br>
              <input
                type="text"
                id="asset_id"
                name="asset_id"
                value={asset_id}
                onChange={this.handleInput}
                className="input-form"
                autoComplete="off"
                placeholder="alphanumeric"
                required
              />
              <br></br>
              <label htmlFor="name" className="label-form">
                Name{" "}
              </label>
              <br></br>
              <input
                type="text"
                id="name"
                name="name"
                value={name}
                onChange={this.handleInput}
                className="input-form"
                autoComplete="off"
                placeholder="name"
                required
              />
              <br></br>
              <label htmlFor="picture" className="label-form">
                Picture{" "}
              </label>
              <br></br>
              <input
                type="text"
                id="picture"
                name="picture"
                value={picture}
                onChange={this.handleInput}
                className="input-form"
                autoComplete="off"
                placeholder="url based picture"
                required
              />
              <br></br>
              <label htmlFor="external_link" className="label-form">
                External Link{" "}
              </label>
              <br></br>
              <input
                type="text"
                id="external_link"
                name="external_link"
                value={external_link}
                onChange={this.handleInput}
                className="input-form"
                autoComplete="off"
                placeholder="link your item web page info"
                required
              />
              <br></br>
              <label htmlFor="description" className="label-form">
                Description{" "}
              </label>
              <br></br>
              <input
                type="text"
                id="description"
                name="description"
                value={description}
                onChange={this.handleInput}
                className="input-form"
                autoComplete="off"
                placeholder="text"
                required
              />
              <br></br>
              <label htmlFor="collection" className="label-form">
                Collection{" "}
              </label>
              <br></br>
              <input
                type="text"
                id="collection"
                name="collection"
                value={collection}
                onChange={this.handleInput}
                className="input-form"
                autoComplete="off"
                placeholder="name of collection"
                required
              />
              <br></br>
              <label htmlFor="supply" className="label-form">
                Supply{" "}
              </label>
              <br></br>
              <input
                type="number"
                id="supply"
                name="supply"
                value={supply}
                onChange={this.handleInput}
                className="input-form"
                autoComplete="off"
                placeholder="number of copies"
                required
              />
              <br></br>
              <label htmlFor="royalties" className="label-form">
                Royalties{" "}
              </label>
              <br></br>
              <input
                type="number"
                id="royalties"
                name="royalties"
                value={royalties}
                onChange={this.handleInput}
                className="input-form"
                autoComplete="off"
                placeholder="amount of royalties"
                required
              />
              <br></br>
              <label htmlFor="date_of_creation" className="label-form">
                Date of Creation{" "}
              </label>
              <br></br>
              <input
                type="text"
                id="date_of_creation"
                name="date_of_creation"
                value={date_of_creation}
                onChange={this.handleInput}
                className="input-form"
                autoComplete="off"
                placeholder="current date"
                required
              />
              <br></br>
              <button className="button-form" onClick={this.handleAddWallet}>
                Mint
              </button>
            </form>
          )}
        </main>
      </>
    );
  }
}
export default WalletForm;
