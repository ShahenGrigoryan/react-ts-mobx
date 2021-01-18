import React from "react";
import icons from "../../assets/svg";
import images from "../../assets/other";

interface ICardProps {
    data:ICard
}

const Card:React.FC<ICardProps> = ({data}) => {
    const {title,lessons_count,time,background} = data
    return(
        <div className="card_item"
             style={{backgroundImage: `url(${images[background]})`}}>
            <div className="overlay">
            <div className="top_info">
                <div>
                    <div className="title">
                        {title}
                    </div>
                    <div className="lesson_count">
                        {lessons_count} lessons
                    </div>
                </div>
                <div className="time">
                    {time} min
                </div>
            </div>
            <div className="play_icon">
                {icons.play}
            </div>
            </div>
        </div>
    )
}

export default Card;