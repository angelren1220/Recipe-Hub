# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

puts "Seeding Data ..."

# Helper functions
def open_asset(file_name)
  File.open(Rails.root.join('db', 'seed_assets', file_name))
end

# Only run on development (local) instances not on production, etc.
unless Rails.env.development?
  puts "Development seeds only (for now)!"
  exit 0
end

# Let's do this ...

## USERS

puts "Creating Users ..."

User.destroy_all

user1 = User.create!({first_name: "Julia", last_name: "Child", email: "julia.child@example.com", password: "password123"})
user2 = User.create!({first_name: "Fergus", last_name: "Henderson", email: "fergus.henderson@example.com", password: "password123"})
user3 = User.create!({first_name: "Emeril", last_name: "Lagasse", email: "emeril.lagasse@example.com", password: "password123"})
user4 = User.create!({first_name: "Florence", last_name: "Pugh", email: "florence.pugh@example.com", password: "password123"})
user5 = User.create!({first_name: "Jamie", last_name: "Oliver", email: "jamie.oliver@example.com", password: "password123"})


## RECIPES

puts "Creating Users ..."

Recipe.destroy_all

recipe1 = Recipe.create!({
  user_id: user1.id,
  name: "Vegan Pad Thai",
  directions: ["Soak the noodles", "Cook the noodles", "Prepare the sauce", "Cook the vegetables", "Combine everything"],
  cooktime_minutes: 30,
  is_vegetarian: true,
  is_vegan: true,
  is_lowcarb: false,
  is_lactosefree: true,
  is_glutenfree: false,
  is_nutfree: false,
  image: open_asset('burger_placeholder.jpg')
})

recipe2 = Recipe.create!({
  user_id: user1.id,
  name: "Slow Cooker Chicken Curry",
  directions: ["Brown the chicken", "Cook the vegetables", "Add the curry powder and tomatoes", "Slow cook everything together"],
  cooktime_minutes: 240,
  is_vegetarian: false,
  is_vegan: false,
  is_lowcarb: false,
  is_lactosefree: true,
  is_glutenfree: true,
  is_nutfree: true,
  image: open_asset('burger_placeholder.jpg')
})

recipe3 = Recipe.create!({
  user_id: user2.id,
  name: "Quinoa Salad with Roasted Vegetables",
  directions: ["Cook the quinoa", "Roast the vegetables", "Mix everything together"],
  cooktime_minutes: 40,
  is_vegetarian: true,
  is_vegan: true,
  is_lowcarb: true,
  is_lactosefree: true,
  is_glutenfree: true,
  is_nutfree: true,
  image: open_asset('burger_placeholder.jpg')
})

recipe4 = Recipe.create!({
  user_id: user2.id,
  name: "Pesto Pasta with Cherry Tomatoes",
  directions: ["Cook the pasta", "Make the pesto", "Add the cherry tomatoes", "Mix everything together"],
  cooktime_minutes: 20,
  is_vegetarian: true,
  is_vegan: false,
  is_lowcarb: false,
  is_lactosefree: true,
  is_glutenfree: false,
  is_nutfree: false,
  image: open_asset('burger_placeholder.jpg')
})

recipe5 = Recipe.create!({
  user_id: user3.id,
  name: "Beef Stir Fry with Broccoli and Carrots",
  directions: ["Marinate the beef", "Cut the vegetables", "Stir fry everything together"],
  cooktime_minutes: 30,
  is_vegetarian: false,
  is_vegan: false,
  is_lowcarb: false,
  is_lactosefree: false,
  is_glutenfree: true,
  is_nutfree: true,
  image: open_asset('burger_placeholder.jpg')
})

## INGREDIENTS

puts "Creating Ingredients ..."

Ingredient.destroy_all

recipe1.ingredients.create!([
  { name: "Rice noodles", quantity: 250, units: "grams"},
  { name: "Tofu", quantity: 200, units: "grams" },
  { name: "Carrots", quantity: 2, units: "pieces" },
  { name: "Green onions", quantity: 3, units: "pieces" },
  { name: "Garlic", quantity: 3, units: "cloves" }
])

recipe2.ingredients.create!([
  { name: "chicken thighs", quantity: 6, units: "units" },
  { name: "onion", quantity: 1, units: "units" },
  { name: "garlic", quantity: 4, units: "cloves" },
  { name: "ginger", quantity: 1, units: "thumb-sized piece" },
  { name: "curry powder", quantity: 2, units: "tbsp" },
  { name: "canned diced tomatoes", quantity: 1, units: "can" },
  { name: "salt", quantity: 1, units: "tsp" },
  { name: "pepper", quantity: 1, units: "tsp" },
  { name: "coconut milk", quantity: 1, units: "can" }
])

recipe3.ingredients.create!([
  { name: "eggs", quantity: 4, units: "units" },
  { name: "unsalted butter", quantity: 1, units: "tbsp" },
  { name: "milk", quantity: 2, units: "tbsp" },
  { name: "salt", quantity: 1, units: "pinch" },
  { name: "black pepper", quantity: 1, units: "pinch" },
  { name: "shredded cheddar cheese", quantity: 1, units: "cup" }
  ])
  
  recipe4.ingredients.create!([
  { name: "penne pasta", quantity: 1, units: "lb" },
  { name: "butter", quantity: 4, units: "tbsp" },
  { name: "flour", quantity: 4, units: "tbsp" },
  { name: "milk", quantity: 2, units: "cups" },
  { name: "salt", quantity: 1, units: "tsp" },
  { name: "black pepper", quantity: 1, units: "tsp" },
  { name: "garlic powder", quantity: 1, units: "tsp" },
  { name: "dried basil", quantity: 1, units: "tsp" },
  { name: "shredded mozzarella cheese", quantity: 2, units: "cups" },
  { name: "grated parmesan cheese", quantity: 1, units: "cup" },
  { name: "marinara sauce", quantity: 2, units: "cups" }
  ])
  
  recipe5.ingredients.create!([
  { name: "boneless skinless chicken breasts", quantity: 4, units: "units" },
  { name: "lemon juice", quantity: 2, units: "tbsp" },
  { name: "minced garlic", quantity: 1, units: "tbsp" },
  { name: "dried oregano", quantity: 1, units: "tsp" },
  { name: "salt", quantity: 1, units: "tsp" },
  { name: "black pepper", quantity: 1, units: "tsp" },
  { name: "olive oil", quantity: 2, units: "tbsp" },
  { name: "baby spinach", quantity: 6, units: "cups" },
  { name: "feta cheese", quantity: 1, units: "cup" }
  ])

## BOOKS

puts "Creating Books ..."

Book.destroy_all

book1 = user1.books.create!({ name: "Julia's Favorite Recipes", user_id: user1.id })
book2 = user2.books.create!({ name: "Fergus's Favorite Recipes", user_id: user2.id })
book3 = user3.books.create!({ name: "Emeril's Favorite Recipes", user_id: user3.id })
book4 = user4.books.create!({ name: "Florence's Favorite Recipes", user_id: user4.id })
book5 = user5.books.create!({ name: "Jamie's Favorite Recipes", user_id: user5.id })

book6 = user1.books.create!({ name: "Dinner Party Ideas" })
book7 = user1.books.create!({ name: "Healthy Meals for One" })
book8 = user1.books.create!({ name: "Weeknight Favorites" })
book9 = user1.books.create!({ name: "Summer BBQ Recipes" })
book10 = user1.books.create!({ name: "International Cuisine" })

book11 = user2.books.create!({ name: "Meat Lover's Delight", user_id: user2.id })
book12 = user2.books.create!({ name: "Classic British Pub Grub", user_id: user2.id })
book13 = user2.books.create!({ name: "The Nose-to-Tail Cookbook", user_id: user2.id })
book14 = user2.books.create!({ name: "French Comfort Food", user_id: user2.id })
book15 = user2.books.create!({ name: "Seafood Sensations", user_id: user2.id })

## RECIPE_BOOK (entrys for a book)

puts "Creating Recipe Book Entries ..."

RecipeBook.destroy_all

RecipeBook.create!({ recipe_id: recipe2.id, book_id: book1.id })
RecipeBook.create!({ recipe_id: recipe4.id, book_id: book1.id })
RecipeBook.create!({ recipe_id: recipe3.id, book_id: book1.id })

RecipeBook.create!({ recipe_id: recipe5.id, book_id: book2.id })
RecipeBook.create!({ recipe_id: recipe2.id, book_id: book2.id })

RecipeBook.create!({ recipe_id: recipe3.id, book_id: book7.id })
RecipeBook.create!({ recipe_id: recipe4.id, book_id: book7.id })
RecipeBook.create!({ recipe_id: recipe1.id, book_id: book7.id })

## BOOKMARKED_BOOK

BookmarkedBook.destroy_all

BookmarkedBook.create!({user_id: 1, book_id: 7})
BookmarkedBook.create!({user_id: 1, book_id: 7})
BookmarkedBook.create!({user_id: 2, book_id: 2})
BookmarkedBook.create!({user_id: 3, book_id: 7})
BookmarkedBook.create!({user_id: 3, book_id: 2})

puts "DONE!"