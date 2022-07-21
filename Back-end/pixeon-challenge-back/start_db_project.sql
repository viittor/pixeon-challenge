create schema pixeonchallengeback;

create table healthcare (
                            id bigserial primary key,
                            name varchar(100),
                            cnpj varchar(14),
                            coins bigint);

create table exam (
                      id bigserial primary key,
                      id_healthcare bigint,
                      pacient_name varchar(70),
                      pacient_age bigint,
                      pacient_gender varchar(20),
                      physician_name varchar(70),
                      physician_crm varchar(10),
                      procedure_name varchar(255),
                      recovered boolean,
                      constraint fk_healthcare foreign key (id_healthcare) references healthcare(id));

insert into healthcare (name, cnpj, coins) values
                                               ('Clinica Avenida', '05515946000142', 20),
                                               ('Hospital Bom Jesus', '05515946000135', 20),
                                               ('Centro Médico Health Plus', '05515946000154', 20);

insert into exam (id_healthcare, pacient_name, pacient_age, pacient_gender, physician_name, physician_crm, procedure_name) values
                                                                                                                               (1, 'João da Silva', 15 , 'Masculino', 'Dr. Pedro Gouveia', '151256PR', 'Colonoscopia'),
                                                                                                                               (2, 'Angela Oliveira', 45 , 'Feminino', 'Dr. Alberto Soares', '258655PR', 'Exame de Sangue'),
                                                                                                                               (3, 'Marcelo Augusto', 180 , 'Masculino', 'Dr. Pedro Gouveia', '151256PR', 'Cirugia do Coração');