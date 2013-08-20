// JavaScript Document

    
    <script>
	$(document).ready(function() {
		$('.hide').hide();
		});		
		
	$('h4#about').click(function() {
		$('.hide.about').slideDown('slow');
		$('h4#about a').addClass("selected")
		});
	
	$('a.close').click(function() {
		$('.hide.about').slideUp('slow');
		$('h4#about a').removeClass("selected")
		});	
		
		</script>