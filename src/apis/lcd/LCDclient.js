import { LCDurl } from "../../application/AppParams";
import { APIrequester } from "./APIrequester";

import { BankAPI } from "./api/BankAPI";
import { CosmwasmAPI } from "./api/CosmwasmAPI";
import { DistributionAPI } from "./api/DistributionAPI";
import { GovAPI } from "./api/GovAPI";
import { MintAPI } from "./api/MintAPI";
import { StakingAPI } from "./api/StakingAPI";
import { TaxAPI } from "./api/TaxAPI";
import { TendermintAPI } from "./api/TendermintAPI";
import { TreasuryAPI } from "./api/TreasuryAPI";
import { TxAPI } from "./api/TxAPI";

export class LCDclient {

    _instance = null;

    // Constructeur
    constructor (url_of_LCD) {

        if(LCDclient._instance) {
            return LCDclient._instance;
        }
        else {            
            this.apiRequester = new APIrequester(url_of_LCD);
            this.paths = {
                bank: {
                    getAccountDetails: '/cosmos/bank/v1beta1/balances/***',
                    getOraclePoolBalance: '/cosmos/bank/v1beta1/balances/***',
                    getTotalSupplies: '/cosmos/bank/v1beta1/supply'
                },
                cosmwasm: {
                    getContractInfo: '/cosmwasm/wasm/v1/contract/***',
                    getContractHistory: '/cosmwasm/wasm/v1/contract/***/history'
                },
                distribution: {
                    getDistributionCommunityPool: '/cosmos/distribution/v1beta1/community_pool',
                    getDistributionParameters: '/cosmos/distribution/v1beta1/params',
                    getPendingRewards: '/cosmos/distribution/v1beta1/delegators/***/rewards'
                },
                gov: {
                    getDepositParameters: '/cosmos/gov/v1beta1/params/deposit',
                    getDeposits: '/cosmos/gov/v1beta1/proposals/***/deposits',
                    getProposal: '/cosmos/gov/___version___/proposals/___prop_id___',
                    getProposals: '/cosmos/gov/v1/proposals',
                    getTally: '/cosmos/gov/v1beta1/proposals/***/tally',
                    getTallyParameters: '/cosmos/gov/v1beta1/params/tallying',
                    getVotingParameters: '/cosmos/gov/v1beta1/params/voting'
                },
                mint: {
                    getMintParameters: '/cosmos/mint/v1beta1/params'
                },
                staking: {
                    getDelegations: '/cosmos/staking/v1beta1/delegations/***',
                    getValidatorDelegators: '/cosmos/staking/v1beta1/validators/***/delegations',
                    getRedelegations: '/cosmos/staking/v1beta1/delegators/***/redelegations',
                    getStakingParameters: '/cosmos/staking/v1beta1/params',
                    getStakingPool: '/cosmos/staking/v1beta1/pool',
                    getUndelegations: '/cosmos/staking/v1beta1/delegators/***/unbonding_delegations',
                    getValidatorInfos: '/v1/staking/validators/',
                    getValidatorsList: '/v1/staking/validators'
                },
                tax : {
                    getBurnTaxRate: '/terra/tax/v1beta1/burn_tax_rate'
                },
                tendermint: {
                    getNodeInfos: '/cosmos/base/tendermint/v1beta1/node_info',
                    getBlockInfos: '/cosmos/base/tendermint/v1beta1/blocks/***'
                },
                treasury : {
                    getTreasuryParameters: '/terra/treasury/v1beta1/params',
                    getBurnTaxExemptionList : '/terra/treasury/v1beta1/burn_tax_exemption_list'
                },
                tx: {
                    searchTxsByEvent: '/cosmos/tx/v1beta1/txs'
                }
            }
    
            this.bank = new BankAPI(this.apiRequester, this.paths.bank);
            this.cosmwasm = new CosmwasmAPI(this.apiRequester, this.paths.cosmwasm);
            this.distribution = new DistributionAPI(this.apiRequester, this.paths.distribution);
            this.gov = new GovAPI(this.apiRequester, this.paths.gov);
            this.mint = new MintAPI(this.apiRequester, this.paths.mint);
            this.staking = new StakingAPI(this.apiRequester, this.paths.staking);
            this.tax = new TaxAPI(this.apiRequester, this.paths.tax);
            this.tendermint = new TendermintAPI(this.apiRequester, this.paths.tendermint);
            this.treasury = new TreasuryAPI(this.apiRequester, this.paths.treasury);
            this.tx = new TxAPI(this.apiRequester, this.paths.tx);

            LCDclient._instance = this;
            // console.log('Instance LCD créée.');
        }
    }

    // Singleton (pour avoir une unique instance de cette classe)
    static getSingleton(url_of_LCD = LCDurl) {
        if(LCDclient._instance)
            return LCDclient._instance;
        else
            return new LCDclient(url_of_LCD);
    }

}
