DROP DATABASE IF EXISTS BD_TCC;

CREATE DATABASE BD_TCC;
USE BD_TCC;

CREATE TABLE TB_CURSOS(
#CUR
ID_CURSO						INT				UNSIGNED		NOT NULL 		AUTO_INCREMENT ,
NM_CURSO						VARCHAR(45)		NOT NULL,

PRIMARY KEY (ID_CURSO)
);

CREATE TABLE TB_TURMAS(
#TUR
ID_TURMA						INT				UNSIGNED		NOT NULL 		AUTO_INCREMENT,
ANO								INT				NOT NULL,
SEMESTRE						INT				NOT NULL,
ID_CURSO_TURMA					INT				UNSIGNED		NOT NULL,

PRIMARY KEY (ID_TURMA),
CONSTRAINT FK_CUR_TUR FOREIGN KEY (ID_CURSO_TURMA) REFERENCES TB_CURSOS (ID_CURSO)
);

CREATE TABLE TB_ALUNOS(
#ALU
RM								INT				UNSIGNED		NOT NULL,
NM_ALUNO						VARCHAR(45)		NOT NULL,
CPF_ALUNO						VARCHAR(14)		NOT NULL,
TEL_ALUNO						VARCHAR(15)		NOT NULL,
EMAIL_ALUNO						VARCHAR(70) 	NOT NULL,
SENHA_ALUNO						VARCHAR(45) 	NOT NULL,
ID_TURMA_ALUNO					INT				UNSIGNED		NOT NULL,

PRIMARY KEY (RM),
CONSTRAINT FK_TUR_ALU FOREIGN KEY (ID_TURMA_ALUNO) REFERENCES TB_TURMAS (ID_TURMA)
);

CREATE TABLE TB_PROFESSORES(
#PRO
RM_PROFESSOR					INT				UNSIGNED		NOT NULL,
NM_PROFESSOR					VARCHAR(45)		NOT NULL,
CPF_PROFESSOR					VARCHAR(15)		NOT NULL,
TEL_PROFESSOR					VARCHAR(15)		NOT NULL,
EMAIL_PROFESSOR					VARCHAR(70) 	NOT NULL,
SENHA_PROFESSOR					VARCHAR(45) 	NOT NULL,

PRIMARY KEY (RM_PROFESSOR)
);

CREATE TABLE TB_DISCIPLINAS(
#DIS
ID_DISCIPLINA					INT				UNSIGNED		NOT NULL 		AUTO_INCREMENT ,
NM_DISCIPLINA					VARCHAR(45)		NOT NULL,

PRIMARY KEY (ID_DISCIPLINA)
);

CREATE TABLE PROFESSOR_DISCIPLINA(
ID_DISCIPLINA_PROFESSOR			INT 			UNSIGNED		NOT NULL	AUTO_INCREMENT,
ID_PROFESSOR					INT				UNSIGNED		NOT NULL,
ID_DISCIPLINA					INT				UNSIGNED		NOT NULL,

PRIMARY KEY (ID_DISCIPLINA_PROFESSOR),
CONSTRAINT FK_PRO_DIS FOREIGN KEY (ID_PROFESSOR) REFERENCES TB_PROFESSORES (RM_PROFESSOR),
CONSTRAINT FK_DIS_PRO FOREIGN KEY (ID_DISCIPLINA) REFERENCES TB_DISCIPLINAS (ID_DISCIPLINA)
);

CREATE TABLE TB_DIAS_HORAS(
#DIA
ID_DIA_HORA					INT				UNSIGNED		NOT NULL 		AUTO_INCREMENT ,
DIA							VARCHAR(45)		NOT NULL,
HORA						VARCHAR(6)		NOT NULL,

PRIMARY KEY (ID_DIA_HORA)		
);

CREATE TABLE TB_HORARIO_AULAS(
#HOR
ID_HORARIO						INT				UNSIGNED		NOT NULL 		AUTO_INCREMENT ,
ID_DISCIPLINA_PROFESSOR_AULA	INT				UNSIGNED		NOT NULL,
ID_DIA_AULA						INT				UNSIGNED 		NOT NULL,

PRIMARY KEY (ID_HORARIO),
CONSTRAINT FK_DIS_HOR FOREIGN KEY (ID_DISCIPLINA_PROFESSOR_AULA) REFERENCES PROFESSOR_DISCIPLINA (ID_DISCIPLINA_PROFESSOR),
CONSTRAINT FK_DIA_HOR FOREIGN KEY (ID_DIA_AULA) REFERENCES TB_DIAS_HORAS (ID_DIA_HORA)
);


CREATE TABLE TB_AULAS(
#AUL
ID_AULA							INT				UNSIGNED		NOT NULL 		AUTO_INCREMENT ,
DIA								DATE			UNIQUE			NOT NULL,
STATUS_AULA						CHAR(1)			UNIQUE			NOT NULL,
ID_HORARIO_AULA					INT				UNSIGNED		UNIQUE			NOT NULL,

PRIMARY KEY (ID_AULA),
CONSTRAINT FK_HOR_AUL FOREIGN KEY (ID_HORARIO_AULA) REFERENCES TB_HORARIO_AULAS (ID_HORARIO)
);

CREATE TABLE TB_PRESENCAS(
#PRE
ID_PRESENCA						CHAR(1)			NOT NULL,
ID_AULA_PRESENCA				INT				UNSIGNED		NOT NULL,
ID_ALUNO_PRESENCA				INT				UNSIGNED		NOT NULL,

PRIMARY KEY (ID_PRESENCA),
CONSTRAINT FK_AUL_PRE FOREIGN KEY (ID_AULA_PRESENCA) REFERENCES TB_AULAS (ID_AULA),
CONSTRAINT FK_ALU_PRE FOREIGN KEY (ID_ALUNO_PRESENCA) REFERENCES TB_ALUNOS (RM)
);



#cursos
Insert into TB_CURSOS (nm_curso) values ('Técnico Desenvolvimento de Sistemas');
Insert into TB_CURSOS (nm_curso) values ('Técnico Recursos Humanos');



#Turmas
Insert into TB_TURMAS (ano, semestre, ID_CURSO_TURMA) values ( 2021, 3, 1);
Insert into TB_TURMAS (ano, semestre, ID_CURSO_TURMA ) values ( 2022, 2, 1);
Insert into TB_TURMAS (ano, semestre, ID_CURSO_TURMA) values ( 2021, 3, 2);



#Alunos
Insert into TB_ALUNOS(rm, nm_aluno, cpf_aluno, tel_aluno, email_aluno, senha_aluno, ID_TURMA_ALUNO) values (210056 ,'Eduarda Nogueira Ribeiro', '97836447855', '11929327858', 'eduarda.ribeiro@etec.sp.gov.br', '123456', 3);
Insert into TB_ALUNOS(rm, nm_aluno, cpf_aluno, tel_aluno, email_aluno, senha_aluno, ID_TURMA_ALUNO) values (210047, 'Larissa Camilly da Silva', '44935467860', '11926430172', 'larissa.silva@etec.sp.gov.br', '123456', 3);
Insert into TB_ALUNOS(rm, nm_aluno, cpf_aluno, tel_aluno, email_aluno, senha_aluno, ID_TURMA_ALUNO) values (210039, 'Luiza Andrade Campo', '23373335825', '11991682311', 'luiza.campo@etec.sp.gov.br', '123456', 3);
Insert into TB_ALUNOS(rm, nm_aluno, cpf_aluno, tel_aluno, email_aluno, senha_aluno, ID_TURMA_ALUNO) values (210034, 'Stefany de Souza Casemiro', '62763776868', '11925499140', 'stefany.casemiro@etec.sp.gov.br', '123456', 3);
Insert into TB_ALUNOS(rm, nm_aluno, cpf_aluno, tel_aluno, email_aluno, senha_aluno, ID_TURMA_ALUNO) values (210099, 'Rafaela da Silva Dias', '29787211891', '11957084307', 'rafaela.dias@etec.sp.gov.br', '123456', 3);
Insert into TB_ALUNOS(rm, nm_aluno, cpf_aluno, tel_aluno, email_aluno, senha_aluno, ID_TURMA_ALUNO) values (210060, 'Stephanie Lauane Aguiar Rodrigues', '97260828897', '11958597403', 'stephanie.rodrigues@etec.sp.gov.br', '123456', 3);
Insert into TB_ALUNOS(rm, nm_aluno, cpf_aluno, tel_aluno, email_aluno, senha_aluno, ID_TURMA_ALUNO) values (18837, 'Aldomires Jose da Costa', '39044054899', '11930126974', 'aldomires.costa@etec.sp.gov.br', '123456', 3);
Insert into TB_ALUNOS(rm, nm_aluno, cpf_aluno, tel_aluno, email_aluno, senha_aluno, ID_TURMA_ALUNO) values (210051, 'Keliane Silva', '60860752801', '11942963079', 'keliane.silva@etec.sp.gov.br', '123456', 3);
Insert into TB_ALUNOS(rm, nm_aluno, cpf_aluno, tel_aluno, email_aluno, senha_aluno, ID_TURMA_ALUNO) values (210038, 'Lorena Sousa', '96400971874', '11954252098', 'lorena.sousa@etec.sp.gov.br', '123456', 3);
Insert into TB_ALUNOS(rm, nm_aluno, cpf_aluno, tel_aluno, email_aluno, senha_aluno, ID_TURMA_ALUNO) values (18836, 'Nadia María dos Santos', '98499334881', '11939084847', 'nadia.santos@etec.sp.gov.br', '123456', 3);
Insert into TB_ALUNOS(rm, nm_aluno, cpf_aluno, tel_aluno, email_aluno, senha_aluno, ID_TURMA_ALUNO) values (210019, 'Marina Lucas Martins', '38660928814', '11961289357', 'marina.martins@etec.sp.gov.br', '123456', 1);
Insert into TB_ALUNOS(rm, nm_aluno, cpf_aluno, tel_aluno, email_aluno, senha_aluno, ID_TURMA_ALUNO) values (210006, 'Larissa Moreira da Silva', '92109760885', '11931374059', 'larissa.silva@etec.sp.gov.br', '123456', 1);
Insert into TB_ALUNOS(rm, nm_aluno, cpf_aluno, tel_aluno, email_aluno, senha_aluno, ID_TURMA_ALUNO) values (22501, 'Victor dos Santos', '21606011871', '11952297721', 'victor.santos@etec.sp.gov.br', '123456', 1);
Insert into TB_ALUNOS(rm, nm_aluno, cpf_aluno, tel_aluno, email_aluno, senha_aluno, ID_TURMA_ALUNO) values (18756, 'Pedro Henrique Alves Candido da Silva', '29286475896' , '11963135199', 'pedro.silva@etec.sp.gov.br', '123456', 1);
Insert into TB_ALUNOS(rm, nm_aluno, cpf_aluno, tel_aluno, email_aluno, senha_aluno, ID_TURMA_ALUNO) values (210024, 'Jhonathan Orneles Rodrigues', '51225439841', '11976730325', 'jhonathan.rodrigues@etec.sp.gov.br', '123456', 1);
Insert into TB_ALUNOS(rm, nm_aluno, cpf_aluno, tel_aluno, email_aluno, senha_aluno, ID_TURMA_ALUNO) values (210001, 'Abner da Silva Nunes', '70718726863', '11969669678', 'abner.nunes@etec.sp.gov.br', '123456', 1);
Insert into TB_ALUNOS(rm, nm_aluno, cpf_aluno, tel_aluno, email_aluno, senha_aluno, ID_TURMA_ALUNO) values (210094, 'Alex Macedo Freitas da Silva', '34915192849', '11956732045', 'alex.silva@etec.sp.gov.br', '123456', 1);
Insert into TB_ALUNOS(rm, nm_aluno, cpf_aluno, tel_aluno, email_aluno, senha_aluno, ID_TURMA_ALUNO) values (210008, 'Jonathan Carvalho de Abreu', '84249927849', '11991051599', 'jonathan.abreu@etec.sp.gov.br', '123456', 1);
Insert into TB_ALUNOS(rm, nm_aluno, cpf_aluno, tel_aluno, email_aluno, senha_aluno, ID_TURMA_ALUNO) values (18622, 'Juan Kovaski', '53274748870', '11916567365', 'juan.kovaski@etec.sp.gov.br', '123456', 1);
Insert into TB_ALUNOS(rm, nm_aluno, cpf_aluno, tel_aluno, email_aluno, senha_aluno, ID_TURMA_ALUNO) values (17961, 'Lukas da Silva Santos', '69117883822', '11969298971', 'lukas.santos@etec.sp.gov.br', '123456', 1);
Insert into TB_ALUNOS(rm, nm_aluno, cpf_aluno, tel_aluno, email_aluno, senha_aluno, ID_TURMA_ALUNO) values (22188, 'Murilo Jacobina Lima', '27575669892', '11924358953', 'murilo.lima@etec.sp.gov.br', '123456', 2);
Insert into TB_ALUNOS(rm, nm_aluno, cpf_aluno, tel_aluno, email_aluno, senha_aluno, ID_TURMA_ALUNO) values (22171, 'Byatriz dos Santos Ferreira', '54263530853', '11933491903', 'byatriz.ferreira@etec.sp.gov.br', '123456', 2);
Insert into TB_ALUNOS(rm, nm_aluno, cpf_aluno, tel_aluno, email_aluno, senha_aluno, ID_TURMA_ALUNO) values (22291, 'Ana Baetriz Mariano Medeiros Santos', '73698866897', '11988292500', 'ana.beatriz@etec.sp.gov.br', '123456', 2);
Insert into TB_ALUNOS(rm, nm_aluno, cpf_aluno, tel_aluno, email_aluno, senha_aluno, ID_TURMA_ALUNO) values (18617, 'Mateus Silva dos Santos', '36716878866', '11934012488', 'mateus.santos@etec.sp.gov.br', '123456', 2);
Insert into TB_ALUNOS(rm, nm_aluno, cpf_aluno, tel_aluno, email_aluno, senha_aluno, ID_TURMA_ALUNO) values (10191, 'Samuel Cursino Moya de Souza', '22963232861', '11911549719', 'samuel.souza@etec.sp.gov.br', '123456', 2);
#Insert into TB_ALUNOS(rm, nm_aluno, cpf_aluno, tel_aluno, ID_TURMA_ALUNO) values ();



#Professores
Insert into TB_PROFESSORES (rm_professor, nm_professor, cpf_professor, tel_professor, email_professor, senha_professor) values (3698, 'Sildo Menezes', '26416132800', '11943664916','sildo.menezes@etec.sp.gov.br', '123456'); #Banco de dados 2 e 3
Insert into TB_PROFESSORES (rm_professor, nm_professor, cpf_professor, tel_professor, email_professor, senha_professor) values (7412, 'Tabatha Litiara de Araujo Menezes', '10165493852', '11969592611', 'tabatha.menezes@etec.sp.gov.br',  '123456'); #Ética e cidadania organizacional
Insert into TB_PROFESSORES (rm_professor, nm_professor, cpf_professor, tel_professor, email_professor, senha_professor) values (8745, 'Wagner Gusmão', '96636564849', '89709447', 'wagner.gusmao@etec.sp.gov.br', '123456'); #dtcc
Insert into TB_PROFESSORES (rm_professor, nm_professor, cpf_professor, tel_professor, email_professor, senha_professor) values (9856, 'Márcio João de Sousa Lima', '930985238', '11920212188', 'marcio.lima@etec.sp.gov.br', '123456'); #ssi
Insert into TB_PROFESSORES (rm_professor, nm_professor, cpf_professor, tel_professor, email_professor, senha_professor) values (3201, 'Cristiano Correa de Moraes', '41413142850', '11930306082', 'cirstiano.correa@etec.sp.gov.br', '123456'); #programação web 3
Insert into TB_PROFESSORES (rm_professor, nm_professor, cpf_professor, tel_professor, email_professor, senha_professor) values (4507, 'Adriano Domingues', '965403988', '11917171487', 'adriano.domingues@etec.sp.gov.br', '1232456'); #pam 1 e 2
Insert into TB_PROFESSORES (rm_professor, nm_professor, cpf_professor, tel_professor, email_professor, senha_professor) values (5744, 'Rinaldo Camara Gonçalves', '27124995817' ,'11947942037', 'rinaldo.goncalves@etec.sp.gov.br', '123456'); #Qualidade de software, sistemas embarcados e aps
Insert into TB_PROFESSORES (rm_professor, nm_professor, cpf_professor, tel_professor, email_professor, senha_professor) values (2144, 'Helio Francozo Júnior', '70721707823', ' 11927919767', 'helio.junior@etec.sp.gov.br', '123456');  #sistemas embarcados
Insert into TB_PROFESSORES (rm_professor, nm_professor, cpf_professor, tel_professor, email_professor, senha_professor) values (2896, 'Bruno José do Nascimento', '60970113854', '11996265604', 'bruno.nascimento@etec.sp.gov.br', '123456'); #ptcc
Insert into TB_PROFESSORES (rm_professor, nm_professor, cpf_professor, tel_professor, email_professor, senha_professor) values (2004, 'André Cavalcante', '72718143886', '11980679904', 'andre.cavalcante@etec.sp.gov.br', '123456'); #gestao estratégia de resultados
Insert into TB_PROFESSORES (rm_professor, nm_professor, cpf_professor, tel_professor, email_professor, senha_professor) values (8740, 'Osmar Duraes', '89140594807', '11980266079', 'osmar.duraes@etec.sp.gov.br', '123456'); #práticas e competências sociais e dtcc
Insert into TB_PROFESSORES (rm_professor, nm_professor, cpf_professor, tel_professor, email_professor, senha_professor) values (3690, 'Ana Maria', '77546795826', '11904310223', 'ana.maria@etec.sp.gov.br', '123456'); #gestao de desempenho e retenção de talentos
Insert into TB_PROFESSORES (rm_professor, nm_professor, cpf_professor, tel_professor, email_professor, senha_professor) values (2540, 'Amanda dos Santos', '10143399870', '11953838336', 'amanda.santos@etec.sp.gov.br', '123456'); #espanhol instrumental
Insert into TB_PROFESSORES (rm_professor, nm_professor, cpf_professor, tel_professor, email_professor, senha_professor) values (6980, 'Cleidson Vander', '27100037832', '11908584702', 'cleidson.vander@etec.sp.gov.br', '123456'); #tendencias é cenários em Rh
Insert into TB_PROFESSORES (rm_professor, nm_professor, cpf_professor, tel_professor, email_professor, senha_professor) values (3741 ,'Mauricio de Moraes', '36695649855', '11999600931', 'mauricio.moraes@etec.sp.gov.br', '123456'); #qualidade de vida e segurança do trabalho



#Disciplinas
Insert into TB_DISCIPLINAS (nm_disciplina) values ('Sistemas Embarcados');
Insert into TB_DISCIPLINAS (nm_disciplina) values ('Banco de Dados II');
Insert into TB_DISCIPLINAS (nm_disciplina) values ('Programação de Aplicativos Mobile I');
Insert into TB_DISCIPLINAS (nm_disciplina) values ('Planejamento do Trabalho de Conclusão de Curso');
Insert into TB_DISCIPLINAS (nm_disciplina) values ('Programação Web II');
Insert into TB_DISCIPLINAS (nm_disciplina) values ('Desenvolvimento de Sistemas');
Insert into TB_DISCIPLINAS (nm_disciplina) values ('Banco de Dados III');
Insert into TB_DISCIPLINAS (nm_disciplina) values ('Ética e Cidadania Organizacional');
Insert into TB_DISCIPLINAS (nm_disciplina) values ('Desenvolvimento do Trabalho de Conclusão de Curso');
Insert into TB_DISCIPLINAS (nm_disciplina) values ('Segurança de Sistemas de Informação');
Insert into TB_DISCIPLINAS (nm_disciplina) values ('Programação Web III');
Insert into TB_DISCIPLINAS (nm_disciplina) values ('Programação de Aplicativos Mobile II');
Insert into TB_DISCIPLINAS (nm_disciplina) values ('Qualidade e Teste de Software');
Insert into TB_DISCIPLINAS (nm_disciplina) values ('Gestão Estratégica de Resultados');
Insert into TB_DISCIPLINAS (nm_disciplina) values ('Prática de Competencia Sociais');
Insert into TB_DISCIPLINAS (nm_disciplina) values ('Gestão do Desempenho e Retenção de Talentos');
Insert into TB_DISCIPLINAS (nm_disciplina) values ('Espanhol Instrumental');
Insert into TB_DISCIPLINAS (nm_disciplina) values ('Tendências e Cenários em Recursos Humanos');
Insert into TB_DISCIPLINAS (nm_disciplina) values ('Qualidade de Vida e Segurança no Trabalho');
Insert into TB_DISCIPLINAS (nm_disciplina) values ('Análise e Projeto de Sistemas');
#Insert into TB_DISCIPLINAS (nm_disciplina) values ();



#Pofessor disciplina
Insert into PROFESSOR_DISCIPLINA (ID_PROFESSOR, ID_DISCIPLINA) values (2004, 14);
Insert into PROFESSOR_DISCIPLINA (ID_PROFESSOR, ID_DISCIPLINA) values (2144, 1);
Insert into PROFESSOR_DISCIPLINA (ID_PROFESSOR, ID_DISCIPLINA) values (2540, 17);
Insert into PROFESSOR_DISCIPLINA (ID_PROFESSOR, ID_DISCIPLINA) values (2896, 4);
Insert into PROFESSOR_DISCIPLINA (ID_PROFESSOR, ID_DISCIPLINA) values (3201, 11);
Insert into PROFESSOR_DISCIPLINA (ID_PROFESSOR, ID_DISCIPLINA) values (3201, 5);
Insert into PROFESSOR_DISCIPLINA (ID_PROFESSOR, ID_DISCIPLINA) values (3690, 16);
Insert into PROFESSOR_DISCIPLINA (ID_PROFESSOR, ID_DISCIPLINA) values (3698, 2);
Insert into PROFESSOR_DISCIPLINA (ID_PROFESSOR, ID_DISCIPLINA) values (3698, 7);
Insert into PROFESSOR_DISCIPLINA (ID_PROFESSOR, ID_DISCIPLINA) values (3741, 19);
Insert into PROFESSOR_DISCIPLINA (ID_PROFESSOR, ID_DISCIPLINA) values (4507, 3);
Insert into PROFESSOR_DISCIPLINA (ID_PROFESSOR, ID_DISCIPLINA) values (4507, 12);
Insert into PROFESSOR_DISCIPLINA (ID_PROFESSOR, ID_DISCIPLINA) values (5744, 13);
Insert into PROFESSOR_DISCIPLINA (ID_PROFESSOR, ID_DISCIPLINA) values (5744, 1);
Insert into PROFESSOR_DISCIPLINA (ID_PROFESSOR, ID_DISCIPLINA) values (5744, 20);
Insert into PROFESSOR_DISCIPLINA (ID_PROFESSOR, ID_DISCIPLINA) values (6980, 18);
Insert into PROFESSOR_DISCIPLINA (ID_PROFESSOR, ID_DISCIPLINA) values (7412, 8);
Insert into PROFESSOR_DISCIPLINA (ID_PROFESSOR, ID_DISCIPLINA) values (8740, 15);
Insert into PROFESSOR_DISCIPLINA (ID_PROFESSOR, ID_DISCIPLINA) values (8740, 9);
Insert into PROFESSOR_DISCIPLINA (ID_PROFESSOR, ID_DISCIPLINA) values (8745, 9);
Insert into PROFESSOR_DISCIPLINA (ID_PROFESSOR, ID_DISCIPLINA) values (9856, 10);
#Insert into PROFESSOR_DISCIPLINA (ID_PROFESSOR, ID_DISCIPLINA) values ();

#dias e horas
Insert into TB_DIAS_HORAS (DIA, HORA) values ('Segunda-Feira', '19:00');
Insert into TB_DIAS_HORAS (DIA, HORA) values ('Segunda-Feira', '21:00');
Insert into TB_DIAS_HORAS (DIA, HORA) values ('Terça-Feira', '19:00');
Insert into TB_DIAS_HORAS (DIA, HORA) values ('Terça-Feira', '21:00');
Insert into TB_DIAS_HORAS (DIA, HORA) values ('Quarta-Feira', '19:00');
Insert into TB_DIAS_HORAS (DIA, HORA) values ('Quarta-Feira', '21:00');
Insert into TB_DIAS_HORAS (DIA, HORA) values ('Quinta-Feira', '19:00');
Insert into TB_DIAS_HORAS (DIA, HORA) values ('Quinta-Feira', '21:00');
Insert into TB_DIAS_HORAS (DIA, HORA) values ('Sexta-Feira', '19:00');
Insert into TB_DIAS_HORAS (DIA, HORA) values ('Sexta-Feira',  '21:00');



#HORARIO_AULAS
Insert into TB_HORARIO_AULAS (ID_DISCIPLINA_PROFESSOR_AULA, ID_DIA_AULA) VALUES (9, 1);
Insert into TB_HORARIO_AULAS (ID_DISCIPLINA_PROFESSOR_AULA, ID_DIA_AULA) VALUES (17, 2);
Insert into TB_HORARIO_AULAS (ID_DISCIPLINA_PROFESSOR_AULA, ID_DIA_AULA) VALUES (20, 3);
Insert into TB_HORARIO_AULAS (ID_DISCIPLINA_PROFESSOR_AULA, ID_DIA_AULA) VALUES (21, 4);
Insert into TB_HORARIO_AULAS (ID_DISCIPLINA_PROFESSOR_AULA, ID_DIA_AULA) VALUES (5, 5);
Insert into TB_HORARIO_AULAS (ID_DISCIPLINA_PROFESSOR_AULA, ID_DIA_AULA) VALUES (5, 6);
Insert into TB_HORARIO_AULAS (ID_DISCIPLINA_PROFESSOR_AULA, ID_DIA_AULA) VALUES (12, 7);
Insert into TB_HORARIO_AULAS (ID_DISCIPLINA_PROFESSOR_AULA, ID_DIA_AULA) VALUES (12, 8);
Insert into TB_HORARIO_AULAS (ID_DISCIPLINA_PROFESSOR_AULA, ID_DIA_AULA) VALUES (13, 9);
Insert into TB_HORARIO_AULAS (ID_DISCIPLINA_PROFESSOR_AULA, ID_DIA_AULA) VALUES (14, 10);
#Insert into TB_HORARIO_AULAS (ID_DISCIPLINA_PROFESSOR_AULA, ID_DIA_AULA) values ();

#professor abre a aula
#automaticamente é gerado um ID da aula


#habilitar a aula
select 
haula.id_horario as idHorario, 
id_professor as idProfessor,
nm_professor as nomeProfessor,
nm_disciplina as nomeDisciplina,
dia as DiaDaSemana,
hora as HoraDaSemana
from tb_horario_aulas haula
inner join professor_disciplina prodisc on prodisc.ID_DISCIPLINA_PROFESSOR = haula.ID_DISCIPLINA_PROFESSOR_AULA
inner join tb_professores pro on pro.rm_professor = prodisc.id_professor
inner join tb_disciplinas disc on disc.id_disciplina = prodisc.id_disciplina
inner join tb_dias_horas dhora on dhora.ID_DIA_HORA = haula.ID_DIA_AULA
#tb_aulas
where id_professor = 5744;

#quando o professor (abrir a aula) automaticamente 
#será criado o ID da aula pelo sistema, esse ID é unico e pode ser o QRcode
insert into tb_aulas (dia, status_aula, id_horario_aula) values ('2022-11-21', 1, 10);

#exibir a aula para o aluno
select 
id_aula,
nm_professor as nomeProfessor,
nm_disciplina as nomeDisciplina,
dhora.DIA as diasemana,
aulas.DIA as dia,
dhora.HORA as hora
from tb_horario_aulas haula
inner join professor_disciplina prodisc on prodisc.ID_DISCIPLINA_PROFESSOR = haula.ID_DISCIPLINA_PROFESSOR_AULA
inner join tb_professores pro on pro.rm_professor = prodisc.id_professor
inner join tb_disciplinas disc on disc.id_disciplina = prodisc.id_disciplina
inner join tb_dias_horas dhora on dhora.ID_DIA_HORA = haula.ID_DIA_AULA
inner join tb_aulas aulas on aulas.ID_HORARIO_AULA = haula.ID_HORARIO
where aulas.dia = '2022-11-21';

SELECT * FROM  TB_AULAS;