import { test, expect } from '@playwright/test';
import InternalUserLoginPage from '../../pageobjects/InternalUserLogin';
import ApplicationFilling from '../../pageobjects/applicationFilling';
import RelatedParties from '../../pageobjects/relatedParties';
import FpiRegistrationDetails from '../../pageobjects/FPIRegistrationDetails';
import AnnexureToCaf from '../../pageobjects/AnnexureToCaf';
import AdditionalInformation from '../../pageobjects/AdditionalInformation';



test('createApplication',async({page})=>{

      const Login = new InternalUserLoginPage(page)
          await Login.goto("https://fc-dev.finwyze.com")
          await Login.validLogin("fc.app.rm01@fintuple.com","Icici@456")
          await Login.cardSelection("Foreign Application")
        
      const createApplication = new ApplicationFilling(page,expect)


     await createApplication.createNewApplication("FPI","CATEGORY II","D - PRIVATE LIMITED COMPANY")
    
      
      await createApplication.InvestorDetails("minnal")
      // await page.pause()
      //await createApplication.yesPanFlow()
      await createApplication.NoPanFlowAndRepresentativeNo() 
      await createApplication.InvestorKYC()
      //await page.pause()
           

    //    await createApplication.InvestorKYCYesPan()

      // await createApplication.incomeDetails()
      //await page.pause()
            

      const relatedParties = new RelatedParties(page)

      await page.pause()

       await relatedParties.goToRP()
       await relatedParties.createIndvialUBO("sumanth 2")
      // await page.pause()
       await relatedParties.addRP()
       await relatedParties.createNonIndividualUBO('harri 3')
       await page.pause()
       await relatedParties.addRP()
       await relatedParties.createIndvialUBO('sumanth 4')
       await relatedParties.addRP()
       await relatedParties.createAccountOpening('Nihal 5')
       await relatedParties.addRP()
       await relatedParties.createOperations('qa test 6')
       await relatedParties.addRP()
       await relatedParties.createNonIndividualUBO('Mouna 7')
       await relatedParties.addRP()
       await relatedParties.createNonIndividualUBO('harini 8')
       await relatedParties.addRP()
       await relatedParties.createAccountOpening('Nihal 9')



       await new Promise(resolve => setTimeout(resolve, 10000));
        const fpiRegistrationDetails=new FpiRegistrationDetails(page)
        await fpiRegistrationDetails.goToFPIRegistrationDetails()
        await fpiRegistrationDetails.investmentManagement()
        
        await fpiRegistrationDetails.regulatoryAuthority()
        await fpiRegistrationDetails.custodianDetail()
        await fpiRegistrationDetails.clubbingInvestment()
        await fpiRegistrationDetails.DetailsAssociatedWithSecurites()


        const annexToCaf = new AnnexureToCaf(page);
        await annexToCaf.goToAnnexureToCafSecton()
       // await page.pause()
        await annexToCaf.annexureToCaf()

         const additionalInformation=new AdditionalInformation(page)
        await additionalInformation.goToAdditionalInformation()
        await additionalInformation.aml()
        //await page.pause()
        await additionalInformation.additionalDetails()
        //await page.pause()
        await additionalInformation.FactaDetailSection()
        //await page.pause()
        await additionalInformation.crsSelfCertificate()
        await additionalInformation.declaration()
        


    
})