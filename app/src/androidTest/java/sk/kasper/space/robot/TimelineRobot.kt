package sk.kasper.space.robot

import androidx.recyclerview.widget.RecyclerView
import androidx.test.espresso.Espresso.onView
import androidx.test.espresso.Espresso.openActionBarOverflowOrOptionsMenu
import androidx.test.espresso.action.ViewActions.click
import androidx.test.espresso.assertion.ViewAssertions.doesNotExist
import androidx.test.espresso.assertion.ViewAssertions.matches
import androidx.test.espresso.contrib.RecyclerViewActions.actionOnItemAtPosition
import androidx.test.espresso.matcher.ViewMatchers.*
import androidx.test.platform.app.InstrumentationRegistry.getInstrumentation
import org.hamcrest.CoreMatchers.allOf
import org.hamcrest.CoreMatchers.containsString
import sk.kasper.space.R


fun timeline(func: TimelineRobot.() -> Unit) = TimelineRobot().apply { func() }

class TimelineRobot {

    fun openLaunchWithName(name: String): LaunchDetailRobot {
        onView(withText(containsString(name)))
                .perform(click())

        return LaunchDetailRobot()
    }

    fun openSettings() {
        openActionBarOverflowOrOptionsMenu(getInstrumentation().targetContext)
        onView(withText("Settings"))
                .perform(click())
    }

    fun assertHasHeader(headerName: String) {
        onView(withText(headerName))
                .check(matches(isDisplayed()))
    }

}
