import React, { ComponentType } from 'react'
import { Global } from '@emotion/core'

import fontFaces from './fontFaces'

const FontsFaces: ComponentType = () => <Global styles={fontFaces} />

export default FontsFaces
