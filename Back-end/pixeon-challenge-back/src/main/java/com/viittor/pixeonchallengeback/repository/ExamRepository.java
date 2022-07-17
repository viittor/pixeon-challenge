package com.viittor.pixeonchallengeback.repository;

import com.viittor.pixeonchallengeback.model.Exam;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ExamRepository extends CrudRepository<Exam, Long> {

}
