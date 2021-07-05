Heroes stats let you save matches and a brief overall impression of the match, in order to improve your future drafts.

## Install

Setup postgres database and enter it in .env
```
npm install
npm run dev
```

## Database commands

Initial migration
```
npx prisma migrate dev --name init 
```

## Contribute

Architecture :
- [module structure](https://dev.to/vadorequest/a-2021-guide-about-structuring-your-next-js-project-in-a-flexible-and-efficient-way-472)

Naming conventions
- imported types in the namespace T.
- imported styles in the namespace S.

