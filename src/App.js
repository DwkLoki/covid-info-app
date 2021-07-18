import CovidInfoContent from "./component/content/CovidInfoContent";
import Footer from "./component/footer/Footer";
import TopNavbar from "./component/header/TopNavbar";

function App() {
  return (
    <div className="base App">
      <TopNavbar />
      <CovidInfoContent />
      <Footer />
    </div>
  );
}

export default App;