import {useState,useEffect} from 'react';
import Axios from 'axios';
import {Link} from '@reach/router';

const Main = props => {
    const [dogs,setDogs] = useState([]);
    const [bounce,setBounce] = useState(false);

    useEffect(() => {
        Axios.get('http://localhost:8000/api/dogs')
            .then(res => setDogs(res.data.results))
            .catch(err => console.log(err));
    },[bounce])

    const bounceDoggie = (id,name) => {
        Axios.delete(`http://localhost:8000/api/dogs/destroy/${id}`)
            .then(res => {
                if(res.data.results){
                    alert(`You removed ${name} from the Disco, you Monster!!!`)
                    // creates state variable to re-render DOM
                    setBounce(!bounce);
                }
            })
            .catch(err => console.log(err))
    }

    return (
        <>
            <Link to="/new" >Add Disco Dog</Link>
            <table className="table table-hover col-6 mx-auto">
                <thead>
                    <tr>
                        <th>Dog</th>
                        <th>Actions Available</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        dogs.map((dog,i) => <tr key={i}>
                                                <td>
                                                    <Link to={`/details/${dog._id}`}>{dog.name}</Link>
                                                    
                                                </td>
                                                <td>
                                                    <Link className="btn btn-primary" to={`/edit/${dog._id}`} >Edit</Link>
                                                    <button 
                                                        onClick={() => bounceDoggie(dog._id,dog.name)}
                                                        className="btn btn-danger"
                                                    >Remove</button>
                                                </td>
                                            </tr>
                        )

                    }
                </tbody>
            </table>
        </>
    );
}

export default Main;