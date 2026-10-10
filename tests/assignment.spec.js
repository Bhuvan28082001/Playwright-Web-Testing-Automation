
const { test, expect } = require('@playwright/test');

const BASE_URL = 'https://www.testmuai.com/selenium-playground/';

// ==================================================
// SCENARIO 1: Simple Form Demo
// ==================================================


test('Scenario 1 - Simple Form Demo', async ({ page }) => {
  await page.goto(BASE_URL);

  await page.getByText('Simple Form Demo', { exact: true }).click();

  await expect(page).toHaveURL(/simple-form-demo/);

  // Find the actual message input
  const inputs = page.locator('input, textarea');

  console.log('Total input fields:', await inputs.count());

  for (let i = 0; i < await inputs.count(); i++) {
    console.log(
      'Field',
      i,
      'ID:',
      await inputs.nth(i).getAttribute('id'),
      'Placeholder:',
      await inputs.nth(i).getAttribute('placeholder'),
      'Type:',
      await inputs.nth(i).getAttribute('type')
    );
  }

  
});



// ==================================================
// SCENARIO 2: Drag and Drop Slider
// ==================================================

test('Scenario 2 - Drag and Drop Slider', async ({ page }) => {
  // Step 1: Open the website
  await page.goto(BASE_URL);

  // Step 2: Open Drag & Drop Sliders
  await page.getByText('Drag & Drop Sliders', {
    exact: true
  }).click();

  // Step 3: Find the slider with initial value 15
  const sliders = page.locator('input[type="range"]');

  // Use the slider whose current value is 15
  const slider = sliders.filter({}).nth(2);

  await expect(slider).toHaveValue('15');

  // Step 4: Change the slider value to 95
  await slider.evaluate((element) => {
    const setter = Object.getOwnPropertyDescriptor(
      HTMLInputElement.prototype,
      'value'
    ).set;

    setter.call(element, '95');

    element.dispatchEvent(
      new Event('input', { bubbles: true })
    );

    element.dispatchEvent(
      new Event('change', { bubbles: true })
    );
  });

  // Step 5: Verify final value
  await expect(slider).toHaveValue('95');

  console.log(
    'Slider successfully changed to:',
    await slider.inputValue()
  );
});


// ==================================================
// SCENARIO 3: Input Form Submit
// ==================================================



test('Scenario 3 - Input Form Submit', async ({ page }) => {
  await page.goto(BASE_URL);

  // Open Input Form Submit
  await page.getByText('Input Form Submit', { exact: true }).click();

  // Helper: match a field by any of several selectors, take the first in DOM order
  const field = (...selectors) => page.locator(selectors.join(', ')).first();

  const nameField = field('input[name="name"]');
  const emailField = page.locator('#inputEmail4');
  const passwordField = field('input[name="password"]', '#inputPassword4');
  const submitButton = page.getByRole('button', { name: 'Submit' }).first();

  // Verify form is displayed
  await expect(nameField).toBeVisible();

  // Required-field validation: submit empty form
  await submitButton.click();
  await expect(nameField).toHaveJSProperty('required', true);
  expect(await nameField.evaluate(el => el.checkValidity())).toBe(false);

  // Fill the form
  await nameField.fill('Bhuvan Chandra');
  await emailField.fill('bhuvan.test@example.com');
  await passwordField.fill('Test@12345');
  await field('input[name="company"]').fill('Test Company');
  await field('input[name="website"]').fill('https://example.com');

  await page
    .locator('select[name="country"]')
    .first()
    .selectOption({ label: 'United States' });

  await field('input[name="city"]', '#inputCity', 'input[placeholder="City"]').fill('Berlin');
  await field('input[name="address_line1"]', '#inputAddress1', 'input[placeholder="Address 1"]').fill('Test Street 10');
  await field('input[name="address_line2"]', '#inputAddress2', 'input[placeholder="Address 2"]').fill('Apartment 2');
  await field('input[name="state"]', '#inputState', 'input[placeholder="State"]').fill('Berlin');
  await field('input[name="zip"]', '#inputZip', 'input[placeholder="Zip code"]').fill('10115');

  // Submit the completed form
  await submitButton.click();

  // Verify the success message
  await expect(
    page.getByText('Thanks for contacting us, we will get back to you shortly.')
  ).toBeVisible({ timeout: 15000 });
});