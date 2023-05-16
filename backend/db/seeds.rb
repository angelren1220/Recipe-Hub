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

book6 = user1.books.create!({ name: "Dinner Party Ideas", user_id: user1.id, description: "A comprehensive guide with creative and delicious recipes, tips, and inspiration to help you host unforgettable dinner parties. From appetizers to desserts, this book offers a variety of dishes suited for different occasions and tastes. Elevate your hosting skills and impress your guests with this collection of curated recipes and entertaining ideas." })
book7 = user1.books.create!({ name: "Healthy Meals for One", user_id: user1.id, description: "As someone who loves cooking for myself, I've curated a collection of delicious and healthy recipes tailored for solo dining. Fuel your body with easy-to-make meals that are packed with flavor and goodness." })
book8 = user1.books.create!({ name: "Weeknight Favorites", user_id: user1.id, description: "Hey there! I've put together a collection of my absolute favorite recipes for those hectic weeknights. Get ready for tasty meals that are quick, easy, and guaranteed to satisfy!" })
book9 = user1.books.create!({ name: "Summer BBQ Recipes", user_id: user1.id, description: "Fire up the grill and dive into a sizzling collection of mouthwatering recipes for the ultimate summer BBQ experience." })
book10 = user1.books.create!({ name: "International Cuisine", user_id: user1.id, description: "Indulge in the rich tapestry of global flavors as we embark on a gastronomic adventure, celebrating the vibrant dishes and culinary traditions from around the world." })

book11 = user2.books.create!({ name: "Meat Lover's Delight", user_id: user2.id, description: "Indulge in the ultimate meat lover's experience with this mouthwatering cookbook. Packed with tantalizing recipes showcasing various cuts of meat, from succulent steaks to savory roasts, this book will satisfy your carnivorous cravings. Discover grilling techniques, marinades, and flavor combinations that will take your meat dishes to the next level. Whether you're a steak connoisseur or a barbecue enthusiast, this book is a must-have for meat enthusiasts seeking bold and flavorful creations." })
book12 = user2.books.create!({ name: "Classic British Pub Grub", user_id: user2.id, description: "Discover the timeless flavors of traditional British pub cuisine with this delightful cookbook filled with hearty and comforting recipes." })
book13 = user2.books.create!({ name: "The Nose-to-Tail Cookbook", user_id: user2.id, description: "Celebrate the beauty of offal and lesser-known cuts, crafting exquisite dishes that pay homage to nose-to-tail cooking traditions." })
book14 = user2.books.create!({ name: "French Comfort Food", user_id: user2.id, description: "Currently working on a collection of delightful and comforting French recipes." })
book15 = user2.books.create!({ name: "Seafood Sensations", user_id: user2.id, description: "Dive into a world of mouthwatering seafood delights." })

## RECIPE_BOOK (entries for a book)

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

## BOOKMARKED_BOOK (bookmarked entries)

BookmarkedBook.destroy_all

puts "Creating Bookmarked Book Entries ..."

BookmarkedBook.create!({user_id: 1, book_id: 7})
BookmarkedBook.create!({user_id: 1, book_id: 7})
BookmarkedBook.create!({user_id: 2, book_id: 2})
BookmarkedBook.create!({user_id: 3, book_id: 7})
BookmarkedBook.create!({user_id: 3, book_id: 2})

## GROCERY LISTS

GroceryList.destroy_all

puts "Creating Grocery Lists ..."

grocery_list1 = GroceryList.create!(
  user_id: 1,
  name: "Weekly Driver",
  items: {
    spinach: { quantity: 1, unit: "bunch" },
    tofu: { quantity: 2, unit: "pack" },
    lentils: { quantity: 1, unit: "can" },
    quinoa: { quantity: 1, unit: "cup" }
  }
)

grocery_list2 = GroceryList.create!(
  user_id: 2,
  name: "Family Dins",
  items: {
    chicken: { quantity: 1, unit: "kg" },
    potatoes: { quantity: 4, unit: "pieces" },
    broccoli: { quantity: 2, unit: "heads" },
    garlic: { quantity: 3, unit: "cloves" },
    lemon: { quantity: 2, unit: "pieces" }
  }
)

grocery_list3 = GroceryList.create!(
  user_id: 1,
  name: "Healthy",
  items: {
    bananas: { quantity: 3, unit: "pieces" },
    strawberries: { quantity: 1, unit: "cup" },
    spinach: { quantity: 1, unit: "handful" },
    almond_milk: { quantity: 2, unit: "cups" },
    chia_seeds: { quantity: 1, unit: "tablespoon" }
  }
)

grocery_list4 = GroceryList.create!(
  user_id: 3,
  name: "Birthday Cake Test",
  items: {
    flour: { quantity: 2, unit: "cups" },
    sugar: { quantity: 1, unit: "cup" },
    baking_powder: { quantity: 1, unit: "teaspoon" },
    eggs: { quantity: 3, unit: "pieces" },
    vanilla_extract: { quantity: 1, unit: "teaspoon" }
  }
)

grocery_list5 = GroceryList.create!(
  user_id: 2,
  name: "Hiking Snacks",
  items: {
    almonds: { quantity: 1, unit: "cup" },
    dried_mango: { quantity: 0.5, unit: "cup" },
    popcorn: { quantity: 2, unit: "bags" }
  }
)

## GROCERY LISTS

Message.destroy_all

puts "Creating Messages ..."

message1 = Message.create!({
  sender_id: user1.id,
  recipient_id: user4.id,
  subject_type: "Book",
  subject_id: 13,
  message: "Where does he come up with this stuff?"
})

message2 = Message.create!({
  sender_id: user2.id,
  recipient_id: user1.id,
  subject_type: "GroceryList",
  subject_id: 5,
  message: "Can you pick these up for me on your way to work?"
})

message3 = Message.create!({
  sender_id: user1.id,
  recipient_id: user3.id,
  subject_type: "Recipe",
  subject_id: 4,
  message: "This was the recipe from last night's dinner!!!"
})

message4 = Message.create!({
  sender_id: user2.id,
  recipient_id: user5.id,
  subject_type: "Book",
  subject_id: 6,
  message: "Ideas for the upcoming party"
})

message5 = Message.create!({
  sender_id: user3.id,
  recipient_id: user1.id,
  subject_type: "GroceryList",
  subject_id: 4,
  message: "Running low on these!!!!"
})

## USER INBOXES

UserInbox.destroy_all

puts "Creating User Inboxes ..."

UserInbox.create!({user_id: user4.id, message_id: message1.id})
UserInbox.create!({user_id: user1.id, message_id: message2.id})
UserInbox.create!({user_id: user3.id, message_id: message3.id})
UserInbox.create!({user_id: user5.id, message_id: message4.id})
UserInbox.create!({user_id: user1.id, message_id: message5.id})

puts "DONE!"
