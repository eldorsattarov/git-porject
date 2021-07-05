import React from 'react';
import {Modal,ModalBody,ModalFooter,ModalHeader} from "reactstrap";
import {connect} from "react-redux";
import {loginReducer} from "../redux/reducers/loginReducer";
// import {changeModal} from "../redux/reducers/loginReducer";
import {updateState} from "../redux/actions/myAction";

const MyIdea = (props) => {
    return (
        <div>
           <div className="container">
               <div className="row">
                   <div className="col-12 text-center mt-4">
                       <h1>This is MyIdea Page</h1>
                       <button type="button" className="btn btn-success mt-3" onClick={
                           ()=>{props.updateState({modalOpen: true})}
                       }>Open Modal</button>
                   </div>
               </div>
           </div>
            <Modal isOpen={props.modalOpen} toggle={()=>{props.updateState({modalOpen:false})}}>
                <ModalHeader>
                    <h3>This is Modal</h3>
                </ModalHeader>
                <ModalBody>

                </ModalBody>
                <ModalFooter>
                    <button type="button" className="btn btn-danger d-block ms-auto" onClick={
                        ()=>{props.updateState({modalOpen:false})}
                    }>close</button>
                </ModalFooter>
            </Modal>
        </div>
    );
};

const  mapStateToProps = (state) =>{
    return{
        modalOpen: state.my.modalOpen
    }
}

export default connect(mapStateToProps,{updateState})(MyIdea)