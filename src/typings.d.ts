declare interface IFilterButton {
    id: number,
    name: string,
    accessor:string
}

declare interface ICard {
    id:number
    title:string
    lessons_count:number
    time:number
    background:string
    views_count:number
    created_at:string
    isFavorite?:boolean
}
declare interface IMainStore {
    allCards: ICard[],
    filteredCards: ICard[],
    filterButtons: IFilterButton[],
    activeFilter: IFilterButton,
    changeFilter: (accessor: string) => void,
}