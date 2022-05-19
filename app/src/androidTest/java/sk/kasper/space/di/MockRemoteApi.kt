package sk.kasper.space.di

import kotlinx.coroutines.CompletableDeferred
import sk.kasper.remote.RemoteApi
import sk.kasper.remote.entity.RemoteLaunch
import sk.kasper.remote.entity.RemoteLaunchesResponse
import javax.inject.Inject


/**
 * Dovoluje nastavit odpoved az potom, ako sa zaregistruje klient na listLaunches().
 */
class MockRemoteApi @Inject constructor(): RemoteApi {

    private var completableDeferred = CompletableDeferred<RemoteLaunchesResponse>()

    override suspend fun timeline(): RemoteLaunchesResponse {
        return completableDeferred.await()
    }

    fun listLaunchesReturn(list: List<RemoteLaunch>) {
        completableDeferred.complete(RemoteLaunchesResponse(0, list, emptyList(), emptyList(), emptyList()))
    }

}