import "./HomeComponent.css"
import logo from  "./img/logo.PNG"
import searchlogo from "./img/search.PNG"
import VideoPreview from "./VideoPreview"
import home from "./img/home.PNG"
import explorer from "./img/explore.PNG"
import subscription from "./img/subscription.PNG"
import library from "./img/library.PNG"
import history from "./img/history.PNG"
import yourvideo from "./img/your-video.PNG"
import watchlater from "./img/watch-later.PNG"
import showmore from "./img/show-more.PNG"
import likedvideo from "./img/liked-video.PNG"
import videopic from "./img/video.PNG"
import gridpic from "./img/grid.PNG"
import bellicon from "./img/bell.PNG"
import unnamed from "./img/unnamed.jpg"
import profilepic from "./img/profile-pic.jpg"
import profilepic1 from "./img/profile-pic1.jpg"
import hqdefault from "./img/hqdefault.jpg"
import hq720 from "./img/hq720.webp"
import channel4 from "./img/channels4_profile.jpg"

function HomeComponent() {
    return (

        <div className="yt">
            <div className="first">
                <div className="item1">
                    <img src={logo}></img>
                </div>
                <div className="item2">
                    <div className="b1">
                        <input type="text" className="searchinput"></input>
                    </div>
                    <div className="b2">
                        <button className="button">
                            <img className="searchlogo" src={searchlogo}></img>
                        </button>
                        
                    </div>
                </div>
                <div className="item3">
                            <div class="user-options">
                                <img src={videopic} class="icon" alt=""></img>
                                <img src={gridpic} class="icon" alt=""></img>
                                <img src={bellicon} class="icon" alt=""></img>
                                <div class="user-dp">
                                <img src="img/profile-pic.jpg" alt="1"></img>
                            </div>
                            </div>
                </div>
            </div>

            <div className="second">
                <div className="sidebar">
                    <a href="#" class="links active"><img src={home} alt=""></img>home</a>
                    <a href="#" class="links"><img src={explorer} alt=""></img>explore</a>
                    <a href="#" class="links"><img src={subscription} alt=""></img>subscription</a>
                    <hr class="seperator"></hr>
                    <a href="#" class="links"><img src={library} alt=""></img>library</a>
                    <a href="#" class="links"><img src={history} alt=""></img>history</a>
                    <a href="#" class="links"><img src={yourvideo} alt=""></img>your video</a>
                    <a href="#" class="links"><img src={watchlater} alt=""></img>watch leater</a>
                    <a href="#" class="links"><img src={likedvideo} alt=""></img>like video</a>
                    <a href="#" class="links"><img src={showmore} alt=""></img>show more</a>
                </div>



                <div className="content2">
                <div class="filters">
                    <button class="filter-options active">all</button>
                    <button class="filter-options">CSS</button>
                    <button class="filter-options">web development</button>
                    <button class="filter-options">python</button>
                    <button class="filter-options">entertainment</button>
                    <button class="filter-options">marvel</button>
                    <button class="filter-options">javascript</button>
                    <button class="filter-options">artificial intelligence</button>
                    <button class="filter-options">machine learning</button>
                    <button class="filter-options">trending</button>
                </div>
                    <VideoPreview title="RIT Roorkee Roadies || RIT Roorkee || Roadies Day 1 Part 1 || Aman Modak Vlogs @craze4study761" thumbnail1={profilepic} channellogo={profilepic1} ChannelName="Bombastic Vlogger" views="1.6k" uploadtime="8 weeks ago"></VideoPreview>
                    <VideoPreview title="Bas Ek Baar | Soham Naik, Aamir Ali | Sanjeeda Sheikh | Anurag Saikia | Latest Hindi Romantic Songs" thumbnail1={hqdefault} channellogo={unnamed} ChannelName="Times Music" views="45.3m" uploadtime="6 years ago"></VideoPreview>
                    <VideoPreview title="Netaji Subhas Chandra Bose : The Forgotten Hero (2004) Full Hindi Movie | Sachin Khedekar" thumbnail1={hq720} channellogo={channel4} ChannelName="Goldmines Bollywood" views="41m" uploadtime="4 years ago"></VideoPreview>
                    <VideoPreview title="Bas Ek Baar | Soham Naik, Aamir Ali | Sanjeeda Sheikh | Anurag Saikia | Latest Hindi Romantic Songs" thumbnail1={hqdefault} channellogo={unnamed} ChannelName="Times Music" views="45.3m" uploadtime="6 years ago"></VideoPreview>
                    <VideoPreview title="Bas Ek Baar | Soham Naik, Aamir Ali | Sanjeeda Sheikh | Anurag Saikia | Latest Hindi Romantic Songs" thumbnail1={hqdefault} channellogo={unnamed} ChannelName="Times Music" views="45.3m" uploadtime="6 years ago"></VideoPreview>
                    <VideoPreview title="Bas Ek Baar | Soham Naik, Aamir Ali | Sanjeeda Sheikh | Anurag Saikia | Latest Hindi Romantic Songs" thumbnail1={hqdefault} channellogo={unnamed} ChannelName="Times Music" views="45.3m" uploadtime="6 years ago"></VideoPreview>
                    <VideoPreview title="Bas Ek Baar | Soham Naik, Aamir Ali | Sanjeeda Sheikh | Anurag Saikia | Latest Hindi Romantic Songs" thumbnail1={hqdefault} channellogo={unnamed} ChannelName="Times Music" views="45.3m" uploadtime="6 years ago"></VideoPreview>
                    <VideoPreview title="Bas Ek Baar | Soham Naik, Aamir Ali | Sanjeeda Sheikh | Anurag Saikia | Latest Hindi Romantic Songs" thumbnail1={hqdefault} channellogo={unnamed} ChannelName="Times Music" views="45.3m" uploadtime="6 years ago"></VideoPreview>
                    <VideoPreview title="Bas Ek Baar | Soham Naik, Aamir Ali | Sanjeeda Sheikh | Anurag Saikia | Latest Hindi Romantic Songs" thumbnail1={hqdefault} channellogo={unnamed} ChannelName="Times Music" views="45.3m" uploadtime="6 years ago"></VideoPreview>
                    <VideoPreview title="Bas Ek Baar | Soham Naik, Aamir Ali | Sanjeeda Sheikh | Anurag Saikia | Latest Hindi Romantic Songs" thumbnail1={hqdefault} channellogo={unnamed} ChannelName="Times Music" views="45.3m" uploadtime="6 years ago"></VideoPreview>
                    <VideoPreview title="Bas Ek Baar | Soham Naik, Aamir Ali | Sanjeeda Sheikh | Anurag Saikia | Latest Hindi Romantic Songs" thumbnail1={hqdefault} channellogo={unnamed} ChannelName="Times Music" views="45.3m" uploadtime="6 years ago"></VideoPreview>
                    <VideoPreview title="Bas Ek Baar | Soham Naik, Aamir Ali | Sanjeeda Sheikh | Anurag Saikia | Latest Hindi Romantic Songs" thumbnail1={hqdefault} channellogo={unnamed} ChannelName="Times Music" views="45.3m" uploadtime="6 years ago"></VideoPreview>
                    <VideoPreview title="Bas Ek Baar | Soham Naik, Aamir Ali | Sanjeeda Sheikh | Anurag Saikia | Latest Hindi Romantic Songs" thumbnail1={hqdefault} channellogo={unnamed} ChannelName="Times Music" views="45.3m" uploadtime="6 years ago"></VideoPreview>
                    <VideoPreview title="Bas Ek Baar | Soham Naik, Aamir Ali | Sanjeeda Sheikh | Anurag Saikia | Latest Hindi Romantic Songs" thumbnail1={hqdefault} channellogo={unnamed} ChannelName="Times Music" views="45.3m" uploadtime="6 years ago"></VideoPreview>
                    <VideoPreview title="Bas Ek Baar | Soham Naik, Aamir Ali | Sanjeeda Sheikh | Anurag Saikia | Latest Hindi Romantic Songs" thumbnail1={hqdefault} channellogo={unnamed} ChannelName="Times Music" views="45.3m" uploadtime="6 years ago"></VideoPreview>
                    <VideoPreview title="Bas Ek Baar | Soham Naik, Aamir Ali | Sanjeeda Sheikh | Anurag Saikia | Latest Hindi Romantic Songs" thumbnail1={hqdefault} channellogo={unnamed} ChannelName="Times Music" views="45.3m" uploadtime="6 years ago"></VideoPreview>
                    <VideoPreview title="Bas Ek Baar | Soham Naik, Aamir Ali | Sanjeeda Sheikh | Anurag Saikia | Latest Hindi Romantic Songs" thumbnail1={hqdefault} channellogo={unnamed} ChannelName="Times Music" views="45.3m" uploadtime="6 years ago"></VideoPreview>
                    <VideoPreview title="Bas Ek Baar | Soham Naik, Aamir Ali | Sanjeeda Sheikh | Anurag Saikia | Latest Hindi Romantic Songs" thumbnail1={hqdefault} channellogo={unnamed} ChannelName="Times Music" views="45.3m" uploadtime="6 years ago"></VideoPreview>
                    <VideoPreview title="Bas Ek Baar | Soham Naik, Aamir Ali | Sanjeeda Sheikh | Anurag Saikia | Latest Hindi Romantic Songs" thumbnail1={hqdefault} channellogo={unnamed} ChannelName="Times Music" views="45.3m" uploadtime="6 years ago"></VideoPreview>

                </div>
            </div>
        </div>
    )
}

export default HomeComponent