import axios from "axios";

export default axios.create({
  // businessSearch api
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer QT3Z7e4r1Ll7fOxX49YGo4JNeBZnen8zJIRxOA5kq8N64RvPzMBxdI-9h9V_YA8ThXfqRZ2Cie_DUCvT-X2jTKYZnShPsdhJkDE3Ra6FnZ8GJAPUQZFNw-5ERWtCY3Yx",
  },
});
