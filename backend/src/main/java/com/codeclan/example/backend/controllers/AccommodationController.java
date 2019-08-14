package com.codeclan.example.backend.controllers;

import com.codeclan.example.backend.models.locations.Accommodation;
import com.codeclan.example.backend.models.locations.AccommodationType;
import com.codeclan.example.backend.repositories.AccommodationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping(value = "/api/locations/accommodation")
public class AccommodationController {

    @Autowired
    AccommodationRepository accommodationRepository;

    @GetMapping
    public List<Accommodation> getAllAccomodation() {
        return accommodationRepository.findAll();
    }

    @GetMapping(value = "/rating/{rating}")
    public List<Accommodation> getAccommodationByRating(@PathVariable int rating) {
        return accommodationRepository.findAccommodationByRating(rating);
    }

    @GetMapping(value = "/type/{type}")
    public List<Accommodation> getAccommodationByType(@PathVariable AccommodationType type) {
        return accommodationRepository.findAccommodationByType(type);
    }
}
