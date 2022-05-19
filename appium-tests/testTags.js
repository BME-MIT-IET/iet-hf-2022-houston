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
    
    const firstItemTagText = await client.$("/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/androidx.compose.ui.platform.ComposeView/android.view.View/android.view.View[2]/android.view.View[2]/android.view.View/android.widget.CheckBox").getText();
    const firstListItem = await client.$("/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/androidx.compose.ui.platform.ComposeView/android.view.View/android.view.View[2]/android.view.View[2]/android.view.View");
    await firstListItem.touchAction("tap");

    const itemTagText = await client.$("/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/androidx.compose.ui.platform.ComposeView/android.view.View/android.view.View/android.view.View/android.view.View[1]/android.widget.CheckBox").getText();

    assert.strictEqual(itemTagText, firstItemTagText);

    await client.deleteSession();
  }
  
  main();
  