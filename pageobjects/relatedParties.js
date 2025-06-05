class RelatedParties{

   constructor(page){
        
        this.page = page;
         this.RelatedPArtiesStepper=page.getByRole('tab', { name: 'Related Parties' })

         this.Edit=page.locator('#Edit')
         this.yesUBO=page.locator('[name="haveUbo"][value="yes"]')
         this.NoUBO=page.locator('[name="haveUbo"][value="no"]')
         this.AddRelatedParties=page.getByRole('button', { name: '' })
         this.RPType=page.locator("#annexure_to_caf3__information_regarding_intermediate_material_shareholder__a__individual_non_individual")
         this.RPName=page.locator('#annexure_to_caf3__information_in_respect_of_authorized_signatories_to_form__name')
         this.AsCheckBox=page.locator('[name="AS"]')
         this.Operation=page.locator('[name="ops"]')
         this.AccountOpening=page.locator('[name="ac"]')
         this.UboCheckbox=page.locator('[name="ubo"]')
         this.SmoCheckBox=page.locator('[name="smo"]')
         this.RPKyc=page.locator('#relatedPartiesKYC')
         this.DeleteRP=page.locator('.fa-solid fa-trash text-[16px]')
         this.Proceed=page.locator('[name="submit"]')

         //Individual KYC
                 

         this.NamePrifix=page.locator('#namePrefix')
         this.MaidenPrifix=page.locator('#maidenNamePrefix')
         this.MaidenName=page.locator('#maidenFullName')
         this.fatherNamePrefix=page.locator('#fatherNamePrefix')
         this.fatherName=page.locator('#fatherFullName')
         this.motherNamePrefix=page.locator('#motherNamePrefix')
         this.motherFullName=page.locator('#motherFullName')
         this.gender=page.locator('#gender')
         this.designation=page.locator('#annexure_to_caf3__information_in_respect_of_authorized_signatories_to_form__relationship')
         this.dateOfBirth=page.locator('#caf__KYC_Information--ultimate_beneficial_owner_details__dob')
         this.countryOfBirth=page.locator('#annexure_to_caf3__information_regarding_intermediate_material_shareholder__a__country')
         this.nationality=page.locator('#caf__KYC_Information--ultimate_beneficial_owner_details__nationality')
         this.countryOfTaxResidence=page.locator('#caf__KYC_Information--ultimate_beneficial_owner_details__tax_residency')

         this.pan=page.locator('#annexure_to_caf3__information_in_respect_of_authorized_signatories_to_form__pan')
         this.rpPOIType=page.locator('#fatca_self_certification__section4--identification_type__controlling_person')
         this.rpPOINumber=page.locator('#caf__KYC_Information--ultimate_beneficial_owner_details__tax_number')
         this.rpPOAType=page.locator('#poa')

         this.registerAddress1=page.locator('#address1')
         this.registerAddress2=page.locator('#address2')
         this.registerAddress3=page.locator('#address3')
         this.PinCode=page.locator('#pin')
         this.City=page.locator('#cityTown')
         this.state=page.locator('#state')
         this.countryName=page.locator('#country')
         
         this.sameAsResdenceAddress=page.locator('[name="sameAsAbove"]')
         this.offaddress1=page.locator('#offaddress1')
         this.offaddress2=page.locator('#offaddress2')
         this.offaddress3=page.locator('#offaddress3')
         this.offPin=page.locator('#offpin')
         this.offCity=page.locator('#offcityTown')
         this.offState=page.locator('#offstate')
       
         this.communicationemail=page.locator('#communicationemail')
         this.MobailNumber=page.locator('#communicationMobileNumber')
         this.TelephoneRegistered=page.locator('#registeredTelephoneNumber')
         this.TelephoneOffice=page.locator('#offTelephoneNumber')

         this.RPKycProceed=page.locator('[name="submit"]').nth(1);
        
         }

       async goToRP() {
        const relatedPartiesBtn = this.page.locator('button:has-text("Related Parties")').first();
        const rpSection= this.page.locator('button:has-text("Related Parties")').nth(1)
        await relatedPartiesBtn.click()
        await rpSection.click()
       // await this.Edit.click()
           
      } 
      

      async addRP(){
            await this.AddRelatedParties.click()
      }

        async createIndvialUBO(RPName) {
            
              await this.RPType.last().selectOption('Individual')
              await this.RPName.last().fill(RPName)
              await this.AsCheckBox.last().click()
              await this.UboCheckbox.last().click()
              await this.RPKyc.last().click()
              await this.fillIndividualKyc()
              
            }
       async createOperations(RPName){
              await this.RPType.last().selectOption('Individual')
              await this.RPName.last().fill(RPName)
              await this.Operation.last().click()
              await this.RPKyc.last().click()
              await this.fillIndividualKyc()

              }
      async createAccountOpening(RPName){
            
              await this.RPType.last().selectOption('Individual')
              await this.RPName.last().fill(RPName)
              await this.AccountOpening.last().click()
              await this.RPKyc.last().click()
              await this.fillIndividualKyc()
      }
      async createNonIndividualUBO(RPName){
              await this.RPType.last().selectOption('Non-Individual')
              await this.RPName.last().fill(RPName)
              await this.UboCheckbox.last().click()
              await this.RPKyc.last().click()
              await this.nonIndividualKyc()
      }


       async fillIndividualKyc(){
             await this.Edit.click()
            await this.NamePrifix.selectOption('MRS')
            await this.MaidenPrifix.selectOption('MR')
            await this.MaidenName.fill('test Maiden Name')
            await this.designation.selectOption('Limited Partner')
            await this.dateOfBirth.fill('2025-05-01')
            await this.countryOfBirth.selectOption('Aland Islands')
            await this.nationality.selectOption('Anguilla')
            await this.countryOfTaxResidence.selectOption('Aland Islands')
            await this.pan.fill('MHFPN0906G')
            await this.rpPOIType.selectOption('Driving License')
            await this.rpPOINumber.fill('1234567890')
            await this.rpPOAType.selectOption('Passport')

            await this.registerAddress1.fill('test address Line 1')
            await this.registerAddress2.fill('Test Add Line2')
            await this.registerAddress3.fill('Add 3')
            await this.PinCode.fill('600002')
            await this.City.fill('chennai')
            await this.state.fill('tamil Nadu')
            await this.countryName.selectOption('Albania')
            await this.sameAsResdenceAddress.click()
            await this.sameAsResdenceAddress.click()

            await this.communicationemail.fill("test@gmail.com")
            await this.MobailNumber.fill('7448400182')
            await this.TelephoneRegistered.fill('73737')
            
            await this.RPKycProceed.click()
      }

      async nonIndividualKyc(){
             await this.Edit.click()
             await this.dateOfBirth.fill('2025-05-01')
             await this.countryOfBirth.selectOption('Aland Islands')
             await this.countryOfTaxResidence.selectOption('Aland Islands')
             await this.pan.fill('MHFIN0906G')
             await this.rpPOIType.selectOption('Certificate of Incorporation/Formation')
             await this.rpPOINumber.fill('1234567890')
             await this.rpPOAType.selectOption('Certificate of Incorporation/Formation')
             await this.RPKycProceed.click()
      }
}
module.exports=RelatedParties