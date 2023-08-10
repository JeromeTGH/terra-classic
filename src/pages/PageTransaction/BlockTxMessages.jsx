import React from 'react';
import styles from './BlockTxMessages.module.scss';
import { MessageIcon } from '../../application/AppIcons';
import MsgSend from './MsgSend';
import MsgAggregateExchangeRateVote from './MsgAggregateExchangeRateVote';
import MsgAggregateExchangeRatePrevote from './MsgAggregateExchangeRatePrevote';
import MsgVote from './MsgVote';

const BlockTxMessages = (props) => {

    
    return (
        <div className={"boxContainer " + styles.messagesBlock}>
            <p className="h2like"><MessageIcon /><span>Operation {props.idxElement}/{props.nbElements} : <strong>{props.txMessage['MsgDesc']}</strong></span></p>
            <table className={styles.tblMessages}>
                <tbody>
                    {props.txMessage['MsgType'] === 'MsgSend' ? <MsgSend txMessage={props.txMessage} /> : null}
                    {props.txMessage['MsgType'] === 'MsgAggregateExchangeRateVote' ? <MsgAggregateExchangeRateVote txMessage={props.txMessage} /> : null}
                    {props.txMessage['MsgType'] === 'MsgAggregateExchangeRatePrevote' ? <MsgAggregateExchangeRatePrevote txMessage={props.txMessage} /> : null}
                    {props.txMessage['MsgType'] === 'MsgVote' ? <MsgVote txMessage={props.txMessage} /> : null}





                </tbody>
            </table>
        </div>
    );
};

export default BlockTxMessages;