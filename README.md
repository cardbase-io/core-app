# core-app

Pure **Angular Material PWA Boilerplate for Firebase** w/ 
- [x] angular application w/ scss, routing, 
- [x] basic animations
- [x] basic PWA capabilities
- [x] firestore
- [x] firebase auth.
- [x] firebase hosting deployment
- [ ] gesturing
- [x] microservices arch. and loosely-coupled from your legacy systems
- [ ] Marketing analytics
- [ ] 
- [x] And, Optimizations from [Html5 Boilerplate](https://github.com/tansudasli/html5-material-pwa-boilerplate) 

#### The Problem

In any idea, it is **%90 likelihood** to be **a platform idea** where buyers and sellers gathers in a platform. 
And, whether a small idea or a big one, 
 - some parts are mutual and takes a lot of time which is called **scaffolding**. 
 - on the other hand, 
     - raising of frameworks like angular, flutter or react will boost your product development time spent 
     - raising of sketch decrease prototyping but not as expected. If you add Google's **material design system** to sketch, then you get boosted more (**a working prototype**). 
     But there are still issues w/ google sketch plugin and angular material design components or flutter design components :) 

So in every idea-2-product journey, after selecting best strategies above, you gonna spend
- %80 for scaffolding
    - most of the time spends on architectural decisions to decrease long-term costs, learning-curve etc..
- %10 for working-prototype w/ the help of sketch + Google's material design system
- %20 for core app development w/ the help of cloud, frameworks etc.

So with cardbase.io, we can attack %80 of scaffolding and %20 of core app development

- [x] Faster time2market w/ UI/UX ready **mobile web app**
- [x] Easy to implement
- [x] Higher automation
- [x] Easy to upgrade
- [x] Easy to customize
- [ ] Measurability w/ marktech capabilities
- [x] Best practises applied

And I am not talking about to product development for the sake of development. It is about marketing-driven to produce value while you maintaining fail fast !

#### The Application Architecture

Generally every platform idea will have and have to separated (**microservice apps**) to decrease long-term costs ! 
So all has to be assigned their (www/blog/core-app).domainName.
 
- **www**: for static parts like. This part has standard [building blocks](https://github.com/tansudasli/html5-material-pwa-boilerplate/wiki/Building-Blocks-of-Static-Web-Pages)
    - landing pages
    - forms for lead management 
        - in-house: not a good choice :)
        - using mailing platforms and their forms, so you can easily save as marketing list
        - using crm platforms and their forms, so you can easily save as prospect, and integrate your marktech stack.
    - prototypes w/ sketch
- blog: to attract prospects, positioning for the topic or seo
    - blog for content
    - blog for engineering etc.
- **core-app**: Mutual part of all platform ideas. This part has own data model. So it is easy to apply w/ greenfield products or existing _legacy systems_.
    - auth. w/ login
    - master page to show main records
    - detail page to show detail records
    - ui/ux w/ animations
    - data model
    - testing w/ different devices
    - ci/cd stack
    - marketing analytics stack
    - infrastructure arch. w/ scalability 
    - heavy cli usages to eliminate error prunes- 
    - prototypes w/ sketch
- merchant-app: a kind of _database driven app._ to handle CRUD ops. for your master data. So it is kind of commodity. 
This data has to be transformed to core-app data model.
- extended-apps: specific to your idea or complementary, and those apps should be integrated w/ core-app whether ui level and/or db level.
    - as complementary
        - payment-app
        - billing-app
    - as specific to your idea (such as voice streaming etc.). At the beginning this part is critical than other extended-apps

#### The High Level Architecture

- Branches
    - feature branches, (no need any firebase project config., but consider case by case)
    - development, 
    - release, 
    - demo, 
    - production
- Firebase: All core-app and extended-apps will be in same project w/ hosting + default db. 
And all extended-apps which requires a db (and separated db), will be created a different firebase project. 
More over, this will affect all Google analytics and GCP namings and architectures also ! So namings are critical.
    - development w/ hosting + firestore + auth.
        - added apps (core-app, www, merchant-app etc..) w/ hosting
            - merchant-app will handle separate db in code. not the default db where hosted!
        - on GCP, development project under 1 organization w/ billing account. 
        - on GA, development property under 1 account w/ all web site data. So all hosting data will flow thorough GA development part. If you need separate views, you can create regarding url.
    - release w/ hosting + firestore
        - same as development
    - demo w/ hosting + firestore
        - same as development
    - production w/ hosting + firestore
        - same as development
    - additional db requirements such as:
        - merchant-db-development w/ firestore
        - merchant-db-release w/ firestore
        - merchant-db-demo w/ firestore
        - merchant-db-production w/ firestore

## How to start - for your own project

After fork from [cardbaseio](https://github.com/cardbase-io/core-app) into your own github organization, while you logged in w/ your github account.


1. [Prepare github side](https://github.com/cardbase-io/core-app/wiki/Preparations---on-github) such as Create your projects, issues, tags, dashboards etc..
General steps, after fork from cardbase-io, is below. This is prepared just to give an idea. That does not mean you have to do all steps!

- domain
    - buy domain
    - buy g-suite & verify domain
    - downgrade to g-suite basic
    - verify domain on github
- define organization under **your github account**
- after **forking**
    - be sure, change default branch to `development` in github settings. so all pull request merges com into here.
    - check remote repository url config for origin, but you may add upstream url also !
    - create projects (www, core-app, prototype, datamodel etc)
    - enable issues in rep. settings
    - create account level project dashboard to see all issues
    - create new tags 
        - project-name w/ #ecfd12 such as www, core-app etc..
        - logical w/ #ffadb2 such as ux, marktech, seo
- establish branch strategy.
    - master (mandatory)
    - hotfix
    - demo
    - release (mandatory)
    - development (mandatory)
        - [ ] N features
2. `git clone ` your forked repository. This will give you default: development branch on your local.
3. Do preparations for infrastructure.
   - create a gcp account + define billing account on gcp console w/ your new domain
       - enable billing account! This will also upgrade firebase projects from spark to blaze.
       - delete default project or you gonna need to increase max. project count per billing account.
   - create a firebase account
   - create projects on firebase w/ ga activated. Read **The High Level Architecture** above. Create those firebase projects. (firebase cli is not capable to handle that automation yet. So it is manual)
   This part is critical. All hosting in a firebase project, will flow through ga account->property=firebase-project->view as all web site data 
       - add applications (core-app, www, merchant-app etc. those will use same user auth.) to related firebase project.
          - Define domain strategy. (It is better give meaningful short domain names to static (www) part. Then user can jump to related parts of application. 
             - add domain A records to domain provider and configure on firebase hosting such as (development.domainName, release., demo., www. )
       - open ga console. (firebase created automatically)
          - update settings + create dpa administration info. define primary contact.
          - update property names 
          - adding ga w/ tag manager later!
       - on firebase console, update project settings 
          - support mail, public facing name (as domainName)            
       - add signin method (esp. google signin). This will create contest on gcp side!
           - on firebase auth. ui, add additional **authorized domains** to whitelist other domains. Cause from www to core-app, 
           there may be many domains.
           - for google auth. define contest info. later to get such as phone numbers, you need extra verification below screens
               - logo (only via gcp console). search `consent` on gcp console. it is under api&services/credentials then click `oauth consent screen` link !
               - support mail (via firebase console & gcp console)
               - domains (via firebase console & gcp console)
               - privacy and policy links (only via gcp console
               - scope (only via gcp console for extra scopes. via firebase console for default scopes such as email, name, photo etc.)
   - Prepare CLIs for gcp and firebase. check below **About CLIs**
   - Initialize default db: create firestore db on **firebase console** or **gcp console**. Then import data model w/ samples. 
   This sampleData contains basic initial data model of cardbaseio. It is good to use as initial dummy firestore db w/ data model! 
   To do that you need to fork from `cardbaseio/datamodel`. For [more detail](https://github.com/cardbase-io/datamodel).
      
4. Create a `doCustomize` branch, and start customizations below for your idea.

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
    2. update `environment.ts` , `environment.release.ts` and `environment.prod.ts` w/ related firebase account details.
    3. define new environment files regarding branch strategy such as (environment_demo.ts, environment_release.ts etc..) for firebase db side. and configure `angular.json`
- core-app/src/assets
    1. under `/icons`, put your logo's images
- core-app/src/app
    1. all **customization related data** is in `customization.service.ts`. And it is injected into components. So change everything inside this file, to customize.
    2. 

## How to Run

- for development only and serve from local run `npm run start`
- for production, use `./deploy-to-` scripts which will create `dist/` folder and deploys to related firebase project

later ci/cd stack will handle those scripts!

## About Fork strategy

Once you forked, do your customizations and _always get changes_ from [upstream](https://github.com/cardbase-io/core-app) periodically.

### About CLIs 

1. Install firebase cli w/ `npm install -g firebase-tools` then `firebase init` to auth. firebase user.
2. Install gcloud on your local or use gshell on gcp, then initialize.
3. `gcloud auth login` to authorize your accounts for gcp cloud. (i.e.  to use firebase export ops. on your local)

##### License

This app. is licensed under GNU GPLv3. [Check for details](LICENSE)


