import l from './ttt.jpg'
export default function Timetable () {

    return (
        <div style={{ paddingLeft: '6vw', paddingTop: '5vh' , textAlign: 'left' }}>

            <h2 style={{ paddingLeft: '5vw', paddingBottom:'1vh'}}>Расписание звонков</h2>
            
            <div class="container">
                <div class="row">
                    <div class="col">
                        <div> <div class="container">
                <div class="row">
                    <div class="col">
                        <div>1 смена<br></br>
                8:00-8:40(1 урок)<br></br>
                8:50-9:30(2 урок)<br></br>
                9:40-10:20(3 урок)<br></br>
                10:30-11:10(4 урок)<br></br>
                11:20-12:00(5 урок)<br></br>
                12:05-12:45(6 урок)<br></br>
                12:50-13:30(7 урок)<br></br></div>
                    </div>
                    <div class="col">
                        <div>2 смена <br></br>
                13:30-14:10(0 урок)<br></br>
                14:15-14:55(1 урок)<br></br>
                15:05-15:45(2 урок)<br></br>
                15:55-16:35(3 урок)<br></br>
                16:45-17:25(4 урок)<br></br>
                17:30-18:10(5 урок)<br></br>
                18:15-18:55(6 урок)<br></br></div>
                    </div>
                 </div>
             </div> </div>
                    </div>
                    <div class="col">
                        <div>
                            <img src={l} width='45%' className='ms-5' style={{textAlign: 'right'}} ></img>
                        </div>
                    </div>
                 </div>
             </div>


            
            <p style={{paddingLeft: '1vw', paddingBottom: '2vh' }}>С первой смены учатся 1,4,5,9,10,11 классы. Со второй смены учатся 2,3,6,7,8 классы</p>
            <p>Перерыв в столовой: 13:15 - 13:45 </p>
            <p>Режим работы библиотеки: 9:00 - 17:30 (обеденный перерыв с 11:30 до 12:00)</p> 
        </div>
    )

}