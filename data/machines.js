const data = {
    "philips": {
        "pmc01": {
            title: "Philips 4300 LatteGo",
            details: "Fully automatic espresso machine with LatteGo milk system, ceramic grinder and one-touch coffee & milk drinks.",
            price: 400,
            imagePath: "/public/images/machines/philips/4300-latte-go/01.webp",
            keySpecs: {
                coffeeTypes: "Espresso, Coffee, Americano, Cappuccino, Latte Macchiato and more (up to 8 varieties).",  // based on model data :contentReference[oaicite:1]{index=1}
                milkSystem: "LatteGo – detachable two-part milk carafe for easy cleaning. :contentReference[oaicite:2]{index=2}",
                coffeeStrengthSettings: "Adjustable aroma/strength settings (5 levels) and coffee length via My Coffee Choice. :contentReference[oaicite:3]{index=3}",
                Grinder: "Integrated ceramic burr grinder with 12 settings. :contentReference[oaicite:4]{index=4}",
                waterTankCapacity: "Approximately 1.8 L (≈ 60 oz) removable water tank. :contentReference[oaicite:5]{index=5}",
                beanContainerCapacity: "Approximately 275 g bean hopper capacity. :contentReference[oaicite:6]{index=6}",
                Dimensions: "Approx. 246 × 372 × 433 mm (W × D × H) / ~9.7″×14.6″×17″. :contentReference[oaicite:7]{index=7}",
                Weight: "Approximately 8 kg / ~18 lb. :contentReference[oaicite:8]{index=8}",
                powerConsumption: "Around 1500 W / 120V (varies by region). :contentReference[oaicite:9]{index=9}"
            },
            features: {
                oneTouchFunctionality: "One-touch button for multiple coffee and milk-based drinks.",
                easyCleaning: "Fully removable brew group, dishwasher-safe LatteGo parts and AquaClean filter support for up to 5,000 cups without descaling. :contentReference[oaicite:10]{index=10}",
                userProfiles: "2 user profiles + Guest profile for personalized settings. :contentReference[oaicite:11]{index=11}"
            }
        },
        "pmc02": {
            title: "Philips 3200 LatteGo",
            details: "Premium value fully automatic espresso machine with LatteGo milk system, ceramic grinder and easy one-touch operation.",
            price: 300,
            imagePath: "/public/images/machines/philips/3200-latte-go/01.webp",
            keySpecs: {
                coffeeTypes: "Espresso, Coffee, Americano, Cappuccino, Latte Macchiato (up to 5 varieties). :contentReference[oaicite:12]{index=12}",
                milkSystem: "LatteGo – fast frothing cyclonic milk system. :contentReference[oaicite:13]{index=13}",
                coffeeStrengthSettings: "My Coffee Choice system for customizing strength and volume. :contentReference[oaicite:14]{index=14}",
                Grinder: "Ceramic burr grinder with 12 settings. :contentReference[oaicite:15]{index=15}",
                waterTankCapacity: "Approx. 1.8 L (≈ 60 oz). :contentReference[oaicite:16]{index=16}",
                beanContainerCapacity: "About 10 oz (~284 g) hopper capacity in some variants. :contentReference[oaicite:17]{index=17}",
                Dimensions: "Approx. 9.7″ × 14.6″ × 17″ (W × D × H). :contentReference[oaicite:18]{index=18}",
                Weight: "Approx. 18 lb (~8.2 kg). :contentReference[oaicite:19]{index=19}",
                powerConsumption: "Around 1350 W / 120 V. :contentReference[oaicite:20]{index=20}"
            },
            features: {
                oneTouchFunctionality: "Easy one-touch brewing of milk and coffee drinks.",
                easyCleaning: "LatteGo system can be cleaned in 15 seconds, removable brew group and AquaClean filter support. :contentReference[oaicite:21]{index=21}",
                userProfiles: "Supports customizable servings and settings (grind, volume, strength)."
            }
        },
        "pmc03": {
            title: "Philips 3200 Automatic Espresso Machine (Classic Milk Frother)",
            details: "Fully automatic espresso machine (classic milk frother rather than LatteGo) with ceramic grinder and My Coffee Choice.",
            price: 250,
            imagePath: "/public/images/machines/philips/3200-automatic-espresso-machine/01.webp",
            keySpecs: {
                coffeeTypes: "Espresso, Coffee, Americano and more. :contentReference[oaicite:22]{index=22}",
                milkSystem: "Classic milk frother (not LatteGo).",
                coffeeStrengthSettings: "Adjustable via My Coffee Choice or equivalent.",
                Grinder: "Ceramic burr grinder (12 settings) in many variants of 3200. :contentReference[oaicite:23]{index=23}",
                waterTankCapacity: "Approximately 1.8 L (~60 oz). :contentReference[oaicite:24]{index=24}",
                beanContainerCapacity: "About 10 oz (~284 g) hopper capacity. :contentReference[oaicite:25]{index=25}",
                Dimensions: "Approx. 17″ × 10″ × 15″ (W × D × H). :contentReference[oaicite:26]{index=26}",
                Weight: "Approx. 21 lb (~9.5 kg). :contentReference[oaicite:27]{index=27}",
                powerConsumption: "Around 1350 W / 120 V. :contentReference[oaicite:28]{index=28}"
            },
            features: {
                oneTouchFunctionality: "Simple interface for coffee drinks; fewer presets than LatteGo version.",
                easyCleaning: "Removable brew group, dishwasher-safe components.",
                userProfiles: "Customizable drink settings for strength, volume, and milk amount."
            }
        },
        "pmc04": {
            title: "Philips 2200 Automatic Espresso Machine",
            details: "Entry-level fully automatic espresso machine from Philips with built-in grinder and simple milk frother.",
            price: 200,
            imagePath: "/public/images/machines/philips/2200-automatic-espresso-machine/01.webp",
            keySpecs: {
                coffeeTypes: "Espresso, Coffee, Americano and more.",
                milkSystem: "Classic milk frother (not LatteGo).",
                coffeeStrengthSettings: "Adjustable strength and volume via My Coffee Choice.",
                Grinder: "Ceramic burr grinder with 12 settings (typical spec in 2200 series).",
                waterTankCapacity: "Approximately 1.8 L (≈ 60 oz).",
                beanContainerCapacity: "About 10 oz (~284 g).",
                Dimensions: "Approx. 17″ × 10″ × 15″.",
                Weight: "Approx. 20 lb (~9 kg).",
                powerConsumption: "Around 1350 W / 120 V."
            },
            features: {
                oneTouchFunctionality: "One-touch making of Espresso, Coffee, Cappuccino and Americano.",
                easyCleaning: "Removable brew group, AquaClean filter supported.",
                userProfiles: "Custom drink settings for strength/volume."
            }
        }
    },
    "saoco": {
        smc01: {
            title: "Saeco PicoBaristo",
            details: "Super-automatic espresso machine by Saeco with wide range of drink options and adjustable settings.",
            price: 400.99,
            imagePath: "/public/images/machines/saeco/picobaristo/01.webp",
            keySpecs: {
                coffeeTypes: "Espresso, Cappuccino, Latte, Americano, etc.",
                milkSystem: "Classic milk frother / steam wand (model dependent).",
                coffeeStrengthSettings: "Multiple strength and volume settings.",
                Grinder: "Built-in burr grinder (specs vary).",
                waterTankCapacity: "Varies by model (approx. 1.8 L).",
                beanContainerCapacity: "Varies by model (approx. 250–300g).",
                Dimensions: "Varies by model.",
                Weight: "Varies by model.",
                powerConsumption: "Approx. 1350 W."
            },
            features: {
                oneTouchFunctionality: "One-touch Bean-to-cup drinks with milk frother option.",
                easyCleaning: "Removeable brew group, automatic cleaning programs.",
                userProfiles: "User profiles and custom drink saving (model dependent)."
            }
        },
        smc02: {
            title: "Saeco Incanto",
            details: "Super-automatic espresso machine by Saeco, designed for ease of use and automatic cleaning features.",
            price: 399.99,
            imagePath: "/public/images/machines/saeco/incanto/01.webp",
            keySpecs: {
                coffeeTypes: "Espresso, Coffee, Cappuccino, Latte, Americano.",
                milkSystem: "Classic milk frother / steam (not LatteGo).",
                coffeeStrengthSettings: "Multiple strength and cup size options.",
                Grinder: "Built-in burr grinder (specs vary).",
                waterTankCapacity: "About 1.8 L.",
                beanContainerCapacity: "Approx. 250–300g.",
                Dimensions: "Varies by model.",
                Weight: "Varies by model.",
                powerConsumption: "Approx. 1350 W."
            },
            features: {
                oneTouchFunctionality: "One-touch preparation of popular drinks.",
                easyCleaning: "Automatic cleaning and descaling alerts.",
                userProfiles: "Custom drink settings saved for users."
            }
        }
    }
}

module.exports = data;
