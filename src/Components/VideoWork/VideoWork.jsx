import React from 'react'
import Subscribe from './Subscribe';
import cl from './VideoWork.module.scss';
const VideoWork = () => {
  return (
    <div className={cl.VideoWork}>
        <div className={cl.img}></div>
        <div className='cont'>
            <div className={cl.VideoWork__content}>
                <div className={cl.VideoWork__text}>
                  <h3>Видео о нашей работе</h3>
                  <p>Просто посмотрите, как мы работаем</p>
                </div>
                <div className={cl.VideoWork__video}>
                  <iframe 
                      width="970" 
                      height="430" 
                      src="https://www.youtube.com/embed/x--M8d7UBMM" 
                      title="YouTube video player" 
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                      allowfullscreen
                      frameborder="1"
                  />
                </div>
                <Subscribe/>
            </div>
        </div>
    </div>
  )
}

export default VideoWork