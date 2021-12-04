
import {Link} from 'react-router-dom';
import {Button} from 'react-bootstrap';


 const BackToCIties = () => {
    return (
        <div className="d-flex justify-content-center m-5">
            <Link className="text-decoration-none" to ="/cities">
                    {/* <Button variant="" className="button-home mb-5 mt-5">Back to Cities<i className="fas fa-plane-departure ms-1"></i></Button> */}
                    <span><i></i></span>
            </Link>{' '}
        </div>
    )
}

export default BackToCIties;
