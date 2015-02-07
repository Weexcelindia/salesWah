//Facebook account
//Google account
var LoadLabelsByLanguage = JSON.parse(localStorage.getItem('LoadLabelsByLanguage'));
//var _MobileCredential = { MobileAppKeyId: "Data Source=anweshaserver;initial Catalog=SaleswahAdmin;User ID=sa;Password=sa123" };
var _MobileCredential = { MobileAppKeyId: "Data Source=localhost;initial Catalog=SaleswahAdmin;User ID=sa;Password=SQL99!" };

function LoadLabelOfRegister() {
    var LoadLabelsByLanguage = JSON.parse(localStorage.getItem('LoadLabelsByLanguage'));
    var RegisterH1TryAllFeatures = document.getElementById('RegisterH1TryAllFeatures');
    if (RegisterH1TryAllFeatures != null)
        RegisterH1TryAllFeatures.innerHTML = LoadLabelsByLanguage.TryallFeatursofSaleshwahCRMfor30days;

    var RegisterH2KeepItFree = document.getElementById('RegisterH2KeepItFree');
    if (RegisterH2KeepItFree != null)
        RegisterH2KeepItFree.innerHTML = LoadLabelsByLanguage.KeepitfreeforeverandyourdataontheBasicPlan;

    var RegisterFooterIfYourBusiness = document.getElementById('RegisterFooterIfYourBusiness');
    if (RegisterFooterIfYourBusiness != null)
        RegisterFooterIfYourBusiness.innerHTML = LoadLabelsByLanguage.IfyourbusinessissellingtootherbusinessesyougottogetSaleswahCRM;

    var btnRegisterSignIn = document.getElementById('btnRegisterSignIn');
    if (btnRegisterSignIn != null)
        btnRegisterSignIn.value = LoadLabelsByLanguage.GetStarted;

    var RegisterfbLogin = document.getElementById('RegisterfbLogin');
    if (RegisterfbLogin != null)
        RegisterfbLogin.value = LoadLabelsByLanguage.SigninwithFacebook;

    var Registergooglelogin = document.getElementById('Registergooglelogin');
    if (Registergooglelogin != null)
        Registergooglelogin.value = LoadLabelsByLanguage.SigninwithGoogle;

    var RegisterbtnLinkedinSignin = document.getElementById('RegisterbtnLinkedinSignin');
    if (RegisterbtnLinkedinSignin != null)
        RegisterbtnLinkedinSignin.value = LoadLabelsByLanguage.SigninwithLinkedin;

    var RegisterloginWithMS = document.getElementById('RegisterloginWithMS');
    if (RegisterloginWithMS != null) {
        RegisterloginWithMS.value = LoadLabelsByLanguage.SigninwithMicrosoft;
    }

     
    var RegisterBackToSignIn = document.getElementById('RegisterBackToSignIn');
    if (RegisterBackToSignIn != null) {
        RegisterBackToSignIn.innerHTML = LoadLabelsByLanguage.RegisterBacktoSignin;
        
    }
}

var RegisterBackToSignIn = document.getElementById('RegisterBackToSignIn');
if (RegisterBackToSignIn != null) {
    RegisterBackToSignIn.addEventListener('click', function () {

        window.location.replace('Login.html');
    }, false);
}

var _registeredthrough='';
//Registergooglelogin 
var Registergooglelogin = document.getElementById('Registergooglelogin');
if (Registergooglelogin != null) {
    Registergooglelogin.addEventListener('click', function () {
        _registeredthrough = 'Google account';
       
        callGoogle();
    }, false);
}

//RegisterfbLogin 
var RegisterfbLogin = document.getElementById('RegisterfbLogin');
if (RegisterfbLogin != null) {
    RegisterfbLogin.addEventListener('click', function () {
       
        _registeredthrough = 'Facebook account';
        login();
    }, false);
}

//btnRegisterSignIn 
var btnRegisterSignIn = document.getElementById('btnRegisterSignIn');
if (btnRegisterSignIn != null) {
    btnRegisterSignIn.addEventListener('click', function () {
        $('#btnRegisterSignIn').attr('disabled', 'disabled');
        
        ClientRegister();
    }, false);
}

//RegisterfbLogin
//GetCountrylistforRegisterpPage
function GetCountrylistforRegisterpPage() {
    try {

        var MethodName = "/GetCountrylistforRegisterpPage";

       // var user = JSON.parse(localStorage.getItem('LoggedUserDetails'));


        // var _MobileCredential = { MobileAppKeyId: "Data Source=localhost;initial Catalog=SaleswahAdmin;User ID=sa;Password=SQL99!" };


        var Data = { Credential: _MobileCredential };

        GetResultFromService(MethodName, Data);
    } catch (exception) { }
}


//Bind GetCountrylistforRegisterpPage result
function GetCountrylistforRegisterpPageResult(result) {
    try {
    
        //  
        var Registerddlcountry = document.getElementById('Registerddlcountry');

        $("#Registerddlcountry").empty();
        //        //To Set First row   as (solution,budget,chance) DDL getting None from sp so here is too None
        //        var option1 = document.createElement("option");
        //        option1.text = "--None--";
        //        option1.value = -1;
        //        DealDetailsddlProductCategory.add(option1, null);

        if (result.d.length > 0) {
            for (var i = 0; i < result.d.length; i++) {
                var option = document.createElement("option");
                option.text = result.d[i].value;
                option.value = result.d[i].key;
                Registerddlcountry.add(option, null);
            }
        }
        //        var DealObject = JSON.parse(localStorage.getItem('DealObject'));
        //        var SetValue = DealObject.ProductCategoryId;
        //        if (SetValue == '')
        //            SetValue = -1;
        //        $("#DealDetailsddlProductCategory").val(SetValue);
    }
    catch (exception) { }
}

function ValidateRegister() {
    var flag = true;
    var errorMsg = "";
    if ($.trim($("#RegistertxtFullName").val()) == '') {
        errorMsg = errorMsg + "\n* " + LoadLabelsByLanguage.YouMustFillYourFullName + "<br/>";
        flag = false;
    }
    if ($.trim($("#RegistertxtCompanyName").val()) == '') {
        errorMsg = errorMsg + "\n* " + LoadLabelsByLanguage.YouMustFillYourCompanyName + "<br/>";
        flag = false;
    }
    if ($.trim($("#RegistertxtEmailAddress").val()) == '') {
        errorMsg = errorMsg + "\n* " + LoadLabelsByLanguage.YoumustfillEmailAddress + "<br/>";
        flag = false;
    }
    if ($.trim($("#RegistertxtEmailAddress").val()).length > 0) {
        if (!ValidateEmail($.trim($("#RegistertxtEmailAddress").val()))) {
            errorMsg = errorMsg + "\n* " + LoadLabelsByLanguage.Invalidemailaddress + "<br/>";

            flag = false;
        }
    }
    if ($('#Registerddlcountry option:selected').val() == -1) {

        errorMsg = errorMsg + "\n* " + LoadLabelsByLanguage.PleaseSelectYourCountry + "<br/>";

        flag = false;
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

function ClientRegister() {
  
    if (ValidateRegister() == true) {
        document.getElementById('divLoading').style.display = 'block';
        var _AuthenticationCode = '61B7D1AC-0023-189AE90C';
        var _AdminEmailAddress = $.trim($("#RegistertxtEmailAddress").val());
        var _DatabaseDisplayName = $.trim($("#RegistertxtCompanyName").val());
        var _AdminUserName = $.trim($("#RegistertxtFullName").val());
        var _AdminMobileNumber = '';
        var Country = $('#Registerddlcountry option:selected').text();
        var WithActivation = 1;
        var _Source = 1;
        var RegisteredThrough = _registeredthrough;
        var TimeZone = '';

       // var _MobileCredential = MobileCredential;
       // _MobileCredential.MobileAppKeyId = user.MobileAppKeyId;
        var MethodName = "/CreateNewDatabaseWithAdminUser";

        /* string TimeZone*/

        var Data = { _AuthenticationCode: _AuthenticationCode, _AdminEmailAddress: _AdminEmailAddress, _DatabaseDisplayName: _DatabaseDisplayName, _AdminUserName: _AdminUserName, _AdminMobileNumber: _AdminMobileNumber, Country: Country, WithActivation: WithActivation, _Source: _Source, RegisteredThrough: RegisteredThrough, TimeZone: TimeZone, Credential: _MobileCredential };



        GetResultFromService(MethodName, Data);
        localStorage.removeItem('RedirectTo');
        localStorage.setItem('RedirectTo', JSON.stringify({
            RedirectTo: 'Login.html'
        }));
    }
   

}

function CreateNewDatabaseWithAdminUserResult(result) {
  
    if (result != null) {

        document.getElementById('divLoading').style.display = 'none';
        if (result.d.Accountid > 0) {
            localStorage.removeItem('IsNewRegisteredUser');
            localStorage.setItem('IsNewRegisteredUser', JSON.stringify({
                IsNewRegisteredUser: true,
                ShortAccountName: result.d.ShortAccountName,
                EmailAddress: result.d.Emailid
            }));
            RedirectToPage();
        } 
    }
}