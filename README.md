# SOUS: Recipe Sharing and Management Web Application

## Introduction
SOUS is an innovative web application designed to cater to cooking enthusiasts who are passionate about sharing, discovering, and managing recipes. Built with a stack consisting of Rails on Ruby for the back end, Vite-React for the front end, and PostgreSQL for the database, SOUS provides users with a comprehensive platform to engage with the culinary community.

## Key Features:

1. Create and Share Recipes: Users can create and share their own recipes within the app. They can add detailed descriptions, cooking directions, ingredient lists, and captivating images to showcase their culinary creations. Sharing recipes allows users to inspire and connect with fellow food lovers within the SOUS community.

2. Browse and Bookmark: Users have the ability to browse through a diverse collection of recipes created by other users. They can explore various cuisines, cooking styles, and dietary preferences to discover new and exciting dishes. Users can also bookmark recipes they find interesting or would like to try later, creating their own curated collection.

3. Personal Recipe Book: Users can save their favorite recipes to their personal recipe book for quick and easy access. This feature allows users to create a personalized collection of go-to recipes that align with their tastes and preferences. They can easily reference and revisit these recipes whenever they desire.

4. Grocery List Generation: SOUS offers a convenient feature for generating customized grocery lists based on selected recipes. Users can add ingredients to their grocery list and easily manage and modify it according to their needs. This feature simplifies the process of gathering ingredients, ensuring a seamless and efficient shopping experience.

5. Recipe and Book Sharing: Users can share recipes, recipe books, and grocery lists with other SOUS users via the app's messaging system. This feature promotes collaboration and fosters a sense of community among users. By sharing their favorite recipes and culinary discoveries, users can inspire and support each other on their culinary journeys.

SOUS is an evolving project with exciting future prospects. While the search and filtering functionalities are still in progress, users can currently browse and bookmark recipes created by others. Additionally, the app's messaging system enables users to share recipes, recipe books, and grocery lists exclusively within the SOUS community. As the app continues to grow, there is potential for collaboration with e-commerce platforms to enhance the grocery list feature.

With its user-friendly interface, robust technology stack, and focus on recipe sharing and management, SOUS empowers users to explore their culinary passions, connect with like-minded individuals, and create a vibrant community centered around the love of cooking.

## Demo

- Recipe and Edit
![](https://github.com/angelren1220/Recipe-Hub/blob/main/docs/edit-recipe.png)
- Browse Recipes
![](https://github.com/angelren1220/Recipe-Hub/blob/main/docs/edit-recipe.png)
- Recipe Card
![](https://github.com/angelren1220/Recipe-Hub/blob/main/docs/open-recipe-card.png)
- Books
![](https://github.com/angelren1220/Recipe-Hub/blob/main/docs/book.png)
- Grocery List
![](https://github.com/angelren1220/Recipe-Hub/blob/main/docs/grocerylist.png)
- Message Inbox
![](https://github.com/angelren1220/Recipe-Hub/blob/main/docs/message.png)

## Stacks

backend
- Ruby: 3.1.1
- Ruby on Rails: 6.1.5
- PostgreSQL: 1.1
- Puma: 5.0
- Bcrypt: 3.1.7 
- Rack CORS

frontend
- React: 18.2.0
- React Router DOM: 6.11.1 
- Axios: 1.4.0 
- Node-sass: 8.0.0
- React DOM: 18.2.0

## Setup

backend
1. to install dependencies:
```bundle install```
2. to create database:
```rails db:create```
  to migrate database:
```rails db:migrate```
  to reset database:
```rails db:reset```
3. to start backend server:
```rails s -p 3001 -b 0.0.0.0```
The server is run http://localhost:3001/

frontend
1. to install dependencies:
```npm install```
2. to start the front server:
```npm run dev```
The server is run http://localhost:3000/
3. seed users password: ```password```


