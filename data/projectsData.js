export const featured = [
    {
        name: 'Paketpost Aerial Vision',
        subtitle: 'Group Project — TUM',
        description:
          'Full-stack proptech web application built for a real Munich postal depot redevelopment brief. Combines interactive 3D site visualisation with live data overlays to support early-stage urban design decisions. Built with the MERN stack with Azure cloud hosting.',
        tags: ['MongoDB', 'Express', 'React', 'Node.js', 'Azure'],
        url: 'https://shavss.github.io/ITBE-Fusion-Lab/',
    },
    {
      name: 'Digital Naturalist',
      subtitle: 'MSc Thesis — MIT',
      description:
        'Bayesian Product of Experts fusion model combining ResNet-18 vision with XGBoost habitat suitability for context-aware urban insect species classification across 8 species and 11,000+ citizen-science observations in Amsterdam. Achieved +2.5pp average accuracy improvement over the vision-only baseline.',
      tags: ['Python', 'PyTorch', 'XGBoost', 'ResNet-18', 'PoE Fusion', 'Jupyter Notebook'],
      url: 'https://github.com/Shavss/thesis-poe-fusion',
    },
    {
        name: 'Climate Active Envelopes',
        subtitle: 'Research Contribution — Professorship of Digital Fabrication',
        description:
          'Contributed to an open-source robotic fabrication research project exploring climate-responsive building envelopes. Worked on assembly.py, implementing graph and network data structures for component sequencing and spatial logic within the fabrication pipeline.',
        tags: ['Python', 'Graph Structures', 'Robotic Fabrication', 'Research'],
        url: 'https://github.com/augmentedfabricationlab/climate_active_envelopes',
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
  
  export const all = [
    ...featured,
    {
      name: 'Parse That!',
      subtitle: 'Participant — AEC Hackathon - Munich Edition 2024',
      description:
        'Hackathon contribution to a smart prefab element parser for the AEC construction industry. Extracts and structures product data from unstructured manufacturer documents to populate a standardised prefab component database.',
      tags: ['Python', 'NLP', 'Parsing', 'AEC', 'Open Source'],
      url: 'https://github.com/LupoSun/AECHachathon_MOD_ParseThat',
    },
    {
        name: 'Kitty Splitty',
        subtitle: 'University Project — TUM',
        description:
          'Group expense management prototype with full database design. Implements shared kitty creation, multi-type transaction splitting, user login tracking, and financial overviews. Business logic written in C# with relational database interactions and a REST API layer.',
        tags: ['C#', '.NET', 'SQL', 'REST API', 'Database Design'],
        url: 'https://github.com/Shavss/kitty-split-prototype',
    },

    {
        name: 'Legacy Calculator Modernisation',
        subtitle: 'Software Developer — Siemens',
        description:
          'This project modernises legacy Excel-based calculation tools by converting them into structured YAML artifacts for use in API-driven software systems. Built as a modular Python pipeline, it parses spreadsheet logic, resolves formula dependencies, extracts configuration data, and produces standardised calculator definitions that bridge business logic from Excel into a more maintainable software architecture.',
        tags: ['Python', 'YAML', 'REST API', 'Excel', 'Automation'],
        url: 'https://github.com/',
    },
  ]
  