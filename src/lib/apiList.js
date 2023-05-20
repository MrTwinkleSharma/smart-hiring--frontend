export const server = false ? "http://localhost:4444" : 'https://smart-hiring-backendnodejs.onrender.com';


const apiList = {
  login: `${server}/auth/login`,
  register: `${server}/auth/signup`,
  uploadResume: `${server}/upload/resume`,
  uploadProfileImage: `${server}/upload/profile`,
  jobs: `${server}/api/jobs`,
  applications: `${server}/api/applications`,
  rating: `${server}/api/rating`,
  user: `${server}/api/user`,
  applicants: `${server}/api/applicants`,
};

export default apiList;
