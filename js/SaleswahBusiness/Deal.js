/*
hot- presentation
warm-investigation
prospect-Opportunity
Lead-Prospect


*/
function removeobject() {
    localStorage.removeItem('DealObject');

}
var ApplicationPageSize = JSON.parse(localStorage.getItem('ApplicationPageSize'));
var DealPageSize = ApplicationPageSize.PageSize;

var LoadLabelsByLanguage = JSON.parse(localStorage.getItem('LoadLabelsByLanguage'));

function checktab() {
    var DealObject = JSON.parse(localStorage.getItem('DealObject'));
    if (DealObject != null) {

        switch (DealObject.ComeFrom) {
            case "Investigation":
                SlideToPage(1);
                break;
            case "Presentation":
                SlideToPage(0);
                break;
            case "Prospect":
                SlideToPage(3);
                mySwiper.swipeTo(1);
                break;
            //            case "ForeCast":                        
            //                SlideToPage(3);                        
            //                mySwiper.swipeTo(1);                        
            //                break;                        
            //            case "Funnel":                        
            //                SlideToPage(4);                        
            //                mySwiper.swipeTo(1);                        
            //                break;                        
            case "Opportunity":
                SlideToPage(2);

                break;
            //            case "WonthisMonth":                        
            //                SlideToPage(6);                        
            //                mySwiper.swipeTo(2);                        
            //                break;                        
            //            case "NewFunnelthismonth":                        
            //                SlideToPage(7);                        
            //                mySwiper.swipeTo(2);                        
            //                break;                        
            //            case "Lead":                        
            //                // SlideToPage(8);                        
            //                break;                        
        }
        localStorage.removeItem('DealObject');
    }
}
function LoadLabelOfDeals() {


    var DashBoardDetails = JSON.parse(localStorage.getItem('DashBoardDetails'));




    var DealHeaderLabel = document.getElementById('DealHeaderLabel');
    if (DealHeaderLabel != null) {
        DealHeaderLabel.innerHTML = LoadLabelsByLanguage.Hot;
    }

    //Deal Header Investigation--3
    var DealHeaderMenuInvestigation = document.getElementById('DealHeaderMenuInvestigation');
    if (DealHeaderMenuInvestigation != null) {
        DealHeaderMenuInvestigation.innerHTML = LoadLabelsByLanguage.Warm;
    }

    //Deal Header Presentation--1
    var DealHeaderMenuPresentation = document.getElementById('DealHeaderMenuPresentation');
    if (DealHeaderMenuPresentation != null) {
        DealHeaderMenuPresentation.innerHTML = LoadLabelsByLanguage.Hot;
    }

    //Deal Header Prospect--2
    var DealHeaderMenuProspect = document.getElementById('DealHeaderMenuProspect');
    if (DealHeaderMenuProspect != null) {
        DealHeaderMenuProspect.innerHTML = LoadLabelsByLanguage.Lead;
    }

    //    //Deal Header Forecast
    //    var DealHeaderMenuForecast = document.getElementById('DealHeaderMenuForecast');
    //    if (DealHeaderMenuForecast != null)
    //        DealHeaderMenuForecast.innerHTML = LoadLabelsByLanguage.Forecast;

    //    //Deal Header Funnel
    //    var DealHeaderMenuFunnel = document.getElementById('DealHeaderMenuFunnel');
    //    if (DealHeaderMenuFunnel != null)
    //        DealHeaderMenuFunnel.innerHTML = LoadLabelsByLanguage.Funnel;

    //Deal Header Opportunity--4
    var DealHeaderMenuOpportunity = document.getElementById('DealHeaderMenuOpportunity');
    if (DealHeaderMenuOpportunity != null) {
        DealHeaderMenuOpportunity.innerHTML = LoadLabelsByLanguage.Prospect;
    }

    //    //Deal Header Won this month
    //    var DealHeaderMenuWonthismonth = document.getElementById('DealHeaderMenuWonthismonth');
    //    if (DealHeaderMenuWonthismonth != null)
    //        DealHeaderMenuWonthismonth.innerHTML = LoadLabelsByLanguage.Wonthismonth;

    //    //Deal Header New funnel this month
    //    var DealHeaderMenuNewfunnelthismonth = document.getElementById('DealHeaderMenuNewfunnelthismonth');
    //    if (DealHeaderMenuNewfunnelthismonth != null)
    //        DealHeaderMenuNewfunnelthismonth.innerHTML = LoadLabelsByLanguage.Newfunnelthismonth;

    //Deal Detail Header Label Detail
    var DealDetailLabelDetail = document.getElementById('DealDetailLabelDetail');
    if (DealDetailLabelDetail != null) {
        DealDetailLabelDetail.innerHTML = LoadLabelsByLanguage.Detail;
    }

    //    //DealDetailHeader
    //    var DealDetailHeader = document.getElementById('DealDetailHeader');
    //    if (DealDetailHeader != null)
    //        DealDetailHeader.innerHTML = LoadLabelsByLanguage.Detail;

    //Deal Detail Header Label Dashboard
    var DealDetailLabelDashboard = document.getElementById('DealDetailLabelDashboard');
    if (DealDetailLabelDashboard != null) {
        DealDetailLabelDashboard.innerHTML = LoadLabelsByLanguage.Dashboard;
    }

    //Deal Detail Header Label Decisionmaker
    var DealDetailLabelDecisionmaker = document.getElementById('DealDetailLabelDecisionmaker');
    if (DealDetailLabelDecisionmaker != null) {
        DealDetailLabelDecisionmaker.innerHTML = LoadLabelsByLanguage.DealHeaderLabelDecisionmaker;
    }


    //Deal Detail Header Label Message
    var DealDetailLabelMessage = document.getElementById('DealDetailLabelMessage');
    if (DealDetailLabelMessage != null) {
        DealDetailLabelMessage.innerHTML = LoadLabelsByLanguage.Message;
    }

    //Deal Detail  Label Account Name
    var DealDetailsLabelAccountName = document.getElementById('DealDetailsLabelAccountName');
    if (DealDetailsLabelAccountName != null) {
        DealDetailsLabelAccountName.innerHTML = LoadLabelsByLanguage.AccountName;
    }

    //Deal Detail  Label ForeCast Date
    var DealDetailsLabelForecastDate = document.getElementById('DealDetailsLabelForecastDate');
    if (DealDetailsLabelForecastDate != null) {
        DealDetailsLabelForecastDate.innerHTML = LoadLabelsByLanguage.ForeCastDate;
    }

    //Deal Detail  Label Chance
    var DealDetailsLabelChance = document.getElementById('DealDetailsLabelChance');
    if (DealDetailsLabelChance != null) {
        DealDetailsLabelChance.innerHTML = LoadLabelsByLanguage.Chance;
    }

    //Deal Detail  Label Product category
    var DealDetailsLabelProductCategory = document.getElementById('DealDetailsLabelProductCategory');
    if (DealDetailsLabelProductCategory != null) {
        DealDetailsLabelProductCategory.innerHTML = LoadLabelsByLanguage.ProductCategory;
    }

    //Deal Detail  Label Budget Value
    var DealDetailsLabelBudgetValue = document.getElementById('DealDetailsLabelBudgetValue');
    if (DealDetailsLabelBudgetValue != null) {
        DealDetailsLabelBudgetValue.innerHTML = LoadLabelsByLanguage.BudgetValue + ':<br/>(' + DashBoardDetails.Currency + ')';
    }


    //Deal Detail  Label Budget Stage
    var DealDetailsLabelBudgetStage = document.getElementById('DealDetailsLabelBudgetStage');
    if (DealDetailsLabelBudgetStage != null) {
        DealDetailsLabelBudgetStage.innerHTML = LoadLabelsByLanguage.BudgetStage;
    }

    //Deal Detail  Label Solution Presented
    var DealDetailsLabelSolutionPresented = document.getElementById('DealDetailsLabelSolutionPresented');
    if (DealDetailsLabelSolutionPresented != null) {
        DealDetailsLabelSolutionPresented.innerHTML = LoadLabelsByLanguage.SolutionPresented;
    }

    //Deal Detail  Label Comments
    var DealDetailsLabelComments = document.getElementById('DealDetailsLabelComments');
    if (DealDetailsLabelComments != null) {
        DealDetailsLabelComments.innerHTML = LoadLabelsByLanguage.Comments;
    }

    //Deal DashBoard  Label Budget
    var DealDashBoardLabelBudget = document.getElementById('DealDashBoardLabelBudget');
    if (DealDashBoardLabelBudget != null) {
        DealDashBoardLabelBudget.innerHTML = LoadLabelsByLanguage.Budget;
    }

    //Deal DashBoard  Label Authority
    var DealDashBoardLabelAuthority = document.getElementById('DealDashBoardLabelAuthority');
    if (DealDashBoardLabelAuthority != null) {
        DealDashBoardLabelAuthority.innerHTML = LoadLabelsByLanguage.Authority;
    }

    //Deal DashBoard  Label Need
    var DealDashBoardLabelNeed = document.getElementById('DealDashBoardLabelNeed');
    if (DealDashBoardLabelNeed != null) {
        DealDashBoardLabelNeed.innerHTML = LoadLabelsByLanguage.Need;
    }

    //Deal DashBoard  Label Time
    var DealDashBoardLabelTime = document.getElementById('DealDashBoardLabelTime');
    if (DealDashBoardLabelTime != null) {
        DealDashBoardLabelTime.innerHTML = LoadLabelsByLanguage.Time;
    }

    //Deal DashBoard  Label Learning
    var DealDashBoardLabelLearning = document.getElementById('DealDashBoardLabelLearning');
    if (DealDashBoardLabelLearning != null) {
        DealDashBoardLabelLearning.innerHTML = LoadLabelsByLanguage.Learning;
    }

    //Deal DashBoard  Label Quote value
    var DealDashBoardLabelQuotevalue = document.getElementById('DealDashBoardLabelQuotevalue');
    if (DealDashBoardLabelQuotevalue != null) {
        DealDashBoardLabelQuotevalue.innerHTML = LoadLabelsByLanguage.Quotevalue + '<br/>(' + DashBoardDetails.Currency + ')';
    }

    //Deal DashBoard  Label Quotedate
    var DealDashBoardLabelQuotedate = document.getElementById('DealDashBoardLabelQuotedate');
    if (DealDashBoardLabelQuotedate != null)
        DealDashBoardLabelQuotedate.innerHTML = LoadLabelsByLanguage.Quotedate;

    //Deal DashBoard  Label Quotevsbudget
    var DealDashBoardLabelQuotevsbudget = document.getElementById('DealDashBoardLabelQuotevsbudget');
    if (DealDashBoardLabelQuotevsbudget != null) {
        DealDashBoardLabelQuotevsbudget.innerHTML = LoadLabelsByLanguage.Quotevsbudget;
    }



    //dealListtxtSearch
    var dealListtxtSearch = document.getElementById('dealListtxtSearch');
    if (dealListtxtSearch != null) {
    }
    //  $("#dealListtxtSearch").attr('Placeholder', LoadLabelsByLanguage.Search);

    //DealDetailsLabelDealStatus
    //    var DealDetailsLabelDealStatus = document.getElementById('DealDetailsLabelDealStatus');
    //if (DealDetailsLabelDealStatus != null) {
    //    DealDetailsLabelDealStatus.innerHTML = 'ghjgh';
    //}
    //DealDetailsLabelDealStatus.innerHTML = LoadLabelsByLanguage.DealStatus + ' :';

    var DealDashBoardLabelDealStatus = document.getElementById('DealDashBoardLabelDealStatus');
    if (DealDashBoardLabelDealStatus != null) {
        DealDashBoardLabelDealStatus.innerHTML = LoadLabelsByLanguage.DealStatus;
    }

    //DealDecisionMakerContactRoleLabelRole
    var DealDecisionMakerContactRoleLabelRole = document.getElementById('DealDecisionMakerContactRoleLabelRole');
    if (DealDecisionMakerContactRoleLabelRole != null) {
        DealDecisionMakerContactRoleLabelRole.innerHTML = LoadLabelsByLanguage.Role;
    }

    var AddNewDecisionMakerHeaderLabelAddDecisionMakers = document.getElementById('AddNewDecisionMakerHeaderLabelAddDecisionMakers');
    if (AddNewDecisionMakerHeaderLabelAddDecisionMakers != null) {
        AddNewDecisionMakerHeaderLabelAddDecisionMakers.innerHTML = LoadLabelsByLanguage.AddDecisionMaker;
    }
}





//Send Particular object to dealdetailpage
function GETDealObject(Obj) {

    try {
        localStorage.removeItem('DealObject');
        localStorage.setItem('DealObject', JSON.stringify({
            Accountid: Obj.AccountId,
            AccountName: Obj.AccountName,
            ProductCategory: Obj.ProductCategory,
            ChanceId: Obj.ChanceId,
            ForecastDate: Obj.ForecastDate,
            BudgetValue: Obj.BudgetValue,
            QuoteVSBudgetValue: Obj.QuoteVSBudgetValue,
            QuoteValue: Obj.QuoteValue,
            Dealid: Obj.Dealid,
            DealStatus: Obj.DealStatus,
            ProductCategoryId: Obj.ProductCategoryId,
            BudgetStageId: Obj.BudgetStageId,
            SolutionRatingId: Obj.SolutionRatingId,
            DealValue: Obj.DealValue,
            LearningId: Obj.LearningId,
            QuoteVSBudgetId: Obj.QuoteVSBudgetId,
            Budget: Obj.Budget,
            Authority: Obj.Authority,
            Need: Obj.Need,
            Time: Obj.Time,
            QuoteDate: Obj.QuoteDate,
            ComeFrom: Obj.ComeFrom
        }));

    } catch (exception) { }
}


//Bind Particular object to dealdetailpage
function SetDealObjectToDetailPage() {
    try {

        var LoadLabelsByLanguage = JSON.parse(localStorage.getItem('LoadLabelsByLanguage'));
        var DecisionmakerSaveSuccessfully = JSON.parse(localStorage.getItem('DecisionmakerSaveSuccessfully'));
        if (DecisionmakerSaveSuccessfully != null) {
            if (DecisionmakerSaveSuccessfully.DecisionmakerSaveSuccessfully == 'DecisionmakerSaveSuccessfully') {
                localStorage.removeItem('DecisionmakerSaveSuccessfully');
                ShowMessage(LoadLabelsByLanguage.DecisionMakerSaveSuccessfully);
            }
            else if (DecisionmakerSaveSuccessfully.DecisionmakerSaveSuccessfully == 'DecisionmakernotSaveSuccessfully') {
                localStorage.removeItem('DecisionmakerSaveSuccessfully');
                ShowMessage(LoadLabelsByLanguage.DecisionMakerNotSaveSuccessfully);
            }
        }


        var DecisionmakerRoleUpdatedSuccessfully = JSON.parse(localStorage.getItem('DecisionmakerRoleUpdatedSuccessfully'));
        if (DecisionmakerRoleUpdatedSuccessfully != null) {
            if (DecisionmakerRoleUpdatedSuccessfully.DecisionmakerRoleUpdatedSuccessfully == 'DecisionmakerRoleUpdatedSuccessfully') {
                localStorage.removeItem('DecisionmakerRoleUpdatedSuccessfully');
                ShowMessage(LoadLabelsByLanguage.DecisionMakerRoleUpdated);
            }

        }

        var DeleteDecisionMakerResultSuccessfully = JSON.parse(localStorage.getItem('DeleteDecisionMakerResultSuccessfully'));
        if (DeleteDecisionMakerResultSuccessfully != null) {
            if (DeleteDecisionMakerResultSuccessfully.DecisionmakerRoleUpdatedSuccessfully == 'DeleteDecisionMakerResultSuccessfully') {
                localStorage.removeItem('DeleteDecisionMakerResultSuccessfully');
                ShowMessage(LoadLabelsByLanguage.DecisionMakerremovedfromDeal);
            }

        }



        var DealObject = JSON.parse(localStorage.getItem('DealObject'));
        var DashBoardDetails = JSON.parse(localStorage.getItem('DashBoardDetails'));

        var ModuleLabel;
        switch (DealObject.ComeFrom) {
            case "Investigation":
                ModuleLabel = LoadLabelsByLanguage.Warm;
                break;
            case "Presentation":
                ModuleLabel = LoadLabelsByLanguage.Hot;
                break;
            case "Prospect":
                ModuleLabel = LoadLabelsByLanguage.Lead;
                break;
            //            case "ForeCast":                        
            //                ModuleLabel = LoadLabelsByLanguage.Forecast;                        
            //                break;                        
            //            case "Funnel":                        
            //                ModuleLabel = LoadLabelsByLanguage.Funnel;                        
            //                break;                        
            case "Opportunity":
                ModuleLabel = LoadLabelsByLanguage.Prospect;
                break;
            //            case "WonthisMonth":                        
            //                ModuleLabel = LoadLabelsByLanguage.Wonthismonth;                        
            //                break;                        
            //            case "NewFunnelthismonth":                        
            //                ModuleLabel = LoadLabelsByLanguage.Newfunnelthismonth;                        
            //                break;                        
            //            case "Lead":                        
            //                ModuleLabel = LoadLabelsByLanguage.Lead;                        
            //                break;                        
        }

        var DealSaved = JSON.parse(localStorage.getItem('DealSaved'));
        if (DealSaved != null) {
            if (DealSaved.DealSaved == 'DealSaved') {
                localStorage.removeItem('DealSaved');
                ShowMessage(LoadLabelsByLanguage.Saved);
            }
        }

        //DealDetailHeader
        var DealDetailHeaderValueShown = DashBoardDetails.Currency + " " + DealObject.DealValue + ",<br/>" + ModuleLabel;
        var DealDetailHeader = document.getElementById('DealDetailHeader');
        //DealDetailHeader.innerHTML = DealDetailHeaderValueShown;

        if (DealDetailHeaderValueShown.length > 30) {
            DealDetailHeader.innerHTML = DealDetailHeaderValueShown.substring(0, 30) + '...';
        }
        else {
            DealDetailHeader.innerHTML = DealDetailHeaderValueShown;

        }

        var DealDetailstxtAccountName = document.getElementById('DealDetailstxtAccountName');
        DealDetailstxtAccountName.value = DealObject.AccountName;

        var DealDetailstxtForecastDate = document.getElementById('DealDetailstxtForecastDate');
        DealDetailstxtForecastDate.value = convertJSONDateToReadableFormat(DealObject.ForecastDate);

        var DealDetailstxtBudgetvalue = document.getElementById('DealDetailstxtBudgetvalue');
        DealDetailstxtBudgetvalue.value = DealObject.BudgetValue;

        LoadDealDetailSlider();

    } catch (exception) { }
}

//Getchancedropdown
function GetChanceDDlValues() {

    try {
        var MethodName = "/GetChanceValues";

        var user = JSON.parse(localStorage.getItem('LoggedUserDetails'));

        var _MobileCredential = MobileCredential;
        _MobileCredential.MobileAppKeyId = user.MobileAppKeyId;

        var Data = { Credential: _MobileCredential };

        GetResultFromService(MethodName, Data);
    } catch (exception) { }
}


//BindChanceDropdown
function SetChanceValues(result) {
    try {
        localStorage.removeItem('DealChanceDDL');
        localStorage.setItem('DealChanceDDL', JSON.stringify({
            Result: result
        }));
        LoadChanceDropDown();
    }
    catch (exception) { }
}

//Load DropDown Only OnPageLoad
function LoadChanceDropDown() {

    try {

        var DealDetailsddlChance = document.getElementById('DealDetailsddlChance');
        var ChanceDDL = JSON.parse(localStorage.getItem('DealChanceDDL'));
        $("#DealDetailsddlChance").empty();
        if (ChanceDDL.Result.d.length > 0) {
            for (var i = 0; i < ChanceDDL.Result.d.length; i++) {
                var option = document.createElement("option");
                option.text = ChanceDDL.Result.d[i].value;
                option.value = ChanceDDL.Result.d[i].key;
                DealDetailsddlChance.add(option, null);
            }
            var DealObject = JSON.parse(localStorage.getItem('DealObject'));
            var SetValue = DealObject.ChanceId;
            if (SetValue == '')
                SetValue = -1;
            $("#DealDetailsddlChance").val(SetValue);
        }
    } catch (exception) { }
}

var DealDetailsDealBtnEditSaveDeal = document.getElementById('DealDetailsDealBtnEditSaveDeal');
if (DealDetailsDealBtnEditSaveDeal != null) {
    DealDetailsDealBtnEditSaveDeal.addEventListener('click', function () {

        DealDetailsimgSaveDeal();


    }, false);
}
//DealDetailsFooterSection
function DealDetailsimgSaveDeal() {
    try {
        if (ValidateDealDetail() == true) {

            var DealObject = JSON.parse(localStorage.getItem('DealObject'));

            var MethodName = "/UpdateDealWithComment";

            // var _LeadValueOfDeal = {ProductCategoryId:''}

            var Deal = { DealId: '', ForecastDate: '', BudgetValue: '', DealStatus: '', LastModifiedById: '', ChanceId: '', BudgetStageId: '', SolutionRatingId: '', LearningId: '', QuoteVSBudgetId: '' }

            var _Deal = Deal;

            var user = JSON.parse(localStorage.getItem('LoggedUserDetails'));

            _Deal.DealId = parseInt(DealObject.Dealid);

            _Deal.BudgetValue = parseInt($.trim($("#DealDetailstxtBudgetvalue").val()));

            _Deal.ForecastDate = convertToJSONDateOnly($.trim($("#DealDetailstxtForecastDate").val()));

            _Deal.ChanceId = parseInt($('#DealDetailsddlChance option:selected').val());

            _Deal.LastModifiedById = user.UserId;

            _Deal.ProductCategoryId = $('#DealDetailsddlProductCategory option:selected').val();

            _Deal.DealStatus = $('#DealDetailsddlStatus option:selected').val();

            _Deal.BudgetStageId = parseInt($('#DealDetailsddlBudgetStage option:selected').val());

            _Deal.SolutionRatingId = parseInt($('#DealDetailsddlSolutionPresented option:selected').val());

            _Deal.LearningId = parseInt($('#DealDashBoardddlLearning option:selected').val());

            _Deal.QuoteVSBudgetId = parseInt($('#DealDashBoardDDLQuotevsbudget option:selected').val());

            var _MobileCredential = MobileCredential;

            _MobileCredential.MobileAppKeyId = user.MobileAppKeyId;

            var Data = { Deal: _Deal, userId: user.UserId, Comments: $.trim($("#DealDetailstxtComments").val()), Credential: _MobileCredential };

            GetResultFromService(MethodName, Data);


            localStorage.removeItem('RedirectTo');
            localStorage.setItem('RedirectTo', JSON.stringify({
                RedirectTo: '../deal/investigation.html'
            }));
        }
    } catch (exception) { }
}

//GetAllProductCategoryList
function GetAllProductCategory() {
    try {

        var MethodName = "/GetAllProductCategory";

        var user = JSON.parse(localStorage.getItem('LoggedUserDetails'));

        var _MobileCredential = MobileCredential;
        _MobileCredential.MobileAppKeyId = user.MobileAppKeyId;

        var Data = { Credential: _MobileCredential };

        GetResultFromService(MethodName, Data);
    } catch (exception) { }
}


//Bind GetAllProductCategoryList result
function SetAllProductCategory(result) {
    try {

        localStorage.removeItem('DealProductCategoryDDL');
        localStorage.setItem('DealProductCategoryDDL', JSON.stringify({
            Result: result
        }));
        LoadProductCategoryDDL();
    }
    catch (exception) { }
}

//Load DropDown Only OnPageLoad
function LoadProductCategoryDDL() {
    try {

        var DealDetailsddlProductCategory = document.getElementById('DealDetailsddlProductCategory');
        var ProductCategoryDDL = JSON.parse(localStorage.getItem('DealProductCategoryDDL'));
        $("#DealDetailsddlProductCategory").empty();
        //To Set First row   as (solution,budget,chance) DDL getting None from sp so here is too None
        //                var option1 = document.createElement("option");
        //                option1.text = "--None--";
        //                option1.value = -1;
        //                DealDetailsddlProductCategory.add(option1, null);

        if (ProductCategoryDDL.Result.d.length > 0) {
            for (var i = 0; i < ProductCategoryDDL.Result.d.length; i++) {
                var option = document.createElement("option");
                option.text = ProductCategoryDDL.Result.d[i].value;
                option.value = ProductCategoryDDL.Result.d[i].key;
                DealDetailsddlProductCategory.add(option, null);
            }
        }
        var DealObject = JSON.parse(localStorage.getItem('DealObject'));
        var SetValue = DealObject.ProductCategoryId;
        if (SetValue == '')
            SetValue = -1;


        $("#DealDetailsddlProductCategory").val(SetValue);
        var ProductCategoryText = $.trim($("#DealDetailsddlProductCategory option:selected").text());
        if (ProductCategoryText == "Select" || ProductCategoryText == "") {
            //$("#DealDetailsddlProductCategory").attr("disabled", "");
        }
        else {
            $("#DealDetailsddlProductCategory").attr("disabled", "disabled");
        }

    } catch (exception) { }
}


//GetAllBudgetStageList
function GetAllBudgetStage() {
    try {
        var MethodName = "/GetBudgetStageValues";

        var user = JSON.parse(localStorage.getItem('LoggedUserDetails'));

        var _MobileCredential = MobileCredential;
        _MobileCredential.MobileAppKeyId = user.MobileAppKeyId;

        var Data = { Credential: _MobileCredential };

        GetResultFromService(MethodName, Data);
    } catch (exception) { }
}



//Bind GetAllBudgetStageList result
function SetBudgetStageValues(result) {

    try {
        localStorage.removeItem('DealBudgetStageDDL');
        localStorage.setItem('DealBudgetStageDDL', JSON.stringify({
            Result: result
        }));
        LoadBudgetStageList();
    }
    catch (exception) { }
}

//Load DropDown Only OnPageLoad
function LoadBudgetStageList() {
    try {
        var DealDetailsddlProductCategory = document.getElementById('DealDetailsddlBudgetStage');
        var BudgetStageDDL = JSON.parse(localStorage.getItem('DealBudgetStageDDL'));
        $("#DealDetailsddlBudgetStage").empty();

        if (BudgetStageDDL.Result.d.length > 0) {
            for (var i = 0; i < BudgetStageDDL.Result.d.length; i++) {

                var option = document.createElement("option");
                option.text = BudgetStageDDL.Result.d[i].value;
                option.value = BudgetStageDDL.Result.d[i].key;
                DealDetailsddlBudgetStage.add(option, null);
            }
        }
        var DealObject = JSON.parse(localStorage.getItem('DealObject'));
        var SetValue = DealObject.BudgetStageId;
        if (SetValue == 0)
            SetValue = -1;
        $("#DealDetailsddlBudgetStage").val(SetValue);
    } catch (exception) { }
}

//GetAllSolutionRatingsList
function GetAllSolutionRatings() {
    try {
        var MethodName = "/GetSolutionRatings";

        var user = JSON.parse(localStorage.getItem('LoggedUserDetails'));

        var _MobileCredential = MobileCredential;
        _MobileCredential.MobileAppKeyId = user.MobileAppKeyId;

        var Data = { Credential: _MobileCredential };

        GetResultFromService(MethodName, Data);
    } catch (exception) { }
}


//Bind GetAllSolutionRatingsList result
function SetAllSolutionRatings(result) {


    try {
        localStorage.removeItem('DealSolutionPresentedDDL');
        localStorage.setItem('DealSolutionPresentedDDL', JSON.stringify({
            Result: result
        }));
        LoadSolutionPresentedDDl();
    }
    catch (exception) { }
}

//Load DropDown Only OnPageLoad
function LoadSolutionPresentedDDl() {
    try {
        var DealDetailsddlSolutionPresented = document.getElementById('DealDetailsddlSolutionPresented');
        var SolutionPresentedDDL = JSON.parse(localStorage.getItem('DealSolutionPresentedDDL'));
        $("#DealDetailsddlSolutionPresented").empty();
        if (SolutionPresentedDDL.Result.d.length > 0) {
            for (var i = 0; i < SolutionPresentedDDL.Result.d.length; i++) {

                var option = document.createElement("option");
                option.text = SolutionPresentedDDL.Result.d[i].value;
                option.value = SolutionPresentedDDL.Result.d[i].key;
                DealDetailsddlSolutionPresented.add(option, null);

            }
        }
        var DealObject = JSON.parse(localStorage.getItem('DealObject'));

        var SetValue = DealObject.SolutionRatingId;
        if (SetValue == 0)
            SetValue = -1;
        $("#DealDetailsddlSolutionPresented").val(SetValue);
    } catch (exception) { }
}

//GetAllLearningList
function GetLearnings() {
    try {


        var MethodName = "/GetLearnings";

        var user = JSON.parse(localStorage.getItem('LoggedUserDetails'));

        var _MobileCredential = MobileCredential;
        _MobileCredential.MobileAppKeyId = user.MobileAppKeyId;

        var Data = { Credential: _MobileCredential };

        GetResultFromService(MethodName, Data);
    } catch (exception) { }
}

//Bind GetAllLearningList result
function SetLearnings(result) {

    try {
        localStorage.removeItem('DealLearningDDL');
        localStorage.setItem('DealLearningDDL', JSON.stringify({
            Result: result
        }));
        DealDashboardLoadLearningDDL();
    }
    catch (exception) { }

}
//Load GetAllLearningList on Page Load
function DealDashboardLoadLearningDDL() {

    try {
        var DealDashBoardddlLearning = document.getElementById('DealDashBoardddlLearning');
        var DealLearningDDL = JSON.parse(localStorage.getItem('DealLearningDDL'));
        $("#DealDashBoardddlLearning").empty();

        if (DealLearningDDL.Result.d.length > 0) {
            for (var i = 0; i < DealLearningDDL.Result.d.length; i++) {
                var option = document.createElement("option");
                option.text = DealLearningDDL.Result.d[i].value;
                option.value = DealLearningDDL.Result.d[i].key;
                DealDashBoardddlLearning.add(option, null);
            }
        }
        var DealObject = JSON.parse(localStorage.getItem('DealObject'));
        var SetValue = DealObject.LearningId;
        if (SetValue == '')
            SetValue = -1;
        $("#DealDashBoardddlLearning").val(SetValue);

    } catch (exception) { }
}

//GetQuoteVSBudgetValues
function GetQuoteVSBudgetValues() {
    try {


        var MethodName = "/GetQuoteVSBudgetValues";

        var user = JSON.parse(localStorage.getItem('LoggedUserDetails'));

        var _MobileCredential = MobileCredential;
        _MobileCredential.MobileAppKeyId = user.MobileAppKeyId;

        var Data = { Credential: _MobileCredential };

        GetResultFromService(MethodName, Data);
    } catch (exception) { }
}

//Bind GetQuoteVSBudgetValues result
function SetQuoteVSBudgetValues(result) {

    try {
        localStorage.removeItem('DealQuoteVSBudgetDDL');
        localStorage.setItem('DealQuoteVSBudgetDDL', JSON.stringify({
            Result: result
        }));
        DealDashboardLoadQuoteVSBudgetDDL();
    }
    catch (exception) { }

}
//Load GetQuoteVSBudgetValues on Page Load
function DealDashboardLoadQuoteVSBudgetDDL() {

    try {
        var DealDashBoardDDLQuotevsbudget = document.getElementById('DealDashBoardDDLQuotevsbudget');
        var DealQuoteVSBudgetDDL = JSON.parse(localStorage.getItem('DealQuoteVSBudgetDDL'));
        $("#DealDashBoardDDLQuotevsbudget").empty();

        if (DealQuoteVSBudgetDDL.Result.d.length > 0) {
            for (var i = 0; i < DealQuoteVSBudgetDDL.Result.d.length; i++) {
                var option = document.createElement("option");
                option.text = DealQuoteVSBudgetDDL.Result.d[i].value;
                option.value = DealQuoteVSBudgetDDL.Result.d[i].key;
                DealDashBoardDDLQuotevsbudget.add(option, null);
            }
        }
        var DealObject = JSON.parse(localStorage.getItem('DealObject'));
        var SetValue = DealObject.QuoteVSBudgetId;
        if (SetValue == '')
            SetValue = -1;
        $("#DealDashBoardDDLQuotevsbudget").val(SetValue);

    } catch (exception) { }
}

//GetAllBudgetStageList
function GetAllDealStatus() {
    try {
        var MethodName = "/GetDealStatus";

        var user = JSON.parse(localStorage.getItem('LoggedUserDetails'));

        var _MobileCredential = MobileCredential;
        _MobileCredential.MobileAppKeyId = user.MobileAppKeyId;

        var Data = { Credential: _MobileCredential };

        GetResultFromService(MethodName, Data);
    } catch (exception) { }
}

function SetDealStatus(result) {
    try {
        localStorage.removeItem('DealStatusDDL');
        localStorage.setItem('DealStatusDDL', JSON.stringify({
            Result: result
        }));
        LoadAllDealStatus();
    }
    catch (exception) { }

}

//LoadAllDealStatus
function LoadAllDealStatus() {
    try {
        var DealDetailsddlStatus = document.getElementById('DealDetailsddlStatus');
        var DealStatusDDL = JSON.parse(localStorage.getItem('DealStatusDDL'));
        $("#DealDetailsddlStatus").empty();

        if (DealStatusDDL.Result.d.length > 0) {
            for (var i = 0; i < DealStatusDDL.Result.d.length; i++) {
                var option = document.createElement("option");
                option.text = DealStatusDDL.Result.d[i].value;
                option.value = DealStatusDDL.Result.d[i].key;
                DealDetailsddlStatus.add(option, null);
            }
        }
        var DealObject = JSON.parse(localStorage.getItem('DealObject'));
        var SetValue = DealObject.DealStatus;
        if (SetValue == '')
            SetValue = -1;
        $("#DealDetailsddlStatus").val(SetValue);
    } catch (exception) { }
}
/////////////////////////////////////////Opportunity///////////////////////////////////////////////////////

function GetDealOpportunityList(pageIndex) {
    try {
        DealFilter = "Dashboard_OpportunityDeals";
        var _DealStatus = DealStatus;
        var MethodName = "/GetDealList?dOpportunitylistuldetails";
        var user = JSON.parse(localStorage.getItem('LoggedUserDetails'));
        var _MobileCredential = MobileCredential;
        _MobileCredential.MobileAppKeyId = user.MobileAppKeyId;
        var Data = { pageIndex: pageIndex, pageSize: DealPageSize, filterPattern: DealFilter, orderByClause: "LeadDealId", userId: user.UserId, status: _DealStatus.Open, order: "ASC", Credential: _MobileCredential };
        GetResultFromService(MethodName, Data);

    } catch (exception) { }
}


function GetDealOpportunityListResult(result) {



    var dealListtxtSearch = document.getElementById('dealListtxtSearch');
    if (dealListtxtSearch != null) {
        var search = $.trim(dealListtxtSearch.value)
        if (search.length > 0) {
            if (swiperNestedOpportunity != null) {
                if (pageIndexOpportunity == 1) {
                    swiperNestedOpportunity.removeAllSlides();
                    $("#dOpportunitylistuldetails").empty();
                }
                if (swiperNestedOpportunity.slides.length == 0 && result.d.length == 0) {
                    $("#dOpportunitylistuldetails").append("<div class='swiper-slide '><div class='dlist'> <ul><li><a href='#' ><h4>  No Record Found </h4></a></li></ul></div></div>");
                    swiperNestedOpportunity.reInit();
                }
            }
        }
    }



    if (swiperNestedOpportunity.slides.length == 0) {

        if (result.d.length == 0) {
            $("#dOpportunitylistuldetails").append("<div class='swiper-slide '><div class='dlist'> <ul><li> <a href='#' ><h4> No Record Found </h4></a></li></ul></div></div>");
            swiperNestedOpportunity.reInit();
        }
    }
    if (result.d.length > 0) {
        for (var i = 0; i < result.d.length; i++) {
            var ReplacedAccountName = result.d[i].AccountName.replace(/'/g, "\\'");
            var ReplacedProductCategory = result.d[i].ProductCategory.replace(/'/g, "\\'");
            
             
            
            
             

            var _DealDetailObj = "{'AccountId':'" + result.d[i].AccountId + "','AccountName':'" + ReplacedAccountName + "','ProductCategory':'" + ReplacedProductCategory + "','ChanceId':'" + result.d[i].ChanceId + "','ForecastDate':'" + result.d[i].ForecastDate + "','BudgetValue':'" + result.d[i].BudgetValue + "','QuoteVSBudgetValue':'" + result.d[i].QuoteVSBudgetValue + "','QuoteValue':'" + result.d[i].QuoteValue + "','Dealid':'" + result.d[i].DealId + "','DealStatus':'" + result.d[i].DealStatus + "','ProductCategoryId':'" + result.d[i].ProductCategoryId + "','BudgetStageId':'" + result.d[i].BudgetStageId + "','SolutionRatingId':'" + result.d[i].SolutionRatingId + "','DealValue':'" + result.d[i].DealValue + "','LearningId':'" + result.d[i].LearningId + "','QuoteVSBudgetId':'" + result.d[i].QuoteVSBudgetId + "','Authority':'" + result.d[i].Authority + "','Budget':'" + result.d[i].Budget + "','Need':'" + result.d[i].Need + "','Time':'" + result.d[i].Time + "','QuoteDate':'" + result.d[i].QuoteDate + "','ComeFrom':'Opportunity'}";
            $("#dOpportunitylistuldetails").append("<div class='swiper-slide '><div class='dlist'> <ul><li> <a href='detail.html' onclick=\"GETDealObject(" + _DealDetailObj + ")\"><h4>" + result.d[i].AccountName + "</h4><p>" + result.d[i].ProductCategory + "</p><span>" + result.d[i].DealValue + "</span></a> </li></ul></div></div>");
            if (swiperNestedOpportunity != null) {
                swiperNestedOpportunity.reInit();
            }
        }
    }
    GetDealProspectList(1);
    document.getElementById('divLoading').style.display = 'none';

}
/////////////////////////////////////////Investigation///////////////////////////////////////////////////////

//On dealList loaddeallist

function GetDealinvestigationList(pageIndex) {
    try {
        
        var _DealStatus = DealStatus;
        var MethodName = "/GetDealList?dlistuldetails";
        var user = JSON.parse(localStorage.getItem('LoggedUserDetails'));
        var _MobileCredential = MobileCredential;
        _MobileCredential.MobileAppKeyId = user.MobileAppKeyId;
        var Data = { pageIndex: pageIndex, pageSize: DealPageSize, filterPattern: "Dashboard_InvestigationDeals", orderByClause: "LeadDealId", userId: user.UserId, status: _DealStatus.Open, order: "ASC", Credential: _MobileCredential };
        GetResultFromService(MethodName, Data);
    } catch (exception) { }
}




//On dealListtxtSearch
var dealListtxtSearch = document.getElementById('dealListtxtSearch');
if (dealListtxtSearch != null) {

    $("#dealListtxtSearch").keyup(function (e) {
        if (e.keyCode == 13) {
            try {
                /*
                hot- presentation
                warm-investigation
                prospect-Opportunity
                Lead-Prospect


                */
                document.getElementById('divLoading').style.display = 'block';
                var user = JSON.parse(localStorage.getItem('LoggedUserDetails'));
                var _MobileCredential = MobileCredential;
                _MobileCredential.MobileAppKeyId = user.MobileAppKeyId;
                var _DealStatus = DealStatus;

                //If Search Done From Investigation List
                if (swiperParent.activeIndex == 1) {
                    pageIndexinvestigation = 1;
                    swiperNestedinvestigation.setWrapperTranslate(0, 0, 0)
                    swiperNestedinvestigation.removeAllSlides();
                    var MethodName = "/GetDealList?dlistuldetailsSearch";
                    var Data = { pageIndex: 1, pageSize: DealPageSize, filterPattern: "Dashboard_InvestigationDeals", orderByClause: "LeadDealId", userId: user.UserId, status: _DealStatus.Open, order: "ASC", QueryFiltering: $.trim(dealListtxtSearch.value), Credential: _MobileCredential };
                    GetResultFromService(MethodName, Data);
                }
                //If Search Done From Presentation List
                if (swiperParent.activeIndex == 0) {
                    pageIndexPresentation = 1;
                    swiperNestedPresentation.setWrapperTranslate(0, 0, 0)
                    swiperNestedPresentation.removeAllSlides();
                    var MethodName = "/GetDealList?dPresentationlistuldetailsSearch";
                    var Data = { pageIndex: 1, pageSize: DealPageSize, filterPattern: "Dashboard_PresentationDeals", orderByClause: "LeadDealId", userId: user.UserId, status: _DealStatus.Open, order: "ASC", QueryFiltering: $.trim(dealListtxtSearch.value), Credential: _MobileCredential };
                    GetResultFromService(MethodName, Data);
                }
                //If Search Done From Prospect List
                if (swiperParent.activeIndex == 3) {

                    pageIndexProspect = 1;
                    swiperNestedProspect.setWrapperTranslate(0, 0, 0)
                    swiperNestedProspect.removeAllSlides();
                    var MethodName = "/GetDealList?dProspectlistuldetailsSearch";
                    var Data = { pageIndex: 1, pageSize: DealPageSize, filterPattern: "Dashboard_ProspectingDeals", orderByClause: "LeadDealId", userId: user.UserId, status: _DealStatus.Open, order: "ASC", QueryFiltering: $.trim(dealListtxtSearch.value), Credential: _MobileCredential };
                    GetResultFromService(MethodName, Data);
                }
                //            //If Search Done From ForeCast List
                //            if (swiperParent.activeIndex == 3) {
                //                pageIndexForeCast = 1;
                //                var MethodName = "/GetDealList?dForeCastlistuldetailsSearch";
                //                var Data = { pageIndex: 1, pageSize: DealPageSize, filterPattern: "DashBoard_Filter_ForecastDeals", orderByClause: "LeadDealId", userId: user.UserId, status: _DealStatus.Open, order: "ASC", QueryFiltering: $.trim(dealListtxtSearch.value), Credential: _MobileCredential };
                //                GetResultFromService(MethodName, Data);
                //            }
                //            //If Search Done From Funnel List
                //            if (swiperParent.activeIndex == 4) {
                //                pageIndexFunnel = 1;
                //                var MethodName = "/GetDealList?OpenDealsSearch";
                //                var Data = { pageIndex: 1, pageSize: DealPageSize, filterPattern: "OpenDeals", orderByClause: "LeadDealId", userId: user.UserId, status: _DealStatus.Open, order: "ASC", QueryFiltering: $.trim(dealListtxtSearch.value), Credential: _MobileCredential };
                //                GetResultFromService(MethodName, Data);
                //            }
                //If Search Done From Opportunity List
                if (swiperParent.activeIndex == 2) {
                    pageIndexOpportunity = 1;
                    swiperNestedOpportunity.setWrapperTranslate(0, 0, 0)
                    swiperNestedOpportunity.removeAllSlides();
                    var MethodName = "/GetDealList?dOpportunitylistuldetailsSearch";
                    var Data = { pageIndex: 1, pageSize: DealPageSize, filterPattern: "Dashboard_OpportunityDeals", orderByClause: "LeadDealId", userId: user.UserId, status: _DealStatus.Open, order: "ASC", QueryFiltering: $.trim(dealListtxtSearch.value), Credential: _MobileCredential };
                    GetResultFromService(MethodName, Data);
                }
                //            //If Search Done From Won This month List
                //            if (swiperParent.activeIndex == 6) {
                //                pageIndexWonthisMonth = 1;
                //                var MethodName = "/GetDealList?dWonThisMonthlistuldetailsSearch";
                //                var Data = { pageIndex: 1, pageSize: DealPageSize, filterPattern: "Dashboard_wonDealsThisMonth", orderByClause: "LeadDealId", userId: user.UserId, status: _DealStatus.Open, order: "ASC", QueryFiltering: $.trim(dealListtxtSearch.value), Credential: _MobileCredential };
                //                GetResultFromService(MethodName, Data);
                //            }
                //            //If Search Done From New Funnel this month List
                //            if (swiperParent.activeIndex == 7) {
                //                pageIndexNewFunnelThisMonth = 1;
                //                var MethodName = "/GetDealList?dNewFunnellistuldetailsSearch";
                //                var Data = { pageIndex: 1, pageSize: DealPageSize, filterPattern: "newdeals", orderByClause: "LeadDealId", userId: user.UserId, status: _DealStatus.Open, order: "ASC", QueryFiltering: $.trim(dealListtxtSearch.value), Credential: _MobileCredential };
                //                GetResultFromService(MethodName, Data);
                //            }
            } catch (exception) { }
        }

    });

    $("#ImgdealListSearch").click(function () {
        try {
            /*
            hot- presentation
            warm-investigation
            prospect-Opportunity
            Lead-Prospect


            */
            document.getElementById('divLoading').style.display = 'block';
            var user = JSON.parse(localStorage.getItem('LoggedUserDetails'));
            var _MobileCredential = MobileCredential;
            _MobileCredential.MobileAppKeyId = user.MobileAppKeyId;
            var _DealStatus = DealStatus;

            //If Search Done From Investigation List
            if (swiperParent.activeIndex == 1) {
                pageIndexinvestigation = 1;
                swiperNestedinvestigation.setWrapperTranslate(0, 0, 0)
                swiperNestedinvestigation.removeAllSlides();
                var MethodName = "/GetDealList?dlistuldetailsSearch";
                var Data = { pageIndex: 1, pageSize: DealPageSize, filterPattern: "Dashboard_InvestigationDeals", orderByClause: "LeadDealId", userId: user.UserId, status: _DealStatus.Open, order: "ASC", QueryFiltering: $.trim(dealListtxtSearch.value), Credential: _MobileCredential };
                GetResultFromService(MethodName, Data);
            }
            //If Search Done From Presentation List
            if (swiperParent.activeIndex == 0) {
                pageIndexPresentation = 1;
                swiperNestedPresentation.setWrapperTranslate(0, 0, 0)
                swiperNestedPresentation.removeAllSlides();
                var MethodName = "/GetDealList?dPresentationlistuldetailsSearch";
                var Data = { pageIndex: 1, pageSize: DealPageSize, filterPattern: "Dashboard_PresentationDeals", orderByClause: "LeadDealId", userId: user.UserId, status: _DealStatus.Open, order: "ASC", QueryFiltering: $.trim(dealListtxtSearch.value), Credential: _MobileCredential };
                GetResultFromService(MethodName, Data);
            }
            //If Search Done From Prospect List
            if (swiperParent.activeIndex == 3) {

                pageIndexProspect = 1;
                swiperNestedProspect.setWrapperTranslate(0, 0, 0)
                swiperNestedProspect.removeAllSlides();
                var MethodName = "/GetDealList?dProspectlistuldetailsSearch";
                var Data = { pageIndex: 1, pageSize: DealPageSize, filterPattern: "Dashboard_ProspectingDeals", orderByClause: "LeadDealId", userId: user.UserId, status: _DealStatus.Open, order: "ASC", QueryFiltering: $.trim(dealListtxtSearch.value), Credential: _MobileCredential };
                GetResultFromService(MethodName, Data);
            }
            //            //If Search Done From ForeCast List
            //            if (swiperParent.activeIndex == 3) {
            //                pageIndexForeCast = 1;
            //                var MethodName = "/GetDealList?dForeCastlistuldetailsSearch";
            //                var Data = { pageIndex: 1, pageSize: DealPageSize, filterPattern: "DashBoard_Filter_ForecastDeals", orderByClause: "LeadDealId", userId: user.UserId, status: _DealStatus.Open, order: "ASC", QueryFiltering: $.trim(dealListtxtSearch.value), Credential: _MobileCredential };
            //                GetResultFromService(MethodName, Data);
            //            }
            //            //If Search Done From Funnel List
            //            if (swiperParent.activeIndex == 4) {
            //                pageIndexFunnel = 1;
            //                var MethodName = "/GetDealList?OpenDealsSearch";
            //                var Data = { pageIndex: 1, pageSize: DealPageSize, filterPattern: "OpenDeals", orderByClause: "LeadDealId", userId: user.UserId, status: _DealStatus.Open, order: "ASC", QueryFiltering: $.trim(dealListtxtSearch.value), Credential: _MobileCredential };
            //                GetResultFromService(MethodName, Data);
            //            }
            //If Search Done From Opportunity List
            if (swiperParent.activeIndex == 2) {
                pageIndexOpportunity = 1;
                swiperNestedOpportunity.setWrapperTranslate(0, 0, 0)
                swiperNestedOpportunity.removeAllSlides();
                var MethodName = "/GetDealList?dOpportunitylistuldetailsSearch";
                var Data = { pageIndex: 1, pageSize: DealPageSize, filterPattern: "Dashboard_OpportunityDeals", orderByClause: "LeadDealId", userId: user.UserId, status: _DealStatus.Open, order: "ASC", QueryFiltering: $.trim(dealListtxtSearch.value), Credential: _MobileCredential };
                GetResultFromService(MethodName, Data);
            }
            //            //If Search Done From Won This month List
            //            if (swiperParent.activeIndex == 6) {
            //                pageIndexWonthisMonth = 1;
            //                var MethodName = "/GetDealList?dWonThisMonthlistuldetailsSearch";
            //                var Data = { pageIndex: 1, pageSize: DealPageSize, filterPattern: "Dashboard_wonDealsThisMonth", orderByClause: "LeadDealId", userId: user.UserId, status: _DealStatus.Open, order: "ASC", QueryFiltering: $.trim(dealListtxtSearch.value), Credential: _MobileCredential };
            //                GetResultFromService(MethodName, Data);
            //            }
            //            //If Search Done From New Funnel this month List
            //            if (swiperParent.activeIndex == 7) {
            //                pageIndexNewFunnelThisMonth = 1;
            //                var MethodName = "/GetDealList?dNewFunnellistuldetailsSearch";
            //                var Data = { pageIndex: 1, pageSize: DealPageSize, filterPattern: "newdeals", orderByClause: "LeadDealId", userId: user.UserId, status: _DealStatus.Open, order: "ASC", QueryFiltering: $.trim(dealListtxtSearch.value), Credential: _MobileCredential };
            //                GetResultFromService(MethodName, Data);
            //            }
        } catch (exception) { }

    });


}

function GetDealInvestigationListResult(result) {
  

    if (swiperNestedinvestigation.slides.length == 0) {

        if (result.d.length == 0) {
            $("#dlistuldetails").append("<div class='swiper-slide '><div class='dlist'> <ul><li> <a href='#' ><h4> No Record Found </h4></a></li></ul></div></div>");
            swiperNestedinvestigation.reInit();
        }
    }



    var dealListtxtSearch = document.getElementById('dealListtxtSearch');
    if (dealListtxtSearch != null) {
        var search = $.trim(dealListtxtSearch.value)
        if (search.length > 0) {
            if (swiperNestedinvestigation != null) {
                if (pageIndexinvestigation == 1) {
                    swiperNestedinvestigation.removeAllSlides();
                    $("#dlistuldetails").empty();
                }
                if (swiperNestedinvestigation.slides.length == 0 && result.d.length == 0) {
                    $("#dlistuldetails").append("<div class='swiper-slide '><div class='dlist'> <ul><li><a href='#' ><h4>  No Record Found </h4></a></li></ul></div></div>");
                    swiperNestedinvestigation.reInit();
                }
            }
        }
    }



    if (result.d.length > 0) {
        for (var i = 0; i < result.d.length; i++) {
             
            var ReplacedAccountName = result.d[i].AccountName.replace(/'/g, "\\'");
            var ReplacedProductCategory = result.d[i].ProductCategory.replace(/'/g, "\\'");
            
             
            
            
             
            var _DealDetailObj = "{'AccountId':'" + result.d[i].AccountId + "','AccountName':'" + ReplacedAccountName + "','ProductCategory':'" + ReplacedProductCategory + "','ChanceId':'" + result.d[i].ChanceId + "','ForecastDate':'" + result.d[i].ForecastDate + "','BudgetValue':'" + result.d[i].BudgetValue + "','QuoteVSBudgetValue':'" + result.d[i].QuoteVSBudgetValue + "','QuoteValue':'" + result.d[i].QuoteValue + "','Dealid':'" + result.d[i].DealId + "','DealStatus':'" + result.d[i].DealStatus + "','ProductCategoryId':'" + result.d[i].ProductCategoryId + "','BudgetStageId':'" + result.d[i].BudgetStageId + "','SolutionRatingId':'" + result.d[i].SolutionRatingId + "','DealValue':'" + result.d[i].DealValue + "','LearningId':'" + result.d[i].LearningId + "','QuoteVSBudgetId':'" + result.d[i].QuoteVSBudgetId + "','Authority':'" + result.d[i].Authority + "','Budget':'" + result.d[i].Budget + "','Need':'" + result.d[i].Need + "','Time':'" + result.d[i].Time + "','QuoteDate':'" + result.d[i].QuoteDate + "','ComeFrom':'Investigation'}";
            $("#dlistuldetails").append("<div class='swiper-slide'><div class='dlist'><ul><li> <a href='detail.html' onclick=\"GETDealObject(" + _DealDetailObj + ")\"><h4>" + result.d[i].AccountName + "</h4><p>" + result.d[i].ProductCategory + "</p><span>" + result.d[i].DealValue + "</span></a> </li></ul></div></div>");
            if (swiperNestedinvestigation != null) {
                swiperNestedinvestigation.reInit();
            }
        }
    }
    if (swiperNestedinvestigation == null) {
        LoadDealSlider();
    }
    document.getElementById('divLoading').style.display = 'none';
    GetDealOpportunityList(1);
}


////////////////////////////////////////////////////////Investigation END////////////////////////////////////////////////////
/////////////////////////////////////////Prospect///////////////////////////////////////////////////////

function GetDealProspectList(pageIndex) {
    try {

        var _DealStatus = DealStatus;
        var MethodName = "/GetDealList?dProspectlistuldetails";
        var user = JSON.parse(localStorage.getItem('LoggedUserDetails'));
        var _MobileCredential = MobileCredential;
        _MobileCredential.MobileAppKeyId = user.MobileAppKeyId;
        var Data = { pageIndex: pageIndex, pageSize: DealPageSize, filterPattern: "Dashboard_ProspectingDeals", orderByClause: "LeadDealId", userId: user.UserId, status: _DealStatus.Open, order: "ASC", Credential: _MobileCredential };
        GetResultFromService(MethodName, Data);
    } catch (exception) { }

}


function GetDealProspectListResult(result) {


    if (swiperNestedProspect.slides.length == 0) {

        if (result.d.length == 0) {
            $("#dProspectlistuldetails").append("<div class='swiper-slide '><div class='dlist'> <ul><li> <a href='#' ><h4> No Record Found </h4></a></li></ul></div></div>");
            swiperNestedProspect.reInit();
        }
    }

    var dealListtxtSearch = document.getElementById('dealListtxtSearch');
    if (dealListtxtSearch != null) {
        var search = $.trim(dealListtxtSearch.value)
        if (search.length > 0) {
            if (swiperNestedProspect != null) {
                if (pageIndexProspect == 1) {
                    swiperNestedProspect.removeAllSlides();
                    $("#dProspectlistuldetails").empty();
                }
                if (swiperNestedProspect.slides.length == 0 && result.d.length == 0) {
                    $("#dProspectlistuldetails").append("<div class='swiper-slide '><div class='dlist'> <ul><li><a href='#' ><h4>  No Record Found </h4></a></li></ul></div></div>");
                    swiperNestedProspect.reInit();
                }
            }
        }
    }
    if (result.d.length > 0) {
        for (var i = 0; i < result.d.length; i++) {
            var ReplacedAccountName = result.d[i].AccountName.replace(/'/g, "\\'");
            var ReplacedProductCategory = result.d[i].ProductCategory.replace(/'/g, "\\'");
            
             
            
            
             
            var _DealDetailObj = "{'AccountId':'" + result.d[i].AccountId + "','AccountName':'" + ReplacedAccountName + "','ProductCategory':'" + ReplacedProductCategory + "','ChanceId':'" + result.d[i].ChanceId + "','ForecastDate':'" + result.d[i].ForecastDate + "','BudgetValue':'" + result.d[i].BudgetValue + "','QuoteVSBudgetValue':'" + result.d[i].QuoteVSBudgetValue + "','QuoteValue':'" + result.d[i].QuoteValue + "','Dealid':'" + result.d[i].DealId + "','DealStatus':'" + result.d[i].DealStatus + "','ProductCategoryId':'" + result.d[i].ProductCategoryId + "','BudgetStageId':'" + result.d[i].BudgetStageId + "','SolutionRatingId':'" + result.d[i].SolutionRatingId + "','DealValue':'" + result.d[i].DealValue + "','LearningId':'" + result.d[i].LearningId + "','QuoteVSBudgetId':'" + result.d[i].QuoteVSBudgetId + "','Authority':'" + result.d[i].Authority + "','Budget':'" + result.d[i].Budget + "','Need':'" + result.d[i].Need + "','Time':'" + result.d[i].Time + "','QuoteDate':'" + result.d[i].QuoteDate + "','ComeFrom':'Prospect'}";

            $("#dProspectlistuldetails").append("<div class='swiper-slide'><div class='dlist'> <ul><li><a href='detail.html' onclick=\"GETDealObject(" + _DealDetailObj + ")\"><h4> " + result.d[i].AccountName + "</h4><p>" + result.d[i].ProductCategory + "</p><span>" + result.d[i].DealValue + "</span></a> </li></ul></div></div>");

            if (swiperNestedProspect != null) {
                swiperNestedProspect.reInit();
            }
        }
    }
    if (swiperNestedProspect == null) {
        LoadDealSlider();
    }
    document.getElementById('divLoading').style.display = 'none';
}

/////////////////////////////////////////Presentation///////////////////////////////////////////////////////

function GetDealPresentationList(pageIndex) {
    try {
       

        document.getElementById('divLoading').style.display = 'block';

        var _DealStatus = DealStatus;
        var MethodName = "/GetDealList?dPresentationlistuldetails";
        var user = JSON.parse(localStorage.getItem('LoggedUserDetails'));
        var _MobileCredential = MobileCredential;
        _MobileCredential.MobileAppKeyId = user.MobileAppKeyId;
        var Data = { pageIndex: pageIndex, pageSize: DealPageSize, filterPattern: "Dashboard_PresentationDeals", orderByClause: "LeadDealId", userId: user.UserId, status: _DealStatus.Open, order: "ASC", Credential: _MobileCredential };
        GetResultFromService(MethodName, Data);
    } catch (exception) { }
}

function GetDealPresentationListResult(result) {
   
    var DealSaveSuccessfully = JSON.parse(localStorage.getItem('DealSaveSuccessfully'));
    if (DealSaveSuccessfully != null) {
        if (DealSaveSuccessfully.DealSaveSuccessfully == 'DealSaveSuccessfully') {
            localStorage.removeItem('DealSaveSuccessfully');
            ShowMessage(LoadLabelsByLanguage.Updated);
        }
        else
            if (DealSaveSuccessfully.DealSaveSuccessfully == 'DealNotSaveSuccessfully') {
                localStorage.removeItem('DealSaveSuccessfully');
                ShowMessage(LoadLabelsByLanguage.NotUpdated);
            }
    }

    var dealListtxtSearch = document.getElementById('dealListtxtSearch');
    if (dealListtxtSearch != null) {
        var search = $.trim(dealListtxtSearch.value)
        if (search.length > 0) {
            if (swiperNestedPresentation != null) {
                if (pageIndexPresentation == 1) {
                    swiperNestedPresentation.removeAllSlides();
                    $("#dPresentationlistuldetails").empty();
                }

            }
        }
    }
    if (swiperNestedPresentation != null) {
        if (swiperNestedPresentation.slides.length == 0 && result.d.length == 0) {
            $("#dPresentationlistuldetails").append("<div class='swiper-slide '><div class='dlist'> <ul><li><a href='#' ><h4>  No Record Found </h4></a></li></ul></div></div>");
            swiperNestedPresentation.reInit();
        }
    }


    if (swiperNestedPresentation == null) {
        // $("#dPresentationlistuldetails").append("<div class='swiper-slide' style='height:57px !important'><div class='dsearch'><input id='dPresentationtxtSearch' type='search' size='' placeholder='search' /></div></div>");
        if (result.d.length == 0) {
            $("#dPresentationlistuldetails").append("<div class='swiper-slide '><div class='dlist'> <ul><li><a href='#' ><h4>  No Record Found </h4></a></li></ul></div></div>");
            //swiperNestedPresentation.reInit();
        }
    }

    if (result.d.length > 0) {
        for (var i = 0; i < result.d.length; i++) {
            var ReplacedAccountName = result.d[i].AccountName.replace(/'/g, "\\'");
            var ReplacedProductCategory = result.d[i].ProductCategory.replace(/'/g, "\\'");
            
             
            
            
             
            var _DealDetailObj = "{'AccountId':'" + result.d[i].AccountId + "','AccountName':'" + ReplacedAccountName + "','ProductCategory':'" + ReplacedProductCategory + "','ChanceId':'" + result.d[i].ChanceId + "','ForecastDate':'" + result.d[i].ForecastDate + "','BudgetValue':'" + result.d[i].BudgetValue + "','QuoteVSBudgetValue':'" + result.d[i].QuoteVSBudgetValue + "','QuoteValue':'" + result.d[i].QuoteValue + "','Dealid':'" + result.d[i].DealId + "','DealStatus':'" + result.d[i].DealStatus + "','ProductCategoryId':'" + result.d[i].ProductCategoryId + "','BudgetStageId':'" + result.d[i].BudgetStageId + "','SolutionRatingId':'" + result.d[i].SolutionRatingId + "','DealValue':'" + result.d[i].DealValue + "','LearningId':'" + result.d[i].LearningId + "','QuoteVSBudgetId':'" + result.d[i].QuoteVSBudgetId + "','Authority':'" + result.d[i].Authority + "','Budget':'" + result.d[i].Budget + "','Need':'" + result.d[i].Need + "','Time':'" + result.d[i].Time + "','QuoteDate':'" + result.d[i].QuoteDate + "','ComeFrom':'Presentation'}";
            $("#dPresentationlistuldetails").append("<div class='swiper-slide '><div class='dlist'> <ul><li> <a href='detail.html' onclick=\"GETDealObject(" + _DealDetailObj + ")\"><h4>" + result.d[i].AccountName + "</h4><p>" + result.d[i].ProductCategory + "</p><span>" + result.d[i].DealValue + "</span></a> </li></ul></div></div>");
            if (swiperNestedPresentation != null) {
                swiperNestedPresentation.reInit();
            }
        }
    }
    if (swiperNestedPresentation == null) {
        LoadDealSlider();
    }
    document.getElementById('divLoading').style.display = 'none';
    checktab();
    GetDealinvestigationList(1);
}

/////////////////////////////////////////ForeCast///////////////////////////////////////////////////////

//function GetDealForeCastList(pageIndex) {
//    try {

//        var _DealStatus = DealStatus;
//        var MethodName = "/GetDealList?dForeCastlistuldetails";
//        var user = JSON.parse(localStorage.getItem('LoggedUserDetails'));
//        var _MobileCredential = MobileCredential;
//        _MobileCredential.MobileAppKeyId = user.MobileAppKeyId;
//        var Data = { pageIndex: pageIndex, pageSize: DealPageSize, filterPattern: "DashBoard_Filter_ForecastDeals", orderByClause: "LeadDealId", userId: user.UserId, status: _DealStatus.Open, order: "ASC", Credential: _MobileCredential };
//        GetResultFromService(MethodName, Data);
//    } catch (exception) { }
//}

//function GetDealForeCastListResult(result) {
//    var dealListtxtSearch = document.getElementById('dealListtxtSearch');
//    if (dealListtxtSearch != null) {
//        var search = $.trim(dealListtxtSearch.value)
//        if (search.length > 0) {
//            swiperNestedForeCast.removeAllSlides();
//            $("#dForeCastlistuldetails").empty();
//        }
//    }


//    if (swiperNestedForeCast.slides.length == 0) {
//        // $("#dForeCastlistuldetails").append("<div class='swiper-slide' style='height:57px !important'><div class='dsearch'><input id='dForeCasttxtSearch' type='search' size='' placeholder='search' /></div></div>");
//        if (result.d.length == 0) {
//            $("#dForeCastlistuldetails").append("<div class='swiper-slide '><div class='dlist'> <ul><li> <a href='#' ><h4> No Record Found</h4> </a></li></ul></div></div>");
//            swiperNestedForeCast.reInit();
//        }
//    }
//    if (result.d.length > 0) {
//        for (var i = 0; i < result.d.length; i++) {
//            var _DealDetailObj = "{'AccountId':'" + result.d[i].AccountId + "','AccountName':'" + result.d[i].AccountName + "','ProductCategory':'" + result.d[i].ProductCategory + "','ChanceId':'" + result.d[i].ChanceId + "','ForecastDate':'" + result.d[i].ForecastDate + "','BudgetValue':'" + result.d[i].BudgetValue + "','QuoteVSBudgetValue':'" + result.d[i].QuoteVSBudgetValue + "','QuoteValue':'" + result.d[i].QuoteValue + "','Dealid':'" + result.d[i].DealId + "','DealStatus':'" + result.d[i].DealStatus + "','ProductCategoryId':'" + result.d[i].ProductCategoryId + "','BudgetStageId':'" + result.d[i].BudgetStageId + "','SolutionRatingId':'" + result.d[i].SolutionRatingId + "','DealValue':'" + result.d[i].DealValue + "','LearningId':'" + result.d[i].LearningId + "','QuoteVSBudgetId':'" + result.d[i].QuoteVSBudgetId + "','Authority':'" + result.d[i].Authority + "','Budget':'" + result.d[i].Budget + "','Need':'" + result.d[i].Need + "','Time':'" + result.d[i].Time + "','QuoteDate':'" + result.d[i].QuoteDate + "','ComeFrom':'ForeCast'}";
//            $("#dForeCastlistuldetails").append("<div class='swiper-slide '><div class='dlist'> <ul><li> <a href='detail.html' onclick=\"GETDealObject(" + _DealDetailObj + ")\"><h4>" + result.d[i].AccountName + "</h4><p>" + result.d[i].ProductCategory + "</p><span>" + result.d[i].DealValue + "</span></a> </li></ul></div></div>");
//            if (swiperNestedForeCast != null) {
//                swiperNestedForeCast.reInit();
//            }
//        }
//    }
//}

/////////////////////////////////////////Funnel///////////////////////////////////////////////////////

//function GetDealFunnelList(PageIndex) {
//    try {

//        var _DealStatus = DealStatus;
//        var MethodName = "/GetDealList?OpenDeals";
//        var user = JSON.parse(localStorage.getItem('LoggedUserDetails'));
//        var _MobileCredential = MobileCredential;
//        _MobileCredential.MobileAppKeyId = user.MobileAppKeyId;
//        var Data = { pageIndex: PageIndex, pageSize: DealPageSize, filterPattern: "OpenDeals", orderByClause: "LeadDealId", userId: user.UserId, status: _DealStatus.Open, order: "ASC", Credential: _MobileCredential };
//        GetResultFromService(MethodName, Data);

//    } catch (exception) { }
//}

//function GetDealFunnelListResult(result) {
//    var dealListtxtSearch = document.getElementById('dealListtxtSearch');
//    if (dealListtxtSearch != null) {
//        var search = $.trim(dealListtxtSearch.value)
//        if (search.length > 0) {
//            swiperNestedFunnel.removeAllSlides();
//            $("#dFunnellistuldetails").empty();
//        }
//    }

//    if (swiperNestedFunnel.slides.length == 0) {
//        // $("#dFunnellistuldetails").append("<div class='swiper-slide' style='height:57px !important'><div class='dsearch'><input id='dFunneltxtSearch' type='search' size='' placeholder='search' /></div></div>");
//        if (result.d.length == 0) {
//            $("#dFunnellistuldetails").append("<div class='swiper-slide '><div class='dlist'> <ul><li> <a href='#' ><h4> No Record Found </h4></a></li></ul></div></div>");
//            swiperNestedFunnel.reInit();
//        }
//    }

//    if (result.d.length > 0) {
//        for (var i = 0; i < result.d.length; i++) {
//            var _DealDetailObj = "{'AccountId':'" + result.d[i].AccountId + "','AccountName':'" + result.d[i].AccountName + "','ProductCategory':'" + result.d[i].ProductCategory + "','ChanceId':'" + result.d[i].ChanceId + "','ForecastDate':'" + result.d[i].ForecastDate + "','BudgetValue':'" + result.d[i].BudgetValue + "','QuoteVSBudgetValue':'" + result.d[i].QuoteVSBudgetValue + "','QuoteValue':'" + result.d[i].QuoteValue + "','Dealid':'" + result.d[i].DealId + "','DealStatus':'" + result.d[i].DealStatus + "','ProductCategoryId':'" + result.d[i].ProductCategoryId + "','BudgetStageId':'" + result.d[i].BudgetStageId + "','SolutionRatingId':'" + result.d[i].SolutionRatingId + "','DealValue':'" + result.d[i].DealValue + "','LearningId':'" + result.d[i].LearningId + "','QuoteVSBudgetId':'" + result.d[i].QuoteVSBudgetId + "','Authority':'" + result.d[i].Authority + "','Budget':'" + result.d[i].Budget + "','Need':'" + result.d[i].Need + "','Time':'" + result.d[i].Time + "','QuoteDate':'" + result.d[i].QuoteDate + "','ComeFrom':'Funnel'}";
//            $("#dFunnellistuldetails").append("<div class='swiper-slide '><div class='dlist'> <ul><li> <a href='detail.html' onclick=\"GETDealObject(" + _DealDetailObj + ")\"><h4>" + result.d[i].AccountName + "</h4><p>" + result.d[i].ProductCategory + "</p><span>" + result.d[i].DealValue + "</span></a> </li></ul></div></div>");
//            if (swiperNestedFunnel != null) {
//                swiperNestedFunnel.reInit();
//            }
//        }
//    }
//}

/////////////////////////////////////////Won This Month///////////////////////////////////////////////////////

//function GetDealWonThisMonthList(pageIndex) {
//    try {
//        var _DealStatus = DealStatus;
//        var MethodName = "/GetDealList?dWonThisMonthlistuldetails";
//        var user = JSON.parse(localStorage.getItem('LoggedUserDetails'));
//        var _MobileCredential = MobileCredential;
//        _MobileCredential.MobileAppKeyId = user.MobileAppKeyId;
//        var Data = { pageIndex: pageIndex, pageSize: DealPageSize, filterPattern: "Dashboard_wonDealsThisMonth", orderByClause: "LeadDealId", userId: user.UserId, status: _DealStatus.Open, order: "ASC", Credential: _MobileCredential };
//        GetResultFromService(MethodName, Data);
//    } catch (exception) { }
//}

//function GetDealWonThisMonthListResult(result) {

//    var dealListtxtSearch = document.getElementById('dealListtxtSearch');
//    if (dealListtxtSearch != null) {
//        var search = $.trim(dealListtxtSearch.value)
//        if (search.length > 0) {
//            swiperNestedWonthisMonth.removeAllSlides();
//            $("#dWonThisMonthlistuldetails").empty();
//        }
//    }

//    if (swiperNestedWonthisMonth.slides.length == 0) {

//        if (result.d.length == 0) {
//            $("#dWonThisMonthlistuldetails").append("<div class='swiper-slide '><div class='dlist'> <ul><li> <a href='#' ><h4> No Record Found </h4></a></li></ul></div></div>");
//            swiperNestedWonthisMonth.reInit();
//        }
//    }
//    if (result.d.length > 0) {
//        for (var i = 0; i < result.d.length; i++) {
//            var _DealDetailObj = "{'AccountId':'" + result.d[i].AccountId + "','AccountName':'" + result.d[i].AccountName + "','ProductCategory':'" + result.d[i].ProductCategory + "','ChanceId':'" + result.d[i].ChanceId + "','ForecastDate':'" + result.d[i].ForecastDate + "','BudgetValue':'" + result.d[i].BudgetValue + "','QuoteVSBudgetValue':'" + result.d[i].QuoteVSBudgetValue + "','QuoteValue':'" + result.d[i].QuoteValue + "','Dealid':'" + result.d[i].DealId + "','DealStatus':'" + result.d[i].DealStatus + "','ProductCategoryId':'" + result.d[i].ProductCategoryId + "','BudgetStageId':'" + result.d[i].BudgetStageId + "','SolutionRatingId':'" + result.d[i].SolutionRatingId + "','DealValue':'" + result.d[i].DealValue + "','LearningId':'" + result.d[i].LearningId + "','QuoteVSBudgetId':'" + result.d[i].QuoteVSBudgetId + "','Authority':'" + result.d[i].Authority + "','Budget':'" + result.d[i].Budget + "','Need':'" + result.d[i].Need + "','Time':'" + result.d[i].Time + "','QuoteDate':'" + result.d[i].QuoteDate + ",'ComeFrom':'WonthisMonth''}";
//            $("#dWonThisMonthlistuldetails").append("<div class='swiper-slide '><div class='dlist'> <ul><li> <a href='detail.html' onclick=\"GETDealObject(" + _DealDetailObj + ")\"><h4>" + result.d[i].AccountName + "</h4><p>" + result.d[i].ProductCategory + "</p><span>" + result.d[i].DealValue + "</span> </a></li></ul></div></div>");
//            if (swiperNestedWonthisMonth != null) {
//                swiperNestedWonthisMonth.reInit();
//            }
//        }
//    }
//}


/////////////////////////////////////////New Funnel This Month///////////////////////////////////////////////////////

//function GetDealNewFunnelThisMonthList(pageIndex) {
//    try {
//        var _DealStatus = DealStatus;
//        var MethodName = "/GetDealList?dNewFunnellistuldetails";
//        var user = JSON.parse(localStorage.getItem('LoggedUserDetails'));
//        var _MobileCredential = MobileCredential;
//        _MobileCredential.MobileAppKeyId = user.MobileAppKeyId;
//        var Data = { pageIndex: pageIndex, pageSize: DealPageSize, filterPattern: "newdeals", orderByClause: "LeadDealId", userId: user.UserId, status: _DealStatus.Open, order: "ASC", Credential: _MobileCredential };
//        GetResultFromService(MethodName, Data);
//    } catch (exception) { }
//}

//function GetDealNewFunnelThisMonthListResult(result) {

//    var dealListtxtSearch = document.getElementById('dealListtxtSearch');
//    if (dealListtxtSearch != null) {
//        var search = $.trim(dealListtxtSearch.value)
//        if (search.length > 0) {
//            swiperNestedNewFunnelThisMonth.removeAllSlides();
//            $("#dNewFunnellistuldetails").empty();
//        }
//    }



//    if (swiperNestedNewFunnelThisMonth.slides.length == 0) {

//        if (result.d.length == 0) {
//            $("#dNewFunnellistuldetails").append("<div class='swiper-slide '><div class='dlist'> <ul><li> <a href='#' ><h4> No Record Found</h4> </a></li></ul></div></div>");
//            swiperNestedNewFunnelThisMonth.reInit();
//        }
//    }
//    if (result.d.length > 0) {
//        for (var i = 0; i < result.d.length; i++) {
//            var _DealDetailObj = "{'AccountId':'" + result.d[i].AccountId + "','AccountName':'" + result.d[i].AccountName + "','ProductCategory':'" + result.d[i].ProductCategory + "','ChanceId':'" + result.d[i].ChanceId + "','ForecastDate':'" + result.d[i].ForecastDate + "','BudgetValue':'" + result.d[i].BudgetValue + "','QuoteVSBudgetValue':'" + result.d[i].QuoteVSBudgetValue + "','QuoteValue':'" + result.d[i].QuoteValue + "','Dealid':'" + result.d[i].DealId + "','DealStatus':'" + result.d[i].DealStatus + "','ProductCategoryId':'" + result.d[i].ProductCategoryId + "','BudgetStageId':'" + result.d[i].BudgetStageId + "','SolutionRatingId':'" + result.d[i].SolutionRatingId + "','DealValue':'" + result.d[i].DealValue + "','LearningId':'" + result.d[i].LearningId + "','QuoteVSBudgetId':'" + result.d[i].QuoteVSBudgetId + "','Authority':'" + result.d[i].Authority + "','Budget':'" + result.d[i].Budget + "','Need':'" + result.d[i].Need + "','Time':'" + result.d[i].Time + "','QuoteDate':'" + result.d[i].QuoteDate + "','ComeFrom':'NewFunnelthismonth'}";
//            $("#dNewFunnellistuldetails").append("<div class='swiper-slide '><div class='dlist'> <ul><li> <a href='detail.html' onclick=\"GETDealObject(" + _DealDetailObj + ")\"><h4>" + result.d[i].AccountName + "</h4><p>" + result.d[i].ProductCategory + "</p><span>" + result.d[i].DealValue + "</span></a> </li></ul></div></div>");
//            if (swiperNestedNewFunnelThisMonth != null) {
//                swiperNestedNewFunnelThisMonth.reInit();
//            }
//        }
//    }

//}



///////////////////////////////////////////DealComment///////////////////////////////////////////////////////////////

function GetDealCommentList() {
    try {

        var MethodName = "/GetDealCommentsById";
        var user = JSON.parse(localStorage.getItem('LoggedUserDetails'));
        var DealObject = JSON.parse(localStorage.getItem('DealObject'));
        var _MobileCredential = MobileCredential;
        _MobileCredential.MobileAppKeyId = user.MobileAppKeyId;
        var Data = { DealId: DealObject.Dealid, searchtext: "", Credential: _MobileCredential };
        GetResultFromService(MethodName, Data);
    } catch (exception) { }
}

function LoadDealCommentsById(result) {

    if (swiperNestedDealComment.slides.length == 0) {
        if (result.d.length == 0) {
            $("#dCommentlistuldetails").append("<div class='swiper-slide '><div class='dlist'> <ul><li> <a href='#' ><h4> No Record Found </h4></a></li></ul></div></div>");
            swiperNestedDealComment.reInit();
        }
    }
    if (result.d.length > 0) {
        for (var i = 0; i < result.d.length; i++) {

            $("#dCommentlistuldetails").append("<div class='swiper-slide '><div class='dlist'> <ul><li><a><h4> " + result.d[i].Comment + "</h4><p>By " + result.d[i].CommentedByName + "</p></a></li></ul></div></div>");
            swiperNestedDealComment.reInit();
        }
    }
}

//On DealComment search text
var DealCommentListtxtSearch = document.getElementById('DealCommentListtxtSearch');
if (DealCommentListtxtSearch != null) {
    $("#DealCommentListtxtSearch").keyup(function () {
        try {

            var MethodName = "/GetDealCommentsById";
            var user = JSON.parse(localStorage.getItem('LoggedUserDetails'));
            var DealObject = JSON.parse(localStorage.getItem('DealObject'));
            var _MobileCredential = MobileCredential;
            _MobileCredential.MobileAppKeyId = user.MobileAppKeyId;
            var Data = { DealId: DealObject.Dealid, searchtext: $.trim(DealCommentListtxtSearch.value), Credential: _MobileCredential };
            GetResultFromService(MethodName, Data);
        } catch (exception) { }
    });

}



/////////////////////////////////////////////////////UpdateDeal////////////////////////////////////////////////////////////////
/*
function UpdateDeal() {
try {


var MethodName = "/UpdateDeal";

var user = JSON.parse(localStorage.getItem('LoggedUserDetails'));

var _MobileCredential = MobileCredential;
_MobileCredential.MobileAppKeyId = user.MobileAppKeyId;

var DealObject = JSON.parse(localStorage.getItem('DealObject'));
var _Deal = { DealId: DealObject.Dealid, DealStatus: DealObject.DealStatus, BudgetValue: $.trim(DealDetailstxtBudgetvalue.value), ForecastDate: convertToJSONDate($.trim(DealDetailstxtForecastDate.value)), SolutionRatingId: $('#DealDetailsddlSolutionPresented').val(), BudgetStageId: $('#DealDetailsddlBudgetStage').val(), ChanceId: $('#DealDetailsddlChance').val(), LastModifiedById: user.UserId, LearningId: DealObject.LearningId, QuoteVSBudgetId: DealObject.QuoteVSBudgetId }

var Data = { Deal: _Deal, userId: user.UserId, Credential: _MobileCredential };

GetResultFromService(MethodName, Data);
} catch (exception) { }

}
*/


function GetUpdateDealResult(result) {
    try {


        if (result.d > 0) {

            localStorage.removeItem('DealSaveSuccessfully');
            localStorage.setItem('DealSaveSuccessfully', JSON.stringify({
                DealSaveSuccessfully: 'DealSaveSuccessfully'
            }));
            //ShowMessage(LoadLabelsByLanguage.Updated);
        }
        else if (result.d == -1) {

            localStorage.removeItem('DealSaveSuccessfully');
            localStorage.setItem('DealSaveSuccessfully', JSON.stringify({
                DealSaveSuccessfully: 'DealNotSaveSuccessfully'
            }));
            //ShowMessage(LoadLabelsByLanguage.NotUpdated);
        }
        RedirectToPage();


    } catch (exception) { }
}



///////////////////////////////////////////////////Deal DashBoard//////////////////////////////////////////////////////////////

function GetDealDashBoard() {
    try {

        var DealObject = JSON.parse(localStorage.getItem('DealObject'));


        //To Load DashBoard Header Label

        //Progress Budget
        var DealDashboardProgressBudget = document.getElementById('DealDashboardProgressBudget');
        DealDashboardProgressBudget.value = DealObject.Budget;

        //Span Budget
        var DealDashboardSpanBudget = document.getElementById('DealDashboardSpanBudget');
        DealDashboardSpanBudget.innerHTML = DealObject.Budget;

        //Progress Authority
        var DealDashboardProgressAuthority = document.getElementById('DealDashboardProgressAuthority');
        DealDashboardProgressAuthority.value = DealObject.Authority;

        //Span Authority
        var DealDashboardSpanAuthority = document.getElementById('DealDashboardSpanAuthority');
        DealDashboardSpanAuthority.innerHTML = DealObject.Authority;

        //Progress Need
        var DealDashboardProgressNeed = document.getElementById('DealDashboardProgressNeed');
        DealDashboardProgressNeed.value = DealObject.Need;

        //Span Need
        var DealDashboardSpanNeed = document.getElementById('DealDashboardSpanNeed');
        DealDashboardSpanNeed.innerHTML = DealObject.Need;

        //Progress Time
        var DealDashboardProgressTime = document.getElementById('DealDashboardProgressTime');
        DealDashboardProgressTime.value = DealObject.Time;

        //Span Time
        var DealDashboardSpanTime = document.getElementById('DealDashboardSpanTime');
        DealDashboardSpanTime.innerHTML = DealObject.Time;

        //LoadDealDashboardlearningDDL
        // DealDashboardLoadLearningDDL();


        //DealDashBoardtxtQuoteValue
        var DealDashBoardtxtQuoteValue = document.getElementById('DealDashBoardtxtQuoteValue');
        DealDashBoardtxtQuoteValue.value = DealObject.QuoteValue;

        //LoadDealDashboardQuoteVSBudgetDDL
        //DealDashboardLoadQuoteVSBudgetDDL();

        //DealDashBoardtxtQuoteDate
        var DealDashBoardtxtQuoteDate = document.getElementById('DealDashBoardtxtQuoteDate');
        DealDashBoardtxtQuoteDate.value = convertJSONDateToReadableFormat(DealObject.QuoteDate);


    } catch (exception) { }

}

///////////////////////////////////////////////////Deal DecisionMaker//////////////////////////////////////////////////////////////

function GetDecisionMakerList() {
    try {


        var MethodName = "/GetContactsForPaticularDeal_WithTaskInformation";

        var DealObject = JSON.parse(localStorage.getItem('DealObject'));

        var user = JSON.parse(localStorage.getItem('LoggedUserDetails'));

        var _MobileCredential = MobileCredential;
        _MobileCredential.MobileAppKeyId = user.MobileAppKeyId;

        var Data = { DealId: DealObject.Dealid, Credential: _MobileCredential };

        GetResultFromService(MethodName, Data);
    } catch (exception) { }
}

function LoadContactsForPaticularDeal_WithTaskInformation(result) {


    localStorage.removeItem('GetDealDecisionMakerList');
    localStorage.setItem('GetDealDecisionMakerList', JSON.stringify({
        Result: result
    }));

    if (swiperNestedDealDecisionMaker.slides.length == 0) {
        if (result.d.length == 0) {
            $("#dDecisionMakerlistuldetails").append("<div class='swiper-slide '><div class='dlist'> <ul><li> <a href='#' ><h4> No Record Found </h4></a></li></ul></div></div>");
            swiperNestedDealDecisionMaker.reInit();
        }
    }
    if (result.d.length > 0) {
        for (var i = 0; i < result.d.length; i++) {
            var ReplacedContactRoleName = result.d[i].ContactRoleName.replace(/'/g, "\\'");
            var ReplacedContactName = result.d[i].ContactName.replace(/'/g, "\\'");
          
            var _DealDecisionMakerObject = "{'ContactId':'" + result.d[i].ContactId + "', 'ContactRoleName':'" + ReplacedContactRoleName + "' , 'ContactName':'" + ReplacedContactName + "', 'DealContactId':'" + result.d[i].DealContactId + "'}";

            $("#dDecisionMakerlistuldetails").append("<div class='swiper-slide '><div class='dlist'> <ul><li> <a href='../deal/Add_NewDecisionMaker.html' onclick=\"GETDealDecisionMakerObject(" + _DealDecisionMakerObject + ")\"><h4>" + result.d[i].ContactName + "</h4><p>" + result.d[i].ContactRoleName + "</p></a></li></ul></div></div>");
            swiperNestedDealDecisionMaker.reInit();
        }
    }

}

function GETDealDecisionMakerObject(Obj) {

    localStorage.removeItem('DecisionMakerObject');
    localStorage.setItem('DecisionMakerObject', JSON.stringify({
        ContactId: Obj.ContactId,
        ContactRoleName: Obj.ContactRoleName,
        ContactName: Obj.ContactName,
        DealContactId: Obj.DealContactId
    }));
}

$("#AddNewDealDetailstxtAccountName").focusout(function () {
    if ($(this).val() != '') {
        accountNameLst.length = 0;
        GetAccountIdByAccountName();
    }
});

//DealAddNewDealBtnSaveDeal 
var DealAddNewDealBtnSaveDeal = document.getElementById('DealAddNewDealBtnSaveDeal');
if (DealAddNewDealBtnSaveDeal != null) {
    DealAddNewDealBtnSaveDeal.addEventListener('click', function () {
        CreateNewDeal();


    }, false);
}


function GetActiveAccounts() {
    try {

        //                var MethodName = "/GetActiveAccounts";
        //                var user = JSON.parse(localStorage.getItem('LoggedUserDetails'));
        //                var _MobileCredential = MobileCredential;
        //                _MobileCredential.MobileAppKeyId = user.MobileAppKeyId;
        //                var Data = { userId: user.UserId, filter: '', Credential: _MobileCredential };
        //                GetResultFromService(MethodName, Data);
    } catch (exception) { }
}
var accountNameLst = new Array();

//On AddNewDealDetailstxtAccountName
var AddNewDealDetailstxtAccountName = document.getElementById('AddNewDealDetailstxtAccountName');
if (AddNewDealDetailstxtAccountName != null) {

    $("#AddNewDealDetailstxtAccountName").keyup(function () {
        try {

            if ($("#AddNewDealDetailstxtAccountName").val().length < 3) {

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

        $("#AddNewDealDetailstxtAccountName").autocomplete({
            source: accountNameLst
        });
        $("#AddNewDealDetailstxtAccountName").autocomplete("search", $("#AddNewDealDetailstxtAccountName").val());
        document.getElementById('divLoading').style.display = 'none';
    }
    catch (exception) { }
}
$('html').click(function () {
    var AddNewDealDetailstxtAccountName = document.getElementById('AddNewDealDetailstxtAccountName');
    if (AddNewDealDetailstxtAccountName != null) {
        if ($('.ui-autocomplete.ui-widget:visible').length == 1) {
            $("#AddNewDealDetailstxtAccountName").autocomplete("close");
        }
    }

});

//DealDetailsFooterSection
function CreateNewDeal() {
    try {

        if (ValidateDeal() == true) {
            var MethodName = "/InsertDealFrmPhoneApp";

            var _dealDetailsddlProductCategoryId = $('#DealDetailsddlProductCategory option:selected').val();
            if (_dealDetailsddlProductCategoryId == "")
                _dealDetailsddlProductCategoryId = 0.0;
            var _dealDetailsddlChance = $('#DealDetailsddlChance option:selected').val();
            // var _productId = $('#AddNewTaskDetailsddlProduct option:selected').val();
            var _dealDetailsddlBudgetStage = $('#DealDetailsddlBudgetStage option:selected').val();
            var _dealDetailsddlSolutionPresented = $('#DealDetailsddlSolutionPresented option:selected').val();
            if (_dealDetailsddlSolutionPresented == "")
                _dealDetailsddlSolutionPresented = 0.0;
            var _addNewDealDetailstxtBudgetvalue = $.trim($("#AddNewDealDetailstxtBudgetvalue").val());
            if (_addNewDealDetailstxtBudgetvalue == "")
                _addNewDealDetailstxtBudgetvalue = 0.0;
            var _addNewDealDetailstxtComments = $.trim($("#AddNewDealDetailstxtComments").val());
            var _forecastDate = $.trim($("#AddNewDealDetailstxtForecastDate").val());

            var user = JSON.parse(localStorage.getItem('LoggedUserDetails'));
            var ACCOUNT = JSON.parse(localStorage.getItem('GetAccountByNameDealObject'));

            var _Deal = { AccountId: ACCOUNT.Result.d.AccountId, CreatedById: user.UserId, SolutionRatingId: _dealDetailsddlSolutionPresented, BudgetStageId: _dealDetailsddlBudgetStage, ChanceId: _dealDetailsddlChance, ForecastDate: convertToJSONDateOnly(_forecastDate), BudgetValue: _addNewDealDetailstxtBudgetvalue }

            var _MobileCredential = MobileCredential;

            _MobileCredential.MobileAppKeyId = user.MobileAppKeyId;

            var Data = { Deal: _Deal, productCategoryId: _dealDetailsddlProductCategoryId, commets: _addNewDealDetailstxtComments, Credential: _MobileCredential };

            GetResultFromService(MethodName, Data);
        }
    } catch (exception) { }
}

function ValidateDeal() {
    var flag = true;
    var errorMsg = "";


    var GetAccountByNameDealObject = JSON.parse(localStorage.getItem('GetAccountByNameDealObject'));
    if ($.trim($("#AddNewDealDetailstxtAccountName").val()) == '') {
        errorMsg = errorMsg + "\n* " + LoadLabelsByLanguage.YoumustfillAccountName + "<br/>";
        flag = false;
    }
    else if ($.trim($("#AddNewDealDetailstxtAccountName").val()) != '' && GetAccountByNameDealObject != null) {
        if (GetAccountByNameDealObject.Result.d.AccountId == 0 || GetAccountByNameDealObject.Result.d.AccountId < 0) {
            errorMsg = errorMsg + "\n* " + LoadLabelsByLanguage.AccountNameDoesnotExists + "<br/>";
            flag = false;
        }
    }
    else if ($.trim($("#AddNewDealDetailstxtAccountName").val()) != '' && GetAccountByNameDealObject == null) {
        errorMsg = errorMsg + "\n* " + LoadLabelsByLanguage.AccountNameDoesnotExists + "<br/>";
        flag = false;

    }
    if (new Date($.trim($("#AddNewDealDetailstxtForecastDate").val())) < new Date(Today())) {

        errorMsg = errorMsg + "\n* " + LoadLabelsByLanguage.ForeCastDateMustBeGreaterThanAndEqualToCurrentDate + "<br/>";

        flag = false;
    }

    if ($('#DealDetailsddlProductCategory option:selected').val() == -1) {

        errorMsg = errorMsg + "\n* " + LoadLabelsByLanguage.PleaseSelectProductCategory + "<br/>";

        flag = false;
    }
    if (flag == false) {
        ShowMessage(errorMsg);
    }

    return flag;
}

function ValidateDealDetail() {
    var flag = true;
    var errorMsg = "";


    var GetAccountByNameDealObject = JSON.parse(localStorage.getItem('GetAccountByNameDealObject'));

    if ($.trim($("#DealDetailstxtAccountName").val()) == '') {
        errorMsg = errorMsg + "\n* " + LoadLabelsByLanguage.YoumustfillAccountName + "<br/>";
        flag = false;
    }

    if ($.trim($("#DealDetailstxtForecastDate").val()) == '') {
        errorMsg = errorMsg + "\n* " + LoadLabelsByLanguage.PleaseSelectForeCastDate + "<br/>";
        flag = false;
    }

    //    if (new Date($.trim($("#DealDetailstxtForecastDate").val())) < new Date(Today())) {

    //        errorMsg = errorMsg + "\n* " + LoadLabelsByLanguage.ForeCastDateMustBeGreaterThanAndEqualToCurrentDate + "<br/>";

    //        flag = false;
    //    }

    if ($('#DealDetailsddlProductCategory option:selected').val() == -1) {

        errorMsg = errorMsg + "\n* " + LoadLabelsByLanguage.PleaseSelectProductCategory + "<br/>";

        flag = false;
    }
    if (flag == false) {
        ShowMessage(errorMsg);
    }

    return flag;
}

function CreateNewDealResult(result) {
    try {

        if (result != null) {
            if (result.d > 0) {
                try {
                    GetDealbyId(result.d);
                    localStorage.removeItem('IsNewDeal');
                    localStorage.setItem('IsNewDeal', JSON.stringify({
                        IsNewDeal: true
                    }));
                    localStorage.removeItem('RedirectTo');
                    localStorage.setItem('RedirectTo', JSON.stringify({
                        RedirectTo: 'detail.html'
                    }));
                    localStorage.removeItem('DealSaved');
                    localStorage.setItem('DealSaved', JSON.stringify({
                        DealSaved: 'DealSaved'
                    }));
                } catch (exception) { }


            }
        }
    }
    catch (exception) { }
}

function GetDealbyId(Dealid) {
    try {

        var MethodName = "/GetDealById";
        var user = JSON.parse(localStorage.getItem('LoggedUserDetails'));
        var _MobileCredential = MobileCredential;
        _MobileCredential.MobileAppKeyId = user.MobileAppKeyId;
        var Data = { DealId: Dealid, Credential: _MobileCredential };
        GetResultFromService(MethodName, Data);
    } catch (exception) { }
}

function GetDealByIdResult(result) {
    try {

        var _comefrom;
        var IsNewDeal = JSON.parse(localStorage.getItem('IsNewDeal'));
        if (IsNewDeal != null) {
            if (IsNewDeal.IsNewDeal == true) {
                localStorage.removeItem('IsNewDeal');
                //_comefrom = 'Prospect';
            }
        }
        else {
            var DealObject = JSON.parse(localStorage.getItem('DealObject'));
            if (DealObject != null) {
                _comefrom = DealObject.ComeFrom;
            }
        }

        //LiveStaus
        if (result != null) {
            if (_comefrom == '' || _comefrom == null) {
                switch (result.d.LiveStaus) {
                    case 'Investigate': _comefrom = 'Investigation';
                        break;
                    case 'Presentation': _comefrom = 'Presentation';
                        break;
                    case 'Prospecting': _comefrom = 'Prospect';
                        break;
                    case 'Opportunity': _comefrom = 'Opportunity';
                        break;
                }
            }
            var DealObject = { AccountId: result.d.AccountId, AccountName: result.d.AccountName, ProductCategory: result.d.ProductCategoryId, ChanceId: result.d.ChanceId, ForecastDate: result.d.ForecastDate, BudgetValue: result.d.BudgetValue, QuoteVSBudgetValue: result.d.QuoteVSBudgetValue, QuoteValue: result.d.QuoteValue, Dealid: result.d.DealId, DealStatus: result.d.DealStatus, ProductCategoryId: result.d.ProductCategoryId, BudgetStageId: result.d.BudgetStageId, SolutionRatingId: result.d.SolutionRatingId, DealValue: result.d.DealValue, LearningId: result.d.LearningId, QuoteVSBudgetId: result.d.QuoteVSBudgetId, Budget: result.d.Budget, Authority: result.d.Authority, Need: result.d.Need, Time: result.d.Time, QuoteDate: result.d.QuoteDate, ComeFrom: _comefrom }
            GETDealObject(DealObject);
            RedirectToPage();


            //ShowMessage(LoadLabelsByLanguage.Saved);
        }
    } catch (exception) { }
}

function GetAccountIdByAccountName() {
    try {
        var divloading = document.getElementById('divLoading');
        if (divloading != null) {
            document.getElementById('divLoading').style.display = 'block';
        }

        CheckIsActiveAccount();
    } catch (exception) { }
}

function CheckIsActiveAccount() {
    try {
        var MethodName = "/GetActiveAccounts?CheckIsActiveAccount";
        var user = JSON.parse(localStorage.getItem('LoggedUserDetails'));
        var _MobileCredential = MobileCredential;
        _MobileCredential.MobileAppKeyId = user.MobileAppKeyId;
        var Data = { userId: user.UserId, filter: $("#AddNewDealDetailstxtAccountName").val(), Credential: _MobileCredential };
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

            var _accountName = $.trim($("#AddNewDealDetailstxtAccountName").val());

            var Data = { AccountName: _accountName, Credential: _MobileCredential };
            GetResultFromService(MethodName, Data);
        }
    }
    var divloading = document.getElementById('divLoading');
    if (divloading != null) {
        document.getElementById('divLoading').style.display = 'none';
    }


}
function GetAccountByNameResult(result) {
    try {

        if (result.d != null) {
            localStorage.removeItem('GetAccountByNameDealObject');
            localStorage.setItem('GetAccountByNameDealObject', JSON.stringify({
                Result: result
            }));
        }
        var divloading = document.getElementById('divLoading');
        if (divloading != null) {
            document.getElementById('divLoading').style.display = 'none';
        }
    }
    catch (exception) { }
}

function GETSelectedDecisionmakerContact(Obj) {
    try {

        localStorage.removeItem('SelectedDealDecisionMakerContactId');
        localStorage.setItem('SelectedDealDecisionMakerContactId', JSON.stringify({
            ContactId: Obj.ContactId
        }));
    }
    catch (exception) { }
}


function BindDecisionmakerRoleDDL() {
    var _RoleObj = JSON.parse(localStorage.getItem('DealContactRolesDDL'));

    if (_RoleObj == null) {
        GetDecisionmakerRole();
    }
    else {
        LoadDecisionmakerRole();
    }

}
function LoadContactOrAccount() {

    try {
        var SaleswahCrmlitePageURL = JSON.parse(localStorage.getItem('SaleswahCrmlitePageURL'));
        if (SaleswahCrmlitePageURL != null) {
            if (SaleswahCrmlitePageURL.URL == 'Contacts_detail_html') {
                localStorage.removeItem('SaleswahCrmlitePageURL');

                var ContactObject = JSON.parse(localStorage.getItem('ContactObject'));

                $('#AddNewDealDetailstxtAccountName').val(ContactObject.AccountName);
                $('#AddNewDealDetailstxtAccountName').attr('readonly', 'true');
                //localStorage.removeItem('ContactObject');
                GetAccountIdByAccountName();

            }
            else {

                var AccountObject = JSON.parse(localStorage.getItem('AccountObject'));

                $('#AddNewDealDetailstxtAccountName').val(AccountObject.AccountName);
                $('#AddNewDealDetailstxtAccountName').attr('readonly', 'true');
                localStorage.removeItem('SaleswahCrmlitePageURL');
                GetAccountIdByAccountName();

            }
        }
    }
    catch (e) { }
}

//*******************************************************************************************************************Decision Maker***************************

//Add & Update Decison Maker... 
var DealDecisionMakerFooterAddNewDecisionMaker = document.getElementById('DealDecisionMakerFooterAddNewDecisionMaker');
if (DealDecisionMakerFooterAddNewDecisionMaker != null) {
    DealDecisionMakerFooterAddNewDecisionMaker.addEventListener('click', function () {

        var DecisionMakerObject = JSON.parse(localStorage.getItem('DecisionMakerObject'));
        if (DecisionMakerObject != null) {
            localStorage.removeItem('SelectedDealDecisionMakerContactId');
            localStorage.setItem('SelectedDealDecisionMakerContactId', JSON.stringify({
                ContactId: DecisionMakerObject.DealContactId
            }));
        }

        if (validateAddDecisionMaker() == true) {

            var DecisionMakerObject = JSON.parse(localStorage.getItem('DecisionMakerObject'));

            if (DecisionMakerObject == null)
                AddDecisionMakers();
            else
                UpdateDecisionMakers();
        }

    }, false);
}

//Delete Decison Maker...
var DealDecisionMakerFooterDeleteDecisionMaker = document.getElementById('DealDecisionMakerFooterDeleteDecisionMaker');
if (DealDecisionMakerFooterDeleteDecisionMaker != null) {
    DealDecisionMakerFooterDeleteDecisionMaker.addEventListener('click', function () {

        var DecisionMakerObject = JSON.parse(localStorage.getItem('DecisionMakerObject'));
        if (DecisionMakerObject != null) {
            DeleteDecisionMakers();
        }

    }, false);
}

//Delete Decision Makers
function DeleteDecisionMakers() {
    try {

        var DecisionMakerObject = JSON.parse(localStorage.getItem('DecisionMakerObject'));
        var MethodName = "/DeleteDecisionMaker";
        var user = JSON.parse(localStorage.getItem('LoggedUserDetails'));

        var _MobileCredential = MobileCredential;
        _MobileCredential.MobileAppKeyId = user.MobileAppKeyId;

        var Data = { DealContactId: DecisionMakerObject.DealContactId, Credential: _MobileCredential };

        GetResultFromService(MethodName, Data);

        localStorage.removeItem('RedirectTo');
        localStorage.setItem('RedirectTo', JSON.stringify({
            RedirectTo: '../deal/detail.html'
        }));

    } catch (exception) { }
}

function DeleteDecisionMakerResult(result) {
    if (result != null) {
        if (result.d > 0) {

            // alert('Updated');
            localStorage.removeItem('DeleteDecisionMakerResultSuccessfully');
            localStorage.setItem('DeleteDecisionMakerResultSuccessfully', JSON.stringify({
                DecisionmakerRoleUpdatedSuccessfully: 'DeleteDecisionMakerResultSuccessfully'
            }));
            var DealObject = JSON.parse(localStorage.getItem('DealObject'));
            GetDealbyId(DealObject.Dealid);
            // RedirectToPage();
        }
    }
}

//Update Decision Makers...
function UpdateDecisionMakers() {
    try {
        var DecisionMakerObject = JSON.parse(localStorage.getItem('DecisionMakerObject'));
        var MethodName = "/UpdateDecisionMakerRole";
        var user = JSON.parse(localStorage.getItem('LoggedUserDetails'));

        var _MobileCredential = MobileCredential;
        _MobileCredential.MobileAppKeyId = user.MobileAppKeyId;

        var Data = { DealContactId: DecisionMakerObject.DealContactId, ContactRoleId: $('#DealDecisionMakerContactRoleddlRole').val(), Credential: _MobileCredential };

        GetResultFromService(MethodName, Data);

        localStorage.removeItem('RedirectTo');
        localStorage.setItem('RedirectTo', JSON.stringify({
            RedirectTo: '../deal/detail.html'
        }));

    } catch (exception) { }

    //    UpdateDecisionMakerRoleAsync(DealContactId, contactRoleId, AppSetting.MobileApiCredential);
}


function UpdateDecisionMakerRoleResult(result) {
    if (result != null) {
        if (result.d > 0) {
            // alert('Updated');
            localStorage.removeItem('DecisionmakerRoleUpdatedSuccessfully');
            localStorage.setItem('DecisionmakerRoleUpdatedSuccessfully', JSON.stringify({
                DecisionmakerRoleUpdatedSuccessfully: 'DecisionmakerRoleUpdatedSuccessfully'
            }));
            var DealObject = JSON.parse(localStorage.getItem('DealObject'));
            GetDealbyId(DealObject.Dealid);
            // RedirectToPage();
        }
    }
}

function LoadDealDecisionMakerList() {
    try {

        var DecisionMakerObject = JSON.parse(localStorage.getItem('DecisionMakerObject'));
        var DealObject = JSON.parse(localStorage.getItem('DealObject'));

        if (DecisionMakerObject == null) {
            var MethodName = "/GetContactsByAccountForAddDecisionmaker";
            var user = JSON.parse(localStorage.getItem('LoggedUserDetails'));
            var _MobileCredential = MobileCredential;
            _MobileCredential.MobileAppKeyId = user.MobileAppKeyId;
            var Data = { DealId: DealObject.Dealid, Credential: _MobileCredential };
            GetResultFromService(MethodName, Data);
            $("#DealDecisionMakerFooterDeleteDecisionMaker").hide();
        }
        else {
            LoadDecisionMakerForUpdate(DecisionMakerObject);
            $("#DealDecisionMakerFooterDeleteDecisionMaker").show();
        }
    } catch (exception) { }

}

function LoadDecisionMakerForUpdate(lstFreeContacts) {

    var DealObject = JSON.parse(localStorage.getItem('DealObject'));
    $("#dealDecisionMakerulContactList").append("<div class='swiper-slide'><div class='dlist'><ul><li> <a href='#'><h4>" + lstFreeContacts.ContactName + "</h4><p>" + DealObject.AccountName + "</p></a> </li></ul></div></div>");
    if (swiperNestedDecisionMakersContactList != null) {
        swiperNestedDecisionMakersContactList.reInit();
    }
    if (swiperNestedDecisionMakersContactList == null) {
        LoadDealDetailSlider();
    }

}

function GetContactsByAccountForAddDecisionmakerResult(result) {

    var lstFreeContacts = new Array();
    var GetDealDecisionMakerList = JSON.parse(localStorage.getItem('GetDealDecisionMakerList'));
    if (GetDealDecisionMakerList != null) {

        for (var i = 0; i < result.d.length; i++) {
            var flag = false;
            for (var j = 0; j < GetDealDecisionMakerList.Result.d.length; j++) {
                if (result.d[i].Id == GetDealDecisionMakerList.Result.d[j].ContactId) {
                    flag = true;
                }
            }
            if (flag == false) {
                lstFreeContacts.push(GetDealDecisionMakerList.Result.d[i]);
            }

        }

    }
    else {
        for (var i = 0; i < result.d.length; i++) {
            lstFreeContacts.push(result.d[i]);
        }
    }

    if (swiperNestedDecisionMakersContactList == null) {

        if (lstFreeContacts.length == 0) {
            $("#dealDecisionMakerulContactList").append("<div class='swiper-slide'><div class='dlist'> <ul><li > <a href='#' ><h4> No Record Found </h4></a></li></ul></div></div>");
        }
    }



    if (lstFreeContacts.length > 0) {
        for (var i = 0; i < result.d.length; i++) {
            var _DealDetailObj = "{'ContactId':'" + result.d[i].Id + "'}";
            $("#dealDecisionMakerulContactList").append("<div class='swiper-slide'><div class='dlist'><ul><li> <a href='#' onclick=\"GETSelectedDecisionmakerContact(" + _DealDetailObj + ")\"><h4>" + result.d[i].FullName + "</h4><p>" + result.d[i].AccountName + "</p></a> </li></ul></div></div>");
            if (swiperNestedDecisionMakersContactList != null) {
                swiperNestedDecisionMakersContactList.reInit();
            }

            $(".dlist").click(function () {
                $('#dealDecisionMakerulContactList').each(function () {
                    $(".swiper-slide").each(function () {
                        $(".dlist").removeClass('selected');
                    });
                });

                $(this).addClass('selected');

            });
        }
    }
    if (swiperNestedDecisionMakersContactList == null) {
        LoadDealDetailSlider();
    }

}

//GetDealContactRoles
function GetDecisionmakerRole() {
    try {

        var MethodName = "/GetDealContactRoles";

        var user = JSON.parse(localStorage.getItem('LoggedUserDetails'));

        var _MobileCredential = MobileCredential;
        _MobileCredential.MobileAppKeyId = user.MobileAppKeyId;

        var Data = { Credential: _MobileCredential };

        GetResultFromService(MethodName, Data);
    } catch (exception) { }
}


//Bind GetAllProductCategoryList result
function SetDealContactRoles(result) {
    try {

        localStorage.removeItem('DealContactRolesDDL');
        localStorage.setItem('DealContactRolesDDL', JSON.stringify({
            Result: result
        }));
        LoadDecisionmakerRole();
    }
    catch (exception) { }
}

//Load DropDown Only OnPageLoad
function LoadDecisionmakerRole() {
    try {

        var DealDecisionMakerContactRoleddlRole = document.getElementById('DealDecisionMakerContactRoleddlRole');
        var DealContactRolesDDL = JSON.parse(localStorage.getItem('DealContactRolesDDL'));
        $("#DealDecisionMakerContactRoleddlRole").empty();

        if (DealContactRolesDDL.Result.d.length > 0) {
            for (var i = 0; i < DealContactRolesDDL.Result.d.length; i++) {
                var option = document.createElement("option");
                option.text = DealContactRolesDDL.Result.d[i].value;
                option.value = DealContactRolesDDL.Result.d[i].key;
                DealDecisionMakerContactRoleddlRole.add(option, null);
            }
        }

        var DecisionMakerObject = JSON.parse(localStorage.getItem('DecisionMakerObject'));
        var SetValue = -1;
        if (DecisionMakerObject != null) {
            for (var i = 0; i < DealContactRolesDDL.Result.d.length; i++) {
                if (DecisionMakerObject.ContactRoleName == DealContactRolesDDL.Result.d[i].value) {
                    SetValue = i;
                    break;
                }
            }
        }

        $("#DealDecisionMakerContactRoleddlRole").val(SetValue);

    } catch (exception) { }
}

function validateAddDecisionMaker() {
    var flag = true;
    var errorMsg = "";

    var SelectedDealDecisionMakerContactId = JSON.parse(localStorage.getItem('SelectedDealDecisionMakerContactId'));
    if (SelectedDealDecisionMakerContactId == null || SelectedDealDecisionMakerContactId.ContactId == null) {
        errorMsg = errorMsg + "\n* " + LoadLabelsByLanguage.PleaseSelectContactToAddAsADecisionMaker + "<br/>";

        flag = false;
    }



    if ($('#DealDecisionMakerContactRoleddlRole option:selected').val() == -1) {

        errorMsg = errorMsg + "\n* " + LoadLabelsByLanguage.PleaseselectRoleofDecisionMaker + "<br/>";

        flag = false;
    }
    if (flag == false) {
        ShowMessage(errorMsg);
    }

    return flag;
}

function AddDecisionMakers() {
    try {

        var DealObject = JSON.parse(localStorage.getItem('DealObject'));
        var SelectedDealDecisionMakerContactId = JSON.parse(localStorage.getItem('SelectedDealDecisionMakerContactId'));
        var MethodName = "/AddDecisionmaker";

        var user = JSON.parse(localStorage.getItem('LoggedUserDetails'));

        var _MobileCredential = MobileCredential;
        _MobileCredential.MobileAppKeyId = user.MobileAppKeyId;

        var Data = { DealId: DealObject.Dealid, ContactID: SelectedDealDecisionMakerContactId.ContactId, RoleID: $('#DealDecisionMakerContactRoleddlRole').val(), Credential: _MobileCredential };

        GetResultFromService(MethodName, Data);

        localStorage.removeItem('RedirectTo');
        localStorage.setItem('RedirectTo', JSON.stringify({
            RedirectTo: '../deal/detail.html'
        }));
    } catch (exception) { }
}

function AddDecisionmakerResult(result) {

    var DealObject = JSON.parse(localStorage.getItem('DealObject'));
    if (result != null) {
        if (result.d == false) {
            localStorage.removeItem('DecisionmakerSaveSuccessfully');
            localStorage.setItem('DecisionmakerSaveSuccessfully', JSON.stringify({
                DecisionmakerSaveSuccessfully: 'DecisionmakernotSaveSuccessfully'
            }));
        }
        else if (result.d == true) {
            localStorage.removeItem('DecisionmakerSaveSuccessfully');
            localStorage.setItem('DecisionmakerSaveSuccessfully', JSON.stringify({
                DecisionmakerSaveSuccessfully: 'DecisionmakerSaveSuccessfully'
            }));
        }

        GetDealbyId(DealObject.Dealid);
        //RedirectToPage();
    }

}

//*******************************************************************************************************************Decision Maker***************************


//var swiperNestedFunnel;
var swiperNestedinvestigation;
var swiperNestedPresentation;
var swiperNestedProspect;
var swiperNestedOpportunity;
//var swiperNestedForeCast;
//var swiperNestedWonthisMonth;
//var swiperNestedNewFunnelThisMonth;
var swiperParent;
var pageIndexinvestigation;
var pageIndexPresentation;
var pageIndexProspect;
//var pageIndexForeCast;
//var pageIndexFunnel;
var pageIndexOpportunity;
//var pageIndexWonthisMonth;
//var pageIndexNewFunnelThisMonth;

function LoadDealSlider() {

    //var mySwiper = new Swiper('.swiper-container', {
    //    pagination: '.pagination',
    //    paginationClickable: true,
    //})

    swiperParent = new Swiper('.swiper-parent', {
        paginationClickable: true,
        onSlideChangeStart: function () {
            //dealListtxtSearch
            $('#dealListtxtSearch').val("");
            var dots = [".invest_nav1", ".invest_nav2", ".invest_nav3", ".invest_nav1_1", ".invest_nav2_1", ".invest_nav3_1", ".invest_nav1_3", ".invest_nav2_3"];
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
            var headingText = $(SetBgColorToDiv).text();
            $('.hedmid').text(headingText);

        },
        slidesPerView: 1
    })



    //swiperNestedinvestigation

    if (pageIndexinvestigation == null) {
        pageIndexinvestigation = 1;
    }

    swiperNestedinvestigation = new Swiper('.swiper-nested-investigation', {
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
                pageIndexinvestigation++;
                swiperNestedinvestigation.params.onlyExternal = true
                GetDealinvestigationList(pageIndexinvestigation);
                swiperNestedinvestigation.params.onlyExternal = false;

            }
        }
    })

    //swiperNestedPresentation

    if (pageIndexPresentation == null) {
        pageIndexPresentation = 1;
    }
    swiperNestedPresentation = new Swiper('.swiper-nested-Presentation', {
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
                pageIndexPresentation++;
                swiperNestedPresentation.params.onlyExternal = true
                GetDealPresentationList(pageIndexPresentation);
                swiperNestedPresentation.params.onlyExternal = false;

            }
        }
    })

    //swiperNestedProspect

    if (pageIndexProspect == null) {
        pageIndexProspect = 1;
    }
    swiperNestedProspect = new Swiper('.swiper-nested-Prospect', {
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
                pageIndexProspect++;
                swiperNestedProspect.params.onlyExternal = true
                GetDealProspectList(pageIndexProspect);
                swiperNestedProspect.params.onlyExternal = false;

                //                $("#dProspectlistuldetails").append("<div class='swiper-slide'><div class='dlist'> <ul><li><h4> <a href='detail.html' >11111</a></h4><p>2222</p><span>3333</span> </li></ul></div></div>");
                //                swiperNestedProspect.reInit();
            }
        }
    })

    //    //swiperNestedForeCast

    //    if (pageIndexForeCast == null) {
    //        pageIndexForeCast = 2;
    //    }
    //    swiperNestedForeCast = new Swiper('.swiper-nested-ForeCast', {
    //        mode: 'vertical',

    //        paginationClickable: true,
    //        slidesPerView: RowsPerView,
    //        watchActiveIndex: true,
    //        onTouchStart: function () {
    //            holdPosition = 0;
    //        },
    //        onResistanceAfter: function (s, pos) {
    //            holdPosition = pos;
    //        },
    //        onTouchEnd: function () {
    //            if (holdPosition > 100) {
    //                swiperNestedForeCast.params.onlyExternal = true
    //                GetDealForeCastList(pageIndexForeCast);
    //                swiperNestedForeCast.params.onlyExternal = false;
    //                pageIndexForeCast++;
    //            }
    //        }
    //    })

    //    //swiperNestedFunnel

    //    if (pageIndexFunnel == null) {
    //        pageIndexFunnel = 2;
    //    }
    //    swiperNestedFunnel = new Swiper('.swiper-nested-Funnel', {
    //        mode: 'vertical',

    //        paginationClickable: true,
    //        slidesPerView: RowsPerView,
    //        watchActiveIndex: true,
    //        onTouchStart: function () {
    //            holdPosition = 0;
    //        },

    //        onResistanceAfter: function (s, pos) {
    //            holdPosition = pos;

    //        },
    //        onTouchEnd: function () {

    //            if (holdPosition > 100) {
    //                swiperNestedFunnel.params.onlyExternal = true
    //                GetDealFunnelList(pageIndexFunnel);
    //                swiperNestedFunnel.params.onlyExternal = false;
    //                pageIndexFunnel++;
    //            }

    //        }
    //    })

    //swiperNestedOpportunity

    if (pageIndexOpportunity == null) {
        pageIndexOpportunity = 1;
    }
    swiperNestedOpportunity = new Swiper('.swiper-nested-Opportunity', {
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
                pageIndexOpportunity++;
                swiperNestedOpportunity.params.onlyExternal = true
                GetDealOpportunityList(pageIndexOpportunity);
                swiperNestedOpportunity.params.onlyExternal = false;

            }
        }
    })

    //    //swiperNestedWonthisMonth

    //    if (pageIndexWonthisMonth == null) {
    //        pageIndexWonthisMonth = 2;
    //    }
    //    swiperNestedWonthisMonth = new Swiper('.swiper-nested-WonthisMonth', {
    //        mode: 'vertical',

    //        paginationClickable: true,
    //        slidesPerView: RowsPerView,
    //        watchActiveIndex: true,
    //        onTouchStart: function () {
    //            holdPosition = 0;
    //        },
    //        onResistanceAfter: function (s, pos) {
    //            holdPosition = pos;
    //        },
    //        onTouchEnd: function () {
    //            if (holdPosition > 100) {
    //                swiperNestedWonthisMonth.params.onlyExternal = true
    //                GetDealWonThisMonthList(pageIndexWonthisMonth);
    //                swiperNestedWonthisMonth.params.onlyExternal = false;
    //                pageIndexWonthisMonth++;
    //            }
    //        }
    //    })

    //    //swiperNestedNewFunnelThisMonth

    //    if (pageIndexNewFunnelThisMonth == null) {
    //        pageIndexNewFunnelThisMonth = 2;
    //    }
    //    swiperNestedNewFunnelThisMonth = new Swiper('.swiper-nested-NewFunnelThisMonth', {
    //        mode: 'vertical',

    //        paginationClickable: true,
    //        slidesPerView: RowsPerView,
    //        watchActiveIndex: true,
    //        onTouchStart: function () {
    //            holdPosition = 0;
    //        },
    //        onResistanceAfter: function (s, pos) {
    //            holdPosition = pos;
    //        },
    //        onTouchEnd: function () {
    //            if (holdPosition > 100) {
    //                swiperNestedNewFunnelThisMonth.params.onlyExternal = true
    //                GetDealNewFunnelThisMonthList(pageIndexNewFunnelThisMonth);
    //                swiperNestedNewFunnelThisMonth.params.onlyExternal = false;
    //                pageIndexNewFunnelThisMonth++;
    //            }
    //        }
    //    })

    //    GetAllProductCategory();

    //    GetAllBudgetStage();

    //    GetAllSolutionRatings();

    //    GetLearnings();

    //    GetAllDealStatus();

    //    GetChanceDDlValues();

    //    GetQuoteVSBudgetValues();


}

var swiperNestedDealDecisionMaker;
var swiperNestedDealComment;
var swiperNestedDecisionMakersContactList;

function LoadDealDetailSlider() {

    swiperParent = new Swiper('.swiper-parent', {
        paginationClickable: true,
        onSlideChangeStart: function () {
            var dots = [".detail_nav1", ".detail_nav2", ".detail_nav3", ".detail_nav1_1"];
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
    var swiperNesteddealDetail = new Swiper('.swiper-nested-dealDetail', {
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

                swiperNesteddealDetail.setWrapperTranslate(0, 0, 0)


                swiperNesteddealDetail.params.onlyExternal = false
            }
        }
    })

    var swiperNestedDealDashBoard = new Swiper('.swiper-nested-DealDashBoard', {
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

                swiperNestedDealDashBoard.setWrapperTranslate(0, 0, 0)


                swiperNestedDealDashBoard.params.onlyExternal = false
            }
        }
    })

    //swiperNestedDealDecisionMaker
    swiperNestedDealDecisionMaker = new Swiper('.swiper-nested-DealDecisionMaker', {
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

                swiperNestedDealDecisionMaker.setWrapperTranslate(0, 0, 0)


                swiperNestedDealDecisionMaker.params.onlyExternal = false
            }
        }
    })

    //swiperNestedDealComment
    swiperNestedDealComment = new Swiper('.swiper-nested-DealComment', {
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

                swiperNestedDealComment.setWrapperTranslate(0, 0, 0)


                swiperNestedDealComment.params.onlyExternal = false
            }
        }
    })

    swiperNestedDecisionMakersContactList = new Swiper('.swiper-nested-DecisionMakersContactList', {
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

                swiperNestedDecisionMakersContactList.setWrapperTranslate(0, 0, 0)


                swiperNestedDecisionMakersContactList.params.onlyExternal = false
            }
        }
    })
}





function bindDDL() {
    //var DecisionmakerSaveSuccessfully = JSON.parse(localStorage.getItem('DecisionmakerSaveSuccessfully'));

    var DealProductCategoryDDL = JSON.parse(localStorage.getItem('DealProductCategoryDDL'));
    var DealBudgetStageDDL = JSON.parse(localStorage.getItem('DealBudgetStageDDL'));
    var DealSolutionPresentedDDL = JSON.parse(localStorage.getItem('DealSolutionPresentedDDL'));
    var DealLearningDDL = JSON.parse(localStorage.getItem('DealLearningDDL'));
    var DealStatusDDL = JSON.parse(localStorage.getItem('DealStatusDDL'));
    var DealChanceDDL = JSON.parse(localStorage.getItem('DealChanceDDL'));
    var DealQuoteVSBudgetDDL = JSON.parse(localStorage.getItem('DealQuoteVSBudgetDDL'));


    //ProductCategory
    if (DealProductCategoryDDL == null) {
        GetAllProductCategory();
    }
    else
        LoadProductCategoryDDL();

    //BudgetStage
    if (DealBudgetStageDDL == null) {
        GetAllBudgetStage();
    }
    else
        LoadBudgetStageList();

    //Solutionpresented
    if (DealSolutionPresentedDDL == null) {
        GetAllSolutionRatings();
    }
    else
        LoadSolutionPresentedDDl();

    //Learning
    if (DealLearningDDL == null) {
        GetLearnings();
    }
    else
        DealDashboardLoadLearningDDL();

    //DealStatus
    if (DealStatusDDL == null) {
        GetAllDealStatus();
    }
    else
        LoadAllDealStatus();

    //Chance
    if (DealChanceDDL == null) {
        GetChanceDDlValues();
    }
    else
        LoadChanceDropDown();

    //QuoteVSBudget
    if (DealQuoteVSBudgetDDL == null) {
        GetQuoteVSBudgetValues();
    }
    else
        DealDashboardLoadQuoteVSBudgetDDL();

}

var AddNewDealDetailsImgAccountNameClick = document.getElementById('AddNewDealDetailsImgAccountNameClick');
if (AddNewDealDetailsImgAccountNameClick != null) {

    $("#AddNewDealDetailsImgAccountNameClick").on("click", function () {

        document.getElementById('divLoading').style.display = 'block';

        var MethodName = "/GetActiveAccounts";
        var user = JSON.parse(localStorage.getItem('LoggedUserDetails'));
        var _MobileCredential = MobileCredential;
        _MobileCredential.MobileAppKeyId = user.MobileAppKeyId;
        var Data = { userId: user.UserId, filter: $("#AddNewDealDetailstxtAccountName").val(), Credential: _MobileCredential };
        GetResultFromService(MethodName, Data);

        // $("#AddNewDealDetailstxtAccountName").autocomplete("search", $("#AddNewDealDetailstxtAccountName").val());

    });

}