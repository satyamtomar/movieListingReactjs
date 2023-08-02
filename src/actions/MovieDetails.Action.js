import Agent from "./superAgent";
// import config from '../config/configg';
import { ServerError } from '../utils/helpers';
const BACKEND_URL = '';

  
  
// function getBorhanUserDetails( cb) {
//     Agent
//       .fire('get', `${BACKEND_URL}/website/getBorhanUserDetails`)
//       .end((err, res) => {
//         var error = err || res.error ? ServerError(res) : (res.body && res.body.error) ? ServerError(res) : null;
//         if (typeof cb === 'function') return cb(error, res && res.body);
//       });
//   }
  function getMovieDetails( imdbID,cb) {
    Agent
      .fire('get', `https://www.omdbapi.com/?i=${imdbID}&apikey=ebbc68a5`)
      .end((err, res) => {
        var error = err || res.error ? ServerError(res) : (res.body && res.body.error) ? ServerError(res) : null;
        if (typeof cb === 'function') return cb(error, res && res.body);
      });
  }
//   const editBorhanUserDetails=(payload,cb)=>{
//     Agent
//     .fire('put', `${BACKEND_URL}/website/editBorhanUserDetails`)
//     .send(payload)
//     .end((err, res) => {
//       var error = err || res.error ? ServerError(res) : (res.body && res.body.error) ? ServerError(res) : null;
//       if (typeof cb === 'function') return cb(error, res && res.body);
//     });
//   }
  
export default {
    getMovieDetails
  }