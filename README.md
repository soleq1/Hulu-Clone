
## Hulu Clone
A Frontend focused copy of popular streaming service Hulu. Used as a template to get better at Frontend development.Uses different API's and employs many different API routes.


## To Start 
First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```
Then you will need to visit https://www.themoviedb.org/settings/api?language=en-US to register a API key.

And then visit https://newsapi.org/ to register the news key.

Then Bundle them Both naming them API_KEY, NEWS_KEY respectively in a .env which will start it up.
## Demo Video


https://github.com/soleq1/Hulu-Clone/assets/103675652/2bcf1e99-0737-4ee2-9d0f-c0438e273b68




## Screenshots

![image](https://github.com/soleq1/Hulu-Clone/assets/103675652/4d07673b-6fa9-4e89-babf-22b24c41eda6)


## Tech Stack

**Client:** Next.js,CSS(some TailWindCSS)

**Server:** Next.js


## Usage for prop/extending page
The prop through this can be any page the api can support. Which can be used to put more components in each route and extend each page.
```javascript
 <MoviePages ApiValue={0}></MoviePages>
```

