import React from 'react';

import Header from './Header';
import Footer from './Footer';

import PageHome from '../PageHome/PageHome';
import PageSearch from '../PageSearch/PageSearch';
import Page404 from '../Page404/Page404';

import styles from './PageBuilder.module.scss';
import SideBar from './SideBar';

const PageBuilder = (props) => {

    // Récupération des paramètres d'appel
    const withHeader = props.withHeader;
    const withFooter = props.withFooter;
    const targetPage = props.targetPage;

    // Sélecteur d'affichage
    const renderSwitch = (parametre) => {
        switch(parametre) {
            case '/':
                return <PageHome />;
            case '/search':
                return <PageSearch />;
            case '/404':
                return <Page404 />;
            case undefined:
                return <div>[ERROR] Missing parameter "targetPage" in PageBuilder.jsx</div>;
            default:
                return <div>[ERROR] Unknown page "{parametre}" in PageBuilder.jsx</div>;
        }
    }

    // Affichage
    return (
        <div id={styles["site"]}>
            <SideBar />
            <div id={styles["content"]}>
                <header>{withHeader === "no" ? null : <Header />}</header>
                <main>{renderSwitch(targetPage)}</main>
                <footer>{withFooter === "no" ? null : <Footer />}</footer>
            </div>
        </div>
    );
};

export default PageBuilder;