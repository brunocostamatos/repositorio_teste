import React from 'react'

import styles from '../assets/css'

export function Column({ children }) {
   const { column } = styles.components
   return <div className={column.container}>{children}</div>
}

export default Column