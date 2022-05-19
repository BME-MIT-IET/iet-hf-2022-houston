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
    
    const firsListItemTitle = await client.$("/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/androidx.compose.ui.platform.ComposeView/android.view.View/android.view.View[2]/android.view.View[2]/android.view.View/android.view.View[2]");
    const firstListItemTitleText = await firsListItemTitle.getText();

    const firstListItem = await client.$("/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/androidx.compose.ui.platform.ComposeView/android.view.View/android.view.View[2]/android.view.View[2]/android.view.View");
    await firstListItem.touchAction("tap");

    const launchName = await client.$("/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/androidx.compose.ui.platform.ComposeView/android.view.View/android.view.View/android.view.View/android.view.View[1]/android.view.View[3]").getText();
    let rocketName = await client.$("/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/androidx.compose.ui.platform.ComposeView/android.view.View/android.view.View/android.view.View/android.view.View[6]").getText();

    rocketName = rocketName.slice(2);

    const result = rocketName + " • " + launchName;

    assert.strictEqual(result, firstListItemTitleText);
    
    await client.deleteSession();
  }
  
  main();
  