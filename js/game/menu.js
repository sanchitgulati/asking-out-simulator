function Start(){

	$ = {};
	
	/////// SET UP SCENE ////////

	Show("background","coffeehouse");

	PlaySound("bg","coffeehouse",{loop:-1, volume:0.7});

	//////////////////////////////

	j("[Sitting in a coffee house]");
	j("[you decided to take a shot]");
	j("[at a girl you met last night]");
	j("[she was probably drunk and doesn't remember a thing]");
	j("[I might drop in sometime to help you, okie ?]");
	j("[only you can see me, like a ghost]");
	j("[no time for rules, you have another hundreds of Ludum Dare 31 games to play]");
	j("*here goes*");
	p("Hey, What's Up!");
	N("Who are you ? :/");

	Choose({
		"I have been following you.": twitter,
		"We met yesterday.": function(){ metYesterday("ha ha! I am dave from last night")},
		"Wait, what is this game ?": About
	});
}

function backFromAbout()
{
	Wait(500);
	queue(ClearDialogue,0);
	p("Hey, What's Up!");
	N("Who are you ? :/");

	Choose({
	"I have been following you.": twitter,
	"We met yesterday.": function(){ metYesterday("ha ha! I am dave from last night")},
	});
}

function About(){

	j("This game...");
	j("is a conversation simulator, really...");
	j("...dumb ways to get rejected...");
	
	p("Of course. I see you have expertise in the matter.");
	j("Ha, of course.");
	j("I am Sanchit Gulati, and this code is stolen from ncase");
	j("who made the famous 'Coming Out Simulator 2014' ");
	j("now lets get back to the game. Best Of Luck.");
	backFromAbout();
}

function twitter(){
	p("I have been following you on twitter.");
	p("I am @t3rm1nat0r");
	N("weirdo :S");
	N("How did you get this number ?");
	Choose({
	"We met yesterday..": function(){
		$.twitter = true;
		metYesterday("I am dave from Tash's birthday party");
	},
	"I'll be honest": function(){$.google = true;google()},
	});
}

function google()
{
	p("did a google search");
	p("wasn't that hard, honestly");
	p("that ice bucket challenge vlog was interesting");
	N("**** off");
	j("You are not very good at this are you");
	Wait(100);
	j("bring it back, last chance");
	Choose({
	"We met yesterday..": function(){
		$.myHeight = true;
		metYesterday("Tash's party!! I am dave, 5' 11 . dimple cheeks ? remember ?");
	},
	"We had burritos..": function(){
		$.burrito = true;
		metYesterday("dave here, we shared that awful burrito yesterday!!");
	},
	"I can see you": stalk,
	"That was mean": function(){$.reverse = true; sorry();},
	});
}

function sorry(){
	p("What did I do to deserve that ?");
	p("Everybody Google these days");
	N("well.. you are still very creepy");
	Choose({
	"We met yesterday..": function(){
		$.sorry = true;
		metYesterday("ha ha! I am dave from last night");
	},
	"now I am a creep ?": creep,
	});
}

function creep(){
	if($.reverse)
	{
		p("I was been honest with you");
		p("you had no problem with me or my computer yesterday");
		idk();
	}

}

function stalk(){
	p("hey! don't report to the cops");
	N("how do you know ? you jerk .");
	p("well i can see your screen");
	p(".. on my laptop");
	j("you arsehole, enjoy your time in jail");
	p("don't run, listen .. listen");
	p("you forgot your pants.");
	j("Go away and never come back to play this game. EVER.");

}

function metYesterday(message){
	$.yesterday = true;
	p(message);
	Wait(5000);
	N("oh!");
	Wait(5000);
	idk();
}


function idk()
{
	N("yesterday ?");
	if($.google)
	{
		N("are you a freak ? I should runway from");
		Choose({
		"that depends": function(){
			p("on what you remember from last night ?");
			$.awkard = true;
			memories();
		},
		"dont be stupid .. I am lying": function(){
			p("just lying, I was just teasing you");
			p("you were talking on and on about some ex who stalked");
			p("so.. just a prank");
			Wait(5000);
			N("what else did I told you about");
			N("This is so freaky, I never got this drunk before");
			memories();
		},
		});
	}
	if($.twitter)
	{
		Wait(5000);
		N("okie, you are not @t3rm1nat0r");
		N("no one with that id follows me");
		Choose({
		"look who talk computers now": function(){
			$.seen_twitter = true;
			terminator("@davewinterbell actually, but the new terminator looks kick-ass");
		},
		"you checked already" : function() {
			p("woah! that was fast! even for you ");
			terminator("but i can sense, you use to like the old terminator a lot");
		}
		});
	}
	else
	{
		Wait(5000);
		N("still hungover ! sorry!");
		N("who are you!");
		p("I was afraid this would happen");
		p("You drank a lot, yesterday");
		N("No Shit !");
		Choose({
		"search your photos": function(){
			$advise_photos = true;
		},
		"talk about the new terminator"
		});
	}
}

function terminator(message)
{
	p(message);
	if($.seen_twitter)
		n("but the next one..");
	N("It's gonna suck, would be another interstellar .. TIME is another dimension fuck up.BELIEVE ME.");
	if(!$.memory)
	{
		N("But ... who are you , again ?");
		p("mein hu don");
	}
	else
	{
		N("Don't tell me, I bored you with this crap yesterday");
		p("bored? i won't call it boring, you were very passionate about the cause");
		p("HaHa");
	}
}

function idk_last()
{

}

function memories()
{
	j("you got her thinking about the party");
	if($.awkard)
		j("but you are acting ALL creepy and mysterious");
	j("don't blow this");

	if($.awkard)
	{
		N("You are scaring me!")
	}
}