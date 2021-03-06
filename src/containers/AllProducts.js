import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { deleteButtonClicked } from "../actions/AddProductAction";
import { bindActionCreators } from "redux";
import { Table } from "react-bootstrap";
import { Divider } from "semantic-ui-react";
import { NavLink } from "react-router-dom";
import "./allproducts.css";
import logo from '../../src/images/logoo.png'

class AllProducts extends React.Component {
  constructor() {
    super();
    this.state = {
      products: [],
      category: "",
      delete: false,
      searchValue: "",
      searchproducts: [],
    };
  }

  getSearch = (event) => {
    let searchV = event.target.value;
    this.setState({
      searchproducts: this.props.allproducts,
    });
    console.log(searchV);
    if (searchV === "") {
      this.setState({
        searchproducts: this.props.allproducts,
      });
    }
    this.setState({ searchValue: searchV });
    console.log(searchV);
    
    let searchF = this.state.searchproducts.filter((p) => {
      
      return (
        p.productName.toLowerCase().match(searchV.toLowerCase()) ||
        p.categoryName.toLowerCase().match(searchV.toLowerCase())||
        p.productPrice===parseInt(searchV)||
        p.productDescription.toLowerCase().match(searchV.toLowerCase())||
        p.categoryName.toLowerCase().match(searchV.toLowerCase())||
        p.quantity===parseInt(searchV)

      );
    });
    console.log(searchF);

    if (searchF) {
      console.log("search");
      this.setState({ products: searchF, delete: false });
      console.log(this.state.products);
    }
  };

  deleteClicked = (id) => {
    this.setState({
      delete: true,
    });

    this.props.deleteButtonClicked(id);
  };

  // componentDidUpdate() {
  //   console.log("comp didup");
  //   console.log(this.state.delete)

  //   if (this.state.delete === true) {
  //     this.setState({
  //       delete: false,
  //     },()=> console.log(this.state.delete));

  //   }
  // }

  componentWillMount() {
    this.setState({
      products: this.props.allproducts,
    });
  }

  PriceChange = (e) => {
    if (this.state.category === "Dress") {
      if (e.target.value === "Below $50") {
        let PriceArray = this.props.allproducts.filter((p) => {
          return p.productPrice < 50 && p.categoryName === "Dress";
        });
        console.log(PriceArray);
        this.setState({
          products: PriceArray,
        });
      }

      if (e.target.value === "Above $50") {
        let PriceArray = this.props.allproducts.filter((p) => {
          return p.productPrice > 50 && p.categoryName === "Dress";
        });
        console.log(PriceArray);
        this.setState({
          products: PriceArray,
        });
      }

      if (e.target.value === "Above $100") {
        let PriceArray = this.props.allproducts.filter((p) => {
          return p.productPrice > 100 && p.categoryName === "Dress";
        });
        console.log(PriceArray);
        this.setState({
          products: PriceArray,
        });
      }
    }
    if (this.state.category === "Electronics") {
      if (e.target.value === "Below $50") {
        let PriceArray = this.props.allproducts.filter((p) => {
          return p.productPrice < 50 && p.categoryName === "Electronics";
        });
        console.log(PriceArray);
        this.setState({
          products: PriceArray,
        });
      }

      if (e.target.value === "Above $50") {
        let PriceArray = this.props.allproducts.filter((p) => {
          return p.productPrice > 50 && p.categoryName === "Electronics";
        });
        console.log(PriceArray);
        this.setState({
          products: PriceArray,
        });
      }

      if (e.target.value === "Above $100") {
        let PriceArray = this.props.allproducts.filter((p) => {
          return p.productPrice > 100 && p.categoryName === "Electronics";
        });
        console.log(PriceArray);
        this.setState({
          products: PriceArray,
        });
      }
    }
    if (this.state.category === "Kids") {
      if (e.target.value === "Below $50") {
        let PriceArray = this.props.allproducts.filter((p) => {
          return p.productPrice < 50 && p.categoryName === "Kids";
        });
        console.log(PriceArray);
        this.setState({
          products: PriceArray,
        });
      }

      if (e.target.value === "Above $50") {
        let PriceArray = this.props.allproducts.filter((p) => {
          return p.productPrice > 50 && p.categoryName === "Kids";
        });
        console.log(PriceArray);
        this.setState({
          products: PriceArray,
        });
      }

      if (e.target.value === "Above $100") {
        let PriceArray = this.props.allproducts.filter((p) => {
          return p.productPrice > 100 && p.categoryName === "Kids";
        });
        console.log(PriceArray);
        this.setState({
          products: PriceArray,
        });
      }
    }
  };

  CategoryChange = (e) => {
    if (this.state.delete === true) {
      this.setState(
        {
          delete: false,
        },
        () => console.log(this.state.delete)
      );
    }

    if (e.target.value === "Dress") {
      let DressArray = this.props.allproducts.filter((p) => {
        return p.categoryName === "Dress";
      });
      console.log(DressArray);
      this.setState({
        products: DressArray,
        category: "Dress",
      });
    }
    if (e.target.value === "Kids") {
      let KidsArray = this.props.allproducts.filter((p) => {
        return p.categoryName === "Kids";
      });
      console.log(KidsArray);
      this.setState({
        products: KidsArray,
        category: "Kids",
      });
    }
    if (e.target.value === "Electronics") {
      let ElectronicsArray = this.props.allproducts.filter((p) => {
        return p.categoryName === "Electronics";
      });
      console.log(ElectronicsArray);
      this.setState({
        products: ElectronicsArray,
        category: "Electronics",
      });
    }
  };

  updateButtonClicked = (id) => {
    this.props.history.push({
      pathname: "/update",
      state: id,
    });
  };

  render() {
    return (
      <div>
        <div class="headernot">
        <img style={{width:'60px',height:'60px',borderRadius:'60px'}} src={logo}/>
          <a href="#default" class="logo">
            Inventory.com
          </a>

          <div class="headernot-right">
            <a>
              {" "}
              <input className="searchpro"
               
                type="search"
                placeholder="Search here"
                onChange={this.getSearch}
              />
            </a>

            <a href="#home">{this.props.count}Products</a>

            <NavLink to="/all">Home</NavLink>
            <NavLink to="/add">Add New Product</NavLink>
          </div>
        </div>

        <div style={{ width: "300px" }}>
          <select onChange={this.CategoryChange} id="category" name="category">
            <option placeholder="Category">Search by Category</option>
            <option value="Electronics">Electronics</option>
            <option value="Dress">Dress</option>
            <option value="Kids">Kids</option>
          </select>
        </div>

        <div
          style={{ marginLeft: "300px", width: "300px", marginTop: "-46px" }}
        >
          <select onChange={this.PriceChange} id="price" name="price">
            <option placeholder="Price">Search by Price</option>
            <option value="Below $50">Below $50</option>
            <option value="Above $50">Above$50</option>
            <option value="Above $100">Above $100</option>
          </select>
        </div>

        <div style={{ color: "white", marginTop: "60px" }}>
          <div style={{ overflowX: "auto" }}>
            <table>
              <tr>
                <th>Product Name</th>
                <th>Product Description</th>
                <th>Price</th>
                <th>Category</th>
                <th>In Stock</th>
                <th>Quantity</th>
                <th>Image</th>
                <th>UpdateAction</th>
                <th>DeleteAction</th>
              </tr>

              {this.state.delete &&
                this.props.allproducts.map((product) => {
                  return (
                    <tr>
                      <td>{product.productName}</td>
                      <td>{product.productDescription}</td>
                      <td>{product.productPrice}</td>
                      <td>{product.categoryName}</td>
                      <td>{product.inStock}</td>
                      <td>{product.quantity}</td>
                      <td>
                        <img
                          style={{
                            height: "100px",
                            width: "100px",
                            borderRadius: "100px",
                          }}
                          src={product.productImage}
                        />
                      </td>
                      <td>
                        <button
                          onClick={this.updateButtonClicked.bind(
                            this,
                            product.id
                          )}
                        >
                          Update
                        </button>
                      </td>
                      <td>
                        <button
                          onClick={this.deleteClicked.bind(this, product.id)}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  );
                })}

              {!this.state.delete &&
                this.state.products.map((product) => {
                  return (
                    <tr>
                      <td>{product.productName}</td>
                      <td>{product.productDescription}</td>
                      <td>{product.productPrice}</td>
                      <td>{product.categoryName}</td>
                      <td>{product.inStock}</td>
                      <td>{product.quantity}</td>
                      <td>
                        <img
                          style={{
                            height: "100px",
                            width: "100px",
                            borderRadius: "100px",
                          }}
                          src={product.productImage}
                        />
                      </td>
                      <td>
                        <button
                          onClick={this.updateButtonClicked.bind(
                            this,
                            product.id
                          )}
                        >
                          Update
                        </button>
                      </td>
                      <td>
                        <button
                          onClick={this.deleteClicked.bind(this, product.id)}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  );
                })}
            </table>
          </div>

          {/* <Table striped bordered hover variant="dark">
          <thead>
            <tr>
            <th colSpan="4">Product Name</th>
            <th  colSpan="6">Product Description</th>
            <th  colSpan="3">Price</th>
            <th  colSpan="3">Category</th>
            <th  colSpan="3">In Stock</th>
            <th  colSpan="3">Quantity</th>
            <th  colSpan="3">Image</th>
            <th  colSpan="6">Actions</th>

            
            </tr>

          </thead>
        
          
          <tbody>
          
            {this.props.allproducts.map((product) => {
              return (
                <tr>
                  <td  colSpan="4">{product.productName}</td>
                  <td  colSpan="6">{product.productDescription}</td>
                  <td  colSpan="3">{product.productPrice}</td>
                  <td  colSpan="3">{product.categoryName}</td>
                  <td  colSpan="3">{product.inStock}</td>
                  <td  colSpan="3">{product.quantity}</td>
                  <td  colSpan="3">
                    <img
                      style={{
                        height: "100px",
                        width: "100px",
                        borderRadius: "100px",
                      }}
                      src={product.productImage}
                    />
                  </td>
                  <td  colSpan="6">
                    <button
                      onClick={this.updateButtonClicked.bind(this, product.id)}
                    >
                      Update
                    </button>
                  </td>
                  <td>
                    <button
                      onClick={this.props.deleteButtonClicked.bind(
                        this,
                        product.id
                      )}
                    >
                      Delete
                    </button>
                  </td>
                 
                </tr>
              

             

               
              );
            
            })}
          </tbody>
        </Table> */}
        </div>
      </div>
    );
  }
}

function mapStatesToProps(store) {
  console.log(store);
  return { allproducts: store.allproducts,
  count:store.allproducts.length };
}

function deleteAction(dispatch) {
  return bindActionCreators(
    {
      deleteButtonClicked: deleteButtonClicked, //matching action defined in actioncreator with props of the comp
    },
    dispatch
  );
}

export default connect(mapStatesToProps, deleteAction)(AllProducts);
