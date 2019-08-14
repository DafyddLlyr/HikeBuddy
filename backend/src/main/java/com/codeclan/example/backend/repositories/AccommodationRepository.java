package com.codeclan.example.backend.repositories;

import com.codeclan.example.backend.models.locations.Accommodation;
import com.codeclan.example.backend.models.locations.AccommodationType;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface AccommodationRepository extends JpaRepository<Accommodation, Long> {

    List<Accommodation> findAccommodationByRating(int rating);
    List<Accommodation> findAccommodationByType(AccommodationType type);

}
