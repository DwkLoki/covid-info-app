import CovidInfoContent from "./component/content/CovidInfoContent";
import Footer from "./component/footer/Footer";
import TopNavbar from "./component/header/TopNavbar";
import { Switch, Route } from "react-router-dom";
import ListOfProvinsi from "./component/content/ListOfProvinsi";

function App() {
  return (
    <div className="base App">
      <TopNavbar />
      <Switch>
        <Route exact path='/'>
          <CovidInfoContent />
        </Route>
        <Route path='/provinsi'>
            <ListOfProvinsi />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;