import { BrowserRouter, Routes, Route } from "react-router-dom"
import Header from "../components/Header/Header"
import AddRecipesPage from "../pages/AddRecipesPage/AddRecipesPage"
import ErrorPage from "../pages/ErrorPage/ErrorPage"
import LoginPage from "../pages/LoginPage/LoginPage"
import RecipeDetailPage from "../pages/RecipeDetailPage/RecipeDetailPage"
import RecipesListPage from "../pages/RecipesListPage/RecipesListPage"
import SignUpPage from "../pages/SignUpPage/SignUpPage"

const Router = () => {
    return(
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route index element={<RecipesListPage/>}/> 
                <Route path='login' element={<LoginPage/>}/>
                <Route path='signup' element={<SignUpPage/>}/>
                <Route path='addrecipes' element={<AddRecipesPage/>}/>
                <Route path='recipedetail/:id' element={<RecipeDetailPage/>}/>
                <Route path='*' element={<ErrorPage/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Router