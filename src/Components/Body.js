import Browse from './Browse'
import Login from './Login'
import { createBrowserRouter } from 'react-router'
import { RouterProvider} from 'react-router-dom'
import Header from './Header'

const Body = () => {
 
    const appRouter = createBrowserRouter([
        {
            path: "/",
            element:  <Login />
        },
        {
            path: "/browse",
            element: <Browse />
        }

    ])


    
    return (
      
            
             <RouterProvider router={appRouter}>
             <Header />
            </RouterProvider>
       
    )
}

export default Body;
