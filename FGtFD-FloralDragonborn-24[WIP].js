var iFileName = "FGtFD-FloralDragonborn-24.js";
RequiredSheetVersion("24.0.0", "24.1.0");

/*
   The Floral Dragonborn race is included in "The Field Guide to Floral Dragons: Floral Dragonborns" for D&D 5e.
   FGtFD and the Floral Dragonborn race are created and copyrighted by Hit Point Press Inc and Verity Lane.
   Website: https://floraldragons.com/
   Buy from Hit Point Press: https://hitpointpress.com/products/the-field-guide-to-floral-dragons-dragonborn-pdf/
*/

SourceList["FGtFD"] = {
    name : "The Field Guide to Floral Dragons: Floral Dragonborns",
    abbreviation : "FGtFD",
    url : "https://floraldragons.com/",
    date : "2025",
};

// Floral Dragonborn Race
RaceList["Floral Dragonborn"] = {
	regExpSearch : /(?:floral(?: dragonborn)?|dragonborn)/i,
	name : "Floral Dragonborn",
	sortname : "Floral Dragonborn",
	source : [["FGtFD", 0]],
	plural : "Floral Dragonborns",
	size : [[3, 4]], // Medium and Small
	speed : {
		walk : { spd : 30, enc : 20 }
	},
	vision : ["Tremorsense", 60],
	languageProfs : ["Common", "Draconic"],
	trait : "**Floral Dragonborn**"+
		"\n \u2022 ##Floral Legacy##. Use 'Racial Options' above to choose a Floral Legacy, affecting my Skill Proficiency, FLoral Breath Weapon, and Floral Fortitude."+
		"\n \u2022 ##Draconic Blossoming##. Starting at 5th level, I can use a bonus action to regain 1d4 hit points at the start of each of my turns for one minute. For the duration, any creature that attacks me must first succeed a Cha saving throw (DC = 8 + Cha mod + PB) or be forced to choose a different target. Use once per long rest."+
		"\n \u2022 ##Floral Breath Weapon##. As an attack action, I can exhale a 15-foot cone of magical petals. Con saving throw (DC = 8 + Cha mod + PB), take 2d6 poison dmg on a failure, or half as much dmg on a success. Dmg increases: 3d6 at 6th level, 4d6 at 11th level, and 5d6 at 16th level. Use equal to PB per long rest."+,
		"\n \u2022 ##Floral Fortitude##. I have advantage on saving throws against a condition determined by my Floral Legacy.",
	weaponOptions: [{
        regExpSearch: /^(?=.*(?:floral|breath|weapon)).*$/i,
        name: "Floral Breath Weapon",
        source: ["FGtFD", 0],
        ability: X,
        type: "X",
        damage: [0, 0, ["magical","slashing"]],
        range: "15-ft cone",
        description: "X",
        abilitytodamage: false,
        dc: true,
        dbBreathWeapon: true,
        selectNow: true,
        isAlwaysProf: true,
    }],
	features : {
		"Floral Legacy" : {
            name: "Floral Legacy",
            limfeaname: "Breath Weapon",
            minlevel: 1,
            usages: "Proficiency bonus per ",
            usagescalc: "event.value = How('Proficiency Bonus');",
            additional: levels.map(function(n) {
                return (n < 5 ? 1 : n < 11 ? 2 : n < 17 ? 3 : 4) + 'd8';
            }),
            recovery: "long rest",
            action: [
                ["action"]
            ],
            calcChanges: {
                atkAdd: [
                    function(fields, v) {
                        if (v.theWea.dbBreathWeapon && CurrentRace.known === 'Floral Dragonborn') {
                            fields.Damage_Die = (CurrentRace.level < 5 ? 1 : CurrentRace.level < 11 ? 2 : CurrentRace.level < 17 ? 3 : 4) + 'd8';
                            if (CurrentRace.variant) {
                                fields.Damage_Type = CurrentRace.dmgres[0];
                            }
                        }
                    },
                    "",
                    1
                ]
            }
        },
		"Draconic Blossoming" : {
			name : "Draconic Blossoming",
			minlevel : 5,
			usages: 1,
			recovery : "long rest",
			action : [["bonus action", ""]]
		},
	},
	variants: ["beauty", "guardian", "healer", "poisoner", "waterplant", "wildflower"],
	age : "",
	height : "",
	weight : "",
	heightMetric : "",
	weightMetric : "",
};

RaceSubList["floral-dragonborn-beauty"] = {
    regExpSearch: /beauty/i,
    name: "Floral Dragonborn (Beauty)",
    trait: "X",
    immune : ["X"],
};

RaceSubList["floral-dragonborn-guardian"] = {
    regExpSearch: /guardian/i,
    name: "Floral Dragonborn (Guardian)",
    trait: "X",
    immune : ["X"],
};

RaceSubList["floral-dragonborn-healer"] = {
    regExpSearch: /healer/i,
    name: "Floral Dragonborn (Healer)",
    trait: "X",
    immune : ["X"],
};

RaceSubList["floral-dragonborn-poisoner"] = {
    regExpSearch: /poisoner/i,
    name: "Floral Dragonborn (Poisoner)",
    trait: "X",
    immune : ["X"],
};

RaceSubList["floral-dragonborn-waterplant"] = {
    regExpSearch: /waterplant/i,
    name: "Floral Dragonborn (Waterplant)",
    trait: "X",
    immune : ["X"],
};

RaceSubList["floral-dragonborn-wildflower"] = {
    regExpSearch: /wildflower/i,
    name: "Floral Dragonborn (Wildflower)",
    trait: "X",
    immune : ["X"],
};