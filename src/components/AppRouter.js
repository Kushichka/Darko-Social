import { Routes, Route } from "react-router-dom"
import Chat from "../pages/Chat";
import Login from "../pages/Login";

const AppRouter = ({ user }) => {
    return user ?
        (
            <Routes>
                <Route path='/' element={<Chat />} />
                <Route path='/Chat' element={<Chat />} />
                <Route path='*' element={<Chat />} />
            </Routes>
        )
        :
        (
            <Routes>
                <Route path='/' element={<Login />} />
                <Route path='/login' element={<Login />} />
                <Route path='*' element={<Login />} />
            </Routes>
        )
}

export default AppRouter;