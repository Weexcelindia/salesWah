
var ApplicationPageSize = JSON.parse(localStorage.getItem('ApplicationPageSize'));
var ContactPageSize = ApplicationPageSize.PageSize;
var LoadLabelsByLanguage = JSON.parse(localStorage.getItem('LoadLabelsByLanguage'));

function LoadContactLabel() {


    //ContactHeaderLabel
    var ContactHeaderLabel = document.getElementById('ContactHeaderLabel');
    if (ContactHeaderLabel != null) {
        ContactHeaderLabel.innerHTML = LoadLabelsByLanguage.AllContact;
    }
    //ContactListHeaderLabelContactList
    var ContactListHeaderLabelContactList = document.getElementById('ContactListHeaderLabelContactList')
    if (ContactListHeaderLabelContactList != null) {
        ContactListHeaderLabelContactList.innerHTML = LoadLabelsByLanguage.AllContact;
    }

    //    //ContactDetailHeader
    //    var ContactDetailHeader = document.getElementById('ContactDetailHeader');
    //    if (ContactDetailHeader != null)
    //        ContactDetailHeader.innerHTML = LoadLabelsByLanguage.Detail;

    //    //ContactDetailLabelDashboard
    //    var ContactDetailLabelDashboard = document.getElementById('ContactDetailLabelDashboard');
    //    if (ContactDetailLabelDashboard != null)
    //        ContactDetailLabelDashboard.innerHTML = LoadLabelsByLanguage.Dashboard;

    //ContactDetailsLabelFirstName
    var ContactDetailsLabelFirstName = document.getElementById('ContactDetailsLabelFirstName')
    if (ContactDetailsLabelFirstName != null) {
        ContactDetailsLabelFirstName.innerHTML = LoadLabelsByLanguage.FirstName;
    }

    //ContactDetailsLabelLastName
    var ContactDetailsLabelLastName = document.getElementById('ContactDetailsLabelLastName')
    if (ContactDetailsLabelLastName != null) {
        ContactDetailsLabelLastName.innerHTML = LoadLabelsByLanguage.LastName;
    }

    //ContactDetailsLabelEmail
    var ContactDetailsLabelEmail = document.getElementById('ContactDetailsLabelEmail')
    if (ContactDetailsLabelEmail != null) {
        ContactDetailsLabelEmail.innerHTML = LoadLabelsByLanguage.Email;
    }

    //ContactDetailsLabelMobile
    var ContactDetailsLabelMobile = document.getElementById('ContactDetailsLabelMobile')
    if (ContactDetailsLabelMobile != null) {
        ContactDetailsLabelMobile.innerHTML = LoadLabelsByLanguage.Mobile;
    }

    //ContactDetailsLabelDesignation
    var ContactDetailsLabelDesignation = document.getElementById('ContactDetailsLabelDesignation')
    if (ContactDetailsLabelDesignation != null) {
        ContactDetailsLabelDesignation.innerHTML = LoadLabelsByLanguage.Designation;
    }

    //ContactDetailHeaderLabelDashBoard
    var ContactDetailHeaderLabelDashBoard = document.getElementById('ContactDetailHeaderLabelDashBoard')
    if (ContactDetailHeaderLabelDashBoard != null) {
        ContactDetailHeaderLabelDashBoard.innerHTML = LoadLabelsByLanguage.Dashboard;
    }

    //ContactDetailsLabelAccountName
    var ContactDetailsLabelAccountName = document.getElementById('ContactDetailsLabelAccountName')
    if (ContactDetailsLabelAccountName != null) {
        ContactDetailsLabelAccountName.innerHTML = LoadLabelsByLanguage.AccountName;
    }
    //ContactDetailsLabelCity
    var ContactDetailsLabelCity = document.getElementById('ContactDetailsLabelCity')
    if (ContactDetailsLabelCity != null) {
        ContactDetailsLabelCity.innerHTML = LoadLabelsByLanguage.City;
    }

    //ContactDetailsLabelState
    var ContactDetailsLabelState = document.getElementById('ContactDetailsLabelState')
    if (ContactDetailsLabelState != null) {
        ContactDetailsLabelState.innerHTML = LoadLabelsByLanguage.State;
    }

    //ContactDetailsLabelCountry
    var ContactDetailsLabelCountry = document.getElementById('ContactDetailsLabelCountry')
    if (ContactDetailsLabelCountry != null) {
        ContactDetailsLabelCountry.innerHTML = LoadLabelsByLanguage.Country;
    }

    //ContactDetailsLabelComments
    var ContactDetailsLabelComments = document.getElementById('ContactDetailsLabelComments')
    if (ContactDetailsLabelComments != null) {
        ContactDetailsLabelComments.innerHTML = LoadLabelsByLanguage.Comments;
    }

    //ContactDetailHeaderLabelDetail
    var ContactDetailHeaderLabelDetail = document.getElementById('ContactDetailHeaderLabelDetail')
    if (ContactDetailHeaderLabelDetail != null) {
        ContactDetailHeaderLabelDetail.innerHTML = LoadLabelsByLanguage.Detail;
    }

    //ContactDetailHeaderLabelActivities
    var ContactDetailHeaderLabelActivities = document.getElementById('ContactDetailHeaderLabelActivities')
    if (ContactDetailHeaderLabelActivities != null) {
        ContactDetailHeaderLabelActivities.innerHTML = LoadLabelsByLanguage.Activities;
    }

    //ContactDetailHeaderLabelTasks
    var ContactDetailHeaderLabelTasks = document.getElementById('ContactDetailHeaderLabelTasks')
    if (ContactDetailHeaderLabelTasks != null) {
        ContactDetailHeaderLabelTasks.innerHTML = LoadLabelsByLanguage.Tasks;
    }

    //ContactDetailHeaderLabelComments
    var ContactDetailHeaderLabelComments = document.getElementById('ContactDetailHeaderLabelComments')
    if (ContactDetailHeaderLabelComments != null) {
        ContactDetailHeaderLabelComments.innerHTML = LoadLabelsByLanguage.Comments;
    }

    //ContactDetailHeaderLabelAppointments
    var ContactDetailHeaderLabelAppointments = document.getElementById('ContactDetailHeaderLabelAppointments')
    if (ContactDetailHeaderLabelAppointments != null) {
        ContactDetailHeaderLabelAppointments.innerHTML = LoadLabelsByLanguage.Appointments;
    }

    //ContactDetailHeaderLabelMessages
    var ContactDetailHeaderLabelMessages = document.getElementById('ContactDetailHeaderLabelMessages')
    if (ContactDetailHeaderLabelMessages != null) {
        ContactDetailHeaderLabelMessages.innerHTML = LoadLabelsByLanguage.Messages;
    }

    //////////////////////////////////////////////////////Contact Dashbord Section start//////////////////////////////////////
    //ContactDashbordLabelPendingTask
    var ContactDashbordLabelPendingTask = document.getElementById('ContactDashbordLabelPendingTask');
    if (ContactDashbordLabelPendingTask != null) {
        ContactDashbordLabelPendingTask.innerHTML = LoadLabelsByLanguage.PendingTask;
    }
    //ContactDashbordLabelLivedeals
    var ContactDashbordLabelLivedeals = document.getElementById('ContactDashbordLabelLivedeals');
    if (ContactDashbordLabelLivedeals != null) {
        ContactDashbordLabelLivedeals.innerHTML = LoadLabelsByLanguage.LiveDeals;
    }

    //ContactDashbordLabelLastActivity
    var ContactDashbordLabelLastActivity = document.getElementById('ContactDashbordLabelLastActivity');
    if (ContactDashbordLabelLastActivity != null) {
        ContactDashbordLabelLastActivity.innerHTML = LoadLabelsByLanguage.LastActivity;
    }

    //
    var ContactDashbordLabelNextMetting = document.getElementById('ContactDashbordLabelNextMetting');
    if (ContactDashbordLabelNextMetting != null) {
        ContactDashbordLabelNextMetting.innerHTML = LoadLabelsByLanguage.NextMetting;
    }



    //////////////////////////////////////////////////////Contact Desbord Section End//////////////////////////////////////

}

function CheckIfComeAfterAccountUpdate() {

    var RedirectfromContactId = JSON.parse(localStorage.getItem('RedirectfromContactId'));
    if (RedirectfromContactId != null) {
        GetContactbyid(RedirectfromContactId.ContactId);
        var AccountSaveSuccessfully = JSON.parse(localStorage.getItem('AccountSaveSuccessfully'));
        if (AccountSaveSuccessfully != null) {
            if (AccountSaveSuccessfully.AccountSaveSuccessfully == 'AccountSaveSuccessfully') {
                localStorage.removeItem('AccountSaveSuccessfully');
                ShowMessage(LoadLabelsByLanguage.AccountSaveSuccessfully);
            }
            if (AccountSaveSuccessfully.AccountSaveSuccessfully == 'AccountNotSaveSuccessfully') {
                localStorage.removeItem('AccountSaveSuccessfully');
                ShowMessage(LoadLabelsByLanguage.AccountNotSaveSuccessfully);
            }
        }
        var Accountdeleted = JSON.parse(localStorage.getItem('Accountdeleted'));
        if (Accountdeleted != null) {
            if (Accountdeleted.Accountdeleted == 'Accountdeleted') {
                localStorage.removeItem('Accountdeleted');
                ShowMessage(LoadLabelsByLanguage.Accountdeleted);
            }
        }
        localStorage.removeItem('RedirectfromContactId');
    }

    SetContactDetailPageObject();


}

//////////////////////////////////////ContactList///////////////////////////////

//GetContactList
function GetContactList(pageIndex) {

    try {
        document.getElementById('divLoading').style.display = 'block';
        //var MethodName = "/GetContactList";
        var MethodName = "/GetContactListWithPhoneContact";
        var user = JSON.parse(localStorage.getItem('LoggedUserDetails'));
        var _MobileCredential = MobileCredential;
        _MobileCredential.MobileAppKeyId = user.MobileAppKeyId;
        var Data = { pageIndex: pageIndex, pageSize: ContactPageSize, filterPattern: $.trim(ContactListtxtSearch.value), orderByClause: "FirstName", userId: user.UserId, order: "Asc", Credential: _MobileCredential };
        GetResultFromService(MethodName, Data);
    } catch (exception) { }
}

function LoadContactListResult(result) {
  
    var ContactSaveSuccessfully = JSON.parse(localStorage.getItem('ContactSaveSuccessfully'));
    if (ContactSaveSuccessfully != null) {
        if (ContactSaveSuccessfully.ContactSaveSuccessfully == 'ContactSaveSuccessfully') {
            localStorage.removeItem('ContactSaveSuccessfully');
            ShowMessage(LoadLabelsByLanguage.ContactSaveSuccessfully);
        }

        if (ContactSaveSuccessfully.ContactSaveSuccessfully == 'ContactNotSaveSuccessfully') {
            localStorage.removeItem('ContactSaveSuccessfully');
            ShowMessage(LoadLabelsByLanguage.ContactNotSaveSuccessfully);
        }
    }


    var Contactdeleted = JSON.parse(localStorage.getItem('Contactdeleted'));
    if (Contactdeleted != null) {
        if (Contactdeleted.Contactdeleted == 'Contactdeleted') {
            localStorage.removeItem('Contactdeleted');
            ShowMessage(LoadLabelsByLanguage.Contactdeleted);
        }
    }
    var ContactSaveSuccessfully = JSON.parse(localStorage.getItem('ContactSaveSuccessfully'));
    if (ContactSaveSuccessfully != null) {
        if (ContactSaveSuccessfully.ContactSaveSuccessfully == 'ContactSaveSuccessfully') {
            localStorage.removeItem('ContactSaveSuccessfully');
            ShowMessage(LoadLabelsByLanguage.ContactSaveSuccessfully);
        }
    }
    if (swiperNestedContactlist == null) {

        if (result.d.length == 0) {
            $("#ContactListUlDetails").append("<div class='swiper-slide '><div class='dlist'> <ul><li><a href='#' > <h4> No Record Found</h4> </a></li></ul></div></div>");

        }
    }

    var ContactListtxtSearch = document.getElementById('ContactListtxtSearch');
    if (ContactListtxtSearch != null) {
        var search = $.trim(ContactListtxtSearch.value)
        if (search.length > 0) {
            if (swiperNestedContactlist != null) {
                if (pageIndexContactList == 1) {
                    swiperNestedContactlist.removeAllSlides();
                    $("#ContactListUlDetails").empty();
                }
                if (swiperNestedContactlist.slides.length == 0 && result.d.length == 0) {
                    $("#ContactListUlDetails").append("<div class='swiper-slide '><div class='dlist'> <ul><li><a href='#' ><h4>  No Record Found </h4></a></li></ul></div></div>");
                    swiperNestedContactlist.reInit();
                }
            }
        }
    }




    if (result.d.length > 0) {
        for (var i = 0; i < result.d.length; i++) {
            // alert(JSON.stringify(result.d[i]));/// <reference path="../../images/blue-down.png" />


            var ReplacedAccountName = result.d[i].AccountName.replace(/'/g, "\\'");
            var ReplacedFirstName = result.d[i].FirstName.replace(/'/g, "\\'");
            var ReplacedFullName = result.d[i].FullName.replace(/'/g, "\\'");
            var ReplacedLastName = result.d[i].LastName.replace(/'/g, "\\'");
            var ReplacedEmail = result.d[i].Email.replace(/'/g, "\\'");
            var ReplacedMobileNumber = result.d[i].MobileNumber.replace(/'/g, "\\'");
            var ReplacedDesignationName = result.d[i].DesignationName.replace(/'/g, "\\'");
            var ReplacedMainAddressCity = result.d[i].MainAddress.City.replace(/'/g, "\\'");

            var ReplacedMainAddressState = result.d[i].MainAddress.State.replace(/'/g, "\\'");
            var ReplacedMainAddressCountry = result.d[i].MainAddress.Country.replace(/'/g, "\\'");
            var ReplacedSalutation = result.d[i].Salutation.replace(/'/g, "\\'");
            var ReplacedAssistantName = result.d[i].AssistantName.replace(/'/g, "\\'");

            var _ContactDetailObject = "{'AccountName':'" + ReplacedAccountName + "', 'AccountId':'" + result.d[i].AccountId + "','FirstName':'" + ReplacedFirstName + "','FullName':'" + ReplacedFullName + "','LastName':'" + ReplacedLastName + "','Email':'" + ReplacedEmail + "','MobileNumber':'" + ReplacedMobileNumber + "','DesignationId':'" + result.d[i].DesignationId + "','DesignationName':'" + ReplacedDesignationName + "','City':'" + ReplacedMainAddressCity + "','State':'" + ReplacedMainAddressState + "','Country':'" + ReplacedMainAddressCountry + "','ContactId':'" + result.d[i].Id + "','Salutation':'" + ReplacedSalutation + "','ReportTo':'" + result.d[i].ReportTo + "','OfficePhone':'" + result.d[i].OfficePhone + "','Fax':'" + result.d[i].Fax + "','AssistantName':'" + ReplacedAssistantName + "','AssistantPhone':'" + result.d[i].AssistantPhone + "','IsSendEmailEnabled':'" + result.d[i].IsSendEmailEnabled + "'}"
            if (result.d[i].IsCRMContact > 0) {
                $("#ContactListUlDetails").append("<div class='swiper-slide'><div class='dlist'><ul><li><a href='../Contacts/detail.html' onclick=\"GETContactObject(" + _ContactDetailObject + ")\"><h4><img src='../Contacts/images_d/30-x30JPG.jpg' height='25px' width='25px' style='vertical-align: bottom;'/> " + result.d[i].FullName + "</h4><p>" + result.d[i].AccountName + "</p><span>" + result.d[i].EmailOrPhone + "</span> </a></li></ul></div></div>");
            }
            else {
                $("#ContactListUlDetails").append("<div class='swiper-slide'><div class='dlist'><ul><li><a href='../Contacts/Contact_AddNew.html' onclick=\"GETContactObject(" + _ContactDetailObject + ")\"><h4><img src='../Contacts/images_d/Layer 271.png' height='25px' width='25px' style='vertical-align: bottom;'/> " + result.d[i].FullName + "</h4><p>" + result.d[i].AccountName + "</p><span>" + result.d[i].EmailOrPhone + "</span> </a></li></ul></div></div>");
            }


            if (swiperNestedContactlist != null) {
                swiperNestedContactlist.reInit();
            }
        }

    }
    if (swiperNestedContactlist == null) {
        LoadContactSlider();
    }
    document.getElementById('divLoading').style.display = 'none';
}
//On ContactListtxtSearch
var ContactListtxtSearch = document.getElementById('ContactListtxtSearch');
if (ContactListtxtSearch != null) {

    $("#ContactListtxtSearch").keyup(function (e) {
        if (e.keyCode == 13) {
            try {
                document.getElementById('divLoading').style.display = 'block';
                pageIndexContactList = 1
                swiperNestedContactlist.setWrapperTranslate(0, 0, 0)
                swiperNestedContactlist.removeAllSlides();
                var MethodName = "/GetContactListWithPhoneContact";
                var user = JSON.parse(localStorage.getItem('LoggedUserDetails'));
                var _MobileCredential = MobileCredential;
                _MobileCredential.MobileAppKeyId = user.MobileAppKeyId;
                var Data = { pageIndex: 1, pageSize: ContactPageSize, filterPattern: $.trim(ContactListtxtSearch.value), orderByClause: "FirstName", userId: user.UserId, order: "Asc", Credential: _MobileCredential };
                GetResultFromService(MethodName, Data);

            } catch (exception) { }
        }
    });

    $("#ImgContactListSearch").click(function () {
        try {
            document.getElementById('divLoading').style.display = 'block';
            pageIndexContactList = 1
            swiperNestedContactlist.setWrapperTranslate(0, 0, 0)
            swiperNestedContactlist.removeAllSlides();
            var MethodName = "/GetContactListWithPhoneContact";
            var user = JSON.parse(localStorage.getItem('LoggedUserDetails'));
            var _MobileCredential = MobileCredential;
            _MobileCredential.MobileAppKeyId = user.MobileAppKeyId;
            var Data = { pageIndex: 1, pageSize: ContactPageSize, filterPattern: $.trim(ContactListtxtSearch.value), orderByClause: "FirstName", userId: user.UserId, order: "Asc", Credential: _MobileCredential };
            GetResultFromService(MethodName, Data);

        } catch (exception) { }

    });

}
//////////////////////////////////////ContactList end///////////////////////////////

var AddNewContactDetailstxtAccountName = document.getElementById('AddNewContactDetailstxtAccountName');
if (AddNewContactDetailstxtAccountName != null) {
    $("#AddNewContactDetailstxtAccountName").focusout(function () {
        accountNameLst.length = 0;
        if ($(this).val() != '') {
            BindContactAccountData();
        }
    });
}


var ContactAddNewContactBtnSaveContact = document.getElementById('ContactAddNewContactBtnSaveContact');
if (ContactAddNewContactBtnSaveContact != null) {
    ContactAddNewContactBtnSaveContact.addEventListener('click', function () {

        SaveNewContact();
    }, false);
}
var ContactDetailsContactBtnEditSaveContact = document.getElementById('ContactDetailsContactBtnEditSaveContact');
if (ContactDetailsContactBtnEditSaveContact != null) {
    ContactDetailsContactBtnEditSaveContact.addEventListener('click', function () {

        UpdateContact();


    }, false);
}

function ValidateContact() {

    flag = true;
    errorMsg = "";
    //string MobileNo = @"^[0-9\- +,();]";

    if ($.trim($("#AddNewContactDetailstxtFirstName").val()) == "" && $.trim($("#AddNewContactDetailstxtLastName").val()) == "") {

        errorMsg = errorMsg + "\n*" + LoadLabelsByLanguage.YoumustfillFirstNameorLastName + "<br/>";

        flag = false;
    }


    if ($.trim($("#AddNewContactDetailstxtEmail").val()) == "" && $.trim($("#AddNewContactDetailstxtMobile").val()) == "") {

        errorMsg = errorMsg + "\n*" + LoadLabelsByLanguage.YoumustfillEmailorMobile + "<br/>";

        flag = false;
    }


    if ($.trim($("#AddNewContactDetailstxtEmail").val()).length > 0) {

        if (!ValidateEmail($.trim($("#AddNewContactDetailstxtEmail").val()))) {
            errorMsg = errorMsg + "\n* " + LoadLabelsByLanguage.Invalidemailaddress + "<br/>";

            flag = false;
        }
    }



    if (flag == false) {
        ShowMessage(errorMsg);
    }

    return flag;
}

function ValidateContactDetail() {

    flag = true;
    errorMsg = "";
    //string MobileNo = @"^[0-9\- +,();]";

    if ($.trim($("#ContactDetailstxtFirstName").val()) == "" && $.trim($("#ContactDetailstxtLastName").val()) == "") {

        errorMsg = errorMsg + "\n*" + LoadLabelsByLanguage.YoumustfillFirstNameorLastName + "<br/>";

        flag = false;
    }


    if ($.trim($("#ContactDetailstxtEmail").val()) == "" && $.trim($("#ContactDetailstxtMobile").val()) == "") {

        errorMsg = errorMsg + "\n*" + LoadLabelsByLanguage.YoumustfillEmailorMobile + "<br/>";

        flag = false;
    }


    if ($.trim($("#ContactDetailstxtEmail").val()).length > 0) {

        if (!ValidateEmail($.trim($("#ContactDetailstxtEmail").val()))) {
            errorMsg = errorMsg + "\n* " + LoadLabelsByLanguage.Invalidemailaddress + "<br/>";

            flag = false;
        }
    }



    if (flag == false) {
        ShowMessage(errorMsg);
    }

    return flag;
}

function ValidateEmail(email) {
    var expr = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    return expr.test(email);
};

function ValidateAccountData() {

    var flag = true;
    var errorMsg = "";

    if ($.trim($("#AddNewContactDetailstxtAccountName").val()) == "") {
        errorMsg = errorMsg + "\n* " + LoadLabelsByLanguage.YoumustfillAccountName + "<br/>";

        flag = false;
    }


    if ($.trim($("#AddNewContactDetailstxtCity").val()) == '' && $.trim($("#AddNewContactDetailstxtState").val()) == '') {

        errorMsg = errorMsg + "\n* " + LoadLabelsByLanguage.YoumustfillStateOrCity + "<br/>";

        flag = false;
    }

    if (flag == false) {
        ShowMessage(errorMsg);
    }

    return flag;
}
function ValidateAccountDetailData() {
    var flag = true;
    var errorMsg = "";

    //    if ($.trim($("#AddNewContactDetailstxtAccountName").val()) == "") {
    //        errorMsg = errorMsg + "\n* " + LoadLabelsByLanguage.YoumustfillAccountName + "<br/>";

    //        flag = false;
    //    }


    if ($.trim($("#ContactDetailstxtCity").val()) == '' && $.trim($("#ContactDetailstxtState").val()) == '') {

        errorMsg = errorMsg + "\n* " + LoadLabelsByLanguage.YoumustfillStateOrCity + "<br/>";

        flag = false;
    }

    if (flag == false) {
        ShowMessage(errorMsg);
    }

    return flag;
}
///////////////////////////...Save New Contact...//////////////////////////////////

function SaveNewAccount_Contact() {

    if (ValidateAccountData() == true) {
        var divLoading = document.getElementById('divLoading');
        if (divLoading != null) {
            document.getElementById('divLoading').style.display = 'block';
        }
        var _accountName = $.trim($("#AddNewContactDetailstxtAccountName").val());
        var _city = $.trim($("#AddNewContactDetailstxtCity").val());
        var _state = $.trim($("#AddNewContactDetailstxtState").val());


        var _CountryId = $('#ContactDetailsddlCountry option:selected').val();
        var _CountryName = $('#ContactDetailsddlCountry option:selected').text();

        var MethodName = "/InsertAccount";
        var user = JSON.parse(localStorage.getItem('LoggedUserDetails'));
        var _MobileCredential = MobileCredential;
        _MobileCredential.MobileAppKeyId = user.MobileAppKeyId;


        var _MainAddress = { AddressLine1: "", AddressLine2: "", City: _city, State: _state, Country: _CountryName, PostalCode: "" }
        var CRMAccount = { AccountName: _accountName, AccountOwnerId: user.UserId, Site: '', PhoneNumber: '', TypeId: 1, IndustryId: 11, WebsiteURL: "", MainAddress: _MainAddress }
        var Data = { Account: CRMAccount, userId: user.UserId, Credential: _MobileCredential };
        GetResultFromService(MethodName, Data);
    }
}

function InsertAccountResult(result) {
    try {

        if (result.d != null) {


            localStorage.removeItem('NewContactAccountId');
            localStorage.setItem('NewContactAccountId', JSON.stringify({
                AccountId: result.d
            }));
            GetDesignationIdByDesignationname();
            //            var _designationId = $('#ContactDetailsddlDesignation option:selected').val();
            //            var _designationName = $('#ContactDetailsddlDesignation option:selected').text()

            //            if (_designationId == -1)
            //                _designationId = 1;


        }
    } catch (exception) { }
}

function GetDesignationIdByDesignationname() {

    var MethodName = "/GetDesignationIdByDesignationname";
    var user = JSON.parse(localStorage.getItem('LoggedUserDetails'));
    var _MobileCredential = MobileCredential;
    _MobileCredential.MobileAppKeyId = user.MobileAppKeyId;
    var Data = { DesignationName: $.trim($("#ContactDetailstxtDesignation").val()), Credential: _MobileCredential };
    GetResultFromService(MethodName, Data);

}

function GetDesignationIdByDesignationnameResult(result) {

    if (result != null) {

        var NewContactAccountId = JSON.parse(localStorage.getItem('NewContactAccountId'));
        localStorage.removeItem('NewContactAccountId');

        var _firstName = $.trim($("#AddNewContactDetailstxtFirstName").val());
        var _lastName = $.trim($("#AddNewContactDetailstxtLastName").val());
        var _email = $.trim($("#AddNewContactDetailstxtEmail").val());
        var _mobile = $.trim($("#AddNewContactDetailstxtMobile").val());
        var MethodName = "/InsertContact";
        var user = JSON.parse(localStorage.getItem('LoggedUserDetails'));

        var _MobileCredential = MobileCredential;
        _MobileCredential.MobileAppKeyId = user.MobileAppKeyId;

        var _Contact = { AccountId: NewContactAccountId.AccountId, FirstName: _firstName, LastName: _lastName, Email: _email, MobileNumber: _mobile, FullName: _firstName + " " + _lastName, DesignationId: result.d, DepartmentId: 1 }

        var Data = { contact: _Contact, userId: user.UserId, Credential: _MobileCredential };

        GetResultFromService(MethodName, Data);

        localStorage.removeItem('RedirectTo');
        localStorage.setItem('RedirectTo', JSON.stringify({
            RedirectTo: 'detail.html'
        }));

    }
}
function GetDesignationIdByDesignationnameForUpdateContact() {

    var MethodName = "/GetDesignationIdByDesignationname?ForUpdateContact";
    var user = JSON.parse(localStorage.getItem('LoggedUserDetails'));
    var _MobileCredential = MobileCredential;
    _MobileCredential.MobileAppKeyId = user.MobileAppKeyId;
    var Data = { DesignationName: $.trim($("#ContactDetailstxtDesignation").val()), Credential: _MobileCredential };
    GetResultFromService(MethodName, Data);

}

function GetDesignationIdByDesignationnameForUpdateContactResult(result) {

    if (result != null) {



        var _firstName = $.trim($("#ContactDetailstxtFirstName").val());
        var _lastName = $.trim($("#ContactDetailstxtLastName").val());
        var _email = $.trim($("#ContactDetailstxtEmail").val());
        var _mobile = $.trim($("#ContactDetailstxtMobile").val());
        var MethodName = "/UpdateContact";
        var user = JSON.parse(localStorage.getItem('LoggedUserDetails'));
        var _MobileCredential = MobileCredential;
        _MobileCredential.MobileAppKeyId = user.MobileAppKeyId;

        var ContactObject = JSON.parse(localStorage.getItem('ContactObject'));
        var _Contact = { Id: ContactObject.ContactId, AccountId: ContactObject.AccountId, FirstName: _firstName, LastName: _lastName, Email: _email, MobileNumber: _mobile, FullName: _firstName + " " + _lastName, DesignationId: result.d,
            DepartmentId: 1,
            Salutation: ContactObject.Salutation,
            ReportTo: ContactObject.ReportTo,
            OfficePhone: ContactObject.OfficePhone,
            Fax: ContactObject.Fax,
            AssistantName: ContactObject.AssistantName,
            AssistantPhone: ContactObject.AssistantPhone,
            IsSendEmailEnabled: ContactObject.IsSendEmailEnabled
        }

        var Data = { contact: _Contact, userId: user.UserId, Credential: _MobileCredential };

        GetResultFromService(MethodName, Data);

        var ContactDetailstxtComments = document.getElementById('ContactDetailstxtComments');
        if (ContactDetailstxtComments != null) {
            if (ContactDetailstxtComments.value.length > 0) {

                var MethodName = "/InsertContactComments";

                var Data = { Comments: $.trim(ContactDetailstxtComments.value), Contactid: _Contact.Id, CommenterID: user.UserId, Credential: _MobileCredential };

                GetResultFromService(MethodName, Data);
            }
        }
        //IsComeFromAccountDetail
        if (ContactObject.IsComeFromAccountDetail != null) {
            if (ContactObject.IsComeFromAccountDetail == true) {
                localStorage.removeItem('RedirectTo');
                localStorage.setItem('RedirectTo', JSON.stringify({
                    RedirectTo: '../account/detail.html'
                }));
                localStorage.removeItem('FromContactAccountWillSwipeTo');
                localStorage.setItem('FromContactAccountWillSwipeTo', JSON.stringify({
                    Number: 2
                }));
            }

        }
        else {

            localStorage.removeItem('RedirectTo');
            localStorage.setItem('RedirectTo', JSON.stringify({
                RedirectTo: '../Contacts/contactlist.html'
            }));
        }
    }
}
function UpdateContact() {

    if (ValidateContactDetail() == true) {
        if (ValidateAccountDetailData() == true) {

            GetDesignationIdByDesignationnameForUpdateContact();

        }
    }


}

function UpdateContactResult(result) {

    if (result != null) {

        if (result.d == true) {
            localStorage.removeItem('ContactSaveSuccessfully');
            localStorage.setItem('ContactSaveSuccessfully', JSON.stringify({
                ContactSaveSuccessfully: 'ContactSaveSuccessfully'
            }));
        }

        if (result.d == false) {
            localStorage.removeItem('ContactSaveSuccessfully');
            localStorage.setItem('ContactSaveSuccessfully', JSON.stringify({
                ContactSaveSuccessfully: 'ContactNotSaveSuccessfully'
            }));
        }
        RedirectToPage();
    }
}

function SaveNewContact() {

    var ACCOUNT = JSON.parse(localStorage.getItem('GetAccountByNameObject'));


    if (ValidateContact()) {
        if (ValidateAccountData()) {
            if (ACCOUNT == null) {

                SaveNewAccount_Contact()
            }
        }
        else {
            return;
        }

        if (ACCOUNT != null) {

            var ACCOUNT = JSON.parse(localStorage.getItem('GetAccountByNameObject'));

            if (ACCOUNT.Result.d == null) {
                localStorage.removeItem('NewContactAccountId');
                localStorage.setItem('NewContactAccountId', JSON.stringify({
                    AccountId: ACCOUNT.Result.AccountId
                }));
            }
            else {
                localStorage.removeItem('NewContactAccountId');
                localStorage.setItem('NewContactAccountId', JSON.stringify({
                    AccountId: ACCOUNT.Result.d.AccountId
                }));
            }

            GetDesignationIdByDesignationname();


        }
    }
}

function InsertContactResult(result) {
    try {

        if (result.d != null) {

            try {
                if (result.d == -1) {
                    ShowMessage(LoadLabelsByLanguage.ContactAlreadyExists);
                    return;
                }
                GetContactbyid(result.d)
                //RedirectToPage();//ContactAlreadyExists
                var divLoading = document.getElementById('divLoading');
                if (divLoading != null) {
                    document.getElementById('divLoading').style.display = 'none';
                }
                localStorage.removeItem('ContactSaveSuccessfully');
                localStorage.setItem('ContactSaveSuccessfully', JSON.stringify({
                    ContactSaveSuccessfully: 'ContactSaveSuccessfully'
                }));

            } catch (exception) { }


        }
    } catch (exception) { }
}
function GetContactDashboard() {

    try {
        var MethodName = "/GetContactDashBoardById";

        var ContactObject = JSON.parse(localStorage.getItem('ContactObject'));

        var user = JSON.parse(localStorage.getItem('LoggedUserDetails'));

        var _MobileCredential = MobileCredential;

        _MobileCredential.MobileAppKeyId = user.MobileAppKeyId;

        var Data = { contactId: ContactObject.ContactId, Credential: _MobileCredential };

        GetResultFromService(MethodName, Data);
    } catch (exception) { }
}

function GetContactDashBoardByIdResult(result) {
    if (result != null) {

        //ContactDashbordtxtPendingTask
        var ContactDashbordtxtPendingTask = document.getElementById('ContactDashbordtxtPendingTask');
        if (ContactDashbordtxtPendingTask != null) {
            ContactDashbordtxtPendingTask.value = result.d.PendingTask;
        }


        //ContactDashbordtxtLivedeals
        var ContactDashbordtxtLivedeals = document.getElementById('ContactDashbordtxtLivedeals');
        if (ContactDashbordtxtLivedeals != null) {
            ContactDashbordtxtLivedeals.value = result.d.PendingTask;
        }


        //ContactDashbordtxtLastActivity
        var ContactDashbordtxtLastActivity = document.getElementById('ContactDashbordtxtLastActivity');
        if (ContactDashbordtxtLastActivity != null) {
            ContactDashbordtxtLastActivity.value = convertJSONDateToReadableFormat(result.d.LastActivityOn);
        }


        //ContactDashbordtxtNextMetting
        var ContactDashbordtxtNextMetting = document.getElementById('ContactDashbordtxtNextMetting');
        if (ContactDashbordtxtNextMetting != null) {
            ContactDashbordtxtNextMetting.value = convertJSONDateToReadableFormat(result.d.NextMeetingDay);
        }

        GetTaskByContactID();
    }
}


function GetContactbyid(Contactid) {
    try {

        var MethodName = "/GetContactById";

        var user = JSON.parse(localStorage.getItem('LoggedUserDetails'));

        var _MobileCredential = MobileCredential;

        _MobileCredential.MobileAppKeyId = user.MobileAppKeyId;

        var Data = { ID: Contactid, Credential: _MobileCredential };

        GetResultFromService(MethodName, Data);

    } catch (exception) { }
}

function GetContactByIdResult(result) {

    var ContactObject = { FirstName: result.d.FirstName, LastName: result.d.LastName, Email: result.d.Email, MobileNumber: result.d.MobileNumber, DesignationName: result.d.DesignationName, City: result.d.MainAddress.City, AccountName: result.d.AccountName, State: result.d.MainAddress.State, Country: result.d.MainAddress.Country, DesignationId: result.d.DesignationId, ContactId: result.d.Id, AccountId: result.d.AccountId, FullName: result.d.FullName, Salutation: result.d.Salutation, ReportTo: result.d.ReportTo, OfficePhone: result.d.OfficePhone, Fax: result.d.Fax, AssistantName: result.d.AssistantName, AssistantPhone: result.d.AssistantPhone, IsSendEmailEnabled: result.d.IsSendEmailEnabled };

    GETContactObject(ContactObject);

    RedirectToPage();

    // SetContactDetailPageObject();

    //ShowMessage(LoadLabelsByLanguage.ContactSaveSuccessfully);
    localStorage.removeItem('GetAccountByNameObject');
}
///////////////////////////...Save New Contact Over...//////////////////////////////////


///////////////////////////////////AutoCompleter.....////////////////////////////////
function GetActiveAccounts() {
    try {
        //        var MethodName = "/GetActiveAccounts";
        //        var user = JSON.parse(localStorage.getItem('LoggedUserDetails'));
        //        var _MobileCredential = MobileCredential;
        //        _MobileCredential.MobileAppKeyId = user.MobileAppKeyId;
        //        var Data = { userId: user.UserId, filter: '', Credential: _MobileCredential };
        //        GetResultFromService(MethodName, Data);
    } catch (exception) { }
}

var accountNameLst = new Array();

//On AddNewContactDetailstxtAccountName
var AddNewContactDetailstxtAccountName = document.getElementById('AddNewContactDetailstxtAccountName');
if (AddNewContactDetailstxtAccountName != null) {

    $("#AddNewContactDetailstxtAccountName").keyup(function () {
        try {

            if ($("#AddNewContactDetailstxtAccountName").val().length < 3) {

                accountNameLst.length = 0;

            }

        } catch (exception) { }

    });

}
function GetActiveAccountsResult(result) {
    try {
        //var accountNameLst = new Array();
        if (result.d.length > 0) {
            for (var i = 0; i < result.d.length; i++) {
                accountNameLst[i] = result.d[i].AccountName;
            }
        }
        $("#AddNewContactDetailstxtAccountName").autocomplete({
            source: accountNameLst
        });
        $("#AddNewContactDetailstxtAccountName").autocomplete("search", $("#AddNewContactDetailstxtAccountName").val());

        document.getElementById('divLoading').style.display = 'none';
    }
    catch (exception) { }
}
$('html').click(function () {
    var AddNewContactDetailstxtAccountName = document.getElementById('AddNewContactDetailstxtAccountName');
    if (AddNewContactDetailstxtAccountName != null) {
        if ($('.ui-autocomplete.ui-widget:visible').length == 1) {
            $("#AddNewContactDetailstxtAccountName").autocomplete("close");
        }
    }

});
function BindContactAccountData() {
    try {

        CheckIsActiveAccount();
    } catch (exception) { }
}
function CheckIsActiveAccount() {
    try {

        var MethodName = "/GetActiveAccounts?CheckIsActiveAccount";
        var user = JSON.parse(localStorage.getItem('LoggedUserDetails'));
        var _MobileCredential = MobileCredential;
        _MobileCredential.MobileAppKeyId = user.MobileAppKeyId;
        var Data = { userId: user.UserId, filter: $.trim($("#AddNewContactDetailstxtAccountName").val()), Credential: _MobileCredential };
        GetResultFromService(MethodName, Data);

    } catch (exception) { }

}
function GetActiveAccountsCheckIsActiveAccountResult(result) {

    if (result != null) {
        if (result.d.length > 0) {
            var MethodName = "/GetAccountByName";
            var user = JSON.parse(localStorage.getItem('LoggedUserDetails'));
            var _MobileCredential = MobileCredential;
            _MobileCredential.MobileAppKeyId = user.MobileAppKeyId;

            var _accountName = $.trim($("#AddNewContactDetailstxtAccountName").val());

            var Data = { AccountName: _accountName, Credential: _MobileCredential };
            GetResultFromService(MethodName, Data);
        }
        else {
            localStorage.removeItem('GetAccountByNameObject');
            $("#AddNewContactDetailstxtCity").val('');
            $("#AddNewContactDetailstxtState").val('');

            $("#AddNewContactDetailstxtCity").attr('readonly', false);
            $("#AddNewContactDetailstxtState").attr('readonly', false);
            $("#ContactDetailsddlCountry").prop("disabled", false);
        }
    }



}
function GetAccountByNameResult(result) {
    try {
        if (result.d != null) {

            if (result.d.AccountId != 0) {
                localStorage.removeItem('GetAccountByNameObject');
                localStorage.setItem('GetAccountByNameObject', JSON.stringify({
                    Result: result
                }));

                $("#AddNewContactDetailstxtCity").val(result.d.MainAddress.City);
                $("#AddNewContactDetailstxtState").val(result.d.MainAddress.State);

                var ContactDetailsCountryDDL = JSON.parse(localStorage.getItem('GetAllCountriesObj'));
                var SetValue = 0;
                if (ContactDetailsCountryDDL.Result.d.length > 0) {
                    for (var i = 0; i < ContactDetailsCountryDDL.Result.d.length; i++) {

                        if (result.d.MainAddress.Country == ContactDetailsCountryDDL.Result.d[i].value) {
                            SetValue = i + 1;
                            break;
                        }
                    }
                    $("#ContactDetailsddlCountry").val(SetValue);
                }
                $("#AddNewContactDetailstxtCity").attr('readonly', true);
                $("#AddNewContactDetailstxtState").attr('readonly', true);
                $("#ContactDetailsddlCountry").prop("disabled", true);
            }
            else {
                localStorage.removeItem('GetAccountByNameObject');
            }
        }
    }
    catch (exception) { }
}
///////////////////////////////////AutoCompleter.....Over////////////////////////////////

/////////////////////////////////////Contact DropDowns Start////////////////////////////////
function getSeedDesignationList() {
    try {
        var MethodName = "/GetAllDesignations";

        var user = JSON.parse(localStorage.getItem('LoggedUserDetails'));

        var _MobileCredential = MobileCredential;
        _MobileCredential.MobileAppKeyId = user.MobileAppKeyId;

        var Data = { Credential: _MobileCredential };

        GetResultFromService(MethodName, Data);
    } catch (exception) { }
}

function SetDesignationListResult(result) {

    try {
        localStorage.removeItem('ContactDesignationDDL');
        localStorage.setItem('ContactDesignationDDL', JSON.stringify({
            Result: result
        }));
        LoadContactDesignationList();
    }
    catch (exception) { }
}

//ContactDetailsContactBtnCallContact 
var ContactDetailsContactBtnCallContact = document.getElementById('ContactDetailsContactBtnCallContact');
if (ContactDetailsContactBtnCallContact != null) {
    ContactDetailsContactBtnCallContact.addEventListener('click', function () {
        var ContactObject = JSON.parse(localStorage.getItem('ContactObject'));
        if (ContactObject != null) {
            if (ContactObject.MobileNumber != '') {
                window.plugins.CallNumber.callNumber(onCallSuccess, onCallError, ContactObject.MobileNumber);

            } else {
                ShowMessage(LoadLabelsByLanguage.PleaseUpdateContactPhoneNumber);
            }
        }
    }, false);
}

function onCallSuccess() {
    var LoadLabelsByLanguage = JSON.parse(localStorage.getItem('LoadLabelsByLanguage'));
    navigator.notification.confirm(
            LoadLabelsByLanguage.DoYouWantToLogThisCallasActivity, // message
             onIwanttoLog,            // callback to invoke with index of button pressed
            LoadLabelsByLanguage.Alert,           // title
            ['Cancel', 'I Want to log']         // buttonLabels
        );
}
function onCallError() {

}

function onIwanttoLog(buttonIndex) {
    if (buttonIndex == 2) {
        window.location.replace("../Contacts/ActivityLog.htm");
    }

}

//ContactDetailsContactBtnDeleteContact 
var ContactDetailsContactBtnDeleteContact = document.getElementById('ContactDetailsContactBtnDeleteContact');
if (ContactDetailsContactBtnDeleteContact != null) {
    ContactDetailsContactBtnDeleteContact.addEventListener('click', function () {
        respConfirm();
    }, false);
}

//On ContactDetailstxtDesignation
var ContactDetailstxtDesignation = document.getElementById('ContactDetailstxtDesignation');
if (ContactDetailstxtDesignation != null) {

    $("#ContactDetailstxtDesignation").keyup(function () {
        try {

            $("#ContactDetailstxtDesignation").autocomplete("search", $("#ContactDetailstxtDesignation").val());


        } catch (exception) { }

    });

}

function LoadContactDesignationList() {
    try {

        var DesignationName = new Array();
        var ContactDesignationDDL = JSON.parse(localStorage.getItem('ContactDesignationDDL'));
        if (ContactDesignationDDL.Result.d.length > 0) {
            for (var i = 0; i < ContactDesignationDDL.Result.d.length; i++) {
                DesignationName[i] = ContactDesignationDDL.Result.d[i].value;
            }
        }

        $("#ContactDetailstxtDesignation").autocomplete({
            source: DesignationName
        });

        // $("#ContactDetailstxtDesignation").autocomplete("search", $("#ContactDetailstxtDesignation").val());

    } catch (exception) { }
}

////////////////////////////////////....Bind Country List...///////////////////////////////

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
        LoadContactCountriesList();
    }
    catch (exception) { }
}

function LoadContactCountriesList() {
    try {

        var ContactDetailsddlCountry = document.getElementById('ContactDetailsddlCountry');

        var ContactDetailsCountryDDL = JSON.parse(localStorage.getItem('GetAllCountriesObj'));

        $("#ContactDetailsddlCountry").empty();

        var option1 = document.createElement("option");
        option1.text = "--None--";
        option1.value = -1;
        ContactDetailsddlCountry.add(option1, null);

        if (ContactDetailsCountryDDL.Result.d.length > 0) {
            for (var i = 0; i < ContactDetailsCountryDDL.Result.d.length; i++) {
                var option = document.createElement("option");
                option.text = ContactDetailsCountryDDL.Result.d[i].value;
                option.value = ContactDetailsCountryDDL.Result.d[i].key;
                ContactDetailsddlCountry.add(option, null);
            }
            var ContactObject = JSON.parse(localStorage.getItem('ContactObject'));

            var SetValue = '';
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
            // $("#ContactDetailsddlCountry").val(SetValue);

            var SaleswahCrmlitePageURL = JSON.parse(localStorage.getItem('SaleswahCrmlitePageURL'));
            if (SaleswahCrmlitePageURL != null) {
                if (SaleswahCrmlitePageURL.URL == 'account_detail_html') {

                    var AccountObject = JSON.parse(localStorage.getItem('AccountObject'));
                    $("#ContactDetailsddlCountry option:contains(" + AccountObject.Country + ")").attr('selected', 'selected');
                    $("#ContactDetailsddlCountry").prop("disabled", true);
                }
            }
        }
    } catch (exception) { }
}
////////////////////////////////////....Bind Country List Over...///////////////////////////////

/////////////////////////////////////Contact DropDowns End/////////////////////////

//////////////////////////////////////ContactDetail Start///////////////////////////////

function GETContactObject(Obj) {

    localStorage.removeItem('ContactObject');
    localStorage.setItem('ContactObject', JSON.stringify({
        FirstName: Obj.FirstName,
        LastName: Obj.LastName,
        Email: Obj.Email,
        MobileNumber: Obj.MobileNumber,
        DesignationName: Obj.DesignationName,
        City: Obj.City,
        AccountName: Obj.AccountName,
        State: Obj.State,
        Country: Obj.Country,
        DesignationId: Obj.DesignationId,
        ContactId: Obj.ContactId,
        AccountId: Obj.AccountId,
        FullName: Obj.FullName,
        Salutation: Obj.Salutation,
        ReportTo: Obj.ReportTo,
        OfficePhone: Obj.OfficePhone,
        Fax: Obj.Fax,
        AssistantName: Obj.AssistantName,
        AssistantPhone: Obj.AssistantPhone,
        IsSendEmailEnabled: Obj.IsSendEmailEnabled
    }));

}

function SetContactDetailPageObject() {

    var ContactObject = JSON.parse(localStorage.getItem('ContactObject'));

    var ContactSaveSuccessfully = JSON.parse(localStorage.getItem('ContactSaveSuccessfully'));
    if (ContactSaveSuccessfully != null) {
        if (ContactSaveSuccessfully.ContactSaveSuccessfully == 'ContactSaveSuccessfully') {
            localStorage.removeItem('ContactSaveSuccessfully');
            ShowMessage(LoadLabelsByLanguage.ContactSaveSuccessfully);
        }
    }

    var ActivityInsertedSuccessfully = JSON.parse(localStorage.getItem('ActivityInsertedSuccessfully'));
    if (ActivityInsertedSuccessfully != null) {
        if (ActivityInsertedSuccessfully.ActivityInsertedSuccessfully == 'ActivityInsertedSuccessfully') {
            localStorage.removeItem('ActivityInsertedSuccessfully');
            ShowMessage(LoadLabelsByLanguage.ActivityInsertedSuccessfully);
        }
    }

    //ContactDetailHeader
    var ContactDetailHeader = document.getElementById('ContactDetailHeader');
    if (ContactDetailHeader != null) {
        //   ContactDetailHeader.innerHTML = ContactObject.FullName;
        if (ContactObject.FullName.length > 30) {
            ContactDetailHeader.innerHTML = ContactObject.FullName.substring(0, 30) + '...';
        }
        else {
            ContactDetailHeader.innerHTML = ContactObject.FullName;

        }
    }
    //ContactDetailstxtFirstName
    var ContactDetailstxtFirstName = document.getElementById('ContactDetailstxtFirstName');
    ContactDetailstxtFirstName.value = $.trim(ContactObject.FirstName);

    //ContactDetailstxtLastName
    var ContactDetailstxtLastName = document.getElementById('ContactDetailstxtLastName');
    ContactDetailstxtLastName.value = $.trim(ContactObject.LastName);

    //ContactDetailstxtEmail
    var ContactDetailstxtEmail = document.getElementById('ContactDetailstxtEmail');
    ContactDetailstxtEmail.value = $.trim(ContactObject.Email);

    //ContactDetailstxtMobile
    var ContactDetailstxtMobile = document.getElementById('ContactDetailstxtMobile');
    ContactDetailstxtMobile.value = $.trim(ContactObject.MobileNumber);

    //ContactDetailsanchorAccountName
    var ContactDetailsanchorAccountName = document.getElementById('ContactDetailsanchorAccountName');
    if (ContactDetailsanchorAccountName != null) {
        if (ContactObject.AccountName.length > 14) {
            ContactDetailsanchorAccountName.innerHTML = ContactObject.AccountName.substring(0, 14) + '...';
        }
        else {
            ContactDetailsanchorAccountName.innerHTML = ContactObject.AccountName;

        }

        //ContactDetailsanchorAccountName.innerHTML = ContactObject.AccountName;
        $("#ContactDetailsanchorAccountName").attr('onclick', 'getAccountFromContactObject()');
        $("#ContactDetailsanchorAccountName").attr('href', '../account/detail.html')
    }

    //ContactDetailstxtCity
    var ContactDetailstxtCity = document.getElementById('ContactDetailstxtCity');
    ContactDetailstxtCity.value = ContactObject.City;

    //ContactDetailstxtState
    var ContactDetailstxtState = document.getElementById('ContactDetailstxtState');
    ContactDetailstxtState.value = ContactObject.State;

    //ContactDetailstxtCountry
    var ContactDetailstxtCountry = document.getElementById('ContactDetailstxtCountry');
    ContactDetailstxtCountry.value = ContactObject.Country;

    GetDesignationNameByDesignationId(ContactObject.DesignationId);

    LoadContactDetailSlider();

    GetContactDashboard();
}

//////////////////////////////////////ContactDetail end///////////////////////////////
function GetDesignationNameByDesignationId(DesignationId) {

    var MethodName = "/GetDesignationNameByDesignationId";

    var user = JSON.parse(localStorage.getItem('LoggedUserDetails'));

    var _MobileCredential = MobileCredential;
    _MobileCredential.MobileAppKeyId = user.MobileAppKeyId;

    var ContactObject = JSON.parse(localStorage.getItem('ContactObject'));

    var Data = { DesignationId: DesignationId, Credential: _MobileCredential };

    GetResultFromService(MethodName, Data);
}

function GetDesignationNameByDesignationIdResult(result) {

    if (result.d != null) {
        var ContactDetailstxtDesignation = document.getElementById('ContactDetailstxtDesignation');
        if (ContactDetailstxtDesignation != null) {
            ContactDetailstxtDesignation.value = result.d;
        }

    }
}
//////////////////////////////////////////////////////////////////////////////////////
function getAccountFromContactObject() {
    var ContactObject = JSON.parse(localStorage.getItem('ContactObject'));
    localStorage.removeItem('AccountObject');
    localStorage.setItem('AccountObject', JSON.stringify({
        ContactAccountId: ContactObject.AccountId
    }));

    localStorage.removeItem('RedirectTo');
    localStorage.setItem('RedirectTo', JSON.stringify({
        RedirectTo: '../Contacts/detail.html'
    }));

    localStorage.removeItem('RedirectfromContactId');
    localStorage.setItem('RedirectfromContactId', JSON.stringify({
        ContactId: ContactObject.ContactId
    }));

}
//////////////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////Contact Activities Start/////////////////////////////

//getContactActivitiesList
function getContactActivitiesList() {
    try {

        var MethodName = "/GetContactActivities";

        var user = JSON.parse(localStorage.getItem('LoggedUserDetails'));

        var _MobileCredential = MobileCredential;
        _MobileCredential.MobileAppKeyId = user.MobileAppKeyId;

        var ContactObject = JSON.parse(localStorage.getItem('ContactObject'));

        var Data = { contactId: ContactObject.ContactId, Credential: _MobileCredential };

        GetResultFromService(MethodName, Data);
    } catch (exception) { }
}

function LoadContactActivitiesResult(result) {
    try {

        if (swiperNestedContactActivities.slides.length == 0) {
            if (result.d.length == 0) {
                $("#ContactActivitiesUlDetails").append("<div class='swiper-slide '><div class='dlist'> <ul><li> <a href='#' > <h4>No Record Found </h4></a></li></ul></div></div>");
                swiperNestedContactActivities.reInit();
            }
        }
        if (result.d.length > 0) {
            for (var i = 0; i < result.d.length; i++) {

                //var _DealDetailObj = "{'AccountName':'" + result.d[i].AccountName + "','ProductCategory':'" + result.d[i].ProductCategory + "','ChanceId':'" + result.d[i].ChanceId + "','ForecastDate':'" + result.d[i].ForecastDate + "','BudgetValue':'" + result.d[i].BudgetValue + "','QuoteVSBudgetValue':'" + result.d[i].QuoteVSBudgetValue + "','QuoteValue':'" + result.d[i].QuoteValue + "','Dealid':'" + result.d[i].DealId + "','DealStatus':'" + result.d[i].DealStatus + "','ProductCategoryId':'" + result.d[i].ProductCategoryId + "','BudgetStageId':'" + result.d[i].BudgetStageId + "','SolutionRatingId':'" + result.d[i].SolutionRatingId + "','DealValue':'" + result.d[i].DealValue + "','LearningId':'" + result.d[i].LearningId + "','QuoteVSBudgetId':'" + result.d[i].QuoteVSBudgetId + "','Authority':'" + result.d[i].Authority + "','Budget':'" + result.d[i].Budget + "','Need':'" + result.d[i].Need + "','Time':'" + result.d[i].Time + "','QuoteDate':'" + result.d[i].QuoteDate + "'}";
                $("#ContactActivitiesUlDetails").append("<div class='swiper-slide'><div class='dlist'><ul><li> <a href='#' ><h4>" + result.d[i].ActivityName + " " + convertJSONDateToReadableFormat(result.d[i].DateOfActivity) + "</h4></a><p>" + result.d[i].ContactName + "</p><span>" + result.d[i].AccountName + "</span> </li></ul></div></div>");
                if (swiperNestedContactActivities != null) {
                    swiperNestedContactActivities.reInit();
                }
            }
        }
        GetContactComments();

    } catch (exception) { }
}

//////////////////////////////////////Contact Activities End///////////////////////////////

//////////////////////////////////////Contact Tasks Start/////////////////////////////

//getContactTasksList
function GetTaskByContactID() {
    try {

        var MethodName = "/GetTaskByContactID";

        var user = JSON.parse(localStorage.getItem('LoggedUserDetails'));

        var _MobileCredential = MobileCredential;
        _MobileCredential.MobileAppKeyId = user.MobileAppKeyId;

        var ContactObject = JSON.parse(localStorage.getItem('ContactObject'));

        var Data = { contactID: ContactObject.ContactId, Credential: _MobileCredential };

        GetResultFromService(MethodName, Data);
    } catch (exception) { }
}
//LoadTaskByContactIDResult
function LoadTaskByContactIDResult(result) {
    try {

        if (swiperNestedContactTasks.slides.length == 0) {
            if (result.d.length == 0) {
                //alert(document.getElementById("ContactTasksUlDetails"));
                $("#ContactTasksUlDetails").append("<div class='swiper-slide '><div class='dlist'> <ul><li><a href='#' > <h4> No Record Found</h4> </a></li></ul></div></div>");

                swiperNestedContactTasks.reInit();

            }
        }
        if (result.d.length > 0) {
            for (var i = 0; i < result.d.length; i++) {
                //alert(JSON.stringify(result.d[i]))
                //var _DealDetailObj = "{'AccountName':'" + result.d[i].AccountName + "','ProductCategory':'" + result.d[i].ProductCategory + "','ChanceId':'" + result.d[i].ChanceId + "','ForecastDate':'" + result.d[i].ForecastDate + "','BudgetValue':'" + result.d[i].BudgetValue + "','QuoteVSBudgetValue':'" + result.d[i].QuoteVSBudgetValue + "','QuoteValue':'" + result.d[i].QuoteValue + "','Dealid':'" + result.d[i].DealId + "','DealStatus':'" + result.d[i].DealStatus + "','ProductCategoryId':'" + result.d[i].ProductCategoryId + "','BudgetStageId':'" + result.d[i].BudgetStageId + "','SolutionRatingId':'" + result.d[i].SolutionRatingId + "','DealValue':'" + result.d[i].DealValue + "','LearningId':'" + result.d[i].LearningId + "','QuoteVSBudgetId':'" + result.d[i].QuoteVSBudgetId + "','Authority':'" + result.d[i].Authority + "','Budget':'" + result.d[i].Budget + "','Need':'" + result.d[i].Need + "','Time':'" + result.d[i].Time + "','QuoteDate':'" + result.d[i].QuoteDate + "'}";

                $("#ContactTasksUlDetails").append("<div class='swiper-slide'><div class='dlist'><ul><li><a href='#' ><h4> " + result.d[i].TaskDescription + " due by " + convertJSONDateToReadableFormat(result.d[i].FollowUpDate) + "</h4></a></li></ul></div></div>");
                if (swiperNestedContactTasks != null) {
                    swiperNestedContactTasks.reInit();
                }
            }
        }

        getContactActivitiesList();
    } catch (exception) { }
}

//////////////////////////////////////Contact Tasks End///////////////////////////////

//////////////////////////////////////Contact Comments Start/////////////////////////////

//GetContactComments
function GetContactComments() {
    try {

        var MethodName = "/GetContactComments";

        var user = JSON.parse(localStorage.getItem('LoggedUserDetails'));

        var _MobileCredential = MobileCredential;
        _MobileCredential.MobileAppKeyId = user.MobileAppKeyId;

        var ContactObject = JSON.parse(localStorage.getItem('ContactObject'));

        var Data = { contactId: ContactObject.ContactId, Credential: _MobileCredential };

        GetResultFromService(MethodName, Data);
    } catch (exception) { }
}

function LoadContactCommentsResult(result) {
    try {

        if (swiperNestedContactComments.slides.length == 0) {
            if (result.d.length == 0) {
                $("#ContactCommentsUlDetails").append("<div class='swiper-slide '><div class='dlist'> <ul><li> <a href='#' ><h4> No Record Found </h4></a></li></ul></div></div>");

                swiperNestedContactComments.reInit();

            }
        }
        if (result.d.length > 0) {
            for (var i = 0; i < result.d.length; i++) {

                //var _DealDetailObj = "{'AccountName':'" + result.d[i].AccountName + "','ProductCategory':'" + result.d[i].ProductCategory + "','ChanceId':'" + result.d[i].ChanceId + "','ForecastDate':'" + result.d[i].ForecastDate + "','BudgetValue':'" + result.d[i].BudgetValue + "','QuoteVSBudgetValue':'" + result.d[i].QuoteVSBudgetValue + "','QuoteValue':'" + result.d[i].QuoteValue + "','Dealid':'" + result.d[i].DealId + "','DealStatus':'" + result.d[i].DealStatus + "','ProductCategoryId':'" + result.d[i].ProductCategoryId + "','BudgetStageId':'" + result.d[i].BudgetStageId + "','SolutionRatingId':'" + result.d[i].SolutionRatingId + "','DealValue':'" + result.d[i].DealValue + "','LearningId':'" + result.d[i].LearningId + "','QuoteVSBudgetId':'" + result.d[i].QuoteVSBudgetId + "','Authority':'" + result.d[i].Authority + "','Budget':'" + result.d[i].Budget + "','Need':'" + result.d[i].Need + "','Time':'" + result.d[i].Time + "','QuoteDate':'" + result.d[i].QuoteDate + "'}";
                $("#ContactCommentsUlDetails").append("<div class='swiper-slide'><div class='dlist'><ul><li> <a href='#' ><h4>" + result.d[i].CommentedBy + " said on " + result.d[i].CommentedOn + "</h4></a><p>" + result.d[i].Comments + "</p></li></ul></div></div>");
                if (swiperNestedContactComments != null) {
                    swiperNestedContactComments.reInit();
                }
            }
        }


    } catch (exception) { }
}

//////////////////////////////////////Contact Comments End///////////////////////////////
//////////////////////////////////////Contact Appointment Start/////////////////////////////

//GetAppointmentsByContactID
function GetAppointmentsByContactID() {
    try {

        var MethodName = "/GetAppointmentsByContactID";

        var user = JSON.parse(localStorage.getItem('LoggedUserDetails'));

        var _MobileCredential = MobileCredential;
        _MobileCredential.MobileAppKeyId = user.MobileAppKeyId;

        var ContactObject = JSON.parse(localStorage.getItem('ContactObject'));

        var Data = { contactID: ContactObject.ContactId, Credential: _MobileCredential };

        GetResultFromService(MethodName, Data);
    } catch (exception) { }
}

function LoadAppointmentsByContactIDResult(result) {
    try {

        if (swiperNestedContactAppointments.slides.length == 0) {
            if (result.d.length == 0) {
                $("#ContactAppointmentsUlDetails").append("<div class='swiper-slide '><div class='dlist'> <ul><li><a href='#' > <h4> No Record Found</h4> </a></li></ul></div></div>");
                if (swiperNestedContactAppointments != null) {
                    swiperNestedContactAppointments.reInit();
                }
            }
        }
        if (result.d.length > 0) {
            for (var i = 0; i < result.d.length; i++) {

                //alert(JSON.stringify(result.d[i]))
                //var _DealDetailObj = "{'AccountName':'" + result.d[i].AccountName + "','ProductCategory':'" + result.d[i].ProductCategory + "','ChanceId':'" + result.d[i].ChanceId + "','ForecastDate':'" + result.d[i].ForecastDate + "','BudgetValue':'" + result.d[i].BudgetValue + "','QuoteVSBudgetValue':'" + result.d[i].QuoteVSBudgetValue + "','QuoteValue':'" + result.d[i].QuoteValue + "','Dealid':'" + result.d[i].DealId + "','DealStatus':'" + result.d[i].DealStatus + "','ProductCategoryId':'" + result.d[i].ProductCategoryId + "','BudgetStageId':'" + result.d[i].BudgetStageId + "','SolutionRatingId':'" + result.d[i].SolutionRatingId + "','DealValue':'" + result.d[i].DealValue + "','LearningId':'" + result.d[i].LearningId + "','QuoteVSBudgetId':'" + result.d[i].QuoteVSBudgetId + "','Authority':'" + result.d[i].Authority + "','Budget':'" + result.d[i].Budget + "','Need':'" + result.d[i].Need + "','Time':'" + result.d[i].Time + "','QuoteDate':'" + result.d[i].QuoteDate + "'}";
                $("#ContactAppointmentsUlDetails").append("<div class='swiper-slide'><div class='dlist'><ul><li> <a href='#' ><h4>" + result.d[i].ContactName + "</h4></a><p> On " + isoDateReviver(result.d[i].TimeblockFrom) + "</p><span> At " + result.d[i].Where + "</span></li></ul></div></div>");
                if (swiperNestedContactAppointments != null) {
                    swiperNestedContactAppointments.reInit();
                }
            }
        }


    } catch (exception) { }
}

//////////////////////////////////////Contact Appointment End///////////////////////////////

//LoadContactSlider
var swiperNestedContactlist
var pageIndexContactList
function LoadContactSlider() {

    var swiperParent = new Swiper('.swiper-parent', {
        paginationClickable: true,
        slidesPerView: 1
    })

    if (pageIndexContactList == null) {
        pageIndexContactList = 1;
    }
    swiperNestedContactlist = new Swiper('.swiper-nested-Contactlist', {
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
                pageIndexContactList++;
                swiperNestedContactlist.params.onlyExternal = true
                GetContactList(pageIndexContactList);
                swiperNestedContactlist.params.onlyExternal = false;

            }
        }
    })
    BindDDL();
}

function BindDDL() {

    var _ContactDesignationDDL = JSON.parse(localStorage.getItem('ContactDesignationDDL'));

    var _ContactCountryDDL = JSON.parse(localStorage.getItem('GetAllCountriesObj'));

    //Bind Designation....
    if (_ContactDesignationDDL == null) {
        getSeedDesignationList();
    }
    else {
        LoadContactDesignationList();
    }

    //    //Bind Country...
    if (_ContactCountryDDL == null) {
        GetSeedCountryList();
    }
    else {
        LoadContactCountriesList();
    }
}

var swiperNestedContactActivities;
var swiperNestedContactTasks;
var swiperNestedContactComments;
var swiperNestedContactDashbord;
var swiperParent;

function LoadContactDetailSlider() {


    swiperParent = new Swiper('.swiper-parent', {
        paginationClickable: true,
        onSlideChangeStart: function () {
            var dots = [".detail_nav1", ".detail_nav2", ".detail_nav3", ".detail_nav1_1", ".detail_nav1_2"];
            //  alert(swiperParent.activeIndex);

            if (swiperParent.activeIndex == 3 || swiperParent.activeIndex == 6 || swiperParent.activeIndex == 9) {
                var color1 = $(dots[swiperParent.activeIndex - 1]).css("background-color");

                if (color1 != 'rgba(0, 0, 0, 0)') {
                    mySwiper.swipeNext();
                }
            }
            else if (swiperParent.activeIndex == 2 || swiperParent.activeIndex == 5) {
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
            //            var headingText = $(SetBgColorToDiv).text();
            //            $('.hedmid').text(headingText);

        },
        slidesPerView: 1
    })


    var swiperNestedContactDetail = new Swiper('.swiper-nested-ContactDetail', {
        mode: 'vertical',

        paginationClickable: true,
        slidesPerView: 'auto',
        watchActiveIndex: true,
        onTouchStart: function () {
            holdPosition = 0;
        },
        onResistanceBefore: function (s, pos) {
            holdPosition = pos;
        },
        onTouchEnd: function () {
            if (holdPosition > 100) {

                swiperNestedContactDetail.setWrapperTranslate(0, 0, 0)


                swiperNestedContactDetail.params.onlyExternal = false
            }
        }
    })

    swiperNestedContactActivities = new Swiper('.swiper-nested-ContactActivities', {
        mode: 'vertical',

        paginationClickable: true,
        slidesPerView: 'auto',
        calculateHeight: true,
        cssWidthAndHeight: true,
        watchActiveIndex: true,
        onTouchStart: function () {
            holdPosition = 0;
        },
        onResistanceBefore: function (s, pos) {
            holdPosition = pos;
        },
        onTouchEnd: function () {
            if (holdPosition > 100) {

                swiperNestedContactActivities.setWrapperTranslate(0, 0, 0)


                swiperNestedContactActivities.params.onlyExternal = false
            }
        }
    })

    swiperNestedContactTasks = new Swiper('.swiper-nested-ContactTasks', {
        mode: 'vertical',

        paginationClickable: true,
        slidesPerView: 'auto',
        watchActiveIndex: true,
        calculateHeight: true,
        cssWidthAndHeight: true,
        onTouchStart: function () {
            holdPosition = 0;
        },
        onResistanceBefore: function (s, pos) {
            holdPosition = pos;
        },
        onTouchEnd: function () {
            if (holdPosition > 100) {

                swiperNestedContactTasks.setWrapperTranslate(0, 0, 0)


                swiperNestedContactTasks.params.onlyExternal = false
            }
        }
    })

    swiperNestedContactComments = new Swiper('.swiper-nested-ContactComments', {
        mode: 'vertical',

        paginationClickable: true,
        slidesPerView: 'auto',
        watchActiveIndex: true,
        calculateHeight: true,
        cssWidthAndHeight: true,
        onTouchStart: function () {
            holdPosition = 0;
        },
        onResistanceBefore: function (s, pos) {
            holdPosition = pos;
        },
        onTouchEnd: function () {
            if (holdPosition > 100) {

                swiperNestedContactComments.setWrapperTranslate(0, 0, 0)


                swiperNestedContactComments.params.onlyExternal = false
            }
        }
    })

    swiperNestedContactAppointments = new Swiper('.swiper-nested-ContactAppointments', {
        mode: 'vertical',

        paginationClickable: true,
        slidesPerView: 'auto',
        watchActiveIndex: true,
        calculateHeight: true,
        cssWidthAndHeight: true,
        onTouchStart: function () {
            holdPosition = 0;
        },
        onResistanceBefore: function (s, pos) {
            holdPosition = pos;
        },
        onTouchEnd: function () {
            if (holdPosition > 100) {

                swiperNestedContactAppointments.setWrapperTranslate(0, 0, 0)


                swiperNestedContactAppointments.params.onlyExternal = false
            }
        }
    })
    swiperNestedContactDashbord = new Swiper('.swiper-nested-ContactDashbord', {
        mode: 'vertical',

        paginationClickable: true,
        slidesPerView: 'auto',
        watchActiveIndex: true,
        onTouchStart: function () {
            holdPosition = 0;
        },
        onResistanceBefore: function (s, pos) {
            holdPosition = pos;
        },
        onTouchEnd: function () {
            if (holdPosition > 100) {

                swiperNestedContactDashbord.setWrapperTranslate(0, 0, 0)


                swiperNestedContactDashbord.params.onlyExternal = false
            }
        }
    })

}


function deleteContact() {
    try {
        var divLoading = document.getElementById('divLoading');
        if (divLoading != null) {
            document.getElementById('divLoading').style.display = 'block';
        }
        var MethodName = "/DeleteContact";

        var user = JSON.parse(localStorage.getItem('LoggedUserDetails'));

        var _MobileCredential = MobileCredential;
        _MobileCredential.MobileAppKeyId = user.MobileAppKeyId;

        var ContactObject = JSON.parse(localStorage.getItem('ContactObject'));

        var Data = { contactId: ContactObject.ContactId, UserId: user.UserId, Credential: _MobileCredential };

        GetResultFromService(MethodName, Data);
        var RedirectTo = JSON.parse(localStorage.getItem('RedirectTo'));
        if (RedirectTo == null) {
            localStorage.removeItem('RedirectTo');
            localStorage.setItem('RedirectTo', JSON.stringify({
                RedirectTo: '../Contacts/contactlist.html'
            }));
        }
    } catch (exception) { }

}

function DeleteContactResult(result) {
    try {
        if (result != null) {

            if (result.d > 0) {
                localStorage.removeItem('Contactdeleted');
                localStorage.setItem('Contactdeleted', JSON.stringify({
                    Contactdeleted: 'Contactdeleted'
                }));
                var divLoading = document.getElementById('divLoading');
                if (divLoading != null) {
                    document.getElementById('divLoading').style.display = 'none';
                }
                RedirectToPage();
            }
        }
    } catch (exception) { }
}

function LoadAccount() {
    try {

        var SaleswahCrmlitePageURL = JSON.parse(localStorage.getItem('SaleswahCrmlitePageURL'));
        if (SaleswahCrmlitePageURL != null) {
            if (SaleswahCrmlitePageURL.URL == 'account_detail_html') {
                localStorage.removeItem('SaleswahCrmlitePageURL');
                var AccountObject = JSON.parse(localStorage.getItem('AccountObject'));

                localStorage.removeItem('GetAccountByNameObject');
                localStorage.setItem('GetAccountByNameObject', JSON.stringify({
                    Result: AccountObject
                }));

                $('#AddNewContactDetailstxtAccountName').val(AccountObject.AccountName);
                $("#AddNewContactDetailstxtCity").val(AccountObject.City);
                $("#AddNewContactDetailstxtState").val(AccountObject.State);

                $('#AddNewContactDetailstxtAccountName').attr('readonly', 'true');
                $("#AddNewContactDetailstxtCity").attr('readonly', true);
                $("#AddNewContactDetailstxtState").attr('readonly', true);


            }
        }

    }
    catch (e) { }
}
function LoadIncompleteContactObject() {
    var ContactObject = JSON.parse(localStorage.getItem('ContactObject'));
    if (ContactObject != null) {
        if (ContactObject.AccountId == 0) {
            $('#AddNewContactDetailstxtFirstName').val(ContactObject.FirstName);
            $("#AddNewContactDetailstxtLastName").val(ContactObject.LastName);
            $("#AddNewContactDetailstxtEmail").val(ContactObject.Email);
            $("#AddNewContactDetailstxtMobile").val(ContactObject.MobileNumber);
            $("#ContactDetailstxtDesignation").val(ContactObject.DesignationName);
            $("#AddNewContactDetailstxtAccountName").val(ContactObject.AccountName);
            $("#AddNewContactDetailstxtCity").val(ContactObject.City);
            $("#AddNewContactDetailstxtState").val(ContactObject.State);
        }
        else {
            localStorage.removeItem('ContactObject');
        }
    }
}

var AddNewContactDetailsImgAccountNameClick = document.getElementById('AddNewContactDetailsImgAccountNameClick');
if (AddNewContactDetailsImgAccountNameClick != null) {

    $("#AddNewContactDetailsImgAccountNameClick").on("click", function () {

        document.getElementById('divLoading').style.display = 'block';

        var MethodName = "/GetActiveAccounts";
        var user = JSON.parse(localStorage.getItem('LoggedUserDetails'));
        var _MobileCredential = MobileCredential;
        _MobileCredential.MobileAppKeyId = user.MobileAppKeyId;
        var Data = { userId: user.UserId, filter: $("#AddNewContactDetailstxtAccountName").val(), Credential: _MobileCredential };
        GetResultFromService(MethodName, Data);

    });

}

//function respConfirm() {
//    var LoadLabelsByLanguage = JSON.parse(localStorage.getItem('LoadLabelsByLanguage'));
//    var response = confirm(LoadLabelsByLanguage.ContactDeleteConfirmMessage);
//    // OR var response = window.confirm('Confirm Test: Continue?');

//    if (response)
//    { deleteContact(); }
//    else { }
//}
function respConfirm() {

    var LoadLabelsByLanguage = JSON.parse(localStorage.getItem('LoadLabelsByLanguage'));
    navigator.notification.confirm(
            LoadLabelsByLanguage.ContactDeleteConfirmMessage, // message
             onConfirm,            // callback to invoke with index of button pressed
            LoadLabelsByLanguage.DeleteContactPopUpTitle,           // title
            ['Ok', 'Cancel']         // buttonLabels
        );
}
function onConfirm(buttonIndex) {
    if (buttonIndex == 1) {
        deleteContact();
    }
}
