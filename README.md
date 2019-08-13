# cardbase.io/core-app

This app will be the prototype of **CARDBASE.IO platform** to enable much faster implementation of
**platform based ideas** w/ angular, firebase platform, material.io, PWA, puppeteer and applied best practices.

**The aim is** 
- faster time2market w/ UI/UX ready mobile web app.
- PWA instead of mobile app to decrease Marketing costs.
- Microservices architecture and loosely-coupled with legacy systems
- Automated tests to increase quality
- Easy upgrades
- Marketing analytics ready

For [release notes](https://github.com/tansudasli/cardbase.io/wiki)

##### License

This app. is licensed under GNU GPLv3. [Check for details](LICENSE)

## How to install

1. `git clone ...`

### About Firebase
1. Install firebase cli w/ `npm install -g firebase-tools`
2. Create a firebase project from UI not `firebase init`
3. Add an app to that firebase project and update **firebaseConfig** variable!
4. Install related packages w/ `cd core-app`, then run `npm install firebase @angular/fire` 
5. Add firebase products to your firebase project in UI. (Authentication)
6. `firebase init` for firebase prod deployment preparations (as hosting option selected)
7. `ng build --prod`
8. `firebase deploy`
9. Complete **OAuth consent** on gcp console ! project-id, logo and support mail address must be filled! mandatory for **signin w/ google**
10.


