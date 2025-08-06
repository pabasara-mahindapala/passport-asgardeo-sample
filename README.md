# Node.js Asgardeo Sample

This is a sample [Express.js](https://expressjs.com) app that uses [Passport.js](http://passportjs.org) and [Asgardeo](https://wso2.com/asgardeo/) for authentication.

For more information, read the step-by-step [guide](https://wso2.com/asgardeo/docs/complete-guides/nodejs/introduction).

## Getting Started

1. Clone this repository:

2. Sign up for a free Asgardeo account [here](https://wso2.com/asgardeo).

3. Sign into Asgardeo console and navigate to **Applications > New Application**. Select Traditional Web Application

4. Select OpenID Connect (OIDC) as the protocol and complete the wizard popup by providing a suitable name and the authorized redirect URL `http://localhost:3000/oauth2/redirect` (**Note**: The authorized redirect URL determines where Asgardeo should send users after they successfully log in. Typically, this will be the web address where your application is hosted. For this guide, we'll use `http://localhost:3000/oauth2/redirect`, as the sample application will be accessible at this URL).

5. Once you create the application, you will be directed to the Quick Start tab of the created application which will guide you to integrate login to your application in several technologies (**Note**: Information available in the Quick Start tab of your app are required to configure Asgardeo in the Node.js app).

6. Navigate to **User Management > Users** and [create a new user](https://wso2.com/asgardeo/docs/guides/users/manage-users/#onboard-users).

6. Create the .env file in the root of the project and add the environment variables as shown below:

```
ASGARDEO_ORGANISATION=<asgardeo_organization_name>
ASGARDEO_CLIENT_ID=<client_id>
ASGARDEO_CLIENT_SECRET=<client_secret>

```

7. Install dependencies by running the following command in the root of the passport-asgardeo-sample project:

```
npm install
```

8. Run the dev server:

```
npm start
```

9. Open your browser and navigate to `http://localhost:3000`. You will be redirected to the login page. Log in with the user you created in step 6.

10. You will be redirected back to the Node.js app and see the index page with the user's information.

## Docs

- 📖 [Express.js docs](https://expressjs.com)
- 📖 [Passport.js docs](https://www.passportjs.org/docs)
- 📖 [Asgardeo docs](https://wso2.com/asgardeo/docs)