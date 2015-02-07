var LoadLabelsByLanguage = JSON.parse(localStorage.getItem('LoadLabelsByLanguage'));

function LoadLabelOfWelcomeScreen() {

    var WelcomeScreenHeader = document.getElementById('WelcomeScreenHeader');
    if (WelcomeScreenHeader != null) {
        WelcomeScreenHeader.innerHTML = LoadLabelsByLanguage.WelcomeScreenHeader;
    }
    var WelcomeToSaleswah = document.getElementById('WelcomeToSaleswah');
    if (WelcomeToSaleswah != null) {
        WelcomeToSaleswah.innerHTML = LoadLabelsByLanguage.WelcomeToSaleswah;
    }
    var YouCanUseSaleswahOnYourPhone = document.getElementById('YouCanUseSaleswahOnYourPhone');
    if (YouCanUseSaleswahOnYourPhone != null) {
        YouCanUseSaleswahOnYourPhone.innerHTML = LoadLabelsByLanguage.YouCanUseSaleswahOnYourPhone;
    }

    var IsNewRegisteredUser = JSON.parse(localStorage.getItem('IsNewRegisteredUser'));

    var LoggedUserDetails = JSON.parse(localStorage.getItem('LoggedUserDetails'));

    if (IsNewRegisteredUser != null) {
        if (IsNewRegisteredUser.IsNewRegisteredUser == true) {
            var YourShortAccountNameIs = document.getElementById('YourShortAccountNameIs');
            if (YourShortAccountNameIs != null)
                YourShortAccountNameIs.innerHTML = LoadLabelsByLanguage.YourShortAccountNameIs + ': <span>' + IsNewRegisteredUser.ShortAccountName + '</span>';

            var YourregisteredEmailidIs = document.getElementById('YourregisteredEmailidIs');
            if (YourregisteredEmailidIs != null)
                YourregisteredEmailidIs.innerHTML = LoadLabelsByLanguage.YourregisteredEmailidIs + ':<span>' + IsNewRegisteredUser.EmailAddress + '</span>';

            var PleaseChangeYourPasswordNow = document.getElementById('PleaseChangeYourPasswordNow');
            if (PleaseChangeYourPasswordNow != null)
                PleaseChangeYourPasswordNow.innerHTML = "<a href='../AdminSetUp/ChangePassword.html'' onclick=\"GoToAdminSetup(0)\">" + LoadLabelsByLanguage.Pleasechangeyourpasswordnow + "</a>";
            //localStorage.removeItem('IsNewRegisteredUser');
        }



    }






    //    var PleaseChangeYourPasswordNow = document.getElementById('PleaseChangeYourPasswordNow');
    //    if (PleaseChangeYourPasswordNow != null)
    //        PleaseChangeYourPasswordNow.innerHTML = LoadLabelsByLanguage.Pleasechangeyourpasswordnow;

    var YourRole = document.getElementById('YourRole');
    if (YourRole != null) {
        YourRole.innerHTML = LoadLabelsByLanguage.YourRole + ':<span>' + LoggedUserDetails.Role + '</span>';
    }
    var Yourlicensevalidtill = document.getElementById('Yourlicensevalidtill');
    if (Yourlicensevalidtill != null) {
        Yourlicensevalidtill.innerHTML = LoadLabelsByLanguage.YourLicense + ':' + LoggedUserDetails.LicenseCode + ' ' + LoadLabelsByLanguage.validtill + ' ' + convertJSONDateToReadableFormat(LoggedUserDetails.LicenseExpiaryDate);
    }
    var WhatYouCanDo = document.getElementById('WhatYouCanDo');
    if (WhatYouCanDo != null) {
        WhatYouCanDo.innerHTML = LoadLabelsByLanguage.WhatYouCanDo + ':';
    }
    var CreateUnlimitedContacts = document.getElementById('CreateUnlimitedContacts');
    if (CreateUnlimitedContacts != null) {
        CreateUnlimitedContacts.innerHTML = LoadLabelsByLanguage.CreateUnlimitedContacts;
    }
    var YourdataStaysSafeAndSecure = document.getElementById('YourdataStaysSafeAndSecure');
    if (YourdataStaysSafeAndSecure != null) {
        YourdataStaysSafeAndSecure.innerHTML = LoadLabelsByLanguage.YourdataStaysSafeAndSecure;
    }
    var Upgradingtoapaidaccount = document.getElementById('Upgradingtoapaidaccount');
    if (Upgradingtoapaidaccount != null) {
        Upgradingtoapaidaccount.innerHTML = LoadLabelsByLanguage.Upgradingtoapaidaccount;
    }
    var WhileyoucanstartusingSaleswahrightnow = document.getElementById('WhileyoucanstartusingSaleswahrightnow');
    if (WhileyoucanstartusingSaleswahrightnow != null) {
        WhileyoucanstartusingSaleswahrightnow.innerHTML = LoadLabelsByLanguage.WhileyoucanstartusingSaleswahrightnow;
    }
    var WelcomeScreenAnchortagOK = document.getElementById('WelcomeScreenAnchortagOK');
    if (WelcomeScreenAnchortagOK != null) {
        WelcomeScreenAnchortagOK.innerHTML = LoadLabelsByLanguage.OkGotIt;
    }

    LoadWelcomeScreenSlider();
    var ShowMessageAgain = JSON.parse(localStorage.getItem('ShowMessageAgain'));
    if (ShowMessageAgain == null) {

        var PasswordupdatedSuccessfully = JSON.parse(localStorage.getItem('PasswordupdatedSuccessfully'));
        if (PasswordupdatedSuccessfully != null) {
            if (PasswordupdatedSuccessfully.PasswordupdatedSuccessfully == 'PasswordupdatedSuccessfully') {
                // localStorage.removeItem('PasswordupdatedSuccessfully');
                localStorage.removeItem('ShowMessageAgain');
                localStorage.setItem('ShowMessageAgain', JSON.stringify({
                    Message: false
                }));
                SlideToPage(1);
                ShowMessage(LoadLabelsByLanguage.Passwordupdated);
            }
            else
                if (PasswordupdatedSuccessfully.PasswordupdatedSuccessfully == 'PasswordnotupdatedSuccessfully') {
                    localStorage.removeItem('ShowMessageAgain');
                    localStorage.setItem('ShowMessageAgain', JSON.stringify({
                        Message: false
                    }));
                    ShowMessage(LoadLabelsByLanguage.passwordNotUpdated);
                }

        }
    }



}

function GoToUserSetup(Obj) {
    localStorage.removeItem('GoToPasswordChangeForUserSetup');
    localStorage.setItem('GoToPasswordChangeForUserSetup', JSON.stringify({
        GoToPasswordChange: true,
        GoToSlide: Obj
    }));
    window.location.replace("../AdminSetUp/UserLevelSetup.htm");
}

function GoToAdminSetup(Obj) {
    localStorage.removeItem('GoToPasswordChangeForAdminSetup');
    localStorage.setItem('GoToPasswordChangeForAdminSetup', JSON.stringify({
        GoToPasswordChange: true,
        GoToSlide: Obj
    }));

    window.location.replace("../AdminSetUp/AdminLevelSetup.htm");
}

//WelcomeScreenimgEmailSetup 
var WelcomeScreenimgEmailSetup = document.getElementById('WelcomeScreenimgEmailSetup');
if (WelcomeScreenimgEmailSetup != null) {
    WelcomeScreenimgEmailSetup.addEventListener('click', function () {

        var PasswordupdatedSuccessfully = JSON.parse(localStorage.getItem('PasswordupdatedSuccessfully'));
        if (PasswordupdatedSuccessfully != null) {
            if (PasswordupdatedSuccessfully.PasswordupdatedSuccessfully == 'PasswordupdatedSuccessfully') {
                GoToUserSetup(1);
            }

        } else
            ShowMessage(LoadLabelsByLanguage.PleaseChangeyourPasswordFirst);

    }, false);
}


//WelcomeScreenimgProductUpload 
var WelcomeScreenimgProductUpload = document.getElementById('WelcomeScreenimgProductUpload');
if (WelcomeScreenimgProductUpload != null) {
    WelcomeScreenimgProductUpload.addEventListener('click', function () {

        var PasswordupdatedSuccessfully = JSON.parse(localStorage.getItem('PasswordupdatedSuccessfully'));
        if (PasswordupdatedSuccessfully != null) {
            if (PasswordupdatedSuccessfully.PasswordupdatedSuccessfully == 'PasswordupdatedSuccessfully') {
                GoToAdminSetup(2);
            }

        }
        else
            ShowMessage(LoadLabelsByLanguage.PleaseChangeyourPasswordFirst);

    }, false);
}


//WelcomeScreenimgPersonalize 
var WelcomeScreenimgPersonalize = document.getElementById('WelcomeScreenimgPersonalize');
if (WelcomeScreenimgPersonalize != null) {
    WelcomeScreenimgPersonalize.addEventListener('click', function () {

        var PasswordupdatedSuccessfully = JSON.parse(localStorage.getItem('PasswordupdatedSuccessfully'));
        if (PasswordupdatedSuccessfully != null) {
            if (PasswordupdatedSuccessfully.PasswordupdatedSuccessfully == 'PasswordupdatedSuccessfully') {
                GoToUserSetup(0);
            }

        }
        else
            ShowMessage(LoadLabelsByLanguage.PleaseChangeyourPasswordFirst);

    }, false);
}

//WelcomeScreenAnchortagOK 
var WelcomeScreenAnchortagOK = document.getElementById('WelcomeScreenAnchortagOK');
if (WelcomeScreenAnchortagOK != null) {
    WelcomeScreenAnchortagOK.addEventListener('click', function () {

        var PasswordupdatedSuccessfully = JSON.parse(localStorage.getItem('PasswordupdatedSuccessfully'));
        if (PasswordupdatedSuccessfully != null) {
            if (PasswordupdatedSuccessfully.PasswordupdatedSuccessfully == 'PasswordupdatedSuccessfully') {
                //window.location.replace("../dashboard.html");
                window.location.replace("../TutorialScreen/TutorialScreen.htm");
            }


        }
        else
            ShowMessage(LoadLabelsByLanguage.PleaseChangeyourPasswordFirst);

    }, false);
}
/*    var IsNewRegisteredUser = JSON.parse(localStorage.getItem('IsNewRegisteredUser'));
if (IsNewRegisteredUser != null) {
if (IsNewRegisteredUser.IsNewRegisteredUser == true) {
localStorage.removeItem('IsNewRegisteredUser');
window.location.replace("TutorialScreen/TutorialScreen.htm");
         

}

}
*/

var swiperParent;
function LoadWelcomeScreenSlider() {
    swiperParent = new Swiper('.swiper-parent', {

        paginationClickable: true,

        slidesPerView: 1
    })
    var swiperNestedWelcomeScreen1 = new Swiper('.swiper-nested-WelcomeScreen1', {
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

                swiperNestedWelcomeScreen1.setWrapperTranslate(0, 100, 0)

                swiperNestedWelcomeScreen1.params.onlyExternal = true

                //loadNewSlidesinvestigation();
            }
        }
    })

    var swiperNestedWelcomeScreen2 = new Swiper('.swiper-nested-WelcomeScreen2', {
        mode: 'vertical',

        paginationClickable: true,
        slidesPerView: 'auto',
        calculateHeight: true,
        
        watchActiveIndex: true,
        onTouchStart: function () {
            holdPosition = 0;
        },
        onResistanceBefore: function (s, pos) {
            holdPosition = pos;
        },
        onTouchEnd: function () {
            if (holdPosition > 100) {

                swiperNestedWelcomeScreen2.setWrapperTranslate(0, 100, 0)

                swiperNestedWelcomeScreen2.params.onlyExternal = true

                //loadNewSlidesinvestigation();
            }
        }
    })

    var swiperNestedWelcomeScreen3 = new Swiper('.swiper-nested-WelcomeScreen3', {
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

                swiperNestedWelcomeScreen3.setWrapperTranslate(0, 100, 0)

                swiperNestedWelcomeScreen3.params.onlyExternal = true

                //loadNewSlidesinvestigation();
            }
        }
    })
}