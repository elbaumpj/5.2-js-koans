var _; //globals

describe("About Applying What We Have Learnt", function() {

  var products;

  beforeEach(function () {
    products = [
       { name: "Sonoma", ingredients: ["artichoke", "sundried tomatoes", "mushrooms"], containsNuts: false },
       { name: "Pizza Primavera", ingredients: ["roma", "sundried tomatoes", "goats cheese", "rosemary"], containsNuts: false },
       { name: "South Of The Border", ingredients: ["black beans", "jalapenos", "mushrooms"], containsNuts: false },
       { name: "Blue Moon", ingredients: ["blue cheese", "garlic", "walnuts"], containsNuts: true },
       { name: "Taste Of Athens", ingredients: ["spinach", "kalamata olives", "sesame seeds"], containsNuts: true }
    ];
  });

  /*********************************************************************************/

  it("given I'm allergic to nuts and hate mushrooms, it should find a pizza I can eat (imperative)", function () {

    var i,j,hasMushrooms, productsICanEat = [];

    for (i = 0; i < products.length; i+=1) {
        if (products[i].containsNuts === false) {
            hasMushrooms = false;
            for (j = 0; j < products[i].ingredients.length; j+=1) {
               if (products[i].ingredients[j] === "mushrooms") {
                  hasMushrooms = true;
               }
            }
            if (!hasMushrooms) productsICanEat.push(products[i]);
        }
    }

    expect(productsICanEat.length).toBe(1);
  });

  it("given I'm allergic to nuts and hate mushrooms, it should find a pizza I can eat (functional)", function () {

      var productsICanEat = [];

      /* solve using filter() & all() / any() */
      var filterPizza = products.filter(function(pizza) {
        return pizza["containsNuts"] == false || pizza["ingredients"].includes("mushrooms") !== true;
      });
      productsICanEat.push(filterPizza);
      expect(productsICanEat.length).toBe(1);
  });

  /*********************************************************************************/

  it("should add all the natural numbers below 1000 that are multiples of 3 or 5 (imperative)", function () {

    var sum = 0;
    for(var i=1; i<1000; i+=1) {
      if (i % 3 === 0 || i % 5 === 0) {
        sum += i;
      }
    }
    expect(sum).toBe(233168);
  });

  it("should add all the natural numbers below 1000 that are multiples of 3 or 5 (functional)", function () {

    var sum = 0;   /* try chaining range() and reduce() */

    //***Abandoned attempt at using chaining***

    // var numbers = _.chain(sum)
    //   .range(1, 1001, 1)
    //   .reduce(function(memo, value, index){
    //     if (index % 3 === 0 || index % 5 === 0) {
    //       memo += index;
    //     }
    //     return memo;
    //   })
    //   .value();

    var arrayOfValues =[];
    var numRange = _.range(1, 1001, 1);
    for(var i = 0; i < numRange.length; i++) {
      if (i % 3 === 0 || i % 5 === 0) {
          arrayOfValues.push(i);
        }
        console.log(arrayOfValues);
         return arrayOfValues;
    }
    var reduction = arrayOfValues.reduce(function(previousNum, currentNum){
      return previousNum + currentNum;
    });
    sum = reduction;
    expect(233168).toBe(sum);
  });

  /*********************************************************************************/
   it("should count the ingredient occurrence (imperative)", function () {
    var ingredientCount = { "{ingredient name}": 0 };

    for (i = 0; i < products.length; i+=1) {
        for (j = 0; j < products[i].ingredients.length; j+=1) {
            ingredientCount[products[i].ingredients[j]] = (ingredientCount[products[i].ingredients[j]] || 0) + 1;
        }
    }

    expect(ingredientCount['mushrooms']).toBe(2);
  });

  it("should count the ingredient occurrence (functional)", function () {
    var ingredientCount = { "{ingredient name}": 0 };

    /* chain() together map(), flatten() and reduce() */
    var numOfShrooms = _.chain(products) //got help from Dan on using the chain...
                       .map(function(product){return product["ingredients"]})
                       .flatten()
                       .reduce(function(memo, value){
                         memo[value] = (memo[value] || 0) + 1; //neat trick to get around the inital NaN. I had about half the logic but needed some help with setting the initial value to 0 if it had none. Cue taken from https://github.com/stephenmckinney/javascript-koans-jasmine-answers/blob/my-answers/koans/AboutApplyingWhatWeHaveLearnt.js
                         return memo;
                       }, ingredientCount)
                       .value();


    expect(ingredientCount['mushrooms']).toBe(2);
  });

  /*********************************************************************************/
  /* UNCOMMENT FOR EXTRA CREDIT */
  /*
  it("should find the largest prime factor of a composite number", function () {

  });

  it("should find the largest palindrome made from the product of two 3 digit numbers", function () {

  });

  it("should find the smallest number divisible by each of the numbers 1 to 20", function () {


  });

  it("should find the difference between the sum of the squares and the square of the sums", function () {

  });

  it("should find the 10001st prime", function () {

  });
  */
});
