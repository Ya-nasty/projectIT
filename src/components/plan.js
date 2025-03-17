import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import gugu from './gug.jpg'
import sec from './uwu.png'
import first from './1этаж.png'
import second from './2этаж.png'
import third from './3этаж.png'
import { useState } from 'react';

export default function Plan () {

const[img,setImg]= useState(first)

function changeImg(numberOfButton) {

if (numberOfButton == 1)
    {setImg(first)}

else if (numberOfButton== 2)
    {setImg(second)}

else {setImg(third)}     
}    
    return (  
        <div className='mt-3'>
            
            
            <ButtonGroup vertical className='me-4' >
                <Button variant="outline-secondary" onClick={() => changeImg(1)}>1 этаж</Button>
                <Button variant="outline-secondary" onClick={() => changeImg(2)}>2 этаж</Button>
                <Button variant="outline-secondary" onClick={() => changeImg(3)}>3 этаж</Button>
            </ButtonGroup>

            <img src={img} width='35%' className='me-5' ></img>
            {/* <img src={second} width='35%' className='me-5' ></img> */}
            {/* <img src={third} width='35%' className='me-5' ></img> */}
        </div>
    )

}