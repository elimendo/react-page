import { Link, useLocation } from "react-router-dom"
import "./nav.css"


function Nav(){
    let {pathname} = useLocation()
    console.log(pathname)
return <>
<div>
    <Link to="/"> About Me </Link>
    <Link to="/contact"> Contact </Link>
    <Link to="/portfolio"> portfolio </Link>
    <Link to="/resume"> Resume </Link>
</div>
<div>
    <h1> Elias Mendoza</h1>
</div>

</>
}
export default Nav