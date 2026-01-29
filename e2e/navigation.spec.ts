import { test, expect } from '@playwright/test'

test.describe('Navigation', () => {
  test('should navigate to all sections via nav links', async ({ page }) => {
    await page.goto('/')

    // Check header is visible
    await expect(page.locator('header')).toBeVisible()

    // Navigate to Overview section
    await page.click('text=Overview')
    await expect(page).toHaveURL(/#overview/)

    // Navigate to History section
    await page.click('text=History')
    await expect(page).toHaveURL(/#history/)

    // Navigate to Problem section
    await page.click('text=Problem')
    await expect(page).toHaveURL(/#problem/)

    // Navigate to Solution section
    await page.click('text=Solution')
    await expect(page).toHaveURL(/#solution/)

    // Navigate to Contact section
    await page.click('text=Contact')
    await expect(page).toHaveURL(/#contact/)
  })

  test('should show mobile menu on small screens', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 })
    await page.goto('/')

    // Mobile menu button should be visible
    const menuButton = page.getByRole('button', { name: /open menu/i })
    await expect(menuButton).toBeVisible()

    // Click to open menu
    await menuButton.click()

    // Menu items should be visible
    await expect(page.locator('#mobile-menu')).toBeVisible()
    await expect(page.getByRole('link', { name: 'Overview' })).toBeVisible()
  })
})

test.describe('Contact', () => {
  test('contact button should have mailto link', async ({ page }) => {
    await page.goto('/')

    // Find contact section
    const contactSection = page.locator('#contact')
    await contactSection.scrollIntoViewIfNeeded()

    // Check mailto link
    const contactLink = contactSection.getByRole('link', { name: /contact us/i })
    await expect(contactLink).toHaveAttribute('href', 'mailto:info@asgardpharma.ca')
  })
})

test.describe('Accessibility', () => {
  test('should have skip navigation link', async ({ page }) => {
    await page.goto('/')

    // Tab to focus skip nav link
    await page.keyboard.press('Tab')

    // Check skip nav is visible when focused
    const skipNav = page.getByRole('link', { name: /skip to main content/i })
    await expect(skipNav).toBeFocused()
  })
})
