// vérifier si il n'y a pas d'évenement à cette heure la et cette date la
  // -> si oui evenement constellation
  // si non -> bat les couilles

var annee   = now.getFullYear();
var mois    = now.getMonth() + 1;
var jour    = now.getDate();
var heure   = now.getHours();
var minute  = now.getMinutes();
var seconde = now.getSeconds();

function check() {





}


function valid() {
    
    switch (action) {
        case "Allumer_télévision":
            break;
        case "Eteindre_télévision":
            break;
        case "Faire_café":
            break;
        case "Démmarrer_cafetière":
            break;
        case "Allumer_lumière":
            constellation.server.sendMessage({ Scope: 'Package', Args: ['Hue'] }, 'SetState', [lightId, true]);
            break;
        case "Eteindre_lumière":
            constellation.server.sendMessage({ Scope: 'Package', Args: ['Hue'] }, 'SetState', [lightId, false]);
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
            constellation.server.sendMessage({ Scope: 'Package', Args: ['WindowsControl'] }, 'VolumeUp', {});
            break;

        case "Baisser_volume":
            constellation.server.sendMessage({ Scope: 'Package', Args: ['WindowsControl'] }, 'VolumeDown', {});
            break;

        default:
            Console.WriteLine("Action inexistante. Rééssayez.");
            break;
    }
}