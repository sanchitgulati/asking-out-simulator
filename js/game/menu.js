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
		"We met yesterday.": function(){ $.myname = true; metYesterday("ha ha! I am dave from last night")},
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
	"We met yesterday.": function(){$.myname = true; metYesterday("ha ha! I am dave from last night")},
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
		$.myname = true;
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
		$.myname = true;
		metYesterday("Tash's party!! I am dave, 5' 11 . dimple cheeks ? remember ?");
	},
	"We had burritos..": function(){
		$.burrito = true;
		$.myname = true;
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
		$.myname = true;
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
			p("that depends on what do you remember from last night ?");
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
			$.scared = true;
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
			$.scared = true;
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
			p("try looking at your photos on mobile, I remember clicking few");
			$.scared = true;
			$.photos = true;
		},
		"talk about the new terminator": function(){
			$.t_sucks = true;
			terminator("So, new terminator sucks, right ?")
		}
		});
	}
}

function terminator(message)
{
	p(message);
	if($.seen_twitter)
		N("but the next one..");
	if($.t_sucks)
		N("Yes. Honestly");
	N("It's gonna suck, would be another interstellar .. TIME is another dimension fuck up.BELIEVE ME.");
	if(!$.memory)
	{
		N("But ... who are you , again ?");
	}
	else
	{
		N("Don't tell me, I bored you with this crap yesterday");
		p("bored? i won't call it boring, you were very passionate about the cause");
		p("HaHa");
	}
	memories();
}

function endGame()
{
	N("Sorry, I can't continue this anymore.");
	if($.myname == true && $.myHeight == true)
		N("Good Bye. short Dave");
	else if($.myname == true)
		N("Good Bye. Dave.");
	else
		N("Good Bye.");
	if($.abuse)
		N("Burn in hell");
	else
		N("Enjoy your life");
	j("GAME OVER for you bro! Better luck next time.");
}

function memories()
{
	j("you got her thinking about the party");
	if($.awkard)
		j("but that last sentence didn't help");
	if($.scared)
	{
		j("yes, get her scared that will help.");
		j("[[SARCASM intended]]");
	}

	j("PS: don't blow this");
	j("PS: , Girls like assertive men");
	p("take your time, see what you remember");
	if($.awkard)
	{
		N("did we did something stupid");
		Wait(100);
		N("NO");
		N("I remember coming home alone");
		Choose({
		"yes yes you were alone": function(){
			p("oh god! No. it never went that far");
		},
		"sadly, but .." : function(){
			p("sadly, but I was hoping we could change that tonight");
			j("Dude, so not cool");
			j("I am trying to help you here");
			Wait(1000);
			j("you would be lucky if she replies .. wait");
			Wait(10000);
			endGame();
		}
		});
	}
	if($.scared)
	{
		$TEA = true;
		N("did I mention T.P.P");
		p("No, nothing like that");
		Choose({
			"don't be scared": function(){
				p("don't be scared, you were cool");
			},
			"nah! but you did mentioned P.M.S" : function(){
				p("nah! but you did mentioned P.M.S");
				j("Dude, so not cool");
				j("I am trying to help you here");
				Wait(1000);
				j("You would be lucky if she replies .. wait");
				Wait(10000);
				N("sorry about that. ruff days you see.");
			},
			"yes, you did " : function(){
				p("you kindda did, but I promise to keep it a secret");
				N("SHIT! SHIT! SHIT! we need to meet");
				j("That was 1 way out");
				j("Now you can also kidnap her, right ? fool.");
				j("Telling lies and shit. ");
				j("Liam Neeson, will take care of you");
			}
			});
	}
	N("I was looking at yesterday's photos");
	if($.photos)
	{
		N("like you suggested");
	}
	if($.myHeight)
	{
		N("you were in red shirt.");
	}
	else
	{
		N("forgive me, but are the cute one or the other one ?");
		Choose({
			"cute one of course": function(){
				p("ya! In that green shirt. That's me");
				j("lying, not cool");
				j("lets see where you take this");
				if($.google)
				{
					N("Liar! I know nerds like you");
					$.abuse = true;
					endGame();
				}
				if($.twitter)
				{
					N("hmm..")
				}
			},
			"my mom thinks I am cute" : function(){
				p("you were a nicer person yesterday");
				p("but, I can assure you, my mom thinks I am cute");
				Wait(100);
				mom();
			},
			"well you said I was alright" : function(){
				
			}
			});
	}
}


function mom()
{
	N("you still live with your mom ?");
	Choose({
		"yes, of course I am 17" : function(){
			p("yes, of course I am 17")
			j("You are not even of age");
			j("Ha Ha");
			j("Kiddo");
			j("I'll still look out for you");
			Wait(1000);
			endGame();
			j("I tried.Sorry");
		},
		"she needs me, can't move much" : function(){
			p("She has a medical thing");
			p("Can't maneuver much");
			p("But she's cool");
			Choose({
				"she would love to meet you":function(){
					p("She would love to meet you")
					endGame();
				},
				"say nothing at all" : function(){
					p("nevermind..");
				}
			})
		}
	});
}