var quotes = [
    {
        quote: "Every human life is worth the same, and worth saving.",

        author: "~ Napoleon Hill"
    },

    {
        quote: "The way to get started is to quit talking and begin doing.",

        author: "~ Walt Disney"
    },

    {
        quote: "You wanna make an omelet, you gotta break some eggs.",
        author: "~ Tyler Durden"
    },
    {
        quote: "Fate, it seems, is not without a sense of irony.",
        author: "~ Morpheus"
    }, {
        quote: "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking.",

        author: "~ Steve Jobs"
    }, {
        quote: "Never trust anything that can think for itself if you can’t see where it keeps its brain.",

        author: "~ Eleanor Roosevelt"
    }, {
        quote: "Do not pity the dead, Harry. Pity the living, and, above all those who live without love.",

        author: "~ Oprah Winfrey"
    }, {
        quote: "Life is too short and sweet to be spent by cribbing and complaining about things. Here are some random quotes about the most wonderful gift that we’ve got",

        author: "~ Mina Lennon"
    }, {
        quote: "Beauty is not in the face,beauty is a light in the heart.",

        author: " ~ James Cameron"
    }
];

var button = document.querySelector("#quote-box .btn");

var quote = document.querySelector("#quote-box .quote");

var author = document.querySelector("#quote-box .author");

button.addEventListener("click", function () {
    var randomIndex = Math.floor(Math.random() * quotes.length);

    var quoteArray = quotes[randomIndex];

    quote.innerHTML = quoteArray.quote;

    author.innerHTML = quoteArray.author;
});

// ==================== to make quotes no repeat===============

quotes.sort(() => Math.random() - 0.5);

var actualQuote = 0;
button.addEventListener("click", () => {
    if (actualQuote >= quotes.length) {
        quote.innerHTML = "No more quotes!";
    } else {
        quote.innerHTML = quotes[actualQuote % quotes.length].quote;
        actualQuote++;
    }
});

// ==================== to make authors no repeat ===============

quotes.sort(() => Math.random() - 0.5);

var actualAuthor = 0;
button.addEventListener("click", () => {
    if (actualAuthor >= quotes.length) {
        author.innerHTML = "No more authors!";
    } else {
        author.innerHTML = quotes[actualAuthor % quotes.length].author;
        actualAuthor++;
    }
});


// ================ another way to make quotes & authors no repeat :======================


// ==================== to make quotes no repeat===============

// button.addEventListener('click', () => {
//    if(quotes.length) {
//
//        let random = Math.floor(Math.random() * quotes.length);
//        quote.innerHTML = quotes[random].quote;
//        quotes.splice(random, 1);
//
//    } else {
//        quote.innerHTML = "No more quotes!";
//
//    }
// })

// ==================== to make authors no repeat ===============

// button.addEventListener('click', () => {
//    if(quotes.length) {
//
//        let random = Math.floor(Math.random() * quotes.length);
//        author.innerHTML = quotes[random].author;
//        quotes.splice(random,1);
//
//    } else {
//        author.innerHTML = "No more quotes!";
//
//    }
// })
//
