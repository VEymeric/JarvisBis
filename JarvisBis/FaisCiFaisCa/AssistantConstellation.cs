using Constellation;
using Constellation.Package;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;


namespace FaisCiFaisCa
{

    public class Program : PackageBase
    {
        string action;
        static void Main(string[] args)
        {
            PackageHost.Start<Program>(args);
        }

        /* public void PourEymeric(string value)
        {
            action = value;
        }
        */
        /*
        public override void OnStart()
        {
            while (PackageHost.IsRunning)
            {
                Console.WriteLine("Rentrez l'action a effectuer :");
                action = Console.ReadLine();

                switch (action)
                {
                    case "Allumer_télévision":
                        break;
                    case "Eteindre_télévision":
                        break;
                    case "Faire_café":
                        break;
                    case "Démmarrer_cafetière":
                        break;
                    case "Allumer_lumière":
                        break;
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
                        PackageHost.SendMessage(MessageScope.Create("WindowsControl"), "VolumeUp", null);
                        break;

                    case "Baisser_volume":
                        PackageHost.SendMessage(MessageScope.Create("WindowsControl"), "VolumeDown", null);
                        break;

                    default:
                        Console.WriteLine("Action inexistante. Rééssayez.");
                        break;
                }

                
            } 
        } */
    }
}