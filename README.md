🛍️ Codility Assessment – React Native Developer

Requirements: 

● Home Screen: 
  Display a list of products using a static JSON file or a public 
  API such as https://fakestoreapi.com/. 
  Each product card should show an image, title, and price. 
● Search & Filter:
  Add a search bar to filter products by name. 
  Optional: implement category-based filtering. 
● Favorites Feature: 
  Allow users to mark/unmark products as “Favorite”. 
  Favorites should persist locally (use AsyncStorage or similar). 
● Product Details Screen:
  On clicking a product, navigate to a detailed view showing full 
  description and image. 
● UI/UX Design & Responsiveness: 
  Clean, responsive layout compatible with both Android and iOS. 
  Use Flexbox, Styled Components, or Tailwind React Native for styling. 
● Code Quality & Architecture: 
  Use functional components and React Hooks. 
  Maintain proper folder structure, reusable components, and clean readable code. 


🚀 Features Implemented

● Home Screen: 
  Displays a list of products with an image, title, and price fetched from Fake Store API.

● Search & Filter: 
  Includes a search bar to filter products by name and optional category filtering.

● Favorites: 
  Users can mark/unmark items as “Favorite”, with persistence using AsyncStorage.

● Product Details Screen: 
  Shows detailed information including full description and product image.

● UI/UX & Responsiveness: 
  Designed using Flexbox for responsive layouts that work across Android and iOS.

● Code Quality & Architecture: 
  Implemented with functional components, React Hooks, and a clean folder structure.

⚙️ Setup Instructions

Follow these steps to set up and run the project locally:

1️⃣ Clone the Repository
git clone https://github.com/muhammadfaisal97/CodilityAssesment.git
cd CodilityAssesment

2️⃣ Install Dependencies
npm install
# or
yarn install

3️⃣ Run on Android
npm run android
# or
yarn android

open project in Android Studio
start emulater
run project 

4️⃣ Run on iOS (Mac only)
pod install
npm run ios
# or
yarn ios

open project in XCode
start emulater
run project 

🧪 Running Tests

To run tests (if available), use the following command:

npm test
# or
yarn test
