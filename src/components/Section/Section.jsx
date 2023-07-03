import book from '../img/image 5.svg'
import book1 from '../img/image 6.svg'
import book2 from '../img/image 7.svg'
import book3 from '../img/image 8.svg'
import star from '../img/Star 1.svg'
export default function Section() {
    const cards = [
        {
            id: 1,
            photo:book
        },
        {
            id: 2,
            photo:book1
        },
        {
            id: 3,
            photo:book2
        },
        {
            id: 4,
            photo:book3
        },
        {
            id: 5,
            photo:book
        },
        {
            id: 6,
            photo:book1
        },
        {
            id: 7,
            photo:book2
        },
        {
            id: 8,
            photo:book3
        }
    ]
    return (
        <>

            <div className="container px-6 mx-auto">
                <div className="grid grid-cols-12 gap-6">
                    {cards?.map((data, index) => {
                        return (
                            <div key={index} className="col-span-3">
                                <div className="cardBook bg-[#2B2244] py-[15px] px-[10px] flex rounded-[5px]">
                                    <div className="imgCard mr-[8px]">
                                        <img src={data.photo} alt="" className="brok h-full" />
                                    </div>
                                    <div className="cardBook2">
                                        <div className="starC flex">
                                            <img src={star} alt="" className="star" />
                                            <p className="fo text-[#FFF]">4.9</p>
                                        </div>
                                        <p className="live-text  text-[#FFF] text-[13px]">Лягушка, слон и брокколи. <br /> Как жить и как не надо</p>
                                        <p className="user-name  text-[#FFF] text-[11px] opacity-[0.5]">Алексей  Марков</p>
                                        <div className="cardBook3 mt-6 items-center flex justify-between">
                                            <button className="korzina bg-inherit   text-[#1F1A2D] font-bold bg-[white] rounded-[5px] px-[2px] py-[4px]">В корзину</button>
                                            <p className="five text-red  text-[#FFF] text-[18px]">575₽</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>

            </div>

        </>
    )
}
