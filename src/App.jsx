import {Routes, Route} from "react-router-dom";
import Landing_page from "./Components/Landing_page.jsx";
import Demander_devis from "./Components/demander_devis.jsx";
import Demo from "./Components/Demo.jsx";
import Dashboard from "./Components/dashboard.jsx";
const App = () => {
  return (
    <>
        <Routes>
            <Route path="/" element={<Landing_page/>} />
            <Route path="/demander_devis" element={<Demander_devis/>} />
            <Route path="/Demo" element={<Demo/>} />
            <Route path="/Dashboard" element={<Dashboard/>} />
           
        </Routes>
    </>
  )
}

export default App;