import React,{useState} from 'react'
import Error from './Error';


const Form = ({setSearch}) => {

    const [term,setTerm]= useState('');
    const [error,setError] = useState(false);
    const searchImg = e =>{
        e.preventDefault();

        if(term.trim()===''){
            setError(true)
            return;
        }

        setSearch(term)
    }
    return (
        <form action="">
            <div className="row">
                <div className="form-group col-md-8">
                    <input 
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="Search an imagex, example: coffe"
                        onChange={e=>setTerm(e.target.value)}
                    />
                </div>
                <div className="form-group col-md-4">
                    <input 
                        type="submit"
                        className="btn btn-lg btn-danger btn-block"
                        value="Submit"
                        onClick={searchImg}
                    />
                </div>
            </div>
            {error? <Error message="Add a term to search" /> : null}
        </form>
    )
}

export default Form
