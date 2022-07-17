package com.viittor.pixeonchallengeback.controller;

import com.viittor.pixeonchallengeback.model.Exam;
import com.viittor.pixeonchallengeback.service.ExamService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/exam")
public class ExamController {

    @Autowired
    ExamService service;

    @PostMapping
    public ResponseEntity<Long> post(
            @RequestBody Exam exam
    ) {
        Long healthCareId = service.insert(exam);
        return new ResponseEntity<>(healthCareId, HttpStatus.CREATED);
    }

    @GetMapping//ok
    public ResponseEntity<List<Exam>> get() {

        List<Exam> exams = service.getAll();
        return ResponseEntity.ok(exams);
    }

    @PatchMapping("/{id_exam}")//ok
    public ResponseEntity<Void> patch(
            @PathVariable(name = "id_exam") Long id,
            @RequestBody Exam exam
    ) {
        service.patch(id, exam);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }


    @DeleteMapping("/{id_exam}") //ok
    public ResponseEntity<Void> delete(
            @PathVariable(name = "id_exam") Long id) {
        service.delete(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    @GetMapping("/{id_exam}")//ok
    public ResponseEntity<Exam> getById(
            @PathVariable(name = "id_exam") Long id
    ) {
        Exam exam = service.getById(id);
        return ResponseEntity.ok(exam);
    }

}
