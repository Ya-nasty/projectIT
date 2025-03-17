import like from './ggg.jpg'
export default function Feedback () {

    return (
        <div style={{ paddingLeft: '6vw', paddingTop: '5vh' , textAlign: 'left' }}>

            <h2 style={{ paddingLeft: '5vw', paddingBottom:'1vh'}}>Обратная связь</h2>
            Помогите сайту стать лучше — оставьте свой отзыв в <a href="https://forms.yandex.ru/u/67d12924068ff05e0ea70a45/">форме</a>
            
            <img src={like} width='45%' className='ms-5' style={{textAlign: 'right'}} ></img>
        </div>
    )

}