import {useState,useEffect} from 'react';
import DogForm from '../components/DogForm';
import Axios from 'axios';
import { navigate } from '@reach/router';

const Edit = props => {
    const [dogForm,setDogForm] = useState({
        name:"",
        breed:"",
        age: 0,
        favoriteMove:"",
        isLit:false
    });
    const [errors,setErrors] = useState({
        name:"",
        breed:"",
        age:""
    });

    useEffect(() => {
        Axios.get(`http://localhost:8000/api/dogs/${props.id}`)
            .then(res => setDogForm(res.data.results))
            .catch(err => console.log(err))
    },[props])

    const handleInputChange = e => {
        if(e.target.type === "checkbox"){
            setDogForm({
                ...dogForm,
                isLit:!dogForm.isLit
            })
            return;
        }
        
        setDogForm({
            ...dogForm,
            [e.target.name]:e.target.value
        })
    }

    const handleUpdate = e => {
        e.preventDefault();
        Axios.put(`http://localhost:8000/api/dogs/update/${props.id}`,dogForm)
            .then(res => navigate(`/details/${props.id}`))
            .catch(err => console.log(err));
    }

    return (
        <div>
            <h2 className="text-center">Edit Dog:</h2>
            <DogForm 
                form={dogForm}
                errors={errors}
                handleInputChange={handleInputChange}
                submitValue="Edit"
                handleSubmit={handleUpdate}
            />
        </div>
    );



}

export default Edit;