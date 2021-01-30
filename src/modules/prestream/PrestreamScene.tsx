import * as React from 'react'
import { SceneInner, SceneWrapper } from './components'

const PrestreamScene: React.FC = () => {
  return (
    <SceneWrapper _innerProps={{ justifyContent: 'space-between' }}>
      <SceneInner text="Stream starting soon..." variant="prestream" />
    </SceneWrapper>
  )
}

export default PrestreamScene
