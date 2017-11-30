<div id="header" class="header" style="overflow:hidden;"><font color="#ffc342">THEFORGE</font></div>
<div id="subheader">
	<font style="font-size: 16px;">
		<?php if(isset($location[1])){ echo $location[0]; echo $location[1]; }else if(isset($location[0])){ echo $location[0]; } ?>
	</font>
</div>
<script>
  window.onload = function(){
     var active = document.title.split(" - ");
     var html = document.getElementById("header").innerHTML;
	 var final = html + active[1] + document.getElementById("subheader").innerHTML;
     document.getElementById("header").innerHTML = final;
  };
</script>
