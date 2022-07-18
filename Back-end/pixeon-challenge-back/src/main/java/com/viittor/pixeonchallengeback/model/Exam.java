package com.viittor.pixeonchallengeback.model;

import javax.persistence.*;

@Entity(name = "exam")
public class Exam {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "exam")
    @SequenceGenerator(name = "exam", sequenceName = "exam_id_seq", allocationSize = 1)
    private long id;

    @ManyToOne
    @JoinColumn(name = "id_healthcare")
    private Healthcare healthcare;

    private String pacientName;

    private Integer pacientAge;

    private String pacientGender;

    private String physicianName;

    private String physicianCrm;

    private String procedureName;

    private boolean recovered;

    public Healthcare getHealthcare() {
        return healthcare;
    }

    public void setHealthcare(Healthcare healthcare) {
        this.healthcare = healthcare;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getPacientName() {
        return pacientName;
    }

    public void setPacientName(String pacientName) {
        this.pacientName = pacientName;
    }

    public Integer getPacientAge() {
        return pacientAge;
    }

    public void setPacientAge(Integer pacientAge) {
        this.pacientAge = pacientAge;
    }

    public String getPacientGender() {
        return pacientGender;
    }

    public void setPacientGender(String pacientGender) {
        this.pacientGender = pacientGender;
    }

    public String getPhysicianName() {
        return physicianName;
    }

    public void setPhysicianName(String physicianName) {
        this.physicianName = physicianName;
    }

    public String getPhysicianCrm() {
        return physicianCrm;
    }

    public void setPhysicianCrm(String physicianCrm) {
        this.physicianCrm = physicianCrm;
    }

    public String getProcedureName() {
        return procedureName;
    }

    public void setProcedureName(String procedureName) {
        this.procedureName = procedureName;
    }

    public boolean isRecovered() {
        return recovered;
    }

    public void setRecovered(boolean recovered) {
        this.recovered = recovered;
    }
}
