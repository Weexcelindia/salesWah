var ApplicationPageSize = JSON.parse(localStorage.getItem('ApplicationPageSize'));
var AppointmentpageSize = ApplicationPageSize.PageSize;

var AppoinmentGuestInfo = { FullName: '', Email: '', ContactId: '', DisplayEmail: '' };
var LoadLabelsByLanguage = JSON.parse(localStorage.getItem('LoadLabelsByLanguage'));
//Load label according to the selected language...
function LoadlabelsOfAppointment() {
    localStorage.removeItem('AppoinmentGuestInfo');

    //AppointmentAddNewHeader
    var AppointmentAddNewHeader = document.getElementById('AppointmentAddNewHeader');
    if (AppointmentAddNewHeader != null) {

        AppointmentAddNewHeader.innerHTML = LoadLabelsByLanguage.Appointments;
    }

    var AppointmentListHeaderLabelAppointmentList = document.getElementById('AppointmentListHeaderLabelAppointmentList');
    if (AppointmentListHeaderLabelAppointmentList != null) {

        AppointmentListHeaderLabelAppointmentList.innerHTML = LoadLabelsByLanguage.Appointments;
    }
    var AppointmentHeaderLabel = document.getElementById('AppointmentHeaderLabel');
    if (AppointmentHeaderLabel != null) {

        AppointmentHeaderLabel.innerHTML = LoadLabelsByLanguage.Appointments;
    }

    //    var AppointmentDetailHeader = document.getElementById('AppointmentDetailHeader');
    //    if (AppointmentDetailHeader != null) {

    //        AppointmentDetailHeader.innerHTML = LoadLabelsByLanguage.Detail;
    //    }

    var AppointmentDetailsLabelTitleOfAppointment = document.getElementById('AppointmentDetailsLabelTitleOfAppointment');
    if (AppointmentDetailsLabelTitleOfAppointment != null) {
        AppointmentDetailsLabelTitleOfAppointment.innerHTML = LoadLabelsByLanguage.Appointdashment;
    }

    var AppointmentDetailLabelAddGuest = document.getElementById('AppointmentDetailLabelAddGuest');
    if (AppointmentDetailLabelAddGuest != null) {
        AppointmentDetailLabelAddGuest.innerHTML = LoadLabelsByLanguage.Email;
    }
    //AppointmentDetailLabelAddGuest

    var AppointmentDetailsLabelTimeFrom = document.getElementById('AppointmentDetailsLabelTimeFrom');
    if (AppointmentDetailsLabelTimeFrom != null) {
        AppointmentDetailsLabelTimeFrom.innerHTML = LoadLabelsByLanguage.TimeFrom;
    }

    var AppointmentDetailsLabelTimeTo = document.getElementById('AppointmentDetailsLabelTimeTo');
    if (AppointmentDetailsLabelTimeTo != null) {
        AppointmentDetailsLabelTimeTo.innerHTML = LoadLabelsByLanguage.TimeTo;
    }

    var AppointmentDetailsLabelPlace = document.getElementById('AppointmentDetailsLabelPlace');
    if (AppointmentDetailsLabelPlace != null) {
        AppointmentDetailsLabelPlace.innerHTML = LoadLabelsByLanguage.Place;
    }

    var AppointmentDetailsLabelDescription = document.getElementById('AppointmentDetailsLabelDescription');
    if (AppointmentDetailsLabelDescription != null) {
        AppointmentDetailsLabelDescription.innerHTML = LoadLabelsByLanguage.Comment;
    }

    var AppointmentDetailLabelDetail = document.getElementById('AppointmentDetailLabelDetail')
    if (AppointmentDetailLabelDetail != null) {
        AppointmentDetailLabelDetail.innerHTML = LoadLabelsByLanguage.Detail;
    }

    var AppointmentDetailLabelDashboard = document.getElementById('AppointmentDetailLabelDashboard')
    if (AppointmentDetailLabelDashboard != null) {
        AppointmentDetailLabelDashboard.innerHTML = LoadLabelsByLanguage.Dashboard;
    }

    var AppointmentDetailLabelDecisionmaker = document.getElementById('AppointmentDetailLabelDecisionmaker')
    if (AppointmentDetailLabelDecisionmaker != null) {
        AppointmentDetailLabelDecisionmaker.innerHTML = LoadLabelsByLanguage.Contacts;
    }

    var AppointmentDetailLabelMessage = document.getElementById('AppointmentDetailLabelMessage')
    if (AppointmentDetailLabelMessage != null) {
        AppointmentDetailLabelMessage.innerHTML = LoadLabelsByLanguage.Message;
    }

    var AppointmentDetailLabelGuest = document.getElementById('AppointmentDetailLabelGuest')
    if (AppointmentDetailLabelGuest != null) {
        AppointmentDetailLabelGuest.innerHTML = LoadLabelsByLanguage.Guest;
    }

    var AppointmentAddNewlblAddGuest = document.getElementById('AppointmentAddNewlblAddGuest')
    if (AppointmentAddNewlblAddGuest != null) {
        AppointmentAddNewlblAddGuest.innerHTML = LoadLabelsByLanguage.AddNewGuest;
    }


}
//On dealListtxtSearch
var AppointmentListtxtSearch = document.getElementById('AppointmentListtxtSearch');
if (AppointmentListtxtSearch != null) {

    $("#AppointmentListtxtSearch").keyup(function (e) {
        if (e.keyCode == 13) {
            try {
                document.getElementById('divLoading').style.display = 'block';
                pageIndexAppointmentList = 1;
                SwiperNestedAppointmentList.setWrapperTranslate(0, 0, 0)
                SwiperNestedAppointmentList.removeAllSlides();
                var MethodName = "/GetAppointments";
                var user = JSON.parse(localStorage.getItem('LoggedUserDetails'));
                var _MobileCredential = MobileCredential;
                _MobileCredential.MobileAppKeyId = user.MobileAppKeyId;

                var Data = { pageIndex: pageIndexAppointmentList, pageSize: AppointmentpageSize, filterPattern: $.trim(AppointmentListtxtSearch.value), orderByClause: "AppointmentId", userId: user.UserId, order: "Asc", Credential: _MobileCredential };
                GetResultFromService(MethodName, Data);
            }
            catch (exception) { }
        }

    });

    $("#ImgAppointmentListSearch").click(function () {
        try {
            document.getElementById('divLoading').style.display = 'block';
            pageIndexAppointmentList = 1;
            SwiperNestedAppointmentList.setWrapperTranslate(0, 0, 0)
            SwiperNestedAppointmentList.removeAllSlides();
            var MethodName = "/GetAppointments";
            var user = JSON.parse(localStorage.getItem('LoggedUserDetails'));
            var _MobileCredential = MobileCredential;
            _MobileCredential.MobileAppKeyId = user.MobileAppKeyId;

            var Data = { pageIndex: pageIndexAppointmentList, pageSize: AppointmentpageSize, filterPattern: $.trim(AppointmentListtxtSearch.value), orderByClause: "AppointmentId", userId: user.UserId, order: "Asc", Credential: _MobileCredential };
            GetResultFromService(MethodName, Data);
        }
        catch (exception) { }

    });

}
//call to load data from a service...
function GetAppointmentListNew(PageIndex) {

    try {
        document.getElementById('divLoading').style.display = 'block';
        var MethodName = "/GetAppointments";
        var user = JSON.parse(localStorage.getItem('LoggedUserDetails'));
        var _MobileCredential = MobileCredential;
        _MobileCredential.MobileAppKeyId = user.MobileAppKeyId;

        var Data = { pageIndex: PageIndex, pageSize: AppointmentpageSize, filterPattern: $.trim(AppointmentListtxtSearch.value), orderByClause: "AppointmentId", userId: user.UserId, order: "Asc", Credential: _MobileCredential };
        GetResultFromService(MethodName, Data);
    }
    catch (exception) { }
}

function LoadAppointmentListResult(result) {

    var AppointmentSaveSuccessfully = JSON.parse(localStorage.getItem('AppointmentSaveSuccessfully'));
    if (AppointmentSaveSuccessfully != null) {
        if (AppointmentSaveSuccessfully.AppointmentSaveSuccessfully == 'AppointmentSaveSuccessfully') {
            localStorage.removeItem('AppointmentSaveSuccessfully');
            ShowMessage(LoadLabelsByLanguage.AppointmentCreatedSuccessfully);
        }
        else if (AppointmentSaveSuccessfully.AppointmentSaveSuccessfully == 'AppointmentNotSaveSuccessfully') {
            localStorage.removeItem('AppointmentSaveSuccessfully');
            ShowMessage(LoadLabelsByLanguage.AppointmentNotCreated);
        }
    }


    var AppointmentListtxtSearch = document.getElementById('AppointmentListtxtSearch');
    if (AppointmentListtxtSearch != null) {
        var search = $.trim(AppointmentListtxtSearch.value)
        if (search.length > 0) {
            if (SwiperNestedAppointmentList != null) {
                if (pageIndexAppointmentList == 1) {
                    SwiperNestedAppointmentList.removeAllSlides();
                    $("#AppointmentListUlDetails").empty();
                }
                if (SwiperNestedAppointmentList.slides.length == 0 && result.d.length == 0) {
                    $("#AppointmentListUlDetails").append("<div class='swiper-slide '><div class='dlist'> <ul><li><a href='#' ><h4>  No Record Found </h4></a></li></ul></div></div>");
                    SwiperNestedAppointmentList.reInit();
                }
            }
        }
    }





    if (SwiperNestedAppointmentList == null) {
        if (result.d.length == 0) {
            $("#AppointmentListUlDetails").append("<div class='swiper-slide '><div class='dlist'> <ul><li><a href='#' ><h4>  No Record Found </h4></a></li></ul></div></div>");

        }
    }
    if (result.d.length > 0) {
        for (var i = 0; i < result.d.length; i++) {
           
            var ReplacedTitle = result.d[i].Title.replace(/'/g, "\\'");
            var ReplacedPlace = result.d[i].Where.replace(/'/g, "\\'");
            var ReplacedDescription = result.d[i].Description.replace(/'/g, "\\'");
          
            var _AppointmentDetailObj = "{'AppointmentId':'" + result.d[i].AppointmentId + "','TitleOfAppointment':'" + ReplacedTitle + "', 'TimeFrom':'" + result.d[i].TimeblockFrom + "','TimeTo':'" + result.d[i].TimeblockTo + "','Place':'" + ReplacedPlace + "','Description':'" + ReplacedDescription + "', 'AppointmentIdInGoogle':'" + result.d[i].AppointmentIdInGoogle + "', 'AppointmentIdInMicrosoft':'" + result.d[i].AppointmentIdInMicrosoft + "', 'RepeatDetail':'" + result.d[i].RepeatDetail + "', 'AppointmentType':'" + result.d[i].AppointmentType + "', 'OfferAsSlotsOfInMinutes':'" + result.d[i].OfferAsSlotsOfInMinutes + "',}";

            $("#AppointmentListUlDetails").append("<div class='swiper-slide'><div class='dlist'><ul><li> <a href='detail.html' onclick=\"GETAppointmentObject(" + _AppointmentDetailObj + ")\"><h4>" + result.d[i].Title + "</h4><p>On " + isoDateReviver(result.d[i].TimeblockFrom) + "</p><span> At " + result.d[i].Where + "</span></a></li></ul></div></div>");
            if (SwiperNestedAppointmentList != null) {
                SwiperNestedAppointmentList.reInit();
            }
        }
    }
    if (SwiperNestedAppointmentList == null) {
        LoadAppointmentSlider();
    }
    document.getElementById('divLoading').style.display = 'none';
}
//////////////////////////////////////////////////////Start Call function Appointment Detail////////////////////////////////////////////////
function GETAppointmentObject(Obj) {

    try {
        localStorage.removeItem('AppointmentObject');
        localStorage.setItem('AppointmentObject', JSON.stringify({
            AppointmentId: Obj.AppointmentId,
            TitleOfAppointment: Obj.TitleOfAppointment,
            TimeFrom: Obj.TimeFrom,
            TimeTo: Obj.TimeTo,
            Place: Obj.Place,
            Description: Obj.Description,

            AppointmentIdInGoogle: Obj.AppointmentIdInGoogle,
            AppointmentIdInMicrosoft: Obj.AppointmentIdInMicrosoft,
            RepeatDetail: Obj.RepeatDetail,
            AppointmentType: Obj.AppointmentType,
            OfferAsSlotsOfInMinutes: Obj.OfferAsSlotsOfInMinutes
        }));

    }
    catch (exception) { }
}

function SetAppointmentDetailPageObject() {
    var AppointmentObject = JSON.parse(localStorage.getItem('AppointmentObject'));

    var AppointmentDetailHeader = document.getElementById('AppointmentDetailHeader');
    if (AppointmentDetailHeader != null) {
        //      
        if (AppointmentObject.TitleOfAppointment.length > 30) {
            AppointmentDetailHeader.innerHTML = AppointmentObject.TitleOfAppointment.substring(0, 30) + '...';
        }
        else {
            AppointmentDetailHeader.innerHTML = AppointmentObject.TitleOfAppointment;

        }

    }

    //AppointmentDetailstxtTitleOfAppointment
    var AppointmentDetailstxtTitleOfAppointment = document.getElementById('AppointmentDetailstxtTitleOfAppointment');
    AppointmentDetailstxtTitleOfAppointment.value = AppointmentObject.TitleOfAppointment;

    //AppointmentDetailstxtTimeFrom
    var AppointmentDetailstxtTimeFrom = document.getElementById('AppointmentDetailstxtTimeFrom');
    AppointmentDetailstxtTimeFrom.value = ConvertJsonDateToDateAndtime(AppointmentObject.TimeFrom);

    //AppointmentDetailstxtTimeTo
    var AppointmentDetailstxtTimeTo = document.getElementById('AppointmentDetailstxtTimeTo');
    AppointmentDetailstxtTimeTo.value = ConvertJsonDateToDateAndtime(AppointmentObject.TimeTo);

    //AppointmentDetailstxtPlace
    var AppointmentDetailstxtPlace = document.getElementById('AppointmentDetailstxtPlace');
    AppointmentDetailstxtPlace.value = AppointmentObject.Place;

    //AppointmentDetailstxtareaDescription
    //    var AppointmentDetailstxtareaDescription = document.getElementById('AppointmentDetailstxtareaDescription');
    //    AppointmentDetailstxtareaDescription.value = AppointmentObject.Description;

    LoadAppointmentDetailSlider();
}
//////////////////////////////////////////////////////End Call function Appointment Detail////////////////////////////////////////////////


/////////////////////////////////////////////////////Load Appointment list Slider Start//////////////////////////////////////////////////////
var SwiperNestedAppointmentList
var pageIndexAppointmentList
var swiperParent
function LoadAppointmentSlider() {

     swiperParent = new Swiper('.swiper-parent', {
        paginationClickable: true,

        slidesPerView: 1
    })

    if (pageIndexAppointmentList == null) {
        pageIndexAppointmentList = 1;
    }
    SwiperNestedAppointmentList = new Swiper('.swiper-nested-AppointmentList', {
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
                pageIndexAppointmentList++;
                SwiperNestedAppointmentList.params.onlyExternal = true
                GetAppointmentListNew(pageIndexAppointmentList);
                SwiperNestedAppointmentList.params.onlyExternal = false;

            }

        }
    })

}

/////////////////////////////////////////////////////Load Appointment list Slider End//////////////////////////////////////////////////////


/////////////////////////////////////////////////////Load Appointment Details Slider Start//////////////////////////////////////////////////////
var SwiperNestedAppointmentAddNewGustLst
var swiperNestedAppointmentguests
function LoadAppointmentDetailSlider() {

    var swiperParent = new Swiper('.swiper-parent', {
        paginationClickable: true,
        onSlideChangeStart: function () {
            var dots = [".detail_nav1", ".detail_nav2"];
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
    var swiperNestedAppointmentDetail = new Swiper('.swiper-nested-AppointmentDetail', {
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
                swiperNestedAppointmentDetail.params.onlyExternal = true
                //GetAppointmentListNew(pageIndexAccountList);
                swiperNestedAppointmentDetail.params.onlyExternal = false;
                //pageIndexAccountList++;
            }

        }
    })
    swiperNestedAppointmentguests = new Swiper('.swiper-nested-Appointmentguests', {
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
                swiperNestedAppointmentguests.params.onlyExternal = true
                //GetAppointmentListNew(pageIndexAccountList);
                swiperNestedAppointmentguests.params.onlyExternal = false;
                //pageIndexAccountList++;
            }

        }
    })
    //swiper-nested-Appointmentguests
    //var SwiperNestedAppointmentAddNewGustLst
    SwiperNestedAppointmentAddNewGustLst = new Swiper('.swiper-nested-AddNewGustLst', {
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
                SwiperNestedAppointmentAddNewGustLst.params.onlyExternal = true
                //GetAppointmentListNew(pageIndexAccountList);
                SwiperNestedAppointmentAddNewGustLst.params.onlyExternal = false;
                //pageIndexAccountList++;
            }

        }
    })
}
/////////////////////////////////////////////////////Load AppointmentDetails Slider End//////////////////////////////////////////////////////

function ValidateAppointment() {

    var flag = true;
    var errorMsg = "";

    var _title, _frmDate, _toDate, _place, _description, _templstContact;
    var AppointmentAddNewHeader = document.getElementById('AppointmentAddNewHeader')
    var AppointmentDetailHeader = document.getElementById('AppointmentDetailHeader')
    if (AppointmentAddNewHeader != null) {
        _title = $.trim($("#AddNewAppointmenttxtTitleOfAppointment").val());
        _frmDate = $.trim($("#AddNewAppointmenttxtTimeFrom").val());
        _toDate = $.trim($("#AddNewAppointmenttxtTimeTo").val());
        _place = $.trim($("#AddNewAppointmenttxtPlace").val());
        _description = $.trim($("#AddNewAppointmenttxtareaDescription").val());
    } else if (AppointmentDetailHeader != null) {
        _title = $.trim($("#AppointmentDetailstxtTitleOfAppointment").val());
        _frmDate = $.trim($("#AppointmentDetailstxtTimeFrom").val());
        _toDate = $.trim($("#AppointmentDetailstxtTimeTo").val());
        _place = $.trim($("#AppointmentDetailstxtPlace").val());
        _description = $.trim($("#AppointmentDetailsLabelDescription").val());
    }
    _templstContact = JSON.parse(localStorage.getItem('AppoinmentGuestInfo'));


    if (_title == '') {
        errorMsg = errorMsg + "\n* " + LoadLabelsByLanguage.PleaseEnterTitle;

        flag = false;
    }


    if (_place == '') {

        errorMsg = errorMsg + "\n* " + LoadLabelsByLanguage.PleaseEnterPlace;

        flag = false;
    }


    if (new Date(_frmDate) < new Date(Today()) || new Date(_toDate) < new Date(Today())) {

        errorMsg = errorMsg + "\n* " + LoadLabelsByLanguage.FrmToDateNotLessCurrentDate + "<br/>";

        flag = false;
    }
    if (new Date(_frmDate) > new Date(_toDate)) {

        errorMsg = errorMsg + "\n* " + LoadLabelsByLanguage.FromDatenotGreaterThanToDate + "<br/>";

        flag = false;
    }

    if (_templstContact == null) {

        errorMsg = errorMsg + "\n* " + LoadLabelsByLanguage.PleaseAddAtLeastOneGuest + "<br/>";

        flag = false;
    }



    if (flag == false) {
        ShowMessage(errorMsg);
    }

    return flag;
}

function CreateNewAppointment() {
    try {
        if (ValidateAppointment() == true) {

            var MethodName = "/InsertAppointment";
            var user = JSON.parse(localStorage.getItem('LoggedUserDetails'));
            var _MobileCredential = MobileCredential;
            _MobileCredential.MobileAppKeyId = user.MobileAppKeyId;

            var _title = $.trim($("#AddNewAppointmenttxtTitleOfAppointment").val());
            var _frmDate = $.trim($("#AddNewAppointmenttxtTimeFrom").val());
            var _toDate = $.trim($("#AddNewAppointmenttxtTimeTo").val());
            var _place = $.trim($("#AddNewAppointmenttxtPlace").val());
            var _description = $.trim($("#AddNewAppointmenttxtareaDescription").val());


            var _appointment = { Title: _title, TimeblockFrom: convertToJSONDate(_frmDate), TimeblockTo: convertToJSONDate(_toDate), Where: _place, Description: _description };

            var Data = { appointment: _appointment, userId: user.UserId, Credential: _MobileCredential };

            GetResultFromService(MethodName, Data);
        }
    } catch (exception) { }
}

//InsertAppointmentGuestMappingNew(Emails.ToArray(), ContactIds.ToArray(), AppointmentId, IsUpdate, AppSetting.MobileApiCredential);

function CreateNewAppointmentResult(result) {

    try {
        if (result != null) {
            if (result.d > 0) {

                var _templstContact = JSON.parse(localStorage.getItem('AppoinmentGuestInfo'));
                var lstContactIds = new Array(), lstEmailAddress = new Array();

                if (_templstContact != null) {
                    for (var i = 0; i < _templstContact.Result.length; i++) {
                        if (_templstContact.Result[i].ContactId == '') {
                            lstEmailAddress.push(_templstContact.Result[i].DisplayEmail);
                        }
                        else
                            lstContactIds.push(parseInt(_templstContact.Result[i].ContactId));
                    }
                }

                if (lstEmailAddress.length > 0 || lstContactIds.length > 0) {
                    var MethodName = "/InsertAppointmentGuestMappingNew";
                    var user = JSON.parse(localStorage.getItem('LoggedUserDetails'));
                    var _MobileCredential = MobileCredential;
                    _MobileCredential.MobileAppKeyId = user.MobileAppKeyId;

                    var Data = { emailLst: lstEmailAddress, ContsctIdLst: lstContactIds, AppointmentId: result.d, IsUpdated: 0, Credential: _MobileCredential };

                    GetResultFromService(MethodName, Data);
                }

                localStorage.removeItem('RedirectTo');
                localStorage.setItem('RedirectTo', JSON.stringify({
                    RedirectTo: '../Appointment/AppointmentList.html'
                }));
            }
        }
    }
    catch (exception) { }
}

function ResultInsertAppointmentGuestMappingNew(result) {
    try {

        if (result != null) {
            if (result.d > 0) {


                localStorage.removeItem('AppointmentSaveSuccessfully');
                localStorage.setItem('AppointmentSaveSuccessfully', JSON.stringify({
                    AppointmentSaveSuccessfully: 'AppointmentSaveSuccessfully'
                }));
                //ShowMessage(LoadLabelsByLanguage.AppointmentCreatedSuccessfully);
            }
            else
                if (result.d <= 0) {


                    localStorage.removeItem('AppointmentSaveSuccessfully');
                    localStorage.setItem('AppointmentSaveSuccessfully', JSON.stringify({
                        AppointmentSaveSuccessfully: 'AppointmentNotSaveSuccessfully'
                    }));
                    //ShowMessage(LoadLabelsByLanguage.AppointmentCreatedSuccessfully);
                }
            RedirectToPage();
        }
    }
    catch (exception) { }

}

//AppointmentAddNewAppointmentBtnCreateAppointment 
var AppointmentAddNewAppointmentBtnCreateAppointment = document.getElementById('AppointmentAddNewAppointmentBtnCreateAppointment');
if (AppointmentAddNewAppointmentBtnCreateAppointment != null) {
    AppointmentAddNewAppointmentBtnCreateAppointment.addEventListener('click', function () {

        CreateNewAppointment();

    }, false);
}

$('#AppointmentAddNewtxtAddGuest').on("keypress", function (e) {


    if (e.keyCode == 13 && $.trim($('#AppointmentAddNewtxtAddGuest').val()).length > 0) {

        accountNameLst.length = 0;
        if ($.trim($('#AppointmentAddNewtxtAddGuest').val()).indexOf("@") > 0 && $.trim($('#AppointmentAddNewtxtAddGuest').val()).indexOf("<") < 0) {
            BindGuestToAppointmentByMail();
        }
        else
            BindGuestToAppointment();
    }


});

function GetActiveContacts() {
    //    try {
    //        var MethodName = "/GetActiveContacts";
    //        var user = JSON.parse(localStorage.getItem('LoggedUserDetails'));
    //        var _MobileCredential = MobileCredential;
    //        _MobileCredential.MobileAppKeyId = user.MobileAppKeyId;
    //        var Data = { userId: user.UserId, filter: '', Credential: _MobileCredential };
    //        GetResultFromService(MethodName, Data);
    //    } catch (exception) { }
}
var accountNameLst = new Array();

//On AppointmentAddNewtxtAddGuest
var AppointmentAddNewtxtAddGuest = document.getElementById('AppointmentAddNewtxtAddGuest');
if (AppointmentAddNewtxtAddGuest != null) {

    $("#AppointmentAddNewtxtAddGuest").keyup(function () {
        try {

            if ($("#AppointmentAddNewtxtAddGuest").val().length < 3) {

                accountNameLst.length = 0;

            }

        } catch (exception) { }

    });

}


function GetActiveContactsResult(result) {
    try {


        if (result.d.length > 0) {
            for (var i = 0; i < result.d.length; i++) {
                accountNameLst[i] = result.d[i].FullName + '<' + result.d[i].Email + '>';
            }
        }
        $("#AppointmentAddNewtxtAddGuest").autocomplete({
            source: accountNameLst
        });
        $("#AppointmentAddNewtxtAddGuest").autocomplete("search", $("#AppointmentAddNewtxtAddGuest").val());
    }
    catch (exception) { }
}
$('html').click(function () {
    var AppointmentAddNewtxtAddGuest = document.getElementById('AppointmentAddNewtxtAddGuest');
    if (AppointmentAddNewtxtAddGuest != null) {
        if ($('.ui-autocomplete.ui-widget:visible').length == 1) {
            $("#AppointmentAddNewtxtAddGuest").autocomplete("close");
        }
    }

});
function BindGuestToAppointment() {
    try {

        var MethodName = "/GetContactByEmail";
        var user = JSON.parse(localStorage.getItem('LoggedUserDetails'));
        var _MobileCredential = MobileCredential;
        _MobileCredential.MobileAppKeyId = user.MobileAppKeyId;

        var myString = $.trim($('#AppointmentAddNewtxtAddGuest').val());
        var arr = myString.split('<');
        var _email = arr[1].split('>');

        var Data = { Email: _email[0], Credential: _MobileCredential };
        GetResultFromService(MethodName, Data);
    } catch (exception) { }
}

var lstContact = new Array();


function BindGuestToAppointmentResult(result) {
    try {


        var _templstContact = JSON.parse(localStorage.getItem('AppoinmentGuestInfo'));
        var _lstContact = new Array();
        var index = 0;
        if (_templstContact != null) {
            for (var i = 0; i < _templstContact.Result.length; i++) {
                if (result.d.Email == _templstContact.Result[i].DisplayEmail) {
                    ShowMessage(LoadLabelsByLanguage.Contactisalreadyadded);
                    return;
                }
                _lstContact.push(_templstContact.Result[i]);
                index = index + 1;
            }
        }
        if (result != null) {
            if (result.d == null) {
                _result = { FullName: result.FullName, ContactId: result.ContactId, DisplayEmail: result.Email };
            }
            else {
                _result = { FullName: result.d.FullName, ContactId: result.d.Id, DisplayEmail: result.d.Email };
            }
        }


        _lstContact[index] = _result;

        localStorage.removeItem('AppoinmentGuestInfo');
        localStorage.setItem('AppoinmentGuestInfo', JSON.stringify({
            Result: _lstContact
        }));

        $('#AppointmentAddNewtxtAddGuest').val('');

        $("#AppointmentAddNewGustLst").val('');

        if (window.location.href.indexOf('AddNewAppointment.html') > -1) {

            if (SwiperNestedAppointmentAddNewGustLst != null) {
                SwiperNestedAppointmentAddNewGustLst.removeAllSlides();
            }
        }

        if (window.location.href.indexOf('detail.html') > -1) {

            //            if (SwiperNestedAppointmentAddNewGustLst != null) {
            //                SwiperNestedAppointmentAddNewGustLst.removeAllSlides();
            //            }
        }


        $("#AppointmentAddNewGustLst").empty();

        if (SwiperNestedAppointmentAddNewGustLst == null) {
            if (_lstContact.length == 0) {
                $("#AppointmentAddNewGustLst").append("<div class='swiper-slide '><div class='dlist'> <ul><li><a href='#' ><h4>  No Record Found </h4></a></li></ul></div></div>");

            }
        }

        if (SwiperNestedAppointmentAddNewGustLst != null) {
            if (SwiperNestedAppointmentAddNewGustLst.slides.length == 0) {
                if (_lstContact.length == 0) {
                    $("#AppointmentAddNewGustLst").append("<div class='swiper-slide '><div class='dlist'> <ul><li><a href='#' ><h4>  No Record Found</h4> </a></li></ul></div></div>");
                    SwiperNestedAppointmentAddNewGustLst.reInit();
                }
            }
        }

        if (_lstContact.length > 0) {
            for (var i = 0; i < _lstContact.length; i++) {
                $("#AppointmentAddNewGustLst").append("<div class='swiper-slide'><div class='dlist'><ul><li><a href='#'> <h4>" + _lstContact[i].FullName + "</h4><p>" + _lstContact[i].DisplayEmail + "</p></a></li></ul></div></div>");
                if (SwiperNestedAppointmentAddNewGustLst != null) {
                    SwiperNestedAppointmentAddNewGustLst.reInit();
                }
            }
        }
        if (SwiperNestedAppointmentAddNewGustLst == null) {
            LoadAppointmentDetailSlider();
        }
    }
    catch (exception) { }
}


function BindGuestToAppointmentByMail() {
    try {

        var _templstContact = JSON.parse(localStorage.getItem('AppoinmentGuestInfo'));
        var _lstContact = new Array();
        var index = 0;
        if (_templstContact != null) {
            for (var i = 0; i < _templstContact.Result.length; i++) {
                if ($.trim($('#AppointmentAddNewtxtAddGuest').val()) == _templstContact.Result[i].DisplayEmail) {
                    ShowMessage(LoadLabelsByLanguage.Contactisalreadyadded);
                    return;
                }
                _lstContact.push(_templstContact.Result[i]);
                index = index + 1;
            }
        }

        _result = { FullName: '', Email: $.trim($('#AppointmentAddNewtxtAddGuest').val()), ContactId: '', DisplayEmail: $.trim($('#AppointmentAddNewtxtAddGuest').val()) };
        _lstContact[index] = _result;

        localStorage.removeItem('AppoinmentGuestInfo');
        localStorage.setItem('AppoinmentGuestInfo', JSON.stringify({
            Result: _lstContact
        }));

        $('#AppointmentAddNewtxtAddGuest').val('');

        $("#AppointmentAddNewGustLst").empty();


        if (SwiperNestedAppointmentAddNewGustLst.slides.length == 0) {
            if (_lstContact.length == 0) {
                $("#AppointmentAddNewGustLst").append("<div class='swiper-slide '><div class='dlist'> <ul><li><a href='#' ><h4>  No Record Found </h4></a></li></ul></div></div>");

            }
        }
        if (_lstContact.length > 0) {
            for (var i = 0; i < _lstContact.length; i++) {
                $("#AppointmentAddNewGustLst").append("<div class='swiper-slide'><div class='dlist'><ul><li><h4><a href='#' > " + _lstContact[i].FullName + "</h4><p>" + _lstContact[i].DisplayEmail + "</p></li></ul></div></div></a>");
                if (SwiperNestedAppointmentAddNewGustLst != null) {
                    SwiperNestedAppointmentAddNewGustLst.reInit();
                }
            }
        }
        if (SwiperNestedAppointmentAddNewGustLst == null) {
            LoadAppointmentDetailSlider();
        }
    }
    catch (exception) { }
}

function LoadContactOrAccount() {
    try {
        var SaleswahCrmlitePageURL = JSON.parse(localStorage.getItem('SaleswahCrmlitePageURL'));
        if (SaleswahCrmlitePageURL.URL == 'Contacts_detail_html') {
            localStorage.removeItem('SaleswahCrmlitePageURL');
            var ContactObject = JSON.parse(localStorage.getItem('ContactObject'));

            $('#AppointmentAddNewtxtAddGuest').val(ContactObject.FullName);
            //$('#AppointmentAddNewtxtAddGuest').attr('readonly', 'true');
            BindGuestToAppointmentResult(ContactObject);
            //localStorage.removeItem('ContactObject');
        }


    }
    catch (e) { }
}

function GetAppointmentGuestsById() {
    try {

        var MethodName = "/GetAppointmentGuestsById";
        var user = JSON.parse(localStorage.getItem('LoggedUserDetails'));
        var AppointmentObject = JSON.parse(localStorage.getItem('AppointmentObject'));

        var _MobileCredential = MobileCredential;
        _MobileCredential.MobileAppKeyId = user.MobileAppKeyId;

        var Data = { appointId: AppointmentObject.AppointmentId, Credential: _MobileCredential };

        GetResultFromService(MethodName, Data);
    } catch (exception) { }
}
function GetAppointmentGuestsByIdResult(result) {
    try {


        var _lstContact = new Array();

        if (result != null) {
            for (var i = 0; i < result.d.length; i++) {
                if (result.d[i].ContactId == '') {
                    _result = { FullName: '', ContactId: '', Email: result.d[i].GuestEmail, DisplayEmail: result.d[i].GuestEmail }
                }
                else {
                    _result = { FullName: result.d[i].GuestName, ContactId: result.d[i].ContactId, DisplayEmail: result.d[i].GuestEmail }
                }

                _lstContact.push(_result);
            }
        }

        localStorage.removeItem('AppoinmentGuestInfo');
        localStorage.setItem('AppoinmentGuestInfo', JSON.stringify({
            Result: _lstContact
        }));

        $('#AppointmentAddNewtxtAddGuest').val('');

        $("#AppointmentAddNewGustLst").val('');

        if (SwiperNestedAppointmentAddNewGustLst != null) {
            SwiperNestedAppointmentAddNewGustLst.removeAllSlides();
        }


        $("#AppointmentAddNewGustLst").empty();

        if (SwiperNestedAppointmentAddNewGustLst == null) {
            if (_lstContact.length == 0) {
                $("#AppointmentAddNewGustLst").append("<div class='swiper-slide '><div class='dlist'> <ul><li><a href='#' ><h4>  No Record Found </h4></a></li></ul></div></div>");

            }
        }

        if (SwiperNestedAppointmentAddNewGustLst != null) {
            if (SwiperNestedAppointmentAddNewGustLst.slides.length == 0) {
                if (_lstContact.length == 0) {
                    $("#AppointmentAddNewGustLst").append("<div class='swiper-slide '><div class='dlist'> <ul><li> <a href='#' ><h4> No Record Found </h4></a></li></ul></div></div>");
                    SwiperNestedAppointmentAddNewGustLst.reInit();
                }
            }
        }

        if (_lstContact.length > 0) {
            for (var i = 0; i < _lstContact.length; i++) {
                $("#AppointmentAddNewGustLst").append("<div class='swiper-slide'><div class='dlist'><ul><li><a href='#' > <h4>" + _lstContact[i].FullName + "</h4><p>" + _lstContact[i].DisplayEmail + "</p></a></li></ul></div></div>");
                if (SwiperNestedAppointmentAddNewGustLst != null) {
                    SwiperNestedAppointmentAddNewGustLst.reInit();
                }
            }
        }
        if (SwiperNestedAppointmentAddNewGustLst == null) {
            LoadAppointmentDetailSlider();
        }
    }
    catch (exception) { }
}

function UpdateAppointment() {
    try {
        if (ValidateAppointment() == true) {

            var MethodName = "/UpdateAppointment";
            var user = JSON.parse(localStorage.getItem('LoggedUserDetails'));
            var _MobileCredential = MobileCredential;
            _MobileCredential.MobileAppKeyId = user.MobileAppKeyId;

            var _templstContact = JSON.parse(localStorage.getItem('AppoinmentGuestInfo'));

            var _title = $.trim($("#AppointmentDetailstxtTitleOfAppointment").val());
            var _frmDate = $.trim($("#AppointmentDetailstxtTimeFrom").val());
            var _toDate = $.trim($("#AppointmentDetailstxtTimeTo").val());
            var _place = $.trim($("#AppointmentDetailstxtPlace").val());
            var _description = $.trim($("#AppointmentDetailsLabelDescription").val());
            AppointmentObj = JSON.parse(localStorage.getItem('AppointmentObject'));

            var _appointment = { AppointmentId: AppointmentObj.AppointmentId, AppointmentIdInGoogle: AppointmentObj.AppointmentIdInGoogle, AppointmentIdInMicrosoft: AppointmentObj.AppointmentIdInMicrosoft, RepeatDetail: AppointmentObj.RepeatDetail, AppointmentType: AppointmentObj.AppointmentType, OfferAsSlotsOfInMinutes: AppointmentObj.OfferAsSlotsOfInMinutes, AppointmentGuestCount: _templstContact.Result.length, Title: _title, TimeblockFrom: convertToJSONDate(_frmDate), TimeblockTo: convertToJSONDate(_toDate), Where: _place, Description: _description };

            var Data = { appointment: _appointment, userId: user.UserId, Credential: _MobileCredential };

            GetResultFromService(MethodName, Data);


            localStorage.removeItem('RedirectTo');
            localStorage.setItem('RedirectTo', JSON.stringify({
                RedirectTo: '../Appointment/AppointmentList.html'
            }));
        }
    } catch (exception) { }
}

function UpdateAppointmentResult(result) {
    try {

        if (result != null) {
            if (result.d == true) {

                var _title = $.trim($("#AppointmentDetailstxtTitleOfAppointment").val());
                var _frmDate = $.trim($("#AppointmentDetailstxtTimeFrom").val());
                var _toDate = $.trim($("#AppointmentDetailstxtTimeTo").val());
                var _place = $.trim($("#AppointmentDetailstxtPlace").val());
                var _description = $.trim($("#AppointmentDetailsLabelDescription").val());

                var _templstContact = JSON.parse(localStorage.getItem('AppoinmentGuestInfo'));
                var lstContactIds = new Array(), lstEmailAddress = new Array();

                if (_templstContact != null) {
                    for (var i = 0; i < _templstContact.Result.length; i++) {
                        if (_templstContact.Result[i].ContactId == '') {
                            lstEmailAddress.push(_templstContact.Result[i].DisplayEmail);
                        }
                        else
                            lstContactIds.push(parseInt(_templstContact.Result[i].ContactId));
                    }
                }
                AppointmentObj = JSON.parse(localStorage.getItem('AppointmentObject'));
                _AppointmentId = AppointmentObj.AppointmentId
                _IsUpdated = 0;

                if (_title != AppointmentObj.TitleOfAppointment || _place != AppointmentObj.Place || convertToJSONDate(_frmDate) > convertJSONDateToReadableFormat(AppointmentObj.TimeFrom) || convertToJSONDate(_toDate) > convertJSONDateToReadableFormat(AppointmentObj.TimeTo))
                    _IsUpdated = 1;
                else
                    _IsUpdated = 0;

                //                 Title: _title, TimeblockFrom: convertToJSONDate(_frmDate), TimeblockTo: convertToJSONDate(_toDate), Where: _place, Description: _description };
                if (lstEmailAddress.length > 0 || lstContactIds.length > 0) {
                    var MethodName = "/InsertAppointmentGuestMappingNew";
                    var user = JSON.parse(localStorage.getItem('LoggedUserDetails'));
                    var _MobileCredential = MobileCredential;
                    _MobileCredential.MobileAppKeyId = user.MobileAppKeyId;

                    var Data = { emailLst: lstEmailAddress, ContsctIdLst: lstContactIds, AppointmentId: _AppointmentId, IsUpdated: _IsUpdated, Credential: _MobileCredential };

                    GetResultFromService(MethodName, Data);
                }
            }
        }
    }
    catch (exception) { }
}

var AppointmentAddNewImgAddGuestClick = document.getElementById('AppointmentAddNewImgAddGuestClick');
if (AppointmentAddNewImgAddGuestClick != null) {

    $("#AppointmentAddNewImgAddGuestClick").on("click", function () {

        var MethodName = "/GetActiveContacts";
        var user = JSON.parse(localStorage.getItem('LoggedUserDetails'));
        var _MobileCredential = MobileCredential;
        _MobileCredential.MobileAppKeyId = user.MobileAppKeyId;
        var Data = { userId: user.UserId, filter: $("#AppointmentAddNewtxtAddGuest").val(), Credential: _MobileCredential };
        GetResultFromService(MethodName, Data);

    });

}