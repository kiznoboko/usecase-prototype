import {Routes, Route} from "react-router-dom";
import Landing_page from "./Components/Landing_page.jsx";
const App = () => {
  return (
    <>
        <Routes>
            <Route path="/" element={<Landing_page/>} />
           
        </Routes>
    </>
  )
}

export default App;