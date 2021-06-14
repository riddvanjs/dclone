import React from 'react'
import { AppHeaderWrapper, AppHeaderBlock } from './appheader.styled'

function AppHeader() {
    return (
        <AppHeaderWrapper>
            <AppHeaderBlock>
                <img src="/images/home/logo.svg" alt="Disney+" />
            </AppHeaderBlock>
        </AppHeaderWrapper>
    )
}

export default AppHeader
