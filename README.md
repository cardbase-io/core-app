# core-app





## How to install

[For all information](https://github.com/cardbase-io/core-app/wiki) about cardbaseio.

1. Fork from [cardbaseio](https://github.com/cardbase-io/core-app) into your github organization. Login w/ your github account and then fork.
2. [Prepare github side](https://github.com/cardbase-io/core-app/wiki/Preparations---on-github) such as Create your projects, issues, tags, dashboards etc..
3. `git clone https://github.com/cardbase-io/core-app.git`. This will give you default: development branch on your local.
4. Do preparations for infrastructure.
   - create a gcp account + define billing account on gcp console w/ your new domain
       - enable billing account! This will also upgrade firebase projects from spark to blaze.
       - delete default project or you gonna need to increase max. peoject count per billing account.
   - create a firebase account
   - create projects on firebase w/ ga activated. use appName-branchName (core-app-development, core-app-production etc ..) for naming. 
   This part is critical. All hosting in a firebase project, will flow  through ga-property-all web site data.  
       - add applications (core-app, www etc. those will use same user auth.) to related firebase project.
          - Define domain strategy. ( It is better give meaningful shot domain names to static (www) part. Then user can jump to related parts of application. 
             - add domain A records to domain provider and configure on firebase hosting such as (development.domainName, release., demo., www. )
       - open ga console. (firebase created automatically)
          - update settings + create dpa administration info. define primary contact.
          - update property names 
          - adding ga w/ tag manager later!
       - on firebase console, update project settings 
          - support mail, public facing name (as domainName)            
       - add signin method (esp. google signin). This will create contest on gcp side!     
   - for google auth. define contest info. later to get such as phone numbers, you need extra verification below screens
       - logo (only via gcp console). search `consent` on gcp console. it is under api&services/credentials then click `oauth consent screen` link !
       - support mail (via firebase console & gcp console)
       - domains (via firebase console & gcp console)
       - privacy and policy links (only via gcp console
       - scope (only via gcp console for extra scopes. via firebase console for default scopes such as email, name, photo etc.)
   - Prepare cli
       - `gcloud auth login` to authorize your accounts for gcp cloud. (i.e.  to use firebase export ops. on your local)
       - create firestore db on **firebase console** or **gcp console**. Then import sample data etc.. for [Detailed steps](https://github.com/cardbase-io/datamodel/blob/master/README.md)
5. Create a `doCustomize` branch, to start customizations for you idea.

and do the steps below to customize.

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
    2. update `environment.ts` , ``environment.release.ts`` and `environment.prod.ts` w/ related firebase account details.
    3. define new environment files regarding branch strategy such as (environment_demo.ts, environment_release.ts etc..) for firebase db side. and configure `angular.json`
- core-app/src/assets
    1. under `/icons`, put your logo's images
- core-app/src/app
    1. all **customization related data** is in `customization.service.ts`. And it is injected into components. So change everything inside this file, to customize.
    2. 
    
## How to deploy

easy.

for production, under core-app, run `./deploy-to-production.sh `. or other related scripts.
this scripts, runs proper build command to change related environment.ts . then deploys to related project on firebase.

### About CLIs You Gonna Need
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


