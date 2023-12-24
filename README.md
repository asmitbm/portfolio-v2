<div align="center">
  <img alt="Logo" src="https://raw.githubusercontent.com/asmitbm/portfolio-v2/main/public/am.svg" width="100" />
</div>
<h1 align="center">
  <a target="_blank" href="https://asmitbm.me">asmitbm.me</a>
</h1>

<p align="center">
  The second iteration of <a href="https://asmitbm.me" target="_blank">asmitbm.me</a> built with <a href="https://nextjs.org/" target="_blank">Next.js</a> and hosted with <a href="https://vercel.com" target="_blank">Vercel</a>.
</p>

<p align="center">
  Previous iteration(s):
  <a href="https://github.com/asmitbm/asmitbm.github.io" target="_blank">v1</a>
</p>

![portfolio website](./public/readme_cover.png)

## Using This Website as Template

If you'd like to use this website design for your own portfolio, you're more than welcome to do so. Just remember to provide proper attribution by including a link back to [asmitbm.me](https://asmitbm.me) :)

## Installation & Set Up

### Online Set Up

Contributing is as easy as starting a new workspace:

[![Open in Gitpod](https://www.gitpod.io/svg/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/asmitbm/portfolio-v2)

### Local Set Up

1. Requires [Node](https://nodejs.org/en/download) version 16.x and above.

2. Fork and Clone this repo.

    ```sh
    git clone https://github.com/<YOUR_USERNAME>/portfolio-v2.git
    ```

3. Open the cloned folder in your IDE.

    ```sh
    cd portfolio-v2
    ```

4. Install dependencies

    ```sh
    npm install
    ```

5. This portfolio uses the [Resend](https://resend.com/docs/introduction) service to send and receive emails on the [Contact](https://www.asmitbm.me/contact) page. Make sure to read the instructions and obtain your own [API Key](https://resend.com/docs/send-with-nodejs) to run the project successfully.

6. Make a new file called `.env.local`. Copy and paste your API Key as follows:

    ```sh
    RESEND_API_KEY=xxxxxxxxxxxxxxxxxxxxxxxxxx
    ```

7. Start the development server

    ```sh
    npm run dev
    ```

## Building and Running for Production

1. Generate a full static production build

    ```sh
    npm run build
    ```

Feel free to raise issues if you find any bugs in the site. You can also create pull requests to add new features.
