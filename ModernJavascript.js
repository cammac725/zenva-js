

// let apiKey = "30B082CD39F9B6CB9E6AA8548E0A89B9";
// let appId = "221380"




const fetch = require('node-fetch');

let url =
  "http://api.steampowered.com/ISteamUserStats/GetGlobalAchievementPercentagesForApp/v0002/?gameid=221380";

  async function fetchData(url){
    let response = await fetch(url);
    let jsonResponse = await response.json();
    printData(jsonResponse);
  }

  function printData(jsonData) {
    let jsonObject = jsonData["achievementpercentages"];
    let allAchievements = jsonObject['achievements'];

    for (let achievement of allAchievements){
      let name = achievement['name'];
      console.log(name);
    }
  }

  fetchData(url).catch(function() {
    console.log("Could not fetch data");
  });