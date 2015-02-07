var ApplicationPageSize = JSON.parse(localStorage.getItem('ApplicationPageSize'));
var AppointmentpageSize = ApplicationPageSize.PageSize;
var LoadLabelsByLanguage = JSON.parse(localStorage.getItem('LoadLabelsByLanguage'));

///////////////////////WelcomeScreenChangePassword///////////////////////
//AdminSetupimgChangePasswordSave 
var AdminSetupimgChangePasswordSave = document.getElementById('AdminSetupimgChangePasswordSave');
if (AdminSetupimgChangePasswordSave != null) {
    AdminSetupimgChangePasswordSave.addEventListener('click', function () {
        ChangePassword();

    }, false);
}



///////////////////////////////////AdminSetup/////////////////////////////////////////////////////////////////////////////////


function LoadlabelsOfAdminLevel() {

    var DealDetailHeader = document.getElementById('DealDetailHeader');
    if (DealDetailHeader != null) {

        DealDetailHeader.innerHTML = LoadLabelsByLanguage.CompanyProfile;
    }
    //AdminsetupHeaderDetailLabelCompany
    var AdminsetupHeaderDetailLabelCompany = document.getElementById('AdminsetupHeaderDetailLabelCompany');
    if (AdminsetupHeaderDetailLabelCompany != null) {

        AdminsetupHeaderDetailLabelCompany.innerHTML = LoadLabelsByLanguage.CompanyProfile;
    }
    //AdminsetupHeaderDetailLabelTask

    var AdminsetupHeaderDetailLabelTask = document.getElementById('AdminsetupHeaderDetailLabelTask');
    if (AdminsetupHeaderDetailLabelTask != null) {
        AdminsetupHeaderDetailLabelTask.innerHTML = LoadLabelsByLanguage.Tasks;
    }
    //AdminsetupHeaderDetailLabelProduct
    var AdminsetupHeaderDetailLabelProduct = document.getElementById('AdminsetupHeaderDetailLabelProduct');
    if (AdminsetupHeaderDetailLabelProduct != null) {
        AdminsetupHeaderDetailLabelProduct.innerHTML = LoadLabelsByLanguage.ProductCategory;
    }


    //AdminsetupDetailsLabelManager
    var AdminsetupDetailsLabelCompanyName = document.getElementById('AdminsetupDetailsLabelCompanyName')
    if (AdminsetupDetailsLabelCompanyName != null) {
        AdminsetupDetailsLabelCompanyName.innerHTML = LoadLabelsByLanguage.CompanyName;
    }
    //AdminsetupDetailsLabeladdress1
    var AdminsetupDetailsLabeladdress1 = document.getElementById('AdminsetupDetailsLabeladdress1')
    if (AdminsetupDetailsLabeladdress1 != null) {
        AdminsetupDetailsLabeladdress1.innerHTML = LoadLabelsByLanguage.Address1;
    }
    //AdminsetupDetailsLabelAddress2
    var AdminsetupDetailsLabelAddress2 = document.getElementById('AdminsetupDetailsLabelAddress2')
    if (AdminsetupDetailsLabelAddress2 != null) {
        AdminsetupDetailsLabelAddress2.innerHTML = LoadLabelsByLanguage.Address2;
    }
    //AdminsetupDetailsLabelCountry
    var AdminsetupDetailsLabelCountry = document.getElementById('AdminsetupDetailsLabelCountry')
    if (AdminsetupDetailsLabelCountry != null) {
        AdminsetupDetailsLabelCountry.innerHTML = LoadLabelsByLanguage.Country;
    }
    //AdminsetupDetailsLabelState
    var AdminsetupDetailsLabelState = document.getElementById('AdminsetupDetailsLabelState')
    if (AdminsetupDetailsLabelState != null) {
        AdminsetupDetailsLabelState.innerHTML = LoadLabelsByLanguage.State;
    }
    //AdminsetupDetailsLabelManager
    var AdminsetupDetailsLabelCity = document.getElementById('AdminsetupDetailsLabelCity')
    if (AdminsetupDetailsLabelCity != null) {
        AdminsetupDetailsLabelCity.innerHTML = LoadLabelsByLanguage.City;
    }
    //AdminsetupDetailsLabelManager
    var AdminsetupDetailsLabelPostalCode = document.getElementById('AdminsetupDetailsLabelPostalCode')
    if (AdminsetupDetailsLabelPostalCode != null) {
        AdminsetupDetailsLabelPostalCode.innerHTML = LoadLabelsByLanguage.PostalCode;
    }
    //AdminsetupDetailsLabelPhonNumber
    var AdminsetupDetailsLabelPhonNumber = document.getElementById('AdminsetupDetailsLabelPhonNumber')
    if (AdminsetupDetailsLabelPhonNumber != null) {
        AdminsetupDetailsLabelPhonNumber.innerHTML = LoadLabelsByLanguage.PhoneContacts;
    }
    //AdminSetUpTaskDetailLabelTaskDescription
    var AdminSetUpTaskDetailLabelTaskDescription = document.getElementById('AdminSetUpTaskDetailLabelTaskDescription')
    if (AdminSetUpTaskDetailLabelTaskDescription != null) {
        AdminSetUpTaskDetailLabelTaskDescription.innerHTML = LoadLabelsByLanguage.Descripdashtion;
    }

    //AdminSetUpTaskDetailLabelUploadProduct
    var AdminSetUpTaskDetailLabelUploadProduct = document.getElementById('AdminSetUpTaskDetailLabelUploadProduct')
    if (AdminSetUpTaskDetailLabelUploadProduct != null) {
        AdminSetUpTaskDetailLabelUploadProduct.innerHTML = LoadLabelsByLanguage.UploadProduct;
    }

    LoadAdminLevelSetupDetailSlider();
    /*********************************************************/
    //Check if come from welcome screen

    var GoToPasswordChangeForAdminSetup = JSON.parse(localStorage.getItem('GoToPasswordChangeForAdminSetup'));
    if (GoToPasswordChangeForAdminSetup != null) {
        //if (mySwiperChangePassword != null) {
        if (GoToPasswordChangeForAdminSetup.GoToPasswordChange == true) {
            localStorage.removeItem('GoToPasswordChangeForAdminSetup');
            SlideToPage(GoToPasswordChangeForAdminSetup.GoToSlide);
            switch (GoToPasswordChangeForAdminSetup.GoToSlide) {

                case 2:
                    DealDetailHeader.innerHTML = LoadLabelsByLanguage.ProductCategory;
                    break;


            }
            //mySwiperChangePassword.swipeTo(1);

            //}
        }
    }




    /*********************************************************/

}

var swiperParent;
var swiperNestedAddNewGustLst;
function LoadAdminLevelSetupDetailSlider() {
    swiperParent = new Swiper('.swiper-parent', {
        paginationClickable: true,
        onSlideChangeStart: function () {
            var dots = [".detail_nav1", ".detail_nav2", ".detail_nav3"];

            if (swiperParent.activeIndex == 1) {
                $('#AdminSetupFooterimgInsertTask').show();
                //document.getElementById("AdminSetupFooterimgInsertTask").style.display = 'block';
            }
            else {
                $('#AdminSetupFooterimgInsertTask').hide();
                // document.getElementById("AdminSetupFooterimgInsertTask").style.display = 'block';
            }

            if (swiperParent.activeIndex == 3 || swiperParent.activeIndex == 6 || swiperParent.activeIndex == 9) {
                var color1 = $(dots[swiperParent.activeIndex - 1]).css("background-color");

                if (color1 != 'rgba(0, 0, 0, 0)') {
                    mySwiper.swipeNext();
                }
            }
            else if (swiperParent.activeIndex == 2) {
                var color2 = $(dots[swiperParent.activeIndex + 1]).css("background-color");
                //  alert(color2);
                if (color2 != 'rgba(0, 0, 0, 0)') {
                    mySwiper.swipePrev();
                }
            }
            var i;
            for (i = 0; i < dots.length; i++) {
                var SetBgColorToDiv = dots[i];
                $(SetBgColorToDiv).css('background-color', 'transparent');
            }
            var SetBgColorToDiv = dots[swiperParent.activeIndex];
            $(SetBgColorToDiv).css('background-color', '#E6E8C2');
            $(SetBgColorToDiv).css('border-radius', '5px');
            var headingText = $(SetBgColorToDiv).text();
            $('.hedmid').text(headingText);

        },
        slidesPerView: 1
    })

    var swiperNestedAdminSetUpMyCompanyDetail = new Swiper('.swiper-nested-AdminSetUpMyCompanyDetail', {
        mode: 'vertical',

        paginationClickable: true,
        slidesPerView: 'auto',
        watchActiveIndex: true,
        onTouchStart: function () {
            holdPosition = 0;
        },

        onResistanceAfter: function (s, pos) {
            holdPosition = pos;

        },

        onTouchEnd: function () {

            if (holdPosition > 100) {
                swiperNestedAdminSetUpMyCompanyDetail.params.onlyExternal = true
                //GetAppointmentListNew(pageIndexAccountList);
                swiperNestedAdminSetUpMyCompanyDetail.params.onlyExternal = false;
                //pageIndexAccountList++;
            }

        }
    })

    swiperNestedAddNewGustLst = new Swiper('.swiper-nested-AddNewGustLst', {
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
                swiperNestedAddNewGustLst.params.onlyExternal = true
                //GetAppointmentListNew(pageIndexAccountList);
                swiperNestedAddNewGustLst.params.onlyExternal = false;
                //pageIndexAccountList++;
            }

        }
    })
    var swiperNestedProductDetail = new Swiper('.swiper-nested-ProductDetail', {
        mode: 'vertical',

        paginationClickable: true,
        slidesPerView: 'auto',
        watchActiveIndex: true,
        onTouchStart: function () {
            holdPosition = 0;
        },

        onResistanceAfter: function (s, pos) {
            holdPosition = pos;

        },

        onTouchEnd: function () {

            if (holdPosition > 100) {
                swiperNestedProductDetail.params.onlyExternal = true
                //GetAppointmentListNew(pageIndexAccountList);
                swiperNestedProductDetail.params.onlyExternal = false;
                //pageIndexAccountList++;
            }

        }
    })

}

//GetClientAccountFromAccountId
function GetClientAccountFromAccountId() {
    try {

        var MethodName = "/GetClientAccountFromAccountId";
        var user = JSON.parse(localStorage.getItem('LoggedUserDetails'));
        var _MobileCredential = MobileCredential;
        _MobileCredential.MobileAppKeyId = user.MobileAppKeyId;

        var Data = { AccountId: user.CRMAccountId, Credential: _MobileCredential };
        GetResultFromService(MethodName, Data);
    }
    catch (exception) { }
}

//done
function GetClientAccountFromAccountIdResult(result) {
    try {

        //  alert(result);
        if (result != null) {
            localStorage.removeItem('AdminSetUpObject');
            localStorage.setItem('AdminSetUpObject', JSON.stringify({
                result: result.d

            }));
            BindDAdminSetUpData();
        }

    }
    catch (e) { }
}

function BindDAdminSetUpData() {
  
    var AdminSetUpObject = JSON.parse(localStorage.getItem('AdminSetUpObject'));
    var user = JSON.parse(localStorage.getItem('LoggedUserDetails'));
    var GetAppSettingInfo = JSON.parse(localStorage.getItem('GetAppSettingInfo'));


    if (AdminSetUpObject != null) {

        //Company Details
        $('#AdminsetupDetailstxtCompanyName').val(AdminSetUpObject.result.DisplayName);
        $('#AdminsetupDetailstxtaddress1').val(AdminSetUpObject.result.AdminAddressLine1);
        $('#AdminsetupDetailstxtAddress2').val(AdminSetUpObject.result.AdminAddressLine2);
        $('#AdminsetupDetailstxtState').val(AdminSetUpObject.result.AdminState);
        $("#AdminsetupDetailsddlCountry option:contains(" + AdminSetUpObject.result.AdminCountry + ")").attr('selected', 'selected');
        $('#AdminsetupDetailstxtPostalCode').val(AdminSetUpObject.result.AdminPostalCode);
        $('#AdminsetupDetailstxtCity').val(AdminSetUpObject.result.AdminCity);
        $('#AdminsetupDetailstxtPhonNumber').val(AdminSetUpObject.result.AdminPhoneNumber);

        if (mySwiperChangePassword != null) {
            $('#AdminSetupChangePasswordDetailstxtoldpassword').val(user.EmailAddress);
        }
    }
}
function CheckSMTPServer() {
    if ($.trim($('#AdminSetUpSetUpEmailDetailtxtYourSmtpServer').val()).indexOf("gmail") > -1) {
        $('#AdminSetUpSetUpEmailDetailddlPortNumber').css('visibility', "visible");
        $('#AdminSetUpSetUpEmailDetailddlPortNumber').attr('style', "margin:-40px 0px!important");
        $('#AdminSetUpSetUpEmailDetailtxtPortNumber').css('visibility', "hidden");
        $("#AdminSetUpSetUpEmailDetailchkEnableSSl").prop("checked", "visible");
        $('#AdminSetUpSetUpEmailDetailchkEnableSSl').attr('readonly', "visible");
    }
    else {
        $('#AdminSetUpSetUpEmailDetailddlPortNumber').css('visibility', "hidden");
        $('#AdminSetUpSetUpEmailDetailtxtPortNumber').css('visibility', "visible");
        $('#AdminSetUpSetUpEmailDetailchkEnableSSl').attr('readonly', "hidden");
        $("#AdminSetUpSetUpEmailDetailchkEnableSSl").prop("checked", false);
    }
}

function BindDDL() {

    var _CountryDDL = JSON.parse(localStorage.getItem('GetAllCountriesObj'));
    var _TaskStatusList = JSON.parse(localStorage.getItem('TaskStatusDDL'));
    var _GetAppSettingInfo = JSON.parse(localStorage.getItem('GetAppSettingInfo'));
    if (_GetAppSettingInfo == null) {
        GetAppSettingInfo();
    }
    if (_CountryDDL == null) {
        GetSeedCountryList();

    }
    else {
        LoadCountriesList();
    }
    if (_TaskStatusList == null) {
        GetTaskMasterList();

    }
    else {
        LoadTaskMasterList();
    }

}

function GetAppSettingInfo() {
    try {

        var MethodName = "/GetAppSettingInfo";

        var user = JSON.parse(localStorage.getItem('LoggedUserDetails'));

        var _MobileCredential = MobileCredential;
        _MobileCredential.MobileAppKeyId = user.MobileAppKeyId;

        var Data = { Userid: user.UserId, Credential: _MobileCredential };

        GetResultFromService(MethodName, Data);
    } catch (exception) { }
}

function SetAppSettingInfoResult(result) {

    try {

        localStorage.removeItem('GetAppSettingInfo');
        localStorage.setItem('GetAppSettingInfo', JSON.stringify({
            Result: result
        }));
    }
    catch (exception) { }
}

//GetTaskStatusDDlValues
function GetTaskMasterList() {

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
        LoadTaskMasterList();
    }
    catch (exception) { }
}

function LoadTaskMasterList() {

    if (swiperNestedAddNewGustLst != null) {
        swiperNestedAddNewGustLst.removeAllSlides();
        $("#AdminSetupMasterTasks").empty();
    }

    var result = JSON.parse(localStorage.getItem('TaskStatusDDL'));
    if (swiperNestedAddNewGustLst.slides.length == 0) {

        if (result.Result.d.length == 0) {
            $("#AdminSetupMasterTasks").append("<div class='swiper-slide '><div class='dlist'> <ul><li><a href='#' ><h4>  No Record Found </h4></a></li></ul></div></div>");
            swiperNestedAddNewGustLst.reInit();
        }
    }

    if (result.Result.d.length > 0) {
        for (var i = 0; i < result.Result.d.length; i++) {
            var Replacedkey = result.Result.d[i].key.replace(/'/g, "\\'");
            var Replacedvalue = result.Result.d[i].value.replace(/'/g, "\\'");
            var _TaskDetailObject = "{'Id':'" + Replacedkey + "','TaskDescription':'" + Replacedvalue + "'}"

            $("#AdminSetupMasterTasks").append("<div class='swiper-slide'><div class='dlist'><ul><li><a href='#' onclick=\"GETTaskObject(" + _TaskDetailObject + ")\"><h4> " + result.Result.d[i].value + "</h4></a></li></ul></div></div>");
            if (swiperNestedAddNewGustLst != null) {
                swiperNestedAddNewGustLst.reInit();

            }
        }
    }
    if (swiperNestedAddNewGustLst == null) {
        LoadAdminDetailSlider();
    }
}
function GetSeedCountryList() {
    try {
        var MethodName = "/GetAllCountry";

        var user = JSON.parse(localStorage.getItem('LoggedUserDetails'));

        var _MobileCredential = MobileCredential;
        _MobileCredential.MobileAppKeyId = user.MobileAppKeyId;

        var Data = { Credential: _MobileCredential };

        GetResultFromService(MethodName, Data);
    } catch (exception) { }
}

function SetSeedCountryListResult(result) {

    try {
        localStorage.removeItem('GetAllCountriesObj');
        localStorage.setItem('GetAllCountriesObj', JSON.stringify({
            Result: result
        }));
    }
    catch (exception) { }
    LoadCountriesList();
}
function LoadCountriesList() {
    try {

        var AdminsetupDetailsddlCountry = document.getElementById('AdminsetupDetailsddlCountry');

        var CountryDDL = JSON.parse(localStorage.getItem('GetAllCountriesObj'));

        $("#AdminsetupDetailsddlCountry").empty();
        var option1 = document.createElement("option");
        option1.text = "--None--";
        option1.value = -1;
        AdminsetupDetailsddlCountry.add(option1, null);
        if (CountryDDL.Result.d.length > 0) {
            for (var i = 0; i < CountryDDL.Result.d.length; i++) {
                var option = document.createElement("option");
                option.text = CountryDDL.Result.d[i].value;
                option.value = CountryDDL.Result.d[i].key;
                AdminsetupDetailsddlCountry.add(option, null);
            }
            /*
            var ContactObject = JSON.parse(localStorage.getItem('ContactObject'));

            if (ContactObject != null) {
                SetValue = ContactObject.Country;
            }
            else if (ContactObject == null) {
                var LoggedUserDetails = JSON.parse(localStorage.getItem('LoggedUserDetails'));
                SetValue = LoggedUserDetails.AdminCountryName;
            }
            for (var i = 0; i < ContactDetailsddlCountry.options.length; i++) {
                if (ContactDetailsddlCountry.options[i].text == SetValue) {
                    ContactDetailsddlCountry.selectedIndex = i;
                    break;
                }
            }
           
           
           
           
            var SetValue = ContactObject.DesignationId;
            if (SetValue == '')
                SetValue = -1;
            $("#AdminsetupDetailsddlCountry").val(SetValue);*/
        }
    } catch (exception) { }
}

function GETTaskObject(Obj) {

    localStorage.removeItem('TaskMasterObject');
    localStorage.setItem('TaskMasterObject', JSON.stringify({
        Id: Obj.Id,
        TaskDescription: Obj.TaskDescription
    }));
    $("#AdminSetUpTaskDetailtxtareaTaskDescription").val(Obj.TaskDescription);
}

//TaskDetailstaskBtnEditSavetask 
var TaskDetailstaskBtnEditSavetask = document.getElementById('TaskDetailstaskBtnEditSavetask');
if (TaskDetailstaskBtnEditSavetask != null) {
    TaskDetailstaskBtnEditSavetask.addEventListener('click', function () {

        switch (swiperParent.activeIndex) {
            case 0:
                UpdateCompanyDetails();
                break;
            case 1:
                UpdateMasterTaskType();
                break;
            case 2:
                ShowMessage(LoadLabelsByLanguage.PleaseGoToOurWebsiteToUploadProduct);
                break;
        }
    }, false);
}

//Update Company Details...
function UpdateCompanyDetails() {
    try {

        if (ValidateAccountData()) {
            var MethodName = "/UpdateAccountDetails";

            var user = JSON.parse(localStorage.getItem('LoggedUserDetails'));
            var AdminSetUpObject = JSON.parse(localStorage.getItem('AdminSetUpObject'));

            var _MobileCredential = MobileCredential;
            _MobileCredential.MobileAppKeyId = user.MobileAppKeyId;

            _AdminsetupDetailstxtCompanyName = $('#AdminsetupDetailstxtCompanyName').val();
            _AdminsetupDetailstxtaddress1 = $('#AdminsetupDetailstxtaddress1').val();
            _AdminsetupDetailstxtAddress2 = $('#AdminsetupDetailstxtAddress2').val();
            _AdminsetupDetailstxtState = $('#AdminsetupDetailstxtState').val();

            var _CountryId = $('#AdminsetupDetailsddlCountry option:selected').val();
            var _AdminsetupDetailsddlCountryTxt = $('#AdminsetupDetailsddlCountry option:selected').text();


            _AdminsetupDetailstxtPostalCode = $('#AdminsetupDetailstxtPostalCode').val();
            _AdminsetupDetailstxtCity = $('#AdminsetupDetailstxtCity').val();
            _AdminsetupDetailstxtPhonNumber = $('#AdminsetupDetailstxtPhonNumber').val();

            var Data = { AccountId: AdminSetUpObject.result.AccountId, companyname: _AdminsetupDetailstxtCompanyName, addrline1: _AdminsetupDetailstxtaddress1, addrline2: _AdminsetupDetailstxtAddress2, state: _AdminsetupDetailstxtState, city: _AdminsetupDetailstxtCity, country: _AdminsetupDetailsddlCountryTxt, mobile: _AdminsetupDetailstxtPhonNumber, postalcode: _AdminsetupDetailstxtPostalCode, Credential: _MobileCredential };

            GetResultFromService(MethodName, Data);
        }
    }
    catch (ex) { }
}
function UpdateCompanyDetailsResult(result) {
    try {

        if (result != null) {
            if (result.d > 0) {
                ShowMessage(LoadLabelsByLanguage.CompanydetailsUpdated);
            }
        }
    }
    catch (ex) { }

}

function ValidateAccountData() {
    flag = true;
    errorMsg = "";

    if ($.trim($("#AdminsetupDetailstxtCompanyName").val()) == "") {
        errorMsg = errorMsg + "<br/>" + "* " + LoadLabelsByLanguage.YoumustfillAccountName;

        flag = false;
    }
    if ($('#AdminsetupDetailsddlCountry option:selected').val() == -1) {

        errorMsg = errorMsg + "\n* " + LoadLabelsByLanguage.PleaseSelectYourCountry + "<br/>";

        flag = false;
    }

    if (flag == false) {
        ShowMessage(errorMsg);
    }

    return flag;
}
function UpdateMasterTaskType() {
    try {

        if (ValidateTaskSeed() == true) {

            _TaskDescription = $("#AdminSetUpTaskDetailtxtareaTaskDescription").val();
            if ($.trim(_TaskDescription).length > 0) {
                var MethodName = "/UpdateTaskSeed";
                var user = JSON.parse(localStorage.getItem('LoggedUserDetails'));
                var _TaskMasterObject = JSON.parse(localStorage.getItem('TaskMasterObject'));

                var _MobileCredential = MobileCredential;
                _MobileCredential.MobileAppKeyId = user.MobileAppKeyId;

                var Data = { Id: _TaskMasterObject.Id, TaskDescription: _TaskDescription, Credential: _MobileCredential };

                GetResultFromService(MethodName, Data);
            }


        }
    }
    catch (ex) { }
}

function UpdateMasterTaskTypeResult(result) {
    try {

        if (result != null) {
            if (result.d > 0) {
                GetTaskMasterList();
                ShowMessage(LoadLabelsByLanguage.UpdateMasterTaskType);
            }
        }
    }
    catch (ex) { }

}

function ValidateTaskSeed() {
    flag = true;
    errorMsg = "";

    if ($.trim($("#AdminSetUpTaskDetailtxtareaTaskDescription").val()) == "") {
        errorMsg = errorMsg + "<br/>" + "* " + LoadLabelsByLanguage.TaskDescriptionCantBeEmpty;

        flag = false;
    }

    if (flag == false) {
        ShowMessage(errorMsg);
    }

    return flag;
}

var AdminSetupFooterimgInsertTask = document.getElementById('AdminSetupFooterimgInsertTask');
if (AdminSetupFooterimgInsertTask != null) {
    AdminSetupFooterimgInsertTask.addEventListener('click', function () {

        if (ValidateTaskSeed() == true) {

            InsertTaskSeed();
        }

    }, false);
}

//InsertTaskSeed Master Task Type...
function InsertTaskSeed() {
    try {
        _TaskDescription = $("#AdminSetUpTaskDetailtxtareaTaskDescription").val();
        if ($.trim(_TaskDescription).length > 0) {
            var MethodName = "/InsertTaskSeed";
            var user = JSON.parse(localStorage.getItem('LoggedUserDetails'));

            var _MobileCredential = MobileCredential;
            _MobileCredential.MobileAppKeyId = user.MobileAppKeyId;

            var Data = { taskdesc: _TaskDescription, Credential: _MobileCredential };

            GetResultFromService(MethodName, Data);
        }
    }
    catch (ex) { }
}

function InsertTaskSeedResult(result) {
    try {

        if (result != null) {
            if (result.d > 0) {
                localStorage.removeItem('TaskStatusDDL');
                GetTaskMasterList();
                ShowMessage(LoadLabelsByLanguage.NewtaskSeedinserted);

            }
        }
    }
    catch (ex) { }

}

/////////////////////////////////////////////////////////////UserLevelSetup//////////////////////////////////







function LoadlabelsOfUserLevel() {

    //UserLevelDetailHeader
    var UserLevelDetailHeader = document.getElementById('UserLevelDetailHeader');
    if (UserLevelDetailHeader != null) {

        UserLevelDetailHeader.innerHTML = LoadLabelsByLanguage.MyProfile;
    }
    //AdminsetupHeaderDetailLabelMyProfile
    var AdminsetupHeaderDetailLabelMyProfile = document.getElementById('AdminsetupHeaderDetailLabelMyProfile');
    if (AdminsetupHeaderDetailLabelMyProfile != null) {

        AdminsetupHeaderDetailLabelMyProfile.innerHTML = LoadLabelsByLanguage.MyProfile;
    }
    //AdminsetupHeaderDetailLabelSetUpEmail
    var AdminsetupHeaderDetailLabelSetUpEmail = document.getElementById('AdminsetupHeaderDetailLabelSetUpEmail');
    if (AdminsetupHeaderDetailLabelSetUpEmail != null) {
        AdminsetupHeaderDetailLabelSetUpEmail.innerHTML = LoadLabelsByLanguage.EmailSetup;
    }

    //AdminsetupHeaderDetailLabelChangePassword
    var AdminsetupHeaderDetailLabelChangePassword = document.getElementById('AdminsetupHeaderDetailLabelChangePassword');
    if (AdminsetupHeaderDetailLabelChangePassword != null) {
        AdminsetupHeaderDetailLabelChangePassword.innerHTML = LoadLabelsByLanguage.ChangePassword;
    }

    //AdminsetupDetailsLabelName
    var AdminsetupDetailsLabelName = document.getElementById('AdminsetupDetailsLabelName');
    if (AdminsetupDetailsLabelName != null) {
        AdminsetupDetailsLabelName.innerHTML = LoadLabelsByLanguage.Name;
    }

    //AdminsetupDetailsLabelMobile
    var AdminsetupDetailsLabelMobile = document.getElementById('AdminsetupDetailsLabelMobile')
    if (AdminsetupDetailsLabelMobile != null) {

        var AdminSetUpObject = JSON.parse(localStorage.getItem('AdminSetUpObject'));
        if (AdminSetUpObject != null) {
            //alert(JSON.stringify(AdminSetUpObject));
            AdminsetupDetailsLabelMobile.innerHTML = LoadLabelsByLanguage.Mobile + '(' + '+' + AdminSetUpObject.result.AdminCountryCode + ')';
        }
        else
        { AdminsetupDetailsLabelMobile.innerHTML = LoadLabelsByLanguage.Mobile; }

    }
    //AdminsetupDetailsLabelEmail
    var AdminsetupDetailsLabelEmail = document.getElementById('AdminsetupDetailsLabelEmail')
    if (AdminsetupDetailsLabelEmail != null) {
        AdminsetupDetailsLabelEmail.innerHTML = LoadLabelsByLanguage.Email;
    }
    //AdminsetupDetailsLabelDesignation
    var AdminsetupDetailsLabelDesignation = document.getElementById('AdminsetupDetailsLabelDesignation')
    if (AdminsetupDetailsLabelDesignation != null) {
        AdminsetupDetailsLabelDesignation.innerHTML = LoadLabelsByLanguage.Designation;
    }
    //AdminsetupDetailsLabelManager
    var AdminsetupDetailsLabelManager = document.getElementById('AdminsetupDetailsLabelManager')
    if (AdminsetupDetailsLabelManager != null) {
        AdminsetupDetailsLabelManager.innerHTML = LoadLabelsByLanguage.Manager;
    }
    //AdminsetupDetailsLabelRole
    var AdminsetupDetailsLabelRole = document.getElementById('AdminsetupDetailsLabelRole')
    if (AdminsetupDetailsLabelRole != null) {
        AdminsetupDetailsLabelRole.innerHTML = LoadLabelsByLanguage.Role;
    }

    //AdminSetUpSetUpEmailDetailLabelYourSmtpServer
    var AdminSetUpSetUpEmailDetailLabelYourSmtpServer = document.getElementById('AdminSetUpSetUpEmailDetailLabelYourSmtpServer')
    if (AdminSetUpSetUpEmailDetailLabelYourSmtpServer != null) {
        AdminSetUpSetUpEmailDetailLabelYourSmtpServer.innerHTML = LoadLabelsByLanguage.SMTPServer;
    }
    //AdminSetUpSetUpEmailDetailLabelPortNumber
    var AdminSetUpSetUpEmailDetailLabelPortNumber = document.getElementById('AdminSetUpSetUpEmailDetailLabelPortNumber')
    if (AdminSetUpSetUpEmailDetailLabelPortNumber != null) {
        AdminSetUpSetUpEmailDetailLabelPortNumber.innerHTML = LoadLabelsByLanguage.PortNumber;
    }
    //AdminSetUpSetUpEmailDetailLabelPortNumber
    var AdminSetUpSetUpEmailDetailLabelFromEmailId = document.getElementById('AdminSetUpSetUpEmailDetailLabelFromEmailId')
    if (AdminSetUpSetUpEmailDetailLabelFromEmailId != null) {
        AdminSetUpSetUpEmailDetailLabelFromEmailId.innerHTML = LoadLabelsByLanguage.Email;
    }

    //AdminSetUpSetUpEmailDetailLabelPassword
    var AdminSetUpSetUpEmailDetailLabelPassword = document.getElementById('AdminSetUpSetUpEmailDetailLabelPassword')
    if (AdminSetUpSetUpEmailDetailLabelPassword != null) {
        AdminSetUpSetUpEmailDetailLabelPassword.innerHTML = LoadLabelsByLanguage.Password;
    }

    //AdminSetUpSetUpEmailDetailLabelEnableSSl
    var AdminSetUpSetUpEmailDetailLabelEnableSSl = document.getElementById('AdminSetUpSetUpEmailDetailLabelEnableSSl')
    if (AdminSetUpSetUpEmailDetailLabelEnableSSl != null) {
        AdminSetUpSetUpEmailDetailLabelEnableSSl.innerHTML = LoadLabelsByLanguage.EnableSSL;
    }

    //AdminSetupChangePasswordDetailsLabelEmailAddress
    var AdminSetupChangePasswordDetailsLabelEmailAddress = document.getElementById('AdminSetupChangePasswordDetailsLabelEmailAddress')
    if (AdminSetupChangePasswordDetailsLabelEmailAddress != null) {
        AdminSetupChangePasswordDetailsLabelEmailAddress.innerHTML = LoadLabelsByLanguage.UserName;
    }

    //AdminSetupChangePasswordDetailsLabeloldpassword
    var AdminSetupChangePasswordDetailsLabeloldpassword = document.getElementById('AdminSetupChangePasswordDetailsLabeloldpassword')
    if (AdminSetupChangePasswordDetailsLabeloldpassword != null) {
        AdminSetupChangePasswordDetailsLabeloldpassword.innerHTML = LoadLabelsByLanguage.OldPassword;
    }

    //AdminSetupChangePasswordDetailsLabelnewpassword
    var AdminSetupChangePasswordDetailsLabelnewpassword = document.getElementById('AdminSetupChangePasswordDetailsLabelnewpassword')
    if (AdminSetupChangePasswordDetailsLabelnewpassword != null) {
        AdminSetupChangePasswordDetailsLabelnewpassword.innerHTML = LoadLabelsByLanguage.NewPassword;
    }

    //AdminSetupChangePasswordDetailsLabelConfirmpassword
    var AdminSetupChangePasswordDetailsLabelConfirmpassword = document.getElementById('AdminSetupChangePasswordDetailsLabelConfirmpassword')
    if (AdminSetupChangePasswordDetailsLabelConfirmpassword != null) {
        AdminSetupChangePasswordDetailsLabelConfirmpassword.innerHTML = LoadLabelsByLanguage.ConfirmPassword;
    }

    var AdminsetupHeaderDetailLabelLogout = document.getElementById('AdminsetupHeaderDetailLabelLogout')
    if (AdminsetupHeaderDetailLabelLogout != null) {
        AdminsetupHeaderDetailLabelLogout.innerHTML = LoadLabelsByLanguage.logout;
    }
    $("#AdminSetUpSetUpEmailDetailtxtYourSmtpServer").focusout(function () {
        if ($(this).val() != '') {
            CheckSMTPServer();
        }
    });
    //AdminsetupHeaderDetailLabelLogout
    LoadUserLevelSetupDetailSlider();
    /*********************************************************/
    //Check if come from welcome screen

    var GoToPasswordChangeForUserSetup = JSON.parse(localStorage.getItem('GoToPasswordChangeForUserSetup'));
    if (GoToPasswordChangeForUserSetup != null) {
        //if (mySwiperChangePassword != null) {
        if (GoToPasswordChangeForUserSetup.GoToPasswordChange == true) {
            localStorage.removeItem('GoToPasswordChangeForUserSetup');
            SlideToPage(GoToPasswordChangeForUserSetup.GoToSlide);
            switch (GoToPasswordChangeForUserSetup.GoToSlide) {

                case 0:
                    UserLevelDetailHeader.innerHTML = LoadLabelsByLanguage.MyProfile;
                    break;
                case 1:
                    UserLevelDetailHeader.innerHTML = LoadLabelsByLanguage.EmailSetup;
                    break;

            }
            //mySwiperChangePassword.swipeTo(1);

            //}
        }
    }




    /*********************************************************/

}

var swiperParent;

function LoadUserLevelSetupDetailSlider() {
    swiperParent = new Swiper('.swiper-parent', {
        paginationClickable: true,
        onSlideChangeStart: function () {
            var dots = [".detail_nav1", ".detail_nav2", ".detail_nav3"];



            if (swiperParent.activeIndex == 3 || swiperParent.activeIndex == 6 || swiperParent.activeIndex == 9) {
                var color1 = $(dots[swiperParent.activeIndex - 1]).css("background-color");

                if (color1 != 'rgba(0, 0, 0, 0)') {
                    mySwiper.swipeNext();
                }
            }
            else if (swiperParent.activeIndex == 2) {
                var color2 = $(dots[swiperParent.activeIndex + 1]).css("background-color");
                //  alert(color2);
                if (color2 != 'rgba(0, 0, 0, 0)') {
                    mySwiper.swipePrev();
                }
            }
            var i;
            for (i = 0; i < dots.length; i++) {
                var SetBgColorToDiv = dots[i];
                $(SetBgColorToDiv).css('background-color', 'transparent');
            }
            var SetBgColorToDiv = dots[swiperParent.activeIndex];
            $(SetBgColorToDiv).css('background-color', '#E6E8C2');
            $(SetBgColorToDiv).css('border-radius', '5px');
            var headingText = $(SetBgColorToDiv).text();
            $('.hedmid').text(headingText);

        },
        slidesPerView: 1
    })

    var swiperNestedAdminSetUpMyProfileDetail = new Swiper('.swiper-nested-AdminSetUpMyProfileDetail', {
        mode: 'vertical',

        paginationClickable: true,
        slidesPerView: 'auto',
        watchActiveIndex: true,
        onTouchStart: function () {
            holdPosition = 0;
        },

        onResistanceAfter: function (s, pos) {
            holdPosition = pos;

        },

        onTouchEnd: function () {

            if (holdPosition > 100) {
                swiperNestedAdminSetUpMyProfileDetail.params.onlyExternal = true
                //GetAppointmentListNew(pageIndexAccountList);
                swiperNestedAdminSetUpMyProfileDetail.params.onlyExternal = false;
                //pageIndexAccountList++;
            }

        }
    })

    var swiperNestedSetUpEmailDetail = new Swiper('.swiper-nested-SetUpEmailDetail', {
        mode: 'vertical',

        paginationClickable: true,
        slidesPerView: 'auto',
        watchActiveIndex: true,
        onTouchStart: function () {
            holdPosition = 0;
        },

        onResistanceAfter: function (s, pos) {
            holdPosition = pos;

        },

        onTouchEnd: function () {

            if (holdPosition > 100) {
                swiperNestedSetUpEmailDetail.params.onlyExternal = true
                //GetAppointmentListNew(pageIndexAccountList);
                swiperNestedSetUpEmailDetail.params.onlyExternal = false;
                //pageIndexAccountList++;
            }

        }
    })

    var swiperNestedChangePasswordDetail = new Swiper('.swiper-nested-ChangePasswordDetail', {
        mode: 'vertical',

        paginationClickable: true,
        slidesPerView: 'auto',
        watchActiveIndex: true,
        onTouchStart: function () {
            holdPosition = 0;
        },

        onResistanceAfter: function (s, pos) {
            holdPosition = pos;

        },

        onTouchEnd: function () {

            if (holdPosition > 100) {
                swiperNestedChangePasswordDetail.params.onlyExternal = true
                //GetAppointmentListNew(pageIndexAccountList);
                swiperNestedChangePasswordDetail.params.onlyExternal = false;
                //pageIndexAccountList++;
            }

        }
    })

}



//GetClientAccountFromAccountId
function GetClientAccountFromAccountIdForUserSetup() {
    try {

        var MethodName = "/GetClientAccountFromAccountId?ForuserSetup";
        var user = JSON.parse(localStorage.getItem('LoggedUserDetails'));
        var _MobileCredential = MobileCredential;
        _MobileCredential.MobileAppKeyId = user.MobileAppKeyId;

        var Data = { AccountId: user.CRMAccountId, Credential: _MobileCredential };
        GetResultFromService(MethodName, Data);
    }
    catch (exception) { }
}

//done
function GetClientAccountFromAccountIdForUserSetupResult(result) {
    try {

        //  alert(result);
        if (result != null) {
            localStorage.removeItem('AdminSetUpObject');
            localStorage.setItem('AdminSetUpObject', JSON.stringify({
                result: result.d

            }));
            BindDUserSetUpData();
        }

    }
    catch (e) { }
}

function BindDUserSetUpData() {

    var AdminSetUpObject = JSON.parse(localStorage.getItem('AdminSetUpObject'));
    var user = JSON.parse(localStorage.getItem('LoggedUserDetails'));
    var GetAppSettingInfo = JSON.parse(localStorage.getItem('GetAppSettingInfo'));


    if (AdminSetUpObject != null) {

        //Profile Details
        $('#AdminsetupDetailstxtName').val(user.Name);
        $('#AdminsetupDetailstxtMobile').val(user.MobileNumber);
        $('#AdminsetupDetailstxtEmail').val(user.EmailAddress);
        $('#AdminsetupDetailstxtDesignation').val(user.DesignationName);
        $('#AdminsetupDetailstxtManager').val(user.ManagerName);
        $('#AdminsetupDetailstxtRole').val(user.Role);

        if (GetAppSettingInfo != null) {

           
            //EmailSetUp Details
            $('#AdminSetUpSetUpEmailDetailtxtYourSmtpServer').val(GetAppSettingInfo.Result.d.Host);
            CheckSMTPServer();
            for (var i = 0; i < AdminSetUpSetUpEmailDetailddlPortNumber.options.length; i++) {
                if (AdminSetUpSetUpEmailDetailddlPortNumber.options[i].text == GetAppSettingInfo.Result.d.PortNo) {
                    AdminSetUpSetUpEmailDetailddlPortNumber.selectedIndex = i;
                    break;
                }
            }
            //$("#AdminSetUpSetUpEmailDetailddlPortNumber option:contains(" + GetAppSettingInfo.Result.d.PortNo + ")").attr('selected', 'selected');
            $('#AdminSetUpSetUpEmailDetailtxtFromEmailId').val(GetAppSettingInfo.Result.d.UserName);
            $('#AdminSetUpSetUpEmailDetailtxtPassword').val(GetAppSettingInfo.Result.d.Password);
            if (GetAppSettingInfo.Result.d.EnableSSL) {
                $("#AdminSetUpSetUpEmailDetailchkEnableSSl").prop("checked", true);
            } else {
                $("#AdminSetUpSetUpEmailDetailchkEnableSSl").prop("checked", false);
            }
        }
        //Change Password username...
        $('#AdminSetupChangePasswordDetailstxtEmailAddress').val(user.EmailAddress);




        try {
            if (mySwiperChangePassword != null) {
                var SaveCredentialsForAutologin = JSON.parse(localStorage.getItem('SaveCredentialsForAutologin'));
                $('#AdminSetupChangePasswordDetailstxtoldpassword').val(SaveCredentialsForAutologin.Password);
            }
        } catch (exception) { }
    }
}


//UserLevelTaskDetailstaskBtnEditSavetask 
var UserLevelTaskDetailstaskBtnEditSavetask = document.getElementById('UserLevelTaskDetailstaskBtnEditSavetask');
if (UserLevelTaskDetailstaskBtnEditSavetask != null) {
    UserLevelTaskDetailstaskBtnEditSavetask.addEventListener('click', function () {

        switch (swiperParent.activeIndex) {
            case 0:
                UpdateMyProfileDetails();
                break;
            case 1:
                UpdateSmtpSettings();
                break;
            case 2:
                ChangePassword();
                break;
        }
    }, false);
}

//Update User Profile...
function UpdateMyProfileDetails() {
    try {

        if (ValidateMyProfile()) {
            var MethodName = "/UpdateMyProfile";
            var user = JSON.parse(localStorage.getItem('LoggedUserDetails'));
            var _MobileCredential = MobileCredential;

            _MobileCredential.MobileAppKeyId = user.MobileAppKeyId;

            _Name = $('#AdminsetupDetailstxtName').val();
            _Mobile = $('#AdminsetupDetailstxtMobile').val();
            _Designation = $('#AdminsetupDetailstxtDesignation').val();

            var Data = { userid: user.UserId, name: _Name, phonenumber: _Mobile, designation: _Designation, Credential: _MobileCredential };

            GetResultFromService(MethodName, Data);
        }
    }
    catch (ex) { }
}

function ValidateMyProfile() {
    flag = true;
    errorMsg = "";

    if ($.trim($("#AdminsetupDetailstxtName").val()) == "") {
        errorMsg = errorMsg + Environment.NewLine + "* " + LoadLabelsByLanguage.YoumustfillName;

        flag = false;
    }

    if (flag == false) {
        ShowMessage(errorMsg);
    }

    return flag;
}
function UpdateMyProfileResult(result) {
    try {

        if (result != null) {
            if (result.d > 0) {

                var user = JSON.parse(localStorage.getItem('LoggedUserDetails'));
                user.MobileNumber = $.trim($("#AdminsetupDetailstxtMobile").val());
                user.Name = $('#AdminsetupDetailstxtName').val();
                user.DesignationName = $('#AdminsetupDetailstxtDesignation').val();
                localStorage.setItem('LoggedUserDetails', JSON.stringify(user));
                //GetClientAccountFromAccountIdForUserSetup();
                BindDUserSetUpData();
                ShowMessage(LoadLabelsByLanguage.ProfileUpdated);
            }
        }
    }
    catch (ex) { }
}

function UpdateSmtpSettings() {
    try {

        var _SmtpServer, _PortNo, _FromEmailId, _Password;

        _SmtpServer = $("#AdminSetUpSetUpEmailDetailtxtYourSmtpServer").val();

        if ($.trim($('#AdminSetUpSetUpEmailDetailtxtYourSmtpServer').val()).indexOf("gmail") > -1) {
            _PortNo = $('#AdminSetUpSetUpEmailDetailddlPortNumber option:selected').text();
        }
        else {
            _PortNo = $("#AdminSetUpSetUpEmailDetailtxtPortNumber").val();
        }

        _FromEmailId = $("#AdminSetUpSetUpEmailDetailtxtFromEmailId").val();
        _Password = $("#AdminSetUpSetUpEmailDetailtxtPassword").val();

        if (ValidateSMTPData(_SmtpServer, _PortNo, _FromEmailId, _Password)) {
            var MethodName = "/UpdateSmtpSettings";
            var user = JSON.parse(localStorage.getItem('LoggedUserDetails'));

            var _MobileCredential = MobileCredential;
            _MobileCredential.MobileAppKeyId = user.MobileAppKeyId;

            if ($("#AdminSetUpSetUpEmailDetailchkEnableSSl").prop('checked') == true) {
                _PortNo = _PortNo + '&1';
            }
            else {
                _PortNo = _PortNo + '&0';
            }

            var Data = { host: _SmtpServer, portno: _PortNo, username: _FromEmailId, pasword: _Password, userid: user.UserId, Credential: _MobileCredential };

            GetResultFromService(MethodName, Data);
        }
    }
    catch (ex) { }
}

function ValidateSMTPData(_SmtpServer, _PortNo, _FromEmailId, _Password) {
    flag = true;
    errorMsg = "";
    if (_SmtpServer.length == 0) {

        errorMsg = errorMsg + "* " + LoadLabelsByLanguage.YoumustfillSMTPServerName + "<br/>";

        flag = false;
    }

    if ($.trim(_SmtpServer).indexOf("gmail") > -1) {
        if (_PortNo.indexOf("--Select Port No--") > -1) {
            errorMsg = errorMsg + "* " + LoadLabelsByLanguage.YoumustfillPortNo + "<br/>";

            flag = false;

        }
    }
    else {
        if (_PortNo.length == 0) {
            errorMsg = errorMsg + "* " + LoadLabelsByLanguage.YoumustfillPortNo + "<br/>";

            flag = false;

        }
    }

    if (_FromEmailId.length == 0) {
        errorMsg = errorMsg + "* " + LoadLabelsByLanguage.YoumustfillEmailAddress + "<br/>";

        flag = false;
    }

    if (_Password.length == 0) {
        errorMsg = errorMsg + "* " + LoadLabelsByLanguage.YoumustfillPassword + "<br/>";

        flag = false;
    }

    if (flag == false) {
        ShowMessage(errorMsg);
    }

    return flag;
}
function UpdateSmtpSettingsResult(result) {
    try {

        if (result != null) {
            if (result.d > 0) {
                ShowMessage(LoadLabelsByLanguage.SMTPSettingsUpdated);
            }
        }
    }
    catch (ex) { }

}
function ChangePassword() {
    try {

        if (ValidatePassword() == true) {
            var MethodName = "/ChangePassword";
            var user = JSON.parse(localStorage.getItem('LoggedUserDetails'));
            var _MobileCredential = MobileCredential;
            _MobileCredential.MobileAppKeyId = user.MobileAppKeyId;

            var _OldPassword = $('#AdminSetupChangePasswordDetailstxtoldpassword').val();
            var _NewPassword = $('#AdminSetupChangePasswordDetailstxtnewpassword').val();

            /*Save credentials for auto login*/

            var SaveCredentialsForAutologin = JSON.parse(localStorage.getItem('SaveCredentialsForAutologin'));

            localStorage.removeItem('SaveTempCredentialsForAutologin');
            localStorage.setItem('SaveTempCredentialsForAutologin', JSON.stringify({
                ShortAccountName: SaveCredentialsForAutologin.ShortAccountName,
                EmailAddress: user.EmailAddress,
                Password: _NewPassword
            }));

            /*Save credentials for auto login ENDS*/
            var Data = { Username: user.EmailAddress, OldPassword: _OldPassword, NewPassword: _NewPassword, Credential: _MobileCredential };
            GetResultFromService(MethodName, Data);


            var AdminSetupimgChangePasswordSave = document.getElementById('AdminSetupimgChangePasswordSave');
            if (AdminSetupimgChangePasswordSave != null) {


                localStorage.removeItem('RedirectTo');
                localStorage.setItem('RedirectTo', JSON.stringify({
                    RedirectTo: '../WelcomeScreen/Screen1.html'
                }));

            }
        }
    }
    catch (exception) { }
}

function ValidatePassword() {

    flag = true;
    errorMsg = "";
    var _OldPassword = $('#AdminSetupChangePasswordDetailstxtoldpassword').val();
    var _NewPassword = $('#AdminSetupChangePasswordDetailstxtnewpassword').val();
    var _Confirmpassword = $('#AdminSetupChangePasswordDetailstxtConfirmpassword').val();


    if (_OldPassword.length == 0) {
        errorMsg = errorMsg + "* " + LoadLabelsByLanguage.Youmustfill_OldPassword+"<br/>";

        flag = false;
    }

    if (_NewPassword.length == 0) {
        errorMsg = errorMsg + "* " + LoadLabelsByLanguage.Youmustfill_NewPassword + "<br/>";

        flag = false;
    }
    if (_NewPassword.length > 0) {
        if (_OldPassword == _NewPassword) {

            errorMsg = errorMsg + "* " + LoadLabelsByLanguage.NewPasswordAndOldPasswordSame + "<br/>";

            flag = false;
        } 
    }

    if (_NewPassword.length > 0) {
        if (_NewPassword != _Confirmpassword) {

            errorMsg = errorMsg + "* " + LoadLabelsByLanguage.ConfirmPasswordAndNewPasswordMustBeSame + "<br/>";

            flag = false;
        }
    }

    if (flag == false) {
        ShowMessage(errorMsg);
    }

    return flag;
}

function ChangePasswordResult(result) {
    try {
        
        if (result != null) {

            var SaveCredentialsForAutologin = JSON.parse(localStorage.getItem('SaveTempCredentialsForAutologin'));
            if (SaveCredentialsForAutologin != null) {
                localStorage.removeItem('SaveTempCredentialsForAutologin');
                localStorage.removeItem('SaveCredentialsForAutologin');
                localStorage.setItem('SaveCredentialsForAutologin', JSON.stringify({
                    ShortAccountName: SaveCredentialsForAutologin.ShortAccountName,
                    EmailAddress: SaveCredentialsForAutologin.EmailAddress,
                    Password: SaveCredentialsForAutologin.Password
                }));

            }

            localStorage.removeItem('PasswordupdatedSuccessfully');
            localStorage.setItem('PasswordupdatedSuccessfully', JSON.stringify({
                PasswordupdatedSuccessfully: 'PasswordupdatedSuccessfully'
            }));
            RedirectToPage();
            ShowMessage(LoadLabelsByLanguage.Passwordupdated);
        }
    }
    catch (exception) { }
}

function Logout() {
    localStorage.removeItem('IsLogoutUser');
    localStorage.setItem('IsLogoutUser', JSON.stringify({
        IsLogoutUser: true
    }));
    localStorage.removeItem('IsNewRegisteredUser');
    localStorage.removeItem('GetAppSettingInfo');
    localStorage.removeItem('SaveTempCredentialsForAutologin');
    localStorage.removeItem('SaveCredentialsForAutologin');
    localStorage.removeItem('LoggedUserDetails');
    localStorage.removeItem('PleaseCheckYourCredentials');

    localStorage.removeItem('IndustryDDL');
    localStorage.removeItem('AccountObject');
    localStorage.removeItem('ContactObject');
    localStorage.removeItem('Accountdeleted');
    localStorage.removeItem('GetAccountByNameObject');
    localStorage.removeItem('ContactDesignationDDL');
    localStorage.removeItem('GetAllCountriesObj');
    localStorage.removeItem('ContactObject');
    localStorage.removeItem('Contactdeleted');
    localStorage.removeItem('DashBoardDetails');
    localStorage.removeItem('DealObject');
    localStorage.removeItem('DealChanceDDL');
    localStorage.removeItem('DealProductCategoryDDL');
    localStorage.removeItem('DealBudgetStageDDL');
    localStorage.removeItem('DealSolutionPresentedDDL');
    localStorage.removeItem('DealLearningDDL');
    localStorage.removeItem('DealQuoteVSBudgetDDL');
    localStorage.removeItem('DealStatusDDL');
    localStorage.removeItem('AppointmentObject');
    localStorage.removeItem('AppoinmentGuestInfo');
    localStorage.removeItem('ProposalObject');
    localStorage.removeItem('TaskObject');
    localStorage.removeItem('TaskStatusDDL');
    localStorage.removeItem('GetAllProducts');
    localStorage.removeItem('GetTaskTypeMaster');
    localStorage.removeItem('GetAccountByNameForTaskObject');
    localStorage.removeItem('SelectedDealDecisionMakerContactId');
    localStorage.removeItem('GetDealDecisionMakerList');
    window.location.replace("../Login.html");


} 
