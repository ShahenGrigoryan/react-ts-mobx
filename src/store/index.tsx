import {observable, computed, action, decorate} from "mobx";
import filterButtons from "../data/filter_buttons.json";
import cardsArr from "../data/cards.json"

interface IFilteredCardFunctions {
    [accessor:string]:ICard[]
}

class Store {

    filterButtonsArr: IFilterButton[] = filterButtons;
    cards: ICard[] = cardsArr;
    filteredCardsFunctions: IFilteredCardFunctions = {
        all: this.allCards,
        popular: this.popularCards,
        new: this.newCards,
        favorite: this.favoriteCards
    }

    activeFilter = this.filterButtonsArr[0];

    get allCards() {
        return this.cards;
    } ;

    get popularCards() {
        return this.cards.filter(card => card.views_count > 1000);
    }

    get newCards() {
        return this.cards.filter(card =>
            new Date(card.created_at).getMonth() === new Date(Date.now()).getMonth());
    }

    get favoriteCards() {
        return this.cards.filter(card => card.isFavorite)
    }

    get filterButtons() {
        return this.filterButtonsArr
    }

    get filteredCards() {
        return this.filteredCardsFunctions[this.activeFilter.accessor]
    }

    changeFilter = (filterName: string) => {
        this.activeFilter = this.filterButtonsArr.filter(item => item.accessor === filterName)[0]
    }
}

decorate(Store, {
    allCards: computed,
    popularCards: computed,
    newCards: computed,
    filteredCards: computed,
    filterButtons: computed,
    favoriteCards: computed,
    cards: observable,
    activeFilter: observable,
    changeFilter: action,
});
export default new Store();