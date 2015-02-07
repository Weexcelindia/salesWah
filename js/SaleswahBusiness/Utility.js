var LoadLabelsByLanguage = JSON.parse(localStorage.getItem('LoadLabelsByLanguage'));





//$("#ContactListtxtSearch").attr("placeholder", LoadLabelsByLanguage.TypeHereToSearch);
//$("#AccountListtxtSearch").attr("placeholder", LoadLabelsByLanguage.TypeHereToSearch);
//$("#AppointmentListtxtSearch").attr("placeholder", LoadLabelsByLanguage.TypeHereToSearch);
//$("#dealListtxtSearch").attr("placeholder", LoadLabelsByLanguage.TypeHereToSearch);
//$("#MessageListtxtSearch").attr("placeholder", LoadLabelsByLanguage.TypeHereToSearch);
//$("#ProposalListtxtSearch").attr("placeholder", LoadLabelsByLanguage.TypeHereToSearch);
//$("#TaskListtxtSearch").attr("placeholder", LoadLabelsByLanguage.TypeHereToSearch);
//$("#ProposalDetailstxtContactName").attr("placeholder", LoadLabelsByLanguage.TypeHereToSearchContact);
//$("#AppointmentAddNewtxtAddGuest").attr("placeholder", LoadLabelsByLanguage.TypeHereToSearchContactEmail);
//$("#AddNewContactDetailstxtAccountName").attr("placeholder", LoadLabelsByLanguage.TypeHereToSearchAccount);
//$("#AddNewTaskDetailstxtAccountName").attr("placeholder", LoadLabelsByLanguage.TypeHereToSearchAccount);

//$("#RegistertxtFullName").attr("placeholder", LoadLabelsByLanguage.RegistertxtFullName);
//$("#RegistertxtCompanyName").attr("placeholder", LoadLabelsByLanguage.RegistertxtCompanyName);
//$("#RegistertxtEmailAddress").attr("placeholder", LoadLabelsByLanguage.RegistertxtEmailAddress);


function convertToJSONDate(strDate) {

    var dt = new Date(strDate);
    var newDate = new Date(Date.UTC(dt.getFullYear(), dt.getMonth(), dt.getDate(), dt.getHours(), dt.getMinutes(), dt.getSeconds(), dt.getMilliseconds()));
    return '/Date(' + newDate.getTime() + ')/';
}

function convertToJSONDateOnly(strDate) {

    var dt = new Date(strDate);
    var newDate = new Date(Date.UTC(dt.getFullYear(), dt.getMonth(), dt.getDate()));
    return '/Date(' + newDate.getTime() + ')/';
}

function convertJSONDateToReadableFormat(strDate) {

    var _MyDate = new Date(parseInt(strDate.substr(6)));

    var dd = _MyDate.getDate();
    var mm = _MyDate.getMonth() + 1;
    var yy = _MyDate.getFullYear();

    if (dd <= 9) {
        dd = "0" + dd;
    }

    if (mm <= 9) {
        mm = "0" + mm;
    }

    if (mm + "/" + dd + "/" + yy == '01/02/1') {
        return "";
    }
    else {
        return mm + "/" + dd + "/" + yy;
    }
    //01/02/1
}
function SlideToPage(PageNo) {
    swiperParent.swipeTo(PageNo);
    return false;
}

function isoDateReviver(str) {
    var New_Date = new Date(parseInt(str.slice(6, -1), 10));
    var str1 = New_Date.toString().split("GMT");
    var str2 = str1[0].toString().split(":");
    return str2[0] + ':' + str2[1];
}

function ConvertJsonDateToDateAndtime(strDate) {
   
    var _MyDate = new Date(parseInt(strDate.substr(6)));

    var dd = _MyDate.getDate();
    var mm = _MyDate.getMonth() + 1;
    var yy = _MyDate.getFullYear();
    var hh = _MyDate.getHours();
    if (hh >= 0 & hh <= 9) {
        hh = '0' + hh;
    }
    var min = _MyDate.getMinutes();

    if (dd <= 9) {
        dd = "0" + dd;
    }

    if (mm <= 9) {
        mm = "0" + mm;
    }
    if (min <= 9) {
        min = "0" + min;
    }

    return mm + "/" + dd + "/" + yy + " " + hh + ":" + min;
}

function ShowMessage(Message) {

    var toast1 = new Android_Toast({ content: Message });

}


function LoadPopUpLabel() {

    /////////////Popup Section//////////////////////
    //PopUpLabelContact
    var PopUpLabelContact = document.getElementById('PopUpLabelContact');
    if (PopUpLabelContact != null)
        PopUpLabelContact.innerHTML = LoadLabelsByLanguage.AddNewContact;

    //PopUpLabelAccount
    var PopUpLabelAccount = document.getElementById('PopUpLabelAccount');
    if (PopUpLabelAccount != null)
        PopUpLabelAccount.innerHTML = LoadLabelsByLanguage.AddNewAccount;

    //PopUpLabelTask
    var PopUpLabelTask = document.getElementById('PopUpLabelTask');
    if (PopUpLabelTask != null)
        PopUpLabelTask.innerHTML = LoadLabelsByLanguage.AddNewTask;

    //PopUpLabelDeal
    var PopUpLabelDeal = document.getElementById('PopUpLabelDeal');
    if (PopUpLabelDeal != null)
        PopUpLabelDeal.innerHTML = LoadLabelsByLanguage.AddNewDeal;

    //PopUpLabelAppointment
    var PopUpLabelAppointment = document.getElementById('PopUpLabelAppointment');
    if (PopUpLabelAppointment != null)
        PopUpLabelAppointment.innerHTML = LoadLabelsByLanguage.AddNewAppointment;

    //PopUpLabelPhoneContacts
    var PopUpLabelPhoneContacts = document.getElementById('PopUpLabelPhoneContacts');
    if (PopUpLabelPhoneContacts != null)
        PopUpLabelPhoneContacts.innerHTML = LoadLabelsByLanguage.PhoneContacts;

    //PopUpLabelSendProposal
    var PopUpLabelSendProposal = document.getElementById('PopUpLabelSendProposal');
    if (PopUpLabelSendProposal != null)
        PopUpLabelSendProposal.innerHTML = LoadLabelsByLanguage.SendProposal;

    //PopUpLabelSendMail
    var PopUpLabelSendMail = document.getElementById('PopUpLabelSendMail');
    if (PopUpLabelSendMail != null)
        PopUpLabelSendMail.innerHTML = LoadLabelsByLanguage.SendMail;

    //PopUpLabelDecisionMaker
    var PopUpLabelDecisionMaker = document.getElementById('PopUpLabelDecisionMaker');
    if (PopUpLabelDecisionMaker != null)
        PopUpLabelDecisionMaker.innerHTML = LoadLabelsByLanguage.DecisionMaker;

    //PopUpLabelGoToContact
    var PopUpLabelGoToContact = document.getElementById('PopUpLabelGoToContact');
    if (PopUpLabelGoToContact != null)
        PopUpLabelGoToContact.innerHTML = LoadLabelsByLanguage.ContactList;

    //PopUpLabelGoToDeal
    var PopUpLabelGoToDeal = document.getElementById('PopUpLabelGoToDeal');
    if (PopUpLabelGoToDeal != null)
        PopUpLabelGoToDeal.innerHTML = LoadLabelsByLanguage.DealList;

    //PopUpLabelGoToAccount
    var PopUpLabelGoToAccount = document.getElementById('PopUpLabelGoToAccount');
    if (PopUpLabelGoToAccount != null)
        PopUpLabelGoToAccount.innerHTML = LoadLabelsByLanguage.AccountList;

    //PopUpLabelGoToTask
    var PopUpLabelGoToTask = document.getElementById('PopUpLabelGoToTask');
    if (PopUpLabelGoToTask != null)
        PopUpLabelGoToTask.innerHTML = LoadLabelsByLanguage.TaskList;

    //PopUpLabelGoToAppointment
    var PopUpLabelGoToAppointment = document.getElementById('PopUpLabelGoToAppointment');
    if (PopUpLabelGoToAppointment != null)
        PopUpLabelGoToAppointment.innerHTML = LoadLabelsByLanguage.AppointmentList;

    //PopUpLabelGoToActivity
    var PopUpLabelGoToActivity = document.getElementById('PopUpLabelGoToActivity');
    if (PopUpLabelGoToActivity != null)
        PopUpLabelGoToActivity.innerHTML = LoadLabelsByLanguage.ActivityList;

    //PopUpLabelGoToMessages
    var PopUpLabelGoToMessages = document.getElementById('PopUpLabelGoToMessages');
    if (PopUpLabelGoToMessages != null)
        PopUpLabelGoToMessages.innerHTML = LoadLabelsByLanguage.MessageList;

    //PopupLabelDecisionMaker
    var PopupLabelDecisionMaker = document.getElementById('PopupLabelDecisionMaker');
    if (PopupLabelDecisionMaker != null)
        PopupLabelDecisionMaker.innerHTML = LoadLabelsByLanguage.DecisionMaker;

    //PopupLabelAddNewTask
    var PopupLabelAddNewTask = document.getElementById('PopupLabelAddNewTask');
    if (PopupLabelAddNewTask != null)
        PopupLabelAddNewTask.innerHTML = LoadLabelsByLanguage.AddNewTask;

    /////////////Popup Section End//////////////////////
}

function Today() {
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth() + 1; //January is 0!

    var yyyy = today.getFullYear();
    if (dd < 10) {
        dd = '0' + dd
    }
    if (mm < 10) {
        mm = '0' + mm
    }
    return mm + '/' + dd + '/' + yyyy;
}
function TodayPlus2() {

    var someDate = new Date();
    var numberOfDaysToAdd = 2;
    someDate.setDate(someDate.getDate() + numberOfDaysToAdd);

    var dd = someDate.getDate();
    var mm = someDate.getMonth() + 1;
    var yyyy = someDate.getFullYear();

    var someFormattedDate = mm + '/' + dd + '/' + yyyy;

    return mm + '/' + dd + '/' + yyyy;
}

function RedirectToPage() {

    var RedirectTo = JSON.parse(localStorage.getItem('RedirectTo'));

    if (RedirectTo != null) {

        window.location.replace(RedirectTo.RedirectTo);
        localStorage.removeItem('RedirectTo');
    }

}

function SetPageUrl(URL) {
    try {
        localStorage.removeItem('SaleswahCrmlitePageURL');
        localStorage.setItem('SaleswahCrmlitePageURL', JSON.stringify({
            URL: URL
        }));

        if (URL == 'deal_detail_html')
            localStorage.removeItem('DecisionMakerObject');
    }
    catch (exception) { }

}

function LoadPlaceHolders() {
    var LoadLabelsByLanguage = JSON.parse(localStorage.getItem('LoadLabelsByLanguage'));
    var ContactListtxtSearch = document.getElementById('ContactListtxtSearch');
    if (ContactListtxtSearch != null) {
        $("#ContactListtxtSearch").attr("placeholder", LoadLabelsByLanguage.TypeHereToSearch);

    }

    var AccountListtxtSearch = document.getElementById('AccountListtxtSearch');
    if (AccountListtxtSearch != null) {
        $("#AccountListtxtSearch").attr("placeholder", LoadLabelsByLanguage.TypeHereToSearch);

    }

    var AppointmentListtxtSearch = document.getElementById('AppointmentListtxtSearch');
    if (AppointmentListtxtSearch != null) {
        $("#AppointmentListtxtSearch").attr("placeholder", LoadLabelsByLanguage.TypeHereToSearch);

    }

    var dealListtxtSearch = document.getElementById('dealListtxtSearch');
    if (dealListtxtSearch != null) {
        $("#dealListtxtSearch").attr("placeholder", LoadLabelsByLanguage.TypeHereToSearch);

    }

    var MessageListtxtSearch = document.getElementById('MessageListtxtSearch');
    if (MessageListtxtSearch != null) {
        $("#MessageListtxtSearch").attr("placeholder", LoadLabelsByLanguage.TypeHereToSearch);

    }

    var ProposalListtxtSearch = document.getElementById('ProposalListtxtSearch');
    if (ProposalListtxtSearch != null) {
        $("#ProposalListtxtSearch").attr("placeholder", LoadLabelsByLanguage.TypeHereToSearch);

    }

    var TaskListtxtSearch = document.getElementById('TaskListtxtSearch');
    if (TaskListtxtSearch != null) {
        $("#TaskListtxtSearch").attr("placeholder", LoadLabelsByLanguage.TypeHereToSearch);

    }

    var ProposalDetailstxtContactName = document.getElementById('ProposalDetailstxtContactName');
    if (ProposalDetailstxtContactName != null) {
        $("#ProposalDetailstxtContactName").attr("placeholder", LoadLabelsByLanguage.TypeHereToSearchContact);

    }

    var AppointmentAddNewtxtAddGuest = document.getElementById('AppointmentAddNewtxtAddGuest');
    if (AppointmentAddNewtxtAddGuest != null) {
        $("#AppointmentAddNewtxtAddGuest").attr("placeholder", LoadLabelsByLanguage.TypeHereToSearchContactEmail);

    }

    var AddNewContactDetailstxtAccountName = document.getElementById('AddNewContactDetailstxtAccountName');
    if (AddNewContactDetailstxtAccountName != null) {
        $("#AddNewContactDetailstxtAccountName").attr("placeholder", LoadLabelsByLanguage.TypeHereToSearchAccount);

    }

    var AddNewTaskDetailstxtAccountName = document.getElementById('AddNewTaskDetailstxtAccountName');
    if (AddNewTaskDetailstxtAccountName != null) {
        $("#AddNewTaskDetailstxtAccountName").attr("placeholder", LoadLabelsByLanguage.TypeHereToSearchAccount);

    }

    var RegistertxtFullName = document.getElementById('RegistertxtFullName');
    if (RegistertxtFullName != null) {
        $("#RegistertxtFullName").attr("placeholder", LoadLabelsByLanguage.RegistertxtFullName);

    }

    var RegistertxtCompanyName = document.getElementById('RegistertxtCompanyName');
    if (RegistertxtCompanyName != null) {
        $("#RegistertxtCompanyName").attr("placeholder", LoadLabelsByLanguage.RegistertxtCompanyName);

    }

    var RegistertxtEmailAddress = document.getElementById('RegistertxtEmailAddress');
    if (RegistertxtEmailAddress != null) {
        $("#RegistertxtEmailAddress").attr("placeholder", LoadLabelsByLanguage.RegistertxtEmailAddress);

    }
}
function SetloadingImg() {
    $('#imgLoading').attr('src', 'images/loginloading.GIF');
}



function SetloadingImgInAccountModule() {
    $('#imgLoading').attr('src', '../images/accountloading.GIF');
}

function SetloadingImgInAppointmentModule() {

    $('#imgLoading').attr('src', '../images/Appointmentloading.GIF');
}
function SetloadingImgInContactModule() {
    $('#imgLoading').attr('src', '../images/contactloading.GIF');
}
function SetloadingImgInDealModule() {
    $('#imgLoading').attr('src', '../images/dealloading.GIF');
}
function SetloadingImgInMessageModule() {
    $('#imgLoading').attr('src', '../images/messageloading.GIF');
}
function SetloadingImgInProposalModule() {
    $('#imgLoading').attr('src', '../images/proposalloading.GIF');
}
function SetloadingImgInTaskModule() {
    $('#imgLoading').attr('src', '../images/TaskLoading.GIF');
} 