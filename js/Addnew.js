var ApplicationPageSize = JSON.parse(localStorage.getItem('ApplicationPageSize'));
var AppointmentpageSize = ApplicationPageSize.PageSize;

/////////////////////////////////////////////////////...Start Account js function for load selected language........../////////////////
function LoadlabelsOfAddNewAccount() {

    var LoadLabelsByLanguage = JSON.parse(localStorage.getItem('LoadLabelsByLanguage'));

    //AccountADD_newAccountDetailsLabelAccountName
    var AccountADD_newAccountDetailsLabelAccountName = document.getElementById('AccountADD_newAccountDetailsLabelAccountName');
    if (AccountADD_newAccountDetailsLabelAccountName != null) {

        AccountADD_newAccountDetailsLabelAccountName.innerHTML = LoadLabelsByLanguage.AccountName ;
    }

    //AccountADD_newAccountDetailsLabelAddress1
    var AccountADD_newAccountDetailsLabelAddress1 = document.getElementById('AccountADD_newAccountDetailsLabelAddress1');
    if (AccountADD_newAccountDetailsLabelAddress1 != null) {

        AccountADD_newAccountDetailsLabelAddress1.innerHTML = LoadLabelsByLanguage.Address1 ;
    }

    //AccountADD_newAccountDetailsLabelAddress2
    var AccountADD_newAccountDetailsLabelAddress2 = document.getElementById('AccountADD_newAccountDetailsLabelAddress2');
    if (AccountADD_newAccountDetailsLabelAddress2 != null) {
        AccountADD_newAccountDetailsLabelAddress2.innerHTML = LoadLabelsByLanguage.Address2 ;
    }

    //AccountADD_newAccountDetailsLabelCity
    var AccountADD_newAccountDetailsLabelCity = document.getElementById('AccountADD_newAccountDetailsLabelCity');
    if (AccountADD_newAccountDetailsLabelCity != null) {
        AccountADD_newAccountDetailsLabelCity.innerHTML = LoadLabelsByLanguage.City ;
    }


    //AccountADD_newAccountDetailsLabelState
    var AccountADD_newAccountDetailsLabelState = document.getElementById('AccountADD_newAccountDetailsLabelState');
    if (AccountADD_newAccountDetailsLabelState != null) {
        AccountADD_newAccountDetailsLabelState.innerHTML = LoadLabelsByLanguage.State ;
    }
    //AccountADD_newAccountDetailsLabelCountry
    var AccountADD_newAccountDetailsLabelCountry = document.getElementById('AccountADD_newAccountDetailsLabelCountry');
    if (AccountADD_newAccountDetailsLabelCountry != null) {
        AccountADD_newAccountDetailsLabelCountry.innerHTML = LoadLabelsByLanguage.Country ;
    }
    //AccountADD_newAccountDetailsLabelPostalCode
    var AccountADD_newAccountDetailsLabelPostalCode = document.getElementById('AccountADD_newAccountDetailsLabelPostalCode');
    if (AccountADD_newAccountDetailsLabelPostalCode != null) {
        AccountADD_newAccountDetailsLabelPostalCode.innerHTML = LoadLabelsByLanguage.PostalCode ;
    }
    //AccountADD_newAccountDetailsLabelWebSite
    var AccountADD_newAccountDetailsLabelWebSite = document.getElementById('AccountADD_newAccountDetailsLabelWebSite')
    if (AccountADD_newAccountDetailsLabelWebSite != null) {
        AccountADD_newAccountDetailsLabelWebSite.innerHTML = LoadLabelsByLanguage.Website ;
    }
    //AccountADD_newAccountDetailsLabelIndustry
    var AccountADD_newAccountDetailsLabelIndustry = document.getElementById('AccountADD_newAccountDetailsLabelIndustry')
    if (AccountADD_newAccountDetailsLabelIndustry != null) {
        AccountADD_newAccountDetailsLabelIndustry.innerHTML = LoadLabelsByLanguage.Industry ;
    }
    //AccountADD_newAccountDetailsLabelComments
    var AccountADD_newAccountDetailsLabelComments = document.getElementById('AccountADD_newAccountDetailsLabelComments')
    if (AccountADD_newAccountDetailsLabelComments != null) {
        AccountADD_newAccountDetailsLabelComments.innerHTML = LoadLabelsByLanguage.Comments ;
    }
    //AccountADD_newDetailHeaderLabelAddNewAccount

    var AccountADD_newDetailHeaderLabelAddNewAccount = document.getElementById('AccountADD_newDetailHeaderLabelAddNewAccount')
    if (AccountADD_newDetailHeaderLabelAddNewAccount != null) {
        AccountADD_newDetailHeaderLabelAddNewAccount.innerHTML = LoadLabelsByLanguage.AddNewAccount;
    }

    var AccountAdd_NewHeaderLabel = document.getElementById('AccountAdd_NewHeaderLabel')
    if (AccountAdd_NewHeaderLabel != null) {
        AccountAdd_NewHeaderLabel.innerHTML = LoadLabelsByLanguage.AddNewAccount;
    }

    LoadAddNewAccountDetailSlider();
}

/////////////////////////////////////////////////////...End Account js function for load selected language........../////////////////



/////////////////////////////////////////////////////...Start   Add Contact js function for load labels language........../////////////////

function LoadlabelsOfAddNewContact() {

    var LoadLabelsByLanguage = JSON.parse(localStorage.getItem('LoadLabelsByLanguage'));

    //ContactDetailHeader
    var ContactDetailHeader = document.getElementById('ContactDetailHeader')
    if (ContactDetailHeader != null) {
        ContactDetailHeader.innerHTML = LoadLabelsByLanguage.AddNewContact;
    }

    //AddNewContactDetailsLabelFirstName
    var AddNewContactDetailsLabelFirstName = document.getElementById('AddNewContactDetailsLabelFirstName');
    if (AddNewContactDetailsLabelFirstName != null) {

        AddNewContactDetailsLabelFirstName.innerHTML = LoadLabelsByLanguage.FirstName ;
    }

    //AddNewContactDetailsLabelLastName
    var AddNewContactDetailsLabelLastName = document.getElementById('AddNewContactDetailsLabelLastName');
    if (AddNewContactDetailsLabelLastName != null) {

        AddNewContactDetailsLabelLastName.innerHTML = LoadLabelsByLanguage.LastName ;
    }

    //AddNewContactDetailsLabelEmail
    var AddNewContactDetailsLabelEmail = document.getElementById('AddNewContactDetailsLabelEmail');
    if (AddNewContactDetailsLabelEmail != null) {
        AddNewContactDetailsLabelEmail.innerHTML = LoadLabelsByLanguage.Email ;
    }

    //AddNewContactDetailsLabelMobile
    var AddNewContactDetailsLabelMobile = document.getElementById('AddNewContactDetailsLabelMobile');
    if (AddNewContactDetailsLabelMobile != null) {
        AddNewContactDetailsLabelMobile.innerHTML = LoadLabelsByLanguage.Mobile ;
    }
    //AddNewContactDetailsLabelDesignation
    var AddNewContactDetailsLabelDesignation = document.getElementById('AddNewContactDetailsLabelDesignation');
    if (AddNewContactDetailsLabelDesignation != null) {
        AddNewContactDetailsLabelDesignation.innerHTML = LoadLabelsByLanguage.Designation ;
    }
    //AddNewContactDetailsLabelAccountName
    var AddNewContactDetailsLabelAccountName = document.getElementById('AddNewContactDetailsLabelAccountName');
    if (AddNewContactDetailsLabelAccountName != null) {
        AddNewContactDetailsLabelAccountName.innerHTML = LoadLabelsByLanguage.AccountName ;
    }
    //AddNewContactDetailsLabelCity
    var AddNewContactDetailsLabelCity = document.getElementById('AddNewContactDetailsLabelCity');
    if (AddNewContactDetailsLabelCity != null) {
        AddNewContactDetailsLabelCity.innerHTML = LoadLabelsByLanguage.City ;
    }
    //AccountADD_newAccountDetailsLabelState
    var AddNewContactDetailsLabelState = document.getElementById('AddNewContactDetailsLabelState')
    if (AddNewContactDetailsLabelState != null) {
        AddNewContactDetailsLabelState.innerHTML = LoadLabelsByLanguage.State ;
    }
    //AddNewContactDetailsLabelCountry
    var AddNewContactDetailsLabelCountry = document.getElementById('AddNewContactDetailsLabelCountry')
    if (AddNewContactDetailsLabelCountry != null) {
        AddNewContactDetailsLabelCountry.innerHTML = LoadLabelsByLanguage.Country ;
    }
    //AddNewContactDetailsLabelComments
    var AddNewContactDetailsLabelComments = document.getElementById('AddNewContactDetailsLabelComments')
    if (AddNewContactDetailsLabelComments != null) {
        AddNewContactDetailsLabelComments.innerHTML = LoadLabelsByLanguage.Comments ;
    }

    //AddNewContactDetailHeaderLabelAddNewContact

    var AddNewContactDetailHeaderLabelAddNewContact = document.getElementById('AddNewContactDetailHeaderLabelAddNewContact')
    if (AddNewContactDetailHeaderLabelAddNewContact != null) {
        AddNewContactDetailHeaderLabelAddNewContact.innerHTML = LoadLabelsByLanguage.AddNewContact;
    }



    LoadAddNewContactDetailSlider();
}
/////////////////////////////////////////////////////...Enad Add Contact js function for load labels language........../////////////////

//////////////////////////////////////////////Load AddNewAccountDetail slider start//////////////////////////////////////////////////////////////

function LoadAddNewAccountDetailSlider() {

    var swiperParent = new Swiper('.swiper-parent', {
        paginationClickable: true,

        slidesPerView: 1
    })
    var swiperNestedAddNewAccountDetail = new Swiper('.swiper-nested-AddNewAccountDetail', {
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
                swiperNestedAddNewAccountDetail.params.onlyExternal = true
                //GetAppointmentListNew(pageIndexAccountList);
                swiperNestedAddNewAccountDetail.params.onlyExternal = false;
                //pageIndexAccountList++;
            }

        }
    })
}
//////////////////////////////////////////////Load AddNewAccountDetail slider start//////////////////////////////////////////////////////////////


//////////////////////////////////////////////Load AddNew Contact Detail slider start//////////////////////////////////////////////////////////////

function LoadAddNewContactDetailSlider() {

    var swiperParent = new Swiper('.swiper-parent', {
        paginationClickable: true,

        slidesPerView: 1
    })
    var swiperNestedAddNewContactDetail = new Swiper('.swiper-nested-AddNewContactDetail', {
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
                swiperNestedAddNewContactDetail.params.onlyExternal = true
                //GetAppointmentListNew(pageIndexAccountList);
                swiperNestedAddNewContactDetail.params.onlyExternal = false;
                //pageIndexAccountList++;
            }

        }
    })
}
//////////////////////////////////////////////Enad AddNew Contact Detail slider start//////////////////////////////////////////////////////////////


/////////////////////////////////////////////////////...Start Deal js function for load selected language........../////////////////
function LoadlabelsOfAddNewTask() {

    localStorage.removeItem('GetAccountByNameForTaskObject');

    var LoadLabelsByLanguage = JSON.parse(localStorage.getItem('LoadLabelsByLanguage'));

    //AddNewTaskDetailsLabelAccountName
    var AddNewTaskDetailsLabelAccountName = document.getElementById('AddNewTaskDetailsLabelAccountName');
    if (AddNewTaskDetailsLabelAccountName != null) {

        AddNewTaskDetailsLabelAccountName.innerHTML = LoadLabelsByLanguage.AccountName ;
    }

    //AddNewTaskHeader
    var AddNewTaskHeader = document.getElementById('AddNewTaskHeader');
    if (AddNewTaskHeader != null) {

        AddNewTaskHeader.innerHTML = LoadLabelsByLanguage.AddNewTask;
    }

    //AddNewTaskDetailsLabelContactName
    var AddNewTaskDetailsLabelContactName = document.getElementById('AddNewTaskDetailsLabelContactName');
    if (AddNewTaskDetailsLabelContactName != null) {

        AddNewTaskDetailsLabelContactName.innerHTML = LoadLabelsByLanguage.ContactName ;
    }

    //AddNewTaskDetailsLabelProduct
    var AddNewTaskDetailsLabelProduct = document.getElementById('AddNewTaskDetailsLabelProduct');
    if (AddNewTaskDetailsLabelProduct != null) {
        AddNewTaskDetailsLabelProduct.innerHTML = LoadLabelsByLanguage.ProductName ;
    }

    //AddNewTaskDetailsLabelTaskType
    var AddNewTaskDetailsLabelTaskType = document.getElementById('AddNewTaskDetailsLabelTaskType');
    if (AddNewTaskDetailsLabelTaskType != null) {
        AddNewTaskDetailsLabelTaskType.innerHTML = LoadLabelsByLanguage.TaskType ;
    }

    //AddNewTaskDetailsLabelStatus
    var AddNewTaskDetailsLabelStatus = document.getElementById('AddNewTaskDetailsLabelStatus');
    if (AddNewTaskDetailsLabelStatus != null) {
        AddNewTaskDetailsLabelStatus.innerHTML = LoadLabelsByLanguage.Status ;
    }
    //AddNewTaskDetailsLabelFollowUpDate
    var AddNewTaskDetailsLabelFollowUpDate = document.getElementById('AddNewTaskDetailsLabelFollowUpDate');
    if (AddNewTaskDetailsLabelFollowUpDate != null) {
        AddNewTaskDetailsLabelFollowUpDate.innerHTML = LoadLabelsByLanguage.FollowUpDate ;
    }
    //AddNewTaskDetailsLabelPendingSince
    var AddNewTaskDetailsLabelPendingSince = document.getElementById('AddNewTaskDetailsLabelPendingSince');
    if (AddNewTaskDetailsLabelPendingSince != null) {
        AddNewTaskDetailsLabelPendingSince.innerHTML = LoadLabelsByLanguage.PendingSince ;
    }
    //AddNewTaskDetailsLabelLinkedDealValue
    var AddNewTaskDetailsLabelLinkedDealValue = document.getElementById('AddNewTaskDetailsLabelLinkedDealValue');
    if (AddNewTaskDetailsLabelLinkedDealValue != null) {
        AddNewTaskDetailsLabelLinkedDealValue.innerHTML = LoadLabelsByLanguage.DealValue ;
    }


    //AddNewTaskDetailsLabelComments

    var AddNewTaskDetailsLabelComments = document.getElementById('AddNewTaskDetailsLabelComments')
    if (AddNewTaskDetailsLabelComments != null) {
        AddNewTaskDetailsLabelComments.innerHTML = LoadLabelsByLanguage.Comments;
    }
    //AddNewTaskDetailHeaderLabelAddNewTask

    var AddNewTaskDetailHeaderLabelAddNewTask = document.getElementById('AddNewTaskDetailHeaderLabelAddNewTask')
    if (AddNewTaskDetailHeaderLabelAddNewTask != null) {
        AddNewTaskDetailHeaderLabelAddNewTask.innerHTML = LoadLabelsByLanguage.AddNewTask;
    }


    //AddNewTaskDetailstxtFollowUpDate
    var AddNewTaskDetailstxtFollowUpDate = document.getElementById('AddNewTaskDetailstxtFollowUpDate');
    if (AddNewTaskDetailstxtFollowUpDate != null)
        AddNewTaskDetailstxtFollowUpDate.value = TodayPlus2();

    var AddNewTaskDetailsddlContactNameDDl = document.getElementById('AddNewTaskDetailsddlContactNameDDl');

    if (AddNewTaskDetailsddlContactNameDDl != null) {

        $("#AddNewTaskDetailsddlContactNameDDl").empty();
        var option1 = document.createElement("option");
        option1.text = "--None--";
        option1.value = -1;
        AddNewTaskDetailsddlContactNameDDl.add(option1, null);


    }
    LoadAddNewTaskDetailSlider();
}
/////////////////////////////////////////////////////...End Deal js function for load selected language........../////////////////


/////////////////////////////////////////////////////...start function for slider of Add New Deal detail slider........../////////////////
function LoadAddNewTaskDetailSlider() {

    var swiperParent = new Swiper('.swiper-parent', {
        paginationClickable: true,

        slidesPerView: 1
    })
    var swiperNestedAddNewTaskDetail = new Swiper('.swiper-nested-AddNewTaskDetail', {
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
                swiperNestedAddNewTaskDetail.params.onlyExternal = true
                //GetAppointmentListNew(pageIndexAccountList);
                swiperNestedAddNewTaskDetail.params.onlyExternal = false;
                //pageIndexAccountList++;
            }

        }
    })
}




/////////////////////////////////////////////////////...Start Deal js function for load selected language........../////////////////
function LoadlabelsOfAddNewDeal() {

    var LoadLabelsByLanguage = JSON.parse(localStorage.getItem('LoadLabelsByLanguage'));

    var DashBoardDetails = JSON.parse(localStorage.getItem('DashBoardDetails'));


    localStorage.removeItem('GetAccountByNameDealObject');
    //AddNewDealDetailHeader
    var AddNewDealDetailHeader = document.getElementById('AddNewDealDetailHeader');
    if (AddNewDealDetailHeader != null) {

        AddNewDealDetailHeader.innerHTML = LoadLabelsByLanguage.AddNewDeal;
    }

    //AccountADD_newAccountDetailsLabelAccountName
    var AddNewDealDetailsLabelAccountName = document.getElementById('AddNewDealDetailsLabelAccountName');
    if (AddNewDealDetailsLabelAccountName != null) {

        AddNewDealDetailsLabelAccountName.innerHTML = LoadLabelsByLanguage.AccountName ;
    }

    //AccountADD_newAccountDetailsLabelAddress1
    var AddNewDealDetailsLabelForecastDate = document.getElementById('AddNewDealDetailsLabelForecastDate');
    if (AddNewDealDetailsLabelForecastDate != null) {

        AddNewDealDetailsLabelForecastDate.innerHTML = LoadLabelsByLanguage.Forecast ;
    }

    //AccountADD_newAccountDetailsLabelAddress2
    var AddNewDealDetailsLabelChance = document.getElementById('AddNewDealDetailsLabelChance');
    if (AddNewDealDetailsLabelChance != null) {
        AddNewDealDetailsLabelChance.innerHTML = LoadLabelsByLanguage.Chance ;
    }

    //AccountADD_newAccountDetailsLabelCity
    var AddNewDealDetailsLabelBudgetValue = document.getElementById('AddNewDealDetailsLabelBudgetValue');
    if (AddNewDealDetailsLabelBudgetValue != null) {
        AddNewDealDetailsLabelBudgetValue.innerHTML = LoadLabelsByLanguage.BudgetValue  + '<br/>(' + DashBoardDetails.Currency + ')';
    }
    //AccountADD_newAccountDetailsLabelState
    var AddNewDealDetailsLabelBudgetStage = document.getElementById('AddNewDealDetailsLabelBudgetStage');
    if (AddNewDealDetailsLabelBudgetStage != null) {
        AddNewDealDetailsLabelBudgetStage.innerHTML = LoadLabelsByLanguage.BudgetStage ;
    }
    //AddNewDealDetailsLabelSolutionPresented
    var AddNewDealDetailsLabelSolutionPresented = document.getElementById('AddNewDealDetailsLabelSolutionPresented');
    if (AddNewDealDetailsLabelSolutionPresented != null) {
        AddNewDealDetailsLabelSolutionPresented.innerHTML = LoadLabelsByLanguage.SolutionPresented ;
    }
    //AddNewDealDetailsLabelComments
    var AddNewDealDetailsLabelComments = document.getElementById('AddNewDealDetailsLabelComments');
    if (AddNewDealDetailsLabelComments != null) {
        AddNewDealDetailsLabelComments.innerHTML = LoadLabelsByLanguage.Comments ;
    }

    //AddNewDealDetailHeaderLabelDetail

    var AddNewDealDetailHeaderLabelDetail = document.getElementById('AddNewDealDetailHeaderLabelDetail')
    if (AddNewDealDetailHeaderLabelDetail != null) {
        AddNewDealDetailHeaderLabelDetail.innerHTML = LoadLabelsByLanguage.AddNewDeal;
    }

    //AddNewDealDetailsLabelProductCategory
    var AddNewDealDetailsLabelProductCategory = document.getElementById('AddNewDealDetailsLabelProductCategory');
    if (AddNewDealDetailsLabelProductCategory != null) {
        AddNewDealDetailsLabelProductCategory.innerHTML = LoadLabelsByLanguage.ProductCategory ;
    }

    //AddNewDealDetailstxtForecastDate
    var AddNewDealDetailstxtForecastDate = document.getElementById('AddNewDealDetailstxtForecastDate');
    if (AddNewDealDetailstxtForecastDate != null) {
        AddNewDealDetailstxtForecastDate.value = TodayPlus2();

        localStorage.removeItem('DealObject');
    }


    LoadAddNewDealDetailSlider();
}
/////////////////////////////////////////////////////...End Deal js function for load selected language........../////////////////


/////////////////////////////////////////////////////...start function for slider of Add New Deal detail slider........../////////////////
function LoadAddNewDealDetailSlider() {

    var swiperParent = new Swiper('.swiper-parent', {
        paginationClickable: true,

        slidesPerView: 1
    })
    var swiperNestedAddNewDealDetail = new Swiper('.swiper-nested-AddNewDealDetail', {
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
                swiperNestedAddNewDealDetail.params.onlyExternal = true
                //GetAppointmentListNew(pageIndexAccountList);
                swiperNestedAddNewDealDetail.params.onlyExternal = false;
                //pageIndexAccountList++;
            }

        }
    })
}