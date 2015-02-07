//var URL = 'http://localhost:19053/SaleswahMobileRestApi/Services/Service.svc'
var URL = 'http://svc14android.saleswah.com/Services/Service.svc'

////ClientUser
//var script = document.createElement('script');
//script.src = "JS/SaleswahBusiness/ClientUser.js";
//document.getElementsByTagName('script')[0].parentNode.appendChild(script);


////Deal
//var script = document.createElement('script');
//script.src = "JS/SaleswahBusiness/Deal.js";
//document.getElementsByTagName('script')[0].parentNode.appendChild(script);

function GetResultFromService(MethodName, Data) {
   
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: URL + MethodName,
        data: '' + JSON.stringify(Data) + '',
        processData: false,
        dataType: "json",
        success: function (response) {
            ServiceSucceeded(MethodName, response);

        },
        error: function (a, b, c) {
            var divloading = document.getElementById('divLoading');
            if (divloading != null) {
                document.getElementById('divLoading').style.display = 'none';
            }
            //ShowMessage(a.responseText);
           // alert('Error : ' + a.responseText);
        },
        failure: function (response) {
            //alert(response.d);


        }
    });

}

function ServiceSucceeded(MethodName, result) {
    try {
       
        switch (MethodName) {
            case "/ValidateUser":
                validateUserDefination(result);
                break;
            case "/GetDealList?dlistuldetails":
                GetDealInvestigationListResult(result);
                break;
            case "/GetDealList?dPresentationlistuldetails":
                GetDealPresentationListResult(result);
                break;
            case "/GetDealList?dProspectlistuldetails":
                GetDealProspectListResult(result);
                break;
            case "/GetDealList?dForeCastlistuldetails":
                GetDealForeCastListResult(result);
                break;
            case "/GetDealList?OpenDeals":
                GetDealFunnelListResult(result);
                break;
            case "/GetDealList?dOpportunitylistuldetails":
                GetDealOpportunityListResult(result);
                break;
            case "/GetDealList?dWonThisMonthlistuldetails":
                GetDealWonThisMonthListResult(result);
                break;
            case "/GetDealList?dNewFunnellistuldetails":
                GetDealNewFunnelThisMonthListResult(result);
                break;
            case "/GetDealList":
                // GetDealList(result);
                break;
            case "/GetChanceValues":
                SetChanceValues(result);
                break;
            case "/GetAllProductCategory":
                SetAllProductCategory(result);
                break;
            case "/GetBudgetStageValues":
                SetBudgetStageValues(result);
                break;
            case "/GetSolutionRatings":
                SetAllSolutionRatings(result);
                break;
            case "/GetHomeDashBoard":
                SetDashBoardresult(result);
                break;
            case "/GetDealCommentsById":
                LoadDealCommentsById(result);
                break;
            case "/UpdateDealWithComment":
                GetUpdateDealResult(result);
                break;
            case "/GetLearnings":
                SetLearnings(result);
                break;
            case "/GetQuoteVSBudgetValues":
                SetQuoteVSBudgetValues(result);
                break;
            case "/GetContactsForPaticularDeal_WithTaskInformation":
                LoadContactsForPaticularDeal_WithTaskInformation(result);
                break;
            case "/GetContactListWithPhoneContact":
                LoadContactListResult(result);
                break;
            case "/GetAllDesignations":
                SetDesignationListResult(result);
                break;
            case "/GetProposalTemplateList":
                SetProposalTemplateListResult(result);
                break;
            case "/GetOpenTaskList":
                LoadTaskListResult(result);
                break;
            case "/GetTaskSeedList":
                SetTaskStatusSeedValues(result);
                break;
            case "/GetCommentFeed":
                GetCommentFeedResult(result);
                break;
            case "/GetAccountList":
                LoadAccountListResult(result);
                break;
            case "/GetAllIndustries":
                SetGetAllIndustriesResult(result);
                break;
            case "/GetContactActivities":
                LoadContactActivitiesResult(result);
                break;
            case "/GetTaskByContactID":
                LoadTaskByContactIDResult(result);
                break;
            case "/GetContactComments":
                LoadContactCommentsResult(result);
                break;
            case "/GetAppointmentsByContactID":
                LoadAppointmentsByContactIDResult(result);
                break;
            case "/GetAllContactsForAccounts":
                GetAllContactsForAccountsResult(result);
                break;
            case "/GetAccountCommentsById":
                GetAccountCommentsByIdResult(result);
                break;
            case "/GetAppointments":
                LoadAppointmentListResult(result);
                break;
            case "/GetActiveAccounts":
                GetActiveAccountsResult(result);
                break;
            case "/GetAccountById":
                GetAccountByIdResult(result);
                break;
            case "/GetDealList?dlistuldetailsSearch":
                GetDealInvestigationListResult(result);
                break;
            case "/GetDealList?dPresentationlistuldetailsSearch":
                GetDealPresentationListResult(result);
                break;
            case "/GetDealList?dProspectlistuldetailsSearch":
                GetDealProspectListResult(result);
                break;
            case "/GetDealList?dForeCastlistuldetailsSearch":
                GetDealForeCastListResult(result);
                break;
            case "/GetDealList?OpenDealsSearch":
                GetDealFunnelListResult(result);
                break;
            case "/GetDealList?dOpportunitylistuldetailsSearch":
                GetDealOpportunityListResult(result);
                break;
            case "/GetDealList?dWonThisMonthlistuldetailsSearch":
                GetDealWonThisMonthListResult(result);
                break;
            case "/GetDealList?dNewFunnellistuldetailsSearch":
                GetDealNewFunnelThisMonthListResult(result);
                break;
            case "/InsertAccount":
                InsertAccountResult(result);
                break;
            case "/InsertCRMAccountWithComment":
                InsertAccountResult(result);
                break;
            case "/GetAccountByName":
                GetAccountByNameResult(result);
                break;
            case "/GetAllCountry":
                SetSeedCountryListResult(result);
                break;
            case "/InsertContact":
                InsertContactResult(result);
                break;
            case "/GetContactById":
                GetContactByIdResult(result);
                break;
            case "/GetAllContactsForAccounts?ContactForAccount":
                GetAllContactForAccountFromTaskResult(result);
                break;
            case "/GetAllProducts":
                SetAllProducts(result);
                break;
            case "/GetAlltasks":
                SetAllTaskTypeMaster(result);
                break;
            case "/CreateNewTask":
                CreateNewTaskResult(result);
                break;
            case "/InsertDealFrmPhoneApp":
                CreateNewDealResult(result);
                break;
            case "/GetTaskByTaskId":
                GetTaskByTaskIdResult(result);
                break;
            case "/GetDealById":
                GetDealByIdResult(result);
                break;
            case "/InsertAppointment":
                CreateNewAppointmentResult(result);
                break;

            case "/GetActiveContacts":
                GetActiveContactsResult(result);
                break;

            case "/GetContactByEmail":
                BindGuestToAppointmentResult(result);
                break;

            case "/InsertAppointmentGuestMappingNew":
                ResultInsertAppointmentGuestMappingNew(result);
                break;

            case "/DeleteContact":
                DeleteContactResult(result);
                break;

            case "/DeleteAccount":
                DeleteAccountResult(result);
                break;

            case "/GetProposalById":
                GetProposaltemplateByIdResult(result);
                break;
            case "/GetTemplatedMessage":
                GetTemplatedMessageResult(result);
                break;

            case "/GetContactByEmail?proposalContact":
                LoadContactDetailsResult(result);
                break;
            case "/GetCRMAccountDashboardById":
                GetCRMAccountDashboardByIdResult(result);
                break;
            case "/GetContactDashBoardById":
                GetContactDashBoardByIdResult(result);
                break;
            case "/UpdateAccount":
                UpdateAccountResult(result);
                break;
            case "/UpdateCRMAccountWithComment":
                UpdateAccountResult(result);
                break;
            case "/UpdateContact":
                UpdateContactResult(result);
                break;
            case "/GetDealStatus":
                SetDealStatus(result);
                break;
            case "/GetAccountByName?ForTaskDetail":
                GetAccountByNameDetailResult(result);
                break;
            case "/GetAllContactsForAccounts?ContactForAccountDetail":
                GetAllContactForAccountFromTaskDetailResult(result);
                break;
            case "/CloseTask":
                UpdateTaskresult(result);
                break;
            case "/CreateFollowUpTask":
                UpdateTaskresult(result);
                break;
            case "/GetClientAccountFromAccountId":
                GetClientAccountFromAccountIdResult(result);
                break;

            case "/GetAppSettingInfo":
                SetAppSettingInfoResult(result);
                break;

            case "/UpdateAccountDetails":
                UpdateCompanyDetailsResult(result);
                break;

            case "/UpdateMyProfile":
                UpdateMyProfileResult(result);
                break;

            case "/UpdateTaskSeed":
                UpdateMasterTaskTypeResult(result);
                break;

            case "/InsertTaskSeed":
                InsertTaskSeedResult(result);
                break;

            case "/UpdateSmtpSettings":
                UpdateSmtpSettingsResult(result);
                break;

            case "/GetAppointmentGuestsById":
                GetAppointmentGuestsByIdResult(result);
                break;

            case "/UpdateAppointment":
                UpdateAppointmentResult(result);
                break;

            case "/ChangePassword":
                ChangePasswordResult(result);
                break;

            case "/CreateNewTaskWithDeal":
                CreateNewTaskResult(result);
                bre
            case "/GetContactsByAccountForAddDecisionmaker":
                GetContactsByAccountForAddDecisionmakerResult(result);
                break;

            case "/GetDealContactRoles":
                SetDealContactRoles(result);
                break;
            case "/AddDecisionmaker":
                AddDecisionmakerResult(result);
                break;
            case "/GetContactsForPaticularDeal_WithTaskInformation?AddDecisionMakerList":
                GetContactsForPaticularDeal_WithTaskInformationDealDecisionMakerresult(result);
                break;

            case "/UpdateDecisionMakerRole":
                UpdateDecisionMakerRoleResult(result);
                break;

            case "/DeleteDecisionMaker":
                DeleteDecisionMakerResult(result);
                break;
            case "/GetCountrylistforRegisterpPage":
                GetCountrylistforRegisterpPageResult(result);
                break;

            case "/CreateNewDatabaseWithAdminUser":
                CreateNewDatabaseWithAdminUserResult(result);
                break;

            case "/SendProposalMail":
                SendProposalMailResult(result);
                break;

            case "/VerifyMapping":
                VerifySocialMappingResult(result);
                break;

            case "/SocalSignIn":
                SocalSignInResult(result);
                break;

            case "/GetClientAccountFromAccountId?ForuserSetup":
                GetClientAccountFromAccountIdForUserSetupResult(result);
                break;
            case "/SetNewPassword":
                SetNewPasswordResult(result);
                break;
            case "/GetActiveAccounts?CheckIsActiveAccount":
                GetActiveAccountsCheckIsActiveAccountResult(result);
                break;
            case "/GetDesignationIdByDesignationname":
                GetDesignationIdByDesignationnameResult(result);
                break;
            case "/GetDesignationIdByDesignationname?ForUpdateContact":
                GetDesignationIdByDesignationnameForUpdateContactResult(result);
                break;
            case "/GetDesignationNameByDesignationId":
                GetDesignationNameByDesignationIdResult(result);
                break;
            case "/insertPhoneContacts":
                insertPhoneContactsResult(result);
                break;
            case "/GetTaskListByAccountId":
                GetTaskListByAccountIdResult(result);
                break;
            case "/GetDealListByAccountId":
                GetDealListByAccountIdResult(result);
                break;
            case "/InsertActivity":
                InsertActivityResult(result);
                break;
            //InsertActivity    
        }
    }
    catch (exception) {
        //   ServiceSucceeded(MethodName, result);
    }
}



