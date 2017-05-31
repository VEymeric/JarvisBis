create database liste_actions;
use liste_actions;

create table LISTE_VERBE
(
	VERBE VARCHAR(32) not null,
	primary key (VERBE)	
);

create table LISTE_OBJET
(
	OBJET VARCHAR(32) not null,
	primary key (OBJET)
);

create table LISTE_ACTION
(
	ACTION VARCHAR(32) not null,
	VERBE VARCHAR(32) not null,
	OBJET VARCHAR(32) not null,

	primary key (ACTION)
);

insert into LISTE_VERBE values('sers');
insert into LISTE_VERBE values('coule');
insert into LISTE_VERBE values('fais');
insert into LISTE_VERBE values('prépare');
insert into LISTE_VERBE values('ouvre');
insert into LISTE_VERBE values('ferme');
insert into LISTE_VERBE values('monte');
insert into LISTE_VERBE values('descend');
insert into LISTE_VERBE values('augmente');
insert into LISTE_VERBE values('diminue');
insert into LISTE_VERBE values('baisse');
insert into LISTE_VERBE values('allume');
insert into LISTE_VERBE values('éteint');
insert into LISTE_VERBE values('mets');
insert into LISTE_VERBE values('démarre');
insert into LISTE_VERBE values('active');
insert into LISTE_VERBE values('programme');
insert into LISTE_VERBE values('prévoit');
insert into LISTE_VERBE values('règle');
insert into LISTE_VERBE values('actionne');
insert into LISTE_VERBE values('rappelle');
insert into LISTE_VERBE values('ai');
insert into LISTE_VERBE values('est');
insert into LISTE_VERBE values('planifie');
insert into LISTE_VERBE values('dis');
insert into LISTE_VERBE values('annonce');
insert into LISTE_VERBE values('ajoute');
insert into LISTE_VERBE values('servir');
insert into LISTE_VERBE values('couler');
insert into LISTE_VERBE values('faire');
insert into LISTE_VERBE values('préparer');
insert into LISTE_VERBE values('ouvrir');
insert into LISTE_VERBE values('fermer');
insert into LISTE_VERBE values('monter');
insert into LISTE_VERBE values('descendre');
insert into LISTE_VERBE values('augmenter');
insert into LISTE_VERBE values('diminuer');
insert into LISTE_VERBE values('baisser');
insert into LISTE_VERBE values('allumer');
insert into LISTE_VERBE values('éteindre');
insert into LISTE_VERBE values('mettre');
insert into LISTE_VERBE values('démarrer');
insert into LISTE_VERBE values('activer');
insert into LISTE_VERBE values('programmer');
insert into LISTE_VERBE values('prévoir');
insert into LISTE_VERBE values('règler');
insert into LISTE_VERBE values('rappeler');
insert into LISTE_VERBE values('avoir');
insert into LISTE_VERBE values('être');
insert into LISTE_VERBE values('planifier');
insert into LISTE_VERBE values('dire');
insert into LISTE_VERBE values('annoncer');
insert into LISTE_VERBE values('ajouter');

insert into LISTE_OBJET values('café');
insert into LISTE_OBJET values('cafetière');
insert into LISTE_OBJET values('vollet');
insert into LISTE_OBJET values('température');
insert into LISTE_OBJET values('chauffage');
insert into LISTE_OBJET values('lumière');
insert into LISTE_OBJET values('télévision');
insert into LISTE_OBJET values('télé');
insert into LISTE_OBJET values('écran');
insert into LISTE_OBJET values('réveil');
insert into LISTE_OBJET values('météo');
insert into LISTE_OBJET values('temps');
insert into LISTE_OBJET values('rendez-vous');
insert into LISTE_OBJET values('rencontre');
insert into LISTE_OBJET values('agenda');
insert into LISTE_OBJET values('emploi du temps');
insert into LISTE_OBJET values('programme');

insert into ACTION values('faire un café','fais','café');
insert into ACTION values('faire un café','sers','café');
insert into ACTION values('faire un café','coule','café');
insert into ACTION values('faire un café','prépare','café');
insert into ACTION values('faire un café','faire','café');
insert into ACTION values('faire un café','servir','café');
insert into ACTION values('faire un café','couler','café');
insert into ACTION values('faire un café','préparer','café');

insert into ACTION values('monter les vollets','ouvre','vollet');
insert into ACTION values('monter les vollets','ouvrir','vollet');
insert into ACTION values('descendre les vollets','ferme','vollet');
insert into ACTION values('descendre les vollets','fermer','vollet');
insert into ACTION values('monter les vollets','monte','vollet');
insert into ACTION values('monter les vollets','monter','vollet');
insert into ACTION values('descendre les vollets','descend','vollet');
insert into ACTION values('descendre les vollets','descendre','vollet');
insert into ACTION values('descendre les vollets','baisse','vollet');
insert into ACTION values('descendre les vollets','baisser','vollet');

insert into ACTION values('augmenter la température','monte','température');
insert into ACTION values('augmenter la température','monter','température');
insert into ACTION values('augmenter la température','augmente','température');
insert into ACTION values('augmenter la température','augmenter','température');
insert into ACTION values('augmenter la température','ajoute','température');
insert into ACTION values('augmenter la température','ajouter','température');
insert into ACTION values('augmenter la température','monte','chauffage');
insert into ACTION values('augmenter la température','monter','chauffage');
insert into ACTION values('augmenter la température','augmente','chauffage');
insert into ACTION values('augmenter la température','augmenter','chauffage');
insert into ACTION values('augmenter la température','ajoute','chauffage');
insert into ACTION values('augmenter la température','ajouter','chauffage');

insert into ACTION values('diminuer la température','descend','température');
insert into ACTION values('diminuer la température','descendre','température');
insert into ACTION values('diminuer la température','diminue','température');
insert into ACTION values('diminuer la température','diminuer','température');
insert into ACTION values('diminuer la température','baisse','température');
insert into ACTION values('diminuer la température','baisser','température');
insert into ACTION values('diminuer la température','retire','température');
insert into ACTION values('diminuer la température','retirer','température');
insert into ACTION values('diminuer la température','descend','chauffage');
insert into ACTION values('diminuer la température','descendre','chauffage');
insert into ACTION values('diminuer la température','diminue','chauffage');
insert into ACTION values('diminuer la température','diminuer','chauffage');
insert into ACTION values('diminuer la température','baisse','chauffage');
insert into ACTION values('diminuer la température','baisser','chauffage');
insert into ACTION values('diminuer la température','retire','chauffage');
insert into ACTION values('diminuer la température','retirer','chauffage');

insert into ACTION values('régler la température','mets','température');
insert into ACTION values('régler la température','mettre','température');
insert into ACTION values('régler la température','mets','chauffage');
insert into ACTION values('régler la température','mettre','chauffage');
insert into ACTION values('régler la température','règle','température');
insert into ACTION values('régler la température','règler','température');
insert into ACTION values('régler la température','règle','chauffage');
insert into ACTION values('régler la température','règler','chauffage');

insert into ACTION values('allumer la lumière','allume','lumière');
insert into ACTION values('allumer la lumière','allumer','lumière');

insert into ACTION values('éteindre la lumière','éteins','lumière');
insert into ACTION values('éteindre la lumière','éteindre','lumière');

insert into ACTION values('allumer la télévision','allume','télé');
insert into ACTION values('allumer la télévision','allumer','télé');
insert into ACTION values('allumer la télévision','allume','télévision');
insert into ACTION values('allumer la télévision','allumer','télévision');
insert into ACTION values('allumer la télévision','allume','écran');
insert into ACTION values('allumer la télévision','allumer','écran');

insert into ACTION values('éteindre la télévision','éteins','télé');
insert into ACTION values('éteindre la télévision','éteindre','télé');
insert into ACTION values('éteindre la télévision','éteins','télévision');
insert into ACTION values('éteindre la télévision','éteindre','télévision');
insert into ACTION values('éteindre la télévision','éteins','écran');
insert into ACTION values('éteindre la télévision','éteindre','écran');

insert into ACTION values('','','');
insert into ACTION values('','','');
insert into ACTION values('','','');
insert into ACTION values('','','');
