(function()
{
	var keys=document.querySelectorAll(".keys li");
	for(var i = 0;i < keys.length;i++)
	{
		keys[i].addEventListener("click",function()
		{
			alert(this.getAttribute("data-music"));
		});
	}
})();
