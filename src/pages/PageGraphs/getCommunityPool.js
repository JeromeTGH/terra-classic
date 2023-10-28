import { TerraScanAPI } from "../../apis/terrascan-api/TerraScanAPI";

export const getCommunityPool = async (timeunit = 'H1', limit = 50) => {

    const tblAretourner = []

    // Création/récupération d'une instance de requétage TSAPI
    const tsapi = TerraScanAPI.getSingleton();

    // Préparation de la requête
    const params = new URLSearchParams();
    params.append('timeunit', timeunit);
    params.append('limit', limit);
        
    // Récupération de l'historique du nombre de LUNC stakés
    const rawCommunityPool = await tsapi.communitypool.getPastValues(params).catch(handleError);
    if(rawCommunityPool?.data) {
            tblAretourner['nbLuncInCP'] = []
            tblAretourner['nbUstcInCP'] = []
            tblAretourner['datetime'] = []
            tblAretourner['lastLunc'] = 0
            tblAretourner['lastUstc'] = 0

            // Extraction des données en plusieurs tableaux, pour alimenter le chart
            for(const lineofdata of rawCommunityPool.data.reverse()) {
                tblAretourner['nbLuncInCP'].push(lineofdata.nbLuncInCP)
                tblAretourner['nbUstcInCP'].push(lineofdata.nbUstcInCP)
                tblAretourner['datetime'].push(new Date(lineofdata.datetimeUTC).toISOString().replace('T', ' ').replace(/.[0-9]*Z/, ''))
                tblAretourner['lastLunc'] = lineofdata.nbLuncInCP
                tblAretourner['lastUstc'] = lineofdata.nbUstcInCP
            }
    }
    else
        return { "erreur": "Failed to fetch [NbStakedLunc history] ..." }


    // Renvoie du tableau global/rempli, à la fin
    // console.log(tblAretourner);
    return tblAretourner;

}


const handleError = (err) => {
    if(err.response && err.response.data)
        console.warn("err.response.data", err.response.data);
    else
        console.warn("err", err);
}