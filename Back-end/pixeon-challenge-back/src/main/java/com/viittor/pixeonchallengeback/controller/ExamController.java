package com.viittor.pixeonchallengeback.controller;

import com.viittor.pixeonchallengeback.model.Exam;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/exam")
public class ExamController {

    @PostMapping
    public ResponseEntity<Long> post(
            @RequestBody Exam exam
            ){

        Long healthCareId = 15L;
        return new ResponseEntity<>(healthCareId, HttpStatus.CREATED);
    }

    @GetMapping
    public ResponseEntity<List<Exam>> get(){

        List<Exam> exams = null;
        return ResponseEntity.ok(exams);
    }

    @PatchMapping("/{exam_id}")
    public ResponseEntity<Void> patch(
            @PathVariable(name = "id_exam") Long id,
            @RequestBody Exam exam
    ){
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }


    @DeleteMapping("/{id_exam}")
    public ResponseEntity<Void> delete(
            @PathVariable(name = "id_exam") Long id){

        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    @GetMapping("/{id_exam}")
    public ResponseEntity<Exam> getById(
            @PathVariable(name = "id_exam") Long id
    ){


        Exam exam = null;
        return ResponseEntity.ok(exam);
    }

}
