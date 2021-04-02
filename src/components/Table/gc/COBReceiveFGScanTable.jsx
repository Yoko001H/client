import { Button, Tag } from 'antd';
import I18NUtils from '../../../api/utils/I18NUtils';
import { i18NCode } from '../../../api/const/i18n';
import FinishGoodInvManagerRequest from '../../../api/gc/finish-good-manager/FinishGoodInvManagerRequest';
import MessageUtils from '../../../api/utils/MessageUtils';
import EntityScanViewTable from '../EntityScanViewTable';
import { Notification } from '../../notice/Notice';
import EventUtils from '../../../api/utils/EventUtils';

export default class COBReceiveFGScanTable extends EntityScanViewTable {

    static displayName = 'COBReceiveFGScanTable';

    getRowClassName = (record, index) => {
        if (record.errorFlag) {
            return 'error-row';
        } else {
            if(index % 2 ===0) {
                return 'even-row'; 
            } else {
                return ''; 
            }
        }
    };

    createButtonGroup = () => {
        let buttons = [];
        buttons.push(this.createDeleteAllButton());
        buttons.push(this.createReceiveButton());
        return buttons;
    }

    createTagGroup = () => {
        let tags = [];
        tags.push(this.createMaterialLotsNumber());
        tags.push(this.createStatistic());
        tags.push(this.createTotalNumber());
        tags.push(this.createErrorNumberStatistic());
        return tags;
    }

    createErrorNumberStatistic = () => {
        return <Tag color="#D2480A">{I18NUtils.getClientMessage(i18NCode.ErrorNumber)}：{this.getErrorCount()}</Tag>
    }

    getErrorCount = () => {
        let materialLots = this.state.data;
        let count = 0;
        if(materialLots && materialLots.length > 0){
            materialLots.forEach(data => {
                if(data.errorFlag){
                    count = count +1;
                }
            });
        }
        return count;
    }


    receive = () => {
        const self = this;
        const {data} = this.state;
        if (this.getErrorCount() > 0) {
            Notification.showError(I18NUtils.getClientMessage(i18NCode.ErrorNumberMoreThanZero));
            return;
        }

        self.setState({
            loading: true
        });
        EventUtils.getEventEmitter().on(EventUtils.getEventNames().ButtonLoaded, () => self.setState({loading: false}));

        if (data && data.length > 0) {
            let self = this;
            let requestObject = {
                mesPackedLots: data,
                success: function(responseBody) {
                    if (self.props.resetData) {
                        self.props.onSearch();
                        self.props.resetData();
                    }
                    MessageUtils.showOperationSuccess();
                }
            }
            FinishGoodInvManagerRequest.sendCOBReceiveRequest(requestObject);
        }
    }

    createMaterialLotsNumber = () => {
        let materialLotUnits = this.state.data;
        let cstIdList = [];
        if(materialLotUnits && materialLotUnits.length > 0){
            materialLotUnits.forEach(data => {
                if (cstIdList.indexOf(data.cstId) == -1) {
                    cstIdList.push(data.cstId);
                }
            });
        }
        return <Tag color="#2db7f5">{I18NUtils.getClientMessage(i18NCode.BoxQty)}：{cstIdList.length}</Tag>
    }

    createStatistic = () => {
        return <Tag color="#2db7f5">{I18NUtils.getClientMessage(i18NCode.PieceQty)}：{this.state.data.length}</Tag>
    }

    createTotalNumber = () => {
        let materialLotUnits = this.state.data;
        let count = 0;
        if(materialLotUnits && materialLotUnits.length > 0){
            materialLotUnits.forEach(data => {
                if (data.quantity != undefined) {
                    count = count + data.quantity;
                }
            });
        }
        return <Tag color="#2db7f5">{I18NUtils.getClientMessage(i18NCode.TotalQty)}：{count}</Tag>
    }
    
    createDeleteAllButton = () => {
        return <Button key="deleteAll" type="primary" style={styles.tableButton} icon="delete" loading={this.state.loading} onClick={this.deleteAllMaterialLot}>
                        {I18NUtils.getClientMessage(i18NCode.BtnDeleteAll)}
                    </Button>
    }

    deleteAllMaterialLot = () => {
        let self = this;
        if( self.props.data.length == 0){
            return;
        } else {
            self.props.resetData();
            MessageUtils.showOperationSuccess();
        }
    }

    createReceiveButton = () => {
        return <Button key="receive" type="primary" style={styles.tableButton} loading={this.state.loading} icon="import" onClick={this.receive}>
                        {I18NUtils.getClientMessage(i18NCode.BtnReceive)}
                    </Button>
    }

    refreshDelete = (records) => {
        let datas = this.state.data;
        let recordList = [];
        if (!(records instanceof Array)) {
            let cstId = records.cstId;
            datas.forEach((item) => {
                if(item.cstId == cstId){
                    recordList.push(item);
                }
            });
        } else {
            recordList = records;
        }
        recordList.forEach((record) => {
            let dataIndex = datas.indexOf(record);
            if (dataIndex > -1 ) {
                datas.splice(dataIndex, 1);
            }
        });
        this.setState({
            data: datas,
            selectedRows: [],
            selectedRowKeys: []
        })
        MessageUtils.showOperationSuccess();
    }

}

const styles = {
    tableButton: {
        marginLeft:'20px'
    }
};
