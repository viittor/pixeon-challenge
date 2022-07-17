package com.viittor.pixeonchallengeback.model;

import javax.persistence.*;

@Entity(name = "physician")
public class Physician {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "physicianger")
    @SequenceGenerator(name = "physicianger", sequenceName = "physician_id_seq", allocationSize = 1)
    private long id;

    private String name;

    private String crm;

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

    public String getCrm() {
        return crm;
    }

    public void setCrm(String crm) {
        this.crm = crm;
    }
}
