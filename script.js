// FULL HARDCODED DATA
const episodesData = {
  "1": [{"ep": 1, "title": "Pilot"}, {"ep": 2, "title": "Wendigo"}, {"ep": 3, "title": "Dead in the Water"}, {"ep": 4, "title": "Phantom Traveler"}, {"ep": 5, "title": "Bloody Mary"}, {"ep": 6, "title": "Skin"}, {"ep": 7, "title": "Hook Man"}, {"ep": 8, "title": "Bugs"}, {"ep": 9, "title": "Home"}, {"ep": 10, "title": "Asylum"}, {"ep": 11, "title": "Scarecrow"}, {"ep": 12, "title": "Faith"}, {"ep": 13, "title": "Route 666"}, {"ep": 14, "title": "Nightmare"}, {"ep": 15, "title": "The Benders"}, {"ep": 16, "title": "Shadow"}, {"ep": 17, "title": "Hell House"}, {"ep": 18, "title": "Something Wicked"}, {"ep": 19, "title": "Provenance"}, {"ep": 20, "title": "Dead Man's Blood"}, {"ep": 21, "title": "Salvation"}, {"ep": 22, "title": "Devil's Trap"}],
  "2": [{"ep": 1, "title": "In My Time of Dying"}, {"ep": 2, "title": "Everybody Loves a Clown"}, {"ep": 3, "title": "Bloodlust"}, {"ep": 4, "title": "Children Shouldn't Play with Dead Things"}, {"ep": 5, "title": "Simon Said"}, {"ep": 6, "title": "No Exit"}, {"ep": 7, "title": "The Usual Suspects"}, {"ep": 8, "title": "Crossroad Blues"}, {"ep": 9, "title": "Croatoan"}, {"ep": 10, "title": "Hunted"}, {"ep": 11, "title": "Playthings"}, {"ep": 12, "title": "Nightshifter"}, {"ep": 13, "title": "Houses of the Holy"}, {"ep": 14, "title": "Born Under a Bad Sign"}, {"ep": 15, "title": "Tall Tales"}, {"ep": 16, "title": "Roadkill"}, {"ep": 17, "title": "Heart"}, {"ep": 18, "title": "Hollywood Babylon"}, {"ep": 19, "title": "Folsom Prison Blues"}, {"ep": 20, "title": "What Is and What Should Never Be"}, {"ep": 21, "title": "All Hell Breaks Loose: Part 1"}, {"ep": 22, "title": "All Hell Breaks Loose: Part 2"}],
  "3": [{"ep": 1, "title": "The Magnificent Seven"}, {"ep": 2, "title": "The Kids Are Alright"}, {"ep": 3, "title": "Bad Day at Black Rock"}, {"ep": 4, "title": "Sin City"}, {"ep": 5, "title": "Bedtime Stories"}, {"ep": 6, "title": "Red Sky at Morning"}, {"ep": 7, "title": "Fresh Blood"}, {"ep": 8, "title": "A Very Supernatural Christmas"}, {"ep": 9, "title": "Malleus Maleficarum"}, {"ep": 10, "title": "Dream a Little Dream of Me"}, {"ep": 11, "title": "Mystery Spot"}, {"ep": 12, "title": "Jus in Bello"}, {"ep": 13, "title": "Ghostfacers"}, {"ep": 14, "title": "Long-Distance Call"}, {"ep": 15, "title": "Time Is on My Side"}, {"ep": 16, "title": "No Rest for the Wicked"}],
  "4": [{"ep": 1, "title": "Lazarus Rising"}, {"ep": 2, "title": "Are You There, God? It's Me, Dean Winchester"}, {"ep": 3, "title": "In the Beginning"}, {"ep": 4, "title": "Metamorphosis"}, {"ep": 5, "title": "Monster Movie"}, {"ep": 6, "title": "Yellow Fever"}, {"ep": 7, "title": "It's the Great Pumpkin, Sam Winchester"}, {"ep": 8, "title": "Wishful Thinking"}, {"ep": 9, "title": "I Know What You Did Last Summer"}, {"ep": 10, "title": "Heaven and Hell"}, {"ep": 11, "title": "Family Remains"}, {"ep": 12, "title": "Criss Angel Is a Douchebag"}, {"ep": 13, "title": "After School Special"}, {"ep": 14, "title": "Sex and Violence"}, {"ep": 15, "title": "Death Takes a Holiday"}, {"ep": 16, "title": "On the Head of a Pin"}, {"ep": 17, "title": "It's a Terrible Life"}, {"ep": 18, "title": "The Monster at the End of This Book"}, {"ep": 19, "title": "Jump the Shark"}, {"ep": 20, "title": "The Rapture"}, {"ep": 21, "title": "When the Levee Breaks"}, {"ep": 22, "title": "Lucifer Rising"}],
  "5": [{"ep": 1, "title": "Sympathy for the Devil"}, {"ep": 2, "title": "Good God, Y'all!"}, {"ep": 3, "title": "Free to Be You and Me"}, {"ep": 4, "title": "The End"}, {"ep": 5, "title": "Fallen Idols"}, {"ep": 6, "title": "I Believe the Children Are Our Future"}, {"ep": 7, "title": "The Curious Case of Dean Winchester"}, {"ep": 8, "title": "Changing Channels"}, {"ep": 9, "title": "The Real Ghostbusters"}, {"ep": 10, "title": "Abandon All Hope..."}, {"ep": 11, "title": "Sam, Interrupted"}, {"ep": 12, "title": "Swap Meat"}, {"ep": 13, "title": "The Song Remains the Same"}, {"ep": 14, "title": "My Bloody Valentine"}, {"ep": 15, "title": "Dead Men Don't Wear Plaid"}, {"ep": 16, "title": "Dark Side of the Moon"}, {"ep": 17, "title": "99 Problems"}, {"ep": 18, "title": "Point of No Return"}, {"ep": 19, "title": "Hammer of the Gods"}, {"ep": 20, "title": "The Devil You Know"}, {"ep": 21, "title": "Two Minutes to Midnight"}, {"ep": 22, "title": "Swan Song"}],
  "6": [{"ep": 1, "title": "Exile on Main St."}, {"ep": 2, "title": "Two and a Half Men"}, {"ep": 3, "title": "The Third Man"}, {"ep": 4, "title": "Weekend at Bobby's"}, {"ep": 5, "title": "Live Free or Twihard"}, {"ep": 6, "title": "You Can't Handle the Truth"}, {"ep": 7, "title": "Family Matters"}, {"ep": 8, "title": "All Dogs Go to Heaven"}, {"ep": 9, "title": "Clap Your Hands If You Believe..."}, {"ep": 10, "title": "Caged Heat"}, {"ep": 11, "title": "Appointment in Samarra"}, {"ep": 12, "title": "Like a Virgin"}, {"ep": 13, "title": "Unforgiven"}, {"ep": 14, "title": "Mannequin 3: The Reckoning"}, {"ep": 15, "title": "The French Mistake"}, {"ep": 16, "title": "...And Then There Were None"}, {"ep": 17, "title": "My Heart Will Go On"}, {"ep": 18, "title": "Frontierland"}, {"ep": 19, "title": "Mommy Dearest"}, {"ep": 20, "title": "The Man Who Would Be King"}, {"ep": 21, "title": "Let It Bleed"}, {"ep": 22, "title": "The Man Who Knew Too Much"}],
  "7": [{"ep": 1, "title": "Meet the New Boss"}, {"ep": 2, "title": "Hello, Cruel World"}, {"ep": 3, "title": "The Girl Next Door"}, {"ep": 4, "title": "Defending Your Life"}, {"ep": 5, "title": "Shut Up, Dr. Phil"}, {"ep": 6, "title": "Slash Fiction"}, {"ep": 7, "title": "The Mentalists"}, {"ep": 8, "title": "Season Seven, Time for a Wedding!"}, {"ep": 9, "title": "How to Win Friends and Influence Monsters"}, {"ep": 10, "title": "Death's Door"}, {"ep": 11, "title": "Adventures in Babysitting"}, {"ep": 12, "title": "Time After Time"}, {"ep": 13, "title": "The Slice Girls"}, {"ep": 14, "title": "Plucky Pennywhistle's Magical Menagerie"}, {"ep": 15, "title": "Repo Man"}, {"ep": 16, "title": "Out with the Old"}, {"ep": 17, "title": "The Born-Again Identity"}, {"ep": 18, "title": "Party on, Garth"}, {"ep": 19, "title": "Of Grave Importance"}, {"ep": 20, "title": "The Girl with the Dungeons and Dragons Tattoo"}, {"ep": 21, "title": "Reading Is Fundamental"}, {"ep": 22, "title": "There Will Be Blood"}, {"ep": 23, "title": "Survival of the Fittest"}],
  "8": [{"ep": 1, "title": "We Need to Talk About Kevin"}, {"ep": 2, "title": "What's Up, Tiger Mommy?"}, {"ep": 3, "title": "Heartache"}, {"ep": 4, "title": "Bitten"}, {"ep": 5, "title": "Blood Brother"}, {"ep": 6, "title": "Southern Comfort"}, {"ep": 7, "title": "A Little Slice of Kevin"}, {"ep": 8, "title": "Hunteri Heroici"}, {"ep": 9, "title": "Citizen Fang"}, {"ep": 10, "title": "Torn and Frayed"}, {"ep": 11, "title": "LARP and the Real Girl"}, {"ep": 12, "title": "As Time Goes By"}, {"ep": 13, "title": "Everybody Hates Hitler"}, {"ep": 14, "title": "Trial and Error"}, {"ep": 15, "title": "Man's Best Friend with Benefits"}, {"ep": 16, "title": "Remember the Titans"}, {"ep": 17, "title": "Goodbye Stranger"}, {"ep": 18, "title": "Freaks and Geeks"}, {"ep": 19, "title": "Taxi Driver"}, {"ep": 20, "title": "Pac-Man Fever"}, {"ep": 21, "title": "The Great Escapist"}, {"ep": 22, "title": "Clip Show"}, {"ep": 23, "title": "Sacrifice"}],
  "9": [{"ep": 1, "title": "I Think I'm Gonna Like It Here"}, {"ep": 2, "title": "Devil May Care"}, {"ep": 3, "title": "I'm No Angel"}, {"ep": 4, "title": "Slumber Party"}, {"ep": 5, "title": "Dog Dean Afternoon"}, {"ep": 6, "title": "Heaven Can't Wait"}, {"ep": 7, "title": "Bad Boys"}, {"ep": 8, "title": "Rock and a Hard Place"}, {"ep": 9, "title": "Holy Terror"}, {"ep": 10, "title": "Road Trip"}, {"ep": 11, "title": "First Born"}, {"ep": 12, "title": "Sharp Teeth"}, {"ep": 13, "title": "The Purge"}, {"ep": 14, "title": "Captives"}, {"ep": 15, "title": "#thinman"}, {"ep": 16, "title": "Blade Runners"}, {"ep": 17, "title": "Mother's Little Helper"}, {"ep": 18, "title": "Meta Fiction"}, {"ep": 19, "title": "Alex Annie Alexis Ann"}, {"ep": 20, "title": "Bloodlines"}, {"ep": 21, "title": "King of the Damned"}, {"ep": 22, "title": "Stairway to Heaven"}, {"ep": 23, "title": "Do You Believe in Miracles?"}],
  "10": [{"ep": 1, "title": "Black"}, {"ep": 2, "title": "Reichenbach"}, {"ep": 3, "title": "Soul Survivor"}, {"ep": 4, "title": "Paper Moon"}, {"ep": 5, "title": "Fan Fiction"}, {"ep": 6, "title": "Ask Jeeves"}, {"ep": 7, "title": "Girls, Girls, Girls"}, {"ep": 8, "title": "Hibbing 911"}, {"ep": 9, "title": "The Things We Left Behind"}, {"ep": 10, "title": "The Hunter Games"}, {"ep": 11, "title": "There's No Place Like Home"}, {"ep": 12, "title": "About a Boy"}, {"ep": 13, "title": "Halt & Catch Fire"}, {"ep": 14, "title": "The Executioner's Song"}, {"ep": 15, "title": "The Things They Carried"}, {"ep": 16, "title": "Paint It Black"}, {"ep": 17, "title": "Inside Man"}, {"ep": 18, "title": "Book of the Damned"}, {"ep": 19, "title": "The Werther Project"}, {"ep": 20, "title": "Angel Heart"}, {"ep": 21, "title": "Dark Dynasty"}, {"ep": 22, "title": "The Prisoner"}, {"ep": 23, "title": "Brother's Keeper"}],
  "11": [{"ep": 1, "title": "Out of the Darkness, Into the Fire"}, {"ep": 2, "title": "Form and Void"}, {"ep": 3, "title": "The Bad Seed"}, {"ep": 4, "title": "Baby"}, {"ep": 5, "title": "Thin Lizzie"}, {"ep": 6, "title": "Our Little World"}, {"ep": 7, "title": "Plush"}, {"ep": 8, "title": "Just My Imagination"}, {"ep": 9, "title": "O Brother Where Art Thou?"}, {"ep": 10, "title": "The Devil in the Details"}, {"ep": 11, "title": "Into the Mystic"}, {"ep": 12, "title": "Don't You Forget About Me"}, {"ep": 13, "title": "Love Hurts"}, {"ep": 14, "title": "The Vessel"}, {"ep": 15, "title": "Beyond the Mat"}, {"ep": 16, "title": "Safe House"}, {"ep": 17, "title": "Red Meat"}, {"ep": 18, "title": "Hell's Angel"}, {"ep": 19, "title": "The Chitters"}, {"ep": 20, "title": "Don't Call Me Shurley"}, {"ep": 21, "title": "All in the Family"}, {"ep": 22, "title": "We Happy Few"}, {"ep": 23, "title": "Alpha and Omega"}],
  "12": [{"ep": 1, "title": "Keep Calm and Carry On"}, {"ep": 2, "title": "Mamma Mia"}, {"ep": 3, "title": "The Foundry"}, {"ep": 4, "title": "American Nightmare"}, {"ep": 5, "title": "The One You've Been Waiting For"}, {"ep": 6, "title": "Celebrating the Life of Asa Fox"}, {"ep": 7, "title": "Rock Never Dies"}, {"ep": 8, "title": "LOTUS"}, {"ep": 9, "title": "First Blood"}, {"ep": 10, "title": "Lily Sunder Has Some Regrets"}, {"ep": 11, "title": "Regarding Dean"}, {"ep": 12, "title": "Stuck in the Middle (With You)"}, {"ep": 13, "title": "Family Feud"}, {"ep": 14, "title": "The Raid"}, {"ep": 15, "title": "Somewhere Between Heaven and Hell"}, {"ep": 16, "title": "Ladies Drink Free"}, {"ep": 17, "title": "The British Invasion"}, {"ep": 18, "title": "The Memory Remains"}, {"ep": 19, "title": "The Future"}, {"ep": 20, "title": "Twigs and Twine and Tasha Banes"}, {"ep": 21, "title": "There's Something About Mary"}, {"ep": 22, "title": "Who We Are"}, {"ep": 23, "title": "All Along the Watchtower"}],
  "13": [{"ep": 1, "title": "Lost and Found"}, {"ep": 2, "title": "The Rising Son"}, {"ep": 3, "title": "Patience"}, {"ep": 4, "title": "The Big Empty"}, {"ep": 5, "title": "Advanced Thanatology"}, {"ep": 6, "title": "Tombstone"}, {"ep": 7, "title": "War of the Worlds"}, {"ep": 8, "title": "The Scorpion and the Frog"}, {"ep": 9, "title": "The Bad Place"}, {"ep": 10, "title": "Wayward Sisters"}, {"ep": 11, "title": "Breakdown"}, {"ep": 12, "title": "Various & Sundry Villains"}, {"ep": 13, "title": "Devil's Bargain"}, {"ep": 14, "title": "Good Intentions"}, {"ep": 15, "title": "A Most Holy Man"}, {"ep": 16, "title": "Scoobynatural"}, {"ep": 17, "title": "The Thing"}, {"ep": 18, "title": "Bring 'em Back Alive"}, {"ep": 19, "title": "Funeralia"}, {"ep": 20, "title": "Unfinished Business"}, {"ep": 21, "title": "Beat the Devil"}, {"ep": 22, "title": "Exodus"}, {"ep": 23, "title": "Let the Good Times Roll"}],
  "14": [{"ep": 1, "title": "Stranger in a Strange Land"}, {"ep": 2, "title": "Gods and Monsters"}, {"ep": 3, "title": "The Scar"}, {"ep": 4, "title": "Mint Condition"}, {"ep": 5, "title": "Nightmare Logic"}, {"ep": 6, "title": "Optimism"}, {"ep": 7, "title": "Unhuman Nature"}, {"ep": 8, "title": "Byzantium"}, {"ep": 9, "title": "The Spear"}, {"ep": 10, "title": "Nihilism"}, {"ep": 11, "title": "Damaged Goods"}, {"ep": 12, "title": "Prophet and Loss"}, {"ep": 13, "title": "Lebanon"}, {"ep": 14, "title": "Ouroboros"}, {"ep": 15, "title": "Peace of Mind"}, {"ep": 16, "title": "Game Night"}, {"ep": 17, "title": "Game Over"}, {"ep": 18, "title": "Absence"}, {"ep": 19, "title": "Jack in the Box"}, {"ep": 20, "title": "Moriah"}],
  "15": [{"ep": 1, "title": "Back and to the Future"}, {"ep": 2, "title": "Raising Hell"}, {"ep": 3, "title": "The Rupture"}, {"ep": 4, "title": "Atomic Monsters"}, {"ep": 5, "title": "Proverbs 17:3"}, {"ep": 6, "title": "Golden Time"}, {"ep": 7, "title": "Last Call"}, {"ep": 8, "title": "Our Father, Who Aren't in Heaven"}, {"ep": 9, "title": "The Trap"}, {"ep": 10, "title": "The Heroes' Journey"}, {"ep": 11, "title": "The Gamblers"}, {"ep": 12, "title": "Galaxy Brain"}, {"ep": 13, "title": "Destiny's Child"}, {"ep": 14, "title": "Last Holiday"}, {"ep": 15, "title": "Gimme Shelter"}, {"ep": 16, "title": "Drag Me Away (From You)"}, {"ep": 17, "title": "Unity"}, {"ep": 18, "title": "Despair"}, {"ep": 19, "title": "Inherit the Earth"}, {"ep": 20, "title": "Carry On"}]
};

const sSelect = document.getElementById('seasonSelect');
const eSelect = document.getElementById('episodeSelect');
const vContainer = document.getElementById('videoContainer');
const nBtn = document.getElementById('nextBtn');
const fBtn = document.getElementById('fullscreenBtn');
const sInput = document.getElementById('epSearch');
const rBox = document.getElementById('searchResults');

function init() {
    for (let s in episodesData) {
        let opt = document.createElement('option');
        opt.value = s;
        opt.innerText = `Season ${s}`;
        sSelect.appendChild(opt);
    }
}

function updateEpisodes(season) {
    eSelect.innerHTML = '<option value="">Episode</option>';
    if (season && episodesData[season]) {
        eSelect.disabled = false;
        episodesData[season].forEach(ep => {
            let opt = document.createElement('option');
            opt.value = ep.ep;
            opt.innerText = `${ep.ep}. ${ep.title}`;
            eSelect.appendChild(opt);
        });
    } else {
        eSelect.disabled = true;
    }
}

function loadVideo(s, e) {
    const url = `https://vidlink.pro/tv/1622/${s}/${e}`;
    vContainer.innerHTML = `<iframe src="${url}" allowfullscreen allow="autoplay"></iframe>`;
    nBtn.style.display = "inline-block";
    sSelect.value = s;
    updateEpisodes(s);
    eSelect.value = e;
}

// NEW THEATER MODE TOGGLE (No buffering)
fBtn.onclick = () => {
    document.body.classList.toggle('theater-mode');
    if (document.body.classList.contains('theater-mode')) {
        fBtn.innerText = "✕ CLOSE FULL";
    } else {
        fBtn.innerText = "⛶ FULLSCREEN";
    }
};

sSelect.onchange = () => updateEpisodes(sSelect.value);
eSelect.onchange = () => loadVideo(sSelect.value, eSelect.value);

nBtn.onclick = () => {
    let s = parseInt(sSelect.value);
    let e = parseInt(eSelect.value);
    const next = episodesData[s].find(i => i.ep === e + 1);
    if (next) loadVideo(s, e + 1);
    else if (episodesData[s + 1]) loadVideo(s + 1, 1);
};

sInput.oninput = (e) => {
    const term = e.target.value.toLowerCase();
    rBox.innerHTML = '';
    if (term.length < 2) return;
    for (let s in episodesData) {
        episodesData[s].forEach(ep => {
            if (ep.title.toLowerCase().includes(term)) {
                let div = document.createElement('div');
                div.className = 'search-item';
                div.innerHTML = `<strong>S${s}:E${ep.ep}</strong> - ${ep.title}`;
                div.onclick = () => { loadVideo(s, ep.ep); rBox.innerHTML = ''; sInput.value = ''; };
                rBox.appendChild(div);
            }
        });
    }
};

init();
