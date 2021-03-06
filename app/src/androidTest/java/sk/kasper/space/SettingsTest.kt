package sk.kasper.space

import androidx.test.ext.junit.runners.AndroidJUnit4
import org.junit.Test
import org.junit.runner.RunWith
import sk.kasper.space.robot.SettingsRobot
import sk.kasper.space.robot.settings
import sk.kasper.space.robot.timeline


@RunWith(AndroidJUnit4::class)
class SettingsTest: BaseMainActivityTest() {

    @Test
    fun openSettings() {
        timeline {
            fromServerReturnLaunches(emptyList())
            openSettings()
        }

        settings {
            assertHasNotificationsSection()
        }
    }

    @Test
    fun changeTheme() {
        timeline {
            fromServerReturnLaunches(emptyList())
            openSettings()
        }

        settings {
            selectTheme(SettingsRobot.Theme.DARK)
            selectTheme(SettingsRobot.Theme.LIGHT)
        }
    }
}
