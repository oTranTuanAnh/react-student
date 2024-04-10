import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {Field, Form, Formik} from "formik";
import axios from "axios";
import './create.css'

export default function CreateStudent(){
    const [student,  setStudent] = useState({})
    const navigate = useNavigate();
    return(
        <>
            <Formik initialValues={student} onSubmit={(values)=>{
                axios.post(" http://localhost:3000/students", values).then(
                    res =>{
                        alert("Them moi thanh cong!!!");
                        navigate("/")
                    }
                )
            }}>
                <Form className="form-create g-3">
                    <h1>Create new student</h1>
                    <div className="col-md-12">
                        <label htmlFor="name" className="form-label">Name</label>
                        <Field type="text" className="form-control form-create-input" id="name" name="name"></Field>
                    </div>
                    <div className="col-md-12">
                        <label htmlFor="description" className="form-label">Description</label>
                        <Field type="text" className="form-control form-input" id="description"
                               name="description"></Field>
                    </div>
                    <div className="col-md-12">
                        <label htmlFor="score" className="form-label">Score</label>
                        <Field type="number" className="form-control form-input" id="score" name="score"></Field>
                    </div>
                    <div className="col-12">
                        <button type="submit" className="btn btn-primary btn-save">Save
                        </button>
                    </div>
                </Form>
            </Formik>

        </>
    )
}