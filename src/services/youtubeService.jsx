import axios from 'axios'
import youtubeCredentials from '../credentials/youtube'

export default class YoutubeService {
    baseUrl = 'https://www.googleapis.com/youtube/v3/search';

    getVideosByQuery = async (searchValue) => {
        const youtubeApiParams = {
            params: {
                part: 'snippet',
                maxResults: 20,
                key: youtubeCredentials.youtubeAPIKey,
                q: searchValue
            }
        };
        return axios.get(`${this.baseUrl}`,youtubeApiParams)
    }
}
