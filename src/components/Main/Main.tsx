import Presentation from "./Presentation/Presentation";
import "./Main.css";
import Desc from "./Desc/Desc";

const Main = () => {
  return (
    <main className="main">
      <div className="container main__inner">
        <Presentation />
        <Desc />
      </div>
    </main>
  );
};

export default Main;
