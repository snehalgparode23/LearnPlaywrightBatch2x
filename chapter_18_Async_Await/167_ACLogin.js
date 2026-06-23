// Note: This is a plain JS example demonstrating async/await login flow.
// For actual Playwright tests, use .spec.ts files with proper fixtures.

async function login(page, username, password) {
    console.log("Logging in as " + username);
    await page.goto("https://example.com/login");
    await page.fill('#username', username);
    await page.fill('#password', password);
    await page.click('#login-button');
}

async function verifyLogin(page) {
    console.log('Asserting login form is hidden after login');
    let loginButton = await page.$('[data-test="login-button"]');
    return loginButton === null;
}

async function runLoginTest() {
    // Mock page object for demonstration
    let page = {
        goto: async (url) => console.log("Navigated to " + url),
        fill: async (selector, value) => console.log("Filled " + selector + " with " + value),
        click: async (selector) => console.log("Clicked " + selector),
        $: async (selector) => null // simulate element not found (hidden)
    };

    await login(page, "standard_user", "tta_secret");
    let isHidden = await verifyLogin(page);
    console.log("Login form hidden:", isHidden);
}

runLoginTest();