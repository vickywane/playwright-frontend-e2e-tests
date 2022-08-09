import { test, expect } from '@playwright/experimental-ct-react';
import App, { SearchField } from '../App';

// test.use({ viewport: { width: 500, height: 500 } });

test('SearchField accepts text input', async ({ mount }) => {
    const searchComponent = await mount(
        <SearchField />
    );
    const searchField = searchComponent.locator('#search-field')
    
    await searchField.fill('Rick')
    await expect(searchField).toHaveValue('Rick')
});

test('Clicking `Find Character` button executes executeSearch prop', async ({ mount }) => {
    let isCalled = false

    const searchComponent = await mount(
        <SearchField
            executeSearch={() => isCalled = true}
        />
    );

    await searchComponent.locator('#search-field').fill('test character')
    await searchComponent.locator('#find').click()

    expect(isCalled).toBeTruthy()
});

test('Input field text length controls `Find Character` button disabled state', async ({ mount }) => {
    const searchComponent = await mount(
        <SearchField />
    );

    const btn = await searchComponent.locator('#find').isDisabled()
    expect(btn).toBeTruthy()

    await searchComponent.locator('#search-field').fill('test character')
    await expect(searchComponent.locator('#find')).toBeEnabled();
}); 

