package com.viittor.pixeonchallengeback.repository;

import com.viittor.pixeonchallengeback.model.Healthcare;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import java.util.Optional;

@Repository
public interface HealthcareRepository extends CrudRepository<Healthcare, Long> {

    Optional<Healthcare> findByName(String name);
    Optional<Healthcare> findByCnpj(String cnpj);
}
