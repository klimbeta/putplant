import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'en-US',
  title: 'Plantbeta',
  description: 'The elements ',
  lastUpdated: true,
  base: '/plantbeta/',
  ignoreDeadLinks: true,
  appearance: 'dark',
  head: [
    ['link', { rel: "apple-touch-icon", sizes: "180x180", href: "/apple-touch-icon.png" }],
    ['link', { rel: "icon", type: "image/png", sizes: "32x32", href: "/favicon-32x32.png" }],
    ['link', { rel: "icon", type: "image/png", sizes: "16x16", href: "/favicon-16x16.png" }],
    ['link', { rel: "manifest", href: "/site.webmanifest" }],],
  themeConfig: {

    outline: [2, 4],
    logo: 'android-chrome-512x512.png',
    socialLinks: [
      { icon: 'youtube', link: 'https://www.youtube.com/@Klimbeta' },
      { icon: 'instagram', link: 'https://www.instagram.com/the_plantbeta/' },
      { icon: 'github', link: 'https://github.com/klimbeta/plantbeta' }
    ],
    footer: {
      message: '',
      copyright: 'Copyright Plantbeta © 2023-present'
    },
    search: {
      provider: 'local'
    },

    siteTitle: 'Plantbeta',
    nav: nav(),

    sidebar: {
      '/guide/': sidebarGuide(),
      '/reference/': sidebarReference(),
      '/tutorials/': sidebarTutorials(),
      '/dev/': sidebarDevelopment(),
    }
  }
})
// #Dev
function sidebarDevelopment() {
  return [
    { text: '<dev>Dev Overview</dev>', link: '/dev/DevOverview' },
    { text: '<dev>Contact</dev>', link: '/dev/Contact' },
    { text: '<dev>Academia</dev>', link: '/dev/Academia' },
    { text: '<dev>Art</dev>', link: '/dev/art/Overview' },
    { text: '<dev>Data Visualization</dev>', link: '/dev/ElementsGraph' },
    { text: '<dev>Donate Media</dev>', link: '/dev/Donation' },
    { text: '<dev>Downloads</dev>', link: '/dev/Downloads' },
    { text: '<dev>DX</dev>', link: '/dev/DX' },
    {
      text: '<dev>Graphics</dev>', collapsed: true, items: [
        { text: '<dev><beta>Beta Graphics</beta>', link: '/dev/Graphics/BetaGraphic' },
        { text: '<eco>Eco Graphics</eco>', link: '/dev/Graphics/EcoGraphic' },
        { text: '<move>Move Graphics</move>', link: '/dev/Graphics/MoveGraphic' },
        { text: '<neuro>Neuro Graphics</neuro>', link: '/dev/Graphics/NeuroGraphic' },
        { text: '<route>Via Graphics</route>', link: '/dev/Graphics/ViaGraphic' },
        { text: 'UX Graphics', link: '/dev/Graphics/UXGraphic' },
        { text: '<dev>DX Graphics</dev>', link: '/dev/Graphics/DXGraphic' },
      ]
    },
    { text: '<dev>Offline</dev>', link: '/dev/Offline' },
    { text: '<dev>Open Source</dev>', link: '/dev/OpenSource' },
    { text: '<dev>PaperPhoto</dev>', link: '/dev/PaperPhoto' },
    { text: '<dev>PythonPlanter</dev>', link: '/dev/PythonPlanter' },
    { text: '<dev>Research Questions</dev>', link: '/dev/ResearchQuestions' },
    { text: '<dev>Roadmap</dev>', link: '/dev/Roadmap' },
    { text: '🔷 <dev>Phrase</dev>', link: '/dev/Phrase' },
    { text: '<dev>Simulation</dev>', link: '/dev/Simulation' },
    { text: '<dev>SocialMedia</dev>', link: '/dev/SocialMedia' },
    { text: '<dev>StyleGuide</dev>', link: '/dev/StyleGuide' },
    { text: '<dev>Tagging</dev>', link: '/dev/Tagging' },
    { text: '<dev>Tools</dev>', link: '/dev/Tools' },
    { text: '<dev>UX</dev>', link: '/dev/UX' },
    { text: '<dev>AfternoonTask</dev>', link: '/dev/AfternoonTask' },
  ]
}

// # Nav
function nav() {
  return [
    {
      text: 'Guide',
      link: '/guide/What/WhatPlantbeta',
      activeMatch: '/guide/'
    },
    {
      text: 'Reference',
      link: '/reference/ReferenceOverview',
      activeMatch: '/reference/'
    },
    {
      text: 'Tutorials',
      link: '/tutorials/TutorialsOverview',
      activeMatch: '/tutorials/'
    },
    {
      text: '🛠',
      link: 'dev/DevOverview',
      activeMatch: '/dev/'
    }
  ]
}

//#Guide
function sidebarGuide() {
  return [
    {
      text: 'Introduction',
      collapsed: false,
      items: [
        { text: 'What is Tree Planting?', link: '/guide/What/WhatTreePlanting' },
        { text: 'What is Plantbeta?', link: '/guide/What/WhatPlantbeta' },
      ]
    },
    {
      text: 'Purpose', collapsed: false, items: [
        { text: '🔥🌲🔥 <eco>To Replant Burnt Land</eco>', link: '/guide/Why/Wildfire' },
        { text: '🟠 <move>To Reduce Injury</move>', link: '/guide/Why/Injury' },
        { text: '🔺 <route>To Increase Productivity</route>', link: '/guide/Why/Productivity' },
        { text: '🔷 <beta>To Improve Communication</beta>', link: '/guide/Why/Communication' },
        { text: '💜 <neuro>To Steepen Learning Curve</neuro>', link: '/guide/Why/LearningCurve' },
        { text: '💲 To Increase Profit', link: '/guide/Why/Company' }
      ]
    },
    {
      text: 'Planter Guide', collapsed: false, items: [
        { text: 'Potential Planter', link: '/guide/Who/PotentialPlanter' },
        { text: 'Novice Planter', link: '/guide/Who/NovicePlanter' },
        { text: 'Experienced Planter', link: '/guide/Who/ExperiencedPlanter' },
        { text: 'Planter Supervisor', link: '/guide/Who/PlanterSupervisor' },
        { text: 'Planter Instructor', link: '/guide/Who/PlanterInstructor' }
      ]
    },
    {
      text: 'Gear Guide', collapsed: false, items: [
        { text: 'What Gear to bring?', link: '/guide/What/WhatGear' },
        { text: 'Gear List', link: '/guide/What/GearList' }
      ]
    },
    { text: 'Go to Reference', link: '/reference/Overview' },
  ]
}
// 
function sidebarReference() {
  return [
    { text: '<strong>Reference Overview</strong>', link: '/reference/ReferenceOverview' },
    // #Beta
    {
      text: '🔷 <beta>Beta</beta>', collapsed: true, items: [
        { text: '🔷 <beta>What is Beta</beta>?', link: '/reference/Beta/BetaOverview' },
        { text: '🔷 <beta>Beta Examples</beta>', link: '/reference/Beta/BetaExamples' },
        { text: '🔷 <beta>BetaAction</beta>', link: '/reference/Beta/BetaAction' },
        { text: '🔷 <beta>BetaDiagram</beta>', link: '/reference/Beta/BetaDiagram' },
        {
          text: '🔷 <beta>BetaScript</beta>', collapsed: true, items: [
            { text: '🔷 <beta>Overview</beta>', link: '/reference/Beta/BetaScript/Overview' },
          ]
        },
        {
          text: '🔷 <beta>BetaScore</beta>', collapsed: true, items: [
            { text: '🔷 <beta>Overview</beta>', link: '/reference/Beta/BetaScore/Overview' },
            { text: '🔷 <beta>BetaExecution</beta>', link: '/reference/Beta/BetaScore/BetaExecution' },
            {
              text: '🔷 <beta>BetaDifficulty</beta>', collapsed: true, items: [
                { text: '🔷 <beta>Overview</beta>', link: '/reference/Beta/BetaScore/BetaDifficulty/Overview' },
                { text: '🔷 <beta>BetaComplexity</beta>', link: '/reference/Beta/BetaScore/BetaDifficulty/BetaComplexity' },
                { text: '🔷 <beta>BetaRisk</beta>', link: '/reference/Beta/BetaScore/BetaDifficulty/BetaRisk' },
                { text: '🔷 <beta>BetaIntensity</beta>', link: '/reference/Beta/BetaScore/BetaDifficulty/BetaIntensity' }
              ]
            }
          ]
        },
      ]
    },
    // #Eco
    {
      text: '🟩 <eco>Eco</eco>', collapsed: true, items: [
        { text: '🟩 <eco>Eco Overview</eco>', link: '/reference/Eco/EcoOverview' },
        { text: '🔷 <eco>Eco Phrase</eco>', link: '/reference/Eco/EcoPhrase/Overview' },
        { text: '🔷 <eco>Eco Difficulty</eco>', link: '/reference/Eco/EcoDifficulty' },
        {
          text: '🟩 <eco>Animals</eco>', collapsed: true, items: [
            { text: '🟩 <eco>Animals Overview</eco>', link: '/reference/Eco/Animals/Overview' },

          ]
        },
        {
          text: '🟩 <eco>Area</eco>', collapsed: true, items: [
            { text: '🟩 <eco>Area Overview</eco>', link: '/reference/Eco/Area/Overview' },
            { text: '🟩 <eco>PocketArea</eco>', link: '/reference/Eco/Area/PocketArea' },
            { text: '🟩 <eco>RiparianArea</eco>', link: '/reference/Eco/Area/RiparianArea' },
            { text: '🟩 <eco>RockCapArea</eco>', link: '/reference/Eco/Area/RockCapArea' },
            { text: '🟩 <eco>SlashPileArea</eco>', link: '/reference/Eco/Area/SlashPileArea' },
          ]
        },
        {
          text: '🟩 <eco>Atmosphere</eco>', collapsed: true, items: [
            { text: '🟩 <eco>Overview</eco>', link: '/reference/Eco/Atmosphere/Overview' },
            { text: '🟩 <eco>AirTemperature</eco>', link: '/reference/Eco/Atmosphere/AirTemperature' },
            { text: '🟩 <eco>Humidity</eco>', link: '/reference/Eco/Atmosphere/Humidity' },
            { text: '🟩 <eco>Precipitation</eco>', link: '/reference/Eco/Atmosphere/Precipitation' },
            { text: '🟩 <eco>Wind</eco>', link: '/reference/Eco/Atmosphere/Wind' },
          ]
        },
        {
          text: '🟩 <eco>Block</eco>', collapsed: true, items: [
            { text: '🟩 <eco>Block Overview</eco>', link: '/reference/Eco/Block/Overview' },
            { text: '🟩 <eco>FillBlock</eco>', link: '/reference/Eco/Block/FillBlock' },
            { text: '🟩 <eco>Road</eco>', link: '/reference/Eco/Block/Road' },
          ]
        },
        {
          text: '🟩 <eco>Density</eco>', collapsed: true, items: [
            { text: '🟩 <eco>Density Overview</eco>', link: '/reference/Eco/Density/Overview' },
            { text: '🟩 <eco>Plot</eco>', link: '/reference/Eco/Density/Plot' },

          ]
        },
        {
          text: '🟩 <eco>LandSpeed</eco>', collapsed: true, items: [
            { text: '🟩 <eco>LandSpeed Overview</eco>', link: '/reference/Eco/LandSpeed/Overview' },
            { text: '🟩 <eco>FastLand</eco>', link: '/reference/Eco/LandSpeed/FastLand' },
            { text: '🟩 <eco>SlowLand</eco>', link: '/reference/Eco/LandSpeed/SlowLand' },
          ]
        },
        {
          text: '🟩 <eco>Obstacle</eco>', collapsed: true, items: [
            { text: '🟩 <eco>Obstacle Overview</eco>', link: '/reference/Eco/Obstacle/Overview' },
            { text: '🟩 <eco>HoleObstacle</eco>', link: '/reference/Eco/Obstacle/HoleObstacle' },
            { text: '🟩 <eco>LogObstacle</eco>', link: '/reference/Eco/Obstacle/LogObstacle' },
            { text: '🟩 <eco>MicrositeObstacle</eco>', link: '/reference/Eco/Obstacle/MicrositeObstacle' },
            { text: '🟩 <eco>RockObstacle</eco>', link: '/reference/Eco/Obstacle/RockObstacle' },
            { text: '🟩 <eco>StumpObstacle</eco>', link: '/reference/Eco/Obstacle/StumpObstacle' },
          ]
        },
        {
          text: '🟩 <eco>Piece</eco>', collapsed: true, items: [
            { text: '🟩 <eco>Piece Overview</eco>', link: '/reference/Eco/Piece/Overview' },
            { text: '🟩 <eco>PieceTopography</eco>', link: '/reference/Eco/Piece/PieceTopography' },
          ]
        },
        {
          text: '🟩 <eco>Prep</eco>', collapsed: true, items: [
            { text: '🟩 <eco>PrepLand Overview</eco>', link: '/reference/Eco/Prep/Overview' },
            { text: '🟩 <eco>MoundLand</eco>', link: '/reference/Eco/Prep/MoundLand' },
            { text: '🟩 <eco>TrenchLand</eco>', link: '/reference/Eco/Prep/TrenchLand' },
          ]
        },
        {
          text: '🟩 <eco>Raw</eco>', collapsed: true, items: [
            { text: '🟩 <eco>RawLand Overview</eco>', link: '/reference/Eco/Raw/Overview' },
            { text: '🟩 <eco>BurnPit</eco>', link: '/reference/Eco/Raw/BurnPit' },
            { text: '🟩 <eco>BurntLand</eco>', link: '/reference/Eco/Raw/BurntLand' },

          ]
        },
        {
          text: '🟩 <eco>Slash</eco>', collapsed: true, items: [
            { text: '🟩 <eco>Slash Overview</eco>', link: '/reference/Eco/Slash/Overview' },
            { text: '🟩 <eco>BurnPileSlash</eco>', link: '/reference/Eco/Slash/BurnPileSlash' },
            { text: '🟩 <eco>HighSlash</eco>', link: '/reference/Eco/Slash/HighSlash' },
            { text: '🟩 <eco>LowSlash</eco>', link: '/reference/Eco/Slash/LowSlash' },
            { text: '🟩 <eco>WetSlash</eco>', link: '/reference/Eco/Slash/WetSlash' },
          ]
        },
        {
          text: '🟩 <eco>Soil</eco>', collapsed: true, items: [
            { text: '🟩 <eco>Soil Overview</eco>', link: '/reference/Eco/Soil/Overview' },
            { text: '🟩 <eco>ClaySoil</eco>', link: '/reference/Eco/Soil/ClaySoil' },
            { text: '🟩 <eco>DrySoil</eco>', link: '/reference/Eco/Soil/DrySoil' },
            { text: '🟩 <eco>GravelSoil</eco>', link: '/reference/Eco/Soil/GravelSoil' },
            { text: '🟩 <eco>MineralSoil</eco>', link: '/reference/Eco/Soil/MineralSoil' },
            { text: '🟩 <eco>RedRot</eco>', link: '/reference/Eco/Soil/RedRot' },
            { text: '🟩 <eco>SandSoil</eco>', link: '/reference/Eco/Soil/SandSoil' },
            { text: '🟩 <eco>WetSoil</eco>', link: '/reference/Eco/Soil/WetSoil' },
          ]
        },
        {
          text: '🟩 <eco>Sun</eco>', collapsed: true, items: [
            { text: '🟩 <eco>Overview</eco>', link: '/reference/Eco/Sun/Overview' },
          ]
        },
      ]
    },
    // #Move
    {
      text: '🟠 <move>Move</move>', collapsed: true, items: [
        { text: '🟠 <move>Move Overview</move>', link: '/reference/Move/MoveOverview' },
        { text: '🟠 <move>Move Phrase</move>', link: '/reference/Move/MovePhrase/Overview' },
        { text: '🟠 <move>Move Difficulty</move>', link: '/reference/Move/MoveDifficulty' },
        {
          text: '🟠 <move>MoveGeometry</move>', collapsed: true, items: [
            { text: '🟠 <move>Overview</move>', link: '/reference/Move/MoveGeometry/Overview' },
            { text: '🟠 <move>MovePoint</move>', link: '/reference/Move/MoveGeometry/MovePoint' },
            { text: '🟠 <move>MoveCurve</move>', link: '/reference/Move/MoveGeometry/MoveCurve' },
            { text: '🟠 <move>MoveSpace</move>', link: '/reference/Move/MoveGeometry/MoveSpace' },
            { text: '🟠 <move>MoveSurface</move>', link: '/reference/Move/MoveGeometry/MoveSurface' },
          ]
        },
        {
          text: '🟠 <move>ArmMove</move>', collapsed: true, items: [
            { text: '🟠 <move>ArmMove Overview</move>', link: '/reference/Move/ArmMove/Overview' },
            { text: '🟠 <move>Arm Phrase</move>', link: '/reference/Move/ArmMove/Phrase/Overview' },
            { text: '🟠 <move>ArmBlock</move>', link: '/reference/Move/ArmMove/ArmBlock' },
            { text: '🟠 <move>ArmProp</move>', link: '/reference/Move/ArmMove/ArmProp' },
            { text: '🟠 <move>ArmSwing</move>', link: '/reference/Move/ArmMove/ArmSwing' },
            { text: '🟠 <move>ArmWalk</move>', link: '/reference/Move/ArmMove/ArmWalk' },
            { text: '🟠 <move>ArmFlag</move>', link: '/reference/Move/ArmMove/ArmFlag' },
          ]
        },
        {
          text: '🟠 <move>BodyMove</move>', collapsed: true, items: [
            { text: '🟠 <move>BodyMove Overview</move>', link: '/reference/Move/BodyMove/Overview' },
            { text: '🟠 <move>Body Phrase</move>', link: '/reference/Move/BodyMove/Phrase/Overview' },
            { text: '🟠 <move>BodyAbsorb</move>', link: '/reference/Move/BodyMove/BodyAbsorb' },
            { text: '🟠 <move>BodyBend</move>', link: '/reference/Move/BodyMove/BodyBend' },
            { text: '🟠 <move>BodyLean</move>', link: '/reference/Move/BodyMove/BodyLean' },
            { text: '🟠 <move>BodyRevolve</move>', link: '/reference/Move/BodyMove/BodyRevolve' },
            { text: '🟠 <move>BodyRotate</move>', link: '/reference/Move/BodyMove/BodyRotate' },
            { text: '🟠 <move>BodySlot</move>', link: '/reference/Move/BodyMove/BodySlot' },
            { text: '🟠 <move>Fall</move>', link: '/reference/Move/BodyMove/Fall' },
          ]
        },
        {
          text: '🟠 <move>CacheMove</move>', collapsed: true, items: [
            { text: '🟠 <move>CacheMove Overview</move>', link: '/reference/Move/CacheMove/Overview' },
            { text: '🟠 <move>Cache Phrase</move>', link: '/reference/Move/CacheMove/Phrase/Overview' },
            { text: '🟠 <move>Eating</move>', link: '/reference/Move/CacheMove/Eating' },
            { text: '🟠 <move>TarpOff</move>', link: '/reference/Move/CacheMove/TarpOff' },
            { text: '🟠 <move>TarpOn</move>', link: '/reference/Move/CacheMove/TarpOn' },
          ]
        },
        {
          text: '🟠 <move>ClothingMove</move>', collapsed: true, items: [
            { text: '🟠 <move>ClothingMove Overview</move>', link: '/reference/Move/ClothingMove/Overview' },
            { text: '🟠 <move>Clothing Phrase</move>', link: '/reference/Move/ClothingMove/Phrase/Overview' },
            { text: '🟠 <move>Button</move>', link: '/reference/Move/ClothingMove/Button' },
            { text: '🟠 <move>ClothingLayer</move>', link: '/reference/Move/ClothingMove/ClothingLayer' },
            { text: '🟠 <move>RemoveMud</move>', link: '/reference/Move/ClothingMove/RemoveMud' },
            { text: '🟠 <move>ZipperMove</move>', link: '/reference/Move/ClothingMove/ZipperMove' },

          ]
        },
        {
          text: '🟠 <move>FootMove</move>', collapsed: true, items: [
            { text: '🟠 <move>FootMove Overview</move>', link: '/reference/Move/FootMove/Overview' },
            { text: '🟠 <move>Foot Phrase</move>', link: '/reference/Move/FootMove/Phrase/Overview' },
            { text: '🟠 <move>FootArchSmear</move>', link: '/reference/Move/FootMove/FootArchSmear' },
            { text: '🟠 <move>FootClose</move>', link: '/reference/Move/FootMove/FootClose' },
            { text: '🟠 <move>FootDig</move>', link: '/reference/Move/FootMove/FootDig' },
            { text: '🟠 <move>FootDorsiflexion</move>', link: '/reference/Move/FootMove/FootDorsiflexion' },
            { text: '🟠 <move>FootDrag</move>', link: '/reference/Move/FootMove/FootDrag' },
            { text: '🟠 <move>FootEversion</move>', link: '/reference/Move/FootMove/FootEversion' },
            { text: '🟠 <move>FootInversion</move>', link: '/reference/Move/FootMove/FootInversion' },
            { text: '🟠 <move>FootScreef</move>', link: '/reference/Move/FootMove/FootScreef' },
            { text: '🟠 <move>PlantarFlexion</move>', link: '/reference/Move/FootMove/PlantarFlexion' },
          ]
        },
        {
          text: '🟠 <move>HandMove</move>', collapsed: true, items: [
            { text: '🟠 <move>HandMove Overview</move>', link: '/reference/Move/HandMove/Overview' },
            { text: '🟠 <move>Hand Phrase</move>', link: '/reference/Move/HandMove/Phrase/Overview' },
            { text: '🟠 <move>BagGrip</move>', link: '/reference/Move/HandMove/BagGrip' },
            { text: '🟠 <move>BoxGrip</move>', link: '/reference/Move/HandMove/BoxGrip' },
            { text: '🟠 <move>BranchGrip</move>', link: '/reference/Move/HandMove/BranchGrip' },
            { text: '🟠 <move>BranchSnapGrip</move>', link: '/reference/Move/HandMove/BranchSnapGrip' },
            { text: '🟠 <move>HandClose</move>', link: '/reference/Move/HandMove/HandClose' },
            { text: '🟠 <move>HandPoke</move>', link: '/reference/Move/HandMove/HandPoke' },
            { text: '🟠 <move>HandPut</move>', link: '/reference/Move/HandMove/HandPut' },
            { text: '🟠 <move>HandScreef</move>', link: '/reference/Move/HandMove/HandScreef' },
            { text: '🟠 <move>SpadeHandleGrip</move>', link: '/reference/Move/HandMove/SpadeHandleGrip' },
            { text: '🟠 <move>SpadeShaftGrip</move>', link: '/reference/Move/HandMove/SpadeShaftGrip' },
            { text: '🟠 <move>TreeGrip</move>', link: '/reference/Move/HandMove/Overview' },
            { text: '🟠 <move>TreeTestGrip</move>', link: '/reference/Move/HandMove/TreeTestGrip' },
          ]
        },
        {
          text: '🟠 <move>HeadMove</move>', collapsed: true, items: [
            { text: '🟠 <move>HeadMove Overview</move>', link: '/reference/Move/HeadMove/Overview' },
            { text: '🟠 <move>Head Phrase</move>', link: '/reference/Move/HeadMove/Phrase/Overview' },
            { text: '🟠 <move>FocusLook</move>', link: '/reference/Move/HeadMove/FocusLook' },
            { text: '🟠 <move>HeadProtraction</move>', link: '/reference/Move/HeadMove/HeadProtraction' },
            { text: '🟠 <move>HeadRetraction</move>', link: '/reference/Move/HeadMove/HeadRetraction' },
            { text: '🟠 <move>HeadTiltIntoWind</move>', link: '/reference/Move/HeadMove/HeadTiltIntoWind' },
            { text: '🟠 <move>Hearing</move>', link: '/reference/Move/HeadMove/Hearing' },
            { text: '🟠 <move>LookAway</move>', link: '/reference/Move/HeadMove/LookAway' },
            { text: '🟠 <move>NeckExtension</move>', link: '/reference/Move/HeadMove/NeckExtension' },
          ]
        },
        {
          text: '🟠 <move>HoleMove</move>', collapsed: true, items: [
            { text: '🟠 <move>HoleMove Overview</move>', link: '/reference/Move/HoleMove/Overview' },
            { text: '🟠 <move>Hole Phrase</move>', link: '/reference/Move/HoleMove/Phrase/Overview' },
            { text: '🟠 <move>HoleClose</move>', link: '/reference/Move/HoleMove/HoleClose' },
            { text: '🟠 <move>HoleExpand</move>', link: '/reference/Move/HoleMove/HoleExpand' },
            { text: '🟠 <move>HoleOpen</move>', link: '/reference/Move/HoleMove/HoleOpen' },
          ]
        },
        {
          text: '🟠 <move>LegMove</move>', collapsed: true, items: [
            { text: '🟠 <move>LegMove Overview</move>', link: '/reference/Move/LegMove/Overview' },
            { text: '🟠 <move>Leg Phrase</move>', link: '/reference/Move/LegMove/Phrase/Overview' },
            { text: '🟠 <move>Crouch</move>', link: '/reference/Move/LegMove/Overview' },
            { text: '🟠 <move>Jump</move>', link: '/reference/Move/LegMove/Jump' },
            { text: '🟠 <move>Kneel</move>', link: '/reference/Move/LegMove/Kneel' },
            { text: '🟠 <move>LegAbduction</move>', link: '/reference/Move/LegMove/LegAbduction' },
            { text: '🟠 <move>LegAbsorb</move>', link: '/reference/Move/LegMove/LegAbsorb' },
            { text: '🟠 <move>LegAdduction</move>', link: '/reference/Move/LegMove/LegAdduction' },
            { text: '🟠 <move>LegFlag</move>', link: '/reference/Move/LegMove/LegFlag' },
            { text: '🟠 <move>LegFlexion</move>', link: '/reference/Move/LegMove/LegFlexion' },
            { text: '🟠 <move>LegProp</move>', link: '/reference/Move/LegMove/LegProp' },
            { text: '🟠 <move>LegSidebagLift</move>', link: '/reference/Move/LegMove/LegSidebagLift' },
            { text: '🟠 <move>LegSwing</move>', link: '/reference/Move/LegMove/LegSwing' },
            { text: '🟠 <move>RunningStart</move>', link: '/reference/Move/LegMove/RunningStart' },
            { text: '🟠 <move>Step</move>', link: '/reference/Move/LegMove/Step' },
            { text: '🟠 <move>Stomp</move>', link: '/reference/Move/LegMove/Stomp' },
          ]
        },
        {
          text: '🟠 <move>VegeMove</move>', collapsed: true, items: [
            { text: '🟠 <move>VegeMove Overview</move>', link: '/reference/Move/VegeMove/Overview' },
            { text: '🟠 <move>BranchArmDeflection</move>', link: '/reference/Move/VegeMove/BranchArmDeflection' },
            { text: '🟠 <move>BranchDeflection</move>', link: '/reference/Move/VegeMove/BranchDeflection' },
            { text: '🟠 <move>BranchMove</move>', link: '/reference/Move/VegeMove/BranchMove' },
            { text: '🟠 <move>BranchWhip</move>', link: '/reference/Move/VegeMove/BranchWhip' },
            { text: '🟠 <move>Bush</move>', link: '/reference/Move/VegeMove/Bush' },
            { text: '🟠 <move>Log</move>', link: '/reference/Move/VegeMove/Log' },
            { text: '🟠 <move>SlashPile</move>', link: '/reference/Move/VegeMove/SlashPile' },
            { text: '🟠 <move>Stump</move>', link: '/reference/Move/VegeMove/Stump' },
          ]
        },
        {
          text: '🟠 <move>Screef</move>', collapsed: true, items: [
            { text: '🟠 <move>Screefing Overview</move>', link: '/reference/Move/Screef/Overview' },
            { text: '🟠 <move>BootScreef</move>', link: '/reference/Move/ToolMove/Boot/BootScreef' },
            { text: '🟠 <move>HandScreef</move>', link: '/reference/Move/HandMove/HandScreef' },
            { text: '🟠 <move>SpadeScreef</move>', link: '/reference/Move/ToolMove/Spade/SpadeScreef' },
          ]
        },
        {
          text: '🟠 <move>ToolMove</move>', collapsed: true, items: [
            { text: '🟠 <move>Tool Overview</move>', link: '/reference/Move/ToolMove/Overview' },
            {
              text: '🟠 <move>Bag</move>', collapsed: true, items: [
                { text: '🟠 <move>Overview</move>', link: '/reference/Move/ToolMove/Bag/Overview' },
                { text: '🟠 <move>BagGrip</move>', link: '/reference/Move/ToolMove/Bag/BagGrip' },
                { text: '🔷 <move>Bag Phrase</move>', link: '/reference/Move/ToolMove/Bag/Phrase/Overview' },
                { text: '🟠 <move>BagAdjustment</move>', link: '/reference/Move/ToolMove/Bag/BagAdjustment' },
                { text: '🟠 <move>BagDeadlift</move>', link: '/reference/Move/ToolMove/Bag/BagDeadlift' },
                { text: '🟠 <move>BagEmpty</move>', link: '/reference/Move/ToolMove/Bag/BagEmpty' },
                { text: '🟠 <move>BaggingUp</move>', link: '/reference/Move/ToolMove/Bag/BaggingUp' },
                { text: '🟠 <move>BagOff</move>', link: '/reference/Move/ToolMove/Bag/BagOff' },
                { text: '🟠 <move>BagOn</move>', link: '/reference/Move/ToolMove/Bag/BagOn' },
                { text: '🟠 <move>BagSlide</move>', link: '/reference/Move/ToolMove/Bag/BagSlide' },
              ]
            },
            {
              text: '🟠 <move>Boot</move>', collapsed: true, items: [
                { text: '🟠 <move>Overview</move>', link: '/reference/Move/ToolMove/Boot/Overview' },
                { text: '🔷 <move>Boot Phrase</move>', link: '/reference/Move/ToolMove/Boot/Phrase/Overview' },
                { text: '🟠 <move>BootGrip</move>', link: '/reference/Move/ToolMove/Boot/BootGrip' },
                { text: '🟠 <move>BootScreef</move>', link: '/reference/Move/ToolMove/Boot/BootScreef' },
                { text: '🟠 <move>LaceKnot</move>', link: '/reference/Move/ToolMove/Boot/LaceKnot' },
              ]
            },
            {
              text: '🟠 <move>Box</move>', collapsed: true, items: [
                { text: '🟠 <move>Overview</move>', link: '/reference/Move/ToolMove/Box/Overview' },
                { text: '🔷 <move>Box Phrase</move>', link: '/reference/Move/ToolMove/Box/Phrase/Overview' },
                { text: '🟠 <move>BoxGrip</move>', link: '/reference/Move/ToolMove/Box/BoxGrip' },
              ]
            },
            {
              text: '🟠 <move>Bundle</move>', collapsed: true, items: [
                { text: '🟠 <move>Overview</move>', link: '/reference/Move/ToolMove/Bundle/Overview' },
                { text: '🔷 <move>Bundle Phrase</move>', link: '/reference/Move/ToolMove/Bundle/Phrase/Overview' },
                { text: '🟠 <move>BundleGrip</move>', link: '/reference/Move/ToolMove/Bundle/BundleGrip' },
                { text: '🟠 <move>BundlePeel</move>', link: '/reference/Move/ToolMove/Bundle/BundlePeel' },
              ]
            },
            {
              text: '🟠 <move>Carabiner</move>', collapsed: true, items: [
                { text: '🟠 <move>Overview</move>', link: '/reference/Move/ToolMove/Carabiner/Overview' },
              ]
            },
            {
              text: '🟠 <move>Flag</move>', collapsed: true, items: [
                { text: '🟠 <move>Overview</move>', link: '/reference/Move/ToolMove/Flag/Overview' },
                { text: '🔷 <move>Flag Phrase</move>', link: '/reference/Move/ToolMove/Flag/Phrase/Overview' },
                { text: '🟠 <move>FlagGrip</move>', link: '/reference/Move/ToolMove/Flag/FlagGrip' },
                { text: '🟠 <move>FlagErrorRecovery</move>', link: '/reference/Move/ToolMove/Flag/FlagErrorRecovery' },
                { text: '🟠 <move>FlagGet</move>', link: '/reference/Move/ToolMove/Flag/FlagLoad' },
                { text: '🟠 <move>FlagRip</move>', link: '/reference/Move/ToolMove/Flag/FlagRip' },
                { text: '🟠 <move>FlagRoll</move>', link: '/reference/Move/ToolMove/Flag/FlagRoll' },
                { text: '🟠 <move>FlagUnload</move>', link: '/reference/Move/ToolMove/Flag/FlagUnoad' },
              ]
            },
            {
              text: '🟠 <move>Gaiter</move>', collapsed: true, items: [

                { text: '🟠 <move>Overview</move>', link: '/reference/Move/ToolMove/Gaiter/Overview' },
                { text: '🔷 <move>Gaiter Phrase</move>', link: '/reference/Move/ToolMove/Gaiter/Phrase/Overview' },
                { text: '🟠 <move>GaiterGrip</move>', link: '/reference/Move/ToolMove/Gaiter/GaiterGrip' },
                { text: '🟠 <move>GaiterOn</move>', link: '/reference/Move/ToolMove/Gaiter/GaiterOn' },
                { text: '🟠 <move>GaiterOff</move>', link: '/reference/Move/ToolMove/Gaiter/GaiterOff' },
              ]
            },
            {
              text: '🟠 <move>Glove</move>', collapsed: true, items: [
                { text: '🟠 <move>Overview</move>', link: '/reference/Move/ToolMove/Glove/Overview' },
                { text: '🔷 <move>Glove Phrase</move>', link: '/reference/Move/ToolMove/Glove/Phrase/Overview' },
                { text: '🟠 <move>GloveGrip</move>', link: '/reference/Move/ToolMove/Glove/GloveGrip' },
              ]
            },
            {
              text: '🟠 <move>Kit</move>', collapsed: true, items: [
                { text: '🟠 <move>Overview</move>', link: '/reference/Move/ToolMove/Kit/Overview' },
              ]
            },
            {
              text: '🟠 <move>Rope</move>', collapsed: true, items: [
                { text: '🟠 <move>Overview</move>', link: '/reference/Move/ToolMove/Rope/Overview' },
              ]
            },
            {
              text: '🟠 <move>Spade</move>', collapsed: true, items: [
                { text: '🟠 <move>Overview</move>', link: '/reference/Move/ToolMove/Spade/Overview' },
                { text: '🔷 <move>Spade Phrase</move>', link: '/reference/Move/ToolMove/Spade/Phrase/Overview' },
                { text: '🟠 <move>SpadeGrip</move>', link: '/reference/Move/ToolMove/Spade/SpadeGrip' },
                { text: '🟠 <move>SpadeChop</move>', link: '/reference/Move/ToolMove/Spade/SpadeChop' },
                { text: '🟠 <move>SpadePogo</move>', link: '/reference/Move/ToolMove/Spade/SpadePogo' },
                { text: '🟠 <move>SpadeProp</move>', link: '/reference/Move/ToolMove/Spade/SpadeProp' },
                { text: '🟠 <move>SpadeScreef</move>', link: '/reference/Move/ToolMove/Spade/SpadeScreef' },
                { text: '🟠 <move>SpadeSwing</move>', link: '/reference/Move/ToolMove/Spade/SpadeSwing' },
                { text: '🟠 <move>SpadeTest</move>', link: '/reference/Move/ToolMove/Spade/SpadeTest' },
              ]
            }
          ]
        },
        {
          text: '🟠 <move>Truck</move>', collapsed: true, items: [
            { text: '🟠 <move>Overview</move>', link: '/reference/Move/TruckMove/Overview' },
            { text: '🔷 <move>Truck Phrase</move>', link: '/reference/Move/TruckMove/Phrase/Overview' },
            { text: '🟠 <move>Sleep</move>', link: '/reference/Move/TruckMove/Sleep' },
            { text: '🟠 <move>Sit</move>', link: '/reference/Move/TruckMove/Sit' },
          ]
        },
        { text: '🟠 <move>Kinesiology</move>', link: '/reference/Move/Kinesiology/KinesiologyOverview' },

      ],
    },
    // #Neuro
    {
      text: '💜 <neuro>Neuro</neuro>', collapsed: true, items: [
        { text: '💜 <neuro>Neuro Overview</neuro>', link: '/reference/Neuro/NeuroOverview' },
        { text: '🔷 <neuro>Neuro Difficulty</neuro>', link: '/reference/Neuro/NeuroDifficulty' },
        {
          text: '💜 <neuro>Arousal</neuro>', collapsed: true, items: [
            { text: '💜 <neuro>Arousal Overview</neuro>', link: '/reference/Neuro/Arousal/Overview' },
          ]
        },
        {
          text: '💜 <neuro>Attention</neuro>', collapsed: true, items: [
            { text: '💜 <neuro>Attention Overview</neuro>', link: '/reference/Neuro/Attention/Overview' },
          ]
        },
        {
          text: '💜 <neuro>Audio</neuro>', collapsed: true, items: [
            { text: '💜 <neuro>Audio Overview</neuro>', link: '/reference/Neuro/Audio/Overview' },
            {
              text: '💜 <neuro>Music</neuro>', collapsed: true, items: [
                { text: '💜 <neuro>Music Overview</neuro>', link: '/reference/Neuro/Audio/Music/Overview' },
                { text: '💜 <neuro>Playlists</neuro>', link: '/reference/Neuro/Audio/Music/Overview' },
              ]
            },
            { text: '💜 <neuro>BranchBreakSound</neuro>', link: '/reference/Neuro/Audio/BranchBreakSound' },
            { text: '💜 <neuro>LogBreakSound</neuro>', link: '/reference/Neuro/Audio/LogBreakSound' },
            { text: '💜 <neuro>SlashSound</neuro>', link: '/reference/Neuro/Audio/SlashSound' },
            { text: '💜 <neuro>SpadeSound</neuro>', link: '/reference/Neuro/Audio/SpadeSound' },
            { text: '💜 <neuro>SoilSound</neuro>', link: '/reference/Neuro/Audio/SoilSound' },
          ]
        },
        {
          text: '💜 <neuro>Awareness</neuro>', collapsed: true, items: [
            { text: '💜 <neuro>Awareness Overview</neuro>', link: '/reference/Neuro/Awareness/Overview' },
          ]
        },
        {
          text: '💜 <neuro>Counting</neuro>', collapsed: true, items: [
            { text: '💜 <neuro>Counting Overview</neuro>', link: '/reference/Neuro/Counting/Overview' },
          ]
        },
        {
          text: '💜 <neuro>Decision</neuro>', collapsed: true, items: [
            { text: '💜 <neuro>GoOrNoGo</neuro>', link: '/reference/Neuro/Decision/GoOrNoGo' },
            { text: '💜 <neuro>MicrositeSelection</neuro>', link: '/reference/Neuro/Decision/MicrositeSelection' },
          ]
        },
        {
          text: '💜 <neuro>Emotion</neuro>', collapsed: true, items: [
            { text: '💜 <neuro>Emotion Overview</neuro>', link: '/reference/Neuro/Emotion/Overview' },
            { text: '💜 <neuro>Anger</neuro>', link: '/reference/Neuro/Emotion/Anger' },
            { text: '💜 <neuro>Disgust</neuro>', link: '/reference/Neuro/Emotion/Disgust' },
            { text: '💜 <neuro>Fear</neuro>', link: '/reference/Neuro/Emotion/Fear' },
            { text: '💜 <neuro>Joy</neuro>', link: '/reference/Neuro/Emotion/Joy' },
            { text: '💜 <neuro>Sadness</neuro>', link: '/reference/Neuro/Emotion/Sadness' },
          ]
        },
        {
          text: '💜 <neuro>Energy</neuro>', collapsed: true, items: [
            { text: '💜 <neuro>Energy Overview</neuro>', link: '/reference/Neuro/Energy/Overview' },
          ]
        },
        {
          text: '💜 <neuro>Estimation</neuro>', collapsed: true, items: [
            { text: '💜 <neuro>AreaEstimation</neuro>', link: '/reference/Neuro/Estimation/AreaEstimation' },
            { text: '💜 <neuro>BagFillEstimation</neuro>', link: '/reference/Neuro/Estimation/BagFillEstimation' },
            { text: '💜 <neuro>DistanceEstimation</neuro>', link: '/reference/Neuro/Estimation/DistanceEstimation' },
            { text: '💜 <neuro>TimeEstimation</neuro>', link: '/reference/Neuro/Estimation/TimeEstimation' },
          ]
        },
        {
          text: '💜 <neuro>Event</neuro>', collapsed: true, items: [
            { text: '💜 <neuro>Event Overview</neuro>', link: '/reference/Neuro/Event/Overview' },
          ]
        },
        {
          text: '💜 <neuro>Homeostasis</neuro>', collapsed: true, items: [
            { text: '💜 <neuro>Homeostasis Overview</neuro>', link: '/reference/Neuro/Homeostasis/Overview' },
          ]
        },
        {
          text: '💜 <neuro>Memory</neuro>', collapsed: true, items: [
            { text: '💜 <neuro>Overview</neuro>', link: '/reference/Neuro/Memory/Overview' },
            { text: '💜 <neuro>WorkingMemory</neuro>', link: '/reference/Neuro/Memory/WorkingMemory' },
            { text: '💜 <neuro>ShortTermMemory</neuro>', link: '/reference/Neuro/Memory/ShortTermMemory' },
            { text: '💜 <neuro>LongTermMemory</neuro>', link: '/reference/Neuro/Memory/LongTermMemory' },
            { text: '💜 <neuro>NumberMemory</neuro>', link: '/reference/Neuro/Memory/NumberMemory' },
            { text: '💜 <neuro>ViaMemory</neuro>', link: '/reference/Neuro/Memory/ViaMemory' },
          ]
        },
        {
          text: '💜 <neuro>Mindfulness</neuro>', collapsed: true, items: [
            { text: '💜 <neuro>Overview</neuro>', link: '/reference/Neuro/Mindfulness/Overview' },
          ]
        },
        {
          text: '💜 <neuro>Muscle</neuro>', collapsed: true, items: [
            { text: '💜 <neuro>Muscle Overview</neuro>', link: '/reference/Neuro/Muscle/Overview' },
          ]
        },
        { text: '💜 <neuro>Proprioception</neuro>', link: '/reference/Neuro/Proprioception/Overview' },
        { text: '💜 <neuro>Resilience</neuro>', link: '/reference/Neuro/Resilience/Overview' },
        {
          text: '💜 <neuro>SpatialCognition</neuro>', collapsed: true, items: [
            { text: '💜 <neuro>SpatialCognition Overview</neuro>', link: '/reference/Neuro/SpatialCognition/Overview' },
          ]
        },
        {
          text: '💜 <neuro>Time</neuro>', collapsed: true, items: [
            { text: '💜 <neuro>Time Overview</neuro>', link: '/reference/Neuro/Time/Overview' },
            { text: '💜 <neuro>BagUpTime</neuro>', link: '/reference/Neuro/Time/BagUpTime' },
            { text: '💜 <neuro>DailySchedule</neuro>', link: '/reference/Neuro/Time/DailySchedule' },
            { text: '💜 <neuro>MoveTiming</neuro>', link: '/reference/Neuro/Time/MoveTiming' },
            { text: '💜 <neuro>Planning</neuro>', link: '/reference/Neuro/Time/Planning' },
            { text: '💜 <neuro>Timer</neuro>', link: '/reference/Neuro/Time/Timer' },
          ]
        },
        { text: '💜 <neuro>Thermoception</neuro>', link: '/reference/Neuro/Thermoception' },
      ]
    },
    // #Via
    {
      text: '🔺 <route>Via</route>', collapsed: true, items: [
        { text: '🔺 <route>Via Overview</route>', link: '/reference/Via/ViaOverview' },
        { text: '🔷 <route>Via Phrase</route>', link: '/reference/Via/ViaSequence/Overview' },
        { text: '🔷 <route>Via Difficulty</route>', link: '/reference/Via/ViaDifficulty' },
        {
          text: '🔺 <route>Fill Algorithms</route>', collapsed: true, items: [
            { text: '🔺 <route>Fill Algorithms Overview</route>', link: '/reference/Via/FillAlgorithm/Overview' },
            { text: '🔺 <route>BoustroFill</route>', link: '/reference/Via/FillAlgorithm/BoustroFill' },
            { text: '🔺 <route>CircleFill</route>', link: '/reference/Via/FillAlgorithm/CircleFill' },
            { text: '🔺 <route>DiamondFill</route>', link: '/reference/Via/FillAlgorithm/DiamondFill' },
            { text: '🔺 <route>SquareFill</route>', link: '/reference/Via/FillAlgorithm/SquareFill' },
            { text: '🔺 <route>TriangleFill</route>', link: '/reference/Via/FillAlgorithm/TriangleFill' },
            { text: '🔺 <route>ChunkFill</route>', link: '/reference/Via/FillAlgorithm/ChunkFill' },
            { text: '🔺 <route>BackFill</route>', link: '/reference/Via/FillAlgorithm/BackFill' },
            { text: '🔺 <route>OpenEndedFill</route>', link: '/reference/Via/FillAlgorithm/OpenEndedFill' },
            { text: '🔺 <route>PerimeterFill</route>', link: '/reference/Via/FillAlgorithm/PerimeterFill' },
            { text: '🔺 <route>TypewriterFill</route>', link: '/reference/Via/FillAlgorithm/TypewriterFill' },
          ]
        },
        {
          text: '🔺 <route>Flag</route>', collapsed: true, items: [
            { text: '🔺 <route>Flag Overview</route>', link: '/reference/Via/Flag/Overview' },
            { text: '🔺 <route>BoundaryFlag</route>', link: '/reference/Via/Flag/BoundaryFlag' },
            { text: '🔺 <route>FlagLocation</route>', link: '/reference/Via/Flag/FlagLocation' },
            { text: '🔺 <route>HighFlag</route>', link: '/reference/Via/Flag/HighFlag' },
            { text: '🔺 <route>LineInFlag</route>', link: '/reference/Via/Flag/LineInFlag' },
            { text: '🔺 <route>NaturalFlag</route>', link: '/reference/Via/Flag/NaturalFlag' },
            { text: '🔺 <route>TrenchExitFlag</route>', link: '/reference/Via/Flag/TrenchExitFlag' },
            { text: '🔺 <route>WastedFlag</route>', link: '/reference/Via/Flag/WastedFlag' },
          ]
        },
        {
          text: '🔺 <route>ObstacleFill</route>', collapsed: true, items: [
            { text: '🔺 <route>ObstacleFill Overview</route>', link: '/reference/Via/ObstacleFill/Overview' },
          ]
        },
        {
          text: '🔺 <route>ViaGeometry</route>', collapsed: true, items: [
            {
              text: '🔺 <route>ViaPoint</route>', collapsed: true, items: [
                { text: '🔺 <route>Overview</route>', link: '/reference/Via/ViaPoint/Overview' },
                { text: '🔺 <route>CenterPoint</route>', link: '/reference/Via/ViaPoint/CenterPoint' },
                { text: '🔺 <route>InflectionPoint</route>', link: '/reference/Via/ViaPoint/InflectionPoint' },
                { text: '🔺 <route>Midpoint</route>', link: '/reference/Via/ViaPoint/Midpoint' },
                { text: '🔺 <route>ReferencePoint</route>', link: '/reference/Via/ViaPoint/ReferencePoint' },
                { text: '🔺 <route>ReflectionPoint</route>', link: '/reference/Via/ViaPoint/ReflectionPoint' },
                { text: '🔺 <route>TargetPoint</route>', link: '/reference/Via/ViaPoint/TargetPoint' },
              ]
            },
            {
              text: '🔺 <route>ViaCurve</route>', collapsed: true, items: [
                { text: '🔺 <route>ViaCurve Overview</route>', link: '/reference/Via/ViaCurve/Overview' },
                { text: '🔺 <route>AroundCurve</route>', link: '/reference/Via/ViaCurve/AroundCurve' },
                { text: '🔺 <route>GhostLine</route>', link: '/reference/Via/ViaCurve/GhostLine' },
                { text: '🔺 <route>ParallelCurve</route>', link: '/reference/Via/ViaCurve/ParalleCurvee' },
                { text: '🔺 <route>PerimeterCurve</route>', link: '/reference/Via/ViaCurve/PerimeterCurve' },
                { text: '🔺 <route>SpiralCurve</route>', link: '/reference/Via/ViaCurve/SpiralCurve' },
                { text: '🔺 <route>TurnAroundCurve</route>', link: '/reference/Via/ViaCurve/TurnAroundCurve' },
                { text: '🔺 <route>ZigzagCurve</route>', link: '/reference/Via/ViaCurve/ZigzagCurve' },
              ]
            },
            {
              text: '🔺 <route>ViaSpace</route>', collapsed: true, items: [
                { text: '🔺 <route>Spacing Overview</route>', link: '/reference/Via/ViaSpace/Overview' },
                { text: '🔺 <route>MaximumSpacing</route>', link: '/reference/Via/ViaSpace/MaximumSpacing' },
                { text: '🔺 <route>MinimumSpacing</route>', link: '/reference/Via/ViaSpace/MinimumSpacing' },
                { text: '🔺 <route>OptimalSpacing</route>', link: '/reference/Via/ViaSpace/OptimalSpacing' },
                { text: '🔺 <route>ElasticSpacing</route>', link: '/reference/Via/ViaSpace/ElasticSpacing' },
                { text: '🔺 <route>SpacingOnSlope</route>', link: '/reference/Via/ViaSpace/SpacingOnSlope' },
              ]
            },
            {
              text: '🔺 <route>ViaSurface</route>', collapsed: true, items: [
                { text: '🔺 <route>Overview</route>', link: '/reference/Via/ViaSurface/Overview' },
                { text: '🔺 <route>ViaSurface Texture</route>', link: '/reference/Via/ViaSurface/ViaSurfaceTexture' },
              ]
            },
          ]
        },
        {
          text: '🔺 <route>TeamPlant</route>', collapsed: true, items: [
            { text: '🔺 <route>TeamPlant Overview</route>', link: '/reference/Via/TeamPlant/Overview' },
            { text: '🔺 <route>BouncingFill</route>', link: '/reference/Via/TeamPlant/BouncingFill' },
            { text: '🔺 <route>CrossingFill</route>', link: '/reference/Via/TeamPlant/CrossingFill' },
            { text: '🔺 <route>FollowingFill</route>', link: '/reference/Via/TeamPlant/FollowingFill' },
          ]
        },
      ]
    },
    { text: '📃 Glossary</route>', link: '/reference/glossary/Glossary' },
    { text: '📷 Media Database', link: '/reference/media/Overview' }
  ]
}

// #Tutorial
function sidebarTutorials() {
  return [
    { text: 'Tutorial Overview', link: '/tutorials/Overview' },
    { text: 'Video Tutorials Overview', link: '/tutorials/VideoTutorialsOverview' },
    { text: 'Labelling', link: '/tutorials/Test_LabelDiagram' },
    { text: 'Matching', link: '/tutorials/Test_Matching' },
    { text: 'MultipleChoice', link: '/tutorials/Test_MultipleChoice' },
    { text: 'Sequencing', link: '/tutorials/Test_Sequencing' },
  ]

}
