import {createBrowserRouter} from "react-router-dom"
import App from "./App"
import Favorite from "./component/favorite/favourite"
import MainBody from "./component/mainBody/mainBody"

const router = createBrowserRouter([
    {
        path:"/",
        element:<App/>,
        children:[
            {
                path:'/',
                element:<MainBody/>
            },
            {
                path:'/favorite',
                element:<Favorite/>
            }
        ]
    }
])

export default router;