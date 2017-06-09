using System;
using System.Windows.Forms;
using System.Speech.Recognition;
using System.Speech.Synthesis;
using ApiAiSDK;
using System.Threading;
using System.Text;
using System.Threading.Tasks;

namespace JarvisBis
{
    public partial class Speaker : Form
    {
        // Variables 
        SpeechRecognizer sr = new SpeechRecognizer();
        Choices elements = new Choices();
        Choices actions = new Choices();
        GrammarBuilder grammarBuilder = new GrammarBuilder();
        SpeechSynthesizer synth = new SpeechSynthesizer();
        Grammar grammar;
        string varAutreFichier = "Allumer_télévision";

        public Speaker()
        {
            InitializeComponent();
        }

        private void InitializeComponent()
        {
            this.SuspendLayout();
            // 
            // Speaker
            // 
            this.BackColor = System.Drawing.SystemColors.GradientActiveCaption;
            this.BackgroundImageLayout = System.Windows.Forms.ImageLayout.Center;
            this.ClientSize = new System.Drawing.Size(531, 494);
            this.HelpButton = true;
            this.Name = "Speaker";
            this.Text = "Jarvis Bis";
            this.Load += new System.EventHandler(this.Speaker_Load);
            this.ResumeLayout(false);

        }

        private void Speaker_Load(object sender, EventArgs e)
        {
            actions.Add(new string[] { "allumer", "eteindre", "rappel", "faire", "ouvrir", "fermer", "augmenter", "diminuer" });
            elements.Add(new string[] { "cafe", "vollet", "météo", "lumiere", "température", "télévision", "porte", "réveil", "alarme" });
            grammarBuilder.Append(actions);
            grammarBuilder.Append(elements);
            grammar = new Grammar(grammarBuilder);
            Console.WriteLine(" Grammar instantiate ");

            sr.LoadGrammar(grammar);
            Console.WriteLine(" Grammar loaded ");

            // Check voc
            sr.SpeechRecognized += new EventHandler<SpeechRecognizedEventArgs>(sr_Recognized);
            Console.WriteLine(" EventHandler add");

            // Init answers
            synth.SetOutputToDefaultAudioDevice();
        }

        private void sr_Recognized(object sender, SpeechRecognizedEventArgs e)
        {
            Console.WriteLine(e.Result.Text);
            MessageBox.Show("Speech recognized : " + e.Result.Text);
            compareTo(e.Result.Text);
        }

        private void compareTo(string identity)
        {
            string[] words;
            words = identity.Split((string[])null, StringSplitOptions.RemoveEmptyEntries);
            Console.WriteLine(" words 1 :" + words[0] + "words 2:" + words[1]);

            switch (words[1])
            {
                case "cafe":
                    synth.Speak(" Je vais vous préparer un café. ");
                    break;
                case "vollet":
                    if (words[0] == "ouvrir")
                    {
                        synth.Speak(" Je vous ouvre vos vollets. ");
                    }
                    else if (words[1] == "fermer")
                    {
                        synth.Speak(" Je vous ferme vos vollets. ");
                    }
                    else
                    {
                        synth.Speak(" Je n'ai pas compris ce que vous voulez faire.");
                    }
                    break;
                case "lumiere":
                    if (words[0] == "allumer")
                    {
                        synth.Speak(" Je vous allume vos lumières. ");
                    }
                    else if (words[0] == "eteindre")
                    {
                        synth.Speak(" Je vous éteindre vos lumieres.");
                    }
                    else
                    {
                        synth.Speak(" Je n'ai pas compris ce que vous voulez faire.");
                    }
                    break;
                case "télévision":
                    if (words[1] == "allumer")
                    {
                        synth.Speak(" Je vous allume la télévision. ");
                    }
                    else if (words[0] == "eteindre")
                    {
                        synth.Speak(" Je vous éteindre la télévision. ");
                    }
                    else
                    {
                        synth.Speak(" Je n'ai pas compris ce que vous voulez faire.");
                    }
                    break;
                default:
                    synth.Speak(" je n'ai strictement rien compris laisser moi tranquille ");
                    break;
            }
        }
    }
}