import React from "react";
import { withRouter } from "react-router-dom";

const initialState = {
  title: "",
  description: "",
  price: 0,
  category: "",
  image: "",
  sucess: false,
};

class CadastroProduto extends React.Component {
  state = initialState;

  constructor() {
    super();
  }

  onSubmit = () => {
    const product = {
      title: this.state.title,
      description: this.state.description,
      price: this.state.price,
      image: this.state.image,
      category: this.state.category,
    };

    console.log("Produto salvo com sucesso", product);
    this.cleanFields();
  };

  onChange = (event) => {
    const nameOfState = event.target.name;

    if (nameOfState === "image") {
      this.setState({ [nameOfState]: event.target.files[0] });
    }

    this.setState({ [nameOfState]: event.target.value });
  };

  cleanFields = () => {
    this.setState(initialState);
  };

  render() {
    return (
      <div className="container p-5 ml-50">
        <div className="row">
          <h3 className="mx-auto font-weight-bold">Novo Produto</h3>
        </div>
        <form>
          <div className="row">
            <div className="col-md-6">
              <div className="form-group">
                <label className="col-form-label" htmlFor="title">
                  Título do Produto
                </label>
                <input
                  name="title"
                  type="text"
                  className="form-control"
                  placeholder="Informe o nome do produto"
                  id="title"
                  value={this.state.title}
                  onChange={this.onChange}
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <label className="col-form-label" htmlFor="exampleSelect1">
                  Categoria
                </label>
                <select className="form-control" onChange={this.onChange} name="category">
                  <option disabled selected value>
                    -- Selecione uma categoria --
                  </option>
                  <option>Blusa</option>
                  <option>Calça</option>
                  <option>Short</option>
                  <option>Tenis</option>
                </select>
              </div>
            </div>
          </div>

          <div className="row p-3">
            <label className="col-form-label" htmlFor="exampleTextarea">
              Descrição do Produto
            </label>
            <textarea
              name="description"
              className="form-control"
              id="exampleTextarea"
              rows="3"
              value={this.state.description}
              onChange={this.onChange}
            ></textarea>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="form-group">
                <label className="col-form-label" htmlFor="price">
                  Preço
                </label>
                <input
                  name="price"
                  type="number"
                  min="1"
                  step="any"
                  className="form-control"
                  id="price"
                  value={this.state.price}
                  onChange={this.onChange}
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <label className="col-form-label" htmlFor="inputGroupFile02">
                  Imagem
                </label>
                <div className="input-group">
                  <div className="custom-file">
                    <input
                      name="image"
                      type="file"
                      className="custom-file-input"
                      id="inputGroupFile02"
                      value={this.state.image}
                      onChange={this.onChange}                      
                    />
                    <label className="custom-file-label" htmlFor="inputGroupFile02">
                      {this.state.image? this.state.image : "Escolha um arquivo" }
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row p-3 mt-3">
            <button
              type="button"
              className="btn btn-success"
              onClick={this.onSubmit}
            >
              Cadastrar
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(CadastroProduto);
