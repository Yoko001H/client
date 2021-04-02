import RwMLotManagerRequestHeader from './RwMLotManagerRequestHeader';
import RwMLotManagerRequestBody from './RwMLotManagerRequestBody';
import {UrlConstant} from '../../const/ConstDefine';
import MessageUtils from '../../utils/MessageUtils';
import Request from '../../Request';

export default class RwMLotManagerRequest {

    static sendPrintLableRequest = (object) => {
        let {materialLotList} = object;
        let requestBody = RwMLotManagerRequestBody.buildGetPrintParam(materialLotList);
        let requestHeader = new RwMLotManagerRequestHeader();
        let request = new Request(requestHeader, requestBody, UrlConstant.GCRwMaterialLotManageUrl);
        let requestObject = {
            request: request,
            success: object.success
        }
        MessageUtils.sendRequest(requestObject);
    }

    static sendRwFinishReceiveRequest = (object) => {
        let requestBody = RwMLotManagerRequestBody.buildRwReceivePackedLot(object.mesPackedLots, object.printLabel);
        let requestHeader = new RwMLotManagerRequestHeader();
        let request = new Request(requestHeader, requestBody, UrlConstant.GCRwMaterialLotManageUrl);
        let requestObject = {
            request: request,
            success: object.success
        }
        MessageUtils.sendRequest(requestObject);
    }

    static sendPrintRwReceiveLotLableRequest = (object) => {
        let {materialLot} = object;
        let requestBody = RwMLotManagerRequestBody.buildGetRwLotPrintParam(materialLot);
        let requestHeader = new RwMLotManagerRequestHeader();
        let request = new Request(requestHeader, requestBody, UrlConstant.GCRwMaterialLotManageUrl);
        let requestObject = {
            request: request,
            success: object.success
        }
        MessageUtils.sendRequest(requestObject);
    }

    static sendAutoPickTagMLotRequest = (object) => {
        let {materialLotList, pickQty} = object;
        let requestBody = RwMLotManagerRequestBody.buildAutoPickTagMLot(materialLotList, pickQty);
        let requestHeader = new RwMLotManagerRequestHeader();
        let request = new Request(requestHeader, requestBody, UrlConstant.GCRwMaterialLotManageUrl);
        let requestObject = {
            request: request,
            success: object.success
        }
        MessageUtils.sendRequest(requestObject);
    }

    static sendRwStockOutTagRequest = (object) => {
        let {materialLotList, abbreviation, customerName, remarks} = object;
        let requestBody = RwMLotManagerRequestBody.buildRwMLotStockTagging(materialLotList, abbreviation, customerName, remarks);
        let requestHeader = new RwMLotManagerRequestHeader();
        let request = new Request(requestHeader, requestBody, UrlConstant.GCRwMaterialLotManageUrl);
        let requestObject = {
            request: request,
            success: object.success
        }
        MessageUtils.sendRequest(requestObject);
    }

    static sendUnStockOutTagRequest = (object) => {
        let {materialLotList} = object;
        let requestBody = RwMLotManagerRequestBody.buildRwMLotUnStockTagging(materialLotList);
        let requestHeader = new RwMLotManagerRequestHeader();
        let request = new Request(requestHeader, requestBody, UrlConstant.GCRwMaterialLotManageUrl);
        let requestObject = {
            request: request,
            success: object.success
        }
        MessageUtils.sendRequest(requestObject);
    }

    static sendAddShipOrderIdRequest = (object) => {
        let {materialLotList, shipOrderId} = object;
        let requestBody = RwMLotManagerRequestBody.buildMLotAddShipOrderId(materialLotList, shipOrderId);
        let requestHeader = new RwMLotManagerRequestHeader();
        let request = new Request(requestHeader, requestBody, UrlConstant.GCRwMaterialLotManageUrl);
        let requestObject = {
            request: request,
            success: object.success
        }
        MessageUtils.sendRequest(requestObject);
    }

}

