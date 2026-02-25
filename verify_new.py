import asyncio
from playwright.async_api import async_playwright
import os

async def main():
    async with async_playwright() as p:
        browser = await p.chromium.launch()
        # Start a local server to serve the built files
        # Or just use the dev server if it's easier, but build is safer
        # Let's try running the preview server
        process = await asyncio.create_subprocess_exec(
            "npm", "run", "preview", "--", "--port", "4173"
        )
        await asyncio.sleep(5) # Give it time to start

        page = await browser.new_page()
        await page.goto("http://localhost:4173")
        await asyncio.sleep(2) # Wait for animations

        # Take screenshots
        os.makedirs("verification_new", exist_ok=True)
        await page.screenshot(path="verification_new/hero_slider.png")

        # Scroll down to Features
        await page.evaluate("window.scrollTo(0, 800)")
        await asyncio.sleep(1)
        await page.screenshot(path="verification_new/features.png")

        # Scroll to products
        await page.evaluate("window.scrollTo(0, 1600)")
        await asyncio.sleep(1)
        await page.screenshot(path="verification_new/products.png")

        # Scroll to testimonials
        await page.evaluate("window.scrollTo(0, 3200)")
        await asyncio.sleep(1)
        await page.screenshot(path="verification_new/testimonials.png")

        # Kill preview server
        process.terminate()
        await browser.close()

if __name__ == "__main__":
    asyncio.run(main())
