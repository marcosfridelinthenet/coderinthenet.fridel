import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'

import ItemCount from './ItemCount';


const ItemDetail = (item) => {

    return (
        <div className="card card-solid">
            <div className="card-body">
                <div className="row">
            
                    <div className="col-12 col-sm-6">
                        <Col xs={12} md={12}>
                            <Card.Img variant="top" src={item.pictureUrl} className='item_image_detail' alt="" />
                        </Col>
                    </div>
                    <div className="col-12 col-sm-6">
                        <h3 className="my-3">{item.title}</h3>
                        <p>{item.description}</p>
                            <h2 className="mb-0">
                        {item.price === undefined ? '' : `$ ${item.price}`}
                        </h2>    
                        {item.price === undefined ? <></> : <ItemCount></ItemCount>}
                                    
                    </div>

                </div>

            </div>
        </div>
    )
}

export default ItemDetail;