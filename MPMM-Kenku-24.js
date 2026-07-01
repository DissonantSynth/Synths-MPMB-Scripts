var iFileName = "MPMM-Kenku-24.js";
RequiredSheetVersion("24.0.0", "24.1.0");
SourceList["MP:MM"] = {
    name : "Mordenkainen Presents: Monsters of the Multiverse",
    abbreviation : "MP:MM",
    abbreviationSpellsheet : "MM",
    group: "Campaign Sourcebooks",
    campaignSetting: "N/A",
    url : "https://marketplace.dndbeyond.com/category/mordenkainen-presents-monsters-of-the-multiverse",
    date : "2022/05/17"
};
//Species
RaceList.kenku24 = {
    regExpSearch : /kenku24/i,
    name : "Kenku",
    source : [["MP:MM", 24]],
    plural : "Kenku",
    size : [3, 4],
    speed : {
        walk : { spd : 30, enc : 20 },
        climb : { spd : "walk", enc : "walk" },
    },
    vision : [],
    dmgres : [],
    weaponOptions : [],
    extraLimitedFeatures : [{
		name : "Vampiric Bite",
		additional : "empower myself",
		usages : "Proficiency bonus per ",
		usagescalc : "event.value = How('Proficiency Bonus')",
		recovery : "long rest"
	}],
    trait : [
		"**Kenku**",
		"##\u25C6 Expert Duplication##. When I copy writing or craftwork produced by myself or someone else, I have advantage on any ability checks I make to produce an exact duplicate.",
		"##\u25C6 Kenku Recall##. Thanks to my supernaturally good memory, I have proficiency in two skills of my choice. Moreover, when I make an ability check using any skill in which I have proficiency, I can give myself advantage on the check before rolling the d20. I can give myself advantage in this way a number of times equal to my proficiency bonus, and I regain all expended uses when I finish a long rest.",
		"##\u25C6 Mimicry##. I can accurately mimic sounds I have heard, including voices. A creature that hears the sounds I make can tell they are imitations only with a successful Wisdom (Insight) check against a DC of 8 + my proficiency bonus + my Charisma modifier.",
	].join("\n"),
};