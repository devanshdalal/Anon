
console.log("HELLO");
setTimeout(function(){
    console.log("THIS IS");
}, 2000);
console.log("DOG");

// var t=document.getElementsByClassName('dots overflow_dots')
// f=t[0]
// f.click()

// var tickit=$("span:contains('Go Anonymous')")[0]
// e1 = tickit[0]

// var link=document.getElementsByClassName("submit_button modal_action");
// link=link[0];
// link.click();

	// Handle it later
	// if ( $("span:contains('Go Anonymous')")[0] === undefined ) {
	// 	t.click();
	// 	//// handle it later.
	// }

function ff () { // works on question pages only
	var t=document.getElementsByClassName('dots overflow_dots')[0];
	t.click();

	setTimeout(function(){
		var tickit=$("span:contains('Go Anonymous')")[0]
	}, 2000);

	setTimeout(function(){
		$("span:contains('Go Anonymous')")[0].click()
	}, 3000);
}

	// setTimeout(function(){
	// 	console.log("reached here ");
	// 	document.getElementsByClassName('dots overflow_dots')[0].click();
	// }, 4000);
	// tickit.click();
	// var closeddm = document.getElementsByClassName('overflow_link hover')[0];
	// closeddm.click();
	// console.log('sleeping for 5 secs')
	// setTimeout(function(){
	//     console.log("THIS IS");
	// }, 5000);
	// console.log("DOGGGG");	

	// var link=document.getElementsByClassName("submit_button modal_action");
	// link=link[0];
	// link.click();
	// console.log("sleeping for 5 sec")


var y = document.getElementsByClassName('Button TwoStateButton Question pressed question_follow_button secondary_action')[0];
var y2 = document.getElementsByClassName('Button TwoStateButton Question question_follow_button secondary_action')[0];
y2.onclick=ff

// var x=document.getElementsByClassName('hover_menu show_nub right_align fixed_menu_width no_body_attach')




function(){
	$('span:contains(Go Anonymous)').click();
	console.log("sleeping for 5 sec")
	sleep(5000)
	console.log("marked anon")
}

	// var checker = setInterval(function() {
	// 	if ($('a.question_privacy:contains(Make Public)').length) {
	// 		clearInterval(checker);$('a.questionFollowAction').first().click();
	// 		$('a[id$=add_monitor]').first().click();}
	// 	}
	// ,100);
