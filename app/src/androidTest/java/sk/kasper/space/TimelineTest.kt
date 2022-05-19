package sk.kasper.space


import androidx.test.ext.junit.runners.AndroidJUnit4
import org.junit.Test
import org.junit.runner.RunWith
import sk.kasper.space.robot.droid.LaunchDroid
import sk.kasper.space.robot.launchDetail
import sk.kasper.space.robot.timeline


@RunWith(AndroidJUnit4::class)
class TimelineTest : BaseMainActivityTest() {

    @Test
    fun oneLaunch_clickFirstLaunch_showLaunchDetail() {
        timeline {
            fromServerReturnLaunches(listOf(LaunchDroid("Electron|Test mission")))
            assertHasHeader("Tomorrow")
        }
    }

    @Test
    fun multipleLaunches_clickOnOne_showLaunchDetail() {
        timeline {
            fromServerReturnLaunches(listOf(
                    LaunchDroid("Electron|Test mission"),
                    LaunchDroid("Falcon|Iridium"),
                    LaunchDroid("Ariane|Some probe")))

            openLaunchWithName("Iridium")
        }

        launchDetail {
            assertLaunchName("Iridium")
        }
    }

}

