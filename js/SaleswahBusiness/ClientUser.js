function validateUserDefination(MyResult) {
    try {
       
        if (MyResult.d.Credential.MobileAppKeyId == null) {

            localStorage.removeItem('IsNewRegisteredUser');
            localStorage.removeItem('SaveTempCredentialsForAutologin');
            localStorage.removeItem('SaveCredentialsForAutologin');

            localStorage.removeItem('PleaseCheckYourCredentials');
            localStorage.setItem('PleaseCheckYourCredentials', JSON.stringify({
               validated:false
            }));
            window.location.replace("Login.html");
            return;
        }
        //alert(JSON.stringify(MyResult))
        

    //First Delete the Old Credentials
    localStorage.removeItem('LoggedUserDetails');

    //GetUserCredentials in encrypted format for autologin
    

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

     


    //Set New Credentials
    localStorage.setItem('LoggedUserDetails', JSON.stringify({
        MobileAppKeyId: MyResult.d.Credential.MobileAppKeyId,
        EmailAddress: MyResult.d.EmailAddress,
        PackageId:MyResult.d.License.PackageId,
        Name: MyResult.d.Name ,
        PermissionId: MyResult.d.PermissionId,
        PhoneNumber: MyResult.d.PhoneNumber,
        UserId: MyResult.d.UserId,
        AdminCountryId: MyResult.d.CountryId,
        AdminCountryName: MyResult.d.CountryName,
        ManagerUserId: MyResult.d.ManagerUserId,
        DesignationName: MyResult.d.Designation,
        ManagerName: MyResult.d.ManagerName,
        MobileNumber: MyResult.d.MobileNumber,
        Role: MyResult.d.PermissionName,
        LicenseCode: MyResult.d.License.LicenseCode,
        LicenseExpiaryDate:MyResult.d.License.Expiarydate,
        CRMAccountId: MyResult.d.License.AccountId,
        AccountLogoName: MyResult.d.AccountLogoIconName,
        AdminUserId: MyResult.d.AdminUserId
    }));

    //remove any unwanted save credentials
    localStorage.removeItem('IsLogoutUser');
    localStorage.removeItem('EncryptedStringOfClientuser');
    localStorage.removeItem('GetAppSettingInfo');
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
    RemoveEvents();
    //document.removeEventListener("backbutton", onBackKeyDown, false);
  
    /******************************************************************/
//    localStorage.setItem('IsNewRegisteredUser', JSON.stringify({
//        IsNewRegisteredUser: true,
//        ShortAccountName: 'Evaluate1',
//        EmailAddress: 'suman@anwesha.in'
//    }));
//    localStorage.removeItem('PasswordupdatedSuccessfully');
//    localStorage.setItem('PasswordupdatedSuccessfully', JSON.stringify({
//        PasswordupdatedSuccessfully: 'PasswordupdatedSuccessfully'
//    }));
    //document.getElementById('divLoading').style.display = 'none';
    var IsNewRegisteredUser = JSON.parse(localStorage.getItem('IsNewRegisteredUser'));
    if (IsNewRegisteredUser != null) {
        if (IsNewRegisteredUser.IsNewRegisteredUser == true) {
            window.location.replace("WelcomeScreen/Screen1.html");
            //window.location.replace("dashboard.html");
            //localStorage.removeItem('IsNewRegisteredUser');

        }

    }
    else
    /******************************************************************/
    if (MyResult.d.PermissionId != null)
    {
        window.location.replace("dashboard.html");
    }
    //For Test what credentials are saved
    //var user = JSON.parse(localStorage.getItem('LoggedUserDetails'));
    //alert(JSON.stringify(user));

    } catch (exception) { }
   
}




function RemoveEvents() {
    document.addEventListener("deviceready", onDeviceReady2, false);
}


function onDeviceReady2() {
    document.removeEventListener("backbutton", onBackKeyDown, false);
}
function onBackKeyDown() {
    localStorage.removeItem('IsLogoutUser');
    //document.removeEventListener("backbutton", onBackKeyDown, false);
    navigator.app.exitApp();
}