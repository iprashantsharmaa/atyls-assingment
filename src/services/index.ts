import { posts, users } from '../constants';
import { LoginValues, Post } from '../types';

export const authenticateUser = (data: LoginValues) => new Promise((res, rej) => {
  setTimeout(() => {
    const { userName, password } = data;
    sessionStorage.setItem('loggedInUser', userName);
    window.location.reload();
    res('success');
    // const sanitizedUserName = userName.toLowerCase().split(' ').join('');
    //
    // if (sanitizedUserName in users) {
    //   const correctPassword = users[sanitizedUserName];
    //   if (password === correctPassword) {
    //     res('success');
    //   } else {
    //     rej(new Error('Incorrect password, Please try again'));
    //   }
    // } else {
    //   rej(new Error('Incorrect username, Please try again'));
    // }
  }, 3000);
});

export const signUpUser = (data: LoginValues) => new Promise((res) => {
  setTimeout(() => {
    sessionStorage.setItem('loggedInUser', data.userName);
    window.location.reload();
    res('success');
  }, 3000);
});

export const getPosts = (): Promise<Post[]> => new Promise((res) => {
  setTimeout(() => {
    res(posts);
  }, 2000);
});
