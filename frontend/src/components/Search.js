import {Form, FormControl} from 'react-bootstrap'

const Search = (props) => {
    return(
        <Form className="d-flex vw-25 m-5">
             <FormControl
               type="search"
               placeholder={props.placeholder}
               className="me-2 bg-black search"
               aria-label="Search"
               onChange={props.handleChange}
             />
           </Form>
    )
}

export default Search;
