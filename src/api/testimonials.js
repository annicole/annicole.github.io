export async function getTestimonials(page=1,order,exercise){
    try {
        const response = await fetch(`https://exercism.org/api/v2/hiring/testimonials?page=${page}&order=${order}&exercise=${exercise}`);
        if (!response.ok) {
          throw new NetWorkError();
        }
        const data = await response.json();
        return data.testimonials;
      } catch (e) {
        throw e;
      } 
}

class NetWorkError extends Error {
    constructor() {
      super("Network error!");
    }
  }