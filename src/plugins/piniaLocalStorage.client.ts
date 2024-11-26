/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable no-useless-constructor */
import { PiniaPluginContext } from 'pinia'

const STORES = [
  'notion-table'
]

class Storage<T> {
  constructor (private readonly id: string) {}

  getState (): T | null {
    const item = localStorage.getItem(this.id)
    try {
      return JSON.parse(item!)
    } catch {
      return item as T
    }
  }

  saveState (state: T) {
    const item = JSON.stringify(state)

    return localStorage.setItem(this.id, item)
  }
}

function LocalStoragePlugin ({ store }: PiniaPluginContext) {
  const isTrackedStore = STORES.includes(store.$id)

  if (isTrackedStore) {
    const storage = new Storage<object>('pinia-' + store.$id)

    store.$subscribe(() => {
      storage.saveState(store.$state)
    })
    const savedState = storage.getState()

    if (savedState) {
      return savedState
    }
  }
}

export default defineNuxtPlugin(({ $pinia }) => {
  $pinia.use(LocalStoragePlugin)
})
