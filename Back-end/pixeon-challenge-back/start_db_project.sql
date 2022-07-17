create schema pixeonchallengeback

    create table healthcare
    (
        id   bigserial primary key,
        name varchar(100),
        cnpj varchar(14)
    );

create table gender
(
    id   bigserial primary key,
    name varchar(15)
);

insert into gender(name)
values ('masculino'),
       ('feminino');

create table pacient
(
    id        bigserial primary key,
    name      varchar(70),
    age       bigint,
    id_gender bigint,
    constraint fk_gender foreign key (id_gender) references gender (id)
);

create table physician
(
    id   bigserial primary key,
    name varchar(70),
    crm  varchar(10)
);

create table procedure
(
    id   bigserial primary key,
    name varchar(255)
);

create table exam
(
    id            bigserial primary key,
    id_healthcare bigint,
    id_pacient    bigint,
    id_physician  bigint,
    id_procedure  bigint,

    constraint fk_healthcare foreign key (id_healthcare) references healthcare (id),
    constraint fk_pacient foreign key (id_pacient) references pacient (id),
    constraint fk_physician foreign key (id_physician) references physician (id),
    constraint fk_procedure foreign key (id_procedure) references procedure (id)
);
