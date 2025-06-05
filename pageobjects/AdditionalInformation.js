class AdditionalInformation{

        constructor(){
           this.page=page

           console.log("Hello")

           this.amlQuestion1Yes=page.locator('[name="aml__general__question1"][value="YES"]')
           this.amlQuestion1No=page.locator('[name="aml__general__question1"][value="NO"]')
           this.amlQuestion1Na=page.locator('[name="aml__general__question1"][value="NA"]')

           this.amlQuestion2Yes=page.locator('[name="aml__general__question2"][value="YES"]')
           this.amlQuestion2No=page.locator('[name="aml__general__question2"][value="NO"]')
           this.amlQuestion2Na=page.locator('[name="aml__general__question2"][value="NA"]')

           this.amlQuestion3Yes=page.locator('[name="aml__general__question3"][value="YES"]')
           this.amlQuestion3No=page.locator('[name="aml__general__question3"][value="NO"]')
           this.amlQuestion3NA=page.locator('[name="aml__general__question3"][value="NA"]')

           this.amlQuestion4Yes=page.locator('[name="aml__general__question4"][value="YES"]')
           this.amlQuestion4No=page.locator('[name="aml__general__question4"][value="NO"]')
           this.amlQuestion4NA=page.locator('[name="aml__general__question4"][value="NA"]')

           this.amlQuestion5Yes=page.locator('[name="aml__general--5__questiona"][value="YES"]')
           this.amlQuestion5No=page.locator('[name="aml__general--5__questiona"][value="NO"]')
           this.amlQuestion5NA=page.locator('[name="aml__general--5__questiona"][value="NA"]')

           this.amlQuestion6Yes=page.locator('[name="aml__general--5__questionb"][value="YES"]')
           this.amlQuestion6No=page.locator('[name="aml__general--5__questionb"][value="NO"]')
           this.amlQuestion6NA=page.locator('[name="aml__general--5__questionb"][value="NA"]')

           this.amlQuestion7Yes=page.locator('[name="aml__general--5__questionc"][value="YES"]')
           this.amlQuestion7No=page.locator('[name="aml__general--5__questionc"][value="NO"]')
           this.amlQuestion7NA=page.locator('[name="aml__general--5__questionc"][value="NA"]')

           this.amlQuestion8Yes=page.locator('[name="aml__customer_due_diligence__question1"][value="YES"]')
           this.amlQuestion8No=page.locator('[name="aml__customer_due_diligence__question1"][value="NO"]')
           this.amlQuestion8NA=page.locator('[name="aml__customer_due_diligence__question1"][value="NA"]')

           this.amlQuestion9Yes=page.locator('[name="aml__customer_due_diligence__question2"][value="YES"]')
           this.amlQuestion9No=page.locator('[name="aml__customer_due_diligence__question2"][value="NO"]')
           this.amlQuestion9NA=page.locator('[name="aml__customer_due_diligence__question2"][value="NA"]')

           this.amlQuestion10Yes=page.locator('[name="aml__customer_due_diligence__question3"][value="YES"]')
           this.amlQuestion10No=page.locator('[name="aml__customer_due_diligence__question3"][value="NO"]')
           this.amlQuestion10NA=page.locator('[name="aml__customer_due_diligence__question3"][value="NA"]')

           this.amlQuestion11Yes=page.locator('[name="aml__customer_due_diligence__question4"][value="YES"]')
           this.amlQuestion11No=page.locator('[name="aml__customer_due_diligence__question4"][value="NO"]')
           this.amlQuestion11NA=page.locator('[name="aml__customer_due_diligence__question4"][value="NA"]')

           this.amlQuestion12Yes=page.locator('[name="aml__customer_due_diligence__question5"][value="YES"]')
           this.amlQuestion12No=page.locator('[name="aml__customer_due_diligence__question5"][value="NO"]')
           this.amlQuestion12NA=page.locator('[name="aml__customer_due_diligence__question5"][value="NA"]')

           this.amlQuestion13Yes=page.locator('[name="aml__customer_due_diligence__question6"][value="YES"]')
           this.amlQuestion13No=page.locator('[name="aml__customer_due_diligence__question6"][value="NO"]')
           this.amlQuestion13NA=page.locator('[name="aml__customer_due_diligence__question6"][value="NA"]')

           this.amlQuestion14Yes=page.locator('[name="aml__customer_due_diligence__question7"][value="YES"]')
           this.amlQuestion14No=page.locator('[name="aml__customer_due_diligence__question7"][value="NO"]')
           this.amlQuestion14NA=page.locator('[name="aml__customer_due_diligence__question7"][value="NA"]')

           this.amlQuestion15Yes=page.locator('[name="aml__customer_due_diligence__question8"][value="YES"]')
           this.amlQuestion15No=page.locator('[name="aml__customer_due_diligence__question8"][value="NO"]')

           this.amlQuestion15NA=page.locator('[name="aml__customer_due_diligence__question8"][value="NA"]')
           this.numberOfYears=page.locator('#aml__customer_due_diligence--question8__years')

           this.currentAccountCheckBox=page.locator('[name="aml__customer_due_diligence__question9"][value="OPTION2"]')
           this.custodyCheckbox=page.locator('[name="aml__customer_due_diligence__question9"][value="OPTION7"]')
           this.depositTakingCheckbox=page.locator('[name="aml__customer_due_diligence__question9"][value="OPTION1"]')
           this.dervativesInstrumentsCheckbox=page.locator('[name="aml__customer_due_diligence__question9"][value="OPTION8"]')
           this.foreignCurrencyDealingcheckbox=page.locator('[name="aml__customer_due_diligence__question9"][value="OPTION5"]')
           this.fundmanagementCheckbox=page.locator('[name="aml__customer_due_diligence__question9"][value="OPTION6"]')
           this.leasingCheckbox=page.locator('[name="aml__customer_due_diligence__question9"][value="OPTION10"]')
           this.leadingCheckbox=page.locator('[name="aml__customer_due_diligence__question9"][value="OPTION9"]')
           this.otherCheckbox=page.locator('[name="aml__customer_due_diligence__question9"][value="OPTION12"]')
           this.securitesDealingCheckbox=page.locator('[name="aml__customer_due_diligence__question9"][value="OPTION3"]')
           this.tradeFinanceCheckbox=page.locator('[name="aml__customer_due_diligence__question9"][value="OPTION11"]')

           //Kindly describe the nature of your customer base (Tick as applicable) *

           this.corporateCustomerDomestic=page.locator('[name="aml__customer_due_diligence__question10"][value="OPTION3"]')
           this.corporateCustomerInternational=page.locator('[name="aml__customer_due_diligence__question10"][value="OPTION4"]')
           this.financialInstitutionDOmestic=page.locator('[name="aml__customer_due_diligence__question10"][value="OPTION5"]')
           this.financialInstitutionInternational=page.locator('[name="aml__customer_due_diligence__question10"][value="OPTION6"]')
           this.retailCustomerDomestic=page.locator('[name="aml__customer_due_diligence__question10"][value="OPTION1"]')
           this.retailCustomerInternational=page.locator('[name="aml__customer_due_diligence__question10"][value="OPTION2"]')

           this.amlQuestion16Yes=this.page.locator('[name="aml__customer_due_diligence__question11"][value="YES"]')
           this.amlQuestion16No=this.page.locator('[name="aml__customer_due_diligence__question11"][value="NO"]')
           this.amlQuestion16NA=this.page.locator('[name="aml__customer_due_diligence__question11"][value="NA"]')

           this.amlQuestion17Yes=this.page.locator('[name="aml__customer_due_diligence__question12"][value="YES"]')
           this.amlQuestion17No=this.page.locator('[name="aml__customer_due_diligence__question12"][value="NO"]')
           this.amlQuestion17NA=this.page.locator('[name="aml__customer_due_diligence__question12"][value="NA"]')

           this.amlQuestion18Yes=this.page.locator('[name="aml__customer_due_diligence__question13"][value="YES"]')
           this.amlQuestion18No=this.page.locator('[name="aml__customer_due_diligence__question13"][value="NO"]')
           this.amlQuestion18NA=this.page.locator('[name="aml__customer_due_diligence__question13"][value="NA"]')

           //Additional Details
           this.leiNumber=this.page.locator('#caf__KYC_Information__legal_entity_identifier')
           this.expiryDate=this.page.locator('#annexure_to_caf3__legal_entity_identifier_details__lei_expiry_date')

           this.financialStatementYes=this.page.locator('[name="financialStatementAvailable"][value="yes"]')
           this.financialStatementNo=this.page.locator('[name="financialStatementAvailable"][value="no"]')

           this.anyOneSingle=this.page.locator('[name="caf__bank_account_opening--opening_account__mode_of_operation"][value="SINGLE"]')
           this.asPerResolution=this.page.locator('[name="caf__bank_account_opening--opening_account__mode_of_operation"][value="RESOLUTION"]')
           this.joinlyBy=this.page.locator('[name="caf__bank_account_opening--opening_account__mode_of_operation"][value="JOINTLY"]')
           this.others=this.page.locator('[name="caf__bank_account_opening--opening_account__mode_of_operation"][value="OTHERS"]')

           this.boardResolutionDate=this.page.locator('#COMMON--date')

           this.beneficiaryName=this.page.locator('#beneficiaryName')
           this.accountNumber=this.page.locator('#beneficiary____account_number')
           this.beneficiaryBank=this.page.locator('#beneficiary____beneficiary_bank')
           this.beneficiaryAdd1=this.page.locator('#beneficiaryAddressOne')
           this.beneficiaryAdd2=this.page.locator('#beneficiaryAddressTwo')
           this.beneficiaryAdd3=this.page.locator('#beneficiaryAddressThree')

           this.beneficiaryPincode=this.page.locator('#beneficiaryPincode')
           this.beneficiaryCity=this.page.locator('#beneficiaryCityTown')
           this.benficiaryState=this.page.locator('#beneficiaryState')
           this.benificaryCountryName=this.page.locator('#beneficiaryCountryName')
           this.benificarySwiftCode=this.page.locator('#beneficiary____beneficiary_swift_code')
           this.iBAN=this.page.locator('#beneficiary____iban')


           this.beneficiaryTaxName=page.locator('#beneficiary____tax_name')
           this.taxConsultantAddLine1=page.locator('#addOfTaxConsultant1')
           this.taxConsultantAddLine2=page.locator('#addOfTaxConsultant2')
           this.taxConsultantAddLine3=page.locator('#addOfTaxConsultant3')
           this.taxConsultantPincode=page.locator('#taxConsultantPincode')
           this.taxConsultantCity=page.locator('taxConsultantCityTown')
           this.taxConsultantState=page.locator('taxConsultantState')
           this.tacConsultantCountryName=page.locator('#taxConsultantCountryName')
           this.taxConsultantCountryCode=page.locator('#taxConsultantCountryCode')
           this.taxConsultantEmailId=page.locator('#beneficiary____emailid')
           this.taxConsultantNameOfContactPerson=this.page.locator('#beneficiary____contact_person')
           this.



           this.submit=page.locator('[name="proceed"]')





        }

        async aml(){
          this.amlQuestion1Yes.click()
          this.amlQuestion2Yes.click()
          this.amlQuestion3No.click()
          this.amlQuestion4NA.click()
          this.amlQuestion5Yes.click()
          this.amlQuestion6Yes.click()
          this.amlQuestion7Yes.click()


        }





}