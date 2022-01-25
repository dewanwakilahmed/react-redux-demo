import { useState } from "react";
import { buyCake } from "../redux";
import { connect } from "react-redux";

const NewCakeContainer = (props) => {
  const [number, setNumber] = useState(1);
  return (
    <div>
      <h1>New Cake Container</h1>
      <h2>Number of Cakes - {props.numOfCakes}</h2>
      <input
        type="text"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <button onClick={() => props.buyCake(number)}>
        Buy {number} Cake(s)
      </button>
    </div>
  );
};

const mapStatesToProps = (state) => {
  return {
    numOfCakes: state.cake.numOfCakes,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyCake: (number) => dispatch(buyCake(number)),
  };
};

export default connect(mapStatesToProps, mapDispatchToProps)(NewCakeContainer);
