import { test, expect } from '@playwright/test'

test.describe('front page tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/')
  })

  test('front page has correct content', async ({ page }) => {
    await expect(page.getByText('Ruokarahina')).toBeVisible()

    await expect(page.getByText('Pick from favorites')).toBeVisible()
  })

  test('searching hides favorites', async ({ page }) => {
    await expect(page.getByText('Pick from favorites')).toBeVisible()
    await page.getByLabel('Search for ingredients:').fill('omena')
    await expect(page.getByText('Pick from favorites')).not.toBeVisible()
  })

  test('selecting a fighter shows fighter', async ({ page }) => {
    await expect(page.getByText('Fighters')).not.toBeVisible()
    await page.getByText('Set to red corner').first().click()
    await expect(page.getByText('Fighters')).toBeVisible()
  })

  test('start fight buttons is disabled if no fighters are set', async ({
    page,
  }) => {
    await expect(page.getByText('Start the fight!')).toBeDisabled()
    await page.getByText('Set to red corner').first().click()
    await expect(page.getByText('Start the fight!')).toBeDisabled()
    await page.getByText('Set to blue corner').first().click()
    await expect(page.getByText('Start the fight!')).not.toBeDisabled()
  })

  test('starting a fight navigates to correct page', async ({ page }) => {
    await page.getByText('Set to red corner').first().click()
    await page.getByText('Set to blue corner').first().click()
    await expect(page.getByText('Start the fight!')).not.toBeDisabled()
    await page.getByText('Start the fight!').click()
    await expect(page).toHaveURL('http://localhost:3000/results')
  })
})
