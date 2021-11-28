
import {Link} from 'react-router-dom';
import {Button} from 'react-bootstrap';


 const BackToCIties = () => {
    return (
        <div>
            <Link className="text-decoration-none" to ="/cities">
                    <Button variant="" className="button-home mb-5 mt-5">Back to Cities<i className="fas fa-plane-departure ms-1"></i></Button>
            </Link>{' '}
        </div>
    )
}

export default BackToCIties;
