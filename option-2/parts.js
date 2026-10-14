// Purchase list data. Prices and availability checked on the seller pages October 13, 2026.
// status: "cart" = seller page shows Add to cart; "special" = special order with a lead time.
window.PARTS = {
  checked: 'October 13, 2026',
  request: 10498.87,
  groups: [
    {
      id: 'node', name: 'Compute server', multiplier: 1,
      note: 'One set. The same build as each top-tier server, so it carries over if a second server is added later.',
      items: [
        { name: 'Rosewill RSV-L4000U 4U server chassis', qty: 1, price: 209.99, seller: 'Newegg', status: 'cart', url: 'https://www.newegg.com/rosewill-rsv-l4000u-black/p/N82E16811147327' },
        { name: 'Rosewill RSV-RL26HV2 sliding rail kit', qty: 1, price: 59.99, seller: 'Newegg', status: 'cart', url: 'https://www.newegg.com/rosewill-rsv-rl26hv2-ball-bearing-slide-rail/p/N82E16816132131' },
        { name: 'ASRock Rack SIENAD8-2L2T motherboard (SP6, dual 10GbE, IPMI)', qty: 1, price: 686.00, seller: 'Saitech', status: 'special', lead: 'Not in stock. Special order, 1–3 weeks.', url: 'https://esaitech.com/products/asrock-sienad8-2l2t-amd-epyc-8004-sp6-96gb-atx-motherboard' },
        { name: 'AMD EPYC 8124P processor, 16 cores', qty: 1, price: 633.00, seller: 'Saitech', status: 'special', lead: 'Not in stock. Special order, lead time not stated.', url: 'https://esaitech.com/products/amd-epyc-8124p-2-45-ghzprocessor-oem-100-000001135' },
        { name: 'Noctua NH-D9 TR5-SP6 4U CPU cooler', qty: 1, price: 148.17, seller: 'Noctua Cooling Solutions (on Newegg)', status: 'cart', detail: '$129.95 + $18.22 shipping', url: 'https://www.newegg.com/noctua-nh-d9-tr5-sp6-4u/p/13C-0005-00337' },
        { name: 'be quiet! Power Zone 2 1200W power supply', qty: 1, price: 199.90, seller: 'Newegg', status: 'cart', changed: 'Up $10.00 from $189.90 in the proposal', url: 'https://www.newegg.com/be-quiet-atx12v-3-1-1200-w-80-plus-platinum-certified-power-supplies-black-power-zone-2-1200w/p/N82E16817222051' },
        { name: 'NEMIX 48GB DDR5-5600 ECC RDIMM server memory', qty: 2, price: 1783.99, seller: 'NEMIX RAM (on Newegg)', status: 'cart', url: 'https://www.newegg.com/nemix-ram-kingston-server-workstaion-compatible-series-memory-48gb-ddr5-5600-cas-latency-cl46/p/2SJ-000N-00T76' },
        { name: 'Samsung 990 PRO 2TB NVMe SSD (mirrored pair)', qty: 2, price: 499.50, seller: '3C Expert (on Newegg)', status: 'cart', url: 'https://www.newegg.com/p/3C6-0008-004C2' },
      ],
    },
    {
      id: 'backup', name: 'Backup box', multiplier: 1,
      note: 'One set. Keeps restore points every few hours and nightly, and can run key agents in an emergency.',
      items: [
        { name: 'Rosewill RSV-L4000U 4U chassis (8 internal drive bays)', qty: 1, price: 209.99, seller: 'Newegg', status: 'cart', url: 'https://www.newegg.com/rosewill-rsv-l4000u-black/p/N82E16811147327' },
        { name: 'Rosewill RSV-RL26HV2 sliding rail kit', qty: 1, price: 59.99, seller: 'Newegg', status: 'cart', url: 'https://www.newegg.com/rosewill-rsv-rl26hv2-ball-bearing-slide-rail/p/N82E16816132131' },
        { name: 'Supermicro H13SAE-MF motherboard', qty: 1, price: 539.00, seller: 'Newegg', status: 'cart', url: 'https://www.newegg.com/supermicro-mbd-h13sae-mf-o-amd-ryzen-7000-series/p/N82E16813183830' },
        { name: 'AMD Ryzen 5 9600X processor, 6 cores', qty: 1, price: 219.00, seller: 'Newegg', status: 'cart', detail: 'Limit 2 per customer', url: 'https://www.newegg.com/amd-ryzen-5-9000-series-ryzen-5-9600x-granite-ridge-socket-am5-desktop-cpu-processor/p/N82E16819113844' },
        { name: 'Noctua NH-U9S CPU cooler', qty: 1, price: 88.17, seller: 'Noctua Cooling Solutions (on Newegg)', status: 'cart', detail: '$69.95 + $18.22 shipping', url: 'https://www.newegg.com/noctua-nh-u9s/p/N82E16835608067' },
        { name: 'NEMIX 16GB DDR5-5600 ECC UDIMM memory', qty: 1, price: 499.99, seller: 'NEMIX RAM (on Newegg)', status: 'cart', url: 'https://www.newegg.com/nemix-ram-micron-server-workstaion-compatible-series-memory-16gb-ddr5-5600-cas-latency-cl46/p/2SJ-000N-00C12' },
        { name: 'Seasonic Focus GX-750 power supply', qty: 1, price: 139.99, seller: 'Newegg', status: 'cart', url: 'https://www.newegg.com/seasonic-usa-focus-gx-atx-3-atx-3-1-750-w-80-plus-gold-certified-power-supplies-gx-750/p/N82E16817151272' },
        { name: 'Kingston NV3 500GB NVMe SSD (mirrored boot pair)', qty: 2, price: 99.00, seller: 'MobileMonster (on Newegg)', status: 'cart', detail: 'Pick the 500GB, 2280 option on the page', url: 'https://www.newegg.com/kingston-1tb-snv2s/p/N82E16820242901' },
        { name: 'TP-Link TX401 10GBASE-T network card', qty: 1, price: 71.99, seller: 'Newegg', status: 'cart', detail: 'Makes a full restore about 5× faster than the onboard 1GbE', url: 'https://www.newegg.com/tp-link-tx401/p/375-0094-000D2' },
        { name: 'Seagate Exos 12TB SATA hard drive (mirrored pair)', qty: 2, price: 497.45, seller: 'Brute Networks (on Newegg)', status: 'cart', detail: 'Plugs into the board\'s own SATA ports. Listing says bare drive; confirm new condition with the seller', url: 'https://www.newegg.com/seagate-exos-x16-st12000nm001g-12tb/p/2WA-000W-003A8' },
        { name: 'SATA III data cable, 18"', qty: 2, price: 9.69, seller: 'EN Labs (on Newegg)', status: 'cart', detail: 'Ships from China. Skip if the motherboard box includes SATA cables', url: 'https://www.newegg.com/en-labs-18-inches-cable-connectors-black/p/0ZF-00EA-00026' },
      ],
    },
  ],
  option: {
    id: 'gpu', name: 'Optional phase 2: local AI', multiplier: 1,
    note: 'Not part of the $10,498.87 request. Both cards go in the compute server.',
    items: [
      { name: 'PowerColor Radeon AI PRO R9700 32GB graphics card', qty: 2, price: 1699.99, seller: 'Newegg', status: 'cart', detail: 'Limit 2 per customer', url: 'https://www.newegg.com/powercolor-ai-pro-r9700-32g-b-radeon-ai-pro-r9700-32gb-graphics-card/p/N82E16814131885' },
    ],
  },
  alternates: [
    { name: 'AMD EPYC 8124P from AS Group LLC (Newegg marketplace)', price: 795.77, why: 'Shows Add to cart today, for $162.77 more per processor than Saitech. Use it only if Saitech cannot ship in time.', url: 'https://www.newegg.com/p/1WK-0184-00080' },
  ],
};
