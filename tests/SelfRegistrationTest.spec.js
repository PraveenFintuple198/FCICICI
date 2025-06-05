import test from '@playwright/test';
const SelfRegistration=require('../pageobjects/Selfregister')

test('test', async ({ page }) => {

  const selfRegistration=new SelfRegistration(page)
page.goto("https://fc-ext.finwyze.com/registration")

await selfRegistration.register()




});
