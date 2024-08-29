import { configureStore } from '@reduxjs/toolkit'
import userReduser from './userSlice'
import moviesReduser from './movieSlice'

const appStore = configureStore(
    {
        reducer: {
            user: userReduser,
            movie: moviesReduser
        }
    }
)

export default appStore