import {useEffect, useState} from "react";
import axios from "axios";
import './ListStudents.css'
import {Link, Outlet} from "react-router-dom";

export default function ListStudents(){
    const [students, setStudents] = useState([]);
    const [isDelete,setIsDelete] = useState(false);
    useEffect(()=>{
        axios.get("http://localhost:3000/students").then(
            res =>{
                setStudents(res.data)
            }
        )
    },[isDelete])
    const handleDelete = (id)=>{
        axios.delete("http://localhost:3000/students/"+id).then(res=>{
            alert("Xoa thanh cong!!!!");
            setIsDelete(!isDelete);
        }
        )

    }
    return(
        <>
            <div className="list-students">
                <h1>List Students</h1>
                <Link to={'create'}>
                    <button type="button" className="btn btn-secondary add-student">Add new student</button>
                </Link>

                <table className="table">
                    <thead>
                    <tr>
                        <th scope="col">STT</th>
                        <th scope="col">Name</th>
                        <th scope="col">Description</th>
                        <th scope="col">Score</th>
                        <th scope="col">Action</th>
                    </tr>
                    </thead>
                    <tbody className="table-group-divider">
                    {
                        students.map(((item, index) => (
                            <tr key={index}>
                                <th scope="row">{index + 1}</th>
                                <td>{item.name}</td>
                                <td>{item.description}</td>
                                <td>{item.score}</td>
                                <td>
                                    <Link to={"/students/edit/"+item.id}><button type="button" className="btn btn-secondary">Edit</button></Link>
                                    <button type="button" className="btn btn-secondary"
                                            onClick={(e) => handleDelete(item.id)}>Delete
                                    </button>
                                </td>
                            </tr>))
                        )
                    }
                    </tbody>
                </table>
            </div>
        </>
    )
}