import { Routes, Route } from 'react-router-dom'
import HomePage from '../pages/HomePage/HomePage'
import DetailPage from '../pages/DetailPage/DetailPage'
import ErrorPage from '../pages/ErrorPage/ErrorPage'

const Router = () => {
    return(
        <Routes>
            <Route index element={<HomePage/>}/>
            <Route path='/detail/:id' element={<DetailPage/>}/>
            <Route path='*' element={<ErrorPage/>}/>
        </Routes>
    )
}

export default Router