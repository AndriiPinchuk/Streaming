
let PortalShowsBase = [ 
    { name: 'twshow', genre: 'Cartoon', duration: 23},
    { name: 'relok', genre: 'Comedy', duration: 46 },
    { name: 'show1', genre: 'Action', duration: 21 },
    { name: 'show2', genre: 'Fantasy', duration: 35 },
    { name: 'show3', genre: 'Drama', duration: 82 },
    { name: 'show4', genre: 'Fantasy', duration: 13 },
    { name: 'show5', genre: 'Comedy', duration: 62 },
    { name: 'show6', genre: 'Historical', duration: 53 },
];

let sortByDuration = (a, b) => a.duration < b.duration ? 1 : -1;

const User = {
	subscriptions: ["twshow","relok"],
	subscribe: function(streamingService){
		if (!User.subscriptions.includes(streamingService)){
		User.subscriptions[User.subscriptions.length] =streamingService;}
	}
}


const Subscription = {
	streamingService: User.subscriptions,
	watch: function(showName){
		location.href = 'http://' +'your.com/site/was/here/'+ showName; //перенаправляє на сторінку перегляду
	},
	getRecommendationTrending: function(){
 		getRecommendationTrending(); 
	},
	getRecommendationByGenre: function(genre){
		getMostViewedShowsOfYear(genre);
	},
}

let viewsByShowMap = new Map([
  ["twS1",  4500],
  ["twS2", 6350],
  ["twS3", 3450],
  ["twS4",  4500],
  ["twS5", 6350],

  ["relokS1",  4500],
  ["relokS2", 6350],
  ["relokS3", 3450],
  ["relokS4",  4500],
  ["relokS5", 6350],

  ["show1S1",  4500],
  ["show1S2", 6350],
  ["show1S3", 3450],
  ["show1S4",  4500],
  ["show1S5", 6350],
  ["show1S6", 6350],

  ["show2S1",  4500],
  ["show2S2", 6350],
  ["show2S3", 3450],
  ["show2S4",  4500],
  ["show2S5", 6350],
  ["show2S6", 6350],

  ["show3S1",  4500],
  ["show3S2", 6350],
  ["show3S3", 3450],
  ["show3S4",  4500],
  ["show3S5", 6350],
  ["show3S6", 6350],

  ["show4S1",  4500],
  ["show4S2", 6350],
  ["show4S3", 3450],
  ["show4S4",  4500],
  ["show4S5", 6350],
  ["show4S6", 6350],

  ["show5S1",  4500],
  ["show5S2", 6350],
  ["show5S3", 3450],
  ["show5S4",  4500],
  ["show5S5", 6350],
  ["show5S6", 6350],

  ["show6S1",  4500],
  ["show6S2", 6350],
  ["show6S3", 3450],
  ["show6S4",  4500],
  ["show6S5", 6350],
  ["show6S6", 6350],
]);

const StreamingService = [ 
	{ name: 'twshow',  shows:[
							{ name: 'twS1',genre: 'Cartoon',releaseDate: 12},
							{ name: 'twS2',genre: 'Cartoon',releaseDate: 12},
							{ name: 'twS3',genre: 'Cartoon',releaseDate: 12},
							{ name: 'twS4',genre: 'Cartoon',releaseDate: 12},
							{ name: 'twS5',genre: 'Cartoon',releaseDate: 12},
							]},
    { name: 'relok', shows:[
							{ name: 'relokS1',genre: 'Comedy',releaseDate: 12},
							{ name: 'relokS2',genre: 'Comedy',releaseDate: 12},
							{ name: 'relokS3',genre: 'Comedy',releaseDate: 12},
							{ name: 'relokS4',genre: 'Comedy',releaseDate: 12},
							{ name: 'relokS5',genre: 'Comedy',releaseDate: 12},
							{ name: 'relokS6',genre: 'Comedy',releaseDate: 12},
							]},
    { name: 'show1',shows:[
							{ name: 'show1S1',genre: 'Action',releaseDate: 12},
							{ name: 'show1S2',genre: 'Action',releaseDate: 12},
							{ name: 'show1S3',genre: 'Action',releaseDate: 12},
							{ name: 'show1S4',genre: 'Action',releaseDate: 12},
							{ name: 'show1S5',genre: 'Action',releaseDate: 12},
							{ name: 'show1S6',genre: 'Action',releaseDate: 12},
							]},
    { name: 'show2', shows:[
							{ name: 'show2S1',genre: 'Fantasy',releaseDate: 12},
							{ name: 'show2S2',genre: 'Fantasy',releaseDate: 12},
							{ name: 'show2S3',genre: 'Fantasy',releaseDate: 12},
							{ name: 'show2S4',genre: 'Fantasy',releaseDate: 12},
							{ name: 'show2S5',genre: 'Fantasy',releaseDate: 12},
							{ name: 'show2S6',genre: 'Fantasy',releaseDate: 12},
							]},
    { name: 'show3', shows:[
							{ name: 'show3S1',genre: 'Drama',releaseDate: 12},
							{ name: 'show3S2',genre: 'Drama',releaseDate: 12},
							{ name: 'show3S3',genre: 'Drama',releaseDate: 12},
							{ name: 'show3S4',genre: 'Drama',releaseDate: 12},
							{ name: 'show3S5',genre: 'Drama',releaseDate: 12},
							{ name: 'show3S6',genre: 'Drama',releaseDate: 12},
							]},
    { name: 'show4', shows:[
							{ name: 'show4S1',genre: 'Fantasy',releaseDate: 12},
							{ name: 'show4S2',genre: 'Fantasy',releaseDate: 12},
							{ name: 'show4S3',genre: 'Fantasy',releaseDate: 12},
							{ name: 'show4S4',genre: 'Fantasy',releaseDate: 12},
							{ name: 'show4S5',genre: 'Fantasy',releaseDate: 12},
							{ name: 'show4S6',genre: 'Fantasy',releaseDate: 12},
							]},
    { name: 'show5', shows:[
							{ name: 'show5S1',genre: 'Comedy',releaseDate: 12},
							{ name: 'show5S2',genre: 'Comedy',releaseDate: 12},
							{ name: 'show5S3',genre: 'Comedy',releaseDate: 12},
							{ name: 'show5S4',genre: 'Comedy',releaseDate: 12},
							{ name: 'show5S5',genre: 'Comedy',releaseDate: 12},
							{ name: 'show5S6',genre: 'Comedy',releaseDate: 12},
							]},
    { name: 'show6', shows:[
							{ name: 'show6S1',genre: 'Historical',releaseDate: 12},
							{ name: 'show6S2',genre: 'Historical',releaseDate: 12},
							{ name: 'show6S3',genre: 'Historical',releaseDate: 12},
							{ name: 'show6S4',genre: 'Historical',releaseDate: 12},
							{ name: 'show6S5',genre: 'Historical',releaseDate: 12},
							{ name: 'show6S6',genre: 'Historical',releaseDate: 12},
							]},
//addShow: function(show){}
];



/*
addShow(show):
getMostViewedShowsOfYear(year):
getMostViewedShowsOfGenre(genre):

*/

/*
viewsByShowMap.set(key, viewsByShowMap.get(key) +1);
console.log("viev = "+viewsByShowMap.get(key));
*/
/*
    new Map() – создаёт коллекцию.
    map.set(key, value) – записывает по ключу key значение value.
    map.get(key) – возвращает значение по ключу или undefined, если ключ key отсутствует.
    map.has(key) – возвращает true, если ключ key присутствует в коллекции, иначе false.
    map.delete(key) – удаляет элемент по ключу key.
    map.clear() – очищает коллекцию от всех элементов.
    map.size – возвращает текущее количество элементов.

*/

var Movie = null;
var Episode = null; 
var Series =  {episodes:[1,2,3,4,5,6]}
// showGetEpisodes(//DB reqest  return arr)
let sortByDShows = (a, b) => a.duration < b.duration ? 1 : -1;

function getMostViewedShowsOfYear(){
var n = 0;
var vievs = [];
var name = [];

StreamingService.forEach(item1 =>{
StreamingService.shows.forEach(item2 =>{
	
vievs[n] = item2;
name[n] = viewsByShowMap.get(item2);
	n++;

}

/*
function findtenLargestNumbers (array){ 
const largeTen = [null, null, null, null, null, null, null, null, null, null]; 


for (const num of array){
updateLargest  (largeTen, num);
} 
return largeTen; 
} 




 function updateLargest(largeTen, num){
 if (largeTen [2] === null || num > largeThree [2]){ 
 shiftAndUpdate(largeTen, num, 2);} 
 else if (largeTen [1] === null || num > largeTen [1]){ 
 shiftAndUpdate(largeTen, num, 1);}
 else if (largeThree [0] == null || num > largeTen [0]){
shiftAndUpdate (largeTen, num, 0);}}


 function shiftAndUpdate(array, num, idx){
  for (let i=0;i<=idx;i++){
   if (i === midx){
    array [i] = num;} 
   else {array [i] = array [ i + 1];}}}

*/



function getRecommendationTrending(){
	PortalShowsBase.sort(sortByDuration);
	ShowRecommendationTrending(PortalShowsBase[0]);
	console.log(PortalShowsBase[0]);
}
function getMostViewedShowsOfYear(genre){
	PortalShowsBase.sort(sortByDuration);
	let key = genre;
	var BreakException = {};
	try {
		PortalShowsBase.forEach(item =>{
			if(key === item.genre){
				ShowMostViewedShows(item);
				console.log(item);
				throw BreakException;
			}
		});
	} catch (e) {
	  if (e !== BreakException) throw e;
	}
}




function ShowMostViewedShows(item){
	document.getElementById("2").innerHTML = "MostViewedShows: "+item.name+" in genre "+item.genre;
}

function ShowRecommendationTrending(item){
	document.getElementById("3").innerHTML = "RecommendationTrending: "+item.name+" vs duration "+item.duration;
}

function addSub(selectedSub){
	var test = User.subscribe(selectedSub);
}

function ShowSubscribe(){
	document.getElementById("1").innerHTML = "Your Subscriptions: " + Subscription.streamingService;

}

$( function() {

	$( "#buttonWatch" ).on( "click", function() {
		var selectedSub = $( "#SubTypes" ).val();
		Subscription.watch(selectedSub);
	return false;
	});

	$( "#buttonTrending" ).on( "click", function() {
		var temp = Subscription.getRecommendationTrending();
	return false;
	});


	$( "#buttonTrendingGenre" ).on( "click", function() {
		var selectedGen = $( "#GenTypes" ).val();
		Subscription.getRecommendationByGenre(selectedGen);
	return false;
	});

	$( "#buttonWatch" ).on( "click", function() {
		var selectedSub = $( "#SubTypes" ).val();
		Subscription.watch(selectedSub);
	return false;
	});

	$( "#buttonSub" ).on( "click", function() {
		var selectedSub = $( "#SubTypes" ).val();
		addSub(selectedSub);
	return false;
	});
});