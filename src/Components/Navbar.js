import React , {useEffect} from 'react'
import {Link,Outlet} from "react-router-dom";
import { useLocation } from 'react-router-dom';

export default function Navbar(props) {
    let location = useLocation();

    useEffect(() => {
        console.log("User is Currently  at : " + location.pathname);
    }, [location]);
  return (
    <>
    <nav className={`navbar fixed-top navbar-expand-lg navbar-${props.toggleType === "dark" ? "dark" : "light"} bg-${props.toggleType === "dark" ? "success" : "danger"}`}>
        <div className="container-fluid">
        <Link className="navbar-brand" to="/">iNotebook</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
            <Link className={`nav-link ${location.pathname === '/' ? 'active' : ''}`} aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
            <Link className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`} to="/about">About</Link>
            </li>
        </ul>
        
        <form className="d-flex">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
            <button className={`btn btn-outline-${props.toggleType === "dark" ? "light" : "dark"}`} type="submit">Search</button>
        </form>
        <div className="form-check form-switch mx-2 my-2">
                <label className={`form-check-label text-${props.toggleType === "dark" ? "dark" : "light"}`} htmlFor="flexSwitchCheckDefault">{props.toggleType} Mode</label>
                <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" onChange={props.toggle}/>
        </div>
        </div>
        </div>
    </nav>
    <Outlet/>
    </>
  )
}
