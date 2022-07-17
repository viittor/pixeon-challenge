package com.viittor.pixeonchallengeback.model;

import javax.persistence.*;

@Entity(name = "exam")
public class Exam {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private long id;

    @ManyToOne
    @JoinColumn(name = "healthcare_institucion_id")
    private Healthcare healthcare;

    @ManyToOne
    @JoinColumn(name = "pacient_id")
    private Pacient pacient;

    @ManyToOne
    @JoinColumn(name = "physician_id")
    private Physician physician;

    @ManyToOne
    @JoinColumn(name = "procedure_id")
    private Procedure procedure;

    public Procedure getProcedure() {
        return procedure;
    }

    public void setProcedure(Procedure procedure) {
        this.procedure = procedure;
    }

    public Physician getPhysician() {
        return physician;
    }

    public void setPhysician(Physician physician) {
        this.physician = physician;
    }

    public Pacient getPacient() {
        return pacient;
    }

    public void setPacient(Pacient pacient) {
        this.pacient = pacient;
    }


    public Healthcare getHealthcareInstitucion() {
        return healthcare;
    }

    public void setHealthcareInstitucion(Healthcare healthcare) {
        this.healthcare = healthcare;
    }

}
