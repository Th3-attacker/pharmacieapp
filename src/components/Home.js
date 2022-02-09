import React from 'react'
import {NavLink} from 'react-router-dom'

const Home = () => (
    <>
        <div className="text-center d-flex justify-content-around pt-5 pb-5">
                <NavLink to="/medocs"><button type="button" class="btn btn-lg btn-primary" style={{padding: '1rem 1.5rem',fontSize: '1.5rem'}}>MEDICAMENTS</button></NavLink>
                <NavLink to="/pharmas"><button type="button" class="btn  btn-lg btn-success" style={{padding: '1rem 1.5rem',fontSize: '1.5rem'}}>PHARMACIES</button></NavLink>
        </div>
        <div id="carouselExampleControls" className="carousel slide container" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                <img src="./images/slide3.jpg" className="d-block w-100" alt="..."/>
                </div>
                <div className="carousel-item">
                <img src="./images/slide1.webp" className="d-block w-100" alt="..."/>
                </div>
                <div className="carousel-item">
                <img src="./images/slide2.jpg" className="d-block w-100" alt="..."/>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    </>
)
export default Home;