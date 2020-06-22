import * as firebase from "firebase"
import { firebaseConfig } from './config'

firebase.initializeApp(firebaseConfig)

export const firebaseSaveAll = async (tableName: string, data: any[], replaceAll: boolean = true) => {
    try {
        const ref = firebase.database().ref(tableName)
        if (replaceAll) await ref.remove()
        for (const value of data) {
            await ref.push(value)
        }
    } catch (error) {
        throw error
    }
}