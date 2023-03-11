import ConditionalRendering from "./components/ConditionalRendering";
import ShortRender from "./components/ShortRender";
import ShowHide from "./components/ShowHide";

function App() {
  return (
    <div className="d-flex flex-column align-items-center">
      <ConditionalRendering />
      <hr />
      <ShowHide />
      <hr />
      <ShortRender />
      <hr />
    </div>
  );
}

export default App;
