var LoadLabelsByLanguage = JSON.parse(localStorage.getItem('LoadLabelsByLanguage'));

//GetCommentFeed
function loadLabelOfMessage() {
    //MessagelistHeaderLabelComments
    var MessagelistHeaderLabelComments = document.getElementById('MessagelistHeaderLabelComments');
    if (MessagelistHeaderLabelComments != null) {
        MessagelistHeaderLabelComments.innerHTML = LoadLabelsByLanguage.Comments;
    }
    //MessageListHeader
    var MessageListHeader = document.getElementById('MessageListHeader');
    if (MessageListHeader != null) {
        MessageListHeader.innerHTML = LoadLabelsByLanguage.Comments;
    }

}

function GetCommentFeed() {
    try {
        document.getElementById('divLoading').style.display = 'block';
        var MethodName = "/GetCommentFeed";
        var user = JSON.parse(localStorage.getItem('LoggedUserDetails'));
        var _MobileCredential = MobileCredential;
        _MobileCredential.MobileAppKeyId = user.MobileAppKeyId;
        var Data = { userId: user.UserId, SearchTxt: '', Credential: _MobileCredential };
        GetResultFromService(MethodName, Data);
    } catch (exception) { }
}

//Result...
function GetCommentFeedResult(result) {

    //alert(JSON.stringify(result));
    //swiperNestedMessageList.removeAllSlides();
    var LoadLabelsByLanguage = JSON.parse(localStorage.getItem('LoadLabelsByLanguage'));
    if (swiperNestedMessageList != null) {
        swiperNestedMessageList.removeAllSlides();
    }

    $("#MessageListULDetails").empty();
    //    alert(JSON.stringify(result));
    if (swiperNestedMessageList == null) {

        if (result.d.length == 0) {
            $("#MessageListULDetails").append("<div class='swiper-slide '><div class='dlist'> <ul><li><a href='#' ><h4>  No Record Found </h4></a></li></ul></div></div>");

        }
    }

    if (swiperNestedMessageList != null) {
        if (swiperNestedMessageList.slides.length == 0) {
            if (result.d.length == 0) {


                $("#MessageListULDetails").append("<div class='swiper-slide '><div class='dlist'> <ul><li><a href='#' ><h4>  No Record Found </h4></a></li></ul></div></div>");
                swiperNestedMessageList.reInit();
            }
        }
    }



    if (result.d.length > 0) {
        for (var i = 0; i < result.d.length; i++) {
           
            var _CommentFeedObject = "{'CommentZone':'" + result.d[i].CommentZone + "','CommentZoneID':'" + result.d[i].CommentZoneID + "'}";

            if (result.d[i].CommentZone == 'Account' || result.d[i].CommentZone == 'Contact') {
                $("#MessageListULDetails").append("<div class='swiper-slide'><div class='dlist'><ul><li> <a href='#' onclick=\"CommentFeedObjectDetails(" + _CommentFeedObject + ")\">" + result.d[i].CommentedByName + " said on " + convertJSONDateToReadableFormat(result.d[i].CommentedOn) + "<p>" + result.d[i].Comment + "</p><P> Related to " + result.d[i].CommentZoneHead + "</p></a></li></ul></div></div>");
            }
            if (result.d[i].CommentZone == 'Deal') {
                
                $("#MessageListULDetails").append("<div class='swiper-slide'><div class='dlist'><ul><li> <a href='#' onclick=\"CommentFeedObjectDetails(" + _CommentFeedObject + ")\">" + result.d[i].CommentedByName + " said on " + convertJSONDateToReadableFormat(result.d[i].CommentedOn) + "<p>" + result.d[i].Comment + "</p><P>" + LoadLabelsByLanguage.Deal + " " + result.d[i].DealValue + " " + result.d[i].CommentZoneHead + "</p></a></li></ul></div></div>");
              
            }
            if (result.d[i].CommentZone == 'Task') {
                $("#MessageListULDetails").append("<div class='swiper-slide'><div class='dlist'><ul><li> <a href='#' onclick=\"CommentFeedObjectDetails(" + _CommentFeedObject + ")\">" + result.d[i].CommentedByName + " said on " + convertJSONDateToReadableFormat(result.d[i].CommentedOn) + "<p>" + result.d[i].Comment + "</p><P>" + LoadLabelsByLanguage.TaskType + " " + result.d[i].TaskDescription + " " + result.d[i].CommentZoneHead + "</p></a></li></ul></div></div>");
            }
            if (swiperNestedMessageList != null) {
                swiperNestedMessageList.reInit();
            }
        }
        if (swiperNestedMessageList != null) {
            swiperNestedMessageList.reInit();
        }
    }

    if (swiperNestedMessageList == null) {
        LoadMessageSlider();
    }
    document.getElementById('divLoading').style.display = 'none';
}

//On dealListtxtSearch
var MessageListtxtSearch = document.getElementById('MessageListtxtSearch');
if (MessageListtxtSearch != null) {

    $("#MessageListtxtSearch").keyup(function (e) {

        if (e.keyCode == 13) {
            try {
                document.getElementById('divLoading').style.display = 'block';
                var MethodName = "/GetCommentFeed";
                swiperNestedMessageList.setWrapperTranslate(0, 0, 0)
                swiperNestedMessageList.removeAllSlides();
                var user = JSON.parse(localStorage.getItem('LoggedUserDetails'));
                var _MobileCredential = MobileCredential;
                _MobileCredential.MobileAppKeyId = user.MobileAppKeyId;
                var Data = { userId: user.UserId, SearchTxt: $.trim(MessageListtxtSearch.value), Credential: _MobileCredential };
                GetResultFromService(MethodName, Data);
            } catch (exception) { }
        }

    });

    $("#ImgMessageListSearch").click(function () {
       
        try {
            document.getElementById('divLoading').style.display = 'block';
            var MethodName = "/GetCommentFeed";
            swiperNestedMessageList.setWrapperTranslate(0, 0, 0)
            swiperNestedMessageList.removeAllSlides();
            var user = JSON.parse(localStorage.getItem('LoggedUserDetails'));
            var _MobileCredential = MobileCredential;
            _MobileCredential.MobileAppKeyId = user.MobileAppKeyId;
            var Data = { userId: user.UserId, SearchTxt: $.trim(MessageListtxtSearch.value), Credential: _MobileCredential };
            GetResultFromService(MethodName, Data);

        } catch (exception) { }

    });

}

//Details open when click on comments
function CommentFeedObjectDetails(_commentObj) {

    if (_commentObj.CommentZone == "Account") {
        localStorage.removeItem('AccountObject');
        localStorage.setItem('AccountObject', JSON.stringify({
            ContactAccountId: _commentObj.CommentZoneID
        }));
        localStorage.removeItem('RedirectTo');
        localStorage.setItem('RedirectTo', JSON.stringify({
            RedirectTo: '../account/detail.html'
        }));
        RedirectToPage();

    }
    else if (_commentObj.CommentZone == "Contact") {
        GetContactbyid(_commentObj.CommentZoneID)
        localStorage.removeItem('RedirectTo');
        localStorage.setItem('RedirectTo', JSON.stringify({
            RedirectTo: '../Contacts/detail.html'
        }));
    }

    else if (_commentObj.CommentZone == "Deal") {
        GetDealbyId(_commentObj.CommentZoneID);
        localStorage.removeItem('RedirectTo');
        localStorage.setItem('RedirectTo', JSON.stringify({
            RedirectTo: '../deal/detail.html'
        }));

    }

    else if (_commentObj.CommentZone == "Task") {

        GetTaskByTaskId(_commentObj.CommentZoneID);
        localStorage.removeItem('RedirectTo');
        localStorage.setItem('RedirectTo', JSON.stringify({
            RedirectTo: '../Tasks/detail.html'
        }));
        //        window.location = "../Contacts/contacts-detail.html";
    }

}

//LoadMessageSlider
var swiperNestedMessageList

function LoadMessageSlider() {

    var swiperParent = new Swiper('.swiper-parent', {
        paginationClickable: true,
        slidesPerView: 1
    })

    swiperNestedMessageList = new Swiper('.swiper-nested-MessageList', {
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
                swiperNestedMessageList.params.onlyExternal = true
                // GetContactList(pageIndexContactList);
                swiperNestedMessageList.params.onlyExternal = false;

            }
        }
    })


}