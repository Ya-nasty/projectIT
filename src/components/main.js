import i from './iii.jpg'
export default function Main () {

    return (

        <div style={{ paddingLeft: '6vw', paddingTop: '5vh' , textAlign: 'left' }}>
            <h2 style={{ paddingLeft: '5vw', paddingBottom:'3vh' }}>Сайт для учеников Гимназии №11</h2>
            
            <div class="container">
                <div class="row">
                    <div class="col">
                        <div><h4>Наша школа</h4>
            НМБОУ "Гимназия №11" располагается по адресу ул. Ленина, 10. <br></br> У нашей школы есть <a href="https://vk.com/friday11gymn" className="fs-5" >паблик в вк</a> и <a href="https://t.me/densamouprawsh11" className="fs-5" >телеграмм канал</a>, где размещаются новости из школьной жизни. <br></br>
            Директор школы - Цветкова Лариса Анатольевна.
            <br></br>
            <br></br>
            <h4>Сайт для учащихся</h4>
            На данном сайте вы можете найти расписание уроков, план школы, учительский состав и ссылки на полезные сайты. <br></br>
            Если у вас есть предложения по улучшению сайта, пожалуйста, пройдите форму для улучшения сайта  
            </div>
                    </div>
                    <div class="col">
                        <div><img src={i} width='90%' className='ms-5' style={{textAlign: 'right'}} ></img></div>
                    </div>
                </div>
            </div>

            
            
           
            
        </div>



    )

}