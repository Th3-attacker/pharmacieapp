import React , { Component} from 'react'
import {NavLink} from 'react-router-dom'
import axios from 'axios'

class Pharmacies extends Component{
   
    constructor(props){
        super(props);
        this.state = {
            items: [],
            isLoad:true,
        }
    }
    
    async componentDidMount() {
       const res = await axios.get('http://localhost:5500/pharmas')
       if(res.status == 200)
       {
           this.setState({
                isLoad: false,   
                items:res.data,
           })
        }
    }
    
render () {
        return (
            <>
                <div className="card">
                    <div className="card-header">
                        <h1 className="card-title text-center">Listes des Pharmacies</h1>
                    </div>
                    <div className="card-body">
                            <div className="d-flex justify-content-end">
                                <NavLink to="/add-pharma"><button type="button" className="btn btn-primary">Add New</button></NavLink>
                            </div>
                        <table className="table">  
                            <thead>
                            <tr>
                                <th scope="col">name-fr</th>
                                <th scope="col">name_ar</th>
                                <th scope="col">adress_fr</th>
                                <th scope="col">adress_ar</th>
                                <th scope="col">tel</th>
                                <th scope="col">id_wilaya</th>
                                <th scope="col">id_moughataa</th>
                                <th scope="col">lati</th>
                                <th scope="col">longt</th>
                                <th scope="col">wilaya</th>
                                <th scope="col">wilaya_ar</th>
                                <th scope="col">moughataa</th>
                                <th scope="col">moughataa_ar</th>
                            </tr>
                            </thead>
                            <tbody>
                            {this.state.items.map(item=>(
                                    <tr>
                                        <td>{item.name_fr}</td>
                                        <td>{item.name_ar}</td>
                                        <td>{item.adress_fr}</td>
                                        <td>{item.adress_ar}</td>
                                        <td>{item.tel}</td>
                                        <td>{item.id_wilaya}</td>
                                        <td>{item.id_moughataa}</td>
                                        <td>{item.lati}</td>
                                        <td>{item.longt}</td>
                                        <td>{item.wilaya}</td>
                                        <td>{item.wilaya_ar}</td>
                                        <td>{item.moughataa}</td>
                                        <td>{item.moughataa_ar}</td>
                                    </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </>
        );
    }
}
export default Pharmacies;