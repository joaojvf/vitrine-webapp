const ACTIONS = {
    SHOW: "PRODUCT_SHOWER",
    ADD: "PRODUCT_ADD",
    REMOVE: "PRODUCT_REMOVE",
  };
  
export function save(product){
    return dispatch => {
        dispatch([
            {
                type: ACTIONS.ADD,
                product: "monta o produto aqui"

            }
        ])
    }
}