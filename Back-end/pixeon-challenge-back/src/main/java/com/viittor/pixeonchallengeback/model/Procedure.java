package com.viittor.pixeonchallengeback.model;

import javax.persistence.*;

@Entity(name = "procedure")
public class Procedure {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "procedureger")
    @SequenceGenerator(name = "procedureger", sequenceName = "procedure_id_seq", allocationSize = 1)
    private long id;

    private String name;

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}
