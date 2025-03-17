import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

export default function Footer () {
    return (
        <div className='mt-5'>
            <div className='mt-5' style={{paddingTop: '5vh'}}> 

            </div>
            
           <div >
             
                <Navbar className="bg-body-tertiary " fixed="bottom" >

                    <Navbar.Text className="mx-auto text-center fs-6">Нетиповое муниципальное бюджетное общеобразовательное учреждение “Гимназия №11”
                        <div>Для связи и предложений по улучшению сайта пишите в Telegram @literature_maniac или в VK @crying_death </div> 
                    </Navbar.Text>
        
            </Navbar>
            </div>
        </div>
        
    )
}
