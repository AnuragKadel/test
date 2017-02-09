var currentpack=require('./data.json')
var shuff=require('shuffle-array')
var http=require('http')
var server=http.createServer(function(request,response)
{
response.writeHead(200,{"Content-Type":"text/html"})


response.write("Name:-" +currentpack.name)


response.write("<br>")
response.write("<br>")
response.write("Maths:-"+myShuffle(autoArray()))


response.write("<br>")
response.write("<br>")
response.write("hobbies:-"+myShuffle(currentpack.hobbies))

response.write("<br>")
response.write("<br>")



response.end()
});


function myShuffle(array)
{
	for(var i=array.length-1;i>0;i--)
		{
			var j=Math.floor(Math.random()*(i+1))
			var temp=array[i]
			array[i]=array[j]
			array[j]=temp



		}
		return(array)
}


function autoArray()
{
	var arr=[]

	for(var i=0;i<5;i++)
	{
		var j=50+(Math.floor(Math.random()*450))
		arr[i]=j

	}

	return arr
}







server.listen(1100)
console.log("Server is listening")




