var LoadLabelsByLanguage = JSON.parse(localStorage.getItem('LoadLabelsByLanguage'));
var ContactObject = JSON.parse(localStorage.getItem('ContactObject'));
function LoadActivityLogLabel() {

    var ActivityDetailHeader = document.getElementById('ActivityDetailHeader')
    if (ActivityDetailHeader != null) {
        ActivityDetailHeader.innerHTML = LoadLabelsByLanguage.Activity;
    }

    var ContactActivityLogLabelActivityName = document.getElementById('ContactActivityLogLabelActivityName')
    if (ContactActivityLogLabelActivityName != null) {
        ContactActivityLogLabelActivityName.innerHTML = LoadLabelsByLanguage.ActivityName;
    }
    var ContactActivityLogLabelContactName = document.getElementById('ContactActivityLogLabelContactName')
    if (ContactActivityLogLabelContactName != null) {
        ContactActivityLogLabelContactName.innerHTML = LoadLabelsByLanguage.ContactName;
    }
    var ContactActivityLogLabelRelatedto = document.getElementById('ContactActivityLogLabelRelatedto')
    if (ContactActivityLogLabelRelatedto != null) {
        ContactActivityLogLabelRelatedto.innerHTML = LoadLabelsByLanguage.RelatedTo;
    }
    var ContactActivityLogLabelActivityDate = document.getElementById('ContactActivityLogLabelActivityDate')
    if (ContactActivityLogLabelActivityDate != null) {
        ContactActivityLogLabelActivityDate.innerHTML = LoadLabelsByLanguage.ActivityDate;
    }
    var ContactActivityLogLabelActivityDetails = document.getElementById('ContactActivityLogLabelActivityDetails')
    if (ContactActivityLogLabelActivityDetails != null) {
        ContactActivityLogLabelActivityDetails.innerHTML = LoadLabelsByLanguage.ActivityDetails;
    }
    var ActivityLogHeaderLabelDetail = document.getElementById('ActivityLogHeaderLabelDetail')
    if (ActivityLogHeaderLabelDetail != null) {
        ActivityLogHeaderLabelDetail.innerHTML = LoadLabelsByLanguage.ActivityDetails;
    }
    var ActivityLogHeaderLabelTaskOrDeal = document.getElementById('ActivityLogHeaderLabelTaskOrDeal')
    if (ActivityLogHeaderLabelTaskOrDeal != null) {
        ActivityLogHeaderLabelTaskOrDeal.innerHTML = LoadLabelsByLanguage.TaslOrDeal;
    }
}
var swiperNestedActivityLog;
var swiperNestedActivitylogList;
var swiperParent;
function LoadActivityLogSlider() {


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


    swiperNestedActivityLog = new Swiper('.swiper-nested-ActivityLog', {
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

                swiperNestedActivityLog.setWrapperTranslate(0, 0, 0)


                swiperNestedActivityLog.params.onlyExternal = false
            }
        }
    })

    swiperNestedActivitylogList = new Swiper('.swiper-nested-ActivitylogList', {
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

                swiperNestedActivitylogList.setWrapperTranslate(0, 0, 0)


                swiperNestedActivitylogList.params.onlyExternal = false
            }
        }
    })


}

function IWantToLog() {


    if (ContactObject != null) {
        var ContactActivityLogtxtActivityName = document.getElementById('ContactActivityLogtxtActivityName')
        if (ContactActivityLogtxtActivityName != null) {
            ContactActivityLogtxtActivityName.value = $.trim('Phone');
            $("#ContactActivityLogtxtActivityName").attr('readonly', true);
        }

        var ContactActivityLogtxtContactName = document.getElementById('ContactActivityLogtxtContactName')
        if (ContactActivityLogtxtContactName != null) {
            ContactActivityLogtxtContactName.value = $.trim(ContactObject.FirstName) + ' ' + $.trim(ContactObject.LastName);
            $("#ContactActivityLogtxtContactName").attr('readonly', true);
        }

        var ContactActivityLogtxtActivityDate = document.getElementById('ContactActivityLogtxtActivityDate')
        if (ContactActivityLogtxtActivityDate != null) {
            ContactActivityLogtxtActivityDate.value = $.trim(Today());
            $("#ContactActivityLogtxtActivityDate").attr('readonly', true);
        }
        var ActivityRelatedTo = '';
        var ContactActivityLogDDlRelatedto = document.getElementById('ContactActivityLogDDlRelatedto')
        if (ContactActivityLogDDlRelatedto != null) {
            ActivityRelatedTo = $.trim($('#ContactActivityLogDDlRelatedto option:selected').text());

            if ($.trim(ActivityRelatedTo) == 'Task') {
                var MethodName = "/GetTaskListByAccountId";
                var user = JSON.parse(localStorage.getItem('LoggedUserDetails'));
                var _MobileCredential = MobileCredential;
                _MobileCredential.MobileAppKeyId = user.MobileAppKeyId;
                var Data = { AccountId: ContactObject.AccountId, Credential: _MobileCredential };
                GetResultFromService(MethodName, Data);
            }
            else if ($.trim(ActivityRelatedTo) == 'Deal') {
                var MethodName = "/GetDealListByAccountId";
                var user = JSON.parse(localStorage.getItem('LoggedUserDetails'));
                var _MobileCredential = MobileCredential;
                _MobileCredential.MobileAppKeyId = user.MobileAppKeyId;
                var Data = { pageIndex: 1, pageSize: 1000, filterPattern: '', orderByClause: '', userId: user.UserId, status: 1, order: '', AccountId: ContactObject.AccountId, Credential: _MobileCredential };
                GetResultFromService(MethodName, Data);
            }
        }
    }
}

function GetTaskListByAccountIdResult(result) {
    try {

        if (swiperNestedActivitylogList == null && result.d.length == 0) {
            $("#ActivityLogUlDetails").append("<div class='swiper-slide '><div class='dlist'> <ul><li><a href='#' ><h4>  No Record Found </h4></a></li></ul></div></div>");
        }
        else if (swiperNestedActivitylogList.slides.length == 0 && result.d.length == 0) {
            $("#ActivityLogUlDetails").append("<div class='swiper-slide '><div class='dlist'> <ul><li><a href='#' ><h4>  No Record Found </h4></a></li></ul></div></div>");
        }

        if (result.d.length > 0) {
            for (var i = 0; i < result.d.length; i++) {

                //alert(JSON.stringify( result.d[i])) //result.d[i].MainAddress.AddressLine1);
                var _ObjectDetail = "{'ObjectId':'" + result.d[i].Id + "'}";

                // $("#AccountListUlDetails").append("<div class='swiper-slide'><div class='dlist'><ul><li> <a href='detail.html' onclick=\"GETAccountObject(" + _AccountDetailObj + ")\"><h4>" + result.d[i].AccountName + "</h4><p>" + result.d[i].CityOrState + "</p></a></li></ul></div></div>");
                $("#ActivityLogUlDetails").append("<div class='swiper-slide'><div class='dlist'><ul><li> <a href='#' onclick=\"GETSelectedObject(" + _ObjectDetail + ")\"><h4>" + result.d[i].TaskDescription + " Due by " + convertJSONDateToReadableFormat(result.d[i].FollowUpDate) + "</h4><p>" + result.d[i].ConatctName + ", " + result.d[i].AccountName + "</p></a></li></ul></div></div>");

                if (swiperNestedActivitylogList != null) {
                    swiperNestedActivitylogList.reInit();
                }
                $(".dlist").click(function () {
                    $('#ActivityLogUlDetails').each(function () {
                        $(".swiper-slide").each(function () {
                            $(".dlist").removeClass('selected');
                        });
                    });

                    $(this).addClass('selected');


                });
            }
        }

        if (swiperNestedActivitylogList == null) {
            LoadActivityLogSlider();
        }

    } catch (exception) { }
}

function GetDealListByAccountIdResult(result) {
    try {
     
        if (swiperNestedActivitylogList == null && result.d.length == 0) {
            $("#ActivityLogUlDetails").append("<div class='swiper-slide '><div class='dlist'> <ul><li><a href='#' ><h4>  No Record Found </h4></a></li></ul></div></div>");
        }
        else if (swiperNestedActivitylogList.slides.length == 0 && result.d.length == 0) {
            $("#ActivityLogUlDetails").append("<div class='swiper-slide '><div class='dlist'> <ul><li><a href='#' ><h4>  No Record Found </h4></a></li></ul></div></div>");
        }

        if (result.d.length > 0) {
            for (var i = 0; i < result.d.length; i++) {

                var _ObjectDetail = "{'ObjectId':'" + result.d[i].DealId + "'}";
                $("#ActivityLogUlDetails").append("<div class='swiper-slide'><div class='dlist'><ul><li> <a href='#' onclick=\"GETSelectedObject(" + _ObjectDetail + ")\"><h4>" + result.d[i].AccountName + " </h4><p>" + result.d[i].DealValue + "</p></a></li></ul></div></div>");
                $(".dlist").click(function () {
                    $('#ActivityLogUlDetails').each(function () {
                        $(".swiper-slide").each(function () {
                            $(".dlist").removeClass('selected');
                        });
                    });

                    $(this).addClass('selected');


                });
                if (swiperNestedActivitylogList != null) {
                    swiperNestedAccountList.reInit();
                }
            }
        }

        if (swiperNestedActivitylogList == null) {
            LoadActivityLogSlider();
        }

    } catch (exception) { }
}
var ContactActivityLogDDlRelatedto = document.getElementById('ContactActivityLogDDlRelatedto')

if (ContactActivityLogDDlRelatedto != null) {
    
    $("#ContactActivityLogDDlRelatedto").change(function () {
        var ActivityRelatedTo = $.trim($('#ContactActivityLogDDlRelatedto option:selected').text());
        if (ContactObject != null) {
            swiperNestedActivitylogList.removeAllSlides();
            $("#ActivityLogUlDetails").empty();
            if ($.trim(ActivityRelatedTo) == 'Task') {
                var MethodName = "/GetTaskListByAccountId";
                var user = JSON.parse(localStorage.getItem('LoggedUserDetails'));
                var _MobileCredential = MobileCredential;
                _MobileCredential.MobileAppKeyId = user.MobileAppKeyId;
                var Data = { AccountId: ContactObject.AccountId, Credential: _MobileCredential };
                GetResultFromService(MethodName, Data);
            }
            else if ($.trim(ActivityRelatedTo) == 'Deal') {
                var MethodName = "/GetDealListByAccountId";
                var user = JSON.parse(localStorage.getItem('LoggedUserDetails'));
                var _MobileCredential = MobileCredential;
                _MobileCredential.MobileAppKeyId = user.MobileAppKeyId;
                var Data = { pageIndex: 1, pageSize: 1000, filterPattern: '', orderByClause: '', userId: user.UserId, status: 1, order: '', AccountId: ContactObject.AccountId, Credential: _MobileCredential };
                GetResultFromService(MethodName, Data);
            }
        }
    });
}

var ActivityLogBtnSaveActivity = document.getElementById('ActivityLogBtnSaveActivity');
if (ActivityLogBtnSaveActivity != null) {
    ActivityLogBtnSaveActivity.addEventListener('click', function () {
         
        var Activity = { ActivityName: '', ContactName: '', ActivityLoggedDate: '', AccountID: '', ContactID: '', ActivityDetails: '', ActivityRelatedId: '',  ReferenceID: '' }
        if (ContactObject != null) {
            var ContactActivityLogtxtActivityName = document.getElementById('ContactActivityLogtxtActivityName')
            if (ContactActivityLogtxtActivityName != null) {
                Activity.ActivityName = $.trim(ContactActivityLogtxtActivityName.value);
            }
            var ContactActivityLogtxtContactName = document.getElementById('ContactActivityLogtxtContactName')
            if (ContactActivityLogtxtContactName != null) {
                Activity.ContactName = $.trim(ContactActivityLogtxtContactName.value);
            }
            var ContactActivityLogtxtActivityDate = document.getElementById('ContactActivityLogtxtActivityDate')
            if (ContactActivityLogtxtActivityDate != null) {
                Activity.ActivityLoggedDate = convertToJSONDateOnly($.trim(ContactActivityLogtxtActivityDate.value));
            }
            Activity.ContactID = ContactObject.ContactId;
            Activity.AccountID = ContactObject.AccountId;

            var ContactActivityLogtxtActivityDetails = document.getElementById('ContactActivityLogtxtActivityDetails')
            if (ContactActivityLogtxtActivityDetails != null) {
                Activity.ActivityDetails = $.trim(ContactActivityLogtxtActivityDetails.value);
            }

            var ContactActivityLogDDlRelatedto = document.getElementById('ContactActivityLogDDlRelatedto')
            if (ContactActivityLogDDlRelatedto != null) {
                var ActivityRelatedTo = $.trim($('#ContactActivityLogDDlRelatedto option:selected').text());

                if ($.trim(ActivityRelatedTo) == 'Task') {
                    Activity.ActivityRelatedId = 3;
                }
                else if ($.trim(ActivityRelatedTo) == 'Deal') {
                    Activity.ActivityRelatedId = 4;
                }
            }
            //Activity.ActivityLogId = 1;
        }
        var SelectedObjectid = JSON.parse(localStorage.getItem('SelectedObjectid'));
        if (SelectedObjectid != null) {
            localStorage.removeItem('SelectedObjectid');
            Activity.ReferenceID = SelectedObjectid.ObjectId;
            var MethodName = "/InsertActivity";
            var user = JSON.parse(localStorage.getItem('LoggedUserDetails'));
            var _MobileCredential = MobileCredential;
            _MobileCredential.MobileAppKeyId = user.MobileAppKeyId;
            var Data = { _Activity: Activity, userId: user.UserId, Credential: _MobileCredential };
            GetResultFromService(MethodName, Data);
        }
        else {
            var ActivityRelatedTo = $.trim($('#ContactActivityLogDDlRelatedto option:selected').text());

            if ($.trim(ActivityRelatedTo) == 'Task') {
                ShowMessage(LoadLabelsByLanguage.SorryYouHaveSelectedTheWrongTask);
            }
            else if ($.trim(ActivityRelatedTo) == 'Deal') {
                ShowMessage(LoadLabelsByLanguage.SorryYouHaveSelectedTheWrongDeal);
            }

        }


    }, false);
}

function InsertActivityResult(result) {
    if (result != null) {
        if (result.d > 0) {
            localStorage.removeItem('ActivityInsertedSuccessfully');
            localStorage.setItem('ActivityInsertedSuccessfully', JSON.stringify({
                ActivityInsertedSuccessfully: 'ActivityInsertedSuccessfully'
            }));
            window.location.replace("../Contacts/detail.html");
        } 

    }
   
}
function GETSelectedObject(Obj) {
    localStorage.removeItem('SelectedObjectid');
    localStorage.setItem('SelectedObjectid', JSON.stringify({
        ObjectId: Obj.ObjectId
    }));
}