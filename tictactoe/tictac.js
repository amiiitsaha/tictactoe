$(document).ready(function(){
		
		var a=0;
		$('.can').click(function(){
			if($(this).text()==""){
			if(a==0){
				$(this).text("0");
				a++;
			}else{
				$(this).text("x");
				a--;
			}
		}
	});

		function che(a,b,c){
			if((a.text()=="0"&& b.text()=="0" && c.text()=="0") || (a.text()=="x"&& b.text()=="x" && c.text()=="x")){
				return true;
			}else{
				return false;
			}
		}

function winsound(b){
	const text=b;
	const utter=new SpeechSynthesisUtterance(text);
	utter.pitch=0.8;
	window.speechSynthesis.speak(utter);
}
		function ch(){
			if(a==0){
					$('#main').css('display', 'block');
					winsound("X win");
					$('#done').text("x win");
				}else{
					$('#main').css('display', 'block');
					winsound("O win");
					$('#done').text("0 win");
				}
		}



		function draw(){
			if($('#inp1').text()!="" && $('#inp2').text()!="" && $('#inp3').text()!="" &&$('#inp4').text()!="" && $('#inp5').text()!="" && $('#inp6').text()!="" && $('#inp7').text()!="" && $('#inp8').text()!="" && $('#inp9').text()!=""){
				$('#main').css('display', 'block');
				winsound("match draw");
				$('#done').text("match draw");
			}
		}

		$('#clear').click(()=>{
			
			$('.can').text("");
			$('#main').css("display","none");
		})

		$('.can').click(function(){


			if(che($('#inp1'),$('#inp2'),$('#inp3'))){
				ch();
				console.log("hh")
			}else if(che($('#inp1'),$('#inp4'),$('#inp7'))){
				ch();

			}else if(che($('#inp7'),$('#inp8'),$('#inp9'))){
				ch();

			}else if(che($('#inp3'),$('#inp6'),$('#inp9'))){
				ch();

			}else if(che($('#inp1'),$('#inp5'),$('#inp9'))){
				ch();

			}else if(che($('#inp3'),$('#inp5'),$('#inp7'))){
				ch();

			}else if(che($('#inp2'),$('#inp5'),$('#inp8'))){
				ch();

			}else if(che($('#inp4'),$('#inp5'),$('#inp6'))){
				ch();
			}else{
				draw();
			}
		})
	});