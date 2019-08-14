package com.codeclan.example.backend.controllers;

import com.codeclan.example.backend.models.locations.PointOfInterest;
import com.codeclan.example.backend.models.locations.Service;
import com.codeclan.example.backend.models.locations.ServiceType;
import com.codeclan.example.backend.repositories.PointOfInterestRepository;
import com.codeclan.example.backend.repositories.ServiceRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping(value = "api/locations/services")
public class ServiceController {

    @Autowired
    ServiceRepository serviceRepository;

    @GetMapping
    public List<Service> getServices() {
        return serviceRepository.findAll();
    }

    @GetMapping(value = "/rating/{rating}")
    public List<Service> getServicesByRating(@PathVariable int rating) {
        return serviceRepository.findServiceByRating(rating);
    }

    @GetMapping(value = "type/{type}")
    public List<Service> getServicesByType(@PathVariable ServiceType type) {
        return serviceRepository.findServiceByType(type);
    }
}
