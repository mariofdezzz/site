import { defineStore } from 'pinia'
import { Table } from './types'

export type TableStoreState = Table

export const useTableStore = defineStore('notion-table', {
  state (): TableStoreState {
    return {
      properties: [
        {
          type: 'text',
          name: 'Concepto',
          hide: false
        },
        {
          type: 'number',
          name: 'Cantidad',
          format: 'euro',
          hide: false
        },
        {
          type: 'number',
          name: 'Unidades',
          format: 'number',
          hide: false
        }
      ],
      pages: [
        {
          properties: ['Ryanair', 123.32, 2.12]
        },
        {
          properties: ['Vueling', 123.32, 2.12]
        },
        {
          properties: ['AirBnB', 123.32, 2.12]
        },
        {
          properties: ['Dinner', 123.32, 2.12]
        }
      ]
    }
  }
})
