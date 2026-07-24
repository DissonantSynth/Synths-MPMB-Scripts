var iFileName = "FGtFD-FloralDragonborn-24[Beta].js";
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
RaceList["floral dragonborn"] = { // Object names must be lowercase
    regExpSearch : /^(?=.*floral)(?=.*dragonborn).*$/i,
    name : "Floral Dragonborn",
    sortname : "Floral Dragonborn",
    source : ["FGtFD", 0],
    plural : "Floral Dragonborns",
    size : [3, 4], // Medium and Small
    speed : {
        walk : { spd : 30, enc : 20 }
    },
    primaryAbility: ["Charisma"],
    vision : ["Tremorsense", 60],
    languageProfs : ["Common", "Draconic"],
    trait : "##Floral Dragonborn##" +
        "\n \u2022 ##Floral Legacy##. I choose a Floral Legacy. My choice grants a Skill Proficiency and affects my Floral Breath Weapon and Floral Fortitude." +
        "\n \u2022 ##Floral Breath Weapon##. As an Action, I can exhale a 15-foot cone of magical petals. Each creature in the area makes a Con saving throw (DC 8 + Cha mod + PB). On a failed save, the creature takes 1d8 magical slashing damage and triggers the Floral Legacy effect." +
        " On a successful save, the creature takes half as much damage. The damage increases by 1d8 when I reach 5th, 11th, and 17th level. Use a number of times equal to my PB per Long Rest." +
        "\n \u2022 ##Floral Fortitude##. I have advantage on saving throws against a condition determined by my Floral Legacy."+
        "\n \u2022 ##Draconic Blossoming##. Starting at 5th level, I can use a Bonus Action to regain 1d4 Hit Points at the start of each of my turns for 1 minute. During that time, any creature that attacks me must first succeed on a Cha saving throw (DC 8 + Cha mod + PB) or choose a different target. Use once per Long Rest." ,
    features : {
        "floral breath weapon" : {
            name : "Floral Breath Weapon",
            minlevel : 1,
            usages : "Proficiency bonus per ",
            usagescalc : "event.value = How('Proficiency Bonus');",
            additional : levels.map(function(n) {
                return (n < 5 ? 1 : n < 11 ? 2 : n < 17 ? 3 : 4) + 'd8';
            }),
            recovery : "long rest",
            action : ["action"],
            calcChanges : {
                atkAdd : [
                    function(fields, v) {
                        if (v.theWea.dbBreathWeapon && CurrentRace.known === 'floral dragonborn') {
                            fields.Damage_Die = (CurrentRace.level < 5 ? 1 : CurrentRace.level < 11 ? 2 : CurrentRace.level < 17 ? 3 : 4) + 'd8';
                        }
                    },
                    "",
                    1
                ]
            }
        },
        "draconic blossoming" : {
            name : "Draconic Blossoming",
            minlevel : 5,
            usages : 1,
            recovery : "long rest",
            action : ["bonus action"],
            description: "Starting at 5th level, I can use a Bonus Action to regain 1d4 Hit Points at the start of each of my turns for 1 minute." +
            " During that time, any creature that attacks me must first succeed on a Cha saving throw (DC 8 + Cha mod + PB) or choose a different target." +
            " Use once per Long Rest.",
        }
    },
    weaponOptions : [{
        regExpSearch : /^(?=.*floral)(?=.*breath)(?=.*weapon).*$/i,
        name : "Floral Breath Weapon",
        source : ["FGtFD", 0],
        ability : 3, // Consitution
        type : "Special",
        damage : [1, 8, "slashing"], // 1d8
        range : "15-ft cone",
        description : "Magical. Hits all in area. Con save. On success, half damage. On fail, Floral Legacy effect. Uses equal PB per long rest.",
        abilitytodamage : false,
        dc : true,
        dbBreathWeapon : true,
        selectNow : true,
        isAlwaysProf : true,
    }],
    age : " reach adulthood in their middle teens and live around 80 years",
    height : " are about 4 to 7 feet tall",
    weight : " weigh around 160 to 320 pounds",
    heightMetric : " are about 1,2 to 2,1 metres tall",
    weightMetric : " weigh around 70 to 150 kilograms"
};

// Floral Dragonborn (Beauty) Subrace
AddRacialVariant("floral dragonborn", "beauty", {
	regExpSearch : /^(?=.*floral)(?=.*dragonborn)(?=.*beauty).*$/i,
    name : "Beauty Floral Dragonborn",
    sortname : "Floral Dragonborn, Beauty",
    trait : "##Floral Dragonborn (Beauty)##" +
    "\n \u2022 ##Floral Legacy (Beauty)##. I gain proficiency in Persuasion and advantage on saving throws against the magical sleep condition. Each creature that fails my Floral Breath Weapon saving throw is charmed by me until the end of its next turn." +
    "\n \u2022 ##Floral Breath Weapon##. As an Action, I can exhale a 15-foot cone of magical petals. Each creature in the area makes a Con saving throw (DC 8 + Cha mod + PB). On a failed save, the creature takes 1d8 magical slashing damage and my Floral Legacy effect triggers." +
    " On a successful save, the creature takes half as much damage. The damage increases by 1d8 when I reach 5th, 11th, and 17th level. Use a number of times equal to my PB per Long Rest." +
    "\n \u2022 ##Floral Fortitude##. I have advantage on saving throws against the magical sleep condition (Floral Legacy)." +
    "\n \u2022 ##Draconic Blossoming##. Starting at 5th level, I can use a Bonus Action to regain 1d4 Hit Points at the start of each of my turns for 1 minute. During that time, any creature that attacks me must first succeed a Cha saving throw (DC 8 + Cha mod + PB) or choose a different target. Use once per Long Rest.",
    features : {
        "beauty floral legacy" : {
            name : "Floral Legacy (Beauty)",
            skills : ["Persuasion"],
            skillstxt : "Persuasion.",
            savetxt : {adv_vs : ["magical sleep"]}
        }
    }
});

// Floral Dragonborn (Guardian) Subrace
AddRacialVariant("floral dragonborn", "guardian", {
    regExpSearch : /^(?=.*floral)(?=.*dragonborn)(?=.*guardian).*$/i,
	name : "Guardian Floral Dragonborn",
    sortname : "Floral Dragonborn, Guardian",
    trait : "##Floral Dragonborn (Guardian)##" +
            "\n \u2022 ##Floral Legacy (Guardian)##. I gain proficiency in Perception and advantage on saving throws against the frightened condition. Each creature that fails my Floral Breath Weapon saving throw has disadvantage on attacks against creatures other than me until the end of its next turn." +
            "\n \u2022 ##Floral Breath Weapon##. As an Action, I can exhale a 15-foot cone of magical petals. Each creature in the area makes a Con saving throw (DC 8 + Cha mod + PB). On a failed save, the creature takes 1d8 magical slashing damage and my Floral Legacy effect triggers." +
            " On a successful save, the creature takes half as much damage. The damage increases by 1d8 when I reach 5th, 11th, and 17th level. Use a number of times equal to my PB per Long Rest." +
            "\n \u2022 ##Floral Fortitude##. I have advantage on saving throws against the frightened condition (Floral Legacy)." +
            "\n \u2022 ##Draconic Blossoming##. Starting at 5th level, I can use a Bonus Action to regain 1d4 Hit Points at the start of each of my turns for 1 minute. During that time, any creature that attacks me must first succeed a Cha saving throw (DC 8 + Cha mod + PB) or choose a different target. Use once per Long Rest.",
    features: {
        "guardian floral legacy" : {
            name : "Floral Legacy (Guardian)",
            skills : ["Perception"],
            skillstxt : "Perception.",
            savetxt : {adv_vs : ["frightened"]}
        }
    }
});

// Floral Dragonborn (Healer) Subrace
AddRacialVariant("floral dragonborn", "healer", {
	regExpSearch : /^(?=.*floral)(?=.*dragonborn)(?=.*healer).*$/i,
    name : "Healer Floral Dragonborn",
    sortname : "Floral Dragonborn, Healer",
    trait : "##Floral Dragonborn (Healer)##" +
            "\n \u2022 ##Floral Legacy (Healer)##. I gain proficiency in Medicine and advantage on saving throws against the exhaustion condition. One creature of my choice within 15 feet of me regains Hit Points equal to half the total amount of damage my Floral Breath Weapon dealt to creatures that failed their saving throws." +
            "\n \u2022 ##Floral Breath Weapon##. As an Action, I can exhale a 15-foot cone of magical petals. Each creature in the area makes a Con saving throw (DC 8 + Cha mod + PB). On a failed save, the creature takes 1d8 magical slashing damage and my Floral Legacy effect triggers." +
            " On a successful save, the creature takes half as much damage. The damage increases by 1d8 when I reach 5th, 11th, and 17th level. Use a number of times equal to my PB per Long Rest." +
            "\n \u2022 ##Floral Fortitude##. I have advantage on saving throws against the exhaustion condition (Floral Legacy)." +
            "\n \u2022 ##Draconic Blossoming##. Starting at 5th level, I can use a Bonus Action to regain 1d4 Hit Points at the start of each of my turns for 1 minute. During that time, any creature that attacks me must first succeed a Cha saving throw (DC 8 + Cha mod + PB) or choose a different target. Use once per Long Rest.",
    features : {
        "healer floral legacy" : {
            name : "Floral Legacy (Healer)",
            skills : ["Medicine"],
            skillstxt : "Medicine.",
            savetxt : {adv_vs : ["exhaustion"]}
        }
    }
});

// Floral Dragonborn (Poisoner) Subrace
AddRacialVariant("floral dragonborn", "poisoner", {
	regExpSearch : /^(?=.*floral)(?=.*dragonborn)(?=.*poisoner).*$/i,
    name : "Poisoner Floral Dragonborn",
    sortname : "Floral Dragonborn, Poisoner",
    trait : "##Floral Dragonborn (Poisoner)##" +
            "\n \u2022 ##Floral Legacy (Poisoner)##. I gain proficiency in Intimidation and advantage on saving throws against the poisoned condition. Each creature that fails my Floral Breath Weapon saving throw becomes poisoned until the end of its next turn." +
            "\n \u2022 ##Floral Breath Weapon##. As an Action, I can exhale a 15-foot cone of magical petals. Each creature in the area makes a Con saving throw (DC 8 + Cha mod + PB). On a failed save, the creature takes 1d8 magical slashing damage and my Floral Legacy effect triggers." +
            " On a successful save, the creature takes half as much damage. The damage increases by 1d8 when I reach 5th, 11th, and 17th level. Use a number of times equal to my PB per Long Rest." +
            "\n \u2022 ##Floral Fortitude##. I have advantage on saving throws against the poisoned condition (Floral Legacy)." +
            "\n \u2022 ##Draconic Blossoming##. Starting at 5th level, I can use a Bonus Action to regain 1d4 Hit Points at the start of each of my turns for 1 minute. During that time, any creature that attacks me must first succeed a Cha saving throw (DC 8 + Cha mod + PB) or choose a different target. Use once per Long Rest.",
    features : {
        "poisoner floral legacy" : {
            name : "Floral Legacy (Poisoner)",
            skills : ["Intimidation"],
            skillstxt : "Intimidation.",
            savetxt : {adv_vs : ["poisoned"]}
        }
    }
});

// Floral Dragonborn (Waterplant) Subrace
AddRacialVariant("floral dragonborn", "waterplant", {
	regExpSearch : /^(?=.*floral)(?=.*dragonborn)(?=.*waterplant).*$/i,
    name : "Waterplant Floral Dragonborn",
    sortname : "Floral Dragonborn, Waterplant",
    trait : "##Floral Dragonborn (Waterplant)##" +
            "\n \u2022 ##Floral Legacy (Waterplant)##. I gain proficiency in Athletics and advantage on saving throws against the restrained condition. Each creature that fails my Floral Breath Weapon saving throw is knocked prone." +
            "\n \u2022 ##Floral Breath Weapon##. As an Action, I can exhale a 15-foot cone of magical petals. Each creature in the area makes a Con saving throw (DC 8 + Cha mod + PB). On a failed save, the creature takes 1d8 magical slashing damage and my Floral Legacy effect triggers." +
            " On a successful save, the creature takes half as much damage. The damage increases by 1d8 when I reach 5th, 11th, and 17th level. Use a number of times equal to my PB per Long Rest." +
            "\n \u2022 ##Floral Fortitude##. I have advantage on saving throws against the restrained condition (Floral Legacy)." +
            "\n \u2022 ##Draconic Blossoming##. Starting at 5th level, I can use a Bonus Action to regain 1d4 Hit Points at the start of each of my turns for 1 minute. During that time, any creature that attacks me must first succeed a Cha saving throw (DC 8 + Cha mod + PB) or choose a different target. Use once per Long Rest.",
    features: {
        "waterplant floral legacy" : {
            name : "Floral Legacy (Waterplant)",
            skills : ["Athletics"],
            skillstxt : "Athletics.",
            savetxt : {adv_vs : ["restrained"]}
        }
    }
});

// Floral Dragonborn (Wildflower) Subrace
AddRacialVariant("floral dragonborn", "wildflower", {
	regExpSearch : /^(?=.*floral)(?=.*dragonborn)(?=.*wildflower).*$/i,
    name : "Wildflower Floral Dragonborn",
    sortname : "Floral Dragonborn, Wildflower",
    trait : "##Floral Dragonborn (Wildflower)##" + 
            "\n \u2022 ##Wildflower Legacy##. I gain proficiency in Acrobatics and advantage on saving throws against the charmed condition. I can move without provoking opportunity attacks until the end of my next turn. At least one creature must fail its saving throw for this effect to trigger." +
            "\n \u2022 ##Floral Breath Weapon##. As an Action, I can exhale a 15-foot cone of magical petals. Each creature in the area makes a Con saving throw (DC 8 + Cha mod + PB). On a failed save, the creature takes 1d8 magical slashing damage and my Floral Legacy effect triggers." +
            " On a successful save, the creature takes half as much damage. The damage increases by 1d8 when I reach 5th, 11th, and 17th level. Use a number of times equal to my PB per Long Rest." +
            "\n \u2022 ##Floral Fortitude##. I have advantage on saving throws against the charmed condition (Floral Legacy)." +
            "\n \u2022 ##Draconic Blossoming##. Starting at 5th level, I can use a Bonus Action to regain 1d4 Hit Points at the start of each of my turns for 1 minute. During that time, any creature that attacks me must first succeed a Cha saving throw (DC 8 + Cha mod + PB) or choose a different target. Use once per Long Rest.",
    features: {
        "wildflower floral legacy" : {
            name : "Floral Legacy (Wildflower)",
            skills : ["Acrobatics"],
            skillstxt : "Acrobatics.",
            savetxt : {adv_vs : ["charmed"]}
        }
    }
});
