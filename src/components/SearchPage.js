import React from 'react';
import SYoutubeChannelCard from './SYoutubeChannelCard';
import SYoutubeChannelVideoCard from './SYoutubeChannelVideoCard';
import TuneIcon from '@material-ui/icons/Tune';
import SYoutubeChannelVideoCard_data from '../api/SYoutubeChannelVideoCard_data';
import Tooltip from '@material-ui/core/Tooltip';
import './css/SearchPage.css';

const SearchPage = () => {
    return (
        <div className='searchPage'>
            <Tooltip title='Open search filter'>
                <div className='filter'><TuneIcon className='searchPageFilterIcon' /> FILTER</div>
            </Tooltip>
            <hr />
            <SYoutubeChannelCard
                channelImage='https://yt3.ggpht.com/a/AATXAJyZBQmbGZE0RH4Rzh0my2iSArzhfVgUXY5iU8c1NYA=s176-c-k-c0x00ffffff-no-rj-mo'
                channelName='T-Series'
                verified
                subs='160M'
                totalVideos='14,790'
                description="Music can change the world. T-Series is India's largest Music Label & Movie Studio, believes in bringing world close together ..."
            />
            <hr />
            {SYoutubeChannelVideoCard_data.map((d) => {
                return <SYoutubeChannelVideoCard
                    thumbNail={d.thumbNail}
                    title={d.title}
                    views={d.views}
                    timeStamp={d.timeStamp}
                    channelImage={d.channelImage}
                    channelName={d.channelName}
                    verified={d.verified}
                    description={d.description}
                />
            })}
        </div>
    );
}

export default SearchPage;