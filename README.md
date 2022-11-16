## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

or visit the live demo at https://bb-dipietro.vercel.app/

## Developed Pages

- HOME: on this page you can find all the randomly rendered products and includes a filter by categories.

If you click on the product title, you will access the ProductDetail component that contains all the product information. The product reviews are detailed here.

-SEARCHBAR: This component has a basic behavior at the time of the interview. To go to the detail of the searched product, click on it and it will take you to the product detail.
In future updates, you will be able to see all the products that contain the searched word in their name.

NAVBAR: in the main navigation bar are displayed rendered the favorites heart (filled if selected), the shopping cart (shows the number of products added) and the search magnifying glass (linked to the search bar).
All of them have a standard behavior that can be optimized.

REVIEWS: a component has been generated that shows the star rating of the product. Its representation is dynamic and can have more than 1 review with a correct visualization. We suggest searching for the product "Blue blouse" in the "for girls" section to see the potential.

BESTSELLER: this component has a dynamic rendering with static products, as there were no more images of the same dimensions and I did not want to add fake photos.

## TECHNOLOGY USED:

The framework used was NEXT.JS and I used the css module provided/suggested by Next.Js.
In the back end I used a file that emulates in a synchronous way the query to a database. The development was done without losing the focus of the Fronted development.

I hope that the experience of use is as expected and I will be grateful for your feedback to feed back my improvement points

Thank you very much for your time!
Best regards.
