export const carData = {
    hero: {
        title: "Red Bull RB19 Formula 1",
        price: "Works Team Prototype – Not for Sale",
        cta: "Inquire Now",
    },
    design: {
        title: "Design",
        description:
            "Ground-effect dominant aerodynamic design with deeply undercut sidepods, ultra-compact rear packaging, and championship-optimized airflow efficiency.",
    },
    engine: {
        title: "Engine",
        specs: [
            { label: "Engine", value: "1.6L V6 Turbo Hybrid Power Unit" },
            { label: "Power", value: "1000+ HP (combined system output)" },
        ],
    },
    specifications: [
        { label: "Chassis", value: "Red Bull Racing RB19" },
        { label: "Engine", value: "Honda RBPT" },
        { label: "Gearbox", value: "8-speed semi-automatic sequential" },
        { label: "Weight", value: "798 kg (including driver)" },
        { label: "Fuel Capacity", value: "110 kg maximum" },
        { label: "Wheelbase", value: "3,600 mm" },
    ],
    features: [
        {
            title: "Aerodynamic Excellence",
            description:
                "Revolutionary ground-effect floor design that generates maximum downforce while maintaining exceptional efficiency through corners.",
            icon: "🏎️",
        },
        {
            title: "Hybrid Power System",
            description:
                "State-of-the-art energy recovery system combining the combustion engine with electric motor for unmatched performance.",
            icon: "⚡",
        },
        {
            title: "Advanced Cooling",
            description:
                "Innovative sidepod design optimizes airflow for superior cooling while reducing drag at high speeds.",
            icon: "❄️",
        },
        {
            title: "Championship DNA",
            description:
                "Built on decades of racing heritage and engineering excellence that delivered multiple constructors' championships.",
            icon: "🏆",
        },
    ],
};

export type CarData = typeof carData;
