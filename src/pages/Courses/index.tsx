import React from "react"
import TopBar from "../../components/TopBar";
import ScrollWrapper from "../../components/ScrollWrapper";
import Card from "../../components/Card";
import {observer} from "mobx-react";

interface ICoursesPageProps {
    store: IMainStore
}

const CoursesPage: React.FC<ICoursesPageProps> = observer(({store}) => {
    const {filteredCards, filterButtons, activeFilter, changeFilter} = store
    return (
        <>
            <TopBar
                filterButtons={filterButtons}
                activeFilter={activeFilter}
                changeFilter={changeFilter}
            />
            <ScrollWrapper>
                <div className="cards_container">
                    {filteredCards?.map(card => (
                        <Card data={card} key={`card_${card.id}`}/>
                    ))}
                </div>
            </ScrollWrapper>
        </>
    )
});

export default CoursesPage;