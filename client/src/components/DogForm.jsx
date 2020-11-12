const DogForm = props => {
    const {form,errors,handleInputChange,handleSubmit,submitValue} = props;
    return (
        <form className="col-6 mx-auto" onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="name">Name:</label>
                <input 
                    type="text" 
                    name="name" 
                    className="form-control"
                    value={form.name}
                    onChange={handleInputChange}
                />
                <span className="text-danger">{errors.name ? errors.name.message : ""}</span>
            </div>
            <div className="form-group">
                <label htmlFor="breed">Breed:</label>
                <input 
                    type="text" 
                    name="breed" 
                    className="form-control"
                    value={form.breed}
                    onChange={handleInputChange}
                />
                <span className="text-danger">{errors.breed ? errors.breed.message : ""}</span>
            </div>
            <div className="form-group">
                <label htmlFor="age">Age:</label>
                <input 
                    type="number" 
                    name="age" 
                    className="form-control"
                    value={form.age}
                    onChange={handleInputChange}
                />
                <span className="text-danger">{errors.age ? errors.age.message : ""}</span>
            </div>
            <div className="form-group">
                <label htmlFor="favoriteMove">Favorite Move:</label>
                <input 
                    type="text" 
                    name="favoriteMove" 
                    className="form-control"
                    value={form.favoriteMove}
                    onChange={handleInputChange}
                />
            </div>
            <div className="form-group">
                <label htmlFor="isLit">Is Lit?:</label>
                <input 
                    type="checkbox" 
                    name="isLit" 
                    className="form-control"
                    checked={form.isLit}
                    value={form.isLit}
                    onChange={handleInputChange}
                />
            </div>
            <input type="submit" value={submitValue} className="btn btn-success"/>
        </form>
    );
}


export default DogForm;