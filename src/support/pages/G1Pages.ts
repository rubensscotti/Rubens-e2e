import { Page } from '@playwright/test';
import BasePage from './BasePage';
import G1Elements from '../elements/G1Elements';

export default class G1Pages extends BasePage {
  readonly g1Elements: G1Elements;

  constructor(readonly page: Page) {
    super(page);
    this.page = page;
    this.g1Elements = new G1Elements(page);
  }

  async buscarNoticia(): Promise<void> {
    await this.g1Elements.getSearchField().fill('enem');
    await this.g1Elements.getSearchField().press('Enter');
  }

  async login(email: string, password: string): Promise<void> {
    await this.g1Elements.getLoginButton().click();
    await this.g1Elements.getLoginField().waitFor({ state: 'visible' });
    await this.g1Elements.getLoginField().fill(email);
    await this.g1Elements.getSubmitButton().click();
    await this.g1Elements.getPassField().waitFor({ state: 'visible' });
    await this.g1Elements.getPassField().fill(password);
    await this.g1Elements.getSubmitButton().click();
    await this.g1Elements.getSkipButton().click();
  }

  async BlogCamarotti(): Promise<void> {
    await this.g1Elements.getMenuButton().first().click();
    await this.g1Elements.getBlogMenuItem().click();
    await this.g1Elements.getGersonCamarottiElement().click;
  }

  async JornalNacional(): Promise<void> {
    await this.g1Elements.getJornalNacional().click;
  }
}
