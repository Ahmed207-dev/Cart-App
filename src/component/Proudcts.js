import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchitem } from "../slices/Proudcts-slice";
import "./Proudct.css";
import { addtocart } from "../slices/Cart-slice";
function Proudcts() {
  let proudcts = useSelector((state) => state.proudcts);
  let dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchitem());
  }, [dispatch]);
  return (
    <div className="container p-2 m-2">
      <div className="row">
        {proudcts.map((proudct) => (
          <div key={proudct.id} className="col-3">
            <div className="card">
              <img src={proudct.image} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{proudct.title}</h5>
                <p className="card-text"> Price:{proudct.price}$</p>
                <button
                  onClick={() => {
                    dispatch(addtocart(proudct));
                  }}
                  className="btn btn-primary"
                >
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Proudcts;
