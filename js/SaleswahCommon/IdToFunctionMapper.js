//var script = document.createElement('script');
//script.src = "js/SaleswahCommon/FunctionCall.js";
//document.getElementsByTagName('script')[0].parentNode.appendChild(script);

//var script = document.createElement('script');
//script.src = "js/SaleswahCommon/jquery-2.1.1.min.js";
//document.getElementsByTagName('script')[0].parentNode.appendChild(script);

//var script = document.createElement('script');
//script.src = "js/SaleswahCommon/Common.js";
//document.getElementsByTagName('script')[0].parentNode.appendChild(script);

/////////////////////////////////////Function Definition/////////////////////////////////////////////////////////////
var LoadLabelsByLanguage = JSON.parse(localStorage.getItem('LoadLabelsByLanguage'));
//var _MobileCredential = { MobileAppKeyId: "Data Source=anweshaserver;initial Catalog=SaleswahAdmin;User ID=sa;Password=sa123" };
var _MobileCredential = { MobileAppKeyId: "Data Source=localhost;initial Catalog=SaleswahAdmin;User ID=sa;Password=SQL99!" };

function LoadLabelLogin() {



    var txtShortAccountName = document.getElementById('txtShortAccountName');
    if (txtShortAccountName != null) {
        $('#txtShortAccountName').attr("placeholder", LoadLabelsByLanguage.ShortAccountName);

    }

    var txtLogin = document.getElementById('txtLogin');
    if (txtLogin != null) {
        $('#txtLogin').attr("placeholder", LoadLabelsByLanguage.Email);

    }

    var txtPassword = document.getElementById('txtPassword');
    if (txtPassword != null) {
        $('#txtPassword').attr("placeholder", LoadLabelsByLanguage.Password);

    }
    /***************************************************/
    //Check if registered user

    var IsNewRegisteredUser = JSON.parse(localStorage.getItem('IsNewRegisteredUser'));
    if (IsNewRegisteredUser != null) {
        if (IsNewRegisteredUser.IsNewRegisteredUser == true) {
            if (txtShortAccountName != null) {
                txtShortAccountName.value = IsNewRegisteredUser.ShortAccountName;
            }
            if (txtLogin != null) {
                txtLogin.value = IsNewRegisteredUser.EmailAddress;
            }
            if (txtPassword != null) {
                txtPassword.value = IsNewRegisteredUser.EmailAddress;
            }


            //localStorage.removeItem('IsNewRegisteredUser');
            $("#btnLogin").click();
        }

    }

    /***************************************************/


    //    var divloginfooterforgetpasswordtext = document.getElementById('divloginfooterforgetpasswordtext');
    //    if (divloginfooterforgetpasswordtext != null) {
    //        divloginfooterforgetpasswordtext.innerHTML = LoadLabelsByLanguage.ForgetPasswordCreateAccount;

    //    }

    var LoginanchorForgetPassword = document.getElementById('LoginanchorForgetPassword');
    if (LoginanchorForgetPassword != null) {
        LoginanchorForgetPassword.innerHTML = LoadLabelsByLanguage.Forgetpassword;

    }

    var LoginanchorCreateanAccount = document.getElementById('LoginanchorCreateanAccount');
    if (LoginanchorCreateanAccount != null) {
        LoginanchorCreateanAccount.innerHTML = LoadLabelsByLanguage.Createanaccount;

    }

    var divLoginCopyright = document.getElementById('divLoginCopyright');
    if (divLoginCopyright != null) {
        divLoginCopyright.innerHTML = LoadLabelsByLanguage.Copyrighttext;

    }

    var Loginanchortermsandcondition = document.getElementById('Loginanchortermsandcondition');
    if (Loginanchortermsandcondition != null) {
        Loginanchortermsandcondition.innerHTML = LoadLabelsByLanguage.Termsandcondition;

    }

    var LoginanchorPrivacy = document.getElementById('LoginanchorPrivacy');
    if (LoginanchorPrivacy != null) {
        LoginanchorPrivacy.innerHTML = LoadLabelsByLanguage.Privacy;

    }

    var btnLogin = document.getElementById('btnLogin');
    if (btnLogin != null) {
        btnLogin.value = LoadLabelsByLanguage.SignIn;

    }

    var btnVerify = document.getElementById('btnVerify');
    if (btnVerify != null) {
        btnVerify.value = LoadLabelsByLanguage.Verify;

    }

    var btnForgetpassword = document.getElementById('btnForgetpassword');
    if (btnForgetpassword != null) {
        btnForgetpassword.value = LoadLabelsByLanguage.SendmeNewPassword;

    }

    var OpenAuthVerifyHeader = document.getElementById('OpenAuthVerifyHeader');
    if (OpenAuthVerifyHeader != null) {
        OpenAuthVerifyHeader.value = LoadLabelsByLanguage.PleaselinkyourexistingSaleswahaccount;

    }

    var PleaseCheckYourCredentials = JSON.parse(localStorage.getItem('PleaseCheckYourCredentials'));
    if (PleaseCheckYourCredentials != null) {
        localStorage.removeItem('PleaseCheckYourCredentials');
        ShowMessage(LoadLabelsByLanguage.PleaseCheckYourEmailShortAccountNameAndPassword);
    }

    var ForgetPasswordHeader = document.getElementById('ForgetPasswordHeader');
    if (ForgetPasswordHeader != null) {
        ForgetPasswordHeader.innerHTML = LoadLabelsByLanguage.Forgetpassword;

    }
    var RegisterBackToSignIn = document.getElementById('RegisterBackToSignIn');
    if (RegisterBackToSignIn != null) {
        RegisterBackToSignIn.innerHTML = LoadLabelsByLanguage.RegisterBacktoSignin;
    } 


}


var btnVerify = document.getElementById('btnVerify');
if (btnVerify != null) {
    btnVerify.addEventListener('click', function () {
        try {

            if (ValidateLogInData() == false)
                return;

            var MethodName = "/VerifyMapping";
            var SocialLogin = JSON.parse(localStorage.getItem('SocialLogin'));
            var Data = { openAuhEmail: SocialLogin.openAuhEmail,
                RegisterThrough: SocialLogin.RegisterThrough,
                ShortAccountName: $.trim($('#txtShortAccountName').val()),
                Password: $.trim($('#txtPassword').val()),
                EmailAddress: $.trim($('#txtLogin').val()),
                Credential: _MobileCredential
            };
            GetResultFromService(MethodName, Data);
        } catch (exception) { }
    });
}

function VerifySocialMappingResult(result) {

    if (result != null) {
        if (result.d == true) {
            //autologin

            var MethodName = "/ValidateUser";

            var Data = { Email: $.trim($('#txtLogin').val()), password: $.trim($('#txtPassword').val()), ShortAccountName: $.trim($('#txtShortAccountName').val()) };

            localStorage.removeItem('SaveTempCredentialsForAutologin');
            localStorage.setItem('SaveTempCredentialsForAutologin', JSON.stringify({
                ShortAccountName: $.trim($('#txtShortAccountName').val()),
                EmailAddress: $.trim($('#txtLogin').val()),
                Password: $.trim($('#txtPassword').val())
            }));
            GetResultFromService(MethodName, Data);
        }
    }
}

function SocalSignIn(_Email, _providername) {
    try {

        var MethodName = "/SocalSignIn";
        // var SocialLogin = JSON.parse(localStorage.getItem('SocialLogin'));
        localStorage.removeItem('tempSocialLogin');
        localStorage.setItem('tempSocialLogin', JSON.stringify({
            openAuhEmail: _Email,
            RegisterThrough: _providername
        }));
        var Data = { Email: _Email, ShortAccountName: '', Password: '', providername: _providername, Credential: _MobileCredential };
        GetResultFromService(MethodName, Data);
    } catch (exception) { }
}

function SocalSignInResult(result) {

    if (result != null) {
        if (result.d.Credential.MobileAppKeyId != null) {
            //autologin
            var tempSocialLogin = JSON.parse(localStorage.getItem('tempSocialLogin'));
            if (tempSocialLogin != null) {

                localStorage.removeItem('tempSocialLogin');
                localStorage.removeItem('SocialLogin');
                localStorage.setItem('SocialLogin', JSON.stringify({
                    openAuhEmail: tempSocialLogin.openAuhEmail,
                    RegisterThrough: tempSocialLogin.RegisterThrough
                }));
            }



            localStorage.removeItem('LoggedUserDetails');
            localStorage.setItem('LoggedUserDetails', JSON.stringify({
                MobileAppKeyId: result.d.Credential.MobileAppKeyId,
                EmailAddress: result.d.EmailAddress,
                PackageId: result.d.License.PackageId,
                Name: result.d.Name,
                PermissionId: result.d.PermissionId,
                PhoneNumber: result.d.PhoneNumber,
                UserId: result.d.UserId,
                AdminCountryId: MyResult.d.CountryId,
                AdminCountryName: MyResult.d.CountryName,
                ManagerUserId: result.d.ManagerUserId,
                DesignationName: result.d.Designation,
                ManagerName: result.d.ManagerName,
                MobileNumber: result.d.MobileNumber,
                Role: result.d.PermissionName,
                LicenseCode: result.d.License.LicenseCode,
                LicenseExpiaryDate: result.d.License.Expiarydate,
                CRMAccountId: result.d.License.AccountId,
                AccountLogoName: result.d.AccountLogoIconName,
                AdminUserId: result.d.AdminUserId
            }));


            if (result.d.PermissionId != null) {
                window.location.replace("dashboard.html");
            }


        } else {

            //Send to open auth verification
            window.location.replace("OpenAuthverification.htm");
        }
    }
}

function ValidateLogInData() {

    var flag = true;
    var errorMsg = "";

    if ($.trim($("#txtLogin").val()) == "") {

        errorMsg = errorMsg + "\n* " + LoadLabelsByLanguage.YoumustfillEamilAddress + "<br/>";

        flag = false;
    } else if ($.trim($("#txtLogin").val()).length > 0) {

        if (!ValidateEmail($.trim($("#txtLogin").val()))) {
            errorMsg = errorMsg + "\n* " + LoadLabelsByLanguage.Invalidemailaddress + "<br/>";

            flag = false;
        }
    }


    if ($.trim($("#txtShortAccountName").val()) == '') {

        errorMsg = errorMsg + "\n* " + LoadLabelsByLanguage.YoumustfillShortAccountName + "<br/>";

        flag = false;
    }

    if ($.trim($("#txtPassword").val()) == '') {

        errorMsg = errorMsg + "\n* " + LoadLabelsByLanguage.YoumustfillPassword + "<br/>";

        flag = false;
    }

    if (flag == false) {
        ShowMessage(errorMsg);
    }

    return flag;
}

//OnLogin 
var btnLogin = document.getElementById('btnLogin');
if (btnLogin != null) {
    btnLogin.addEventListener('click', function () {

        if (ValidateLogInData() == false)
        { return; }

        document.getElementById('divLoading').style.display = 'block';

        var txtShortAccountName = document.getElementById('txtShortAccountName').value;
        txtShortAccountName = $.trim(txtShortAccountName);

        var txtLogin = document.getElementById('txtLogin').value;
        txtLogin = $.trim(txtLogin);

        var txtPassword = document.getElementById('txtPassword').value;
        txtPassword = $.trim(txtPassword);

        localStorage.removeItem('SaveTempCredentialsForAutologin');
        localStorage.setItem('SaveTempCredentialsForAutologin', JSON.stringify({
            ShortAccountName: txtShortAccountName,
            EmailAddress: txtLogin,
            Password: txtPassword
        }));


        var MethodName = "/ValidateUser";

        var Data = { Email: txtLogin, password: txtPassword, ShortAccountName: txtShortAccountName };

        

        GetResultFromService(MethodName, Data);
    }, false);
}

var LanguageSelectFromLogin = document.getElementById('LanguageSelectFromLogin');
if (LanguageSelectFromLogin != null) {
    $('#LanguageSelectFromLogin').change(function () {
        LoadLanguage($('#LanguageSelectFromLogin').val());
        LoadLabelLogin();
    });
}



localStorage.removeItem('ApplicationPageSize');
localStorage.setItem('ApplicationPageSize', JSON.stringify({
    PageSize: 15
}))


//fbLogin 
var fbLogin = document.getElementById('fbLogin');
if (fbLogin != null) {
    fbLogin.addEventListener('click', function () {
        //_registeredthrough = 'Facebook account';

        login();
    }, false);
}

//googlelogin 
var googlelogin = document.getElementById('googlelogin');
if (googlelogin != null) {
    googlelogin.addEventListener('click', function () {
        //_registeredthrough = 'Facebook account';
        callGoogle();
    }, false);
}
var RegisterBackToSignIn = document.getElementById('RegisterBackToSignIn');
if (RegisterBackToSignIn != null) {
    RegisterBackToSignIn.addEventListener('click', function () {

        window.location.replace('Login.html');
    }, false);
}
//btnForgetpassword
var btnForgetpassword = document.getElementById('btnForgetpassword');
if (btnForgetpassword != null) {
    btnForgetpassword.addEventListener('click', function () {
        try {
            
            if (validateForgetPassword() == true) {
                var MethodName = "/SetNewPassword";


                var Data = { ShortAccountName: $.trim($("#txtShortAccountName").val()), Email: $.trim($("#txtLogin").val()) };
                GetResultFromService(MethodName, Data);
            }


        } catch (exception) { }
    });
}

function SetNewPasswordResult(result) {
  
    if (result != null) {
        if (result.d == 1) {
            ShowMessage(LoadLabelsByLanguage.shortaccountnameisnotvalid);
        } else if (result.d == 2) {
            ShowMessage(LoadLabelsByLanguage.Eitheruserwiththisemailnotexist);
        }
        else if (result.d == 5) {
            ShowMessage(LoadLabelsByLanguage.PasswordchangedsuccessfullyPleasecheckyouremail + $.trim($("#txtLogin").val()));
        }
    }
}

function validateForgetPassword() {
   
    var flag = true;
    var errorMsg = "";

    if ($.trim($("#txtLogin").val()) == "") {

        errorMsg = errorMsg + "\n* " + LoadLabelsByLanguage.YoumustfillEamilAddress + "<br/>";

        flag = false;
    }
    else if ($.trim($("#txtLogin").val()).length > 0) {

        if (!ValidateEmail($.trim($("#txtLogin").val()))) {
            errorMsg = errorMsg + "\n* " + LoadLabelsByLanguage.Invalidemailaddress + "<br/>";

            flag = false;
        }
    }


    if ($.trim($("#txtShortAccountName").val()) == '') {

        errorMsg = errorMsg + "\n* " + LoadLabelsByLanguage.YoumustfillShortAccountName + "<br/>";

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

