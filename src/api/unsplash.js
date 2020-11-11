import axios from "axios";


export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID AW7AsxtGBAXAPsOjv7okyKFS156L2RV29KDupea5Y9w",
  }
});
