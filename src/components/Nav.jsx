import { Link, useLocation } from "react-router-dom"
import "./nav.css"


function Nav(){
    let {pathname} = useLocation()
    console.log(pathname)
return <>
<div>
    <Link to="/" className={pathname===("/") && "active"}> About Me </Link>
    <Link to="/contact" className={pathname.startsWith("/contact") && "active"}> Contact </Link>
    <Link to="/portfolio" className={pathname.startsWith("/portfolio") && "active"}> portfolio </Link>
    <Link to="resume" className={pathname.startsWith("/resume") && "active"}> Resume </Link>
    
</div>

</>
}
export default Nav