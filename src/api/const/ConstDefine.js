
const ServerAddress = {
    NewbiestUrl : "http://127.0.0.1:8080"
    // NewbiestUrl : "http://172.16.15.188:8080"
    // NewbiestUrl : "http://192.168.2.164:8080"
}

/**
 * 定义URL 不同的模块请求不同的地址
 */
const ModuleUrlConstant = {
    Framework: ServerAddress.NewbiestUrl + "/framework/",
    Security: ServerAddress.NewbiestUrl + "/security/",
    UI: ServerAddress.NewbiestUrl + "/ui/",
    StatusMachine: ServerAddress.NewbiestUrl + "/common/sm/",
    MMS: ServerAddress.NewbiestUrl + "/mms/",
    KMS: ServerAddress.NewbiestUrl + "/kms/",
    RTM: ServerAddress.NewbiestUrl + "/rtm/",
    GC: ServerAddress.NewbiestUrl + "/gc/"
}

const DataBaseType = {
    oracle: "oracle"
}
const DateFormatType = {
    Date: "YYYY-MM-DD",
    DateTime: "YYYY-MM-DD HH:mm:ss",
    Time: "HH:mm:ss"
}

const UrlConstant = {
    //Framework
    EntityManagerUrl: ModuleUrlConstant.Framework + "entityManage",
    EntityUploadFileUrl: ModuleUrlConstant.Framework + "uploadEntityFile",
    EntityDownloadFileUrl: ModuleUrlConstant.Framework + "downloadEntityFile",
    EntityListManagerUrl: ModuleUrlConstant.Framework + "entityListManage",

     //Security
    UserManagerUrl: ModuleUrlConstant.Security + "userManage",
    UserImportUrl: ModuleUrlConstant.Security + "importUser",
    RoleManagerUrl: ModuleUrlConstant.Security + "roleManage",
    AuthorityManagerUrl: ModuleUrlConstant.Security + "authorityManage",

    //UI
    RefListMangerUrl: ModuleUrlConstant.UI + "refListManage",    
    RefTableManagerUrl: ModuleUrlConstant.UI + "refTableManage",
    TableMangerUrl: ModuleUrlConstant.UI + "tableManage",
    ExporttUrl: ModuleUrlConstant.UI + "export",
    ImportUrl:  ModuleUrlConstant.UI + "importData",

    //SM
    StatusModelManagerUrl: ModuleUrlConstant.StatusMachine + "statusModelManage",

    //KMS
    QuestionManagerUrl: ModuleUrlConstant.KMS + "questionManage",
    QuestionLineManagerUrl: ModuleUrlConstant.KMS + "questionLineManage",
    DynaxAnalyseUrl: ModuleUrlConstant.RTM + "analyseFile",

    //MMS
    RawMaterialManagerUrl: ModuleUrlConstant.MMS + "rawMaterialManage",
    MaterialLotManagerUrl: ModuleUrlConstant.MMS + "materialLotManage",
    MaterialLotInvManagerUrl: ModuleUrlConstant.MMS + "materialLotInvManage",
    ValidationPackMaterialLotsUrl: ModuleUrlConstant.MMS + "validationPackMaterialLots",
    PackMaterialLotsUrl: ModuleUrlConstant.MMS + "packMaterialLots",
    UnPackMaterialLotsUrl: ModuleUrlConstant.MMS + "unPackMaterialLots",
    MaterialLotStockInUrl: ModuleUrlConstant.MMS + "stockIn",
    AppendPackMaterialLotsUrl: ModuleUrlConstant.MMS + "appendPackMaterialLots",

    //GC
    FinishGoodManageUrl: ModuleUrlConstant.GC + "finishGoodManage",
    GCMaterialLotManagerUrl: ModuleUrlConstant.GC + "materialLotManage",
    GCStockOutCheckUrl: ModuleUrlConstant.GC + "stockOutCheck",
    GCAsyncUrl: ModuleUrlConstant.GC + "asyncManage",
    GCCheckInventoryUrl: ModuleUrlConstant.GC + "checkInventory",
    GCReTestUrl: ModuleUrlConstant.GC + "reTest",
    GCStockOutUrl: ModuleUrlConstant.GC + "stockOut",
    GCStockInUrl: ModuleUrlConstant.GC + "stockIn",
    GCGetPringBboxParameterUrl: ModuleUrlConstant.GC + "getPrintBboxParameter",
    GCValidationSoOrReTestUrl: ModuleUrlConstant.GC + "validationSoOrReTest",


};

const SystemRefListName = {
    Language: "Language"
};

const RefTableName = {
    NBOrg: "NBOrg"
};

/**
 * 错误码 需要前端自行国际化
 */
const ErrorCode = {
    NetworkError: "common.network_error"
};

const EntityModel = {
    NBMessage: "com.newbiest.base.model.NBMessage",
    NBUser: "com.newbiest.security.model.NBUser",
    MaterialEvent: "com.newbiest.mms.state.model.MaterialEvent"
};

/**
 * 成功失败标志位
 */
const ResultIdentify = {
    Success: "SUCCESS",
    Fail: "FAIL",
    Yes: "Y",
    No: "N"
};

const Language = {
    Chinese: "Chinese",
    English: "English"
};

/**
 * 所有对象都有自动带出的主键
 */
const DefaultRowKey = "objectRrn";

/**
 * 默认的排序栏位。没手动给值的时候要自动生成值。即表格中数据的最大值加1
 */
const DefaultOrderKey = "seqNo";

//js里面typeof判断所需要的类型
const Type = {
    function: "function"
}

const SqlType = {
    And: " AND ",
    Eq: " = ",
    Where: " WHERE ",
    Like: " LIKE ",
    Gt: " >= ",
    Lt: " <= ",
    toDate: "to_date",
    DateTime: "YYYY-MM-DD HH24:mi:ss",
    Date: "YYYY-MM-DD"
}


export {UrlConstant, DataBaseType, DateFormatType, SystemRefListName, RefTableName, ErrorCode, EntityModel, ResultIdentify, Language, DefaultRowKey, DefaultOrderKey, Type, SqlType};