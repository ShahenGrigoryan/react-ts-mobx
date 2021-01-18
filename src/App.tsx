import React from 'react';
import "./styles/main.css"
import MainWrapper from "./components/MainWrapper";
import CoursesPage from "./pages/Courses";

interface IAppProps {
    store: IMainStore
}

const App: React.FC<IAppProps> =({store}) => {
    return (
        <MainWrapper>
            <CoursesPage store={store}/>
        </MainWrapper>
    );
}

export default App;
