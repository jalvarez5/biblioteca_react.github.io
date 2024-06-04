import React from 'react';
import Card from './Card';
import '../assets/css/TarjetasInicio.css'; 

function Inicio() {
    return (
        <React.Fragment>
            <div className='card-row'>
                <Card autor="Gabriel garcia márquez" imagen={"https://www.penguinlibros.com/es/2310352-thickbox_default/cien-anos-de-soledad.jpg"} descripcion="Muchos años después, frente al pelotón de fusilamiento, el coronel Aureliano Buendía había de recordar aquella tarde remota en que su padre lo llevó a conocer el hielo" />
                <Card autor="Gabriel Garcia márquez" imagen={"https://www.penguinlibros.com/es/3992573-thickbox_default/en-agosto-nos-vemos.jpg"} descripcion="Cada mes de agosto Ana Magdalena Bach toma el transbordador hasta la isla donde está enterrada su madre para visitar la tumba en la que yace. Esas visitas acaban suponiendo una irresistible invitación a convertirse en una persona distinta durante una noche al año." />
                <Card autor="Julio Cortázar" imagen={"https://www.penguinlibros.com/es/2960113-thickbox_default/las-cartas-del-boom.jpg"} descripcion="La obra de García Márquez es incomprensible sin la de Cortázar, y la de Cortázar es incomprensible sin la de Vargas Llosa, y se establece toda una red que corresponde a algo muy real. " />
                <Card autor="Robert T. Kiyosaki " imagen={"https://www.penguinlibros.com/es/2539429-thickbox_default/padre-rico-padre-pobre-edicion-actualizada.jpg"} descripcion="Padre rico, padre pobre es el libro de finanzas personales nº 1 en todo el mundo, el manual de Robert T. Kiyosaki que enseña a las personas a hacerse millonarias." />
            </div>   
        </React.Fragment>
    )
}

export default Inicio;
