async (page) => {
  // Go to the url passed to the command line (see below)
  await page.goto("", { waitUntil: "networkidle" });
  await page.waitForTimeout(3000); // Wait for 3 seconds
  await page.scrollToElement("footer"); // Scroll to the bottom of the page (change the element name depending on your markup)
  await page.waitForNetworkIdle(); // Wait for every request to be answered - like a normal user would do
};
