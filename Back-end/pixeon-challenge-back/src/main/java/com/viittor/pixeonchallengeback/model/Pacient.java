package com.viittor.pixeonchallengeback.model;

import javax.persistence.*;

@Entity(name = "pacient")
public class Pacient {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "pacientger")
    @SequenceGenerator(name = "pacientger", sequenceName = "pacient_id_seq", allocationSize = 1)
    private long id;

    private String name;

    private int age;

    private Gender gender;

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

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }

    public Gender getGender() {
        return gender;
    }

    public void setGender(Gender gender) {
        this.gender = gender;
    }
}
