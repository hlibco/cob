import Axios from 'axios';

export default class Request {
  options = {
    timeout: 3 * 60 * 1000,
  };
  authorization: null;

  axios = Axios.create({
    baseURL:
      process.env.NODE_ENV === 'production'
        ? 'http://collegebacker.xcoproject.com'
        : 'http://localhost:3019',
  });

  constructor(options?) {
    if (options && options.authorization) {
      this.authorization = options.authorization;
      this.axios.defaults.headers.common['Authorization'] =
        'Bearer ' + this.authorization;
    }
  }

  async get(url) {
    try {
      return this.axios.get(url, this.options);
    } catch (err) {
      return this.errorHandler(err);
    }
  }

  async post(url, data) {
    try {
      return await this.axios.post(url, data, this.options);
    } catch (err) {
      return this.errorHandler(err);
    }
  }

  async delete(url) {
    try {
      return this.axios.delete(url, this.options);
    } catch (err) {
      return this.errorHandler(err);
    }
  }

  errorHandler(error) {
    console.log('ERRROR HANDLER');
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      console.log(error.response.data);
      console.log(error.response.status);
      // console.log(error.response.headers);

      if (error.response.status === 400) {
        console.log('INPUT ERROR');
        // const messages = JSON.parse(error.response.data.message)
        // messages.forEach(item => {
        //   this.errors[item.path] = item.message
        // })
        // console.log(this.errors)
        // console.log(messages)
      }
    } else if (error.request) {
      // The request was made but no response was received
      // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
      // http.ClientRequest in node.js
      console.log(error.request);
    } else {
      // Something happened in setting up the request that triggered an Error
      console.log('Error', error.message);
    }

    throw error;
  }
}
