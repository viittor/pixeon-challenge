package com.viittor.pixeonchallengeback.controller;

import com.viittor.pixeonchallengeback.model.Exam;
import com.viittor.pixeonchallengeback.model.Healthcare;
import com.viittor.pixeonchallengeback.service.HealthcareService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/healthcare")
public class HealthcareController {

    @Autowired
    HealthcareService service;

    @PostMapping
    public ResponseEntity<Long> post(
            @RequestBody Healthcare healthcare
){

        Long healthCareId = service.insert(healthcare);
        return new ResponseEntity<>(healthCareId, HttpStatus.CREATED);
    }

    @GetMapping//ok
    public ResponseEntity<List<Healthcare>> get() {

        List<Healthcare> healthcares = service.getAll();
        return ResponseEntity.ok(healthcares);
    }


}
