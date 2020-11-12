import React from 'react';
import Tooltip from '@material-ui/core/Tooltip';
import {Link} from 'react-router-dom';
import './css/SidebarRow.css';

const SidebarRow = ({ selected, Icon, title }) => {
    return (
        <Tooltip title={title}>
            <Link className='sideBarRow_Link' to={title === 'Home' ? '/' : `/${title}`}>
            <div className={`sidebarRow ${selected && 'selected'}`}>
                <Icon className='sidebarRow_icon' />
                <h4>{title}</h4>
            </div>
            </Link>
        </Tooltip>
    );
}

export default SidebarRow;