import './App.css'
import ListMilMap from "./components/ListMilMap.jsx";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import MilestoneMapper from "./components/MilestoneMapper.jsx";
import RegisterComponent from "./components/RegisterComponent.jsx";
import LoginComponent from "./components/LoginComponent.jsx";

function App() {

    return (
        <>
            <BrowserRouter>
                <Header />

                <Routes>
                    {/* http://localhost:8080 */}
                    <Route path='/' element={<LoginComponent />}></Route>
                    {/* http://localhost:8080/milestone */}
                    <Route path='/milestone' element={<ListMilMap />}></Route>

                    {/* http://localhost:8080/add-milestone */}
                    <Route path='/add-milestone' element={<MilestoneMapper />}></Route>

                    {/* http://localhost:8080/update-milestone/1 */}
                    <Route path='/update-milestone/:id' element={<MilestoneMapper />}></Route>

                    {/* http://localhost:8080/register */}
                    <Route path='/register' element={ <RegisterComponent /> }></Route>

                    {/* http://localhost:8080/login */}
                    <Route path='/login' element={ <LoginComponent />}></Route>
                </Routes>

                <Footer />
            </BrowserRouter>
        </>
    )
}

export default App
