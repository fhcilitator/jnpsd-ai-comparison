// Option 3 purchase list. Prices and availability checked on the seller pages October 13, 2026.
// status: "cart" = seller page shows Add to cart; "special" = special order with a lead time.
window.PARTS = {
  checked: 'October 13, 2026',
  request: 6190.70,
  groups: [
    {
      id: 'machine', name: 'The one machine', multiplier: 1,
      note: 'One set. Runs the agents, the web apps and its own backups. Not recommended: see the proposal for why.',
      items: [
        { name: 'Rosewill RSV-L4412U 4U chassis, 12 hot-swap bays', qty: 1, price: 399.99, seller: 'Newegg', status: 'cart', detail: 'Leave out the GPU support bracket so the cooler fits', url: 'https://www.newegg.com/rosewill-rsv-l4412u-black/p/N82E16811147330' },
        { name: 'Rosewill RSV-RL26HV2 sliding rail kit', qty: 1, price: 59.99, seller: 'Newegg', status: 'cart', url: 'https://www.newegg.com/rosewill-rsv-rl26hv2-ball-bearing-slide-rail/p/N82E16816132131' },
        { name: 'Supermicro H13SAE-MF motherboard', qty: 1, price: 539.00, seller: 'Newegg', status: 'cart', detail: 'Two x16 slots (x8/x8) for two AI cards later', url: 'https://www.newegg.com/supermicro-mbd-h13sae-mf-o-amd-ryzen-7000-series/p/N82E16813183830' },
        { name: 'AMD EPYC 4465P processor, 12 cores, 65W', qty: 1, price: 489.99, seller: 'Newegg', status: 'cart', detail: 'OEM tray; cooler listed separately', url: 'https://www.newegg.com/p/N82E16819113932' },
        { name: 'Noctua NH-U9S CPU cooler', qty: 1, price: 88.17, seller: 'Noctua Cooling Solutions (on Newegg)', status: 'cart', detail: '$69.95 + $18.22 shipping', url: 'https://www.newegg.com/noctua-nh-u9s/p/N82E16835608067' },
        { name: 'NEMIX 32GB DDR5-5600 ECC UDIMM memory', qty: 2, price: 871.99, seller: 'NEMIX RAM (on Newegg)', status: 'cart', detail: '64 GB total; two slots left for more', url: 'https://www.newegg.com/nemix-ram-micron-server-workstaion-compatible-series-memory-32gb-ddr5-5600-cas-latency-cl46/p/2SJ-000N-00C13' },
        { name: 'be quiet! Power Zone 2 1200W power supply', qty: 1, price: 199.90, seller: 'Newegg', status: 'cart', detail: 'Two 12V-2x6 connectors, ready for two AI cards', url: 'https://www.newegg.com/be-quiet-atx12v-3-1-1200-w-80-plus-platinum-certified-power-supplies-black-power-zone-2-1200w/p/N82E16817222051' },
        { name: 'Samsung 990 PRO 2TB NVMe SSD (single, not mirrored)', qty: 1, price: 499.50, seller: '3C Expert (on Newegg)', status: 'cart', url: 'https://www.newegg.com/p/3C6-0008-004C2' },
        { name: 'TP-Link TX401 10GBASE-T network card', qty: 1, price: 71.99, seller: 'Newegg', status: 'cart', detail: 'Limit 2 per customer', url: 'https://www.newegg.com/tp-link-tx401/p/375-0094-000D2' },
        { name: 'Seagate Exos 12TB SATA hard drive', qty: 3, price: 497.45, seller: 'Brute Networks (on Newegg)', status: 'cart', detail: 'About 21 TB usable; survives one drive failure. Listing says bare drive; confirm new condition', url: 'https://www.newegg.com/seagate-exos-x16-st12000nm001g-12tb/p/2WA-000W-003A8' },
        { name: 'SATA III data cable, 18"', qty: 3, price: 9.69, seller: 'EN Labs (on Newegg)', status: 'cart', detail: 'Ships from China. Skip if the motherboard box includes enough cables', url: 'https://www.newegg.com/en-labs-18-inches-cable-connectors-black/p/0ZF-00EA-00026' },
        { name: 'Molex 4-pin power extension cable, 14"', qty: 2, price: 6.99, seller: 'EN Labs (on Newegg)', status: 'cart', detail: 'For the drive backplane. Ships from China', url: 'https://www.newegg.com/p/1W7-003E-00038' },
      ],
    },
  ],
  option: {
    id: 'gpu', name: 'Optional: local AI', multiplier: 1,
    note: 'Not part of the $6,190.70 request. Both cards fit this machine; the 1200W power supply is already included.',
    items: [
      { name: 'PowerColor Radeon AI PRO R9700 32GB graphics card', qty: 2, price: 1699.99, seller: 'Newegg', status: 'cart', detail: 'Limit 2 per customer', url: 'https://www.newegg.com/powercolor-ai-pro-r9700-32g-b-radeon-ai-pro-r9700-32gb-graphics-card/p/N82E16814131885' },
    ],
  },
  alternates: [],
};
