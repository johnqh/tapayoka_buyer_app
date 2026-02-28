import { describe, it, expect, vi } from 'vitest';

vi.mock('@sudobility/building_blocks', () => ({
  AppFooterForHomePage: () => null,
}));

describe('tapayoka_buyer_app', () => {
  it('has defined app entry', async () => {
    // Verify the module can be imported without errors
    const mod = await import('../App');
    expect(mod.App).toBeDefined();
  });
});
