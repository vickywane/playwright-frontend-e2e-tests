import { test, expect } from '@playwright/experimental-ct-svelte'
import Paginator from '../src/components/Paginator.svelte'

test.use({ viewport: { width: 500, height: 500 } })

test('Displays pages option based on pagesCount prop', async ({ mount }) => {
    const component = await mount(Paginator, {
        props: {
            pagesCount: 42
        }
    })

     expect(await component.locator('#pages-option > option').count()).toBe(42)
})


test('Returns the pages number when clicked', async ({ mount }) => {
    let pageClicked;

    const component = await mount(Paginator, {
        props: {
            handlePageSelect: (number) => pageClicked = number,
            pagesCount: 10,
        }
    })

    await component.locator('#pages-option > option').first().click()


    expect(pageClicked).toBe(1)
})