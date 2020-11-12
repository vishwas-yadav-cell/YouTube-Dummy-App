import React from 'react';
import Data from '../api/videoCard_data';
import VideoCard from './VideoCard';
import './css/RecommendedVideos.css';

const RecommendedVideos = () => {
    return (
        <div className='recommendedVideos'>
            <h3>RecommendedVideos</h3>
            <div className='recommendedVideos_videosSection'>
                {
                    Data.map((d)=>{
                       return <VideoCard 
                            thumbNail={d.thumbNail}
                            channelImage={d.channelImage}
                            videoTitle={d.videoTitle}
                            channelName={d.channelName}
                            verified={d.verified}
                            views={d.views}
                            timeStamp={d.timeStamp}
                        />
                    })
                }

                {
                    Data.map((d)=>{
                       return <VideoCard 
                            thumbNail={d.thumbNail}
                            channelImage={d.channelImage}
                            videoTitle={d.videoTitle}
                            channelName={d.channelName}
                            verified={d.verified}
                            views={d.views}
                            timeStamp={d.timeStamp}
                        />
                    })
                }
                
                {
                    Data.map((d)=>{
                       return <VideoCard 
                            thumbNail={d.thumbNail}
                            channelImage={d.channelImage}
                            videoTitle={d.videoTitle}
                            channelName={d.channelName}
                            verified={d.verified}
                            views={d.views}
                            timeStamp={d.timeStamp}
                        />
                    })
                }
            </div>
        </div>
    );
}

export default RecommendedVideos;
