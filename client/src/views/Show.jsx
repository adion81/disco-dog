import {useState,useEffect} from 'react';
import Axios from 'axios';
import {Link} from '@reach/router';
const Show = props => {
    const [dog,setDog] = useState(null);

    useEffect(() => {
        Axios.get(`http://localhost:8000/api/dogs/${props.id}`)
            .then(res => setDog(res.data.results))
            .catch(err => console.log(err))
    },[props])

    return (
        dog ? 
        <div className="card col-6 mx-auto">
            <Link to={`/edit/${props.id}`} >Edit</Link>
            <div className="card-body">
                <div className="card-title">{dog.name}</div>
                <h4 className="card-subtitle text-muted">{dog.breed}</h4>
                <p className="card-text">Age: {dog.age}</p>
                <p className="card-text">Favorite Move: {dog.favoriteMove}</p>
                <p className="card-text">{dog.isLit ? `${dog.name} is Lit`: 'Get better dance moves.'}</p>
            </div>
        </div> : <p>Loading . . .</p>
    );
}

export default Show;