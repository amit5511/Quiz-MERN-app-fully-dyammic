const axios = require('axios');

const API = axios.create({
 // baseURL: 'https://qriosity-server.herokuapp.com/api/',
   baseURL: 'http://localhost:5000/api',
});

API.interceptors.request.use((req) => {
  if (localStorage.getItem('userToken')) {
    req.headers.authorization = `user-token ${localStorage.getItem(
      'userToken'
    )}`;
  }
  return req;
});

// Auth
const register = (formData) => API.post('/auth/register', formData);
const login = (formData) => API.post('/auth/login', formData);
const getUser = () => API.get('/auth/user');
const logout = () =>{
  localStorage.clear();
 
};

// Quiz
const createQuiz = (formData) => API.post('/quiz/create', formData);
const getQuizInfo = (quizId) => API.get(`/quiz/${quizId}`);
const saveResponse = (response) =>
  API.post(`/response/save-response`, response);
const getResponse = (quizId) => API.get(`/response/get-response/${quizId}`);
const getAllQuizzes = () => API.get('/quiz/active-quizzes');
const getCreatedQuizzes = () => API.get('/quiz/created-quizzes');
const getAttemptedQuizzes = () => API.get('/quiz/attempted-quizzes');

// Questions
const getQuestions = (quizId) => API.get(`/question/${quizId}`);

module.exports = {
  register,
  login,
  getUser,
  logout,
  createQuiz,
  getAllQuizzes,
  getCreatedQuizzes,
  getAttemptedQuizzes,
  getQuizInfo,
  getQuestions,
  saveResponse,
  getResponse,
};
