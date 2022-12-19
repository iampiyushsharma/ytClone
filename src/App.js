import React, {Component} from "react";
import SearchBar from "./components/searchBar";
import YTSearch from 'youtube-api-search';
import VideoList from "./components/videoList";
import VideoDetails from "./components/videoDetails";
import _ from 'lodash';
const API_KEY ='AIzaSyD13-fNnsCTz-23LL0x-R2QrysDvtSIaFI';

class App extends Component {
    constructor(props){
        super(props);

        this.state = { 
            videos:[],
            selectedVideo:null 
        };
        this.videosearch('Phir se ud chala');
        
    }
    videosearch(term){
        YTSearch({key:API_KEY, term:term},(videos)=>{
            this.setState({
            videos:videos,
            selectedVideo:videos[0]
        });
        })
    }
    render(){
        const videosearch = _.debounce((term)=>{this.videosearch(term)},300)

       return (
            <div>
              <SearchBar onSearchTermChange={videosearch}/>
              <VideoDetails video={this.state.selectedVideo}/>
              <VideoList
                onVideoSelect={selectedVideo=>this.setState({selectedVideo})} 
                videos={this.state.videos}/>
            </div>
        );       
    }  
}

export default App;