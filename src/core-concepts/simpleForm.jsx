function SimpleForm() {
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(event.target.name.value);
        console.log(event.target.email.value);
    };


    return <div>
        <h1>Simple Form Component</h1>
        <form onSubmit={handleSubmit}>
            <label>
                Name:   
                <input type="text" name="name" />
            </label>
            <br />
            <label>
                Email: 
                <input type="email" name="email" />
            </label>
            <br />
            <input type="submit" className ="color" value="Submit" />
        </form>
    </div>
};

export default SimpleForm;