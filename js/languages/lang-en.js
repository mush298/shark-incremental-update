// This is main language file! It's English!

LANGUAGES.EN = {
    name: "English",
    inter_name: "English",
    icon: "lang-en",

    text: {
        // Currencies

        'fish-name': "Fish",
        'fish-costName': toTextStyle('Fish','fish'),

        'prestige-name': "Prestige Shards",
        'prestige-costName': toTextStyle('Prestige','prestige') + " Shards",

        'coral-name': "Coral",
        'coral-costName': toTextStyle('Coral','coral'),

        'ice-name': "Ice",
        'ice-costName': toTextStyle('Ice','ice'),

        'salt-name': "Salt",
        'salt-costName': toTextStyle('Salt','salt'),

        'snow-name': "Compressed Snow",
        'snow-costName': toTextStyle('Compressed Snow','snow'),

        'kelp-name': "Kelp",
        'kelp-costName': toTextStyle('Kelp','kelp'),

        'core-name': "Magmatic Fragments",
        'core-costName': toTextStyle('Magmatic','core') + ' Fragments',

        'humanoid-name': "Humanoid Sharks",
        'humanoid-costName': toTextStyle('Humanoid','humanoid') + ' Sharks',

        'remnants-name': "Remnants",
        'remnants-costName': toTextStyle('Remnants','black-hole'),

        'dark-matter-name': "Dark Matter",
        'dark-matter-costName': toTextStyle('Dark Matter','black-hole'),

        'observ-name': "Observatories",
        'observ-costName': toTextStyle('Observatories','observ'),

        'reserv-name': "Reservatories",
        'reserv-costName': toTextStyle('Reservatories','reserv'),

        'traject-name': "Trajectories",
        'traject-costName': toTextStyle('Trajectories','traject'),

        'full-shark-level': toTextStyle('Shark','shark') + ' Level',
        'full-shark-rank': toTextStyle('Shark','shark') + ' Rank',

        'sharkoid-faith': toTextStyle('Sharkoid Faith','humanoid'),

        'curr-top-0-req': x => `Reach <b>${format(x)}</b> total ${toTextStyle('Fish','fish')}`, 
        'curr-top-0-reset': x => `Prestige for <b>${x.format(0)}</b> ${toTextStyle('Prestige','prestige')} Shards`,

        'curr-top-1-req': x => `Reach <b>${format(x)}</b> total ${toTextStyle('Prestige','prestige')} Shards`, 
        'curr-top-1-reset': x => `Enter the core for <b>${x.format(0)}</b> ${toTextStyle('Magmatic','core')} Fragments`,

        'curr-top-2-req': x => `Reach <b>${format(x)}</b> ${toTextStyle('Fish','fish')}`, 
        'curr-top-2-reset': (x,next) => `Evolve your ${toTextStyle('Sharks','shark')} into <b>${format(x,0)}</b> ${toTextStyle('Humanoid','humanoid')} Sharks (Next at <b>${format(next)}</b> ${toTextStyle('Fish','fish')})`,

        'curr-top-3-req': x => `Reach <b>${format(x)}</b> ${toTextStyle('Fish','fish')} & <b>8</b> ${toTextStyle('Black Holes','black-hole')}`, 
        'curr-top-3-reset': x => `Sacrifice your ${toTextStyle('Sharks','shark')} for <b>${format(x,0)}</b> ${toTextStyle('Dark Matter','black-hole')}`,

        'curr-top-4-req': x => `Reach <b>${format(x)}</b> ${toTextStyle('Observatories','observ')}`, 
        'curr-top-4-reset': x => `Reserve for <b>${format(x,0)}</b> ${toTextStyle('Reservatories','reserv')}`,

        'curr-top-5-req': x => `Reach <b>${format(x)}</b> ${toTextStyle('Reservatories','reserv')}`, 
        'curr-top-5-reset': x => `Traject for <b>${format(x,0)}</b> ${toTextStyle('Trajectories','traject')}`,
        
        'radioactive-name': toTextStyle('Radiation '+icon("radioactive"),'core'),

        // Tabs

        'tab-shark': toTextStyle('Shark','shark'),
        'tab-options': "Options",
        'tab-scalings': "Scalings",
        'tab-auto': "Automation",
        'tab-research': toTextStyle('Research','prestige'),
        'tab-explore': "Exploration",
        'tab-space-base': toTextStyle('Space Base','observ'),

        'tab-core': toTextStyle('Core','core'),
        'tab-core-reactor': toTextStyle('Core','core')+" Reactor",
        'tab-core-radiation': toTextStyle('Core','core')+" Radiation",
        'tab-core-assembler': toTextStyle('Core','core')+" Assembler",

        'tab-evolution': toTextStyle('Evolution','humanoid'),
        'tab-shark-rank': toTextStyle('Shark','shark') + " Rank",
        'tab-evolution-tree': toTextStyle('Evolution','humanoid') + " Tree",
        'tab-evolution-goal': toTextStyle('Evolution','humanoid') + " Goals",
        'tab-cultivation': "Cultivation",
        'tab-forge': "Forge",
        'tab-particle-accel': "Particle Accelerator",

        'tab-singularity': toTextStyle('Singularity','black-hole'),
        'tab-black-hole': toTextStyle('Black Hole','black-hole'),
        'tab-singularity-milestones': toTextStyle('Singularity','black-hole') + " Milestones",
        'tab-solar-system': "Solar System",
        'tab-constellation': "Constellations",

        // Elements

        'fish-div': `Your ${toTextStyle('Shark','shark')} has eaten <h2>${toTextStyle('0','fish','fish-amount')}</h2> <span id="fish-gain"></span> fish.`,
        'shark-stats': `${toTextStyle('Shark','shark')} Stats<br>Level: <h4 id="shark-level">???</h4><br>Rank: <h4 id="shark-tier">???</h4> <span id="shark-next-rank"></span>`,

        'shark-elo-div': `Your ${toTextStyle('Shark','shark')} ELO is <h3>${toTextStyle('0','humanoid','shark-elo')}</h3>.`,
        'shark-rank-div': `Your ${toTextStyle('Shark','shark')} Rank is <h3 id="shark-rank">0</h3>.`,
        'shark-rank-req-div': `The next rank requires ${toTextStyle('Shark','shark')} ELO <h4>${toTextStyle('0','humanoid','shark-rank-req')}</h4>.`,
        'shark-rank-note': `Note: Shark Rank gets reset when you trigger an Evolution reset.`,

        'option-title-1': "Main Options",
        'option-title-2': "Notations",
        'option-title-3': "Confirmations",
        'option-title-4': "Languages",

        'offline-speed': "Speed up Offline time",
        'offline-done': "Done",

        'radioactive-div': `The ${toTextStyle('Core','core')} has produced <h3>${toTextStyle('0 / 1,000 '+icon("radioactive"),'core','radioactive-amount')}</h3> <span id="radioactive-gain"></span>.`,
        get 'radioactive-summary'() {
            var c = toTextStyle('Core','core'), rf = toTextStyle('Fish '+icon("radioactive"),'fish')
            return `
            <summary>The ${c} Radiation Experiment</summary>
            Experimenting with the core radiation forces a ${toTextStyle('Core','core')} reset.
            While in the experiment, core reactors don't work. ${toTextStyle('Fish','fish')}, ${toTextStyle('Prestige','prestige')} shards, and the first four oceans' resources are cube-rooted.
            The experiment forces your ${toTextStyle('Shark','shark')} to eat radioactive ${rf}.<br>
            Upgrade with radioactive ${rf} to generate more ${toTextStyle('Radiation '+icon("radioactive"),'core')}, which gives you additional boosts.
            `
        },
        'radioboost-div': `You have <h3 id="radioactive-boost">0</h3> radioactive boosts.`,

        'core-temp-div': `The ${toTextStyle('Core','core')}'s temperature is <h3>${toTextStyle('6,150','core','core-temperature')}</h3>, which makes radioactive boosts <h4 id="core-temp-effect">100%</h4> effective.`,
        'core-temp-after-div': `(The ${toTextStyle('Core','core')}'s temperature will be <span id="core-temp-after">???</span> after a ${toTextStyle('Core','core')} reset)`,

        'sharkoid-faith-div': `You have <h3 id="sharkoid-faith-spent">0</h3> / <h3 id="sharkoid-faith-total">0</h3> ${toTextStyle('Sharkoid Faith','humanoid')}.`,
        'respec-evolution-tree': `Respec ${toTextStyle('Evolution','humanoid')} Tree`,
        'respec-evolution-tree-2': `Respec charged-only ${toTextStyle('Evolution','humanoid')} Tree`,
        'export-evolution-tree': `Export ${toTextStyle('Evolution','humanoid')} Tree`,
        'import-evolution-tree': `Import ${toTextStyle('Evolution','humanoid')} Tree`,
        'evolution-tree-preset': `${toTextStyle('Evolution','humanoid')} Tree Presets`,

        'rerun-evolution': `Re-run ${toTextStyle('Evolution','humanoid')}, respecing its Tree`,

        'mining-text': `Mining... <b id="mining-progress">???</b> | Damage <b id="mining-damage">???</b> | ${toTextStyle(`Mining Fortune <span id="mining-fortune">0</span>`+icon("luck"),'gold')}`,
        'super-mining-text': `Super Damage <b id="super-mining-damage">???</b> | ${toColoredText(`Super Mining Fortune <span id="super-mining-fortune">0</span>`+icon("luck"),'orange')}`,
        'mining-tier-div': `Mining Tier: <h3 id="mining-tier">0</h3>`,
        'mining-ascend-div': `Mining Ascension: <h3 id="mining-ascend">0</h3>`,
        'mining-note': `Note: If you're stuck while mining ore with high health (taking a long time), you should reload the page.`,
        'mining-tier-undo-btn': `Decrease Mining Tier by 1 if you're stuck while mining.`,
        'mining-ascend-undo-btn': `Decrease Mining Ascension by 1 if you're stuck while mining.`,

        'black-hole-button': `Because you maxed out all the particle accelerators, you need to form a black hole in case you enter another universe.`,
        'black-hole-html': `You have formed <h2>${toTextStyle('0','black-hole','black-hole-amount')}</h2> black hole, which reduces the exponents of fish & prestige shards and the multiplier of magmatic fragments by <h3 id="black-hole-effect">^???</h3>.`,

        'remnant-html': `You have <h3>${toTextStyle('0','black-hole','remnant-amount')}</h3> <span id="remnant-gain"></span> remnants.`,

        'rocket-part-div': `You have created <h3 id="total-rocket-part">0</h3> total Rocket Parts.`,
        'observ-div': `You have <h3>${toTextStyle('0','observ','observ-amount')}</h3> <span id="observ-gain"></span> observations. (<h3>${toTextStyle('0','observ','observ-total')}</h3> total)`,
        'reserv-div': `You have <h3>${toTextStyle('0','reserv','reserv-amount')}</h3> <span id="reserv-gain"></span> reservations.`,
        'traject-div': `You have <h3>${toTextStyle('0','traject','traject-amount')}</h3> <span id="traject-gain"></span> trajectories.`,

        // Upgrades

        'su-s1-req': "Level 3",
        'su-s1-name': 'Shark Strength',
        'su-s1-desc': `Increases ${toTextStyle('Fish','fish')} eaten by <b>+1</b> per level.`,

        'su-s2-req': "Level 7",
        'su-s2-name': 'Shark Agility',
        'su-s2-desc': `Increases the base of ${toTextStyle('Shark','shark')} Level's ${toTextStyle('Fish','fish')} bonus by <b>+1</b> per level.`,

        'su-s3-req': "Level 15",
        'su-s3-name': 'Shark Teeth',
        'su-s3-desc': `Increases the exponent of 1st ${toTextStyle('Shark','shark')} Upgrade by <b>+50%</b> per level.`,

        'su-s4-req': "Level 38",
        'su-s4-name': 'Shark Exponent',
        'su-s4-desc': `Increases the exponent of ${toTextStyle('Fish','fish')} by <b>+1%</b> per level.`,

        'su-s5-req': "Level 640",
        'su-s5-name': 'Radioactive Shark',
        'su-s5-desc': `Increase ${toTextStyle('Radiation '+icon("radioactive"),'core')} production by <b>x2</b> per level.`,

        'su-s6-req': "I'm not telling you!",
        'su-s6-name': 'Shark Matter',
        'su-s6-desc': `Increase ${toTextStyle('Remnant', 'black-hole')} generation per level.`,

        'su-p1-req': "First Prestige",
        'su-p1-name': 'Super Shark Strength',
        'su-p1-desc': `Increases ${toTextStyle('Fish','fish')} eaten by <b>×3</b> per level.`,

        'su-p2-req': "First Prestige",
        'su-p2-name': 'Prestige Booster',
        'su-p2-desc': `Increases ${toTextStyle('Fish','fish')} eaten by <b>×lg(${toTextStyle('Fish','fish')})</b> per level.`,

        'su-p3-name': 'Scaled Shark',
        'su-p3-desc': `Delays the first ${toTextStyle('Shark','shark')} Level scaling by <b>+1</b> per level.`,

        'su-m1-name': 'Mining Damage',
        'su-m1-desc': `Increases the mining damage by <b>×2</b> per level.`,

        'su-m2-name': 'Mining Speed',
        'su-m2-desc': `Increases the mining speed by <b>+10%</b> per level.`,

        'su-m3-req': 'Mining Tier 3',
        'su-m3-name': 'Compressed Stone',
        'su-m3-desc': `Increases <b>Stone</b> mined by <b>×2</b> per level.`,

        'su-m4-req': 'Mining Tier 6',
        'su-m4-name': 'Mining Fortune',
        'su-m4-desc': `Increases the ${toTextStyle('Mining Fortune '+icon('luck'),'gold')} by <b>+5</b> per level.`,

        'su-m5-req': 'Mining Tier 9',
        'su-m5-name': 'Basic Ores',
        'su-m5-desc': `Increases the first 4 ores mined by <b>×2</b> per level.`,

        'su-m6-req': 'Mining Ascension 1',
        'su-m6-name': 'Super Mining Damage',
        'su-m6-desc': `Increases the super mining damage by <b>×2</b> per level.`,

        'su-m7-req': 'Mining Ascension 3',
        'su-m7-name': 'Super Mining Speed',
        'su-m7-desc': `Increases the normal and super mining speed by <b>+25%</b> per level.`,

        'su-m8-req': 'Mining Ascension 6',
        'su-m8-name': 'Compressed Radium',
        'su-m8-desc': `Increases <b>Radium-223</b> mined by <b>×2</b> per level.`,

        'su-m9-req': 'Mining Ascension 12',
        'su-m9-name': 'Super Mining Fortune',
        'su-m9-desc': `Increases the ${toColoredText('Super Mining Fortune '+icon('luck'),'orange')} by <b>+5</b> per level.`,

        'su-m10-req': 'Mining Ascension 12',
        'su-m10-name': 'Super Ores',
        'su-m10-desc': `Increases the first 4 ascension ores mined by <b>×2</b> per level.`,

        // Researches

        'research-p1-name': "Prestigious Agility",
        'research-p1-desc': `'Shark Agility' now affects the base of ${toTextStyle("Shark",'shark')} Level's ${toTextStyle("Prestige",'prestige')} Shard bonus at a reduced rate.`,

        'research-p2-name': "Shark Upgrade EL",
        'research-p2-desc': `${toTextStyle("Shark",'shark')} ${toTextStyle("Fish",'fish')} upgrades no longer spend ${toTextStyle("Fish",'fish')}.`,

        'research-p3-name': "Upgraded Shark Level",
        'research-p3-desc': `Reduce the base of ${toTextStyle("Shark",'shark')} level's requirement by <b>1</b>,
        but force a ${toTextStyle("Prestige",'prestige')} reset, resetting your ${toTextStyle("Prestige",'prestige')} shards and ${toTextStyle("Prestige",'prestige')} upgrades.
        Unlock new ${toTextStyle("Shark",'shark')} upgrades.`,

        'research-p4-name': "Better Prestige",
        'research-p4-desc': `Slightly improve the formula of ${toTextStyle("Prestige",'prestige')} shards gain.`,

        'research-p5-name': "Mega Strength",
        'research-p5-desc': `'Super Shark Strength' is <b>1%</b> stronger for every ${toTextStyle("Shark",'shark')} Level, starting at 100.`,

        'research-p6-name': "Super Scaled Shark",
        'research-p6-desc': `'Scaled Shark' is <b>twice</b> as strong.`,

        'research-p7-name': "Better Resources I",
        'research-p7-desc': `${toTextStyle("Coral",'coral')} and ${toTextStyle("Ice",'ice')}' effect is better.`,

        'research-p8-name': "Further Upgraded Shark Level",
        'research-p8-desc': `Further reduce the base of ${toTextStyle("Shark",'shark')} level's requirement by 1.`,

        'research-p9-name': "Cheap Prestige Booster",
        'research-p9-desc': `Reduce the dilation scaling of 'Prestige Booster' by <b>-0.05</b> per level.`,

        'research-e1-name': "Ocean Synergism I",
        'research-e1-desc': `${toTextStyle("Salt",'salt')} boosts ${toTextStyle("Corals",'coral')} generated.`,

        'research-e2-name': "Ocean Synergism II",
        'research-e2-desc': `${toTextStyle("Compressed Snow",'snow')} boosts ${toTextStyle("Ice",'ice')} generated.`,

        'research-e3-name': "Exploration Automation",
        'research-e3-desc': `Automatically gain base of the first <b>X</b> oceans without exploring.`,

        'research-e4-name': "Kelp Oxidation",
        'research-e4-desc': `<b>Oxygen</b> now affects ${toTextStyle("Kelp",'kelp')} production at a reduced rate.`,

        'research-e5-name': "Exploration Automation MK2",
        'research-e5-desc': `Automatically gain base in the Indian Ocean without exploring. Improve ${toTextStyle('Kelp','kelp')}'s effect again.`,

        'research-e6-name': "Sunda Trench",
        'research-e6-desc': `The <b>Indian Ocean</b>'s depth no longer has cap, and it makes its effect stronger after.`,

        'research-c1-name': "Research C-Keeper",
        'research-c1-desc': `Keep ${toTextStyle("Research",'prestige')} when entering the ${toTextStyle('Core','core')}.`,

        'research-c2-name': "Exploration C-Keeper",
        'research-c2-desc': `Keep first <b>X</b> oceans unlocked and their depth on entering the ${toTextStyle('Core','core')}.`,

        'research-c3-name': "Neon's Affection I",
        'research-c3-desc': `<b>Neon</b> now affects 'Shark Teeth', 'Shark Exponent', and 'Scaled Shark'.`,

        'research-c4-name': "Better Nickel",
        'research-c4-desc': `<b>Nickel</b>'s effect is <b>twice</b> as powerful.`,

        'research-c5-name': "Additional Core Boost",
        'research-c5-desc': `The core radiation's bonus reactors now affect the core reactor's boost to ${toTextStyle('Fish','fish')} at a reduced rate.`,

        'research-c6-name': "Radiation Reduction",
        'research-c6-desc': `${toTextStyle('Magmatic','core')} fragments reduce radiation's limit at a reduced rate.`,

        'research-c7-name': "Greater Shark Teeth",
        'research-c7-desc': `The effect of 'Shark Teeth' is raised to the <b>2.5th</b> power.`,

        'research-c8-name': "Better Iron & Neon",
        'research-c8-desc': `<b>Iron</b>'s effect is twice as powerful, and <b>Iron</b>'s & <b>Neon</b>'s requirements are reduced drastically.`,

        'research-c9-name': "Better Core Boost",
        'research-c9-desc': `Improve the core reactor's boost to ${toTextStyle('Fish','fish')}.`,

        'research-c10-name': "Super-Scaled Shark",
        'research-c10-desc': `'Scaled Shark' now delays the second ${toTextStyle('Shark','shark')} Level scaling at a reduced rate.`,

        'research-c11-name': "Better Radiation Reduction",
        'research-c11-desc': `'Radiation Reduction' is stronger slightly.`,

        'research-c12-name': "Mega Radiation Reduction",
        'research-c12-desc': `Drastically reduce radiation's limit.`,

        'research-c13-name': "Super Radioactive Shark",
        'research-c13-desc': `'Radioactive Shark' is <b>50%</b> stronger.`,

        'research-c14-name': "Exponential Core Boost",
        'research-c14-desc': `Core reactors now provide an exponential boost to ${toTextStyle('Fish','fish')}.`,

        'research-c15-name': "Self-Radiation",
        'research-c15-desc': `You can buy a radiation upgrade, costing regular ${toTextStyle('Fish','fish')} instead of radioactive ${toTextStyle('Fish '+icon('radioactive'),'fish')}, but at a <b>^0.0001</b> rate. Then increase the rate by <b>×10</b> per level.`,

        'research-m1-name': "Magmatic Fortune",
        'research-m1-desc': `Increase the ${toTextStyle('Mining Fortune '+icon('luck'),'gold')} by <b>+5</b> per level.`,

        'research-m2-name': "Hyper-Scaled Shark",
        'research-m2-desc': `The third ${toTextStyle("Shark",'shark')} level scaling is delayed by <b>+1000</b>.`,

        'research-m3-name': "Scaled Radioactive Boost",
        'research-m3-desc': `Delay the first 2 radioactive boost scalings by <b>+1</b> per level.`,

        'research-m4-name': "Better Mining Tier",
        'research-m4-desc': `The second, third, fourth, and fifth effects of mining tier are <b>+25%</b> stronger per level.`,

        'research-f1-name': "Basic Rank Exponent",
        'research-f1-desc': `Increase the exponent of ${toTextStyle("Shark",'shark')} ELO by <b>+25%</b> per level.`,

        'research-f2-name': "More Sharkoid Faith",
        'research-f2-desc': `Gain more ${toTextStyle('Sharkoid Faith','humanoid')} from ${toTextStyle('Fish','fish')} & ${toTextStyle("Prestige",'prestige')} shards.`,

        'research-f3-name': "Scaled Core Reactors",
        'research-f3-desc': `Delay the first scaling of the core reactors by <b>+1</b> per level.`,

        'research-f4-name': "Less Core Temperature Softcap",
        'research-f4-desc': `The softcap of the ${toTextStyle('Core','core')}'s temperature is weaker.`,

        'research-f5-name': "Vibranium Boost",
        'research-f5-desc': `<b>Vibranium</b> boosts mining damage at a reduced rate.`,

        'research-f6-name': "Universal Mining Tier",
        'research-f6-desc': `The first 9 ores are boosted by the mining tier.`,

        'research-f7-name': "Better Shark ELO",
        'research-f7-desc': `The base of humanoid sharks in the formula for ${toTextStyle("Shark",'shark')} ELO is improved from <b>x</b> to <b>2<sup>x</sup>-1</b>.`,

        'research-f8-name': "Weak Ore Health",
        'research-f8-desc': `The first effect of mining tier is reduced.`,

        'research-s1-name': "Remnant Fish",
        'research-s1-desc': `${toTextStyle("Fish",'fish')} boosts ${toTextStyle("Remnants",'black-hole')} generation at a reduced rate.`,

        'research-s2-name': "Better Rank Boost",
        'research-s2-desc': `Improve ${toTextStyle("Shark",'shark')} rank boost to ${toTextStyle('Prestige','prestige')} shards.`,

        'research-s3-name': "Pure Oceans",
        'research-s3-desc': `The <b>Pacific & Arctic oceans</b> provide an exponential boost, and improve the <b>Atlantic & Southern oceans</b>.`,

        'all-research': {
            's4': ["Pure Oceans II",`The <b>Indian Ocean</b> provides an exponential boost at a reduced rate.`],
            's5': ["Pure Oceans III",`The first <b>N</b> Oceans' depth progress reductions are removed until the <b>Indian Ocean</b>. The 6th level improves the 10th radioactive bonus.`],

            'dm1': ["Starting Black Hole",`Start with a <b>+1</b> ${toTextStyle("Black Hole",'black-hole')} formed on sacrifice per level. Every starting black hole delays reduction.`],
            'dm2': ["Better Remnant I",`Improve the ${toTextStyle("Remnant",'black-hole')} upgrade "Welcome Again", it affects ${toTextStyle("Prestige",'prestige')} shards.`],
            'dm3': ["Better Remnant II",`Improve the ${toTextStyle("Remnant",'black-hole')} upgrade "Shark Master".`],
            'dm4': ["Better Remnant III",`Improve the ${toTextStyle("Shark",'shark')} level & rank boosts for ${toTextStyle("Remnant",'black-hole')} generation.`],
            'dm5': ["Softcapless Core Temperature",`Remove the softcap of the ${toTextStyle('Core','core')}'s temperature.`],
            'dm6': ["Better Radiation Generator",`${toTextStyle('Radiation '+icon('radioactive'),'core')} generator raises itself to the exponent at a reduced rate.`],
            'dm7': ["Dark Remnants",`Total ${toTextStyle("Dark Matter",'black-hole')} boosts ${toTextStyle("Remnant",'black-hole')} generation.`],

            'm5': ["Shark Rank 'onto' Super Mining",`${toTextStyle("Shark",'shark')} Rank boost to mining damage affects super mining damage at a reduced rate.`],
            'm6': ["The Uranium Shark",`'Shark Exponent' is overpowered.`],

            'o1': [`Observatory Automation`,`Automates all observatory upgrades without spending currencies. <i>This research doesn’t get reset.</i>`],
            'o2': [`Reservatory Automation`,`Automates all reservatory upgrades without spending currencies, and also boost reservatory gain. <i>This research doesn’t get reset.</i>`],
            'o3': [`Reservatory Autocollection`,`Passively gain reservatories, and also boost reservatory gain. <i>This research doesn’t get reset.</i>`],
            'o4': [`Trajectory Automation`,`Automates all trajectory upgrades without spending currencies, passively gain trajectories, and also boost trajectory gain. <i>This research doesn’t get reset.</i>`],
            'o5': [`The Unbalanced Research`,`Increase the observatory overflow multiplier. <i>This research doesn’t get reset.</i>`],
            'a1': [`Sharkoid Faith Multiplier`,`Gain more ${toTextStyle('Sharkoid Faith','humanoid')} <i>This research doesn’t get reset.</i>`],
            'a2': [`Super Matter Condenser`,`The effect of the forge upgrade <b>'Matter Condenser'</b> is boosted. <i>This research doesn’t get reset.</i>`],
        },

        // Exploration

        'explore-while': `While exploring`,
        'explore-inside': (a,b,c)=>`Base ${a.format()}/s`+(b.gt(a) ? " ➜ " : " ~ ")+`${b.format()}/s`+`.<br>Reach ${format(c,0)} best ${toTextStyle("Fish",'fish')}.`,
        'explore-outside': x=>`Your current base is ${x.format()}/s.<br>Explore the ocean!`,

        'explore-next': x=>`New Ocean at ${toTextStyle("Shark",'shark')} Level <h3>${format(x,0)}</h3>.`,

        'explore-doubler-1': x=>`Double ${x} gained.`,
        'explore-doubler-2': `Double depth progression gain.`,

        'explore-0-name': `Pacific Ocean`,
        'explore-0-desc': `${toTextStyle('Fish','fish')} gain is rooted by 2.`,
        'explore-0-milestone': [
            `Raise ${toTextStyle('Prestige','prestige')} shards gained to the 1.05th power.`,
            `Increase the resource and depth progression by 25% compounding per square-rooted ${toTextStyle('Shark','shark')} level.`,
            `Leveling ${toTextStyle('Shark','shark')} will no longer spend ${toTextStyle('Fish','fish')}.`,
            `Raise ${toTextStyle('Fish','fish')} eaten to the 1.05th power.`,
            `Unlock the ${toTextStyle('Core','core')}.`,
        ],

        'explore-1-name': `Arctic Ocean`,
        'explore-1-desc': `Reset your ${toTextStyle("Prestige",'prestige')} shards and ${toTextStyle("Prestige",'prestige')} upgrades. ${toTextStyle('Prestige','prestige')} Shards gain is rooted by 2.`,
        'explore-1-milestone': [
            `Unlock Auto-${toTextStyle('Shark','shark')} ${toTextStyle('Prestige','prestige')} upgrades.`,
            `Increase the resource and depth progression by 25% compounding per square-rooted ${toTextStyle('Shark','shark')} level.`,
            `${toTextStyle('Shark','shark')} ${toTextStyle('Prestige','prestige')} upgrades will no longer spend ${toTextStyle('Prestige','prestige')} shards.`,
            `Passively generate 100% of ${toTextStyle('Prestige','prestige')} shards earned on ${toTextStyle('Prestige','prestige')}.`,
        ],

        'explore-2-name': `Atlantic Ocean`,
        'explore-2-desc': `Reset your ${toTextStyle("Prestige",'prestige')} shards and ${toTextStyle("Prestige",'prestige')} upgrades. ${toTextStyle('Shark','shark')} Level scales 10x as strong.` ,
        'explore-2-milestone': [
            `'Shark Teeth' and 'Shark Exponent' scalings are weaker slightly.`,
            `Increase the resource and depth progression by 25% compounding per square-rooted ${toTextStyle('Shark','shark')} level.`,
            `${toTextStyle('Shark','shark')} Level's first scaling starts +1 later per 500m of depth.`,
            `${toTextStyle("Salt",'salt')}'s effect is 50% more powerful.`,
        ],

        'explore-3-name': `Southern Ocean`,
        'explore-3-desc': `Reset your ${toTextStyle("Prestige",'prestige')} shards and ${toTextStyle("Prestige",'prestige')} upgrades. You cannot buy ${toTextStyle('Shark','shark')} ${toTextStyle('Fish','fish')} & ${toTextStyle('Prestige','prestige')} upgrades.`,
        'explore-3-milestone': [
            `Increase the base of exploration by 10x.`,
            `Increase the resource and depth progression by 25% compounding per square-rooted ${toTextStyle('Shark','shark')} level.`,
            `${toTextStyle('Compressed Snow','snow')}'s effect is 50% more powerful.`,
        ],

        'explore-4-name': `Indian Ocean`,
        'explore-4-desc': `You are trapped in the first four active oceans, and your ${toTextStyle('Fish','fish')} exponent is raised to the 0.75th power.`,
        'explore-4-milestone': [
            `Decrease radiation's limit by /1,000.`,
            `Increase the resource and depth progression by 25% compounding per square-rooted ${toTextStyle('Shark','shark')} level.`,
            `Core reactors scale +5 later.`,
            `Improve ${toTextStyle('Kelp','kelp')}'s effect.`,
        ],

        // Core Reactor

        'core-0-name': `Iron`,
        'core-0-desc': `${toTextStyle("Fish",'fish')} raises itself based on <b>Iron</b>'s tier.`,

        'core-1-name': `Nickel`,
        'core-1-desc': `${toTextStyle("Prestige",'prestige')} shards raise their base based on <b>Nickel</b>'s tier.`,

        'core-2-name': `Oxygen`,
        'core-2-desc': `Product of the first four oceans' resources boosts their production based on <b>Oxygen</b>'s tier.`,

        'core-3-name': `Neon`,
        'core-3-desc': `${toTextStyle("Shark",'shark')} Level reduces its requirement based on <b>Neon</b>'s tier.`,

        'core-4-name': `Sulfur`,
        'core-4-desc': `${toTextStyle("Fish",'fish')} strengthens <b>Iron</b> based on <b>Sulfur</b>'s tier.`,

        'core-5-name': `Silicon`,
        'core-5-desc': `${toTextStyle("Prestige",'prestige')} shard strengthen <b>Nickel</b> based on <b>Silicon</b>'s tier.`,

        'core-6-name': `Nitrogen`,
        'core-6-desc': `${toTextStyle("Kelp",'kelp')} strengthens <b>Oxygen</b> based on <b>Nitrogen</b>'s tier.`,

        'core-7-name': `Helium`,
        'core-7-desc': `${toTextStyle("Shark",'shark')} Level strengthens <b>Neon</b> based on <b>Helium</b>'s tier.`,

        'core-8-name': `Magnesium`,
        'core-8-desc': `${toTextStyle("Fish",'fish')} raises itself to the exponent based on <b>Magnesium</b>'s tier.`,

        'core-9-name': `Sodium`,
        'core-9-desc': `${toTextStyle("Prestige",'prestige')} shards raise themselves to the exponent based on <b>Sodium</b>'s tier.`,

        'core-10-name': `Phosphor`,
        'core-10-desc': `${toTextStyle("Magmatic",'core')} fragments raise themselves based on <b>Phosphor</b>'s tier.`,

        'core-11-name': `Chromium`,
        'core-11-desc': `${toTextStyle("Humanoid",'humanoid')} shark increase the exponent of ${toTextStyle("Shark",'shark')} ELO based on <b>Chromium</b>'s tier.`,

        'core-bonus': x => `Product of core reactors will boost ${toTextStyle("Fish",'fish')} by <h4>${formatMult(x)}</h4>.`,

        'core-assembler-erase': `Erase Mode`,
        'core-assembler-choose': `You're choosing`,
        'core-assembler-building-stats': (s,p,m) => `Strength <b>${s}</b> | Placed <b>${p} / ${m}</b>`,
        'core-assembler-building-limit': (m,x,mm) => `Max buildings: ${mm} / ${m}<br>Require: ${format(x)} ${toTextStyle("Magmatic",'core')} fragments`, 
        'ca-building-base': b => `[Base: ${b}]`,
        'ca-building-temp': t => `Increase the core's temperature by ${t}.`,

        // Core Radiation

        'cr-start': x=>x?"Stop the experiment.":"Start the experiment.",

        'upgrade-cr': (gen,cost)=>`
        Upgrade ${toTextStyle('Radiation '+icon("radioactive"),'core')} production.<br>
        Producing <b>${format(gen,0)}</b> per second.<br>
        Cost: ${format(cost,0)} ${toTextStyle('Fish '+icon("radioactive"),'fish')}`,

        'reset-cr': (inc)=>`Reset ${toTextStyle('Radiation '+icon("radioactive"),'core')}, but increase its limit by <b>${formatMult(inc,0)}</b>, and upgrades radioactive boosts and sometimes adds new effects. You need to reach the limit to reset.`,

        'cr-boosts': [
            x=>`Provide <h4>+${format(x)}</h4> bonus core reactors on the first row.`,
            x=>`Boost ${toTextStyle('Magmatic','core')} fragments by <h4>${formatMult(x)}</h4>.`,
            x=>`The first four ${toTextStyle('Shark','shark')} ${toTextStyle('Fish','fish')} upgrades are <h4>${formatPercent(x.sub(1))}</h4> more powerful.`,
            x=>`Second ${toTextStyle('Shark','shark')} level scaling is delayed by <h4>+${format(x)}</h4>.`,
            x=>`Increase the base of ${toTextStyle('Shark','shark')} level's ${toTextStyle('Magmatic','core')} fragment bonus by <h4>+${format(x,3)}</h4>.`,
            x=>`Increase ${toTextStyle('Shark','shark')} Level's ${toTextStyle('Fish','fish')} bonus by <h4>${formatPow(x,3)}</h4> to the exponent.`,
            x=>`The first three ${toTextStyle('Shark','shark')} ${toTextStyle('Prestige','prestige')} upgrades are <h4>${formatPercent(x.sub(1))}</h4> more powerful.`,
            x=>`${toTextStyle('Shark','shark')} Level boosts ${toTextStyle('Shark','shark')} ELO by <h4>${formatMult(x)}</h4>.`,
            x=>`Boost <b>Stone</b> amount by <h4>${formatMult(x)}</h4>.`,
            x=>`Provide a <h4>${formatMult(x,3)}</h4> bonus purchase for exploration upgrades.`,
            x=>`Provide <h4>+${format(x)}</h4> bonus core reactors on the second row.`,
            x=>`Boost ${toTextStyle('Dark Matter','black-hole')} by <h4>${formatMult(x)}</h4>.`,
            x=>`Boost ${toTextStyle('Remnant','black-hole')} generation by <h4>${formatMult(x)}</h4>.`,
            x=>`The previous bonuses are <h4>${formatPercent(x.sub(1))}</h4> more powerful, except the sixth.`,
        ],

        // Evolution Tree

        'evolution-tree-row': (r,a) => `<b>Row ${r}</b><br>${a} available`,
        'evolution-tree-ctn': [
            ["Fish Body", x=>`${toTextStyle('Fish','fish')} boosts ${toTextStyle('Shark','shark')} ELO by <b>${formatMult(x)}</b>.`, x=>`${toTextStyle('Fish','fish')} boosts ${toTextStyle('Shark','shark')} ELO's exponent by <b>${formatMult(x)}</b>.`],
            ["Prestigious Body", x=>`${toTextStyle('Prestige','prestige')} shards boost ${toTextStyle('Shark','shark')} ELO by <b>${formatMult(x)}</b>.`, x=>`${toTextStyle('Prestige','prestige')} shards boost ${toTextStyle('Shark','shark')} ELO's exponent by <b>${formatMult(x)}</b>.`],
            ["Radioactive Body", x=>`${toTextStyle('Magmatic','core')} fragments boost ${toTextStyle('Shark','shark')} ELO by <b>${formatMult(x)}</b>.`, x=>`${toTextStyle('Magmatic','core')} fragments boost ${toTextStyle('Shark','shark')} ELO's exponent by <b>${formatMult(x)}</b>.`],
            ["Perfect Body", x=>`${toTextStyle('Shark','shark')} ELO is multiplied by <b>${formatMult(x,0)}</b>.`, x=>`The ${toTextStyle('Shark','shark')} ELO's exponent is multiplied by <b>${formatMult(x,0)}</b>.`],

            ["Steel Shark", x=>`Gain <b>${format(x,0)}</b> bonus <b>Iron</b> tiers.`, x=>`Improve <b>Iron</b> significantly.`],
            ["Priceful Shark", x=>`Gain <b>${format(x,0)}</b> bonus <b>Nickel</b> tiers.`, x=>`Improve <b>Nickel</b> significantly.`],
            ["Air-breathing Shark", x=>`Gain <b>${format(x,0)}</b> bonus <b>Oxygen</b> tiers.`, x=>`Improve <b>Oxygen</b> significantly.`],
            ["Glowing Shark", x=>`Gain <b>${format(x,0)}</b> bonus <b>Neon</b> tiers.`, x=>`Improve <b>Neon</b> significantly.`],

            ["Mariana Trench", x=>`The <b>Pacific Ocean</b>'s depth no longer has cap, and it makes its effect stronger after.`, x=>`Improve the <b>Pacific Ocean</b>’s depth progress significantly.`],
            ["Litke Deep", x=>`The <b>Arctic Ocean</b>'s depth no longer has cap, and it makes its effect stronger after.`, x=>`Improve the <b>Arctic Ocean</b>’s depth progress significantly.`],
            ["Milwaukee Deep", x=>`The <b>Atlantic Ocean</b>'s depth no longer has cap, and it makes its effect stronger after.`, x=>`Improve the <b>Atlantic Ocean</b>’s depth progress significantly.`],
            ["South Sandwich Trench", x=>`The <b>Southern Ocean</b>'s depth no longer has cap, and it makes its effect stronger after.`, x=>`Improve the <b>Southern Ocean</b>’s depth progress significantly.`],

            ["Inflated Fish", x=>`${toTextStyle('Fish','fish')} is raised to the <b>${format(x)}th</b> power.`, x=>`The exponent of ${toTextStyle('Fish','fish')} is raised to the <b>${format(x)}th</b> power.`],
            ["Overprestige", x=>`${toTextStyle('Prestige','prestige')} shards are raised to the <b>${format(x)}th</b> power.`, x=>`The exponent of ${toTextStyle('Prestige','prestige')} is raised to the <b>${format(x)}th</b> power.`],
            ["Compressed Core", x=>`${toTextStyle("Magmatic",'core')} fragments are raised to the <b>${format(x)}th</b> power.`, x=>`${toTextStyle("Magmatic",'core')} fragments are raised to the <b>${format(x)}th</b> power again.`],
            ["Homemade Shark", x=>`Decrease the base of the ${toTextStyle('Humanoid','humanoid')} shark requirement by <b>${format(x,0)}</b>.`, x=>`The exponent of ${toTextStyle('Humanoid','humanoid')} sharks is increased by <b>+${format(x)}</b>.`],

            ["Shark Conversion", x=>`Gain <b>${format(x,0)}</b> bonus <b>Sulfur</b> tiers.`, x=>`Gain <b>${formatPow(x)}</b> more bonus <b>Sulfur</b> tiers above 1.`],
            ["Exoskeleton Shark", x=>`Gain <b>${format(x,0)}</b> bonus <b>Silicon</b> tiers.`, x=>`Gain <b>${formatPow(x)}</b> more bonus <b>Silicon</b> tiers above 1.`],
            ["Solar Shark", x=>`Gain <b>${format(x,0)}</b> bonus <b>Nitrogen</b> tiers.`, x=>`Gain <b>${formatPow(x)}</b> more bonus <b>Nitrogen</b> tiers above 1.`],
            ["Flying Shark", x=>`Gain <b>${format(x,0)}</b> bonus <b>Helium</b> tiers.`, x=>`Gain <b>${formatPow(x)}</b> more bonus <b>Helium</b> tiers above 1.`],

            ["Great Shark Body", x=>`${toTextStyle('Fish','fish')} boosts <b>'Fish Body'</b> by <b>${formatPow(x)}</b>.`, x=>`${toTextStyle('Fish','fish')} boosts the charged effect of <b>'Fish Body'</b> by <b>${formatMult(x)}</b>.`],
            ["Rebirth Body", x=>`${toTextStyle('Prestige','prestige')} shards boost <b>'Prestigious Body'</b> by <b>${formatPow(x)}</b>.`, x=>`${toTextStyle('Prestige','prestige')} shards boost the charged effect of <b>'Prestigious Body'</b> by <b>${formatMult(x)}</b>.`],
            ["Supernatural Body", x=>`${toTextStyle('Magmatic','core')} fragments boost <b>'Radioactive Body'</b> by <b>${formatPow(x)}</b>.`, x=>`${toTextStyle('Magmatic','core')} fragments boost the charged effect of <b>'Radioactive Body'</b> by <b>${formatMult(x)}</b>.`],
            ["Immortal Body", x=>`<b>'Perfect Body'</b> is <b>squared</b>.`,x=>`The charged effect of <b>'Perfect Body'</b> is <b>squared</b>.`],

            ['Luck of the Sea', x=>`${toTextStyle('Fish','fish')} boosts the ${toTextStyle('Mining Fortune '+icon('luck'),'gold')} by <b>+${format(x)}</b>`,x=>`${toTextStyle('Fish','fish')} boosts the ${toColoredText('Super Mining Fortune '+icon('luck'),'orange')} by <b>+${format(x)}</b>`],
            ['Luck of the Earth', x=>`<b>Stone</b> boosts the ${toTextStyle('Mining Fortune '+icon('luck'),'gold')} by <b>+${format(x)}</b>`,x=>`<b>Stone</b> boosts the ${toColoredText('Super Mining Fortune '+icon('luck'),'orange')} by <b>+${format(x)}</b>`],
            ['Luck of the Shark', x=>`${toTextStyle('Humanoid','humanoid')} Sharks boost the ${toTextStyle('Mining Fortune '+icon('luck'),'gold')} by <b>+${format(x)}</b>`,x=>`${toTextStyle('Humanoid','humanoid')} Sharks boost the ${toColoredText('Super Mining Fortune '+icon('luck'),'orange')} by <b>+${format(x)}</b>`],
            ['Pure Luck', x=>`The ${toTextStyle('Mining Fortune '+icon('luck'),'gold')} is increased by <b>+${format(x)}</b>`,x=>`The ${toColoredText('Super Mining Fortune '+icon('luck'),'orange')} is increased by <b>+${format(x)}</b>`],

            ["Better Iron", x=>`Improve <b>Iron</b> building better.`, x=>`Improve <b>Iron</b> building even better.`],
            ["Better Nickel", x=>`Improve <b>Nickel</b> building better.`,x=>`Improve <b>Nickel</b> building even better.`],
            ["Better Oxygen", x=>`Improve <b>Oxygen</b> building better.`, x=>`Improve <b>Oxygen</b> building even better.`],
            ["Better Neon", x=>`Improve <b>Neon</b> building better.`, x=>`Improve <b>Neon</b> building even better.`],

            ["Ironic Iron", x=>`Improve <b>Iron</b> reactor better.`],
            ["Piggy Bank", x=>`Improve <b>Nickel</b> reactor better.`],
            ["Ozone", x=>`Improve <b>Oxygen</b> reactor better.`],
            ["Fake Radioactive Waste", x=>`Improve <b>Neon</b> reactor better.`],

            ["Strong Column 1", x=>`The above upgrades in the first column are <b>${formatPercent(x-1)}</b> stronger.`],
            ["Strong Column 2", x=>`The above upgrades in the second column are <b>${formatPercent(x-1)}</b> stronger.`],
            ["Strong Column 3", x=>`The above upgrades in the third column are <b>${formatPercent(x-1)}</b> stronger.`],
            ["Strong Column 4", x=>`The above upgrades in the fourth column are <b>${formatPercent(x-1)}</b> stronger.`],

            ["Fish Forge", x=>`${toTextStyle('Fish','fish')} speeds forging by <b>${formatMult(x)}</b>.`],
            ["Prestigious Forge", x=>`${toTextStyle('Prestige','prestige')} shards speed forging by <b>${formatMult(x)}</b>.`],
            ["Magmatic Forge", x=>`${toTextStyle('Magmatic','core')} fragments speed forging by <b>${formatMult(x)}</b>.`],
            ["Faster Forge", x=>`Forging is <b>${formatMult(x)}</b> faster.`],

            ["True Column 1", x=>`You are allowed to purchase the first column of tree evolution.`],
            ["True Column 2", x=>`You are allowed to purchase the second column of tree evolution.`],
            ["True Column 3", x=>`You are allowed to purchase the third column of tree evolution.`],
            ["True Column 4", x=>`You are allowed to purchase the fourth column of tree evolution.`],
        ],

        'evolution-goal-status': (x,y)=>x?"UNLOCKED":y?"LOCKED":"IN PROGRESS",
        'evolution-goal-ctn': [
            [
                x=>`Earn at least <b>${format(x,0)}</b> ${toTextStyle("Magmatic",'core')} fragments on the first entering ${toTextStyle("Core",'core')}.`,
                `Passively generate <b>100%</b> of ${toTextStyle("Magmatic",'core')} fragments earned on entering ${toTextStyle("Core",'core')}.`
            ],[
                x=>`Reach <b>${format(x,0)}</b> total ${toTextStyle("Magmatic",'core')} fragments without purchasing the ${toTextStyle("Core",'core')} assembler's building.`,
                `Keep the ${toTextStyle("Core",'core')} assembler on ${toTextStyle('Evolution','humanoid')}.`
            ],[
                x=>`Reach <b>${format(x,0)}</b> total ${toTextStyle("Magmatic",'core')} fragments.`,
                `Improve the formula of ${toTextStyle('Prestige','prestige')} shards for ${toTextStyle("Magmatic",'core')} fragments.`
            ],[
                x=>`Reach <b>${format(x,0)}</b> total ${toTextStyle('Prestige','prestige')} shards without generating ${toTextStyle('Kelp','kelp')}.`,
                `Start with capped depth in every ocean.`,
            ],[
                x=>`Reach <b>${format(x,0)}</b> total ${toTextStyle('Prestige','prestige')} shards without generating resources in each ocean.`,
                `Keep research on ${toTextStyle('Evolution','humanoid')}.`,
            ],[
                x=>`Reach <b>${format(x,0)}</b> total ${toTextStyle('Prestige','prestige')} shards.`,
                `Further improve the formula of ${toTextStyle('Prestige','prestige')} shards gain.`,
            ],[
                x=>`Reach <b>${format(x,0)}</b> total ${toTextStyle('Fish','fish')} with at most <b>10</b> radioactive boosts.`,
                `Radioactive boosts no longer reset upgrades related to ${toTextStyle('Radiation '+icon("radioactive"),'core')}. You start with one generator, and ${toTextStyle('Radiation '+icon("radioactive"),'core')} can go beyond its limit.`,
            ],[
                x=>`Reach <b>${format(x,0)}</b> total ${toTextStyle('Fish','fish')} without radioactive boosts.`,
                `Radioactive boosts no longer reset anything. Unlock Auto-Radioactive Boosts.`,
            ],[
                x=>`Reach <b>${format(x,0)}</b> total ${toTextStyle('Fish','fish')}.`,
                `First ${toTextStyle('Shark','shark')} Rank scaling is delayed by <b>+5</b>.`,
            ],
        ],

        // Cultivation

        'ore-names': {
            'stone': "Stone",
            'coal': "Coal",
            'iron': "Iron",
            'gold': "Gold",
            'platinum': "Platinum",
            'diamond': "Diamond",
            'bismuth': "Bismuth",
            'obsidian': "Obsidian",
            'vibranium': "Vibranium",
            'radium': "Radium-223",
            'uranium': "Uranium-235",
            'berkelium': "Berkelium-247",
            'californium': "Californium-252",
            'oganesson': "Oganesson-294",
            'sharkium': "Sharkium",
        },

        'mined-resources-text': `Mined Resources`,
        'mining-tier': `Mining Tier`,
        'next-mining-tier': `At <b>Mining Tier</b>`,
        'mining-tier-reset': `Increase the <b>Mining Tier</b>, but it will multiply each ore's health and amount.`,
        'mining-tier-ore-unlock': x=>`Unlock ${x} ore.`,
        'mining-tier-ore-generation': x=>`You will no longer mine ${x} ore, but will generate it based on mining speed & fortune instead.`,

        'mining-ascend': `Mining Ascension`,
        'next-mining-ascend': `At <b>Mining Ascension</b>`,
        'mining-ascend-reset': `Increase the <b>Mining Ascension</b>, but it forces a singularity reset for powerful boosts.`,

        'mining-tier-bonus': [
            x=>`Ore's health is increased by <b>${formatMult(x)}</b>.`,
            x=>`<b>Stone</b> & <b>Coal</b> amount is increased by <b>${formatMult(x)}</b>.`,
            x=>`<b>Iron</b> amount is increased by <b>${formatMult(x)}</b>.`,
            x=>`<b>Gold</b> amount is increased by <b>${formatMult(x)}</b>.`,
            x=>`<b>Platinum</b> amount is increased by <b>${formatMult(x)}</b>.`,
            x=>`<b>Bismuth</b> amount is increased by <b>${formatMult(x)}</b>.`,
            x=>`<b>Diamond</b> amount is increased by <b>${formatMult(x)}</b>.`,
            x=>`<b>Obsidian</b> amount is increased by <b>${formatMult(x)}</b>.`,
            x=>`The first 9 ores are increased by <b>${formatPow(x)}</b>.`,
            x=>`Super Ore's health is increased by <b>${formatMult(x)}</b>.`,
            x=>`<b>Radium-223</b> amount is increased by <b>${formatMult(x)}</b>.`,
            x=>`<b>Uranium-235</b> amount is increased by <b>${formatMult(x)}</b>.`,
            x=>`<b>Berkelium-247</b> amount is increased by <b>${formatMult(x)}</b>.`,
            x=>`<b>Californium-252</b> amount is increased by <b>${formatMult(x)}</b>.`,
        ],

        // Forge

        'forge': {
            'anvil': ['Anvil Tier','Unlocks new forge upgrades.'],
            'drill': ['Drill Tier','Increases the multiplier of <b>Stone</b> mined.'],
            'shard': ['Refined Shard',`Increases the multiplier of ${toTextStyle('Prestige','prestige')} shards.`],
            'tree': ['Extraordinary Tree',`Unlocks new row of the ${toTextStyle('Evolution','humanoid')} tree.`],
            'adv_research': ['Advanced Research',`Unlocks new research.`],
            'auto': ['Advanced Automation',`Unlocks new automation.`],
            'shark': ['Distant Shark Level',`Delays the third scaling of ${toTextStyle('Shark','shark')} Level.`],
            'refined_shard': ['Energized Shard',`Increases the exponent of ${toTextStyle('Prestige','prestige')} shards.`],
            'wormhole': ['Wormhole',`Unlocks new Particle Accelerator.`],
            'matter': ['Matter Condenser',`Increases ${toTextStyle('Remnant','black-hole')} generation.`],
            'faith': ['Sharkoid Faith Booster',`Adds to the effect of the <b>'Sharkoid Faith Multiplier'</b> research`],
        },
        'forge-progress': (x,s) => x ? `Forging <b>${x}</b>... <b>${s}</b>` : `Forge is empty`,
        'forge-speed': x => `Forging Speed: <b>${x}</b>`,
        'forge-button': ['Cancel Forging','Start Forging','Not enough materials to forge'],

        // Particle Accelerator

        'particle-accel-condense': x => `Condense over ${x} to:`,
        'particle-accel-boost': [
            x => `Increase the ${toTextStyle('Radiation '+icon("radioactive"),'core')} production by <b>${x}</b>.`,
            x => `Increase every ocean's depth progression by <b>${x}</b>.`,
            x => `Increase <b>Stone</b> amount and mining damage by <b>${x}</b>.`,
            x => `Gain <b>${x}</b> more ${toTextStyle('Humanoid','humanoid')} Sharks.`,
            x => `Delay the first scaling of the core reactors by <b>${x}</b>.`,
            x => `Increase the exponent of ${toTextStyle("Shark",'shark')} ELO by <b>${x}</b>.`,
        ],

        // Singularity

        'black-hole-texts': [
            `Have enough matter to form a black hole.... But what are you doing while stuck inside a black hole? No worries, there is a white hole that sends you into another universe, but it's a bit complex.`,
            `How have you been in a parallel universe? So, you're going to get stuck in another black hole!`,
            `Wait a minute... How did you get ${toTextStyle("Fish",'fish')} faster, no matter what? I'm going to put you in serious trouble!`,
            `Seriously...`,
            `...`,
            `Please stop it here!`,
            `THIS IS YOUR LAST CHANCE!`,
            `Ugh... Fine... You win! Here's without reductions...`,
        ],
        get 'singularity-milestones'() {
            return [
                [`1 Black Hole`,`Unlock ${toTextStyle("Remnants",'black-hole')}. ${toTextStyle("Shark",'shark')} Level boosts ${toTextStyle("Remnant",'black-hole')} generation.`],
                [`2 Black Holes`,`Start with automations unlocked on reset, with starting interval. ${toTextStyle("Shark",'shark')} Rank boosts ${toTextStyle("Remnant",'black-hole')} generation.`],
                [`3 Black Holes`,`Keep automations on reset. Start with pre-cultivation features unlocked and 10 ${toTextStyle("Humanoid",'humanoid')} Sharks. Unlock more new research.`],
                [`4 Black Holes`,`Keep ${toTextStyle("Evolution",'humanoid')} goals competed on reset. Particle accelerators are ten times faster.`],
                [`5 Black Holes`,`Ore’s health scales weaker. Unlock more automations.`],
                [`6 Black Holes`,`Double ${toTextStyle("Remnant",'black-hole')} generation every black hole you formed.`],
                [`7 Black Holes`,`Start with cultivation unlocked on reset.`],
                [`8 Black Holes`,`${toTextStyle("Black Hole",'black-hole')}’s penalties are now removed if you have formed 8 current ${toTextStyle("Black Holes",'black-hole')}. Forming it no longer plays animation. Unlock next feature.`],
            
                [`1 Total Dark Matter`,`Keep pre-${toTextStyle("Singularity",'black-hole')} research, ${toTextStyle("Evolution",'humanoid')} tree, and forges on reset. Unlock more research.`],
                [`10 Total Dark Matter`,`Automatically activate all particle accelerators at once.`],
                [`${format(1e6)} Total Dark Matter`,`Keep research <b>s1-s3</b> on sacrifice. Unlock new automation. Remnant upgrades no longer spend remnants.`],
                [`${format(1e12)} Total Dark Matter`,`Unlock next feature.`],
            ]
        },

        'remnant-upgrades': [
            [`Welcome`,x=>`${toTextStyle("Shark",'shark')} Level Bonuses are ${x} stronger.`],
            [`Flowing`,x=>`Exploration base multiplier is boosted by ${x}.`],
            [`Half-life`,x=>`${toTextStyle("Core",'core')} Reactors are ${x} stronger.`],
            [`No Wasting Time`,x=>`Forging speed is increased by ${x}.`],

            [`Welcome Again`,x=>`${toTextStyle("Fish",'fish')} boosts itself by ${x}.`],
            [`Grandmaster`,x=>`${toTextStyle("Shark",'shark')} Rank Bonuses are ${x} stronger.`],
            [`Galactic Level`,x=>`The first 3 scalings of ${toTextStyle("Shark",'shark')} Level are delayed by ${x}.`],
            [`Shark Master`,x=>`${toTextStyle("Shark",'shark')} ELO is increased by ${x}.`],

            [`Bottomless Depth`,x=>`Each ocean's depth progress is boosted by ${x}.`],
            [`Hot Potato`,x=>`Radioactive boosts are ${x} stronger.`],
            [`Mega Level`,x=>`The fourth scaling of ${toTextStyle("Shark",'shark')} Level is delayed by ${x}.`],
            [`Elite Miner`,x=>`The third scaling of mining tier is delayed by ${x}.`],

            [`Self-Accelerator`,x=>`${toTextStyle("Remnants",'black-hole')} boost themselves by ${x}.`],
            [`Ultimate Power`,x=>`The first 12 ${toTextStyle("Remnant",'black-hole')} upgrades are ${x} more powerful, except 4th.`],
            [`Efficiency VI`,x=>`The super mining damage is boosted by ${x}.`],
            [`Supernatural Shark`,x=>`The exponent of ${toTextStyle("Humanoid",'humanoid')} sharks is increased by ${x}.`],
        ],

        'solar-system-list': {
            'sun':     ["Sun",`The sun is the star of our Solar System, and it is the final challenge, it is also very hot. Good luck!`,`Unlock the next Singularity feature, and also boost the base of the forge upgrade <b>'Matter Condenser' again.`],
            'mercury': ["Mercury",`Mercury is the smallest planet in the solar system and closest to the Sun. It is named after the ancient Roman god of commerce because it moves across the sky faster than the other planets. Mercury is covered in impact craters and is similar to the Moon in appearance, indicating a lack of internal geologic activity over the past billion years. The planet has almost no atmosphere, so its surface temperature varies more than any other planet in the solar system.`,`The first 3 scalings of radioactive boost are delayed by ×10. Multiply ${toTextStyle('Observatories','observ')} generation by 10 again.`],
            'venus':   ["Venus",`Venus is the second farthest from the Sun and the sixth-largest planet in the Solar System. It is named after the ancient Roman goddess of love. Venus has a dense atmosphere consisting of more than 96% carbon dioxide. Venus has an average surface temperature of 735 K (462 °C), making it the hottest planet in the solar system. Venus has no natural satellites. In the Earth's sky, it is the third-brightest luminary, after the Sun and the Moon.`,`Passively generate 100% of current ${toTextStyle('Humanoid','humanoid')} sharks as bonus ${toTextStyle('Humanoid','humanoid')} sharks, but auto-${toTextStyle('Humanoid','humanoid')} shark no longer works. Improve ${toTextStyle('Humanoid','humanoid')} shark drastically, and the third scaling of ${toTextStyle('Shark','shark')} rank is delayed by ×2. Multiply ${toTextStyle('Observatories','observ')} generation by 10.`],
            'earth':   ["Earth",`???`,`???`],
            'moon':    ["Moon",`Welcome to the Solar System! So, you are free to explore some planet, but it requires observing for powerful rewards. Force a singularity reset, resetting some research and evolution tree (it returns after), but black hole’s reduction is forced to ^0.5, nearly post-cultivation features are disabled, and you cannot explore any ocean. You can generate ${toTextStyle('Observatories','observ')} in the space-base, which helps you progress faster with their upgrades. There is difficulty, it affects not progress, but the space-base features to make progress further. Let’s start with Moon of the Earth! It’s called Luna, but Theta, originally before the collision.`,`Unlock the Mining Ascension and new ${toTextStyle('Remnant','black-hole')} upgrade. Mining ascension forces a singularity reset for powerful bonus and various ores.`],
            'mars':    ["Mars",`Mars is the fourth most distant planet from the Sun in the Solar System. It belongs to the planets of the Earth group, as it has a solid surface and a size comparable to Earth. The terrain of Mars has unique features, including impact craters, volcanoes, valleys, deserts, and polar ice caps. Mars has geologic formations that resemble water erosion and minerals that could only have been formed by prolonged exposure to water. The question of the existence of life on Mars has interested scientists for centuries.`,`Earn the ability to terraform any purchased ${toTextStyle('Evolution','humanoid')} tree for powerful bonuses, but the cost grows faster. Unlock new automation. Multiply ${toTextStyle('Observatories','observ')} generation by 10.`],
            'jupiter': ["Jupiter",`Jupiter is the largest planet in the Solar System and the fifth farthest from the Sun. It is a gas giant with a mass 2.47 times greater than the combined mass of all the other planets in the Solar System. Jupiter has been known since antiquity and is mentioned in mythology and religious beliefs of different cultures. The modern name of the planet comes from the name of the ancient Roman supreme thunder god. Jupiter's atmosphere is characterized by a number of atmospheric phenomena such as storms, lightning, auroras and the Great Red Spot, a giant storm known since the 17th century.`,`Unlock more ${toTextStyle('Remnant','black-hole')} upgrades. Multiply ${toTextStyle('Observatories','observ')} generation by 10 again.`],
            'saturn':  ["Saturn",`Saturn is the sixth planet from the Sun and the second-largest planet in the solar system after Jupiter. Saturn is classified as a gas giant because it is composed mostly of hydrogen and helium. The planet is named after the Roman god of agriculture. Saturn is surrounded by rings made up of ice particles, heavy elements and dust. The planet has 146 known satellites, the largest of which is Titan. Saturn has a planetary magnetic field and a prominent ring system.`,`Unlock a new row of ${toTextStyle('Core','core')} reactors. <i>These reactors don’t get reset by Evolution or later, but they aren’t affected by the ${toTextStyle('Remnant','black-hole')} upgrade “Half-life”.</i>`],
            'uranus':  ["Uranus",`Uranus is the seventh planet from the Sun and the third-largest planet in the solar system. It's classified as an ice giant due to its composition, which is primarily made up of icy materials such as water, ammonia, and methane, along with a rocky core. The planet is named after the ancient Greek deity of the sky, Uranus.`,`${toTextStyle('Dark Matter','black-hole')} can now be generated automatically, and it is also boosted. Unlock a new shark upgrade`],
            'neptune': ["Neptune",`Neptune is the eighth and farthest planet from the Sun in our solar system. It is a gas giant, much like Jupiter and Saturn, but it has a distinct blue color due to the presence of methane in its atmosphere. Neptune was discovered in 1846, and it is named after the Roman god of the sea. The planet is about 17 times the mass of Earth and has a diameter of around 49,500 kilometers (30,775 miles).`,`Boost ${toTextStyle('Observatories','observ')} gain by a lot, the first 3 scalings of radioactive boost are delayed by ×10 again, and unlock new research.`],
            'pluto':   ["Pluto",`Pluto is a dwarf planet located in the Kuiper Belt, a region of the solar system beyond Neptune filled with icy bodies and rocky debris. Once considered the ninth planet, Pluto was reclassified as a dwarf planet in 2006 due to its small size and the discovery of other similar objects in its orbit. Pluto has a thin atmosphere composed mainly of nitrogen, with traces of methane and carbon monoxide, and its surface is made up of frozen nitrogen, methane, and water ice. It has five known moons, the largest of which is Charon, and it takes approximately 248 Earth years to complete one orbit around the Sun.`,`Automate all mining ascension upgrades, and boost the base of the forge upgrade <b>'Matter Condenser'</b>`],
        },
        'build-rocket-part': x => `Build ${x} Rocket Parts.`,
        'total-rp': "total RP",
        'solar-system-lock-reward': `You must complete ${toTextStyle('observing','observ')} to reveal the reward.`,
        'solar-system-goal': x => `Total ${toTextStyle('Observatories','observ')} goal: <h4>${x}</h4>`,
        'solar-system-status': x => [`Start Observing`,`Give up Observing`,`Complete Observing`][x],
        'observ-progress': x => `Reach <b>${x}</b> total ${toTextStyle('Observatories','observ')}`,
        'observ-cond': `Complete ${toTextStyle('observing','observ')}`,

        'space-base-upgrades': {
            'o1': [`The Space`,x=>`${toTextStyle('Observatories','observ')} are boosted by ${x}.`],
            'o2': [`Space Fish`,x=>`${toTextStyle('Fish','fish')} is boosted by ${x}.`],
            'o3': [`Space Prestige`,x=>`${toTextStyle('Prestige shards','prestige')} are boosted by ${x}.`],
            'o4': [`Space Core`,x=>`${toTextStyle('Magmatic fragments','core')} are boosted by ${x}.`],
            
            'e1': [`Fish Exchanger`,x=>`${toTextStyle('Observatories','observ')} are boosted by ${x}.`],
            'e2': [`Prestige Exchanger`,x=>`${toTextStyle('Observatories','observ')} are boosted by ${x}.`],
            'e3': [`Core Exchanger`,x=>`${toTextStyle('Observatories','observ')} are boosted by ${x}.`],
            'e4': [`Observe-Reservatory`,x=>`${toTextStyle('Reservatories','reserv')} are boosted by ${x}.`],
            'e5': [`Universal Exchanger`,x=>`The base of observatory upgrades “Exchanger” is increased by ${x}.`],
            'e6': [`Reserve-Trajectory`,x=>`${toTextStyle('Trajectories','traject')} are boosted by ${x}.`],

            'r1': [`The Relative`,x=>`${toTextStyle('Observatories','observ')} are boosted by ${x}.`],
            'r2': [`Observable`,x=>`${toTextStyle('Reservatories','reserv')} are boosted by ${x}.`],
            'r3': [`Space Fish II`,x=>`${toTextStyle('Fish','fish')} is boosted by ${x}.`],
            'r4': [`Space Prestige II`,x=>`${toTextStyle('Prestige shards','prestige')} are boosted by ${x}.`],

            't1': [`The Transport`,x=>`${toTextStyle('Observatories','observ')} are boosted by ${x}.`],
            't2': [`Reservable`,x=>`${toTextStyle('Reservatories','reserv')} are boosted by ${x}.`],
            't3': [`Observable II`,x=>`${toTextStyle('Trajectories','traject')} are boosted by ${x}.`],
            't4': [`Space Fish III`,x=>`${toTextStyle('Fish','fish')} is boosted by ${x}.`],

            'p1': [`Observe-Trajectory`,x=>`${toTextStyle('Trajectories','traject')} are boosted by ${x}.`],
            'p2': [`Final Observation`,x=>`The exponent of ${toTextStyle('Observatories','observ')} is boosted by ${x}.`],
        },

        // Automation

        'auto-shark-name': `Auto-${toTextStyle("Shark","shark")} Level`,
        'auto-su-name': `Auto-${toTextStyle("Shark","shark")} ${toTextStyle("Fish","fish")} Upgrade`,
        'auto-spu-name': `Auto-${toTextStyle("Shark","shark")} ${toTextStyle("Prestige","prestige")} Upgrade`,
        'auto-eu-name': `Auto-Exploration Upgrade`,
        'auto-core_reactor-name': `Auto-${toTextStyle("Core","core")} Reactor`,
        'auto-core_radiation-name': `Auto-${toTextStyle("Core","core")} Radiation`,
        'auto-radioactive_boosts-name': `Auto-Radioactive Boosts`,
        'auto-mining_upgs-name': `Auto-${toTextStyle("Shark","shark")} Mining Upgrade`,
        'auto-humanoid-name': `Auto-${toTextStyle("Humanoid","humanoid")} Shark`,
        'auto-research-name': `Auto-Pre-${toTextStyle("Singularity","black-hole")} Research`,
        'auto-mining_tier-name': `Auto-Mining Tier`,
        'auto-remnant-name': `Auto-${toTextStyle("Remnant","black-hole")} Upgrades`,
        'auto-faith-name': `Auto-${toTextStyle("Sharkoid Faith","humanoid")}`,

        'auto-cost': (D,cost,name) => `Decrease Interval by ${formatReduction(D,0)}.<br>Cost: ${format(cost,0)} ${name}`,
        'auto-interval': (a,b,maxed) => `Interval: ${format(a,3)}s`+(maxed ? "" :` ➜ ${format(b,3)}s`),

        // Progress

        'progress-0-text': r => `Reach ${format(r)} total ${toTextStyle('Fish','fish')}`, 
        get 'progress-0-cond-text'() { return `Do a ${toTextStyle('Prestige','prestige')}` },

        'progress-1-text': r => `Reach ${format(r)} ${toTextStyle('Prestige','prestige')} shards to unlock Automation`,
        'progress-2-text': r => `Reach ${format(r)} ${toTextStyle('Prestige','prestige')} shards to unlock Research`,
        'progress-3-text': r => `Reach ${toTextStyle('Shark','shark')} Level ${format(r,0)} to unlock Exploration`,
        'progress-4-text': r => `Reach ${format(r)}m of Pacific ocean's depth to unlock the ${toTextStyle('Core','core')}`,

        'progress-5-text': r => `Reach ${format(r)} total ${toTextStyle('Prestige','prestige')} shards`, 
        get 'progress-5-cond-text'() { return `Enter the ${toTextStyle('Core','core')}` },

        'progress-6-text': r => `Reach ${format(r)} ${toTextStyle('Magmatic','core')} fragments to unlock the next ${toTextStyle('Core','core')} feature`, 
        'progress-7-text': r => `Reach ${toTextStyle('Shark','shark')} Level ${format(r,0)} to unlock new ocean type`, 
        'progress-8-text': r => `Reach ${format(r)} ${toTextStyle('Magmatic','core')} fragments to unlock the next ${toTextStyle('Core','core')} feature`, 
        'progress-9-text': r => `Reach ${format(r)} total ${toTextStyle('Fish','fish')} to unlock new ${toTextStyle('Core','core')} reactors`, 

        'progress-10-text': r => `Reach ${format(r)} total ${toTextStyle('Fish','fish')}`, 
        get 'progress-10-cond-text'() { return `Evolve your ${toTextStyle('Sharks','shark')}` },

        'progress-11-text': r => `Reach ${format(r,0)} ${toTextStyle('Humanoid','humanoid')} sharks to unlock the next ${toTextStyle('Evolution','humanoid')} feature`, 
        'progress-12-text': r => `Reach ${format(r,0)} ${toTextStyle('Humanoid','humanoid')} sharks to unlock the next ${toTextStyle('Evolution','humanoid')} feature`, 
        'progress-13-text': r => `Reach Mining Tier ${format(r,0)} to unlock a new row of ${toTextStyle('Evolution','humanoid')} tree`, 
        'progress-14-text': r => `Reach Mining Tier ${format(r,0)} to unlock the next ${toTextStyle('Evolution','humanoid')} feature`, 
        'progress-15-text': r => `Reach Mining Tier ${format(r,0)} to unlock the next ${toTextStyle('Evolution','humanoid')} feature`,

        'progress-16-text': r => `Fill ${format(r,0)} particle accelerators`, 
        get 'progress-16-cond-text'() { return `Form ${toTextStyle('Black Hole','black-hole')}` },

        'progress-17-text': r => `Form ${format(r,0)} ${toTextStyle('Black Holes','black-hole')}`,

        'progress-18-text': r => `Reach ${format(r)} total ${toTextStyle('Fish','fish')}`, 
        get 'progress-18-cond-text'() { return `Do a ${toTextStyle('Sacrifice','black-hole')}` },

        'progress-19-text': r => `Reach ${format(r)} total ${toTextStyle('Dark Matter','black-hole')}`,

        'progress-20-text': r => `Reach ${format(r)} total ${toTextStyle('Fish','fish')} to unlock the next ${toTextStyle('Singularity','black-hole')} feature`,

        'maxed-progress': "All features unlocked!",

        // Reset

        get 'reset-prestige-message'() {
            let p = toTextStyle('Prestige','prestige'), s = toTextStyle('Shark','shark'), f = toTextStyle('Fish','fish')
            return `
            <h3>${p}</h3><br>
            ${p} is the first reset layer. Prestiging resets your ${s}, ${s} upgrades, and ${f} for ${p} shards.
            First ${p} unlocks new ${s} upgrades.<br>
            <img src="textures/PrestigeShard.png"><br>
            Are you sure you want to prestige?
            `
        },
        get 'reset-core-message'() {
            let c = toTextStyle('Core','core'), m = toTextStyle('Magmatic','core'), p = toTextStyle('Prestige','prestige')
            return `
            <h3>The ${c}</h3><br>
            The ${c} is the second reset layer. Entering the core resets everything ${p} does, as well as ${p} shards, ${p} upgrades, some ${toTextStyle('Research','prestige')}, and Exploration for ${m} fragments.
            It also unlocks the ${c} reactor.<br>
            <img src="textures/Magmatic.png"><br>
            Are you sure you want to enter the core?
            `
        },
        get 'reset-humanoid-message'() {
            let e = toTextStyle('Evolution','humanoid'), c = toTextStyle('Core','core'), m = toTextStyle('Magmatic','core'), p = toTextStyle('Prestige','prestige')
            return `
            <h3>The ${e}</h3><br>
            <subtitle>“Mutating will make sharks wild, turning them into humanoid sharks. However with a cost of everything you had up to this point.”</subtitle>
            The ${e} is the third reset layer. Evolving sharks will reset everything the ${c} does, as well as ${m} fragments, ${c} reactors, ${c} radiation, ${c} assembler, and some ${toTextStyle('Research','prestige')} for ${toTextStyle('Humanoid','humanoid')} sharks.
            It also unlocks the Rank and the ${e} tree.<br>
            <img src="textures/Evolution.png"><br>
            Are you sure you want to evolve your sharks?
            `
        },
        get 'reset-black-hole-message'() {
            let e = toTextStyle('Black Hole','black-hole'), c = toTextStyle('Evolution','humanoid')
            return `
            <h3>The ${e}</h3><br>
            The ${e} is the fourth and major reset layer.
            Forming the ${e} resets everything ${c} does, as well as shark rank, humanoid sharks, evolution tree, sharkoid faith, evolution goals, cultivation, forge, particle accelerators, some research, some automations, and some feature progress for a new ${e}.
            However, every ${e} reduces resources a bit, but it unlocks benefits like milestones.<br>
            <img src="textures/black-hole.png"><br>
            Are you sure you want to enter another universe?
            `
        },
        get 'reset-sacrifice-message'() {
            let e = toTextStyle('Sacrifice','black-hole'), c = toTextStyle('Black Hole','black-hole')
            return `
            <h3>The ${e}</h3><br>
            The ${e} is the reset mini-layer.
            Sacrificing your sharks resets everything the ${c} does, as well as current black holes (except the first 7 milestones), remnants, remnant upgrades, and some research for ${toTextStyle('Dark Matter','black-hole')}.<br>
            <img src="textures/sacrifice.png"><br>
            Are you sure you want to sacrifice your sharks?
            `
        },
        
        // Other

        'scalings': {
            'shark_level' : `Shark Level`,
            'shark_rank' : `Shark Rank`,
            'su_s3' : `"Shark Teeth" Upgrade`,
            'su_s4' : `"Shark Exponent" Upgrade`,
            'su_m1' : `"Mining Damage" Upgrade`,
            'su_m3' : `"Compressed Stone" Upgrade`,
            'su_m5' : `"Basic Ore" Upgrade`,
            'cr_boost' : `Radioactive Boost`,
            'mining_tier' : `Mining Tier`,
            'mining_ascend' : `Mining Ascension`,
            'remnant_upg' : `Remnant Upgrades`,
        },
        'scaling-start': "Starts at",
        'scaling-mode': {
            "L": x => `<b>${x}</b> linearly`,
            "D": x => `<b>${x}</b> to exponent`,
        },
        'scaling-info': `Scalings will be added as soon as you reach them. <b>N</b> - amount, <b>S</b> - starting`,

        'upgrade-shark': x => `Upgrade ${toTextStyle('Shark','shark')} Level<br>Cost: ${x.format(0)} ${toTextStyle('Fish','fish')}`,
        'shark-bonus-fish': x => `+${x.format(0)} ${toTextStyle('Fish','fish')}'s base`,
        'shark-bonus-prestige': x => `${formatMult(x)} ${toTextStyle('Prestige','prestige')} shard`,
        'shark-bonus-core': x => `${formatMult(x)} ${toTextStyle('Magmatic','core')} fragments`,
        'shark-bonus-remnants': x => `+${x.format(0)} ${toTextStyle('Remnants','black-hole')}`,

        'shark-overpopulation': (x,y) => `Due to ${toTextStyle('Shark','shark')} overpopulation at <h4>${toTextStyle(format(y),'fish')}</h4>, ${toTextStyle('Fish','fish')} eaten is reduced by <h4>${format(x,3)}√</h4>.`,

        'shark-rank-bonuses': {
            fish: x => `${formatPow(x)} ${toTextStyle('Fish','fish')}`,
            prestige: x => `${formatPow(x)} ${toTextStyle('Prestige','prestige')} shard`,
            mining_damage: x => `${formatMult(x)} Mining Damage`,
            so: x => `${formatPow(x)} ${toTextStyle('Shark','shark')} overpopulation delay`,
            vibranium: x => `${formatMult(x)} <b>Vibranium</b>`,
            remnants: x => `${formatMult(x)} ${toTextStyle('Remnants','black-hole')}`,
        },

        'total': "total",
        'level': "Level",
        'effect': "Effect",
        'cost': "Cost",
        'buyMax': "Buy Max",
        'require': "Require",
        'next-at': "Next at",
        'depth': "Depth",
        'reward': "Reward",
        'new-preset': "New Preset",
        'maxed': "Maxed",
        'difficulty': "Difficulty",

        'remove': "Remove",
        'overwrite-current': "Overwrite Current",
        'load': "Load",
        'force-load': "Force Load",

        'offline-time-text': x=>`You have been offline for <b>${formatTime(x,0)}</b>.`,

        'research-afford': bool => bool ? "Purchase" : "Can't Afford",
        'research-bought': bool => bool ? `<b>Purchased</b>` : `<b>Not Purchased</b>`,
        'research-pages': x => `${x} pages`,

        'off-on': bool => bool ? "ON" : "OFF",

        'popup-buttons': [
            ["Yes","No"],
            ["Ok","Cancel"],
        ],

        'popup-desc' : {
            import: `Paste in your save. WARNING: WILL OVERWRITE YOUR CURRENT SAVE!`,
            wipe: `Are you sure you want to wipe your save? To wipe, type "<span class="free-select">I'm sorry what I don't want sharks!</span>"`,
            "evolution-tree-respec": `Are you sure you want to respec ${toTextStyle('Evolution','humanoid')} tree? It will trigger an ${toTextStyle('Evolution','humanoid')} reset, not gaining ${toTextStyle('Humanoid','humanoid')} sharks.`,
            "evolution-tree-import": `Paste in your evolution tree.`,
        },

        'notify-desc' : {
            save: "Game Saved!",
            copy_to_clipboard: "Copied to Clipboard!",
            forge_completed: x => `Forged <b>${x}</b> successfully!`,
        },

        'radio-desc' : {
            'notation': ['Formatting Notation',['Scientific','Standard','Mixed Scientific','Logarithm']],
            'comma-format': ['Maximum OoMs of Number Commas',['3','6','9','12','15']],
            'autosave': ['Autosaving',['Disabled','Enabled']],
            'autosave-time': ['Autosave Interval',['15s','30s','60s','120s']],
            'offline': ['Offline Progress',['Disabled','Enabled']],
            'max-research-amt': ['Maximum research upgrades per page',['∞','15','20','25','30']],
            'visible-research': [`Purchased research's visibility`,["Shown","Hidden"]],
            'notify': ['Tab Notification',['Disabled','Enabled']],
        },

        'radio-desc-default' : ['Disabled','Enabled'],

        'prompt-placeholder': "Type text here...",

        'option-buttons-text': ["Save","Export to clipboard","Export as file","Import from prompt","Import from file","WIPE!!!",'Join the community (Discord)','Support the creator (Boosty)'],

        'confirm-prestige': "Prestige",
        'confirm-core': "Enter the Core",
        'confirm-humanoid': "Evolve Sharks",
        'confirm-black-hole': "Form the Black Hole",
        'confirm-sacrifice': "Sacrifice Sharks",
    },
}
