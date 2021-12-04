import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import itinerariesActions from '../redux/actions/itinerariesActions';
import { useParams } from 'react-router-dom';


const CardCity = (props) => {

  const [city, setCity] = useState({})

  const params = useParams();    

    //  useEffect(() => {
    //     // props.getOneItinerary(params.id)
    //     if(props.allCities.length > 0) {
    //       setCity({city: props.})
    //     }
    // }, [])

  return (
    <ul class="cards">
      <li>
        <div class="card">
          <img src="https://i.imgur.com/GHNlsu2.jpg" class="card__image" alt="" />
          <div class="card__overlay">
            <div class="card__header">
              <svg class="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>
              <img class="card__thumb" src="https://i.imgur.com/7D7I6dI.png" alt="" />
              <div class="card__header-text">
                <h3 class="card__title">Jessica Parker</h3>
                <span class="card__status">1 hour ago</span>
              </div>
            </div>
            <p class="card__description">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio voluptates repellendus inventore quas ipsa doloribus repellat fugit itaque quis, nostrum cupiditate quasi eos, saepe unde optio cum esse excepturi aliquam! Ullam accusamus debitis earum eveniet non aspernatur nihil nemo dicta nulla perspiciatis veniam, eius numquam hic recusandae id tenetur, deleniti, in mollitia illum quae ab expedita quaerat! Qui, placeat, commodi est facere temporibus odio error beatae minima ea iusto magnam nihil dignissimos cumque nesciunt, vel velit natus animi corrupti consequuntur. Quos sunt voluptates recusandae illo magnam enim laboriosam inventore. Et laboriosam, molestiae voluptas iste sunt quibusdam a quia aperiam distinctio perferendis incidunt nemo laudantium maxime, ducimus laborum hic reprehenderit? Non molestiae dolorem soluta qui libero, consequuntur exercitationem vero magni nam.</p>
          </div>
        </div>
      </li>
      <li>
        <div class="card">
          <img src="https://i.imgur.com/m05pkpk.jpg" class="card__image" alt="" />
          <div class="card__overlay">
            <div class="card__header">
              <svg class="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>
              <img class="card__thumb" src="https://i.imgur.com/sjLMNDM.png" alt="" />
              <div class="card__header-text">
                <h3 class="card__title">kim Cattrall</h3>
                <span class="card__status">3 hours ago</span>
              </div>
            </div>
            <p class="card__description">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio voluptates repellendus inventore quas ipsa doloribus repellat fugit itaque quis, nostrum cupiditate quasi eos, saepe unde optio cum esse excepturi aliquam! Ullam accusamus debitis earum eveniet non aspernatur nihil nemo dicta nulla perspiciatis veniam, eius numquam hic recusandae id tenetur, deleniti, in mollitia illum quae ab expedita quaerat! Qui, placeat, commodi est facere temporibus odio error beatae minima ea iusto magnam nihil dignissimos cumque nesciunt, vel velit natus animi corrupti consequuntur. Quos sunt voluptates recusandae illo magnam enim laboriosam inventore. Et laboriosam, molestiae voluptas iste sunt quibusdam a quia aperiam distinctio perferendis incidunt nemo laudantium maxime, ducimus laborum hic reprehenderit? Non molestiae dolorem soluta qui libero, consequuntur exercitationem vero magni nam.</p>
          </div>
        </div>
      </li>
    </ul>
  )
}


const mapDispatchToProps = {
  getOneItinerary: itinerariesActions.getOneItinerary
}


export default connect(null, mapDispatchToProps)(CardCity)