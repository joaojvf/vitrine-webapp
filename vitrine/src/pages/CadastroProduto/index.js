import React from "react";
import { withRouter } from "react-router-dom";

export default class CadastroProduto extends React.Component {
  constructor() {
    super();
  }

  onSubmit = (event) => {
    alert("Enviou o form");
  };

  onChange = (event) => {
    const name = event.target.name;
    this.setState({ [name]: event.target.value });
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
                <label className="col-form-label" for="title">
                  Título do Produto
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Informe o nome do produto"
                  id="title"
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <label className="col-form-label" for="exampleSelect1">
                  Categoria
                </label>
                <select className="form-control">
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
            <label className="col-form-label" for="exampleTextarea">
              Descrição do Produto
            </label>
            <textarea
              className="form-control"
              id="exampleTextarea"
              rows="3"
            ></textarea>
          </div>

          <div className="row">
            <div className="col-md-6">
              <div className="form-group">
                <label className="col-form-label" for="price">
                  Preço
                </label>
                <input
                  type="number"
                  min="1"
                  step="any"
                  className="form-control"
                  id="price"
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
              <label className="col-form-label" for="inputGroupFile02">
                  Imagem
                </label>
                <div className="input-group">
                  <div className="custom-file">
                    <input
                      type="file"
                      className="custom-file-input"
                      id="inputGroupFile02"
                    />
                    <label className="custom-file-label" for="inputGroupFile02">
                      Escolha um arquivo.
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
