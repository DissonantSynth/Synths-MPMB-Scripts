var iFileName = "CCoR-Pterogoblin-24.js";
RequiredSheetVersion("24.0.0", "24.1.0");

/*
   The Pterogoblin race is included in "Caliya's Chronicle of Ruins" for D&D 5e.
   CCoR and the Pterogoblin race are created and copyrighted by Spectre Creations / TheArenaGuy / Tony Casper.
   The Pterogoblin race shared publicly for free on Reddit: https://www.reddit.com/r/DnDHomebrew/s/T9ZvGKbfPw
   TheArenaGuy on Reddit: https://www.reddit.com/user/TheArenaGuy/
   Spectre Creations Website: https://www.spectrecreations.com/
   CCoR on Kickstarter: https://www.kickstarter.com/projects/spectrecreations/chronicle-of-runes-5e
*/

SourceList["CCoR"] = {
    name : "Caliya's Chronicle of Runes",
    abbreviation : "CCoR",
    url : "https://www.spectrecreations.com/runes-signup",
    date : "2026", // Still in beta
};

// Pterogoblin Race
RaceList["pterogoblin-24"] = {
	regExpSearch : /pterogoblin/i,
	name : "Pterogoblin",
	sortname : "Pterogoblin (24)",
	source : [["CCoR", 0]], // CCoR not finalised
	plural : "Pterogoblins",
	size : 4, // Small
	speed : {
		walk : { spd : 30, enc : 20 },
		climb : { spd : 30, enc : 20 }
	},
	vision : [["Darkvision", 60]],
	languageProfs : ["Common", "Goblin"],
	trait : "**Pterogoblin**"+
		"\n \u2022 ##Echolocation##. As a bonus action, I can give myself Blindsight (30 ft). Uses equal my Proficiency Bonus and are regained after a long rest. I can't use this when deafened or muted."+
		"\n \u2022 ##Glide##. I can use my reaction to glide when falling. I descend 60 ft per round and move 2 ft horizontally per 1 ft descended. My glide can be interrupted. I take no falling damage if I land while gliding."+
		"\n \u2022 ##Nimble Escape##. As a bonus action on each of my turns, I can take the Disengage or Hide action.",
	features : {
		"echolocation" : {
			name : "Echolocation",
			minlevel : 1,
			usages: "Proficiency bonus per ",
            usagescalc: "event.value = How('Proficiency Bonus');",
			recovery : "long rest",
			additional : ProficiencyBonusList.map(function(n) { return n + " uses"; }),
			action : [["bonus action", ""]]
		},
		"glide" : {
			name : "Glide",
			minlevel : 1,
			action : [["reaction", ""]]
		},
		"nimble escape" : {
			name : "Nimble Escape",
			minlevel : 1,
			action : [["bonus action", "Disengage/Hide"]]
		}
	},
	age : " mature and age at twice the rate of humans",
	height : " grow to be roughly 3 feet tall",
	weight : " weigh 40-80 lbs",
	heightMetric : " are roughly 1 metre tall",
	weightMetric : " weigh 18-36 kg",
};
