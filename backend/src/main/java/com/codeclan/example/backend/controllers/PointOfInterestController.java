package com.codeclan.example.backend.controllers;
import com.codeclan.example.backend.models.locations.PointOfInterest;
import com.codeclan.example.backend.models.locations.PointOfInterestType;
import com.codeclan.example.backend.repositories.PointOfInterestRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.List;

@RestController
@RequestMapping(value = "api/locations/pointsOfInterest")
public class PointOfInterestController {

    @Autowired
    PointOfInterestRepository pointOfInterestRepository;

    @GetMapping
    public List<PointOfInterest> getPointsOfInterest() {
        return pointOfInterestRepository.findAll();
    }

    @GetMapping(value = "/rating/{rating}")
    public List<PointOfInterest> getPOIByRating(@PathVariable int rating) {
        return pointOfInterestRepository.findPointOfInterestByRating(rating);
    }

    @GetMapping(value = "type/{type}")
    public List<PointOfInterest> getPOIByType(@PathVariable PointOfInterestType type) {
        return pointOfInterestRepository.findPointOfInterestByType(type);
    }
}
