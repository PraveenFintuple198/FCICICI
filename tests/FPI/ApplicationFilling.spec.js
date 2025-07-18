import { test, expect } from '@playwright/test';
import InternalUserLoginPage from '../../pageobjects/InternalUserLogin';
import RelatedParties from '../../pageobjects/relatedParties';
import FpiRegistrationDetails from '../../pageobjects/FPIRegistrationDetails';
import AnnexureToCaf from '../../pageobjects/AnnexureToCaf';
import AdditionalInformation from '../../pageobjects/AdditionalInformation';
import ApplicationFilling from '../../pageobjects/applicationFilling';

test('fillApplication',async({page})=>{

       const Login = new InternalUserLoginPage(page)
         await Login.goto("https://fc-dev.finwyze.com")
         await Login.validLogin("fc.app.rm01@fintuple.com","Icici@456")
         await Login.cardSelection("Foreign Application")

       await page.getByText('FCNIFPN25071703').click()

      


       

      // const relatedParties=new RelatedParties(page)
      // await page.pause()

      //  await relatedParties.goToRP()
       
      // // await page.pause()
      //  await relatedParties.addRP()
      

      
        // const fpiRegistrationDetails=new FpiRegistrationDetails(page)
        // await fpiRegistrationDetails.goToFPIRegistrationDetails()
        // await fpiRegistrationDetails.investmentManagement()
        // await page.pause()
        // await fpiRegistrationDetails.regulatoryAuthority()
        // await page.pause()
        // await fpiRegistrationDetails.custodianDetail()
        // await page.pause()
        // await fpiRegistrationDetails.clubbingInvestment()
        // await page.pause()
        // await fpiRegistrationDetails.DetailsAssociatedWithSecurites()

        //   const annexToCaf = new AnnexureToCaf(page);
        // await annexToCaf.goToAnnexureToCafSecton()
        // await page.pause()
        // await annexToCaf.annexureToCaf()

        const additionalInformation=new AdditionalInformation(page)
        await additionalInformation.goToAdditionalInformation()
        await page.pause()

        //         await additionalInformation.aml()
        // //await page.pause()
        // await additionalInformation.additionalDetails()
        // //await page.pause()
        // // await additionalInformation.FactaDetailSection()
        // //await page.pause()
        await additionalInformation.crsSelfCertificate()
        await additionalInformation.declaration()
         
        await additionalInformation.additionalDetails()

        
        



})
