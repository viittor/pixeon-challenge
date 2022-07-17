package com.viittor.pixeonchallengeback.model;

import javax.persistence.*;

@Entity(name = "healthcare")
public class Healthcare {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "healthcare")
    @SequenceGenerator(name = "healthcare", sequenceName = "healthcare_id_seq", allocationSize = 1)
    private long id;

    private String name;

    private String cnpj;

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

    public String getCnpj() {
        return cnpj;
    }

    public void setCnpj(String cnpj) {
        this.cnpj = cnpj;
    }
}
