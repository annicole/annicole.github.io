export async function getTestimonials(page=1,order,exercise,track){
    try {
        const trackApi = `${track === 'All' ? '' : `&track=${track}` }`
        const response = await fetch(`https://exercism.org/api/v2/hiring/testimonials?page=${page}&order=${order}&exercise=${exercise}${trackApi}`);
        if (!response.ok) {
          throw new NetWorkError();
        }
        const data = await response.json();
        return data.testimonials;
      } catch (e) {
        throw e;
      } 
}

export async function getTracks(){
  try {
      const response = await fetch(`https://exercism.org/api/v2/tracks`);
      if (!response.ok) {
        throw new NetWorkError();
      }
      const data = await response.json();
      return data.tracks;
    } catch (e) {
      throw e;
    } 
}

class NetWorkError extends Error {
    constructor() {
      super("Network error!");
    }
  }