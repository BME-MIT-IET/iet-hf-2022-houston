package sk.kasper.space.di

import dagger.Binds
import dagger.Module
import sk.kasper.remote.RemoteApi
import javax.inject.Singleton

@Module
abstract class MockRemoteApiModule {

    @Singleton
    @Binds
    abstract fun bindsRemoteApi(api: MockRemoteApi): RemoteApi

}