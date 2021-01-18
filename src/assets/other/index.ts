import banana_bg from "./banana.jpg"
import building_bg from "./building.jpg"
import marketing_bg from "./marketing.jpg"
import programming_bg from "./programming.jpg"

interface IImages {
    [name:string]:string
}

const images:IImages = {
    banana_bg,
    building_bg,
    marketing_bg,
    programming_bg
}

export default images