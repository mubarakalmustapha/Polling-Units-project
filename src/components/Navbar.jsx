import { Link} from "react-router-dom"

function Navbar(){
    return(
        <>
<nav style={{
    cursor:"pointer",
    paddingLeft:10,
    height: 60
}} className="navbar bg-light">
  <div>
    <Link to="/" className="navbar-brand mb-0 h1">List Of Polling Units</Link>
    <Link to="/total" className="navbar-brand ">Total Of Polling Units</Link>
    <Link to="/add" className="navbar-brand ">Add Polling</Link>
  </div>
</nav>
        </>
    )
}

export default Navbar