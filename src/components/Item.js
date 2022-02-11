import '../css/coder_inthenet.css'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'

import { Link, NavLink } from 'react-router-dom'


const Item = (item) => {
    return (
        <>
            <Col>
                <NavLink to={`/item/${item.id}`}   >
                    <Card key={item.id} style={{"height": "450px"}}>
                        <Card.Body>
                            <Card.Img  src={item.pictureUrl} className='item_image' alt=""   />
                            <Card.Title className="text-muted item_title">{item.title}</Card.Title>
                            <Card.Text className="text-muted" >
                                {item.description.length < 100 ? item.description : `${item.description.substring(0, 100)}...`}
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer className="text-muted">
                            <h6 >Precio $ {item.price}</h6>
                        </Card.Footer>
                    </Card>
                </NavLink>
            </Col>
        </>
    )     
}

export default Item;