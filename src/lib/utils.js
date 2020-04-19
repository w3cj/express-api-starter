const fetch = require('node-fetch');

async function wordSuggestion(word) {
  const url = process.env.YAMLI_ENDPOINT.replace("placeholder", word);
    try {
        const response = await fetch(url); 
        let result = await response.text();
        result = result.replace("if (typeof(Yamli) == 'object') {Yamli.I.SXHRData.dataCallback(","");
        result = result.slice(0,-4);
        const wrapper = JSON.parse(result); 
        const obj = JSON.parse(wrapper.data);
        let suggestions = obj.r.split("|")  
        suggestions = suggestions.map((elm)=>{
          return elm.slice(0,elm.length-2);
        })
        return suggestions;
      } catch (err) {
        throw err;
      } 
}
exports.wordSuggestion = wordSuggestion;