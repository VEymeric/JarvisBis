using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Windows.Forms;
using System.Windows.Controls;
using System.Threading;
using System.Text;
using System.Speech.Recognition;

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
        Grammar grammar;

        public Speaker()
        {
            InitializeComponent();
        }

        private void InitializationGrammar()
        {
            elements.Add(new string[] { "café", "vollet","météo", "lumiere", "temperature", "télévision","porte", "reveil", "alarme" });
            actions.Add(new string[] {"allumer", "eteindre", "rappel","faire","ouvrir","fermer"});
            grammarBuilder.Append(elements);
            grammarBuilder.Append(actions);
            grammar = new Grammar(grammarBuilder);
            Console.WriteLine(" Grammar instantiate ");
        }

        private void LoadGrammar()
        {
            sr.LoadGrammar(grammar);
            Console.WriteLine(" Grammar loaded ");
        }

        public void AddEventHandler()
        {
            sr.SpeechRecognized += new EventHandler<SpeechRecognizedEventArgs>(showText);
            Console.WriteLine(" EventHandler add");
        }

        private void showText(object sender, SpeechRecognizedEventArgs e)
        {
            MessageBox.Show("Speech recognized : "+e.Result.Text);
            Console.WriteLine(" ok " + e.Result.Text);
            compareText(e);
        }

        private void compareText(SpeechRecognizedEventArgs e)
        {
            if( e.Result.Text == "café")
            {
                Console.WriteLine(" CAFé !!!! ");
            }
        }


        private void InitializeComponent()
        {
            this.SuspendLayout();
            // 
            // Speaker
            // 
            this.ClientSize = new System.Drawing.Size(250, 258);
            this.Name = "Speaker";
            this.Load += new System.EventHandler(this.Speaker_Load);
            this.ResumeLayout(false);

        }

        private void Speaker_Load(object sender, EventArgs e)
        {
            InitializationGrammar();
            LoadGrammar();
            AddEventHandler();
        }
    }
}
