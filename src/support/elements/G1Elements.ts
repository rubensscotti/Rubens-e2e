import { Locator, Page } from '@playwright/test';
import BaseElements from './BaseElements';

export default class G1Elements extends BaseElements {
  constructor(readonly page: Page) {
    super(page);
    this.page = page;
  }

  getSearchField(): Locator {
    return this.page.locator('#busca-campo');
  }

  getLoginButton(): Locator {
    return this.page.locator('span[class="button-login-name"]');
  }

  getLoginField(): Locator {
    return this.page.locator('input[name="email"]');
  }

  getPassField(): Locator {
    return this.page.locator('input[name="password"]');
  }

  getSubmitButton(): Locator {
    return this.page.locator('button[type="submit"]');
  }

  getSkipButton(): Locator {
    return this.page.locator(
      'button.secondary-button[aria-label="Prefiro deixar para depois e sair da página"]'
    );
  }

  getMenuButton(): Locator {
    return this.page.locator('div.menu-button');
  }

  getBlogMenuItem(): Locator {
    return this.page.locator('span.menu-item-title', {
      hasText: 'Blogs e Colunas'
    });
  }

  getPrevisaoTempo(): Locator {
    return this.page.locator(
      'a.menu-item-link.menu-link.menu-navegacao-color-primary',
      { hasText: 'Previsão do Tempo' }
    );
  }

  getCampoBusca(): Locator {
    return this.page.locator('input[name="busca"]');
  }

  getGersonCamarottiElement(): Locator {
    return this.page.locator('p[elementtiming="text-csr"]', {
      hasText: 'Gerson Camarotti'
    });
  }

  getJornalNacional(): Locator {
    return this.page.locator(
      'a.link-logo[aria-label="Ir para Jornal Nacional"]'
    );
  }
}
