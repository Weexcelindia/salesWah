var ApplicationPageSize = JSON.parse(localStorage.getItem('ApplicationPageSize'));
var taskPageSize = ApplicationPageSize.PageSize;
var LoadLabelsByLanguage = JSON.parse(localStorage.getItem('LoadLabelsByLanguage'));

function LoadLabelOfTask() {

    var DashBoardDetails = JSON.parse(localStorage.getItem('DashBoardDetails'));

    //TaskListHeader
    var TaskListHeader = document.getElementById('TaskListHeader');
    if (TaskListHeader != null)
        TaskListHeader.innerHTML = LoadLabelsByLanguage.OpentaskList;

    //TaskDetailHeader
    var TaskDetailHeader = document.getElementById('TaskDetailHeader');
    if (TaskDetailHeader != null)
        TaskDetailHeader.innerHTML = LoadLabelsByLanguage.Detail;

    var TaskHeaderMenuTaskList = document.getElementById('TaskHeaderMenuTaskList');
    if (TaskHeaderMenuTaskList != null)
        TaskHeaderMenuTaskList.innerHTML = LoadLabelsByLanguage.OpentaskList;

    //TaskDetailsLabelAccountName
    var TaskDetailsLabelAccountName = document.getElementById('TaskDetailsLabelAccountName');
    if (TaskDetailsLabelAccountName != null)
        TaskDetailsLabelAccountName.innerHTML = LoadLabelsByLanguage.AccountName;

    //TaskDetailsLabelContactName
    var TaskDetailsLabelContactName = document.getElementById('TaskDetailsLabelContactName');
    if (TaskDetailsLabelContactName != null)
        TaskDetailsLabelContactName.innerHTML = LoadLabelsByLanguage.ContactName;

    //TaskDetailsLabelProductName
    var TaskDetailsLabelProductName = document.getElementById('TaskDetailsLabelProductName');
    if (TaskDetailsLabelProductName != null) {
        TaskDetailsLabelProductName.innerHTML = LoadLabelsByLanguage.ProductName;
    }

    var TaskDetailHeaderLabelDetail = document.getElementById('TaskDetailHeaderLabelDetail');
    if (TaskDetailHeaderLabelDetail != null) {
        TaskDetailHeaderLabelDetail.innerHTML = LoadLabelsByLanguage.Detail;
    }


    //TaskDetailsLabeltasktype
    var TaskDetailsLabeltasktype = document.getElementById('TaskDetailsLabeltasktype');
    if (TaskDetailsLabeltasktype != null)
        TaskDetailsLabeltasktype.innerHTML = LoadLabelsByLanguage.TaskType;

    //TaskDetailsLabelStatus
    var TaskDetailsLabelStatus = document.getElementById('TaskDetailsLabelStatus');
    if (TaskDetailsLabelStatus != null)
        TaskDetailsLabelStatus.innerHTML = LoadLabelsByLanguage.Status;

    //TaskDetailsLabelFollowUpDate
    var TaskDetailsLabelFollowUpDate = document.getElementById('TaskDetailsLabelFollowUpDate');
    if (TaskDetailsLabelFollowUpDate != null)
        TaskDetailsLabelFollowUpDate.innerHTML = LoadLabelsByLanguage.FollowUpDate;

    //TaskDetailsLabelPendingSince
    var TaskDetailsLabelPendingSince = document.getElementById('TaskDetailsLabelPendingSince');
    if (TaskDetailsLabelPendingSince != null)
        TaskDetailsLabelPendingSince.innerHTML = LoadLabelsByLanguage.PendingSince;

    //TaskDetailsLabelDealValue
    var TaskDetailsLabelDealValue = document.getElementById('TaskDetailsLabelDealValue');
    if (TaskDetailsLabelDealValue != null)
        TaskDetailsLabelDealValue.innerHTML = LoadLabelsByLanguage.DealValue + '<br/>(' + DashBoardDetails.Currency + ')';

    //TaskDetailsLabelComments
    var TaskDetailsLabelComments = document.getElementById('TaskDetailsLabelComments');
    if (TaskDetailsLabelComments != null)
        TaskDetailsLabelComments.innerHTML = LoadLabelsByLanguage.Comment;




}


//////////////////////////////////////TaskList Start///////////////////////////////

//GetTaskList
function GetTaskList(pageIndex) {

    try {
        document.getElementById('divLoading').style.display = 'block';
        var SearchKey = '';
        var Search = JSON.parse(localStorage.getItem('Todays_Task'));
        var MethodName = "/GetOpenTaskList";
        var _TaskStatus = TaskStatus;
        var user = JSON.parse(localStorage.getItem('LoggedUserDetails'));
        var _MobileCredential = MobileCredential;
        _MobileCredential.MobileAppKeyId = user.MobileAppKeyId;

        if (Search != null)
            SearchKey = 'Todays_Task';
        else
            SearchKey = '';

        var Data = { pageIndex: pageIndex, pageSize: taskPageSize, filterPattern: SearchKey, orderByClause: "duedate", userId: user.UserId, order: "Asc", status: _TaskStatus.Open, Credential: _MobileCredential };
        GetResultFromService(MethodName, Data);

    } catch (exception) { }
}

//On TaskListtxtSearch
var TaskListtxtSearch = document.getElementById('TaskListtxtSearch');
if (TaskListtxtSearch != null) {

    $("#TaskListtxtSearch").keyup(function (e) {
        if (e.keyCode == 13) {
            try {
                document.getElementById('divLoading').style.display = 'block';
                pageIndexTaskList = 1;
                swiperNestedTaskList.setWrapperTranslate(0, 0, 0)
                swiperNestedTaskList.removeAllSlides();
                var _TaskStatus = TaskStatus;
                var MethodName = "/GetOpenTaskList";
                var user = JSON.parse(localStorage.getItem('LoggedUserDetails'));
                var _MobileCredential = MobileCredential;
                _MobileCredential.MobileAppKeyId = user.MobileAppKeyId;

                var Data = { pageIndex: 1, pageSize: taskPageSize, filterPattern: $.trim(TaskListtxtSearch.value), orderByClause: "duedate", userId: user.UserId, order: "Asc", status: _TaskStatus.Open, Credential: _MobileCredential };
                GetResultFromService(MethodName, Data);

            } catch (exception) { }
        }
    });

    $("#ImgTaskListSearch").click(function () {
        try {
            document.getElementById('divLoading').style.display = 'block';
            pageIndexTaskList = 1;
            swiperNestedTaskList.setWrapperTranslate(0, 0, 0)
            swiperNestedTaskList.removeAllSlides();
            var _TaskStatus = TaskStatus;
            var MethodName = "/GetOpenTaskList";
            var user = JSON.parse(localStorage.getItem('LoggedUserDetails'));
            var _MobileCredential = MobileCredential;
            _MobileCredential.MobileAppKeyId = user.MobileAppKeyId;

            var Data = { pageIndex: 1, pageSize: taskPageSize, filterPattern: $.trim(TaskListtxtSearch.value), orderByClause: "duedate", userId: user.UserId, order: "Asc", status: _TaskStatus.Open, Credential: _MobileCredential };
            GetResultFromService(MethodName, Data);

        } catch (exception) { }

    });
}


function LoadTaskListResult(result) {
    var TaskCreatedSuccessfully = JSON.parse(localStorage.getItem('TaskCreatedSuccessfully'));
    if (TaskCreatedSuccessfully != null) {
        if (TaskCreatedSuccessfully.Result == 'TaskCreatedSuccessfully') {
            localStorage.removeItem('TaskCreatedSuccessfully');
            ShowMessage(LoadLabelsByLanguage.TaskSaveSuccessfully);
        }
    }


    if (swiperNestedTaskList == null) {
        var Search = JSON.parse(localStorage.getItem('Todays_Task'));
        if (Search != null) {
            if (result.d.length == 0) {
                $("#TaskListulDetails").append("<div class='swiper-slide '><div class='dlist'> <ul><li><a href='#' ><h4>" + LoadLabelsByLanguage.NoTaskToDoForToday + "</h4></a></li></ul></div></div>");
            }
        }
        else
            if (result.d.length == 0) {
                $("#TaskListulDetails").append("<div class='swiper-slide '><div class='dlist'> <ul><li><a href='#' ><h4>  No Record Found </h4></a></li></ul></div></div>");

            }
    }

    var TaskListtxtSearch = document.getElementById('TaskListtxtSearch');
    if (TaskListtxtSearch != null) {
        var search = $.trim(TaskListtxtSearch.value)
        if (search.length > 0) {
            if (swiperNestedTaskList != null) {
                if (pageIndexTaskList == 1) {
                    swiperNestedTaskList.removeAllSlides();
                    $("#TaskListulDetails").empty();
                }
                if (swiperNestedTaskList.slides.length == 0 && result.d.length == 0) {
                    $("#TaskListulDetails").append("<div class='swiper-slide '><div class='dlist'> <ul><li><a href='#' ><h4>  No Record Found </h4></a></li></ul></div></div>");
                    swiperNestedTaskList.reInit();
                }
            }
        }
    }




    if (result.d.length > 0) {
        for (var i = 0; i < result.d.length; i++) {

            var ReplacedAccountName = result.d[i].AccountName.replace(/'/g, "\\'");
            var ReplacedConatctName = result.d[i].ConatctName.replace(/'/g, "\\'");
            var ReplacedProductName = result.d[i].ProductName.replace(/'/g, "\\'");
            var ReplacedTaskDescription = result.d[i].TaskDescription.replace(/'/g, "\\'");

            var _TaskDetailObject = "{'AccountName':'" + ReplacedAccountName + "','ContactName':'" + ReplacedConatctName + "','Productname':'" + ReplacedProductName + "','TaskStatus':'" + result.d[i].Status + "','FollowUpDate':'" + result.d[i].FollowUpDate + "','Linkeddealvalue':'" + result.d[i].DealValue + "','PendingSince':'" + result.d[i].TaskAge + "','ID':'" + result.d[i].Id + "','AccountOwnerID':'" + result.d[i].AccountOwnerID + "','ContactID':'" + result.d[i].ConatctId + "','ProductID':'" + result.d[i].ProductId + "','TaskDescription':'" + ReplacedTaskDescription + "'}"

            $("#TaskListulDetails").append("<div class='swiper-slide'><div class='dlist'><ul><li> <a href='detail.html' onclick=\"GETTaskObject(" + _TaskDetailObject + ")\"><h4>" + result.d[i].TaskDescription + " due by " + convertJSONDateToReadableFormat(result.d[i].FollowUpDate) + " </h4><p>" + result.d[i].ConatctName + " , " + result.d[i].AccountName + "</p></a></li></ul></div></div>");
            if (swiperNestedTaskList != null) {
                swiperNestedTaskList.reInit();
            }
        }
    }
    if (swiperNestedTaskList == null) {
        LoadTaskSlider();
    }
    document.getElementById('divLoading').style.display = 'none';
    localStorage.removeItem('Todays_Task');
}

//////////////////////////////////////TaskList End///////////////////////////////
//////////////////////////////////////Task detail Start///////////////////////////////

function GETTaskObject(Obj) {
    localStorage.removeItem('TaskObject');
    localStorage.setItem('TaskObject', JSON.stringify({
        AccountName: Obj.AccountName,
        ContactName: Obj.ContactName,
        Productname: Obj.Productname,
        TaskStatus: Obj.TaskStatus,
        FollowUpDate: Obj.FollowUpDate,
        Linkeddealvalue: Obj.Linkeddealvalue,
        PendingSince: Obj.PendingSince,
        TaskId: Obj.ID,
        AccountOwnerID: Obj.AccountOwnerID,
        ContactID: Obj.ContactID,
        ProductID: Obj.ProductID,
        TaskDescription: Obj.TaskDescription
    }));
}

//GetTaskStatusDDlValues
function GetTaskStatusDDlValues() {

    try {
        var MethodName = "/GetTaskSeedList";

        var user = JSON.parse(localStorage.getItem('LoggedUserDetails'));

        var _MobileCredential = MobileCredential;
        _MobileCredential.MobileAppKeyId = user.MobileAppKeyId;

        var Data = { Credential: _MobileCredential };

        GetResultFromService(MethodName, Data);
    } catch (exception) { }
}


//BindChanceDropdown
function SetTaskStatusSeedValues(result) {

    try {

        localStorage.removeItem('TaskStatusDDL');
        localStorage.setItem('TaskStatusDDL', JSON.stringify({
            Result: result
        }));
    }
    catch (exception) { }
}

//Load DropDown Only OnPageLoad
function LoadTaskStatusSeedDropDown() {

    try {

        /*var TaskDetailsddlStatus = document.getElementById('TaskDetailsddlStatus');
        var TaskStatusDDL = JSON.parse(localStorage.getItem('TaskStatusDDL'));

        $("#TaskDetailsddlStatus").empty();
        var option1 = document.createElement("option");
        option1.text = "--None--";
        option1.value = -1;
        TaskDetailsddlStatus.add(option1, null);

        if (TaskStatusDDL.Result.d.length > 0) {
        for (var i = 0; i < TaskStatusDDL.Result.d.length; i++) {
        var option = document.createElement("option");
        option.text = TaskStatusDDL.Result.d[i].value;
        option.value = TaskStatusDDL.Result.d[i].key;
        TaskDetailsddlStatus.add(option, null);
        }
        var TaskObject = JSON.parse(localStorage.getItem('TaskObject'));

        var SetValue = TaskObject.TaskStatus;
        if (SetValue == '0')
        SetValue = -1;
        $("#TaskDetailsddlStatus").val(SetValue);


        }*/
    } catch (exception) { }
}

function SetTaskDetailObjectToPage() {

    var TaskObject = JSON.parse(localStorage.getItem('TaskObject'));

    var TaskCreatedSuccessfully = JSON.parse(localStorage.getItem('TaskCreatedSuccessfully'));
    if (TaskCreatedSuccessfully != null) {
        if (TaskCreatedSuccessfully.Result == 'TaskCreatedSuccessfully') {
            localStorage.removeItem('TaskCreatedSuccessfully');
            ShowMessage(LoadLabelsByLanguage.TaskCreatedSuccessfully);
        }
    }

    var TaskDetailHeader = document.getElementById('TaskDetailHeader');
    if (TaskDetailHeader != null) {
        //      
        if (TaskObject.ContactName.length > 30) {
            TaskDetailHeader.innerHTML = TaskObject.ContactName.substring(0, 30) + '...';
        }
        else {
            TaskDetailHeader.innerHTML = TaskObject.ContactName;

        }

    }

    //TaskObject.ContactName
    //TaskDetailstxtAccountName
    var TaskDetailstxtAccountName = document.getElementById('TaskDetailstxtAccountName');
    TaskDetailstxtAccountName.value = TaskObject.AccountName;

    //TaskDetailstxtContactName
    var TaskDetailstxtContactName = document.getElementById('TaskDetailstxtContactName');
    TaskDetailstxtContactName.value = TaskObject.ContactName;

    //TaskDetailstxtTasktype
    var TaskDetailstxtTasktype = document.getElementById('TaskDetailstxtTasktype');
    TaskDetailstxtTasktype.value = TaskObject.TaskDescription;

    //BindContactAccountDetailData();

    //TaskDetailstxtProductName
    var TaskDetailstxtProductName = document.getElementById('TaskDetailstxtProductName');
    TaskDetailstxtProductName.value = TaskObject.Productname;

    //Task Status
    //LoadTaskStatusSeedDropDown();

    //TaskDetailstxtFollowUpDate
    var TaskDetailstxtFollowUpDate = document.getElementById('TaskDetailstxtFollowUpDate');
    TaskDetailstxtFollowUpDate.value = convertJSONDateToReadableFormat(TaskObject.FollowUpDate);

    //TaskDetailstxtAccountName
    var TaskDetailstxtPendingSince = document.getElementById('TaskDetailstxtPendingSince');
    TaskDetailstxtPendingSince.value = TaskObject.PendingSince;

    //TaskDetailstxtDealValue
    var TaskDetailstxtDealValue = document.getElementById('TaskDetailstxtDealValue');
    TaskDetailstxtDealValue.value = TaskObject.Linkeddealvalue;



    LoadTaskDetailSlider();
}
/////////////Task Add New////////////////////////
var AddNewTaskDetailstxtAccountName = document.getElementById('AddNewTaskDetailstxtAccountName');
if (AddNewTaskDetailstxtAccountName != null) {
    $("#AddNewTaskDetailstxtAccountName").focusout(function () {
        var AddNewTaskDetailsddlContactNameDDl = document.getElementById('AddNewTaskDetailsddlContactNameDDl');
        $("#AddNewTaskDetailsddlContactNameDDl").empty();
        var option1 = document.createElement("option");
        option1.text = "--None--";
        option1.value = -1;
        AddNewTaskDetailsddlContactNameDDl.add(option1, null);
        if ($(this).val() != '') {
            accountNameLst.length = 0;
            BindContactAccountData();
        }
    });
}


//TaskAddNewTaskBtnSaveTask 
var TaskAddNewTaskBtnSaveTask = document.getElementById('TaskAddNewTaskBtnSaveTask');
if (TaskAddNewTaskBtnSaveTask != null) {
    TaskAddNewTaskBtnSaveTask.addEventListener('click', function () {

        SaveNewTask();
    }, false);
}
/////////////Task Add New End////////////////////////
//////////////////////////////////////Task detailt End///////////////////////////////
function GetActiveAccounts() {
    try {



    } catch (exception) { }
}

/*******************************************************/
var accountNameLst = new Array();

//On AddNewTaskDetailstxtAccountName
var AddNewTaskDetailstxtAccountName = document.getElementById('AddNewTaskDetailstxtAccountName');
if (AddNewTaskDetailstxtAccountName != null) {

    $("#AddNewTaskDetailstxtAccountName").keyup(function () {
        try {

            if ($("#AddNewTaskDetailstxtAccountName").val().length < 3) {

                accountNameLst.length = 0;

            }

        } catch (exception) { }

    });

}



function GetActiveAccountsResult(result) {
    try {


        if (result.d.length > 0) {
            for (var i = 0; i < result.d.length; i++) {
                accountNameLst[i] = result.d[i].AccountName;
            }
        }

        $("#AddNewTaskDetailstxtAccountName").autocomplete({
            source: accountNameLst
        });
        $("#AddNewTaskDetailstxtAccountName").autocomplete("search", $("#AddNewTaskDetailstxtAccountName").val());
        //$("#AddNewTaskDetailstxtAccountName").autocomplete("close");
       
        document.getElementById('divLoading').style.display = 'none';
    }
    catch (exception) { }
}
$('html').click(function () {
    var AddNewTaskDetailstxtAccountName = document.getElementById('AddNewTaskDetailstxtAccountName');
    if (AddNewTaskDetailstxtAccountName != null) {
        //alert($('.ui-autocomplete.ui-widget:visible').length);
        if ($('.ui-autocomplete.ui-widget:visible').length == 1) {
            $("#AddNewTaskDetailstxtAccountName").autocomplete("close");
        }
        


    }

});

/******************************************************/




function BindContactAccountData() {
    try {

        var MethodName = "/GetAccountByName";
        var user = JSON.parse(localStorage.getItem('LoggedUserDetails'));
        var _MobileCredential = MobileCredential;
        _MobileCredential.MobileAppKeyId = user.MobileAppKeyId;

        var _accountName = $.trim($("#AddNewTaskDetailstxtAccountName").val());

        var Data = { AccountName: _accountName, Credential: _MobileCredential };
        GetResultFromService(MethodName, Data);
    } catch (exception) { }
}

function GetAccountByNameResult(result) {
    try {
        if (result.d != null) {
            localStorage.removeItem('GetAccountByNameForTaskObject');
            localStorage.setItem('GetAccountByNameForTaskObject', JSON.stringify({
                Result: result
            }));
            GetAllContactsForAccounts();
        }
    }
    catch (exception) { }
}

function GetAllContactsForAccounts() {
    try {

        var MethodName = "/GetAllContactsForAccounts?ContactForAccount";

        var DealAccountID = 0, Data, CRMAccountID = 0;

        var user = JSON.parse(localStorage.getItem('LoggedUserDetails'));

        var _MobileCredential = MobileCredential;

        _MobileCredential.MobileAppKeyId = user.MobileAppKeyId;

        var CRMAccount = JSON.parse(localStorage.getItem('GetAccountByNameForTaskObject'));


        var SaleswahCrmlitePageURL = JSON.parse(localStorage.getItem('SaleswahCrmlitePageURL'));
        if (SaleswahCrmlitePageURL != null) {
            if (SaleswahCrmlitePageURL.URL == 'account_detail_html') {
                localStorage.removeItem('SaleswahCrmlitePageURL');

                CRMAccount = JSON.parse(localStorage.getItem('AccountObject'));
                CRMAccountID = CRMAccount.AccountId
                // localStorage.removeItem('AccountObject');
            }
            else
                if (SaleswahCrmlitePageURL.URL == 'deal_detail_html') {
                    localStorage.removeItem('SaleswahCrmlitePageURL');

                    CRMAccount = JSON.parse(localStorage.getItem('DealObject'));
                    //localStorage.removeItem('DealObject');
                    DealAccountID = CRMAccount.Accountid;
                }
        }
        if (DealAccountID != 0)
            Data = { AccountId: DealAccountID, Credential: _MobileCredential };
        else if (CRMAccountID != 0)
            Data = { AccountId: CRMAccountID, Credential: _MobileCredential };
        else
            Data = { AccountId: CRMAccount.Result.d.AccountId, Credential: _MobileCredential };

        GetResultFromService(MethodName, Data);
    } catch (exception) { }
}

function GetAllContactForAccountFromTaskResult(Result) {

    try {
        if (Result.d != null) {
            var AddNewTaskDetailsddlContactNameDDl = document.getElementById('AddNewTaskDetailsddlContactNameDDl');
            var TaskContactNameDDL = Result.d;

            $("#AddNewTaskDetailsddlContactNameDDl").empty();
            var option1 = document.createElement("option");
            option1.text = "--None--";
            option1.value = -1;
            AddNewTaskDetailsddlContactNameDDl.add(option1, null);
            if (Result.d.length > 0) {
                for (var i = 0; i < Result.d.length; i++) {
                    var option = document.createElement("option");
                    option.text = Result.d[i].FullName;
                    option.value = Result.d[i].Id;
                    AddNewTaskDetailsddlContactNameDDl.add(option, null);
                }
                //                var ContactObject = JSON.parse(localStorage.getItem('ContactObject'));
                //                var SetValue = ContactObject.ContactId;
                //                if (SetValue == '')
                //                    SetValue = -1;
                //                $("#AddNewTaskDetailsddlContactNameDDl").val(SetValue);
                var SetValue = -1;
                $("#AddNewTaskDetailsddlContactNameDDl").val(SetValue);
            }
        }
    } catch (exception) { }
}


function BindDDL() {

    //    var AddNewTaskDetailsddlContactNameDDl = document.getElementById('AddNewTaskDetailsddlContactNameDDl');
    //    var option1 = document.createElement("option");
    //    option1.text = "--Enter account name--";
    //    option1.value = -1;
    //    AddNewTaskDetailsddlContactNameDDl.add(option1, null);


    localStorage.removeItem('GetAllProducts');
    var _DealProductCategoryDDL = JSON.parse(localStorage.getItem('GetAllProducts'));
    var _TaskTypeDDL = JSON.parse(localStorage.getItem('GetAllTaskMasterObj'));
    //Bind Designation....
    if (_DealProductCategoryDDL == null) {
        GetAllProductList();
    }
    else {
        LoadProductCategoryDDL();
    }

    if (_TaskTypeDDL == null) {
        GetAllTaskTypeMaster();
    }
    else {
        LoadGetAllTaskTypeMasterDDL();
    }
}

//GetAllProductCategoryList
function GetAllProductList() {
    try {

        var MethodName = "/GetAllProducts";
        var user = JSON.parse(localStorage.getItem('LoggedUserDetails'));
        var _MobileCredential = MobileCredential;
        _MobileCredential.MobileAppKeyId = user.MobileAppKeyId;
        var Data = { Credential: _MobileCredential };
        GetResultFromService(MethodName, Data);
    } catch (exception) { }
}

//Bind GetAllProductCategoryList result
function SetAllProducts(result) {
    try {

        localStorage.removeItem('GetAllProducts');
        localStorage.setItem('GetAllProducts', JSON.stringify({
            Result: result
        }));
        LoadProductCategoryDDL();

    }
    catch (exception) { }
}

//Load DropDown Only OnPageLoad
function LoadProductCategoryDDL() {
    try {

        var AddNewTaskDetailsddlProduct = document.getElementById('AddNewTaskDetailsddlProduct');
        var ProductCategoryDDL = JSON.parse(localStorage.getItem('GetAllProducts'));
        $("#AddNewTaskDetailsddlProduct").empty();
        //To Set First row   as (solution,budget,chance) DDL getting None from sp so here is too None
        //        var option1 = document.createElement("option");
        //        option1.text = "--None--";
        //        option1.value = -1;
        //        DealDetailsddlProductCategory.add(option1, null);

        if (ProductCategoryDDL.Result.d.length > 0) {
            for (var i = 0; i < ProductCategoryDDL.Result.d.length; i++) {
                var option = document.createElement("option");
                option.text = ProductCategoryDDL.Result.d[i].value;
                option.value = ProductCategoryDDL.Result.d[i].key;
                AddNewTaskDetailsddlProduct.add(option, null);
            }
        }
        var DealObject = JSON.parse(localStorage.getItem('DealObject'));
        var SetValue = DealObject.ProductId;
        if (SetValue == '')
            SetValue = -1;
        $("#AddNewTaskDetailsddlProduct").val(SetValue);

    } catch (exception) { }
}


//GetAllTaskTypeMaster
function GetAllTaskTypeMaster() {
    try {

        var MethodName = "/GetAlltasks";
        var user = JSON.parse(localStorage.getItem('LoggedUserDetails'));
        var _MobileCredential = MobileCredential;
        _MobileCredential.MobileAppKeyId = user.MobileAppKeyId;
        var Data = { Credential: _MobileCredential };
        GetResultFromService(MethodName, Data);
    } catch (exception) { }
}

//Bind GetAllProductCategoryList result
function SetAllTaskTypeMaster(result) {
    try {

        localStorage.removeItem('GetTaskTypeMaster');
        localStorage.setItem('GetTaskTypeMaster', JSON.stringify({
            Result: result
        }));
        LoadGetAllTaskTypeMasterDDL();

    }
    catch (exception) { }
}



//Load DropDown Only OnPageLoad
function LoadGetAllTaskTypeMasterDDL() {
    try {

        var AddNewTaskDetailsddlTaskType = document.getElementById('AddNewTaskDetailsddlTaskType');
        var GetTaskTypeMaster = JSON.parse(localStorage.getItem('GetTaskTypeMaster'));
        $("#AddNewTaskDetailsddlTaskType").empty();
        //To Set First row   as (solution,budget,chance) DDL getting None from sp so here is too None
        var option1 = document.createElement("option");
        option1.text = "--None--";
        option1.value = -1;
        AddNewTaskDetailsddlTaskType.add(option1, null);

        if (GetTaskTypeMaster.Result.d.length > 0) {
            for (var i = 0; i < GetTaskTypeMaster.Result.d.length; i++) {
                var option = document.createElement("option");
                option.text = GetTaskTypeMaster.Result.d[i].value;
                option.value = GetTaskTypeMaster.Result.d[i].key;
                AddNewTaskDetailsddlTaskType.add(option, null);
            }
        }
        $("#AddNewTaskDetailsddlTaskType").val(SetValue);

    } catch (exception) { }
}

function ValidateTask() {


    var flag = true;
    var errorMsg = "";

    if ($('#AddNewTaskDetailsddlTaskType option:selected').val() == -1) {
        errorMsg = errorMsg + "\n* " + LoadLabelsByLanguage.SorryYouHaveNotSelectTask + "<br/>";

        flag = false;
    }


    if ($('#AddNewTaskDetailsddlContactNameDDl option:selected').val() == -1) {

        errorMsg = errorMsg + "\n* " + LoadLabelsByLanguage.SorryYouHaveNotSelectContact + "<br/>";

        flag = false;
    }


    if (new Date($.trim($("#AddNewTaskDetailstxtFollowUpDate").val())) < new Date(Today())) {

        errorMsg = errorMsg + "\n* " + LoadLabelsByLanguage.FollowupdatemustbeGreaterThenCurrentDate + "<br/>";

        flag = false;
    }


    if ($.trim($("#AddNewTaskDetailstxtAccountName").val()) == "") {

        errorMsg = errorMsg + "\n* " + LoadLabelsByLanguage.YoumustfillAccountName + "<br/>";

        flag = false;
    }

    if (flag == false) {
        ShowMessage(errorMsg);
    }

    return flag;
}

function ValidateTaskDetail() {


    var flag = true;
    var errorMsg = "";

    if ($('#TaskDetailsddlStatus option:selected').val() == -1) {
        errorMsg = errorMsg + "\n* " + LoadLabelsByLanguage.SorryYouHaveNotSelectTask + "<br/>";

        flag = false;
    }


    if ($.trim($("#TaskDetailstxtContactName").val()) == '') {

        errorMsg = errorMsg + "\n* " + LoadLabelsByLanguage.SorryYouHaveNotSelectContact + "<br/>";

        flag = false;
    }


    if (new Date($.trim($("#TaskDetailstxtFollowUpDate").val())) < new Date(Today())) {

        errorMsg = errorMsg + "\n* " + LoadLabelsByLanguage.FollowupdatemustbeGreaterThenCurrentDate + "<br/>";

        flag = false;
    }


    if ($.trim($("#TaskDetailstxtAccountName").val()) == "") {

        errorMsg = errorMsg + "\n* " + LoadLabelsByLanguage.YoumustfillAccountName + "<br/>";

        flag = false;
    }

    if (flag == false) {
        ShowMessage(errorMsg);
    }

    return flag;
}
//long CreateNewTask(long TaskTypeId, Guid SalesExecId, long Contactid, DateTime DueDate, long ProductId, string Comment, Guid CommenterId, MobileCredential Credential)
function SaveNewTask() {
    try {
        if (ValidateTask() == true) {

            var user = JSON.parse(localStorage.getItem('LoggedUserDetails'));
            var _MobileCredential = MobileCredential;
            _MobileCredential.MobileAppKeyId = user.MobileAppKeyId;

            var _taskTypeId = $('#AddNewTaskDetailsddlTaskType option:selected').val();
            var _contactid = $('#AddNewTaskDetailsddlContactNameDDl option:selected').val();
            var _productId = $('#AddNewTaskDetailsddlProduct option:selected').val();

            var _comment = $.trim($("#AddNewTaskDetailstxtareaComments").val());
            var _dueDate = $.trim($("#AddNewTaskDetailstxtFollowUpDate").val());

            var MethodName, DealObject, Data;
            var SaleswahCrmlitePageURL = JSON.parse(localStorage.getItem('SaleswahCrmlitePageURL'));
            if (SaleswahCrmlitePageURL != null) {
                if (SaleswahCrmlitePageURL.URL == 'deal_detail_html') {
                    localStorage.removeItem('SaleswahCrmlitePageURL');

                    DealObject = JSON.parse(localStorage.getItem('DealObject'));
                    localStorage.removeItem('DealObject');
                    MethodName = "/CreateNewTaskWithDeal";
                    Data = { TaskTypeId: _taskTypeId, SalesExecId: user.UserId, Contactid: _contactid, DueDate: convertToJSONDateOnly(_dueDate), ProductId: _productId, Comment: _comment, DealId: DealObject.Dealid, CommenterId: user.UserId, Credential: _MobileCredential };
                }
                else {
                    MethodName = "/CreateNewTask";
                    Data = { TaskTypeId: _taskTypeId, SalesExecId: user.UserId, Contactid: _contactid, DueDate: convertToJSONDateOnly(_dueDate), ProductId: _productId, Comment: _comment, CommenterId: user.UserId, Credential: _MobileCredential };
                }
            }
            else {
                MethodName = "/CreateNewTask";
                Data = { TaskTypeId: _taskTypeId, SalesExecId: user.UserId, Contactid: _contactid, DueDate: convertToJSONDateOnly(_dueDate), ProductId: _productId, Comment: _comment, CommenterId: user.UserId, Credential: _MobileCredential };
            }
            GetResultFromService(MethodName, Data);
        }
    } catch (exception) { }
}

function CreateNewTaskResult(result) {

    try {
        if (result != null) {
            if (result.d > 0) {
                try {

                    GetTaskByTaskId(result.d);
                    localStorage.removeItem('RedirectTo');
                    localStorage.setItem('RedirectTo', JSON.stringify({
                        RedirectTo: 'detail.html'
                    }));

                    localStorage.removeItem('IsNewtask');
                    localStorage.setItem('IsNewtask', JSON.stringify({
                        IsNewtask: 'true'
                    }));
                } catch (exception) { }

            }
        }
    }
    catch (exception) { }
}
function GetTaskByTaskId(TaskId) {
    try {

        var MethodName = "/GetTaskByTaskId";
        var user = JSON.parse(localStorage.getItem('LoggedUserDetails'));
        var _MobileCredential = MobileCredential;
        _MobileCredential.MobileAppKeyId = user.MobileAppKeyId;
        var Data = { taskid: TaskId, Credential: _MobileCredential };
        GetResultFromService(MethodName, Data);
    } catch (exception) { }
}

function GetTaskByTaskIdResult(result) {

    if (result != null) {

        var taskobj = { AccountName: result.d.AccountName, ContactName: result.d.ConatctName, Productname: result.d.ProductName, TaskStatus: result.d.Status, FollowUpDate: result.d.FollowUpDate, Linkeddealvalue: result.d.DealValue, PendingSince: result.d.TaskAge, ID: result.d.Id, AccountOwnerID: result.d.AccountOwnerID, ContactID: result.d.ConatctId, ProductID: result.d.ProductId, TaskDescription: result.d.TaskDescription }
        GETTaskObject(taskobj);
        RedirectToPage();

        var IsNewtask = JSON.parse(localStorage.getItem('IsNewtask'));
        if (IsNewtask != null) {
            if (IsNewtask.IsNewtask == 'true') {
                localStorage.removeItem('IsNewtask');
                localStorage.removeItem('TaskCreatedSuccessfully');
                localStorage.setItem('TaskCreatedSuccessfully', JSON.stringify({
                    Result: 'TaskCreatedSuccessfully'
                }));
            }
        }





    }
}

//var TaskDetailstxtAccountName = document.getElementById('TaskDetailstxtAccountName');
//if (TaskDetailstxtAccountName != null) {
//    $("#TaskDetailstxtAccountName").focusout(function () {
//        if ($(this).val() != '') {
//            BindContactAccountDetailData();
//        }
//    });
//}


function BindContactAccountDetailData() {
    try {

        var MethodName = "/GetAccountByName?ForTaskDetail";
        var user = JSON.parse(localStorage.getItem('LoggedUserDetails'));
        var _MobileCredential = MobileCredential;
        _MobileCredential.MobileAppKeyId = user.MobileAppKeyId;

        var _accountName = $.trim($("#TaskDetailstxtAccountName").val());

        var Data = { AccountName: _accountName, Credential: _MobileCredential };
        GetResultFromService(MethodName, Data);
    } catch (exception) { }
}

function GetAccountByNameDetailResult(result) {
    try {
        if (result.d != null) {
            localStorage.removeItem('GetAccountByNameForTaskObject');
            localStorage.setItem('GetAccountByNameForTaskObject', JSON.stringify({
                Result: result
            }));
            GetAllContactsForAccountsDetail();
        }
    }
    catch (exception) { }
}

function GetAllContactsForAccountsDetail() {
    try {

        var MethodName = "/GetAllContactsForAccounts?ContactForAccountDetail";
        var user = JSON.parse(localStorage.getItem('LoggedUserDetails'));
        var _MobileCredential = MobileCredential;
        _MobileCredential.MobileAppKeyId = user.MobileAppKeyId;
        var CRMAccount = JSON.parse(localStorage.getItem('GetAccountByNameForTaskObject'));
        var Data = { AccountId: CRMAccount.Result.d.AccountId, Credential: _MobileCredential };

        GetResultFromService(MethodName, Data);
    } catch (exception) { }
}

function GetAllContactForAccountFromTaskDetailResult(Result) {

    try {
        if (Result.d != null) {
            var TaskDetailsddlContactNameDDl = document.getElementById('TaskDetailsddlContactNameDDl');
            var TaskContactNameDDL = Result.d;

            $("#TaskDetailsddlContactNameDDl").empty();
            var option1 = document.createElement("option");
            option1.text = "--None--";
            option1.value = -1;
            TaskDetailsddlContactNameDDl.add(option1, null);
            if (Result.d.length > 0) {
                for (var i = 0; i < Result.d.length; i++) {
                    var option = document.createElement("option");
                    option.text = Result.d[i].FullName;
                    option.value = Result.d[i].Id;
                    TaskDetailsddlContactNameDDl.add(option, null);
                }
            }

            var TaskObject = JSON.parse(localStorage.getItem('TaskObject'));
            var SetValue = TaskObject.ContactName;
            if (SetValue == '' || SetValue == null)
                SetValue = -1;
            $("#TaskDetailsddlContactNameDDl").val(SetValue);
        }
    }
    catch (exception) { }
}

//TaskDetailstaskBtnEditSavetask 
var TaskDetailstaskBtnEditSavetask = document.getElementById('TaskDetailstaskBtnEditSavetask');
if (TaskDetailstaskBtnEditSavetask != null) {
    TaskDetailstaskBtnEditSavetask.addEventListener('click', function () {
        UpdateTask();

    }, false);
}




function UpdateTask() {
   
    var _SalesExecId;
    var TaskObject = JSON.parse(localStorage.getItem('TaskObject'));
    if ($('#TaskDetailsddlStatus option:selected').val() == 'Done') {
        var MethodName = "/CloseTask";
        var user = JSON.parse(localStorage.getItem('LoggedUserDetails'));
        var _MobileCredential = MobileCredential;
        _MobileCredential.MobileAppKeyId = user.MobileAppKeyId;

        var Data = { Id: TaskObject.TaskId, Credential: _MobileCredential };
        GetResultFromService(MethodName, Data);
    }
    else if (ValidateTaskDetail() == true) {
        if ($('#TaskDetailsddlStatus option:selected').val() == 'Follow Up') {
            var MethodName = "/CreateFollowUpTask";
            var user = JSON.parse(localStorage.getItem('LoggedUserDetails'));
            var _MobileCredential = MobileCredential;
            _MobileCredential.MobileAppKeyId = user.MobileAppKeyId;

            datet = convertToJSONDateOnly($.trim($("#TaskDetailstxtFollowUpDate").val()));

            if (TaskObject.AccountOwnerID == '00000000-0000-0000-0000-000000000000')
                _SalesExecId = user.UserId;
            else
                _SalesExecId = TaskObject.AccountOwnerID;

            var Data = { Id: TaskObject.TaskId, TaskTypeId: 2, ManagerId: user.ManagerUserId, SalesExecId: _SalesExecId, Contactid: TaskObject.ContactID, DueDate: convertToJSONDateOnly($.trim($("#TaskDetailstxtFollowUpDate").val())), ProductId: TaskObject.ProductID, Comment: $.trim($("#TaskDetailstxtComments").val()), CommenterId: user.UserId, Credential: _MobileCredential };
            GetResultFromService(MethodName, Data);
        }
        else {
            ShowMessage(LoadLabelsByLanguage.PleaseSelectTaskStatus);
            return;
        }
    }
    else
        return;

    localStorage.removeItem('RedirectTo');
    localStorage.setItem('RedirectTo', JSON.stringify({
        RedirectTo: '../Tasks/taskList.html'
    }));

}

function UpdateTaskresult(result) {

    if (result != null) {
        if (result.d > 0) {
            localStorage.removeItem('TaskCreatedSuccessfully');
            localStorage.setItem('TaskCreatedSuccessfully', JSON.stringify({
                Result: 'TaskCreatedSuccessfully'
            }));
            RedirectToPage();
        }

    }


}
var pageIndexTaskList
var swiperNestedTaskList;
function LoadTaskSlider() {
    var swiperParent = new Swiper('.swiper-parent', {
        paginationClickable: true,
        slidesPerView: 1
    })

    if (pageIndexTaskList == null) {
        pageIndexTaskList = 1;
    }
    swiperNestedTaskList = new Swiper('.swiper-nested-TaskList', {
        mode: 'vertical',
        paginationClickable: true,
        slidesPerView: 'auto',
        watchActiveIndex: true,
        calculateHeight: true,
        cssWidthAndHeight: true,
        onTouchStart: function () {
            holdPosition = 0;
        },
        onResistanceAfter: function (s, pos) {
            holdPosition = pos;
        },
        onTouchEnd: function () {

            if (holdPosition > 100) {
                swiperNestedTaskList.params.onlyExternal = true
                //GetContactList(pageIndexContactList);
                swiperNestedTaskList.params.onlyExternal = false;
                //pageIndexTaskList++;
            }
        }
    })
    GetTaskStatusDDlValues();
}


function LoadTaskDetailSlider() {


    var swiperParent = new Swiper('.swiper-parent', {
        paginationClickable: true,
        slidesPerView: 1
    })


    var swiperNestedTaskDetail = new Swiper('.swiper-nested-TaskDetail', {
        mode: 'vertical',

        paginationClickable: true,
        slidesPerView: 5,
        watchActiveIndex: true,
        onTouchStart: function () {
            holdPosition = 0;
        },
        onResistanceBefore: function (s, pos) {
            holdPosition = pos;
        },
        onTouchEnd: function () {
            if (holdPosition > 100) {

                swiperNestedTaskDetail.setWrapperTranslate(0, 0, 0)


                swiperNestedTaskDetail.params.onlyExternal = false
            }
        }
    })

}


function LoadContactOrAccount() {

    try {
        
        var SaleswahCrmlitePageURL = JSON.parse(localStorage.getItem('SaleswahCrmlitePageURL'));
        if (SaleswahCrmlitePageURL != null) {
            if (SaleswahCrmlitePageURL.URL == 'Contacts_detail_html') {
                localStorage.removeItem('SaleswahCrmlitePageURL');
                var ContactObject = JSON.parse(localStorage.getItem('ContactObject'));
                $('#AddNewTaskDetailstxtAccountName').val(ContactObject.AccountName);
                $('#AddNewTaskDetailstxtAccountName').attr('readonly', 'true');
                var AddNewTaskDetailsddlContactNameDDl = document.getElementById('AddNewTaskDetailsddlContactNameDDl');
                $("#AddNewTaskDetailsddlContactNameDDl").empty();

                var option = document.createElement("option");
                option.text = ContactObject.FullName;
                option.value = ContactObject.ContactId;
                AddNewTaskDetailsddlContactNameDDl.add(option, null);

            }
            else if (SaleswahCrmlitePageURL.URL == 'account_detail_html') {
                var AccountObject = JSON.parse(localStorage.getItem('AccountObject'));
                $('#AddNewTaskDetailstxtAccountName').val(AccountObject.AccountName);
                $('#AddNewTaskDetailstxtAccountName').attr('readonly', 'true');
                GetAllContactsForAccounts();
                localStorage.removeItem('SaleswahCrmlitePageURL');
            }

            else if (SaleswahCrmlitePageURL.URL == 'deal_detail_html') {
                var DealObject = JSON.parse(localStorage.getItem('DealObject'));
                $('#AddNewTaskDetailstxtAccountName').val(DealObject.AccountName);
                $('#AddNewTaskDetailstxtAccountName').attr('readonly', 'true');
                GetAllContactsForAccounts();
                localStorage.removeItem('SaleswahCrmlitePageURL');
            }
        }
    }
    catch (e) { }
}

var AddNewTaskDetailsImgAccountNameClick = document.getElementById('AddNewTaskDetailsImgAccountNameClick');
if (AddNewTaskDetailsImgAccountNameClick != null) {

    $("#AddNewTaskDetailsImgAccountNameClick").on("click", function () {

        document.getElementById('divLoading').style.display = 'block';
        var MethodName = "/GetActiveAccounts";
        var user = JSON.parse(localStorage.getItem('LoggedUserDetails'));
        var _MobileCredential = MobileCredential;
        _MobileCredential.MobileAppKeyId = user.MobileAppKeyId;
        var Data = { userId: user.UserId, filter: $("#AddNewTaskDetailstxtAccountName").val(), Credential: _MobileCredential };
        GetResultFromService(MethodName, Data);

        // $("#AddNewDealDetailstxtAccountName").autocomplete("search", $("#AddNewDealDetailstxtAccountName").val());

    });

}