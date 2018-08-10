import axios from 'axios';
import qs from 'qs';
import reverseGeocode from 'latlng-to-zip';

import { FETCH_JOBS, LIKE_JOB, DISLIKE_JOB, CLEAR_LIKE_JOBS } from './types';

const JOB_ROOT_URL = 'http://api.indeed.com/ads/apisearch?';
const JOB_QUERY_PARAMS = {
    publisher: '4201738803816157',
    format: 'json',
    v: '2',
    latlong: 1,
    radius: 10,
    q: 'javascript'
};

const buildJobsUrl = zip => {
    const query = qs.stringify({ ...JOB_QUERY_PARAMS, l: zip });
    return `${JOB_ROOT_URL}${query}`;
};

export const clearLikedJobs = () => {
    console.log('clearLikedJobs()');
    return { type: CLEAR_LIKE_JOBS };
};

export const likeJob = job => {
    return {
        payload: job,
        type: LIKE_JOB
    };
};

export const dislikeJob = job => {
    return {
        payload: job,
        type: DISLIKE_JOB
    };
};

export const fetchJobs = (callback, region) => async dispatch => {
    const FAKE_DATA = fakeData(region);

    try {
        let zip = await reverseGeocode(region);
        const url = buildJobsUrl(zip);
        let { data } = await axios.get(url);
        console.log(data);
        if (data.error) {
            dispatch({ type: FETCH_JOBS, payload: FAKE_DATA });
        } else {
            dispatch({ type: FETCH_JOBS, payload: data });
        }
    } catch (e) {
        // console.error(e);
        console.log(e);
        dispatch({ type: FETCH_JOBS, payload: FAKE_DATA });
    }

    callback();
};

const fakeData = region => {
    return {
        results: [
            {
                jobtitle: 'Software Engineer',
                company: 'Google',
                formattedRelativeTime: '12 days ago',
                snippet:
                    'Full time engineer needed to work on expanding and maintaining Google Search. Five years experience is helpful, but not a must. Ability to collaborate with a large team in a highly competitive environment is required.',
                latitude: region.latitude,
                longitude: region.longitude,
                url:
                    'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-04.jpg',
                id: 1,
                jobkey: '1'
            },
            {
                jobtitle: 'Junior React Developer',
                company: 'Nerdo Coffee',
                formattedRelativeTime: '24 hours ago',
                snippet:
                    'New coffee delivery service is in need of a mobile app and website. We roast the organic, fair trade Argentine beans in our van as we drive around brewing lattes. You will be coding in the same van.',
                latitude: region.latitude,
                longitude: region.longitude,
                url:
                    'http://www.fluxdigital.co/wp-content/uploads/2015/04/Unsplash.jpg',
                id: 2,
                jobkey: '2'
            },
            {
                jobtitle: 'Angular Master',
                company: 'Fishing Fanatics',
                formattedRelativeTime: '22 days ago',
                snippet:
                    'Large fishing retail chain is looks for a master at Angular. Applicant needs to understand the ridiculous module system and templating annoyance. We have a quick hook if you cannot hang. ng not good.',
                latitude: region.latitude,
                longitude: region.longitude,
                url:
                    'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-09.jpg',
                id: 3,
                jobkey: '3'
            },
            {
                jobtitle: 'NodeJS Developer',
                company: 'Pipe Dreams',
                formattedRelativeTime: '420 seconds ago',
                snippet:
                    'Recreational and medical marijuana dispensary is upgrading all backend servers to meet rapidly growing demands. We require someone with 3-5 years experience working with NodeJS. Cloud computing knowledge a plus.',
                latitude: region.latitude,
                longitude: region.longitude,
                url:
                    'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-01.jpg',
                id: 4,
                jobkey: '4'
            },
            {
                jobtitle: 'Remote Javascript',
                company: 'Snippets',
                formattedRelativeTime: '7 days ago',
                snippet:
                    'Website development company looking for part time remote javascript developer. We need someone to add functionality and a dymanic feel to our websites, since we are more of a design centered team. Newbs need not apply',
                latitude: region.latitude,
                longitude: region.longitude,
                id: 5,
                url:
                    'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-04.jpg',
                jobkey: '5'
            }
        ]
    };
};
