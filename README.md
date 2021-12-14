# Code Overview
social media webpage built by the React , ReactDOM and Redux framework.
---
## User Stories
As a user registered on the website, i have the ability to show, add, change and delete posts, so that I may share and review posts.
Or , as an admin user, I want to show and delete a users and their posts and comments.
---
## Getting started

First clone this repository.
```bash
$ git clone https://github.com/MeeadAlotaibi/W09D05.git
```
Install dependencies. Make sure you already have [`nodejs`](https://nodejs.org/en/) & [`npm`](https://www.npmjs.com/) installed in your system.
```bash
$ npm install

Run it
```bash
$ npm start
```
---
## React Router Routes 


| Path              | Component            | Permissions                | Behavior                                                     |
| ----------------- | -------------------- | -------------------------- | ------------------------------------------------------------ |
| `/`               | Pages.               | anyone                     | Home page                                                    |
| `/Signup`         | Signup               | anyone                     | Signup form, link to posts if user or to dashboard if admin  |
| `/Signin`         | Signin               | anyone                     | Signin form, link to posts if user or to dashboard if admin  |
| `/Google`         | Google               | anyone have google account | Signin form, link to post                                    |
| `/forgotPassword` | ForgetPassword       | anyone                     | Forgot password form, user enter an email                    |
| `/resetPassword`  | ResetPassword        | user who received an email | Reset password form, user enter a new password               |
| `/activate`       | Activate             | user who received an email | Activate user account                                        |
| `/Dashboard`      | Dashboard            | admin only                 | Shows all users                                              |
| `/Posts`          | Posts                | user and admin             | Shows user's posts                                           |

---
## Reducers

| Reducers         | action                                                               | Default                               |
| ---------------- | -------------------------------------------------------------------- | ------------------------------------- |
| sign             | set role and token if type`"LOGIN"` and reset if type`"LOGOUT"`      | `{ role: "", token: "", userId: "}`   |
| auth.js          | set token if type`"RESET"` and reset if type`"ACTIVE"`               | `{  token: ""}`                       |


---

## Components
- Pages
- Signup
- Signin
- Google
- ForgetPassword
- ResetPassword
- activate
- Dashboard
- Posts

---

## UML diagram![Social Media  drawio](https://user-images.githubusercontent.com/92248111/146089479-c71a554b-ce7d-451c-ab73-93c51da653ae.png)




----
## Back end 

[Back-end repository](https://github.com/MeeadAlotaibi/W08D04)
