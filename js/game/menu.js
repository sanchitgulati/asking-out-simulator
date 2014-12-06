function Start(){

	$ = {};
	$.count = 0;
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
		"We met yesterday.": function(){ $.myname = true; metYesterday("I am dave from last night")},
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
	j("I am Sanchit Gulati, and this framework is from ncase");
	j("who made the famous 'Coming Out Simulator 2014' ");
	j("now lets get back to the game. Best Of Luck.");
	backFromAbout();
}

function twitter(){
	p("I have been following you");
	p("on twitter :P");
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
	j("bring it back, last chance");
	Choose({
	"We met yesterday..": function(){
		$.myHeight = true;
		$.myname = true;
		$.twitter = true;
		$.memory = true;
		metYesterday("Tash's party!! I am dave, 5' 11 . dimple cheeks ? remember ?");
	},
	"We had burritos..": function(){
		$.burrito = true;
		$.twitter = true;
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
	else
	{
		$.TEA = true;
		p("yesterday with you and your T.P.P shit");
		teaEnd();
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
	Wait(500);
	N("oh!");
	Wait(500);
	idk();
}


function idk()
{
	N("yesterday ?");

	if($.twitter)
	{
		Wait(500);
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
			terminator("but I can sense, you use to like the old terminator a lot");
		}
		});
	}
	else{
		ifgoogle();
	}
}

function ifgoogle(){
	if($.google)
	{
		N("you also googled me.");
		N("Are you a freak ? I should runway from");
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
			Wait(500);
			N("what else did I told you about");
			N("This is so freaky, I never got this drunk before");
			$.scared = true;
			memories();
		}
		});
	}
	else
	{
		cont();
	}
}

function cont(){

		Wait(500);
		N("still hungover ! sorry!");
		N("who are you!");
		p("I was afraid this would happen");
		p("You drank a lot, yesterday");
		N("No Shit !");
		Choose({
		"ask her to search for photos": function(){
			p("try looking at your photos on mobile, I remember clicking few");
			$.scared = true;
			$.photos = true;
			memories();
		},
		"talk about the new terminator": function(){
			$.t_sucks = true;
			terminator("So, new terminator sucks, right ?")
		},
		"ask her out": function(){
			$.jackDaniels = true;
			askherout();
		}
		});
}

function terminator(message)
{
	p(message);
	if(!$.seen_twitter)
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
	ifgoogle();
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
	{
		N("Burn in hell");
		if($.burrito)
			N("Take that burrito in your ass while you are at it");
	}
	else
		N("Enjoy your life");
	j("GAME OVER for you bro! Better luck next time.");
}

function memories()
{
	if($.awkard)
		j("and this isn't helping");
	if($.scared)
	{
		j("yes, get her scared that will help.");
		j("[[SARCASM intended]]");
	}

	j("PS: Don't blow this");
	j("PS: Girls like assertive men");
	p("take your time, see what you remember");
	if($.awkard)
	{
		N("did we did something stupid ??");
		Wait(100);
		N("NO");
		N("I remember coming home alone");
		Choose({
		"yes yes you were alone": function(){
			p("oh god! No. it never went that far");
			askherout();
		},
		"sadly, but .." : function(){
			p("sadly, but I was hoping we could change that tonight");
			j("Dude, so not cool");
			j("I am trying to help you here");
			Wait(100);
			j("you would be lucky if she replies .. wait");
			Wait(1000);
			endGame();
		}
		});
	}
	else if($.scared)
	{
		$.TEA = true;
		N("did I mention T.P.P");
		p("No, nothing like that");
		Choose({
			"don't be scared": function(){
				p("don't be scared, you were cool");
				cuteornot();
			},
			"nah! but you did mentioned P.M.S" : function(){
				p("nah! but you did mentioned P.M.S");
				j("Dude, so not cool");
				j("I am trying to help you here");
				Wait(100);
				j("You would be lucky if she replies .. wait");
				Wait(1000);
				N("sorry about that. ruff days you see.");
				cuteornot();
			},
			"yes, you did " : function(){
				p("you kindda did, but I promise to keep it a secret");
				teaEnd();

			}
			});
	}
	else
	{
		cuteornot();
	}
}

function teaEnd()
{
	N("SHIT! SHIT! SHIT! we need to meet");
	j("That was 1 way out");
	j("Now you can also kidnap her, right ? fool.");
	j("Telling lies and shit. ");
	j("Liam Neeson, will take care of you");
	j("GAME OVER");
}

function cuteornot()
{
	N("I was looking at yesterday's photos");
	if($.photos)
	{
		N("like you suggested");
	}
	if($.myHeight)
	{
		N("you were in red shirt.");
		askherout();
	}
	else
	{
		N("forgive me, but are the cute one or the other one ?");
		Choose({
		"cute one of course": function(){
			p("ya! In that green shirt. That's me");
			j("lying, not cool");
			j("lets see where this gets you");
			if($.google)
			{
				N("Liar! I know nerds like you");
				$.abuse = true;
				endGame();
			}
			else if($.twitter)
			{
				$.lair = true;
				N("hmm..");
				askherout();
			}
			else
			{
				askherout();
			}
		},
		"my mom thinks I am cute" : function(){
			p("you were a nicer person yesterday");
			p("but, I can assure you, my mom thinks I am cute");
			Wait(100);
			mom();
		},
		"well you said I was alright" : function(){
			p("this is sad");
			p("you thought I was funny");
			Choose({
				"[you felt bad]":function(){
					p("go **** yourself");
					j("having fake self esteem, are we ?");
					j("GAME OVER");
				},
				"[she wasn't the first calling you ugly]" : function(){
					p("I get that a lot, welcome to the club");
					N("don't get me wrong");
					N("I am sure, you are a lovely person");
					$.pity = true;
					askherout();
				}
			})
		}
		});
	}
}

function askherout()
{
	p("you wanna go out for ..");
	Choose({
		"coffee": function(){
			$.dateType = 0;
			p("some coffee");
			reaction();
		},
		"drinks": function(){
			$.dateType = 1;
			p("pints of beer");
			reaction();
		},
		"movies":function(){
			$.dateType = 2;
			if($.seen_twitter)
				p("the new Hobbit movie");
			else
				p("the new jennifer aniston movie");
			reaction();
		},
		"brunch": function(){
			$.dateType = 3;
			p("some brunch");
			reaction();
		}
	})
}

function reaction()
{
	if($.jackDaniels)
	{
		endGame();
	}
	else
	{
		$.count ++;
		switch($.dateType)
		{
			case 0:
			{
				if($.pity)
				{
					N("Sure, a coffee can't hurt");
					if($.lair)
						N("Even if you are a lair");
					N("and you can tell all about yesterday");
					gameWin();
				}
				else
				{
					N("Sorry, last night was a mistake");
					endGame();
				}
				break;
			}
			case 1:
			{
				N("With his hangover ?");
				N("Are you kidding");
				tryAgain();
				break;
			}
			case 2:
			{
				if($.pity)
				{
					if($.seen_twitter)
					{
						N("That comes out in next week dumbo");
						N("also, already made plans with some friends");
						Choose({
							"let me know if I can join": function(){
								p("I am new here");
								p("Let me know if I can join");
								if($.lair)
								{
									N("I don't trust a thing you say.lair");
									$.abuse = true;
									endGame();
								}
								else
								{
									N("sure thing, i would confirm with my friends");
									j("FRIENDZONED");
									$.friend = true;
									gameWin();
								}
							},
							"good for you" : function(){
								p("Have fun");
								tryAgain();
							},
							"ah! that's sad, jennifer aniston then" : function(){
								p("ah! that's sad");
								p("what about the jennifer aniston movie this week");
								endGame();
							}
						})
					}
					else
					{
						N("Nah! I rest and cure this hangover of mine");
						endGame();
					}
				}
				else
				{
					if($.seen_twitter)
					{
						N("you are making plans 1 week in advance");
						endGame();
					}
					else
					{
						N("Nah! I rest and cure this hangover of mine");
						tryAgain();
					}
				}
			}
			case 3:
			{
				if($.photos)
				{
					N("your photos were strange");
				}
				N("oh! you are gay");
				N("Sorry i didn't knew");
				endGame();
			}
		}
	}

}

function tryAgain()
{
	p("Sorry about that");
	p("very unconsiderate of me");
	if($.count >= 2)
	{
		N("you are desperate aren't you");
		$.abuse = true;
		endGame();
	}
	else{
		p("Let me try again");
		p("so ..");
		askherout();
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
			Wait(100);
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
					$.pity = true;
					askherout();
				}
			})
		}
	});
}

function gameWin()
{
	j("GAME OVER");
	j("You Survived.");
	if($.friend)
		j("As a friend dumb ass");
	j("good luck coming back from here");
}