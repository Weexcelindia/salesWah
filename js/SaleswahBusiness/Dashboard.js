
function LoadLabelOfDashboard() {
    var LoadLabelsByLanguage = JSON.parse(localStorage.getItem('LoadLabelsByLanguage'));

    localStorage.removeItem('IsNewRegisteredUser');

    localStorage.removeItem('PasswordupdatedSuccessfully');

    localStorage.removeItem('ShowMessageAgain');


    //DashBoard ToDo
    var DashBoardToDo = document.getElementById('DashBoardlblToDo');
    if (DashBoardToDo != null)
        DashBoardToDo.innerHTML = LoadLabelsByLanguage.ToDO;

    //DashBoard Message
    var DashBoardlblMessage = document.getElementById('DashBoardlblMessage');
    if (DashBoardlblMessage != null)
        DashBoardlblMessage.innerHTML = LoadLabelsByLanguage.Message;

    //DashBoardlblAppointment
    var DashBoardlblAppointment = document.getElementById('DashBoardlblAppointment');
    if (DashBoardlblAppointment != null)
        DashBoardlblAppointment.innerHTML = LoadLabelsByLanguage.Appointment;

    //DashBoardlblAppointment
    var DashBoardlblAccounts = document.getElementById('DashBoardlblAccounts');
    if (DashBoardlblAccounts != null)
        DashBoardlblAccounts.innerHTML = LoadLabelsByLanguage.Accounts;

    //DashBoardlblProposals
    var DashBoardlblProposals = document.getElementById('DashBoardlblProposals');
    if (DashBoardlblProposals != null)
        DashBoardlblProposals.innerHTML = LoadLabelsByLanguage.Proposals;

    //DashBoardlblContacts
    var DashBoardlblContacts = document.getElementById('DashBoardlblContacts');
    if (DashBoardlblContacts != null)
        DashBoardlblContacts.innerHTML = LoadLabelsByLanguage.Contacts;

    //DashBoardlblDeal
    var DashBoardlblDeal = document.getElementById('DashBoardlblDeal');
    if (DashBoardlblDeal != null)
        DashBoardlblDeal.innerHTML = LoadLabelsByLanguage.Deal;

    //DashBoardlblTasks
    var DashBoardlblTasks = document.getElementById('DashBoardlblTasks');
    if (DashBoardlblTasks != null)
        DashBoardlblTasks.innerHTML = LoadLabelsByLanguage.Tasks;

    //DashBoardlblImportphonecontacts
    var DashBoardlblImportphonecontacts = document.getElementById('DashBoardlblImportphonecontacts');
    if (DashBoardlblImportphonecontacts != null)
        DashBoardlblImportphonecontacts.innerHTML = LoadLabelsByLanguage.Importphonecontacts;

    //DashBoardlblImportGooglecontacts
    var DashBoardlblImportGooglecontacts = document.getElementById('DashBoardlblImportGooglecontacts');
    if (DashBoardlblImportGooglecontacts != null)
        DashBoardlblImportGooglecontacts.innerHTML = LoadLabelsByLanguage.ImportGooglecontacts;

    //DashBoardlblGoogleCalendarSync
    var DashBoardlblGoogleCalendarSync = document.getElementById('DashBoardlblGoogleCalendarSync');
    if (DashBoardlblGoogleCalendarSync != null)
        DashBoardlblGoogleCalendarSync.innerHTML = LoadLabelsByLanguage.GoogleCalendarSync;

    //DashBoardlblGoogleTasksync
    var DashBoardlblGoogleTasksync = document.getElementById('DashBoardlblGoogleTasksync');
    if (DashBoardlblGoogleTasksync != null)
        DashBoardlblGoogleTasksync.innerHTML = LoadLabelsByLanguage.GoogleTasksync;

    //DashBoardlblSettings
    var DashBoardlblSettings = document.getElementById('DashBoardlblSettings');
    if (DashBoardlblSettings != null)
        DashBoardlblSettings.innerHTML = LoadLabelsByLanguage.Settings;

    //DashBoardlblMyProfile
    var DashBoardlblMyProfile = document.getElementById('DashBoardlblMyProfile');
    if (DashBoardlblMyProfile != null)
        DashBoardlblMyProfile.innerHTML = LoadLabelsByLanguage.MyProfile;

    //DashBoardlblTutorial
    var DashBoardlblTutorial = document.getElementById('DashBoardlblTutorial');
    if (DashBoardlblTutorial != null)
        DashBoardlblTutorial.innerHTML = LoadLabelsByLanguage.Tutorial;

    //DashBoardlblDeal
    var DashBoardlblOverview = document.getElementById('DashBoardlblOverview');
    if (DashBoardlblOverview != null)
        DashBoardlblOverview.innerHTML = LoadLabelsByLanguage.Overview;

    //DashBoardlblRateandreview
    var DashBoardlblRateandreview = document.getElementById('DashBoardlblRateandreview');
    if (DashBoardlblRateandreview != null)
        DashBoardlblRateandreview.innerHTML = LoadLabelsByLanguage.Rateandreview;

    //DashBoardlblPrivacy
    var DashBoardlblPrivacy = document.getElementById('DashBoardlblPrivacy');
    if (DashBoardlblPrivacy != null)
        DashBoardlblPrivacy.innerHTML = LoadLabelsByLanguage.Privacy;



}

function LoadDashboard() {

    var MethodName = "/GetHomeDashBoard";

    var user = JSON.parse(localStorage.getItem('LoggedUserDetails'));

    var _Credentials = { MobileAppKeyId: user.MobileAppKeyId };

    var Data = { userId: user.UserId, Credential: _Credentials };

    GetResultFromService(MethodName, Data);
}

function SetDashBoardresult(result) {

    localStorage.removeItem('DashBoardDetails');
    localStorage.setItem('DashBoardDetails', JSON.stringify({
        Currency: result.d.Currency
    }));
}

function GoTo_ToDO() {

    localStorage.removeItem('Todays_Task');
    localStorage.setItem('Todays_Task', JSON.stringify({
        Todays_Task: 'Todays_Task'
    }));
    //window.location.replace("Tasks/taskList.html");
    // window.location = "/Tasks/taskList.html";
}

function GoToAdminSetup(Obj) {
    localStorage.removeItem('GoToPasswordChangeForUserSetup');
    localStorage.setItem('GoToPasswordChangeForUserSetup', JSON.stringify({
        GoToPasswordChange: true,
        GoToSlide: Obj
    }));
    $("#DashboardimgMyProfile").attr("href", "AdminSetUp/UserLevelSetup.htm")
    //window.location.replace("../AdminSetUp/UserLevelSetup.htm");
}


//DashboardimgMyProfile 
var DashboardimgMyProfile = document.getElementById('DashboardimgMyProfile');
if (DashboardimgMyProfile != null) {
    DashboardimgMyProfile.addEventListener('click', function () {

        GoToAdminSetup(0);

    }, false);
}

//DashBoardAnchorAdminSetup 
var DashBoardAnchorAdminSetup = document.getElementById('DashBoardAnchorAdminSetup');
if (DashBoardAnchorAdminSetup != null) {
    DashBoardAnchorAdminSetup.addEventListener('click', function () {

        CheckPermissionId();

    }, false);
}

//DashBoardAnchorRateAndReview 
var DashBoardAnchorRateAndReview = document.getElementById('DashBoardAnchorRateAndReview');
if (DashBoardAnchorRateAndReview != null) {
    DashBoardAnchorRateAndReview.addEventListener('click', function () {

        //window.open('market://details?id=*insert app id*');
        ShowMessage("Need app id For rate and review");
    }, false);
}


//DashBoardAnchorAdminSetup
function CheckPermissionId() {
    var LoggedUserDetails = JSON.parse(localStorage.getItem('LoggedUserDetails'));
    if (LoggedUserDetails != null) {
        if (LoggedUserDetails.PermissionId == 4 || LoggedUserDetails.PermissionId == 6) {
            $("#DashBoardAnchorAdminSetup").attr("href", "AdminSetUp/AdminLevelSetup.htm")
        }
        else {
            var LoadLabelsByLanguage = JSON.parse(localStorage.getItem('LoadLabelsByLanguage'));
            $("#DashBoardAnchorAdminSetup").click(function () {
                ShowMessage(LoadLabelsByLanguage.AvailableOnlytoAdministrator);
            });
        }
    }
}






var DashBoardAnchorImportGoogleContact = document.getElementById('DashBoardAnchorImportGoogleContact');
if (DashBoardAnchorImportGoogleContact != null) {
    var SaveCredentialsForAutologin = JSON.parse(localStorage.getItem('SaveCredentialsForAutologin'));

    $("#DashBoardAnchorImportGoogleContact").attr("href", "https://crm.saleswah.com/Login.aspx?ReturnUrl=%2fContactsProvider%2fGoogleContacts.aspx&SAPFrmMobApp=" + Encrypt(SaveCredentialsForAutologin.ShortAccountName, SaveCredentialsForAutologin.EmailAddress, SaveCredentialsForAutologin.Password));
}

var DashBoardAnchorGoogleTasksync = document.getElementById('DashBoardAnchorGoogleTasksync');
if (DashBoardAnchorGoogleTasksync != null) {
    var SaveCredentialsForAutologin = JSON.parse(localStorage.getItem('SaveCredentialsForAutologin'));

    $("#DashBoardAnchorGoogleTasksync").attr("href", "https://crm.saleswah.com/Login.aspx?ReturnUrl=%2fDashboard.aspx&SAPFrmMobApp=" + Encrypt(SaveCredentialsForAutologin.ShortAccountName, SaveCredentialsForAutologin.EmailAddress, SaveCredentialsForAutologin.Password));
}

var DashBoardAnchorGoogleCalendarSync = document.getElementById('DashBoardAnchorGoogleCalendarSync');
if (DashBoardAnchorGoogleCalendarSync != null) {
    var SaveCredentialsForAutologin = JSON.parse(localStorage.getItem('SaveCredentialsForAutologin'));

    $("#DashBoardAnchorGoogleCalendarSync").attr("href", "https://crm.saleswah.com/Login.aspx?ReturnUrl=%2fAppointment%2fAppointmentList.aspx&SAPFrmMobApp=" + Encrypt(SaveCredentialsForAutologin.ShortAccountName, SaveCredentialsForAutologin.EmailAddress, SaveCredentialsForAutologin.Password));
}



function Encrypt(ShortAN, Email, Password) {

    //Algorithm to encrypt data.
    if (Password.length < 0 || ShortAN.length < 0 || Email.length < 0) {
        return '';
    }

    var StrForEncrypt = $.trim(ShortAN) + "╣" + $.trim(Email) + "╣" + $.trim(Password);

    if (StrForEncrypt.indexOf("A") > -1)
        StrForEncrypt = StrForEncrypt.replace('A', '‰');

    if (StrForEncrypt.indexOf("a") > -1)
        StrForEncrypt = StrForEncrypt.replace('a', 'Š');

    if (StrForEncrypt.indexOf("E") > -1)
        StrForEncrypt = StrForEncrypt.replace('E', '†');

    if (StrForEncrypt.indexOf("e") > -1)
        StrForEncrypt = StrForEncrypt.replace('e', '‡');

    if (StrForEncrypt.indexOf("I") > -1)
        StrForEncrypt = StrForEncrypt.replace('I', 'Œ');

    if (StrForEncrypt.indexOf("i") > -1)
        StrForEncrypt = StrForEncrypt.replace('i', '¿');

    if (StrForEncrypt.indexOf("O") > -1)
        StrForEncrypt = StrForEncrypt.replace('O', '¾');

    if (StrForEncrypt.indexOf("o") > -1)
        StrForEncrypt = StrForEncrypt.replace('o', '½');

    if (StrForEncrypt.indexOf("U") > -1)
        StrForEncrypt.Replace('U', '¼');

    if (StrForEncrypt.indexOf("u") > -1)
        StrForEncrypt = StrForEncrypt.replace('u', 'Ø');

    if (StrForEncrypt.indexOf("_") > -1) {
        StrForEncrypt = StrForEncrypt.replace('_', '±');
    }

    ReversValue = StrForEncrypt.split('').reverse().join('');
    var encrypted = CryptoJS.AES.encrypt(ReversValue, "Secret Passphrase");
    return encrypted;
}