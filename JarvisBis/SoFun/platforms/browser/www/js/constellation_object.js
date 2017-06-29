function realiseActionWithConstellation(detected_event) {	// action constellation
    console.log(detected_event);
    switch (detected_event.action) {
        case "Allumer_télévision":
            break;
        case "Eteindre_télévision":
            break;
        case "Faire_cafe":
            console.log("Faire café");
            break;
        case "Démarrer_cafetière":
            break;
        case "Allumer_lumiere":
            switch(event.type) {
                case "rouge":
                    constellation.server.sendMessage({ Scope: 'Package', Args: ['Hue'] }, 'SetColor', [ 2, 255, 0, 0 ]);
                    break;
                case "vert":
                    constellation.server.sendMessage({ Scope: 'Package', Args: ['Hue'] }, 'SetColor', [ 1, 0, 255, 0 ]);
                    break;
                case "jaune":
                    constellation.server.sendMessage({ Scope: 'Package', Args: ['Hue'] }, 'SetColor', [ 2, 200, 150, 0 ]);
                    break;
                case "bleu":
                    constellation.server.sendMessage({ Scope: 'Package', Args: ['Hue'] }, 'SetColor', [ 2, 0, 0, 255 ]);
                    break;
                case "violet":
                    constellation.server.sendMessage({ Scope: 'Package', Args: ['Hue'] }, 'SetColor', [ 2, 102, 0, 153 ]);
                    break;
                case "orange":
                    constellation.server.sendMessage({ Scope: 'Package', Args: ['Hue'] }, 'SetColor', [ 2, 237, 127, 16 ]);
                    break;
                case "rose":
                    constellation.server.sendMessage({ Scope: 'Package', Args: ['Hue'] }, 'SetColor', [ 2, 253, 108, 158 ]);
                    break;
                default:
                    constellation.server.sendMessage({ Scope: 'Package', Args: ['Hue'] }, 'SetColor', [ 2, 255, 255, 255 ]);
                    break;
            }
        case "Eteindre_lumière":
            break;
        case "Mettre_réveil":
            break;
        case "Monter_vollet":
            break;
        case "Baisser_vollet":
            break;
        case "Augmenter_chauffage":

            break;
        case "Diminuer_chauffage":
            break;

        case "Monter_volume":
			console.log("Monter volume send to constellation");
            constellation.server.sendMessage({ Scope: 'Package', Args: ['WindowsControl'] }, 'VolumeUp', {});
            break;

        case "Baisser_volume":
            constellation.server.sendMessage({ Scope: 'Package', Args: ['WindowsControl'] }, 'VolumeDown', {});
            break;
        default:
            console.log("Action inexistante. Rééssayez.");
            break;
    }
}