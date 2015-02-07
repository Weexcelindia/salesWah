var ApplicationPageSize = JSON.parse(localStorage.getItem('ApplicationPageSize'));
var AccountPageSize = ApplicationPageSize.PageSize;

var LoadLabelsByLanguage = JSON.parse(localStorage.getItem('LoadLabelsByLanguage'));


function LoadlabelsOfAccount() {


    //AccountListHeaderLabelAccountList
    var AccountListHeaderLabelAccountList = document.getElementById('AccountListHeaderLabelAccountList');
    if (AccountListHeaderLabelAccountList != null) {
        AccountListHeaderLabelAccountList.innerHTML = LoadLabelsByLanguage.AllAccount;
    }

    var AccountDetailsLabelAccountName = document.getElementById('AccountDetailsLabelAccountName');
    if (AccountDetailsLabelAccountName != null) {
        AccountDetailsLabelAccountName.innerHTML = LoadLabelsByLanguage.AccountName;
    }
    //AccountHeaderLabel
    var AccountHeaderLabel = document.getElementById('AccountHeaderLabel');
    if (AccountHeaderLabel != null) {
        AccountHeaderLabel.innerHTML = LoadLabelsByLanguage.AllAccount;
    }
    var AccountDetailsLabelAddress1 = document.getElementById('AccountDetailsLabelAddress1');
    if (AccountDetailsLabelAddress1 != null) {
        AccountDetailsLabelAddress1.innerHTML = LoadLabelsByLanguage.Address1;
    }

    var AccountDetailsLabelAddress2 = document.getElementById('AccountDetailsLabelAddress2');
    if (AccountDetailsLabelAddress2 != null) {
        AccountDetailsLabelAddress2.innerHTML = LoadLabelsByLanguage.Address2;
    }

    var AccountDetailsLabelCity = document.getElementById('AccountDetailsLabelCity');
    if (AccountDetailsLabelCity != null) {
        AccountDetailsLabelCity.innerHTML = LoadLabelsByLanguage.City;
    }

    var AccountDetailsLabelState = document.getElementById('AccountDetailsLabelState');
    if (AccountDetailsLabelState != null) {
        AccountDetailsLabelState.innerHTML = LoadLabelsByLanguage.State;
    }

    var AccountDetailsLabelCountry = document.getElementById('AccountDetailsLabelCountry');
    if (AccountDetailsLabelCountry != null) {
        AccountDetailsLabelCountry.innerHTML = LoadLabelsByLanguage.Country;
    }

    var AccountDetailsLabelPostalCode = document.getElementById('AccountDetailsLabelPostalCode');
    if (AccountDetailsLabelPostalCode != null) {
        AccountDetailsLabelPostalCode.innerHTML = LoadLabelsByLanguage.PostalCode;
    }

    var AccountDetailsLabelWebSite = document.getElementById('AccountDetailsLabelWebSite');
    if (AccountDetailsLabelWebSite != null) {
        AccountDetailsLabelWebSite.innerHTML = LoadLabelsByLanguage.Website;
    }

    var AccountDetailsLabelIndustry = document.getElementById('AccountDetailsLabelIndustry');
    if (AccountDetailsLabelIndustry != null) {
        AccountDetailsLabelIndustry.innerHTML = LoadLabelsByLanguage.Industry;
    }

    var AccountDetailsLabelComments = document.getElementById('AccountDetailsLabelComments');
    if (AccountDetailsLabelComments != null) {
        AccountDetailsLabelComments.innerHTML = LoadLabelsByLanguage.Comments;
    }

    var AccountDetailHeaderLabelDetail = document.getElementById('AccountDetailHeaderLabelDetail')
    if (AccountDetailHeaderLabelDetail != null) {
        AccountDetailHeaderLabelDetail.innerHTML = LoadLabelsByLanguage.Detail;
    }

    var AccountDetailHeaderLabelDashBoard = document.getElementById('AccountDetailHeaderLabelDashBoard')
    if (AccountDetailHeaderLabelDashBoard != null) {
        AccountDetailHeaderLabelDashBoard.innerHTML = LoadLabelsByLanguage.Dashboard;
    }

    var AccountDetailHeaderLabelContact = document.getElementById('AccountDetailHeaderLabelContact')
    if (AccountDetailHeaderLabelContact != null) {
        AccountDetailHeaderLabelContact.innerHTML = LoadLabelsByLanguage.Contacts;
    }

    var AccountDetailHeaderLabelComments = document.getElementById('AccountDetailHeaderLabelComments')
    if (AccountDetailHeaderLabelComments != null) {
        AccountDetailHeaderLabelComments.innerHTML = LoadLabelsByLanguage.Comments;
    }

    //AccountDetailsLabel
    var AccountDetailHeaderLabelAccountDetail = document.getElementById('AccountDetailHeaderLabelAccountDetail');
    if (AccountDetailHeaderLabelAccountDetail != null) {
        AccountDetailHeaderLabelAccountDetail.innerHTML = LoadLabelsByLanguage.Detail;
    }

    //    //AccountDetailsLabel
    //    var AccountDetailsLabel = document.getElementById('AccountDetailsLabel');
    //    if (AccountDetailsLabel != null) {
    //        AccountDetailsLabel.innerHTML = LoadLabelsByLanguage.Detail;
    //    }
    //AccountDetailHeaderLabelDetail
    var AccountDetailHeaderLabelDetail = document.getElementById('AccountDetailHeaderLabelDetail');
    if (AccountDetailHeaderLabelDetail != null) {
        AccountDetailHeaderLabelDetail.innerHTML = LoadLabelsByLanguage.Detail;
    }

    var AccountDetailHeaderLabelDashBoard = document.getElementById('AccountDetailHeaderLabelDashBoard');
    if (AccountDetailHeaderLabelDashBoard != null) {
        AccountDetailHeaderLabelDashBoard.innerHTML = LoadLabelsByLanguage.Dashboard;
    }
    var AccountDetailHeaderLabelDecisionMaker = document.getElementById('AccountDetailHeaderLabelDecisionMaker');
    if (AccountDetailHeaderLabelDecisionMaker != null) {
        AccountDetailHeaderLabelDecisionMaker.innerHTML = LoadLabelsByLanguage.DealHeaderLabelDecisionmaker;
    }
    var AccountDetailHeaderLabelMessage = document.getElementById('AccountDetailHeaderLabelMessage');
    if (AccountDetailHeaderLabelMessage != null) {
        AccountDetailHeaderLabelMessage.innerHTML = LoadLabelsByLanguage.Message;
    }
    var AccountDetailsLabelAccountName = document.getElementById('AccountDetailsLabelAccountName');
    if (AccountDetailsLabelAccountName != null) {
        AccountDetailsLabelAccountName.innerHTML = LoadLabelsByLanguage.AccountName;
    }
    var AccountDetailsLabelForecastDate = document.getElementById('AccountDetailsLabelForecastDate');
    if (AccountDetailsLabelForecastDate != null) {
        AccountDetailsLabelForecastDate.innerHTML = LoadLabelsByLanguage.Forecast;
    }
    var AccountDetailsLabelChance = document.getElementById('AccountDetailsLabelChance');
    if (AccountDetailsLabelChance != null) {
        AccountDetailsLabelChance.innerHTML = LoadLabelsByLanguage.Chance;
    }
    var AccountDetailsLabelProductCategory = document.getElementById('AccountDetailsLabelProductCategory');
    if (AccountDetailsLabelProductCategory != null) {
        AccountDetailsLabelProductCategory.innerHTML = LoadLabelsByLanguage.ProductCategory;
    }
    var AccountDetailsLabelBudgetValue = document.getElementById('AccountDetailsLabelBudgetValue');
    if (AccountDetailsLabelBudgetValue != null) {
        AccountDetailsLabelBudgetValue.innerHTML = LoadLabelsByLanguage.BudgetValue;
    }
    var AccountDetailsLabelBudgetStage = document.getElementById('AccountDetailsLabelBudgetStage');
    if (AccountDetailsLabelBudgetStage != null) {
        AccountDetailsLabelBudgetStage.innerHTML = LoadLabelsByLanguage.BudgetStage;
    }
    var AccountDetailsLabelSolutionPresented = document.getElementById('AccountDetailsLabelSolutionPresented');
    if (AccountDetailsLabelSolutionPresented != null) {
        AccountDetailsLabelSolutionPresented.innerHTML = LoadLabelsByLanguage.SolutionPresented;
    }
    var AccountDetailsLabelComments = document.getElementById('AccountDetailsLabelComments');
    if (AccountDetailsLabelComments != null) {
        AccountDetailsLabelComments.innerHTML = LoadLabelsByLanguage.Comments;
    }

    ///////////////////////////////////desboard section start////////////////////////

    //AccountDetailDesbordlabelPendingtask
    var AccountDetailDesbordlabelPendingtask = document.getElementById('AccountDetailDesbordlabelPendingtask');
    if (AccountDetailDesbordlabelPendingtask != null)
        AccountDetailDesbordlabelPendingtask.innerHTML = LoadLabelsByLanguage.PendingTask;

    //AccountDetailDesbordlabelLivedeals
    var AccountDetailDesbordlabelLivedeals = document.getElementById('AccountDetailDesbordlabelLivedeals');
    if (AccountDetailDesbordlabelLivedeals != null)
        AccountDetailDesbordlabelLivedeals.innerHTML = LoadLabelsByLanguage.LiveDeals;

    //AccountDetailDesbordlabelWondeals
    var AccountDetailDesbordlabelWondeals = document.getElementById('AccountDetailDesbordlabelWondeals');
    if (AccountDetailDesbordlabelWondeals != null)
        AccountDetailDesbordlabelWondeals.innerHTML = LoadLabelsByLanguage.WonDeals;

    //AccountDetailDesbordlabelLostdeals
    var AccountDetailDesbordlabelLostdeals = document.getElementById('AccountDetailDesbordlabelLostdeals');
    if (AccountDetailDesbordlabelLostdeals != null)
        AccountDetailDesbordlabelLostdeals.innerHTML = LoadLabelsByLanguage.LostDeals;

    //AccountDetailDesbordlabelProposalNumber
    var AccountDetailDesbordlabelProposalNumber = document.getElementById('AccountDetailDesbordlabelProposalNumber');
    if (AccountDetailDesbordlabelProposalNumber != null)
        AccountDetailDesbordlabelProposalNumber.innerHTML = LoadLabelsByLanguage.ProposalNumber;

    //AccountDetailDesbordlabelQuotsNumber
    var AccountDetailDesbordlabelQuotsNumber = document.getElementById('AccountDetailDesbordlabelQuotsNumber');
    if (AccountDetailDesbordlabelQuotsNumber != null)
        AccountDetailDesbordlabelQuotsNumber.innerHTML = LoadLabelsByLanguage.QuotsNumber;

    ///////////////////////////////////desboard section End////////////////////////

}
/////////////////////////////////////////////////AccountList//////////////////////////////////////

//////////////////////////////////////////////CheckIfLinkComeFromContactPage///////////////////////////////////////////////////
function CheckIfLinkComeFromContactPage() {

    var AccountObject = JSON.parse(localStorage.getItem('AccountObject'));

    if (AccountObject != null) {
        if (AccountObject.ContactAccountId != null) {
            try {
                var MethodName = "/GetAccountById";
                var user = JSON.parse(localStorage.getItem('LoggedUserDetails'));
                var _MobileCredential = MobileCredential;
                _MobileCredential.MobileAppKeyId = user.MobileAppKeyId;

                var Data = { accountId: AccountObject.ContactAccountId, Credential: _MobileCredential };
                GetResultFromService(MethodName, Data);
            } catch (exception) { }
        }
        else {

            SetAccountDetailObject();



        }
    }
}

function GetAccountByIdResult(result) {

    var _AccountDetailObj = { AccountName: result.d.AccountName, Address1: result.d.MainAddress.AddressLine1, Address2: result.d.MainAddress.AddressLine2, City: result.d.MainAddress.City, State: result.d.MainAddress.State, Country: result.d.MainAddress.Country, PostalCode: result.d.MainAddress.PostalCode, WebsiteURL: result.d.WebsiteURL, IndustryId: result.d.IndustryId, AccountId: result.d.AccountId, MainAddressId: result.d.MainAddress.Id };
    GETAccountObject(_AccountDetailObj);
    SetAccountDetailObject();
    //LoadAccountContact();

}
/////////////////////////////////////////////////////////////////////////////////////////////////
//getAccountList
function getAccountList(PageIndex) {
    document.getElementById('divLoading').style.display = 'block';
    var MethodName = "/GetAccountList";
    var user = JSON.parse(localStorage.getItem('LoggedUserDetails'));
    var _MobileCredential = MobileCredential;
    _MobileCredential.MobileAppKeyId = user.MobileAppKeyId;

    var Data = { pageIndex: PageIndex, pageSize: AccountPageSize, filterPattern: $.trim(AccountListtxtSearch.value), orderByClause: "AccountName", userId: user.UserId, order: "Asc", Credential: _MobileCredential };
    GetResultFromService(MethodName, Data);
}
function LoadAccountListResult(result) {
    try {

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

        if (swiperNestedAccountList == null) {

            if (result.d.length == 0) {
                $("#AccountListUlDetails").append("<div class='swiper-slide '><div class='dlist'> <ul><li><a href='#' ><h4>  No Record Found </h4></a></li></ul></div></div>");

            }
        }

        var AccountListtxtSearch = document.getElementById('AccountListtxtSearch');
        if (AccountListtxtSearch != null) {
            var search = $.trim(AccountListtxtSearch.value)
            if (search.length > 0) {
                if (swiperNestedAccountList != null) {
                    if (pageIndexAccountList == 1) {
                        swiperNestedAccountList.removeAllSlides();
                        $("#AccountListUlDetails").empty();
                    }
                    if (swiperNestedAccountList.slides.length == 0 && result.d.length == 0) {
                        $("#AccountListUlDetails").append("<div class='swiper-slide '><div class='dlist'> <ul><li><a href='#' ><h4>  No Record Found </h4></a></li></ul></div></div>");
                        swiperNestedAccountList.reInit();
                    }
                }
            }
        }

        if (result.d.length > 0) {
            for (var i = 0; i < result.d.length; i++) {
              var ReplacedAccountName = result.d[i].AccountName.replace(/'/g, "\\'");
              var ReplacedMainAddressAddressLine1 = result.d[i].MainAddress.AddressLine1.replace(/'/g, "\\'");
              var ReplacedMainAddressAddressLine2 = result.d[i].MainAddress.AddressLine2.replace(/'/g, "\\'");
              var ReplacedMainAddressCity = result.d[i].MainAddress.City.replace(/'/g, "\\'");
              var ReplacedMainAddressState = result.d[i].MainAddress.State.replace(/'/g, "\\'");
              var ReplacedMainAddressCountry = result.d[i].MainAddress.Country.replace(/'/g, "\\'");
              var ReplacedMainAddressPostalCode = result.d[i].MainAddress.PostalCode.replace(/'/g, "\\'");
              var ReplacedWebsiteURL = result.d[i].WebsiteURL.replace(/'/g, "\\'");
                //alert(JSON.stringify( result.d[i])) //result.d[i].MainAddress.AddressLine1);
              var _AccountDetailObj = "{'AccountName':'" + ReplacedAccountName + "', 'Address1':'" + ReplacedMainAddressAddressLine1 + "','Address2':'" + ReplacedMainAddressAddressLine2 + "','City':'" + ReplacedMainAddressCity + "','State':'" + ReplacedMainAddressState + "','Country':'" + ReplacedMainAddressCountry + "','PostalCode':'" + ReplacedMainAddressPostalCode + "','WebsiteURL':'" + ReplacedWebsiteURL + "','IndustryId':'" + result.d[i].IndustryId + "','AccountId':'" + result.d[i].AccountId + "','MainAddressId':'" + result.d[i].MainAddress.Id + "'}";

                $("#AccountListUlDetails").append("<div class='swiper-slide'><div class='dlist'><ul><li> <a href='detail.html' onclick=\"GETAccountObject(" + _AccountDetailObj + ")\"><h4>" + result.d[i].AccountName + "</h4><p>" + result.d[i].CityOrState + "</p></a></li></ul></div></div>");
                if (swiperNestedAccountList != null) {
                    swiperNestedAccountList.reInit();
                }
            }
        }
        if (swiperNestedAccountList == null) {
            LoadAccountSlider();
        }
        document.getElementById('divLoading').style.display = 'none';
    } catch (exception) { }
}

//On dealListtxtSearch
var AccountListtxtSearch = document.getElementById('AccountListtxtSearch');
if (AccountListtxtSearch != null) {
    $("#AccountListtxtSearch").keyup(function (e) {
        if (e.keyCode == 13) {
            try {
                document.getElementById('divLoading').style.display = 'block';
                pageIndexAccountList = 1;
                swiperNestedAccountList.setWrapperTranslate(0, 0, 0)
                swiperNestedAccountList.removeAllSlides();
                var MethodName = "/GetAccountList";
                var user = JSON.parse(localStorage.getItem('LoggedUserDetails'));
                var _MobileCredential = MobileCredential;
                _MobileCredential.MobileAppKeyId = user.MobileAppKeyId;

                var Data = { pageIndex: 1, pageSize: AccountPageSize, filterPattern: $.trim(AccountListtxtSearch.value), orderByClause: "AccountName", userId: user.UserId, order: "Asc", Credential: _MobileCredential };
                GetResultFromService(MethodName, Data);
            } catch (exception) { }
        }

    });

    $("#ImgAccountListSearch").click(function () {
        try {
            document.getElementById('divLoading').style.display = 'block';
            pageIndexAccountList = 1;
            swiperNestedAccountList.setWrapperTranslate(0, 0, 0)
            swiperNestedAccountList.removeAllSlides();

            var MethodName = "/GetAccountList";
            var user = JSON.parse(localStorage.getItem('LoggedUserDetails'));
            var _MobileCredential = MobileCredential;
            _MobileCredential.MobileAppKeyId = user.MobileAppKeyId;

            var Data = { pageIndex: 1, pageSize: AccountPageSize, filterPattern: $.trim(AccountListtxtSearch.value), orderByClause: "AccountName", userId: user.UserId, order: "Asc", Credential: _MobileCredential };
            GetResultFromService(MethodName, Data);

        } catch (exception) { }

    });

}
/////////////////////////////////////////////AccountList End//////////////////////////////////

////////////////////////////////////////////Load DropDowns////////////////////////////////////

function BindDDL() {

    var _AccountIndustries = JSON.parse(localStorage.getItem('IndustryDDL'));

    var _AccountCountryDDL = JSON.parse(localStorage.getItem('GetAllCountriesObj'));

    //Bind Industries....
    if (_AccountIndustries == null) {
        GetAllIndustries();

    }
    else {
        LoadIndustryList();
    }

    //    //Bind Country...
    if (_AccountCountryDDL == null) {
        GetSeedCountryList();

    }
    else {
        LoadContactCountriesList();
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
        LoadContactCountriesList();
    }
    catch (exception) { }
}

function LoadContactCountriesList() {
    try {

        var AccountDetailsddlCountry = document.getElementById('AccountDetailsddlCountry');

        var AccountDetailsCountryDDL = JSON.parse(localStorage.getItem('GetAllCountriesObj'));

        $("#AccountDetailsddlCountry").empty();

        var option1 = document.createElement("option");
        option1.text = "--None--";
        option1.value = -1;
        AccountDetailsddlCountry.add(option1, null);

        if (AccountDetailsCountryDDL.Result.d.length > 0) {
            for (var i = 0; i < AccountDetailsCountryDDL.Result.d.length; i++) {
                var option = document.createElement("option");
                option.text = AccountDetailsCountryDDL.Result.d[i].value;
                option.value = AccountDetailsCountryDDL.Result.d[i].key;
                AccountDetailsddlCountry.add(option, null);
            }
        }

        var AccountObject = JSON.parse(localStorage.getItem('AccountObject'));
        var SetValue;
        if (AccountObject != null) {
            SetValue = AccountObject.Country;
        }
        else if (AccountObject == null) {
            var LoggedUserDetails = JSON.parse(localStorage.getItem('LoggedUserDetails'));
            SetValue = LoggedUserDetails.AdminCountryName;
        }
        var AccountDetailsddlCountry = document.getElementById('AccountDetailsddlCountry');
        for (var i = 0; i < AccountDetailsddlCountry.options.length; i++) {
            if (AccountDetailsddlCountry.options[i].text == SetValue) {
                AccountDetailsddlCountry.selectedIndex = i;
                break;
            }
        }

        // $("#AccountDetailsddlCountry option:selected").text(SetValue);

    } catch (exception) { }
}

function GetAllIndustries() {
    try {
        var MethodName = "/GetAllIndustries";

        var user = JSON.parse(localStorage.getItem('LoggedUserDetails'));

        var _MobileCredential = MobileCredential;
        _MobileCredential.MobileAppKeyId = user.MobileAppKeyId;

        var Data = { Credential: _MobileCredential };

        GetResultFromService(MethodName, Data);
    } catch (exception) { }
}

function SetGetAllIndustriesResult(result) {

    try {
        localStorage.removeItem('IndustryDDL');
        localStorage.setItem('IndustryDDL', JSON.stringify({
            Result: result
        }));
        LoadIndustryList();
    }
    catch (exception) { }
}

function LoadIndustryList() {
    try {

        var AccountDetailsddlIndustry = document.getElementById('AccountDetailsddlIndustry');

        var IndustryDDL = JSON.parse(localStorage.getItem('IndustryDDL'));

        $("#AccountDetailsddlIndustry").empty();
        var option1 = document.createElement("option");
        option1.text = "--None--";
        option1.value = -1;
        AccountDetailsddlIndustry.add(option1, null);
        if (IndustryDDL.Result.d.length > 0) {
            for (var i = 0; i < IndustryDDL.Result.d.length; i++) {
                var option = document.createElement("option");
                option.text = IndustryDDL.Result.d[i].value;
                option.value = IndustryDDL.Result.d[i].key;
                AccountDetailsddlIndustry.add(option, null);
            }

            var AccountObject = JSON.parse(localStorage.getItem('AccountObject'));
            var SetValue = 0;
            if (AccountObject != null)
                SetValue = AccountObject.IndustryId;
            if (SetValue == '' || SetValue == '0')
                SetValue = -1;
            $("#AccountDetailsddlIndustry").val(SetValue);
        }
    } catch (exception) { }
}
///////////////////////////////////////////////////Load dropdown list end/////////////////////////






function GETAccountObject(Obj) {

    localStorage.removeItem('AccountObject');
    localStorage.setItem('AccountObject', JSON.stringify({
        AccountName: Obj.AccountName,
        Address1: Obj.Address1,
        Address2: Obj.Address2,
        City: Obj.City,
        State: Obj.State,
        Country: Obj.Country,
        PostalCode: Obj.PostalCode,
        WebsiteURL: Obj.WebsiteURL,
        IndustryId: Obj.IndustryId,
        AccountId: Obj.AccountId,
        MainAddressId: Obj.MainAddressId
    }));
}

////////////////////////////////////AccountDetail/////////////////////////////

function SetAccountDetailObject() {
    try {
      
     
        var AccountObject = JSON.parse(localStorage.getItem('AccountObject'));
        if (AccountObject.ContactAccountId == null) {

            var AccountSaveSuccessfully = JSON.parse(localStorage.getItem('AccountSaveSuccessfully'));
            if (AccountSaveSuccessfully != null) {
                if (AccountSaveSuccessfully.AccountSaveSuccessfully == 'AccountSaveSuccessfully') {
                    localStorage.removeItem('AccountSaveSuccessfully');
                    ShowMessage(LoadLabelsByLanguage.AccountSaveSuccessfully);
                }
            }

            //AccountDetailsLabel
            var AccountDetailsLabel = document.getElementById('AccountDetailsLabel');
            if (AccountDetailsLabel != null) {
                // AccountDetailsLabel.innerHTML = AccountObject.AccountName;
                if (AccountObject.AccountName.length > 30) {
                    AccountDetailsLabel.innerHTML = AccountObject.AccountName.substring(0, 30) + '...';
                }
                else {
                    AccountDetailsLabel.innerHTML = AccountObject.AccountName;

                }
            }

            //AccountDetailstxtAccountName
            var AccountDetailstxtAccountName = document.getElementById('AccountDetailstxtAccountName');
            AccountDetailstxtAccountName.value = AccountObject.AccountName;

            //AccountDetailstxtAddress1
            var AccountDetailstxtAddress1 = document.getElementById('AccountDetailstxtAddress1');
            AccountDetailstxtAddress1.value = AccountObject.Address1;

            //AccountDetailstxtAddress2
            var AccountDetailstxtAddress2 = document.getElementById('AccountDetailstxtAddress2');
            AccountDetailstxtAddress2.value = AccountObject.Address2;

            //AccountDetailstxtCity
            var AccountDetailstxtCity = document.getElementById('AccountDetailstxtCity');
            AccountDetailstxtCity.value = AccountObject.City;

            //AccountDetailstxtState
            var AccountDetailstxtState = document.getElementById('AccountDetailstxtState');
            AccountDetailstxtState.value = AccountObject.State;


            //AccountDetailstxtCountry
            if (AccountObject.Country != '')
                $("#AccountDetailsddlCountry option:selected").text(AccountObject.Country);

            //AccountDetailsddlIndustry
            $("#AccountDetailsddlIndustry").val(AccountObject.IndustryId);

            //AccountDetailstxtPostalCode
            var AccountDetailstxtPostalCode = document.getElementById('AccountDetailstxtPostalCode');
            AccountDetailstxtPostalCode.value = AccountObject.PostalCode;

            //AccountDetailstxtWebSite
            var AccountDetailstxtWebSite = document.getElementById('AccountDetailstxtWebSite');
            AccountDetailstxtWebSite.value = AccountObject.WebsiteURL;
        }

        GetAccountDashBoard();

        LoadAccountDetailSlider();


        var FromContactAccountWillSwipeTo = JSON.parse(localStorage.getItem('FromContactAccountWillSwipeTo'));
        if (FromContactAccountWillSwipeTo != null) {
            localStorage.removeItem('FromContactAccountWillSwipeTo');
            swiperParent.swipeTo(FromContactAccountWillSwipeTo.Number);
            var ContactSaveSuccessfully = JSON.parse(localStorage.getItem('ContactSaveSuccessfully'));
            if (ContactSaveSuccessfully != null) {
                if (ContactSaveSuccessfully.ContactSaveSuccessfully == 'ContactSaveSuccessfully') {
                    localStorage.removeItem('ContactSaveSuccessfully');
                    ShowMessage(LoadLabelsByLanguage.ContactSaveSuccessfully);
                }
            }
        }

    } catch (exception) { }
}
//**************AccountDetail Over*******************

//Load Account contact...
function LoadAccountContact() {
    try {

        var MethodName = "/GetAllContactsForAccounts";
        var user = JSON.parse(localStorage.getItem('LoggedUserDetails'));
        var _MobileCredential = MobileCredential;
        _MobileCredential.MobileAppKeyId = user.MobileAppKeyId;

        var AccountObject = JSON.parse(localStorage.getItem('AccountObject'));

        var Data = { AccountId: AccountObject.AccountId, Credential: _MobileCredential };
        GetResultFromService(MethodName, Data);
    } catch (exception) { }
}

function GetAccountDashBoard() {
    try {

        var MethodName = "/GetCRMAccountDashboardById";
        var user = JSON.parse(localStorage.getItem('LoggedUserDetails'));
        var _MobileCredential = MobileCredential;
        _MobileCredential.MobileAppKeyId = user.MobileAppKeyId;

        var AccountObject = JSON.parse(localStorage.getItem('AccountObject'));

        var Data = { accountId: AccountObject.AccountId, Credential: _MobileCredential };
        GetResultFromService(MethodName, Data);
    } catch (exception) { }
}

function GetCRMAccountDashboardByIdResult(result) {

    if (result != null) {

        var AccountDetailDesbordtxtPendingtask = document.getElementById('AccountDetailDesbordtxtPendingtask');
        AccountDetailDesbordtxtPendingtask.value = result.d.Task_count;

        var AccountDetailDesbordtxtLivedeals = document.getElementById('AccountDetailDesbordtxtLivedeals');
        AccountDetailDesbordtxtLivedeals.value = result.d.Open_Deals_value;

        var AccountDetailDesbordtxtWondeals = document.getElementById('AccountDetailDesbordtxtWondeals');
        AccountDetailDesbordtxtWondeals.value = result.d.won_Deals_value;

        var AccountDetailDesbordtxtLostdeals = document.getElementById('AccountDetailDesbordtxtLostdeals');
        AccountDetailDesbordtxtLostdeals.value = result.d.Lost_or_cancelledDeals_value;

        var AccountDetailDesbordtxtProposalNumber = document.getElementById('AccountDetailDesbordtxtProposalNumber');
        AccountDetailDesbordtxtProposalNumber.value = result.d.Proposals_sent_count;

        var AccountDetailDesbordtxtQuotsNumber = document.getElementById('AccountDetailDesbordtxtQuotsNumber');
        AccountDetailDesbordtxtQuotsNumber.value = result.d.Quotes_sent_value;

        LoadAccountContact();

    }
}


function GetAllContactsForAccountsResult(result) {
    try {

        var AccountObject = JSON.parse(localStorage.getItem('AccountObject'));

        if (swiperNestedAccountContact.slides.length == 0) {

            if (result.d.length == 0) {
                $("#ContactsAccountUlDetails").append("<div class='swiper-slide '><div class='dlist'> <ul><li><a href='#' ><h4>  No Record Found </h4></a></li></ul></div></div>");
                swiperNestedAccountContact.reInit();
            }
        }
        if (result.d.length > 0) {
            for (var i = 0; i < result.d.length; i++) {
                var ReplacedAccountName = result.d[i].AccountName.replace(/'/g, "\\'");
                var ReplacedFirstName = result.d[i].FirstName.replace(/'/g, "\\'");
                var ReplacedLastName = result.d[i].LastName.replace(/'/g, "\\'");
                var ReplacedFullName = result.d[i].FullName.replace(/'/g, "\\'");
                var ReplacedMainAddressCity = result.d[i].MainAddress.City.replace(/'/g, "\\'");
                var ReplacedMainAddressState = result.d[i].MainAddress.State.replace(/'/g, "\\'");
                var ReplacedMainAddressCountry = result.d[i].MainAddress.Country.replace(/'/g, "\\'");
                var ReplacedEmail = result.d[i].Email.replace(/'/g, "\\'");
                var ReplacedDesignationName = result.d[i].DesignationName.replace(/'/g, "\\'");
                var ReplacedSalutation = result.d[i].Salutation.replace(/'/g, "\\'");
                var ReplacedOfficePhone = result.d[i].OfficePhone.replace(/'/g, "\\'");
                var ReplacedAssistantName = result.d[i].AssistantName.replace(/'/g, "\\'");
                var _AccountContactObj = "{'AccountName':'" + ReplacedAccountName + "','FirstName':'" + ReplacedFirstName + "','FullName':'" + ReplacedFullName + "','LastName':'" + ReplacedLastName + "','Email':'" + ReplacedEmail + "','MobileNumber':'" + result.d[i].MobileNumber + "','DesignationId':'" + result.d[i].DesignationId + "','DesignationName':'" + ReplacedDesignationName + "','City':'" + ReplacedMainAddressCity + "','State':'" + ReplacedMainAddressState + "','Country':'" + ReplacedMainAddressCountry + "','AccountId':'" + AccountObject.AccountId + "','ContactId':'" + result.d[i].Id + "','Salutation':'" + ReplacedSalutation + "','ReportTo':'" + result.d[i].ReportTo + "','OfficePhone':'" + ReplacedOfficePhone + "','Fax':'" + result.d[i].Fax + "','AssistantName':'" + ReplacedAssistantName + "','AssistantPhone':'" + result.d[i].AssistantPhone + "','IsSendEmailEnabled':'" + result.d[i].IsSendEmailEnabled + "'}"
              
                $("#ContactsAccountUlDetails").append("<div class='swiper-slide'><div class='dlist'><ul><li> <a href='../Contacts/detail.html' onclick=\"GETContactObject(" + _AccountContactObj + ")\"><h4>" + result.d[i].FullName + "</h4><p>" + result.d[i].MainAddress.City + "</p><span>" + result.d[i].EmailOrPhone + "</span></a> </li></ul></div></div>");
                if (swiperNestedAccountContact != null) {
                    swiperNestedAccountContact.reInit();
                }
            }
        }
        if (swiperNestedAccountContact == null) {
            LoadAccountSlider();
        }
        LoadAccountComments();
    } catch (exception) { }
}

function ValidateAccountData() {

    var flag = true;
    var errorMsg = "";

    if ($.trim($("#AccountADD_newAccountDetailstxtAccountName").val()) == "") {

        errorMsg = errorMsg + "\n* " + LoadLabelsByLanguage.YoumustfillAccountName + "<br/>";

        flag = false;
    }


    if ($.trim($("#AccountADD_newAccountDetailstxtCity").val()) == '' && $.trim($("#AccountADD_newAccountDetailstxtState").val()) == '') {

        errorMsg = errorMsg + "\n* " + LoadLabelsByLanguage.YoumustfillStateOrCity + "<br/>";

        flag = false;
    }
    if ($('#AccountDetailsddlIndustry option:selected').val() == -1) {

        errorMsg = errorMsg + "\n* " + LoadLabelsByLanguage.PleaseSelectIndustry + "<br/>";

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

    if ($.trim($("#AccountDetailstxtAccountName").val()) == "") {

        errorMsg = errorMsg + "\n* " + LoadLabelsByLanguage.YoumustfillAccountName + "<br/>";

        flag = false;
    }


    if ($.trim($("#AccountDetailstxtCity").val()) == '' && $.trim($("#AccountDetailstxtState").val()) == '') {

        errorMsg = errorMsg + "\n* " + LoadLabelsByLanguage.YoumustfillStateOrCity + "<br/>";

        flag = false;
    }

    if ($('#AccountDetailsddlIndustry option:selected').val() == -1) {

        errorMsg = errorMsg + "\n* " + LoadLabelsByLanguage.PleaseSelectIndustry + "<br/>";

        flag = false;
    }

    if (flag == false) {
        ShowMessage(errorMsg);
    }

    return flag;
}

///////////////////////////////////////////////Add Account/////////////////////////
var AccountAddNewBtnSaveAccount = document.getElementById('AccountAddNewBtnSaveAccount');
if (AccountAddNewBtnSaveAccount != null) {
    AccountAddNewBtnSaveAccount.addEventListener('click', function () {
        SaveNewAccount();
    }, false);
}

var AccountDetailsAccountBtnDeleteAccount = document.getElementById('AccountDetailsAccountBtnDeleteAccount');
if (AccountDetailsAccountBtnDeleteAccount != null) {
    AccountDetailsAccountBtnDeleteAccount.addEventListener('click', function () {
        respConfirm();
    }, false);
}

var AccountDetailsAccountBtnEditSaveAccount = document.getElementById('AccountDetailsAccountBtnEditSaveAccount');
if (AccountDetailsAccountBtnEditSaveAccount != null) {
    AccountDetailsAccountBtnEditSaveAccount.addEventListener('click', function () {

        UpdateAccount();


    }, false);
}
function UpdateAccount() {

    if (ValidateAccountDetailData() == true) {

        var _accountName = $.trim($("#AccountDetailstxtAccountName").val());
        var _address1 = $.trim($("#AccountDetailstxtAddress1").val());
        var _address2 = $.trim($("#AccountDetailstxtAddress2").val());
        var _city = $.trim($("#AccountDetailstxtCity").val());
        var _state = $.trim($("#AccountDetailstxtState").val());
        var _country = $('#AccountDetailsddlCountry option:selected').text();
        var _postalCode = $.trim($("#AccountDetailstxtPostalCode").val());
        var _webSite = $.trim($("#AccountDetailstxtWebSite").val());

        var _industry = $('#AccountDetailsddlIndustry option:selected').val();

        if (_industry == -1)
            _industry = 1;

        var _comments = $.trim($("#AccountDetailstxtComments").val());

        var MethodName = "/UpdateAccount";
        var user = JSON.parse(localStorage.getItem('LoggedUserDetails'));
        var _MobileCredential = MobileCredential;
        _MobileCredential.MobileAppKeyId = user.MobileAppKeyId;

        var AccountObject = JSON.parse(localStorage.getItem('AccountObject'));
        //var _MainAddress = { AddressLine1: "MyAddress", Country: 'India', City: 'Noida', State: 'UP', PostalCode: '' }
        var _MainAddress = { AddressLine1: _address1, AddressLine2: _address2, City: _city, State: _state, Country: _country, PostalCode: _postalCode, Id: AccountObject.MainAddressId }
        var CRMAccount = { AccountId: AccountObject.AccountId, AccountName: _accountName, AccountOwnerId: user.UserId, Site: '', PhoneNumber: '', TypeId: 1, IndustryId: _industry, WebsiteURL: _webSite, MainAddress: _MainAddress, MainAddressID: _MainAddress.Id, ShipmentAddressID: _MainAddress.Id }

        var Data = { Account: CRMAccount, userId: user.UserId, Credential: _MobileCredential };

        if (_comments != '') {
            Data = { Account: CRMAccount, userId: user.UserId, comment: _comments, Credential: _MobileCredential };
            MethodName = "/UpdateCRMAccountWithComment";
        }

        GetResultFromService(MethodName, Data);

        var RedirectTo = JSON.parse(localStorage.getItem('RedirectTo'));
        if (RedirectTo == null) {
            localStorage.removeItem('RedirectTo');
            localStorage.setItem('RedirectTo', JSON.stringify({
                RedirectTo: '../account/AccountList.html'
            }));
        }
    }
}

function SaveNewAccount() {

    if (ValidateAccountData() == true) {
        var _accountName = $.trim($("#AccountADD_newAccountDetailstxtAccountName").val());
        var _address1 = $.trim($("#AccountADD_newAccountDetailstxtAddress1").val());
        var _address2 = $.trim($("#AccountADD_newAccountDetailstxtAddress2").val());
        var _city = $.trim($("#AccountADD_newAccountDetailstxtCity").val());
        var _state = $.trim($("#AccountADD_newAccountDetailstxtState").val());

        var _country = $('#AccountDetailsddlCountry option:selected').text();

        var _postalCode = $.trim($("#AccountADD_newAccountDetailstxtPostalCode").val());
        var _webSite = $.trim($("#AccountADD_newAccountDetailstxtWebSite").val());

        var _industry = $('#AccountDetailsddlIndustry option:selected').val();

        if (_industry == -1)
            _industry = 1;

        var _comments = $.trim($("#AccountADD_newAccountDetailstxtComments").val());

        var MethodName = "/InsertAccount";
        var user = JSON.parse(localStorage.getItem('LoggedUserDetails'));
        var _MobileCredential = MobileCredential;
        _MobileCredential.MobileAppKeyId = user.MobileAppKeyId;


        var _MainAddress = { AddressLine1: _address1, AddressLine2: _address2, City: _city, State: _state, Country: _country, PostalCode: _postalCode }
        var CRMAccount = { AccountName: _accountName, AccountOwnerId: user.UserId, Site: '', PhoneNumber: '', TypeId: 1, IndustryId: _industry, WebsiteURL: _webSite, MainAddress: _MainAddress }


        var Data = { Account: CRMAccount, userId: user.UserId, Credential: _MobileCredential };

        if (_comments != '') {
            Data = { Account: CRMAccount, userId: user.UserId, comment: _comments, Credential: _MobileCredential };
            MethodName = "/InsertCRMAccountWithComment";
        }

        GetResultFromService(MethodName, Data);

        localStorage.removeItem('RedirectTo');
        localStorage.setItem('RedirectTo', JSON.stringify({
            RedirectTo: '../account/detail.html'
        }));
    }
}
function UpdateAccountResult(result) {
    try {

        if (result != null) {
            if (result.d > 0) {

                localStorage.removeItem('AccountObject');
                localStorage.setItem('AccountObject', JSON.stringify({
                    ContactAccountId: result.d
                }));

                RedirectToPage();
                if (result.d == true) {

                    localStorage.removeItem('AccountSaveSuccessfully');
                    localStorage.setItem('AccountSaveSuccessfully', JSON.stringify({
                        AccountSaveSuccessfully: 'AccountSaveSuccessfully'
                    }));
                }
                if (result.d == false) {

                    localStorage.removeItem('AccountSaveSuccessfully');
                    localStorage.setItem('AccountSaveSuccessfully', JSON.stringify({
                        AccountSaveSuccessfully: 'AccountNotSaveSuccessfully'
                    }));
                }
            }
        }

    } catch (exception) { }
}
function InsertAccountResult(result) {
    try {
        if (result != null) {
            if (result.d > 0) {

                localStorage.removeItem('AccountObject');
                localStorage.setItem('AccountObject', JSON.stringify({
                    ContactAccountId: result.d
                }));

                RedirectToPage();

                localStorage.removeItem('AccountSaveSuccessfully');
                localStorage.setItem('AccountSaveSuccessfully', JSON.stringify({
                    AccountSaveSuccessfully: 'AccountSaveSuccessfully'
                }));

            }
        }

    } catch (exception) { }
}
///////////////////////////////////////////////Add Account Over/////////////////////////
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
        AccountId: Obj.AccountId,
        ContactId: Obj.ContactId,
        Salutation: Obj.Salutation,
        ReportTo: Obj.ReportTo,
        OfficePhone: Obj.OfficePhone,
        Fax: Obj.Fax,
        AssistantName: Obj.AssistantName,
        AssistantPhone: Obj.AssistantPhone,
        IsSendEmailEnabled: Obj.IsSendEmailEnabled,
        FullName: Obj.FullName,
        IsComeFromAccountDetail:true
    }));

}
//**********Over*********

//Load Account Comments...
function LoadAccountComments() {
    var MethodName = "/GetAccountCommentsById";
    var user = JSON.parse(localStorage.getItem('LoggedUserDetails'));
    var _MobileCredential = MobileCredential;
    _MobileCredential.MobileAppKeyId = user.MobileAppKeyId;

    var AccountObject = JSON.parse(localStorage.getItem('AccountObject'));

    var Data = { AccountId: AccountObject.AccountId, Credential: _MobileCredential };
    GetResultFromService(MethodName, Data);
}


///////////////////////////////////AutoCompleter.....////////////////////////////////
/*
function GetActiveAccounts() {
try {
var MethodName = "/GetActiveAccounts";
var user = JSON.parse(localStorage.getItem('LoggedUserDetails'));
var _MobileCredential = MobileCredential;
_MobileCredential.MobileAppKeyId = user.MobileAppKeyId;
var Data = { userId: user.UserId, filter: '', Credential: _MobileCredential };
GetResultFromService(MethodName, Data);
} catch (exception) { }
}
function GetActiveAccountsResult(result) {
try {
var accountNameLst = new Array();
if (result.d.length > 0) {
for (var i = 0; i < result.d.length; i++) {
accountNameLst[i] = result.d[i].AccountName;
}
}
$("#AccountDetailstxtAccountName").autocomplete({
source: accountNameLst
});
}
catch (exception) { }
}*/
///////////////////////////////////AutoCompleter.....Over////////////////////////////////

function GetAccountCommentsByIdResult(result) {
    try {

        if (swiperNestedAccountComments.slides.length == 0) {

            if (result.d.length == 0) {
                $("#ContactsAccountCommentsUlDetails").append("<div class='swiper-slide '><div class='dlist'> <ul><li><a href='#' ><h4>  No Record Found </h4> </a></li></ul></div></div>");
                swiperNestedAccountComments.reInit();
            }
        }
        if (result.d.length > 0) {
            for (var i = 0; i < result.d.length; i++) {

                $("#ContactsAccountCommentsUlDetails").append("<div class='swiper-slide'><div class='dlist'><ul><li><a href='#'><h4> " + result.d[i].Comment + "</h4><p>" + result.d[i].CommentedByName + "</p></a></li></ul></div></div>");
                if (swiperNestedAccountComments != null) {
                    swiperNestedAccountComments.reInit();
                }
            }
        }
        if (swiperNestedAccountContact == null) {
            LoadAccountSlider();
        }
    } catch (exception) { }
}
//**********Over*********

//Load Account Dashboard...
function LoadAccountDashboard() {

}

//**********Over*********


//LoadAccountSlider
var swiperNestedAccountList
var pageIndexAccountList;
function LoadAccountSlider() {

    var swiperParent = new Swiper('.swiper-parent', {
        paginationClickable: true,

        slidesPerView: 1
    })

    if (pageIndexAccountList == null) {
        pageIndexAccountList = 1;
    }
    swiperNestedAccountList = new Swiper('.swiper-nested-accountlist', {
        mode: 'vertical',
        //loop: true,
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
                pageIndexAccountList++;

                swiperNestedAccountList.params.onlyExternal = true
                getAccountList(pageIndexAccountList);
                swiperNestedAccountList.params.onlyExternal = false;

            }

        }
    })
    BindDDL();
}

var swiperNestedAccountContact
var swiperNestedAccountComments
var swiperParent

//Slider for account details...
function LoadAccountDetailSlider() {

    swiperParent = new Swiper('.swiper-parent', {
        paginationClickable: true,
        onSlideChangeStart: function () {
            var dots = [".detail_nav1", ".detail_nav2", ".detail_nav3", ".detail_nav1_1", ".detail_nav1_2"];


            if (swiperParent.activeIndex == 3 || swiperParent.activeIndex == 6 || swiperParent.activeIndex == 9) {
                var color1 = $(dots[swiperParent.activeIndex - 1]).css("background-color");

                if (color1 != 'rgba(0, 0, 0, 0)') {
                    mySwiper.swipeNext();
                }
            }
            else if (swiperParent.activeIndex == 2 || swiperParent.activeIndex == 5) {
                var color2 = $(dots[swiperParent.activeIndex + 1]).css("background-color");

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

    var swiperNestedAccountDetail = new Swiper('.swiper-nested-AccountDetail', {
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
                swiperNestedAccountDetail.params.onlyExternal = true
                //etAccountList(pageIndexAccountList);
                swiperNestedAccountDetail.params.onlyExternal = false;
                //pageIndexAccountList++;
            }

        }
    })
    //***********************Over***********************************

    //this slider use for a account DashBoard...
    var swiperNestedAccountDashBoard = new Swiper('.swiper-nested-AccountDashBoard', {
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
                swiperNestedAccountDashBoard.params.onlyExternal = true
                //etAccountList(pageIndexAccountList);
                swiperNestedAccountDashBoard.params.onlyExternal = false;
                //pageIndexAccountList++;
            }

        }
    })
    //***********************Over***********************************


    //this slider use for a account contact...
    swiperNestedAccountContact = new Swiper('.swiper-nested-ContactAccount', {
        mode: 'vertical',

        paginationClickable: true,
        slidesPerView: 'auto',
        calculateHeight: true,
        cssWidthAndHeight: true,
        watchActiveIndex: true,
        onTouchStart: function () {
            holdPosition = 0;
        },

        onResistanceAfter: function (s, pos) {
            holdPosition = pos;

        },

        onTouchEnd: function () {

            if (holdPosition > 100) {
                swiperNestedAccountContact.params.onlyExternal = true
                //etAccountList(pageIndexAccountList);
                swiperNestedAccountContact.params.onlyExternal = false;
                //pageIndexAccountList++;
            }

        }
    })
    //***********************Over***********************************

    //this slider use for a account comments...

    swiperNestedAccountComments = new Swiper('.swiper-nested-ContactAccountComments', {
        mode: 'vertical',

        paginationClickable: true,
        slidesPerView: 'auto',
        calculateHeight: true,
        cssWidthAndHeight: true,
        watchActiveIndex: true,
        onTouchStart: function () {
            holdPosition = 0;
        },

        onResistanceAfter: function (s, pos) {
            holdPosition = pos;

        },

        onTouchEnd: function () {

            if (holdPosition > 100) {
                swiperNestedAccountComments.params.onlyExternal = true
                //etAccountList(pageIndexAccountList);
                swiperNestedAccountComments.params.onlyExternal = false;
                //pageIndexAccountList++;
            }

        }
    })
    //***********************Over***********************************
}


function deleteAccount() {

    var MethodName = "/DeleteAccount";
    var user = JSON.parse(localStorage.getItem('LoggedUserDetails'));
    var _MobileCredential = MobileCredential;
    _MobileCredential.MobileAppKeyId = user.MobileAppKeyId;

    var AccountObject = JSON.parse(localStorage.getItem('AccountObject'));

    var Data = { AccountId: AccountObject.AccountId, UserId: user.UserId, Credential: _MobileCredential };
    GetResultFromService(MethodName, Data);
    var RedirectTo = JSON.parse(localStorage.getItem('RedirectTo'));
    if (RedirectTo == null) {
        localStorage.removeItem('RedirectTo');
        localStorage.setItem('RedirectTo', JSON.stringify({
            RedirectTo: '../account/AccountList.html'
        }));
    }
}

function DeleteAccountResult(result) {
    try {
        if (result != null) {

            if (result.d > 0) {
                localStorage.removeItem('Accountdeleted');
                localStorage.setItem('Accountdeleted', JSON.stringify({
                    Accountdeleted: 'Accountdeleted'
                }));
                //ShowMessage(errorMsg);
                RedirectToPage();
            }
        }
    } catch (exception) { }
}

//function respConfirm() {
//    var LoadLabelsByLanguage = JSON.parse(localStorage.getItem('LoadLabelsByLanguage'));
//    var response = confirm(LoadLabelsByLanguage.AccountDeleteConfirmMessage);
//    // OR var response = window.confirm('Confirm Test: Continue?');

//    if (response)
//    { deleteAccount(); }
//    else { }
//}

function respConfirm() {

    var LoadLabelsByLanguage = JSON.parse(localStorage.getItem('LoadLabelsByLanguage'));
    navigator.notification.confirm(
            LoadLabelsByLanguage.AccountDeleteConfirmMessage, // message
             onConfirm,            // callback to invoke with index of button pressed
            LoadLabelsByLanguage.DeleteAccountPopUpTitle,           // title
            ['Ok', 'Cancel']         // buttonLabels
        );
}
function onConfirm(buttonIndex) {
    if (buttonIndex == 1) {
        deleteAccount();
    }
}

//function onConfirm(buttonIndex) {
//    alert('You selected button ' + buttonIndex);
//}

//// Show a custom confirmation dialog
////
//function respConfirm() {
//    navigator.notification.confirm(
//            'You are the winner!', // message
//             onConfirm,            // callback to invoke with index of button pressed
//            'Game Over',           // title
//            ['Restart', 'Exit']         // buttonLabels
//        );
//}