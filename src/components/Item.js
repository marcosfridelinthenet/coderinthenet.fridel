import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'

const Item = (item) => {
    return (
        <>
            <Col xs={6} md={3}>
                <Card key={item.id}>
                    <Card.Img variant="top" src={item.pictureUrl} className='item_image' />
                    <Card.Body>
                        <Card.Title>{item.title}</Card.Title>
                        <Card.Text>
                            {item.description.length < 100 ? item.description : `${item.description.substring(0, 100)}...`}
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <h6 className="text-muted">Precio $ {item.price}</h6>
                    </Card.Footer>
                </Card>
            </Col>   
        </>
    )     
}

export default Item;