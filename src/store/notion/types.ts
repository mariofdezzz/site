/* eslint-disable no-use-before-define */

export type Table = {
    properties: [TitleProperty, ...Property[]]
    pages: PageWithProps[]
}

export type Property = TextProperty | NumberProperty

export type TitleProperty = {
    type: 'text'
    name: string
    hide: false
}

export type TextProperty = {
    type: 'text'
    name: string
    hide: boolean
}

export type NumberProperty = {
    type: 'number'
    name: string
    hide: boolean
    format: 'number' | 'euro'
}

export type PageWithProps = {
    properties: unknown[]
}
