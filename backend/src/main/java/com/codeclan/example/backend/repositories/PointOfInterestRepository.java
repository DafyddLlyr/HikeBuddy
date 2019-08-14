package com.codeclan.example.backend.repositories;

import com.codeclan.example.backend.models.locations.PointOfInterest;
import com.codeclan.example.backend.models.locations.PointOfInterestType;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PointOfInterestRepository extends JpaRepository<PointOfInterest, Long> {

    List<PointOfInterest> findPointOfInterestByRating(int rating);
    List<PointOfInterest> findPointOfInterestByType(PointOfInterestType type);

}
