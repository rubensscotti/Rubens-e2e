import { test } from '@playwright/test';
import { join } from 'path';
import { TheConfig } from 'sicolo';
import G1Page from '../support/pages/G1Pages';

test.describe('Notícias G1', () => {
  const CONFIG = join(__dirname, '../support/fixtures/config.yml');
  let g1Page: G1Page;
  const BASE_URL = TheConfig.fromFile(CONFIG)
    .andPath('application.g1')
    .retrieveData();

  test.beforeEach(async ({ page }) => {
    g1Page = new G1Page(page);
    await page.goto(BASE_URL);
  });

  test('Buscar notícia ENEM', async () => {
    await g1Page.buscarNoticia();
  });

  test('Blog Camarotti', async () => {
    await g1Page.BlogCamarotti();
  });
});
