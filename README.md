# Balance

Balance allows users to upload grocery shopping receipts to earn Solana based on how well their hauls meet nutritional recommendations.

![Balance](balance.jpg?raw=true "Balance")

## Description

The healthy eating index measures adherence to healthy diet recommendations on a scale from 0 to 100, with Americans scoring an average of 59. The American adult population experiences significant rates of obesity and being overweight (74%), heart disease as the leading cause of death, and high rates of prediabetes (35%). As such, health promotion and disease prevention are key goals for The Departments of Agriculture and Health and Human Services.

One strategy they use to work towards this mission is publishing the "Dietary Guidelines for Americans", which can be used to help guide Americans as they work to improve their diets and overall health.

But let's be real, buying groceries and trying to put together a balanced diet can be boring. Sure, eating a balanced diet is great for your health and you'll likely feel better in the long run, but buying junk food with bright packaging is just so much more satisfying.

But, what if for every nutritionally balanced grocery haul we could earn money? That's why we built Balance, a web app that allows users to earn Solana based on how well their grocery receipts meet weekly recommended nutrition goals.

## How We Built It
For our front-end, we utilized React and Bootstrap to create a layout for our home page. We created a components folder, filled it with small components doing minor tasks such as serving as navigation, sign-up sheets, and info banners-- and attached it to our app.js file.

For the back-end, we utilized the Tesseract API which uses Optical Character Recognition to scan a picture of a grocery list and we converted this text to a string in JavaScript. We then used this to assign points depending on how healthy their diet was based on the recommended government guidelines of nutrition in fruits, vegetables, protein, dairy, fats, and grains. We created an algorithm using training data to award Solana coins to the user for reaching the recommended number of intake of the 6 food categories.

## Challenges We Ran Into

We had difficulties implementing databases, including MongoDB, and had to consider the benefits and drawbacks of our options. It was a hurdle going into this completely unknown API with limited knowledge of react. This mixture of difficulties allowed our team to look towards the fundamentals and adapt to the rules of APIs that were new to us.

It was also challenging to pick up a brand new language, and learning the syntax was especially tricky. For example, asynchronous functions in JavaScript was new to our team, so ongoing research throughout the project was an important tool.

## What's Next For Balance

Currently, the web app is geared towards individuals. We'd love to expand it to grocery hauls for multiple people, and add in features for different health goals.

To make the platform more accessible, the next step would be to develop a mobile app that allows users to directly scan their grocery receipts.

Adding recommendations and encouragement tools for healthy eating habits would also allow the app to further assist and educate users as they work towards a more balanced diet.

## Authors

Mehul Gandhi, Lema Ghailan, Sofia Nguyen, Meng Lu

* [Mehul Gandhi](https://devpost.com/Mehul-Gandhi)
* [Lema Ghailan](https://devpost.com/lema-ghailan)
* [Sofia Nguyen](https://devpost.com/qwerty3690217804)
* [Meng Lu](https://devpost.com/m_lu)

## License

This project is licensed under the [MIT] License - see the LICENSE.md file for details

## Acknowledgments

Devpost submission, code snippets, APIs.
* [Devpost Submission](https://devpost.com/software/n-a-s4gwpj)
* [Solana](https://docs.solana.com/getstarted/hello-world)
* [Tesseract OCR API](https://www.npmjs.com/package/node-tesseract-ocr)
* [CSV Parser](https://www.npmjs.com/package/csv-parser)
