import './App.css'
import {Route,createBrowserRouter,createRoutesFromElements,RouterProvider} from 'react-router-dom'
import Home from './home'
import {Layout} from './layout'
import About from './about'
import Vans,{loader as VansLoader} from './vans'
import Detail,{loader as DetailLoader} from './detail'
import LogIn,{action as loginAction} from './register/login'
import HostLayout from './Host/hostLayout'
import Dashboard from './Host/dashboard'
import Review from './Host/review'
import Van,{loader as hostLoader} from './Host/vans'
import Income from './Host/income'
import VanDe,{loader as VanDeLoader} from './Host/vande'
import DetailVan from './Host/detailHostVan/detail'
import Pricing from './Host/detailHostVan/pricing'
import Photos from './Host/detailHostVan/photos'

const router=createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<Layout/>} >
  <Route index element={<Home/>}/>
  <Route path="about" element={<About/>}  />
  <Route path="login" action={loginAction} element={<LogIn/>}/>
  <Route path="vans" element={<Vans/>} loader={VansLoader} />
  <Route path="vans/:id" element={<Detail/>} loader={ DetailLoader} />
  
  <Route path="host" element={<HostLayout />} 
 
     >
    <Route index  element={<Dashboard/>}  />
    <Route path="income" element={<Income/>}  />
    <Route path="van" element={<Van/>} loader={hostLoader} />
    <Route path="van/:id" element={<VanDe/>} loader={VanDeLoader} >
      <Route index element={<DetailVan/>} />
      <Route path="pricing" element={<Pricing/>} />
      <Route path="photos" element={<Photos/>}/>
    </Route>
    <Route path="review" element={<Review/>}  />
  </Route>
  <Route path="*" element={<h1>Page not found</h1>}/>

</Route>
))
export default function App(){
  return (
    <>
      <div className="app-size">

       <RouterProvider router={router} />
        
      </div>
    </>
  )
}