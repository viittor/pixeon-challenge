package com.viittor.pixeonchallengeback.service;

import com.viittor.pixeonchallengeback.model.Healthcare;
import com.viittor.pixeonchallengeback.repository.HealthcareRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.persistence.EntityExistsException;
import java.util.Optional;

@Service
public class HealthcareService {

    @Autowired
    HealthcareRepository repository;
    public Long insert (Healthcare healthcare){
        Healthcare hc1 = healthcare;
        validatePost(hc1);
        repository.save(hc1);
        return hc1.getId();
    }

    public void validatePost(Healthcare healthcare){
        //validade if name is already on database
        Optional<Healthcare> listHealthcareName = repository.findByName(healthcare.getName());
        if(listHealthcareName.isPresent() || healthcare.getName().isEmpty()){
            throw new EntityExistsException("Já existe uma clinica cadastrada com o nome " + healthcare.getName());
        }
        //validade if cnpj is already on database
        Optional<Healthcare> listHealthcareCnpj = repository.findByCnpj(healthcare.getCnpj());
        if(listHealthcareCnpj.isPresent() || healthcare.getCnpj().isEmpty()){
            throw new EntityExistsException("Já existe uma clinica cadastrada com o CNPJ " + healthcare.getCnpj());
        }
    }

}
