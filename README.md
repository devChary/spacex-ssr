This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/import?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.


## Work Details
This application uses next js to render the application server side initially and when other filers are applied it renders client side.

It is deployed on vercel with a CI/CD pipeline

window.pushState() is used to update the queryParams in the URL when filters are applied and by checking those queryParams we persist state when page is refreshed.

## Folder Structure
<!-- Folder structure explained -->
Pages is the top level folder which contains the pages we are using - In our case there is only one page index.js
Components folder contains all components which are used to build the app
1. index.js - The top level component which renders the page with filters and the Missons

2. filters.js - contains all different filters like Launch Year and Successful Landing and Successful launch which receive a fn from the the top level component to set values | update url | make API call
PS: The individual filters are inside filters folder

3. MissionList - It receives the missions from the parent and maps them.

4. MissionDetail - It contains the details of each mission card and is a stateless or dumb component.

## Style Guide
<!-- Styles -->
The styles are used in CSS Modules and each component has their styles own style module. 
When using CSS Modules - styles are imported by an alias name and are accessed as objects.

## Lighthouse Score
![Alt text](https://github.com/devChary/spacex-ssr/blob/master/public/lighthouse.PNG?raw=true "Lighthouse Score")
