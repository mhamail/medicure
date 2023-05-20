import React from 'react'
import Menu from './Menu'
//mui icon
import {Article,People,OndemandVideo,Work} from '@mui/icons-material';

const _MenuItems = () => {
    return (
        <>
            <Menu title={"Articles"} link={"/"} Icon={Article} />
            <Menu title={"People"} link={"/services"} Icon={People}  />
            <Menu title={"Learning"} link={"/about"} Icon={OndemandVideo} />
            <Menu title={"Jobs"} link={"/about"} Icon={Work} />
        </>
    )
}

export default _MenuItems