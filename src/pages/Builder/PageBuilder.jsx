import React from 'react';

import Header from '../../elements/Header';
import Footer from '../../elements/Footer';

import PageHome from '../PageHome/PageHome';
import PageAccountV2 from '../PageAccount/PageAccountV2';
import PageAccounts from '../PageAccounts/PageAccounts';
import PageBlockV2 from '../PageBlock/PageBlockV2';
import PageBlocksV2 from '../PageBlocks/PageBlocksV2';
import PageTransactionV2 from '../PageTransaction/PageTransactionV2';
import PageTransactions from '../PageTransactions/PageTransactions';
import PageValidator from '../PageValidator/PageValidator';
import PageValidatorsV2 from '../PageValidators/PageValidatorsV2';
import PageProposals from '../PageProposals/PageProposals';
import PageProposal from '../PageProposal/PageProposal';
import PageBurns from '../PageBurns/PageBurns';
import PageStaking from '../PageStaking/PageStaking';
import PageSearch from '../PageSearch/PageSearch';
import PageAbout from '../PageAbout/PageAbout';
import Page404 from '../Page404/Page404';

import styles from './PageBuilder.module.scss';
import SideBar from '../../elements/SideBar';
import AppBar from '../../elements/AppBar';

import { AppScrollToTop } from '../../application/AppScrollToTop'
import PageDonate from '../PageDonate/PageDonate';


const PageBuilder = (props) => {

    // Récupération des paramètres d'appel
    const withHeader = props.withHeader;
    const withFooter = props.withFooter;
    const targetPage = props.targetPage;

    // Sélecteur d'affichage
    const renderSwitch = (parametre) => {
        switch(parametre) {
            case 'home':
                return <PageHome />;
            case 'account':
                return <PageAccountV2 />;
            case 'accounts':
                return <PageAccounts />;
            case 'block':
                return <PageBlockV2 />;
            case 'blocks':
                return <PageBlocksV2 />;
            case 'transaction':
                return <PageTransactionV2 />;
            case 'transactions':
                return <PageTransactions />;
            case 'validator':
                return <PageValidator />;
            case 'validators':
                return <PageValidatorsV2 />;
            case 'about':
                return <PageAbout />;
            case 'proposal':
                return <PageProposal />;
            case 'proposals':
                return <PageProposals />;
            case 'burns':
                return <PageBurns />;
            case 'staking':
                return <PageStaking />;
            case 'donate':
                return <PageDonate />;
            case 'search':
                return <PageSearch />;
            case '404':
                return <Page404 />;
            case undefined:
                return <div>[ERROR] Missing parameter "targetPage" in PageBuilder.jsx</div>;
            default:
                return <div>[ERROR] Unknown page "{parametre}" in PageBuilder.jsx</div>;
        }
    }

    // Affichage
    return (
        <>
            <div className={styles.site}>
                <SideBar />
                <AppBar />
                <div id="pageContent" className={styles.content}>
                    <header>{withHeader === "no" ? null : <Header />}</header>
                    <main>{renderSwitch(targetPage)}</main>
                    <footer>{withFooter === "no" ? null : <Footer />}</footer>
                </div>
            </div>
            <AppScrollToTop />
        </>
    );
};

export default PageBuilder;