import {useNavigate, useParams} from "react-router-dom";
import axios from "axios";
import {Field, Form, Formik} from "formik";
import {useEffect, useState} from "react";

export default function EditStudent(){
    const {id} = useParams();
    const navigate = useNavigate();
    const [student, setStudent] = useState({})
    useEffect(()=>{
        axios.get("http://localhost:3000/students/"+id).then(res=>{
            console.log(res.data);
            setStudent(res.data);
        })
    },[])
    return(
        <>
            <Formik initialValues={student} onSubmit={(values)=>{
                axios.put(" http://localhost:3000/students/"+student.id, values).then(
                    res =>{
                        alert("Update thanh cong!!!");
                        navigate("/")

                    }
                )
            }} enableReinitialize={true}>
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
                        <Field type="text" className="form-control form-input" id="score" name="score"></Field>
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