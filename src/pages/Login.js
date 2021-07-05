import React from 'react';
import {AvField,AvForm} from 'availity-reactstrap-validation';
import {connect} from "react-redux";
import {signIn} from "../redux/actions/loginAction";

const Login = (props) => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-4 offset-4 mt-4">
                    <div className="card bg-light">
                        <div className="card-body">
                            <AvForm onValidSubmit={props.signIn}>
                                <AvField
                                type="text"
                                name="phoneNumber"
                                label="Phone Number"
                                required
                                errorMessage="Telefon nomer kirit !"
                                />
                                <AvField
                                type="password"
                                name="password"
                                label="Password"
                                required
                                errorMessage="Password kirit !"
                                />
                                <button type="submit" className="btn btn-success mt-3">login</button>
                            </AvForm>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default connect(null,{signIn})(Login)