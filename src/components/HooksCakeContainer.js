import { useSelector } from "react-redux";

const HooksCakeContainer = () => {
  const numOfCakes = useSelector((state) => state.numOfCakes);
  return (
    <div>
      <h2>Num of Cakes - {numOfCakes}</h2>
      <button>Buy Cake</button>
    </div>
  );
};

export default HooksCakeContainer;
