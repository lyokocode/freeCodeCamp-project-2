import React from 'react'

const Tour = (props) => {

    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth() + 1;
    const today = now.getDate();
    const nowDate = `${today}.${month}.${year}`
    let son = props.item.endDate
    let baslangic = props.item.startDate

    let statusText
    if (son == nowDate && baslangic < nowDate) {
        statusText = "bu gün son gün"
    } else if (son < nowDate && baslangic < nowDate) {
        statusText = "pasif ilan"
    } else if (son > nowDate && baslangic <= nowDate) {
        statusText = "aktif ilan"
    } else if (baslangic > nowDate && son > nowDate) {
        statusText = "çok yakında"
    } else {
        statusText = "hata var"
    }
    return (
        <>
            <main className='tour' key={props.key}>
                {<span className='status'>{statusText}</span>}
                <img src={props.item.imageUrl} alt='yer' />
                <div className='tour-content'>
                    <div className='location'>
                        <h3>{props.item.location}</h3>
                        <a target="_blank" rel="noreferrer" href={props.item.googleMapsUrl}>haritada aç</a>
                    </div>
                    <div className='tour-info'>
                        <h2>{props.item.title}</h2>
                        <h4>başvuru: {props.item.startDate} - {props.item.endDate}</h4>
                        <p>{props.item.desctiption}</p>
                    </div>
                </div>
            </main>

        </>
    )
}

export default Tour