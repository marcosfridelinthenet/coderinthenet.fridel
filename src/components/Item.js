import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'

const Item = (item) => {
    return (
        <>
            <Col>
                <Card key={item.id} style={{"height": "450px"}}>
                    <Card.Img variant="top" src={item.pictureUrl} className='item_image' alt="" />
                    <Card.Body>
                        <Card.Title>{item.title}</Card.Title>
                        <Card.Text style={{"verticalAlign": "text-bottom"}}>
                            {item.description.length < 100 ? item.description : `${item.description.substring(0, 100)}...`}
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer className="text-muted">
                        <h6 >Precio $ {item.price}</h6>
                    </Card.Footer>
                </Card>
            </Col>
        </>
    )     
}

export default Item;