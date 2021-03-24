import EntityScanViewTable from '../EntityScanViewTable';
import { Button, Col, Input, Row } from 'antd';
import { Notification } from '../../notice/Notice';
import I18NUtils from '../../../api/utils/I18NUtils';
import { i18NCode } from '../../../api/const/i18n';
import MessageUtils from '../../../api/utils/MessageUtils';
import { Tag } from 'antd';
import EventUtils from '../../../api/utils/EventUtils';
import RmaMLotManagerRequest from '../../../api/gc/rma-mlot-manager/RmaMLotManagerRequest';
import { PrintServiceUrl } from '../../../api/gc/GcConstDefine';
import PrintUtils from '../../../api/utils/PrintUtils';
import RwMLotManagerRequest from '../../../api/gc/rw-manager/RwMLotManagerRequest';

/**
 * RW发料标签补打
 */
export default class GcRwMLotLabelPrintTable extends EntityScanViewTable {

    static displayName = 'GcRwMLotLabelPrintTable';

    createButtonGroup = () => {
        let buttons = [];
        buttons.push(this.createPrintLable());
        return buttons;
    }

    createTagGroup = () => {
        let tags = [];
        tags.push(this.createPrintCountInput());
        tags.push(this.createPieceQty());
        tags.push(this.createTotalNumber());
        return tags;
    }

    createPrintCountInput = () => {
        return  <Row gutter={6}>
            <Col span={3} >
                <span style={{marginLeft:"10px", fontSize:"19px"}}>
                    {I18NUtils.getClientMessage(i18NCode.PrintCount)}:
                </span>
            </Col>
            <Col span={3}>
                <Input ref={(printCount) => { this.printCount = printCount }} defaultValue={2} key="printCount" placeholder="打印份数"/>
            </Col>
        </Row>
    }

    createPieceQty = () => {
        return <Tag color="#2db7f5">{I18NUtils.getClientMessage(i18NCode.PackageQty)}：{this.state.data.length}</Tag>
    }

    createTotalNumber = () => {
        let materialLotUnits = this.state.data;
        let count = 0;
        if(materialLotUnits && materialLotUnits.length > 0){
            materialLotUnits.forEach(data => {
                if (data.currentQty != undefined) {
                    count = count + data.currentQty;
                }
            });
        }
        return <Tag color="#2db7f5">{I18NUtils.getClientMessage(i18NCode.TotalQty)}：{count}</Tag>
    }

    RwIssueLabelPrint = () => {
        let self = this;
        let materialLotList = this.state.data;
        if (materialLotList.length === 0) {
            Notification.showNotice(I18NUtils.getClientMessage(i18NCode.AddAtLeastOneRow));
            return;
        }

        let printCount = this.printCount.state.value;

        self.setState({
            loading: true
        });
        EventUtils.getEventEmitter().on(EventUtils.getEventNames().ButtonLoaded, () => self.setState({loading: false}));

        let requestObject = {
            materialLotList : materialLotList,
            success: function(responseBody) {
                if (self.props.resetData) {
                    self.props.resetData();
                }
                let url = PrintServiceUrl.RwLotIdIssue;
                responseBody.parameterList.forEach((parameter) => {
                    PrintUtils.MultiPrintWithBtIbForWeb(url, parameter, printCount);
                });
                MessageUtils.showOperationSuccess();
            }
        }
        RwMLotManagerRequest.sendPrintLableRequest(requestObject);
    }

    createPrintLable = () => {
        return <Button key="receive" type="primary" style={styles.tableButton} loading={this.state.loading} icon="plus" onClick={this.RwIssueLabelPrint}>
                        {I18NUtils.getClientMessage(i18NCode.PrintLable)}
                    </Button>
    }

}

const styles = {
    tableButton: {
        marginLeft:'20px'
    }
};
