import CovidInfoContent from "./component/content/CovidInfoContent";
import Footer from "./component/footer/Footer";
import TopNavbar from "./component/header/TopNavbar";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="base App">
      <TopNavbar />
      <Switch>
        <Route exact path='/'>
          <CovidInfoContent />
        </Route>
        <Route exact path='/provinsi'>
            <h1>ini provinsi</h1>
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;