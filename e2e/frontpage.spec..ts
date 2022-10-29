import { test, expect } from '@playwright/test'

test.describe('front page tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/')
  })

  test('front page has correct content', async ({ page }) => {
    const title = page.getByRole('heading', { level: 1 })
    await expect(title.getByText('Ruokärahinä')).toBeVisible()

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
    await expect(page.getByText('Go to fight')).toBeDisabled()
    await page.getByText('Set to red corner').first().click()
    await expect(page.getByText('Go to fight')).toBeDisabled()
    await page.getByText('Set to blue corner').first().click()
    await expect(page.getByText('Go to fight')).not.toBeDisabled()
  })

  test('red fighter displays correct information if only blue is selected', async ({
    page,
  }) => {
    await page.getByText('Set to blue corner').first().click()
    const redFighter = page.getByTestId('fighter-red')
    await expect(redFighter.getByText('No fighter yet')).toBeVisible()
  })

  test('blue fighter displays correct information if only red is selected', async ({
    page,
  }) => {
    await page.getByText('Set to red corner').first().click()
    const blueFighter = page.getByTestId('fighter-blue')
    await expect(blueFighter.getByText('No fighter yet')).toBeVisible()
  })

  test('favorites are correct', async ({ page }) => {
    await expect(page.getByText('Omena')).toBeVisible()
    await expect(page.getByText('Porkkana')).toBeVisible()
    await expect(page.getByText('Banaani')).toBeVisible()
    await expect(page.getByText('Päärynä')).toBeVisible()
    await expect(page.getByText('Mansikka')).toBeVisible()
    await expect(page.getByText('Mustikka')).toBeVisible()
    await expect(page.getByText('Vadelma')).toBeVisible()
    await expect(page.getByText('Paprika')).toBeVisible()
    await expect(page.getByText('Ananas')).toBeVisible()
    await expect(page.getByText('Suklaa')).toBeVisible()
  })

  test('there are 10 favorites', async ({ page }) => {
    await page.getByRole('listitem').first().waitFor()
    const favorites = page.getByRole('listitem')
    const count = await favorites.count()
    expect(count).toBe(10)
  })

  test('starting a fight navigates to correct page', async ({ page }) => {
    await page.getByText('Set to red corner').first().click()
    await page.getByText('Set to blue corner').first().click()
    await expect(page.getByText('Go to fight')).not.toBeDisabled()
    await page.getByText('Go to fight').click()
    await expect(page).toHaveURL('/results')
  })

  test('searching changes the list of ingredients shown', async ({ page }) => {
    await expect(page.getByRole('listitem').first()).toHaveText(/Omena/)
    await page.getByLabel('Search for ingredients:').fill('kaali')
    await expect(page.getByRole('listitem').first()).not.toHaveText(/Omena/)
  })
})
