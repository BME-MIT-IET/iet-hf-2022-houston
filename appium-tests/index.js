// javascript

const wdio = require("webdriverio");
const assert = require("assert");
const { default: touchAction } = require("webdriverio/build/commands/browser/touchAction");

const opts = {
  path: '/wd/hub',
  port: 4723,
  capabilities: {
    platformName: "Android",
    platformVersion: "11",
    deviceName: "Android Emulator",
    app: "/home/bence/BME/IET/iet-hf-2022-houston/appium-tests/rocketry.apk",
    appPackage: "sk.kasper.space",
    appActivity: "MainActivity",
    automationName: "UiAutomator2"
  }
};

function delay(time) {
  return new Promise(resolve => setTimeout(resolve, time));
}

async function main () {
  const client = await wdio.remote(opts);
  
  //open settings menu
  const settingsMenu = await client.$("/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/androidx.compose.ui.platform.ComposeView/android.view.View/android.view.View[1]/android.view.View/android.widget.Button");
  const settingsButton = await client.$("/hierarchy/android.view.ViewGroup/android.view.View/android.view.View/android.view.View/android.widget.ScrollView/android.view.View[2]/android.view.View");
  await settingsMenu.touchAction('tap');
  await settingsButton.touchAction('tap');

  const settingsTitle = await client.$("/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/androidx.compose.ui.platform.ComposeView/android.view.View/android.view.View[1]/android.view.View/android.view.View[2]");
  const text = await settingsTitle.getText();

  assert.strictEqual(text,"Settings");

  const setThemeButton = await client.$("/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/androidx.compose.ui.platform.ComposeView/android.view.View/android.view.View[2]/android.view.View[1]");
  await setThemeButton.touchAction('tap');

  const darkThemeButton = await client.$("/hierarchy/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.View/android.view.View/android.view.View/android.view.View[3]");
  await darkThemeButton.touchAction('tap');

  const themeText = await client.$("/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/androidx.compose.ui.platform.ComposeView/android.view.View/android.view.View[2]/android.view.View[1]/android.view.View[2]");
  const theme = await themeText.getText();

  assert.strictEqual(theme, "Dark");

  await delay(5000);
  await client.deleteSession();
}

main();
