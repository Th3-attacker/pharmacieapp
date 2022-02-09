import React from 'react'
import axios from 'axios'
class EditMedoc extends React.Component {
    editMedoc(){
    }
    render() {
        return (
            <>
                <div className="card container">
                    <div className="card-header">
                        <h1 className="card-title text-center">Modifier une Medicament</h1>
                    </div>
                    <div className="card-body ">
                        <form>
                            <div className="row">
                                <div class="form-group col">
                                <label for="inputEmail4">name</label>
                                <input type="email" class="form-control" id="inputEmail4"/>
                                </div>
                            </div>
                            <div className="row mt-5">
                                <div class="form-group col">
                                <label for="inputPassword4">forme_dosage</label>
                                <input type="password" class="form-control" id="inputPassword4"/>
                                </div>
                            </div>
                            <div className="row mt-5">
                                <div class="form-group col">
                                <label for="inputPassword4">pp</label>
                                <input type="password" class="form-control" id="inputPassword4"/>
                                </div>
                            </div>
                        </form>
                </div>
                <div className="card-footer text-center">
                    <button className="btn btn-lg btn-primary">Edite</button>
                </div>
                </div>
            </>

        )
    }
}
export default EditMedoc;