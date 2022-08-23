import { Routes, Route } from "react-router-dom"
import Chat from "../pages/Chat";
import Login from "../pages/Login";

const AppRouter = () => {

    const user = false;

    return user ?
        (
            <Routes>
                <Route path='/' elemen={<Chat />} />
                <Route path='/Chat' elemen={<Chat />} />
                <Route path='*' element={<Chat />} />
            </Routes>
        )
        :
        (
            <Routes>
                <Route path='/' elemen={<Login />} />
                <Route path='/login' elemen={<Login />} />
                <Route path='*' element={<Login />} />
            </Routes>
        )
}
 
export default AppRouter;