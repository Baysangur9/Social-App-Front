import {Route, Routes} from "react-router-dom";
import {Layout} from "./components";
import {Authorization, Home} from "./pages";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
      </Route>
      <Route path="/auth" element={<Authorization />} />
    </Routes>
  );
}

export default App;
