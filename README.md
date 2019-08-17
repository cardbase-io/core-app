# core-app





## How to install

[For all information](https://github.com/cardbase-io/core-app/wiki) about cardbaseio.

1. Fork from [cardbaseio](https://github.com/cardbase-io/core-app) into your github organization
2. [Create your projects, issues, tags, dashboards etc..](https://github.com/cardbase-io/core-app/wiki/Preparations---on-github)
3. `git clone https://github.com/cardbase-io/core-app.git`. This will give you default: development branch on your local.
4. Create a `doCustomize` branch, to start customizations for you idea.

and do the steps below (how to customize).

## How to customize

Most of the files, as a rule of thumb,
    - under **/core-app** root requires minor changes. When merging, check file-by-file
    - src/ where your files and cardbaseio files lives together. to decrease merge possibility, injections used.


- core-app/    
    1. change `.firebaserc` file w/ your productName.
    2. add lines under core-app section in `README.md` file.
- core-app/src
    1. change favicon.ico w/ your icon
    2. for `404.html` and `index.html`, change mata tags, title. and productName manually
    3. in `manifest.webmanifest` file, change name/short_name w/ your productName
    4. in `styles.scss`, change $primary and $accent colors w/ your colors. 
- core-app/src/environments 
    1. (_This part is critical for firebase deployments. So it should be handled by ci/cd stack !_ )
    2. update `environment.ts` and `environment.prod.ts` w/ firebase account details.
    3. define new environment files regarding branch strategy such as (environment_demo.ts, environment_release.ts etc..) for firebase db side. and configure `angular.json`
- core-app/src/assets
    1. under `/icons`, put your logo's images
- core-app/src/app
    1. all **customization related data** is in `customization.service.ts`. And it is injected into components. So change everything inside this file, to customize.
    2. 
    

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

##### License

This app. is licensed under GNU GPLv3. [Check for details](LICENSE)


