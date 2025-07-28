class Documents{
   constructor(page){

    this.page = page;
    this.DocumentsStepper = page.getByRole("tab", {name: "Investor Documents",});
    this.certRow = page.locator('tr.border-b:has-text(${"DocumentName"})');// ▼ action button in the 4th cell
    this.actionButton = this.certRow.locator('td:nth-child(4) div.relative > button');// "Upload" option in the dropdown menu
    this.uploadOption = this.certRow.locator('td:nth-child(4) div.absolute > button');



   }
   async goToDocumentsSection() {
        await this.DocumentsStepper.click();
        await this.page.waitForLoadState('networkidle');
        await this.page.locator('text=Investor Documents').waitFor({ state: 'visible', timeout: 10000 });
    }
    async uploadDocument(documentName) {
        await this.page.locator(`text=${documentName}`).waitFor({ state: 'visible', timeout: 10000 });
        const certRow = this.page.locator(`tr.border-b:has-text("${documentName}")`);
        const actionButton = certRow.locator('td:nth-child(4) div.relative > button');
        await actionButton.click();
        const uploadOption = certRow.locator('td:nth-child(4) div.absolute > button');
        await uploadOption.click();
        const fileInput = this.page.locator('input[type="file"]');
        await fileInput.setInputFiles('document (35) 3.pdf');
    }





}module.exports = Documents;