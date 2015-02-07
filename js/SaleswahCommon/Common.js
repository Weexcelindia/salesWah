var MobileCredential = { MobileAppKeyId: '' }

var WinMobDashboard = { Total_Accounts: '', Total_Contacts: '', Overdue_tasks: '', open_deals: '', Won_deals: '', Lost_or_dropped_deals: '', vopen_deals: '', vWon_deals: '', vLost_or_dropped_deals: '', Forecast_Open_Deals: '', vForecast_Open_Deals: '', _Deals: '', Vnew_Deals: '', Comments: '', OpenTasks: '', Currency: '', vInvestigationDeals: '', vProspectingDeals: '', vPresentationDeals: '', vOpportunityDeals: '', vLostDealsThisMonth: '' }

var Win8Dashboard = { Total_Accounts: '', Total_Contacts: '', Overdue_tasks: '', open_deals: '', Won_deals: '', Lost_or_dropped_deals: '', vopen_deals: '', vWon_deals: '', vLost_or_dropped_deals: '', Forecast_Open_Deals: '', vForecast_Open_Deals: '',  _Deals: '', Vnew_Deals: '', Comments: '', OpenTasks: '', Currency: '', Appointments: '' }

var CompanyDetail = { TagDB: '', AccountId: '', CompanyName: '', MasterCurrency: '', TimeZoneDiff: '', TimeZone: '' }

var ClientUserStatus = { Deleted: 0, Active: 1, InActive: 2 }

var LicenseStatus = { Expired: 0, Active: 1, InActive: 2 }

var PaymentStatus = {Unpaid:0,Paid:1}

var License = {TodayOnServer:'',LicenseId:'',LicenseInvoiceno:'',LicenseCode:'',PackageId:'',AccountPackageId:'',Expiarydate:'',Maxduration:'',UserEmailID:'',UserID:'',AccountId:'',Status:LicenseStatus,PayStatus:  PaymentStatus ,ShortAccountName:'',LicenseStatus:'',CompanyName:'',RegisteredEmailAddress:'',UserType:''}

var ClientUser = { Company: CompanyDetail, CRMAccountId: CompanyDetail, UserId: '', Name: '', PhoneNumber: '', MobileNumber: '', Credential: MobileCredential, EmailAddress: '', CreationDate: '', CreatedByName: '', CreatedById: '', LastModifiedById: '', LastModifiedByName: '', LastModificationDate: '', LastSuccessfullLogin: '', ManagerName: '', ManagerUserId: '', PermissionId: '', PermissionName: '', Designation: '', Signature: '', Status:   ClientUserStatus , Comment: '', License:   License  }

var Address = { Id: '', AddressLine1: '', AddressLine2: '', Country: '', State: '', City: '', PostalCode: '' }

var CRMAccount = { AccountId: '', AccountName: '', AccountOwnerId: '', AccountOwner: '', Site: '', PhoneNumber: '', TypeId: '', TypeName: '', IndustryId: '', IndustryName: '', WebsiteURL: '', MainAddressID: '', MainAddress:   Address , ShipmentAddressID: '', ShipmentAddress:   Address , Manager: '' }

var ContactDashBoard = { OpenDealNumber: '', OpenDealValue: '', LastActivityOn: '', PendingTask: '', EventInvited: '', EventAttended: '', NextMeetingDay: '', Currency_Symbol: '' }

var DealContact = { DealContactId: '', ContactId: '', ContactName: '', ContactRoleName: '', RecentTaskOpenTask: '', RecentTaskOpenTask_DueDate: '', RecentTaskCloseTask: '', RecentTaskCloseTask_CloseDate: '', RecentTaskOpenTask_DueDate_String: '', RecentTaskCloseTask_CloseDate_String: '' }

var CRMAccountDashBoard = { Lastcontactadded: '', Contact_count: '', Task_count: '', DealRelated_tasks: '', Overdue_tasks: '', Lead_count: '', Deal_count: '', Proposals_sent_count: '', Open_Deals_value: '', Open_Deals_Number: '', Lost_or_cancelledDeals_value: '', won_Deals_value: '', po_ack_value: '', ForecastCurrent_month: '', ForecastNext_month: '', Quotes_sent_value: '', Currency_Symbol: '' }

var EntityStatus = { Deleted: 0, Active: 1, InActive: 2 }

//EntityName Skipped

var BaseEntity = { Id: '', Status:   EntityStatus , CreationDate: '', CreatedByName: '', CreatedById: '', LastModifiedById: '', LastModifiedByName: '', LastModificationDate: '' }

var Contact = { OutLookContactId: '', AccountId: '', AccountName: '', Salutation: '', FirstName: '', LastName: '', DesignationId: '', DesignationName: '', DepartmentId: '', DepartmentName: '', Email: '', ReportTo: '', OfficePhone: '', MobileNumber: '', Fax: '', AssistantName: '', AssistantPhone: '', IsSendEmailEnabled: '', FullName: '', WebsiteURL: '', IsCRMContact: '', ImageSource: '', Phone_TempContactId: '', MainAddress:   Address , AccountOwnerID: '', AccountOwner: '', ManagerId: '', Manager: '', Market: '', MarketID: '', RoutePlan: '', RoutePlanID: '', Branch: '', BranchID: '', OutLookId: '', Id: '', ContactDashBoard:   ContactDashBoard  }

var ContactActivity = { DateOfActivity: '', ActivityName: '', Source: '', ProductCategoryName: '', ActivityDetails: '', ReferenceID: '' }

var Credential = { UserEmailID: '', ShortAccountName: '', Password: '', UserId: '', Status: '' }

var DealStatus = { Open: 1, Dropped: 2, Lost: 3, Won: 4 }

//var Deal = { Id: '', Status:   EntityStatus.Active , CreationDate: '', CreatedByName: '', CreatedById: '', LastModifiedById: '', LastModifiedByName: '', LastModificationDate: '', LastSynchedDate: '', DealId: '', LeadDealId: '', DealCreatedOn: '', ForecastDate: '', Chance: '', AccountOwnerID: '', AccountOwner: '', ManagerId: '', Manager: '', DealStatusValue: '', DealClosedDate: '', BudgetValue: '', DealValue: '', DealStatus:   DealStatus.Open , LearningId: '', LearningValue: '', SolutionRatingId: '', SolutionRatingValue: '', SolutionRatingScore: '', QuoteVSBudgetId: '', QuoteVSBudgetValue: '', QuoteVSBudgetScore: '', BudgetStageId: '', BudgetStageValue: '', ChanceId: '', ChanceValue: '', AccountName: '', AccountId: '', CsvContactBuilder: '', ProductCategoryId: '', OutLookDealId: '', DealAge: '', LeadId: '', DateRecognised: '', ProductCategory: '', LeadValue: '', LeadSource: '', InterestScore: '', FitmentScore: '', QuoteId: '', QuoteValue: '', QuoteDate: '', LiveStaus: '', LiveStausCode: '', Budget: '', Authority: '', Need: '', Time: '', City: '', State: '', ForeCastDate_Display: '', ForeCastDate_Estimate: '' }

var DealMapper = { CloudDealId: '', OutLookDealId: '' }

var TaskStatus = { Open: 1, Close: 2, FollowUp: 3, UnderProgress: 0 }

var Task = { CreationDate: '', Id: '', DisplayID: '', ConatctId: '', ConatctName: '', AccontId: '', AccountName: '', AccountOwnerName: '', AccountOwnerID: '', ManagerID: '', TasktypeId: '', TaskDescription: '', FollowUpDate: '', CloseDate: '', Status:   TaskStatus  , ProductId: '', ProductName: '', DealID: '', DealValue: '', Chance: '', ForecastDate: '', TaskAge: '', Comments: '', LiveStaus: '' }

var CommentFeed = { Comment: '', CommentId: '', CommentedById: '', CommentedByName: '', CommentZone: '', CommentZoneHead: '', CommentZoneID: '', CommentedOn: '', CommentedOn_Display: '' }

var DashBoard = { Total_Accounts: '', Total_Contacts: '',  _accounts_MTD: '',  _accounts_YTD: '',  _contacts_MTD: '',  _contacts_YTD: '', Open_Tasks: '', Tasks_pending_for_morethen7days: '', Tasks_due_today: '', Overdue_tasks: '', open_deals_YTD: '', Won_deals_YTD: '', Lost_or_dropped_deals_YTD: '', open_deals_MTD: '', Won_deals_MTD: '', Lost_or_dropped_deals_MTD: '', vopen_deals_YTD: '', vWon_deals_YTD: '', vLost_or_dropped_deals_YTD: '', vopen_deals_MTD: '', vWon_deals_MTD: '', vLost_or_dropped_deals_MTD: '', open_leads_YTD: '', Cancelled_leads_YTD: '', open_leads_MTD: '', Cancelled_leads_MTD: '', vopen_leads_YTD: '', vCancelled_leads_YTD: '', vopen_leads_MTD: '', vCancelled_leads_MTD: '', Forecast_Open_Deals: '', Forecast_Current_month: '', Forecast_Next_Month: '', Forecast_Next_3months: '', vForecast_Open_Deals: '', vForecast_Current_month: '', vForecast_Next_Month: '', vForecast_Next_3months: '', Campaign_contacts_YTD: '', Seminar_invites_sent_YTD: '', Seminar_registrations_YTD: '', Seminar_attendees_YTD: '', Campaign_contacts_MTD: '', Seminar_invites_sent_MTD: '', Seminar_registrations_MTD: '', Seminar_attendees_MTD: '' }

var Appointment = { AppointmentId: '', AppointmentIdInGoogle: '', AppointmentIdInMicrosoft: '', Title: '', TimeblockFrom: '', TimeblockTo: '', RepeatDetail: '', AppointmentType: '', OfferAsSlotsOfInMinutes: '', Where: '', Description: '', AppointmentGuestCount: '', AccountId: '', ContactId: '', AccountName: '', ContactName: '', TimeblockToDisplayName: '', TimeblockFromDisplayName: '' }

var AppointmentGuest = { AppointmentId: '', ContactId: '', AppointmentGuestMapingId: '', IsAnonymous: '', GuestEmail: '', GuestName: '', MailSentDate: '', IsMailSent: '' }

var ContactComments = { Id: '', ContactId: '', CommenterID: '', Comments: '', CommentedBy: '', CommentedOn: '' }

var PhoneContact = { FirstName: '', LastName: '', AccountName: '', Email: '', MobileNumber: '', City: '', State: '', Country: '' }

var Activity = { ActivityLogId: '', ActivityName: '', ContactID: '', ContactName: '', AccountID: '', AccountName: '', ProductCategoryID: '', ReferenceID: '', ActivityDetails: '', ActivityLoggedDate: '', ReferenceName: '', RelatedToId: '', RelatedToName: '', ActivityRelatedId: '', ActivityLoggedDateDisplay: '' }

var ProposalTemplate = { IdLong: '', Name: '', Description: '', ProductName: '', ProductCategoryName: '', ProposalSignature: '', ProductId: '', ProductCategoryId: '', Subject: '', Attachment1: '', Attachment2: '', Attachment3: '', CreationDate: '', CreatedByName: '', CreatedById: '', LastModifiedById: '', LastModifiedByName: '', LastModificationDate: '' }

var EmailMessage = { NumberOfRetry: '', Status: '', RetryTime: '', MaximumRetry: '', ExpiryDatetime: '', ArrivedDateTime: '', SenderInfo: '', EmailTo: '', EmailFrom: '', EmailSubject: '', EmailBody: '', EmailCC: '', EmailBCC: '', IsHtml: '', Attachement1: '', Attachement2: '', Attachement3: '', ServerName: '', PortNo: '', UserName: '', Password: '' }




                                                                                                                                                                           


                                                                                                                                                                           