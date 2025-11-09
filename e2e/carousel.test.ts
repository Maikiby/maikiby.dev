import { expect, test } from '@playwright/test';

test('carousel is visible and interactive', async ({ page }) => {
  await page.goto('/');

  // Check if the carousel container is visible
  await expect(page.getByTestId('carousel')).toBeVisible();

  // Check if the main images container is visible
  await expect(page.getByTestId('carousel-images')).toBeVisible();

  // Check if the left and right buttons are visible
  await expect(page.getByTestId('carousel-left')).toBeVisible();
  await expect(page.getByTestId('carousel-right')).toBeVisible();

  // Check if the thumbnails container is visible
  await expect(page.getByTestId('carousel-thumbnails')).toBeVisible();

  // Check if there are 6 thumbnails
  await expect(page.getByTestId('carousel-thumbnail')).toHaveCount(6);
});
