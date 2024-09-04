import React from 'react'
import { another } from './another'
import { createRoot } from 'react-dom/client'

const root = createRoot(document.getElementById('app') as HTMLElement)
root.render(<h1>Hello, world</h1>)

export function hello(str: string) {
    return 'hello ' + str
}

another()
// hello('EE')
