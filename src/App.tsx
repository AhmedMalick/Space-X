import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import Home from "./Pages/Home/Home";
import Launches from "./Pages/Launches";
import LaunchDetails from "./Pages/LaunchDetails";
import Events from "./Pages/Events/";
import Rockets from "./Pages/Rockets/";
import Footer from "./Components/Footer/Footer";
import notificationConfig from "./firebase";

const App = () => {

  notificationConfig();

  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/launches" element={<Launches />} />
          <Route path="/launch/:id" element={<LaunchDetails />} />
          <Route path="/events" element={<Events />} />
          <Route path="/rockets" element={<Rockets />} />
          <Rockets />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
