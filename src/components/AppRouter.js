import { Routes, Route } from "react-router-dom"
import Registration from "../pages/Registration";
import Login from "../pages/Login";
import Home from '../pages/Home'
import Profile from '../pages/Profile'
import { Counter } from "../pages/Counter";

const AppRouter = ({ isLogged, setIsLogged }) => {
    return isLogged ?
        (
            <Routes>
                <Route path='/' element={<Profile />} />
                <Route path='/profile' element={<Profile />} />
                <Route path='/home' element={<Home />} />
                <Route path='*' element={<Profile />} />
            </Routes>
        )
        :
        (
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/counter' element={<Counter />} />
                <Route path='/login' element={<Login setIsLogged={setIsLogged} />} />
                <Route path='/registration' element={<Registration />} />
                <Route path='/home' element={<Home />} />
                <Route path='*' element={<Home />} />
            </Routes>
        );
}

export default AppRouter;