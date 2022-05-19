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
    app: "/home/czbalint/BME/IET/iet-hf-2022-houston/appium-tests/rocketry.apk",
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
    
    const issCat = await client.$("/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/androidx.compose.ui.platform.ComposeView/android.view.View/android.widget.HorizontalScrollView/android.widget.CheckBox[3]");
    await issCat.touchAction('tap');

    const orderedISSCat = await client.$("/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/androidx.compose.ui.platform.ComposeView/android.view.View/android.view.View[2]/android.view.View[2]/android.view.View/android.widget.CheckBox");
    const textISS = await orderedISSCat.getText();

    assert.strictEqual(textISS, "ISS");
  
    await client.$('//android.view.View[@content-desc="clear button"]').touchAction('tap');
    const probeCat = await client.$("/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/androidx.compose.ui.platform.ComposeView/android.view.View/android.widget.HorizontalScrollView/android.widget.CheckBox[4]");
    await probeCat.touchAction('tap');

    const orderedProbeCat = await client.$("/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/androidx.compose.ui.platform.ComposeView/android.view.View/android.view.View[2]/android.view.View[2]/android.view.View/android.widget.CheckBox");
    const textProbe = await orderedProbeCat.getText();

    assert.strictEqual(textProbe, "Probe");


    await client.deleteSession();
  }
  
main();
  