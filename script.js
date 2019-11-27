function getInfo(){
	var url = new URL(window.location.href);
	var teknist = url.searchParams.get("teknist");
	console.log(teknist);
}