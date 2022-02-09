import React from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'

class Medocs extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            items: [],
            isLoad:true,
        }
    }
    
    async componentDidMount() {
       const res = await axios.get('http://localhost:5500/medocs')
       if(res.status == 200)
       {
           this.setState({
                isLoad: false,   
                items:res.data,
           })
        }
    }
render(){
    return (
    <>
        <div className="card container">
            <div className="card-header">
                <h1 className="card-title text-center">Listes des Medicaments</h1>
            </div>
            <div className="card-body">
                    <div className=" mt-2 mb-2 d-flex justify-content-end">
                            <input type="search" id="search" placeholder="search" className="form-control" />
                            <button  type="button" className="btn btn-outline-primary"> Search </button>
                    </div>
                <table className="table">  
                    <thead>
                    <tr>
                        <th scope="col">name</th>
                        <th scope="col">forme_dosage</th>
                        <th scope="col">pp</th>
                        <th scope="col">Action</th>
                    </tr>
                    </thead>
                    <tbody>
                        {this.state.items.map(item =>
                        <tr>
                            <td>{item.name}</td>
                            <td>{item.forme_dosage}</td>
                            <td>{item.pp}</td>
                            <td>
                                <Link to="/edit-medoc"><button type="button" className="btn btn-small btn-success">Modifier</button></Link>
                                <button type="button" className="btn btn-small btn-danger">Supprimer</button>
                            </td>
                        </tr>
                            )}
                    </tbody>
                </table>
            </div>
        </div>
    </>
    )
}
}

export default Medocs;