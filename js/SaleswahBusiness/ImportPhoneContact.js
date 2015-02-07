var DashBoardAnchorImportPhoneContact = document.getElementById('DashBoardAnchorImportPhoneContact');
if (DashBoardAnchorImportPhoneContact != null) {
    DashBoardAnchorImportPhoneContact.addEventListener('click', function () {
        //ShowMessage("Coming Soon");
         respConfirm();
//       
//        var _PhoneContact = [];

//        for (var i = 0; i < 3000; i++) {
//            var ContactObject = { Email: 'shubham' + i + '@anwesha.in', AccountName: 'Anwesham', MobileNumber: '44444'+i, City: 'new delhi', State: 'Delhi', Country: 'India', FirstName: 'Shubham' + i, LastName: 'Verma' };
//            _PhoneContact.push(ContactObject);
//        }
//      
//        insertPhoneContactsToDatabase(1, _PhoneContact);

    }, false);
}

function respConfirm() {

    var LoadLabelsByLanguage = JSON.parse(localStorage.getItem('LoadLabelsByLanguage'));
    navigator.notification.confirm(
            LoadLabelsByLanguage.PhoneContact_ImpConfrm, // message
             onConfirm,            // callback to invoke with index of button pressed
            LoadLabelsByLanguage.ImportphoneContact,           // title
            ['Ok', 'Cancel']         // buttonLabels
        );
}
function onConfirm(buttonIndex) {
    if (buttonIndex == 1) {
        var options = new ContactFindOptions();
        options.filter = "";
        options.multiple = true;
        var fields = ["*"];
        navigator.contacts.find(fields, onContactFindSuccess, onError, options);
    }
}

function onContactFindSuccess(contacts) {

    var LoadLabelsByLanguage = JSON.parse(localStorage.getItem('LoadLabelsByLanguage'));
    navigator.notification.confirm(
           contacts.length + ' ' + LoadLabelsByLanguage.PhoneContact_TotalFound,
            function (buttonIndex) {
                onPhoneContactFoundOk(buttonIndex, contacts);
            },
            LoadLabelsByLanguage.ImportphoneContact,
            ['Ok']
        );

}

function onPhoneContactFoundOk(buttonIndex, contacts) {

    if (buttonIndex == 1) {
   
        var PhoneContact = [];
        var ContactObject = { Email: '', AccountName: '', MobileNumber: '', City: '', State: '', Country: '', FirstName: '', LastName: '' };
        //for (var i = 100; i < 115; i++) {
       
        for (var i = 0; i < contacts.length; i++) {
            //foreach contact loop
            var _ContactObjectInstance = ContactObject;
            if (contacts[i].emails != null) {
                if (contacts[i].emails.length > 0) {
                    _ContactObjectInstance.Email = contacts[i].emails[0].value;

                }
            }
            if (contacts[i].organizations != null) {
                if (contacts[i].organizations.length > 0) {
                    _ContactObjectInstance.AccountName = contacts[i].organizations[0].name;

                }
            }
            if (contacts[i].phoneNumbers != null) {
                if (contacts[i].phoneNumbers.length > 0) {
                    _ContactObjectInstance.MobileNumber = contacts[i].phoneNumbers[0].value;

                }
            }
            if (contacts[i].addresses != null) {

                if (contacts[i].addresses.length > 0) {
                    if (contacts[i].addresses[0].locality != null) {
                        _ContactObjectInstance.City = contacts[i].addresses[0].locality;

                    }
                    if (contacts[i].addresses[0].region != null) {
                        _ContactObjectInstance.State = contacts[i].addresses[0].region;

                    }
                    if (contacts[i].addresses[0].country != null) {
                        _ContactObjectInstance.Country = contacts[i].addresses[0].country;

                    }
                }
            }

            if (contacts[i].name != null) {

                if (contacts[i].name.givenName != null) {
                    _ContactObjectInstance.FirstName = contacts[i].name.givenName;

                }
                if (contacts[i].name.familyName != null) {
                    _ContactObjectInstance.LastName = contacts[i].name.familyName;

                }
            }

            if (($.trim(_ContactObjectInstance.FirstName) != '' || $.trim(_ContactObjectInstance.LastName) != '') && ($.trim(_ContactObjectInstance.Email) != '' || $.trim(_ContactObjectInstance.MobileNumber) != '')) {

                PhoneContact.push(_ContactObjectInstance);
               
            }


        } //foreach contact loop Ends
      
        insertPhoneContacts(PhoneContact);
    }
}
function onError(contactError) {
    //alert('onError!');
}

function insertPhoneContacts(PhoneContactList) {
   
    
    try {
        var LoadLabelsByLanguage = JSON.parse(localStorage.getItem('LoadLabelsByLanguage'));
        if (PhoneContactList.length > 0) {

            navigator.notification.confirm(
           PhoneContactList.length + ' ' + LoadLabelsByLanguage.PhoneContact_TotalReadyToImp,
            function (buttonIndex) {
                insertPhoneContactsToDatabase(buttonIndex, PhoneContactList);
            },
            LoadLabelsByLanguage.ImportphoneContact,
            ['Ok']
        );
        }
        else {
            navigator.notification.confirm(
           PhoneContactList.length + ' ' + LoadLabelsByLanguage.PhoneContact_NotReadyToImp,
            function (buttonIndex) {
                OnlyOk(buttonIndex);
            },
            LoadLabelsByLanguage.ImportphoneContact,
            ['Ok']
        );
        }

    } catch (exception) { }
}
function OnlyOk() {

}
function insertPhoneContactsToDatabase(buttonIndex, PhoneContactList) {
    if (buttonIndex == 1) {
        try {
           
            var MethodName = "/insertPhoneContacts";

            var user = JSON.parse(localStorage.getItem('LoggedUserDetails'));

            var _Credentials = { MobileAppKeyId: user.MobileAppKeyId };

            var Data = { contact: PhoneContactList, UserId: user.UserId, Credential: _Credentials };

            GetResultFromService(MethodName, Data);
            
        } catch (exception) { }
    }

}
function insertPhoneContactsResult(result) {
     
    if (result != null) {
        var LoadLabelsByLanguage = JSON.parse(localStorage.getItem('LoadLabelsByLanguage'));
        navigator.notification.confirm(
           result.d + ' ' + LoadLabelsByLanguage.PhoneContact_TotalImported,
            function (buttonIndex) {
                OnlyOk(buttonIndex);
            },
            LoadLabelsByLanguage.ImportphoneContact,
            ['Ok']
        );
    }
}