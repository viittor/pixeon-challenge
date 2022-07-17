package com.viittor.pixeonchallengeback.controller;

import com.viittor.pixeonchallengeback.model.Healthcare;
import com.viittor.pixeonchallengeback.service.HealthcareService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
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

}
