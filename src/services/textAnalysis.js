
// 
// Count all the words from text
const countWords = async (text) => {
    // Split the input text into an array of individual words based on whitespace
    const words = text.split(/\s+/);

    // Return length
    return { wordCount: words.length };
};
  
// 
// Count unique words
const countUniqueWords = async (text) => {
    // Split the input text into an array of individual words based on whitespace
    const words = text.split(/\s+/);

    // filter out duplicate words
    const uniqueWords = new Set(words);

    // Return size 
    return { uniqueWordCount: uniqueWords.size };
};
  
// 
// It will find options words
const findTopKWords = async (text, optionWord) => {
    // Split the input text into an array of individual words based on whitespace
    const words = text.split(/\s+/);
    const wordCountMap = {};

    // Iterate over each word in the array
    words.forEach((word) => {
        // Increment the count for the current word in the wordCountMap
        wordCountMap[word] = (wordCountMap[word] || 0) + 1;
    });

    // Extract the unique words from the wordCountMap and sort them by their counts in descending order
    const sortedWords = Object.keys(wordCountMap).sort((a, b) => wordCountMap[b] - wordCountMap[a]);

    // Get the top K words based on the user-provided optionWord
    const topKWords = sortedWords.slice(0, optionWord);

    // Return 
    return { topKWords };
};



module.exports = {
    countWords,
    countUniqueWords,
    findTopKWords,
}
  