import { test, expect } from '@playwright/experimental-ct-vue';
import Character from '../src/components/Character.vue'

const SAMPLE_CHARACTER = {
    "name": "Toxic Rick",
    "gender": "Male",
    "specie": "Humanoid",
    "type": "Rick's Toxic Side",
    "link": "https://rickandmortyapi.com/api/location/64",
    "image": "https://rickandmortyapi.com/api/character/avatar/361.jpeg"
}

test('Component displays character details', async ({ mount }) => {
    const characterComponent = await mount(Character, {
        props: { ...SAMPLE_CHARACTER }
    });

    await expect(characterComponent.locator('#character-name')).toHaveText(SAMPLE_CHARACTER.name);
    
    await expect(characterComponent.locator('#character-gender')).toHaveText(SAMPLE_CHARACTER.gender);
    
    await expect(characterComponent.locator('#character-type')).toHaveText(SAMPLE_CHARACTER.type);
    
    await expect(characterComponent.locator('#character-specie')).toHaveText(SAMPLE_CHARACTER.specie);

    // const name = await characterComponent.locator('#character-name').textContent()
    // expect(name.trim()).toBe(SAMPLE_CHARACTER.name)

    // const gender = await characterComponent.locator('#character-gender').innerText()
    // expect(gender.trim()).toBe(SAMPLE_CHARACTER.gender)

    // const type = await characterComponent.locator('#character-type').innerText()
    // expect(type.trim()).toBe(SAMPLE_CHARACTER.type)

    // const specie = await characterComponent.locator('#character-specie').innerText()
    // expect(specie.trim()).toBe(SAMPLE_CHARACTER.specie)
});

test('Character name renders anchor link to character', async ({ mount }) => {
    const characterComponent = await mount(Character, {
        props: { ...SAMPLE_CHARACTER }
    });

    await expect(characterComponent.locator('#character-name > a')).toHaveAttribute("href")
});
