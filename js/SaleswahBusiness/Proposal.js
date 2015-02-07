
var ApplicationPageSize = JSON.parse(localStorage.getItem('ApplicationPageSize'));
var ProposalPageSize = ApplicationPageSize.PageSize;

function LoadProposalLabel() {
    var LoadLabelsByLanguage = JSON.parse(localStorage.getItem('LoadLabelsByLanguage'));
    localStorage.removeItem('ProposalFinalResult');
    localStorage.removeItem('ProposaltempResult');
    localStorage.removeItem('ProposalContactDetailsResult');

    //ProposalDetailHeaderLabelDetail
    var ProposalDetailHeaderLabelDetail = document.getElementById('ProposalDetailHeaderLabelDetail');
    if (ProposalDetailHeaderLabelDetail != null)
        ProposalDetailHeaderLabelDetail.innerHTML = LoadLabelsByLanguage.Detail;

    //ProposalDetailsLabelContactSearch
    var ProposalDetailsLabelContactSearch = document.getElementById('ProposalDetailsLabelContactSearch');
    if (ProposalDetailsLabelContactSearch != null)
        ProposalDetailsLabelContactSearch.innerHTML = LoadLabelsByLanguage.ContactSearch;

    //ProposalListHeader
    var ProposalListHeader = document.getElementById('ProposalListHeader');
    if (ProposalListHeader != null)
        ProposalListHeader.innerHTML = LoadLabelsByLanguage.Detail;

    //ProposalDetailsLabelProposalName
    var ProposalDetailsLabelProposalName = document.getElementById('ProposalDetailsLabelProposalName');
    if (ProposalDetailsLabelProposalName != null)
        ProposalDetailsLabelProposalName.innerHTML = LoadLabelsByLanguage.ProposalName;

    //ProposalDetailsLabelSubject
    var ProposalDetailsLabelSubject = document.getElementById('ProposalDetailsLabelSubject');
    if (ProposalDetailsLabelSubject != null)
        ProposalDetailsLabelSubject.innerHTML = LoadLabelsByLanguage.Subject;

    //Proposallist
    var ProposalListheaderlabelProposallist = document.getElementById('ProposalListheaderlabelProposallist');
    if (ProposalListheaderlabelProposallist != null)
        ProposalListheaderlabelProposallist.innerHTML = LoadLabelsByLanguage.Proposallist;
}

////////////////ProposalTemplate list///////////////////////////////
function GetProposalTemplateList(pageindex) {
    try {
        document.getElementById('divLoading').style.display = 'block';
        var MethodName = "/GetProposalTemplateList";
        var user = JSON.parse(localStorage.getItem('LoggedUserDetails'));
        var _MobileCredential = MobileCredential;
        _MobileCredential.MobileAppKeyId = user.MobileAppKeyId;
        var Data = { pageIndex: pageindex, pageSize: ProposalPageSize, filterPattern: "", orderByClause: "ProposalTemplateName", userId: user.UserId, order: "Asc", Credential: _MobileCredential };
        GetResultFromService(MethodName, Data);
    } catch (exception) { }

}

function SetProposalTemplateListResult(result) {
    // $("#ProposalListUlDetails").empty();

    if (swiperNestedProposalList == null) {

        if (result.d.length == 0) {
            $("#ProposalListUlDetails").append("<div class='swiper-slide '><div class='dlist'> <ul><li><a href='#' ><h4>  No Record Found </h4></a></li></ul></div></div>");

        }
    }

    var ProposalListtxtSearch = document.getElementById('ProposalListtxtSearch');
    if (ProposalListtxtSearch != null) {
        var search = $.trim(ProposalListtxtSearch.value)
        if (search.length > 0) {
            if (swiperNestedProposalList != null) {
                if (pageIndexProposalList == 1) {
                    swiperNestedProposalList.removeAllSlides();
                    $("#ProposalListUlDetails").empty();
                }
                if (swiperNestedProposalList.slides.length == 0 && result.d.length == 0) {
                    $("#ProposalListUlDetails").append("<div class='swiper-slide '><div class='dlist'> <ul><li><a href='#' ><h4>  No Record Found </h4></a></li></ul></div></div>");
                    swiperNestedProposalList.reInit();
                }
            }
        }
    }





    if (result.d.length > 0) {
        for (var i = 0; i < result.d.length; i++) {

            var ReplacedName = result.d[i].Name.replace(/'/g, "\\'");
            var ReplacedSubject = result.d[i].Subject.replace(/'/g, "\\'");

            var _ProposalDetailObject = "{'ProposalTemplateName':'" + ReplacedName + "','Subject':'" + ReplacedSubject + "','IdLong':'" + result.d[i].IdLong + "'}"

            $("#ProposalListUlDetails").append("<div class='swiper-slide'><div class='dlist'><ul><li> <a href='detail.html' onclick=\"GETProposalObject(" + _ProposalDetailObject + ")\"><h4>" + result.d[i].Name + "<p>" + result.d[i].ProductCategoryName + "</p></h4></li></ul></div></div></a>");
            if (swiperNestedProposalList != null) {
                swiperNestedProposalList.reInit();
            }
        }
    }


    //    if (result.d.length == 0) {
    //        $("#ProposalListUlDetails").append("<div class='swiper-slide '><div class='dlist'> <ul><li><a href='#' ><h4>  No Record Found </h4></a></li></ul></div></div>");

    //    }

    if (swiperNestedProposalList == null) {
        LoadProposalSlider();
    }
    document.getElementById('divLoading').style.display = 'none';
}

////////////////ProposalTemplate list End///////////////////////////////
////////////////ProposalTemplate Detail Start///////////////////////////////

function GETProposalObject(Obj) {


    localStorage.removeItem('ProposalObject');
    localStorage.setItem('ProposalObject', JSON.stringify({
        Name: Obj.ProposalTemplateName,
        Subject: Obj.Subject,
        IdLong: Obj.IdLong
    }));
}

function SetProposalDetailPageObject() {

    var ProposalObject = JSON.parse(localStorage.getItem('ProposalObject'));

    //ProposalDetailHeader
    var ProposalDetailHeader = document.getElementById('ProposalDetailHeader');
    if (ProposalDetailHeader != null) {
        if (ProposalObject.Name.length > 30) {
            ProposalDetailHeader.innerHTML = ProposalObject.Name.substring(0, 30) + '...';
        }
        else {
            ProposalDetailHeader.innerHTML = ProposalObject.Name;

        }

        //ProposalDetailHeader.innerHTML = ProposalObject.Name;
    }


    GetProposaltemplateById(ProposalObject.IdLong);


    //ProposalDetailstxtProposalName
    var ProposalDetailstxtProposalName = document.getElementById('ProposalDetailstxtProposalName');
    ProposalDetailstxtProposalName.value = ProposalObject.Name;

    //ProposalDetailstxtSubject
    var ProposalDetailstxtSubject = document.getElementById('ProposalDetailstxtSubject');
    ProposalDetailstxtSubject.value = ProposalObject.Name;



    LoadProposalDetailSlider();
}

function SendProposal() {
    try {
        debugger;
        var Contact = JSON.parse(localStorage.getItem('ProposalContactDetailsResult'));

        if (Contact != null) {
            var MethodName = "/SendProposalMail";
            var user = JSON.parse(localStorage.getItem('LoggedUserDetails'));

            var ProposalObject = JSON.parse(localStorage.getItem('ProposalObject'));

            var ProposalFinalObj = JSON.parse(localStorage.getItem('ProposalFinalResult'));

            var _MobileCredential = MobileCredential;
            _MobileCredential.MobileAppKeyId = user.MobileAppKeyId;

            var SaveCredentialsForAutologin = JSON.parse(localStorage.getItem('SaveCredentialsForAutologin'));

            _EncryptedString = Encrypt(SaveCredentialsForAutologin.ShortAccountName, SaveCredentialsForAutologin.EmailAddress, SaveCredentialsForAutologin.Password);

            _EmailMessage = { EmailBody: ProposalFinalObj.Result.d.Body, Attachement1: ProposalFinalObj.Result.d.Attachment1, Attachement2: ProposalFinalObj.Result.d.Attachment2, Attachement3: ProposalFinalObj.Result.d.Attachment3, EmailSubject: ProposalFinalObj.Result.d.Subject }

            var AccountCode = '';
            if (user.CRMAccountId == 167) {
                AccountCode = user.CRMAccountId;
            }
            else {
                AccountCode = 0;
            }

            var Data = { AdminUserId: '00000000-0000-0000-0000-000000000000', Contactid: Contact.Result.d.Id, message: _EmailMessage, Proposalid: ProposalObject.IdLong, EmailAddress: user.EmailAddress, DisplayName: user.Name, EncryptedString: _EncryptedString, userId: user.UserId, filter: '', Credential: _MobileCredential,AccountCode:AccountCode };
            GetResultFromService(MethodName, Data);
        }
        else {
            var LoadLabelsByLanguage = JSON.parse(localStorage.getItem('LoadLabelsByLanguage'));
            ShowMessage(LoadLabelsByLanguage.Selectcontacttosend);
        }
    } catch (exception) { }
}

function SendProposalMailResult(result) {
    try {
        
        if (result != null) {
            if (result.d > 0) {
                var LoadLabelsByLanguage = JSON.parse(localStorage.getItem('LoadLabelsByLanguage'));
                ShowMessage(LoadLabelsByLanguage.Proposalsendsuccessfully);
            }
            else {
                var LoadLabelsByLanguage = JSON.parse(localStorage.getItem('LoadLabelsByLanguage'));
                ShowMessage(LoadLabelsByLanguage.Proposalsendingfail);
            }
        }
    }
    catch (exception) { }
}

function GetActiveContacts() {
    try {

        //        var MethodName = "/GetActiveContacts";
        //        var user = JSON.parse(localStorage.getItem('LoggedUserDetails'));
        //        var _MobileCredential = MobileCredential;
        //        _MobileCredential.MobileAppKeyId = user.MobileAppKeyId;
        //        var Data = { userId: user.UserId, filter: '', Credential: _MobileCredential };
        //        GetResultFromService(MethodName, Data);
    } catch (exception) { }
}

var accountNameLst = new Array();

//On ProposalDetailstxtContactName
var ProposalDetailstxtContactName = document.getElementById('ProposalDetailstxtContactName');
if (ProposalDetailstxtContactName != null) {

    $("#ProposalDetailstxtContactName").keyup(function () {
        try {

            if ($("#ProposalDetailstxtContactName").val().length < 3) {

                accountNameLst.length = 0;

            }

        } catch (exception) { }

    });

}
function GetActiveContactsResult(result) {
    try {

        //        var accountNameLst = new Array();
        if (result.d.length > 0) {
            for (var i = 0; i < result.d.length; i++) {
                accountNameLst[i] = result.d[i].FullName + '<' + result.d[i].Email + '>';
            }
        }
        $("#ProposalDetailstxtContactName").autocomplete({
            source: accountNameLst
        });
        $("#ProposalDetailstxtContactName").autocomplete("search", $("#ProposalDetailstxtContactName").val());
    }
    catch (exception) { }
}
$('html').click(function () {
    var ProposalDetailstxtContactName = document.getElementById('ProposalDetailstxtContactName');
    if (ProposalDetailstxtContactName != null) {
        if ($('.ui-autocomplete.ui-widget:visible').length == 1) {
            $("#ProposalDetailstxtContactName").autocomplete("close");
        }
    }

});
$('#ProposalDetailstxtContactName').on("keypress", function (e) {

    if (e.keyCode == 13 && $.trim($('#ProposalDetailstxtContactName').val()).length > 0) {
        accountNameLst.length = 0;
        LoadContactDetails();
    }


});

//ProposalDetailsBtnSendProposal 
var ProposalDetailsBtnSendProposal = document.getElementById('ProposalDetailsBtnSendProposal');
if (ProposalDetailsBtnSendProposal != null) {
    ProposalDetailsBtnSendProposal.addEventListener('click', function () {

        SendProposal();
    });
}

//Load Contact from a auto compliter...
function LoadContactDetails() {
    try {
        var MethodName = "/GetContactByEmail?proposalContact";
        var user = JSON.parse(localStorage.getItem('LoggedUserDetails'));
        var _MobileCredential = MobileCredential;
        _MobileCredential.MobileAppKeyId = user.MobileAppKeyId;

        var myString = $.trim($('#ProposalDetailstxtContactName').val());
        var arr = myString.split('<');
        var _email = arr[1].split('>');

        var Data = { Email: _email[0], Credential: _MobileCredential };
        GetResultFromService(MethodName, Data);
    } catch (exception) { }
}

function LoadContactDetailsResult(result) {
    try {
        if (result != null) {
            var ProposalObject = JSON.parse(localStorage.getItem('ProposalObject'));

            GetTemplatedMessage(result.d.Id, ProposalObject.IdLong);
            localStorage.removeItem('ProposalContactDetailsResult');
            localStorage.setItem('ProposalContactDetailsResult', JSON.stringify({ Result: result
            }));
            $('#ProposalDetailstxtContactName').val('');
        }
    }
    catch (exception) { }
}


//On dealListtxtSearch
var ProposalListtxtSearch = document.getElementById('ProposalListtxtSearch');
if (ProposalListtxtSearch != null) {

    $("#ProposalListtxtSearch").keyup(function (e) {

        if (e.keyCode == 13) {
            try {
                document.getElementById('divLoading').style.display = 'block';
                pageIndexProposalList = 1;
                swiperNestedProposalList.setWrapperTranslate(0, 0, 0)
                swiperNestedProposalList.removeAllSlides();
                var MethodName = "/GetProposalTemplateList";
                var user = JSON.parse(localStorage.getItem('LoggedUserDetails'));
                var _MobileCredential = MobileCredential;
                _MobileCredential.MobileAppKeyId = user.MobileAppKeyId;
                var Data = { pageIndex: pageIndexProposalList, pageSize: ProposalPageSize, filterPattern: $.trim(ProposalListtxtSearch.value), orderByClause: "ProposalTemplateName", userId: user.UserId, order: "Asc", Credential: _MobileCredential };
                GetResultFromService(MethodName, Data);
            } catch (exception) { }
        }

    });

    $("#ImgProposalListSearch").click(function () {

        try {
            document.getElementById('divLoading').style.display = 'block';
            pageIndexProposalList = 1;
            swiperNestedProposalList.setWrapperTranslate(0, 0, 0)
            swiperNestedProposalList.removeAllSlides();
            var MethodName = "/GetProposalTemplateList";
            var user = JSON.parse(localStorage.getItem('LoggedUserDetails'));
            var _MobileCredential = MobileCredential;
            _MobileCredential.MobileAppKeyId = user.MobileAppKeyId;
            var Data = { pageIndex: pageIndexProposalList, pageSize: ProposalPageSize, filterPattern: $.trim(ProposalListtxtSearch.value), orderByClause: "ProposalTemplateName", userId: user.UserId, order: "Asc", Credential: _MobileCredential };
            GetResultFromService(MethodName, Data);

        } catch (exception) { }

    });

}

//Call method when contact is selected.
function GetTemplatedMessage(contactid, proposalid) {
    try {
        
        var _logoSrc = '';
        var MethodName = "/GetTemplatedMessage";
        var user = JSON.parse(localStorage.getItem('LoggedUserDetails'));
        var _MobileCredential = MobileCredential;
        _MobileCredential.MobileAppKeyId = user.MobileAppKeyId;
        var ProposaltempResult = JSON.parse(localStorage.getItem('ProposaltempResult'));
        var SaveCredentialsForAutologin = JSON.parse(localStorage.getItem('SaveCredentialsForAutologin'));

        if (ProposaltempResult.Result.d.Body.indexOf("##company.accountlogoicon##") >= 0) {
            _logoSrc = '~a4d,Upload,' + SaveCredentialsForAutologin.ShortAccountName + ',ClientAccountLogo,' + user.AccountLogoName;
        }

        var Data = { Contactid: contactid, ProposalId: proposalid, LogoSrc: _logoSrc, userId: user.UserId, Credential: _MobileCredential };
        GetResultFromService(MethodName, Data);
    } catch (exception) { }

}

function GetTemplatedMessageResult(result) {
    if (result != null) {
         
        var ProposalDetaildivProposaltemplate = document.getElementById('ProposalDetaildivProposaltemplate');

        if (result.d.Body.indexOf("../a4d/Upload/") >= 0) {
                var find = '../a4d/Upload/';
                var re = new RegExp(find, 'g');
                result.d.Body = result.d.Body.replace(re, "https://crm.saleswah.com//a4d/Upload/");
        }
        ProposalDetaildivProposaltemplate.innerHTML = result.d.Body;
        localStorage.removeItem('ProposalFinalResult');
        localStorage.setItem('ProposalFinalResult', JSON.stringify({ Result: result
        }));
    }
}

function GetProposaltemplateById(ProposalId) {
    try {
        var MethodName = "/GetProposalById";
        var user = JSON.parse(localStorage.getItem('LoggedUserDetails'));
        var _MobileCredential = MobileCredential;
        _MobileCredential.MobileAppKeyId = user.MobileAppKeyId;
        var Data = { ProposalId: ProposalId, Credential: _MobileCredential };
        GetResultFromService(MethodName, Data);
    } catch (exception) { }
}

function GetProposaltemplateByIdResult(result) {
    if (result != null) {
         
        var ProposalDetaildivProposaltemplate = document.getElementById('ProposalDetaildivProposaltemplate');
        if (result.d.Body.indexOf("../a4d/Upload/") >= 0) {
            var find = '../a4d/Upload/';
            var re = new RegExp(find, 'g');   
            result.d.Body = result.d.Body.replace(re, "https://crm.saleswah.com//a4d/Upload/");
        }
        ProposalDetaildivProposaltemplate.innerHTML = result.d.Body;

        localStorage.removeItem('ProposaltempResult');
        localStorage.setItem('ProposaltempResult', JSON.stringify({ Result: result
        }));
    }
}

////////////////ProposalTemplate Detail End///////////////////////////////
var swiperNestedProposalList
var pageIndexProposalList
function LoadProposalSlider() {

    var swiperParent = new Swiper('.swiper-parent', {
        paginationClickable: true,
        slidesPerView: 1
    })

    if (pageIndexProposalList == null) {
        pageIndexProposalList = 1;
    }
    swiperNestedProposalList = new Swiper('.swiper-nested-ProposalList', {
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
                pageIndexProposalList++;
                swiperNestedProposalList.params.onlyExternal = true
                GetProposalTemplateList(pageIndexProposalList);
                swiperNestedProposalList.params.onlyExternal = false;
                //
            }
        }
    })

}

function LoadProposalDetailSlider() {


    var swiperParent = new Swiper('.swiper-parent', {
        paginationClickable: true,
        slidesPerView: 1
    })


    var swiperNestedProposalDetail = new Swiper('.swiper-nested-ProposalDetail', {
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

                swiperNestedProposalDetail.setWrapperTranslate(0, 0, 0)


                swiperNestedProposalDetail.params.onlyExternal = false
            }
        }
    })

}


var ProposalDetailsImgContactNameClick = document.getElementById('ProposalDetailsImgContactNameClick');
if (ProposalDetailsImgContactNameClick != null) {

    $("#ProposalDetailsImgContactNameClick").on("click", function () {
        var MethodName = "/GetActiveContacts";
        var user = JSON.parse(localStorage.getItem('LoggedUserDetails'));
        var _MobileCredential = MobileCredential;
        _MobileCredential.MobileAppKeyId = user.MobileAppKeyId;
        var Data = { userId: user.UserId, filter: $("#ProposalDetailstxtContactName").val(), Credential: _MobileCredential };
        GetResultFromService(MethodName, Data);

    });

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
    return ReversValue;
}