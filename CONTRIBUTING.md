<h1 align = "center">Contributing</h1><hr>

<div align = "center">

Welcome to [OpInCo-Community/OpInCo-Page](https://github.com/OpInCo-Community/OpInCo-Page)!
Before sending your pull requests, make sure that you __read the guidelines carefully__.
If you have any doubt on the contributing guide, please feel free state it clearly and discuss with the
[community](https://discord.gg/uG3KwXkgfG).

</div>

## How to Contribute - Installation Guide

Before getting started let's install the project on your system!!

### 1. 🔨 Setup & Run

Visit our GitHub repository and click on the **Fork** option in the top right corner of your GitHub account.
This creates a copy of the repository.


### 2. Clone the repository
**git clone** command creates a copy/clone of the repository in you local system.

--> You can clone this repo by using the below command and navigate to the directory.

```bash
git clone https://github.com/<YOUR_USERNAME>/OpInCo-Page.git
cd OpInCo-Page
```

### 3. Setup Remote

```bash
git remote add upstream https://github.com/OpInCo-Page/OpInCo-Page.git
```

### 4. Sync your fork or your local repository with the origin repository


  ```bash
  git checkout main
  git fetch upstream
  git merge upstream/main
  ```

### 5. Set-up the requisite Tech Stack.

**Intro** : This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

To Get Started. First, run the development server:
```bash
npm run dev
    OR
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.
The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

#### <u>Learn More</u>

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

#### <u>Deploy on Vercel</u>

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.
Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.


### 6. Create a PR
After you are done making all the requisite changes. Push your changes to the repository and create a good PR.
To do so go through the [Contributing Guidelines](#contributing-guidelines)


## Contributing Guidelines
It is requested of you that - 
    
1. Start working on the pull request if and only if you are assigned the complimentary issue.
2. Create good and valuable PR. Go through the [Code of Conduct]() and follow the [PR template]() to avoid
 spam PR's.


## PR Review
Your PR will get reviewed soon. If the maintainers suggest changes, do all the changes, commit the changes, rebase the branch, squash the commits and push the changes. If everything looks good, your PR will be merged.
That's it! Thank you for your contribution! 
## All the best! 🥇
