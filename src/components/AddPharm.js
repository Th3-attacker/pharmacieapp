import React from 'react'
import axios from 'axios'

class AddPharm extends React.Component{
    state = {
        name_fr: '',
        name_ar: '',
        adress_fr: '',
        adress_ar: '',
        id: '',
        id_wilaya: '',
        id_moughataa: '',
        lati: '',
        longt: '',
        wilaya: '',
        wilaya_ar: '',
        moughataa: '',
        moughataa_ar: '',
      }
    
      handleChange = event => {
        this.setState({ name_fr: event.target.value });
        this.setState({ name_ar: event.target.value });
        this.setState({ adress_fr: event.target.value });
        this.setState({ adress_ar: event.target.value });
        this.setState({ id_wilaya: event.target.value });
        this.setState({ id_moughataa: event.target.value });
        this.setState({ lati: event.target.value });
        this.setState({ longt: event.target.value });
        this.setState({ wilaya: event.target.value });
        this.setState({ wilaya_ar: event.target.value });
        this.setState({ moughataa: event.target.value });
        this.setState({ moughataa_ar: event.target.value });
      }
    
      handleSubmit = event => {
        event.preventDefault();
    
        const pharmas= {
          name_fr:this.state.name_fr,
          name_ar:this.state.adress_ar,
          adress_fr:this.state.adress_fr,
          tel:this.state.tel,
          id_wilaya:this.state.id_wilaya,
          id_moughataa:this.state.id_moughataa,
          lati:this.state.lati,
          longt:this.state.longt,
          wilaya:this.state.wilaya,
          wilaya_ar:this.state.wilaya_ar,
          moughataa:this.state.moughataa,
          moughataa_ar:this.state.moughataa_ar
        };
             const res = axios.post('http://localhost:5500/pharmas',{pharmas})
            console.log(res);
            console.log(res.data)
      }
    
    render(){
        return (
            <>
                <div className="card container">
                    <div className="card-header">
                        <h1 className="card-title text-center">Add New Pharmacie</h1>
                    </div>
                    <div className="card-body ">
                        <form onSubmit={this.handleSubmit}>
                            <div className="row">
                                <div className="form-group col">
                                <label >name_fr</label>
                                <input type="text" className="form-control" id="inputEmail4" onChange={this.handleChange}/>
                                </div>
                                <div className="form-group col">
                                <label >name_ar</label>
                                <input type="text" className="form-control" id="inputPassword4" onChange={this.handleChange}/>
                                </div>
                            </div>
                            <div className="row mt-5">
                            <div className="form-group col">
                                <label >adress_fr</label>
                                <input type="text" className="form-control" id="inputPassword4" onChange={this.handleChange}/>
                                </div>
                                <div className="form-group col">
                                <label >adress_ar</label>
                                <input type="text" className="form-control" id="inputEmail4" onChange={this.handleChange}/>
                                </div>
                                <div className="form-group col">
                                <label >tel</label>
                                <input type="text" className="form-control" id="inputPassword4" onChange={this.handleChange}/>
                                </div>
                            </div>
                            <div className="row mt-5">
                            <div className="form-group col">
                                <label >id_wilaya</label>
                                <input type="text" className="form-control" id="inputPassword4" onChange={this.handleChange}/>
                                </div>
                                <div className="form-group col">
                                <label >id_moughataa</label>
                                <input type="text" className="form-control" id="inputEmail4" onChange={this.handleChange}/>
                                </div>
                                <div className="form-group col">
                                <label >lati</label>
                                <input type="text" className="form-control" id="inputPassword4" onChange={this.handleChange}/>
                                </div>
                                <div className="form-group col">
                                <label >longt</label>
                                <input type="text" className="form-control" id="inputPassword4" onChange={this.handleChange}/>
                                </div>
                            </div>
                            <div className="row mt-5">
                                <div className="form-group col">
                                <label >wilaya</label>
                                <input type="text" className="form-control" id="inputEmail4" onChange={this.handleChange}/>
                                </div>
                                <div className="form-group col">
                                <label >wilaya_ar</label>
                                <input type="text" className="form-control" id="inputPassword4" onChange={this.handleChange}/>
                                </div>
                                <div className="form-group col">
                                <label >moughataa</label>
                                <input type="text" className="form-control" id="inputPassword4" onChange={this.handleChange}/>
                                </div>
                                <div className="form-group col">
                                <label >moughataa_ar</label>
                                <input type="text" className="form-control" id="inputPassword4" onChange={this.handleChange}/>
                                </div>
                            </div>
                            <div className="card-footer text-center">
                                <button type="submit" className="btn btn-primary">Valide</button>
                            </div>
                        </form>
                </div>
                </div>
    </>
   )
    }
 }
export default AddPharm;