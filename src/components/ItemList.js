import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Item from './Item'

import { useState } from 'react';
import { useEffect } from 'react';

const ItemList = () => {

    const [items_array, setItems] = useState([]);

    const items_array_promise = [
        {id: 1, title: "Lavarropa", price: 10000, pictureUrl: "https://www.longvie.com/files/product_attachment/attachment/1047/mini_LS18012Pfrontal.jpg", description: "Sensitive Touch de color plata, 8 kg. de capacidad de lavado, 5 kg. de secado y 1200 rpm de centrifugado con display multifunción y sistema Intelligent FIT."},
        {id: 2, title: "Cocina", price: 1, pictureUrl: "https://www.longvie.com/files/product_attachment/attachment/3322/mini_21501X%20D.jpg", description: "Acero inoxidable con rejas de hierro fundido, display con comandos touch, reloj digital programable, quemador doble corona, grill eléctrico, timer, termostato, encendido electrónico a una mano y vidrio reflex."},
        {id: 3, title: "Horno", price: 1, pictureUrl: "https://www.longvie.com/files/product_attachment/attachment/3351/mini_H6900X2.png", description: "Acero Inoxidable de 60x60 cm con grill eléctrico, timer, termostato, programador de cocción Touch y encendido electrónico a una mano."},
        {id: 4, title: "Anafe", price: 1, pictureUrl: "https://www.longvie.com/files/product_attachment/attachment/89/mini_A6600XF_A.jpg", description: "Acero inoxidable de 60 cm. encastrable con encendido electrónico a una mano y rejas de hierro fundido."},
        {id: 5, title: "Campana", price: 1, pictureUrl: "https://www.longvie.com/files/product_attachment/attachment/630/mini_IRCT90X.jpg", description: "Isla recta de 90 cm. en acero inoxidable con display digital."},
        {id: 6, title: "Purificador", price: 1, pictureUrl: "https://www.longvie.com/files/product_attachment/attachment/2878/mini_p3260XN.jpg", description: "Acero inoxidable/Negro de 60 cm. con 2 motores."},
        {id: 7, title: "Calefón", price: 1, pictureUrl: "https://www.longvie.com/files/product_attachment/attachment/679/mini_CB214SFP_I.jpg", description: "Tiro Balanceado de 14 Lts./min. con encendido piezoeléctrico y doble sensor."},
        {id: 8, title: "Termotanque", price: 1, pictureUrl: "https://www.longvie.com/files/product_attachment/attachment/2623/mini_T4110.jpg", description: "Para apoyar con 328 l/h de recuperación y aislación de poliuretano expandido, encendido piezoeléctrico, regulador de presión, conexión de agua superior y 3 años de garantía."},
        {id: 9, title: "Termo Solar", price: 1, pictureUrl: "https://www.longvie.com/files/product_attachment/attachment/856/mini_180S.jpg", description: "Standard (tanque elevado) con 180 litros de capacidad para alta presión de agua."},
        {id: 10, title: "Calefactor", price: 1, pictureUrl: "https://www.longvie.com/files/product_attachment/attachment/882/mini_EBA5VT.jpg", description: "Color tiza/grafito de 5000 Kcal/h con visor vitrocerámico, termostato de ambiente y encendido electrónico."}
      ];


    const getItems = (timeout) => {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            console.log('timeout promise');
            items_array_promise ? resolve(items_array_promise) : reject('No se encontraron productos');
            }, timeout)
        });
      };
    

    useEffect(() => {
        getItems(2000)
          .then((items_list) => {
            setItems(items_list)})
          .catch((e) => {console.log(e)})
        }
    )

    return (
        <>
            <Container>
                <Row>
                {
                items_array.map(e =>
                    <Item 
                        key={e.id} 
                        title={e.title} 
                        price={e.price} 
                        pictureUrl={e.pictureUrl}
                        description={e.description}></Item>
                    )
                }

                </Row>
            </Container>
        </>
    )
}

export default ItemList