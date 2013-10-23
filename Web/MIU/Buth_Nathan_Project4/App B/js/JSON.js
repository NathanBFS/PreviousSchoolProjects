/*
 Nathan Buth
 3-22-2012
 Project 4
 MIU 1203
*/

var json = {
    "weapon1": {
        "weaponName": ["Weapon Name:", "Beretta Nano"],
        "weaponCategory": ["Weapon Category:", "Handgun"],
        "deadly": ["Deadly:", "Almost Always"],
        "liked": ["Liked:", "Yes"],
        "difficulty": ["Difficulty:", "4"],
        "otherDetails": ["Other Details:", "An ultra-compact 9mm pistol."]
    },
    "weapon2": {
        "weaponName": ["Weapon Name:", "Uzi Carbine"],
        "weaponCategory": ["Weapon Category:", "SMG"],
        "deadly": ["Deadly:", "Almost Always"],
        "liked": ["Liked:", "Yes"],
        "difficulty": ["Difficulty:", "6"],
        "otherDetails": ["Other Details:", "A legal civilian variant of the popular Uzi."]
    },
    "weapon3": {
        "weaponName": ["Weapon Name:", "Serbu Super Shorty 9"],
        "weaponCategory": ["Weapon Category:", "Shotgun"],
        "deadly": ["Deadly:", "Almost Always"],
        "liked": ["Liked:", "No"],
        "difficulty": ["Difficulty:", "8"],
        "otherDetails": ["Other Details:", "A very compact 12 gauge shotgun with a pistol grip."]
    },
    "weapon4": {
        "weaponName": ["Weapon Name:", "Barrett 82A1"],
        "weaponCategory": ["Weapon Category:", "Rifle"],
        "deadly": ["Deadly:", "Almost Always"],
        "liked": ["Liked:", "Yes"],
        "difficulty": ["Difficulty:", "10"],
        "otherDetails": ["Other Details:", "A semi-automatic .50 caliber rifle."]
    },
    "weapon5": {
        "weaponName": ["Weapon Name:", "Assassin SD"],
        "weaponCategory": ["Weapon Category:", "Bow"],
        "deadly": ["Deadly:", "Almost Always"],
        "liked": ["Liked:", "Yes"],
        "difficulty": ["Difficulty:", "10"],
        "otherDetails": ["Other Details:", "A sleek and accurate compound bow."]
    },
    "weapon6": {
        "weaponName": ["Weapon Name:", "Katana"],
        "weaponCategory": ["Weapon Category:", "Sword"],
        "deadly": ["Deadly:", "Almost Always"],
        "liked": ["Liked:", "Yes"],
        "difficulty": ["Difficulty:", "10"],
        "otherDetails": ["Other Details:", "A Japanese two-handed sword with a long curve blade with a single-edge."]
    },
    "weapon7": {
        "weaponName": ["Weapon Name:", "Lutel Italian Battle Axe"],
        "weaponCategory": ["Weapon Category:", "Axe"],
        "deadly": ["Deadly:", "Almost Always"],
        "liked": ["Liked:", "No"],
        "difficulty": ["Difficulty:", "5"],
        "otherDetails": ["Other Details:", "A one-handed axe with a square-shaped counter weight."]
    },
    "weapon8": {
        "weaponName": ["Weapon Name:", "Tanto"],
        "weaponCategory": ["Weapon Category:", "Dagger"],
        "deadly": ["Deadly:", "Almost Always"],
        "liked": ["Liked:", "No"],
        "difficulty": ["Difficulty:", "3"],
        "otherDetails": ["Other Details:", "A Japanese dagger often used by samurai to recover honor through suicide."]
    },
    "weapon9": {
        "weaponName": ["Weapon Name:", "Iberian Mace"],
        "weaponCategory": ["Weapon Category:", "Mace"],
        "deadly": ["Deadly:", "Almost Always"],
        "liked": ["Liked:", "No"],
        "difficulty": ["Difficulty:", "6"],
        "otherDetails": ["Other Details:", "Has a wooden haft with steel spikes on one end."]
    },
    "weapon10": {
        "weaponName": ["Weapon Name:", "C4"],
        "weaponCategory": ["Weapon Category:", "Explosive"],
        "deadly": ["Deadly:", "Almost Always"],
        "liked": ["Liked:", "Yes"],
        "difficulty": ["Difficulty:", "2"],
        "otherDetails": ["Other Details:", "A kind of plastic explosive."]
    },
    "weapon11": {
        "weaponName": ["Weapon Name:", "Cyanide"],
        "weaponCategory": ["Weapon Category:", "Other"],
        "deadly": ["Deadly:", "Almost Always"],
        "liked": ["Liked:", "No"],
        "difficulty": ["Difficulty:", "7"],
        "otherDetails": ["Other Details:", "It is rapid-acting deadly chemical."]
    },
    "weapon12": {
        "weaponName": ["Weapon Name:", ".44 Magnum"],
        "weaponCategory": ["Weapon Category:", "Handgun"],
        "deadly": ["Deadly:", "Almost Always"],
        "liked": ["Liked:", "Yes"],
        "difficulty": ["Difficulty:", "7"],
        "otherDetails": ["Other Details:", "A handgun with the power of a large rifle."]
    },
    "weapon13": {
        "weaponName": ["Weapon Name:", "P90"],
        "weaponCategory": ["Weapon Category:", "SMG"],
        "deadly": ["Deadly:", "Almost Always"],
        "liked": ["Liked:", "Yes"],
        "difficulty": ["Difficulty:", "8"],
        "otherDetails": ["Other Details:", "Sleek gun with clear magazines that you can see while firing."]
    },
    "weapon14": {
        "weaponName": ["Weapon Name:", "12 Gage"],
        "weaponCategory": ["Weapon Category:", "Shotgun"],
        "deadly": ["Deadly:", "Almost Always"],
        "liked": ["Liked:", "No"],
        "difficulty": ["Difficulty:", "5"],
        "otherDetails": ["Other Details:", "Short range but devastating if hit."]
    },
    "weapon15": {
        "weaponName": ["Weapon Name:", "M4 A1 Carbine"],
        "weaponCategory": ["Weapon Category:", "Rifle"],
        "deadly": ["Deadly:", "Almost Always"],
        "liked": ["Liked:", "Yes"],
        "difficulty": ["Difficulty:", "7"],
        "otherDetails": ["Other Details:", "Standard issue fully automatic assault rifle."]
    },
    "weapon16": {
        "weaponName": ["Weapon Name:", "Practice Bow"],
        "weaponCategory": ["Weapon Category:", "Bow"],
        "deadly": ["Deadly:", "Sometimes"],
        "liked": ["Liked:", "No"],
        "difficulty": ["Difficulty:", "8"],
        "otherDetails": ["Other Details:", "A bow that shoots dull arrows for practice purposes."]
    },
    "weapon17": {
        "weaponName": ["Weapon Name:", "Frostmourne"],
        "weaponCategory": ["Weapon Category:", "Sword"],
        "deadly": ["Deadly:", "Almost Always"],
        "liked": ["Liked:", "Yes"],
        "difficulty": ["Difficulty:", "10"],
        "otherDetails": ["Other Details:", "Sword used by the Litch King."]
    },
    "weapon18": {
        "weaponName": ["Weapon Name:", "Wood Axe"],
        "weaponCategory": ["Weapon Category:", "Axe"],
        "deadly": ["Deadly:", "Rarely"],
        "liked": ["Liked:", "No"],
        "difficulty": ["Difficulty:", "3"],
        "otherDetails": ["Other Details:", "A blunt, thicker bladed axe meant for chopping wood."]
    },
    "weapon19": {
        "weaponName": ["Weapon Name:", "Swiss Army Knife"],
        "weaponCategory": ["Weapon Category:", "Dagger"],
        "deadly": ["Deadly:", "Rarely"],
        "liked": ["Liked:", "Yes"],
        "difficulty": ["Difficulty:", "1"],
        "otherDetails": ["Other Details:", "A pocket knife and miniature survival tool."]
    },
    "weapon20": {
        "weaponName": ["Weapon Name:", "Big Stick"],
        "weaponCategory": ["Weapon Category:", "Mace"],
        "deadly": ["Deadly:", "Sometimes"],
        "liked": ["Liked:", "No"],
        "difficulty": ["Difficulty:", "4"],
        "otherDetails": ["Other Details:", "A big, blunt stick."]
    },
    "weapon21": {
        "weaponName": ["Weapon Name:", "Claymore"],
        "weaponCategory": ["Weapon Category:", "Explosive"],
        "deadly": ["Deadly:", "Almost Always"],
        "liked": ["Liked:", "Yes"],
        "difficulty": ["Difficulty:", "6"],
        "otherDetails": ["Other Details:", "A trap type bomb that explodes when its sensors are triggered."]
    },
    "weapon22": {
        "weaponName": ["Weapon Name:", "Rubber Chicken"],
        "weaponCategory": ["Weapon Category:", "Other"],
        "deadly": ["Deadly:", "Rarely"],
        "liked": ["Liked:", "Yes"],
        "difficulty": ["Difficulty:", "0"],
        "otherDetails": ["Other Details:", "Hit people as much as you like, this thing probably won't do anything."]
    },
    "weapon23": {
        "weaponName": ["Weapon Name:", "Water Gun"],
        "weaponCategory": ["Weapon Category:", "Handgun"],
        "deadly": ["Deadly:", "Rarely"],
        "liked": ["Liked:", "Yes"],
        "difficulty": ["Difficulty:", "0"],
        "otherDetails": ["Other Details:", "Great for pool centered war games but useless in real combat."]
    },
    "weapon24": {
        "weaponName": ["Weapon Name:", "MP5"],
        "weaponCategory": ["Weapon Category:", "SMG"],
        "deadly": ["Deadly:", "Almost Always"],
        "liked": ["Liked:", "Yes"],
        "difficulty": ["Difficulty:", "7"],
        "otherDetails": ["Other Details:", "A light weight SMG often used for stealth missions."]
    },
    "weapon25": {
        "weaponName": ["Weapon Name:", "The Enforcer"],
        "weaponCategory": ["Weapon Category:", "Shotgun"],
        "deadly": ["Deadly:", "Almost Always"],
        "liked": ["Liked:", "Yes"],
        "difficulty": ["Difficulty:", "10"],
        "otherDetails": ["Other Details:", "Great gun for keeping in check and your shoulder out of alignment."]
    },
    "weapon26": {
        "weaponName": ["Weapon Name:", "22 Caliber"],
        "weaponCategory": ["Weapon Category:", "Rifle"],
        "deadly": ["Deadly:", "Sometimes"],
        "liked": ["Liked:", "No"],
        "difficulty": ["Difficulty:", "3"],
        "otherDetails": ["Other Details:", "A beginner rifle usually used for hunting."]
    },
    "weapon27": {
        "weaponName": ["Weapon Name:", "Horn Bow"],
        "weaponCategory": ["Weapon Category:", "Bow"],
        "deadly": ["Deadly:", "Almost Always"],
        "liked": ["Liked:", "Yes"],
        "difficulty": ["Difficulty:", "10"],
        "otherDetails": ["Other Details:", ""]
    },
    "weapon28": {
        "weaponName": ["Weapon Name:", "Frostmourne"],
        "weaponCategory": ["Weapon Category:", "Sword"],
        "deadly": ["Deadly:", "Almost Always"],
        "liked": ["Liked:", "Yes"],
        "difficulty": ["Difficulty:", "10"],
        "otherDetails": ["Other Details:", "Sword used by the Litch King."]
    },
    "weapon29": {
        "weaponName": ["Weapon Name:", "Throwing Axe"],
        "weaponCategory": ["Weapon Category:", "Axe"],
        "deadly": ["Deadly:", "Almost Always"],
        "liked": ["Liked:", "No"],
        "difficulty": ["Difficulty:", "8"],
        "otherDetails": ["Other Details:", "A small axe balanced to be the perfect weapon to throw at somebody."]
    },
    "weapon30": {
        "weaponName": ["Weapon Name:", "Stiletto"],
        "weaponCategory": ["Weapon Category:", "Dagger"],
        "deadly": ["Deadly:", "Sometimes"],
        "liked": ["Liked:", "no"],
        "difficulty": ["Difficulty:", "7"],
        "otherDetails": ["Other Details:", "A dagger with a long, sharp blade."]
    },
    "weapon31": {
        "weaponName": ["Weapon Name:", "Flail"],
        "weaponCategory": ["Weapon Category:", "Mace"],
        "deadly": ["Deadly:", "Almost Always"],
        "liked": ["Liked:", "Yes"],
        "difficulty": ["Difficulty:", "9"],
        "otherDetails": ["Other Details:", "A mace similar to a morning star except the ball is on a chain attached to the handle."]
    },
    "weapon32": {
        "weaponName": ["Weapon Name:", "Fireworks"],
        "weaponCategory": ["Weapon Category:", "Explosive"],
        "deadly": ["Deadly:", "Rarely"],
        "liked": ["Liked:", "Yes"],
        "difficulty": ["Difficulty:", "3"],
        "otherDetails": ["Other Details:", "Explosive meant to make beautiful explosions up in the sky."]
    },
    "weapon33": {
        "weaponName": ["Weapon Name:", "Taser"],
        "weaponCategory": ["Weapon Category:", "Other"],
        "deadly": ["Deadly:", "Rarely"],
        "liked": ["Liked:", "Yes"],
        "difficulty": ["Difficulty:", "5"],
        "otherDetails": ["Other Details:", "Meant for stunning and subduing an attacker."]
    }
};