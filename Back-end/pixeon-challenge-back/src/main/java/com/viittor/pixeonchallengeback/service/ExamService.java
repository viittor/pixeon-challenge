package com.viittor.pixeonchallengeback.service;

import com.viittor.pixeonchallengeback.model.Exam;
import com.viittor.pixeonchallengeback.model.Healthcare;
import com.viittor.pixeonchallengeback.repository.ExamRepository;
import com.viittor.pixeonchallengeback.repository.HealthcareRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.persistence.EntityNotFoundException;
import javax.swing.text.html.Option;
import java.util.List;
import java.util.Optional;

@Service
public class ExamService {

    @Autowired
    ExamRepository repository;

    @Autowired
    HealthcareRepository healthcareRepository;

    public Long insert(Exam exam) {// implementar validações
        Exam exam1 = exam;
        validadePost(exam1);
        repository.save(exam1);
        return exam1.getId();
    }

    public void validadePost(Exam exam) {// implementar validações
        if (exam.getPacientName().isEmpty()) {
            throw new NullPointerException("O campo Nome do Paciente não pode estar vazio!");
        }
        if (exam.getPacientAge() == null) {
            throw new NullPointerException("O campo Idade do Paciente não pode estar vazio!");
        } else if (exam.getPacientAge() == 0) {
            throw new NullPointerException("O campo Idade do Paciente não pode ser zero (0)!");
        }
        if (exam.getPacientGender().isEmpty()) {
            throw new NullPointerException("O campo Genero do Paciente não pode estar vazio!");
        }
        if (exam.getPacientName().isEmpty()) {
            throw new NullPointerException("O campo Nome do Paciente não pode estar vazio!");
        }
        if (exam.getPhysicianCrm().isEmpty()) {
            throw new NullPointerException("O campo CRM do Médico não pode estar vazio!");
        }
        if (exam.getProcedureName().isEmpty()) {
            throw new NullPointerException("O campo Procedimento não pode estar vazio!");
        }
    }

    public void patch(Long id, Exam exam){
        Optional<Exam> examList = repository.findById(id);
        if(examList.isEmpty()){
            throw new EntityNotFoundException("Não foi encontrado exame com o ID informado!");
        }
        Exam exam2 = examList.get();

        if(healthcareRepository.existsById(exam.getHealthcare().getId()) == true){
            exam2.setHealthcare(exam.getHealthcare());
        }
        if(exam.getPacientName() != null){
            exam2.setPacientName(exam.getPacientName());
        }
        if (exam.getPacientAge() != null){
            exam2.setPacientAge(exam.getPacientAge());
        }
        if (exam.getPhysicianName() != null){
            exam2.setPhysicianName(exam.getPhysicianName());
        }
        if (exam.getPhysicianCrm() != null){
            exam2.setPhysicianCrm(exam.getPhysicianCrm());
        }
        if (exam.getProcedureName() != null){
            exam2.setProcedureName(exam.getProcedureName());
        }
        repository.save(exam2);
    }

    public void delete(Long id){   // implementar validações
        Optional<Exam> exam = repository.findById(id);
        repository.delete(exam.get());
    }

    public Exam getById(Long id){// implementar validações
        Optional<Exam> exam = repository.findById(id);
        return exam.get();
    }

    public List<Exam> getAll(){
        List<Exam> exam = (List<Exam>) repository.findAll();
        return exam;
    }

}
