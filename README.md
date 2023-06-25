# ChatKinsey
## Description
This app is a chat bot aimed at candidates for strategy consulting firms.  
It is currently deployed at this address: [chatkinsey.vercel.app](https://chatkinsey.vercel.app).

## Stack
* Next.js
* TypeScript
* OpenAI API
* P5.js (for animation)

## Key features
### 🔐 Security
The OpenAI API key used in this project is protected by the new `Edge rundtime` feature of Next.js, allowing to write backend code directly in a Next.js project, and deploy it easily on the edge.  

### ⚡️ Responsiveness
The text responses coming from the OpenAI API are streamed in real time to reduce delay. This technique was particularly challenging to implement as it is not well documented.

### 🎨 Aesthetic
The background animation reacts to the user input, it uses trigonometry and replicate an element of the firm's visual language.


## Screenshot
![image](../assets/chatkinsey.png)

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
