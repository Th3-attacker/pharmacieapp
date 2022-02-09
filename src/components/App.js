import React from 'react'
import Footer from "./Footer"
import Header from "./Header"
import EditMedoc from "./EditMedoc"
import Medocs from "./Medocs"
import AddPharm from "./AddPharm"
import Pharmacies from "./Pharmacies"
import Home from "./Home"
import {BrowserRouter,Route, Routes} from "react-router-dom"
class App extends React.Component {
    render() {
        return(
            <>
            <div>
                <Header/>
            </div>
                <main>
                    <div>
                        <section>
                            <BrowserRouter>
                                <Routes>
                                    <Route path="/" element={<Home/>}/>
                                    <Route path="/edit-medoc" element={<EditMedoc/>}/>
                                    <Route path="/pharmas" element={<Pharmacies/>}/>
                                    <Route path="/medocs" element={<Medocs/>}/>
                                    <Route path="/add-pharma" element={<AddPharm/>}/>
                                </Routes>
                            </BrowserRouter>
                        </section>
                    </div>
                </main>
                <Footer/>
            </>
        )
    }
}
export default App;