/** This file's purpose is to assign points in each of the 5 categories
 * of food consumption. We convert the picture to text and
 * subsequently an array of arrays where each array 
 * corresponds to a purchased item in the grocery list.
 * WWe assign points to each of the 5 categories of food 
 * consumption. We award cryptocurrency based on 
 * if the user meets the recommended percentages 
 * needed for a healthy diet based on each of the 5 categories.
 */

 const T = require("tesseract.js");
 const csv = require("csv-parser");
 const fs = require("fs");
 
 /* An array of dictionaries. Contains fruits, 
 vegetables, dairy, proteins, grains, and fat.*/
 var training_data = loadCSV('food_categories.csv');
 
 /** Each variable contains an array of relevant items. */
 var fruits;
 var vegetables;
 var dairy;
 var proteins;
 var grains;
 var fats;
 
 
 /** Percentages for a healthy diet. */
 const p_fat = 0.1;
 const p_fruit = 0.2;
 const p_protein = 0.15;
 const p_vegetables = 0.2;
 const p_grains = 0.3;
 const p_dairy = 0.05;
 const epsilon = 0.05;
 
 /**
  * Reads words from picture located in filePath
  * @param  {String} filePath  A picture.
  * @return {String}  Grocery shopping list.
  * */
 async function readFile(filePath) {
     let imgText = await T.recognize(
         `./${filePath}`);
     return imgText.data.text.toLowerCase();
 }
 
 /**
  * Reads words from picture located in filePath
  * @param  {String} sentence The whole grocery list.
  * @return {Array}  Array of arrays, each array is an
  * entry in the shopping list.
  * */
 async function splitText(sentence) {
     const words = [];
     for (var row of sentence.split("\n")) {
         words.push(row.split(" "));
     }
     return words;
 }
 
 /**
  * Loads the data into the global variable training data.
  * @param  {String} fileName The name of the file to load.
  * @return {Array}  Array of arrays, each array is an
  * entry in the shopping list.
  * */
 function loadCSV(fileName) {
     const results = [];
     fs.createReadStream(fileName)
     .pipe(csv())
     .on('data', (data) => results.push(data))
     .on('end', () => {
         return results; 
       }
     )
     return results; 
 }
 
 /** Sets the categories to have the proper data
  * from the CSV file.
     @param  {String} dictionary The dictionary of the category.
  * @return {Array}  Array of strings of each item in the category.
  */
 function setCategory(dictionary) {
     var category = Object.keys(dictionary);
     const categories_lst = new Set();
     category.forEach((key) => {
         categories_lst.add(dictionary[key]);
     });
     return categories_lst;
 }
 
 /** Sets all categories to have the proper data where
  * each variable is an array of strings.
  */
 function setAllCategories() {
     fruits = setCategory(training_data[0]);
     vegetables = setCategory(training_data[1]);
     dairy = setCategory(training_data[2]);
     proteins = setCategory(training_data[3]);
     grains = setCategory(training_data[4]);
     fats = setCategory(training_data[5]);
 }
 
 /** Algorithm for finding the number of foods bought in each category. 
  * * @param  {Array} fileName Array of arrays, each array is an
  * entry in the shopping list.
  * @return {Float}  Returns the number of cryptocurrency coins awarded
  * */
 function categorizeFood(groceryList) {
     let fat_total = 0;
     let fruit_total = 0;
     let protein_total = 0;
     let vegetable_total = 0;
     let grain_total = 0;
     let dairy_total = 0;
     groceryList = filterList(groceryList);
     for (var lst of groceryList) {
         for (var item of lst) {
             if (fats.has(item)) {
                 fat_total += 1;
             }
             if (fruits.has(item)) {
                 fruit_total += 1;
             }
             if (proteins.has(item)) {
                 protein_total += 1;
             }
             if (vegetables.has(item)) {
                 vegetable_total += 1;
             }
             if (grains.has(item)) {
                 grain_total += 1;
             }
             if (dairy.has(item)) {
                 dairy_total += 1;
             }
         }
     }
     let length = groceryList.length;
     const result = [fat_total/ length <= p_fat, fruit_total/length >= p_fruit, protein_total /length >= p_protein,
                     vegetable_total/length >= p_vegetables, grain_total/length >= p_grains, dairy_total/length >= p_dairy];
     
     return result.filter(Boolean).length / 6;
 }
 
 
 
 /** Filters the array of arrays. At least one item in the array
  * for each element in the arrays must be in one of the 5 categories.
  * * @param  {Array} groceryList Array of arrays, each array is an
  * entry in the shopping list.
  * @return {Array}  Arrays where at least one item is 
  * in one of the 5 categories. */
 function filterList(groceryList) {
     const result = [];
     for (var array of groceryList) {
         if (array.some(inCategory)) {
             result.push(array);
         }
     }
     return result;
 }
 
 /** Checks if an item is in any of the categories. 
  * @param  {String} item A food item.
  * @return {boolean}  True iff item is in a category.
 */
 function inCategory(item) {
     const categories = [fruits, vegetables, dairy, proteins, grains, fats];
     for (var cat of categories) {
         if (cat.has(item)) {
             return true;
         }
     }
     return false;
 }
 
//  async function main() {
//      var plainText =  readFile("traderjoes-receipt1.jpg")
//      var shoppingList = await splitText(await plainText);
//      console.log(shoppingList);
//      console.log(training_data);
//      setAllCategories();
//      categorizeFood(shoppingList); 
//  }
 
//  main();
 