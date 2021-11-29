// import React from 'react';
import {Form, FormControl} from 'react-bootstrap'

// class Search extends React.Component {

//     constructor(props) {
//         super(props)
//         console.log('esta son props', props)
//     }

//     render() {

//         return (
//             <Form className="d-flex vw-25 m-5">
//             <FormControl
//               type="search"
//               placeholder={this.props.placeholder}
//               className="me-2"
//               aria-label="Search"
//               onChange={this.props.handleChange}
//             />
//             <Button variant="outline-success">Search</Button>
//           </Form>
//         )

//     }
// }

// export default Search

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
