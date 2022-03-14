
const ActionType = {
    AsyncReTestIssueOrder : "AsyncReTestIssueOrder",
    AsyncWaferIssueOrder : "AsyncWaferIssueOrder",
    AsyncReceiveOrder : "AsyncReceiveOrder",
    AsyncShipOrder : "AsyncShipOrder",
    AsyncMesProduct: "AsyncProduct",
    AsyncMesWaferType: "AsyncWaferType",
    AsyncSobOrder: "AsyncSobOrder",
    AsyncSoaOrder: "AsyncSoaOrder",
    AsyncCogReceiveOrder : "AsyncCogReceiveOrder",
    AsyncMaterialIssueOrder : "AsyncMaterialIssueOrder",
    AsyncWltShipOrder: "AsyncWltShipOrder",
    AsyncRawOtherShipOrder: "AsyncRawOtherShipOrder",
    AsyncFtReTestIssueOrder : "AsyncFtReTestIssueOrder",
}

export default class AsyncManagerRequestBody {

    actionType;

    constructor(actionType){
        this.actionType = actionType;
    }
    
    static buildAsync(actionType) {
        return new AsyncManagerRequestBody(actionType);
    }

}

export {ActionType};

