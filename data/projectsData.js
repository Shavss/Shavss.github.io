export const featured = [
    {
      name: 'Digital Naturalist',
      subtitle: 'MSc Thesis — TU Munich',
      description:
        'Bayesian Product of Experts fusion model combining ResNet-18 vision with XGBoost habitat suitability for context-aware urban insect species classification across 8 species and 11,000+ citizen-science observations in Amsterdam. Achieved +2.5pp average accuracy improvement over the vision-only baseline.',
      tags: ['Python', 'PyTorch', 'XGBoost', 'ResNet-18', 'PoE Fusion'],
      url: 'https://github.com/Shavss/thesis-poe-fusion',
    },
    {
      name: 'Legacy Calculator Modernisation',
      subtitle: 'Working Student — Siemens',
      description:
        'Modular Python pipeline to modernise ~200 legacy Excel calculators by parsing formulas, mapping dependencies, and translating business logic into version-controlled YAML. Integrated outputs with REST APIs to support dynamic frontend calculations, reducing manual workload by 40%.',
      tags: ['Python', 'YAML', 'REST API', 'Excel', 'Automation'],
      url: 'https://github.com/Shavss/data-managment',
    },
    {
      name: 'Paketpost Aerial Vision',
      subtitle: 'Group Project — TU Munich',
      description:
        'Full-stack proptech web application built for a real Munich postal depot redevelopment brief. Combines interactive 3D site visualisation with live data overlays to support early-stage urban design decisions. Built with the MERN stack with Azure cloud hosting.',
      tags: ['MongoDB', 'Express', 'React', 'Node.js', 'Azure'],
      url: 'https://github.com/Shavss/ITBE-Fusion-Lab',
    },
    {
      name: 'Kitty Splitty',
      subtitle: 'University Project — TU Munich',
      description:
        'Group expense management prototype with full database design. Implements shared kitty creation, multi-type transaction splitting, user login tracking, and financial overviews. Business logic written in C# with relational database interactions and a REST API layer.',
      tags: ['C#', '.NET', 'SQL', 'REST API', 'Database Design'],
      url: 'https://github.com/Shavss/kitty-split-prototype',
    },
  ]
  
  export const all = [
    ...featured,
    {
      name: 'Climate Active Envelopes',
      subtitle: 'Research Contribution — Augmented Fabrication Lab, TUM',
      description:
        'Contributed to an open-source robotic fabrication research project exploring climate-responsive building envelopes. Worked on assembly.py, implementing graph and network data structures for component sequencing and spatial logic within the fabrication pipeline.',
      tags: ['Python', 'Graph Structures', 'Robotic Fabrication', 'Research'],
      url: 'https://github.com/augmentedfabricationlab/climate_active_envelopes',
    },
    {
      name: 'Parse That!',
      subtitle: 'Hackathon — AEC Hackathon MOD',
      description:
        'Hackathon contribution to a smart prefab element parser for the AEC construction industry. Extracts and structures product data from unstructured manufacturer documents to populate a standardised prefab component database.',
      tags: ['Python', 'NLP', 'Parsing', 'AEC', 'Open Source'],
      url: 'https://github.com/LupoSun/AECHachathon_MOD_ParseThat',
    },
    {
      name: 'Automated PDF Extraction Pipeline',
      subtitle: 'Data Engineer — ZM-I Müller',
      description:
        'Python pipeline automating extraction of structural engineering data from PDF reports using modular scrapers. Parsed data is inserted into local and Azure SQL databases via SQLAlchemy, feeding a physics-informed neural network for structural design optimisation.',
      tags: ['Python', 'SQL', 'Azure', 'SQLAlchemy', 'Automation'],
      url: 'https://github.com/Shavss/data-managment',
    },
  ]
  