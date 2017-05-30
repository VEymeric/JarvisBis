using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Windows.Forms;
using System.Windows.Controls;
using System.Threading;
using System.Text;
using System.Speech.Recognition;
using System.Speech.Synthesis;
using System.ComponentModel;
using System.Data;
using System.Drawing;


namespace JarvisBis { 
    public partial class Speaker : Form
    {
        // Variables 
        SpeechRecognizer sr = new SpeechRecognizer();
        Choices elements = new Choices();
        Choices actions = new Choices();
        GrammarBuilder grammarBuilder = new GrammarBuilder();
        SpeechSynthesizer synth = new SpeechSynthesizer();
        Grammar grammar;

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
            this.ClientSize = new System.Drawing.Size(531, 494);
            this.Name = "Speaker";
            this.Text = "Jarvis Bis";
            this.Load += new System.EventHandler(this.Speaker_Load);
            this.ResumeLayout(false);
        }

        private void Speaker_Load(object sender, EventArgs e)
        {
            actions.Add(new string[] { "allumer", "eteindre", "rappel", "faire", "ouvrir", "fermer" });
            elements.Add(new string[] { "café", "vollet", "météo", "lumiere", "temperature", "télévision", "porte", "reveil", "alarme" });
            grammarBuilder.Append(elements);
            grammarBuilder.Append(actions);
            grammar = new Grammar(grammarBuilder);
            Console.WriteLine(" Grammar instantiate ");

            sr.LoadGrammar(grammar);
            Console.WriteLine(" Grammar loaded ");

            sr.SpeechRecognized += new EventHandler<SpeechRecognizedEventArgs>(sr_Recognized);
            Console.WriteLine(" EventHandler add");

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
            if( identity != null)
            {
                synth.Speak("  ");
            }
        }
    }
}
