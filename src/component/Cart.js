import { useDispatch, useSelector } from "react-redux";
import "./Cart.css";
import { clear, deletecart } from "../slices/Cart-slice";
function Cart() {
  let proudcts = useSelector((state) => state.cart);
  console.log(proudcts);
  let total = proudcts.reduce((acc, proudct) => {
    return (acc += proudct.price * proudct.quantity);
  }, 0);
  let dispatch = useDispatch();
  return (
    <>
   <div className="container p-5">
  <h2 className="Total mb-2">Total cost : {total.toFixed(2)}</h2>
  <table className="table table-striped">
    <thead>
      <tr>
        <th>Id</th>
        <th>Title</th>
        <th>image</th>
        <th>price</th>
        <th>quantity</th>
        <th>actions</th>
      </tr>
    </thead>
    <tbody>
      {proudcts.map((proudct) => (
        <tr key={proudct.id}>
          <th>{proudct.id}</th>
          <th>{proudct.title}</th>
          <th>
            <img className="images" src={proudct.image} alt="" />
          </th>
          <th>{proudct.price}$</th>
          <th>{proudct.quantity}</th>
          <th>
            <button
              onClick={() => dispatch(deletecart(proudct))}
              className="btn btn-danger btn-sm"
            >
              Delete
            </button>
          </th>
        </tr>
      ))}
    </tbody>
  </table>
  <button onClick={() => dispatch(clear())} className="btn btn-primary mt-3">
    clear All
  </button>
</div>
    </>
  );
}
export default Cart;
