package com.codeclan.example.backend.repositories;

import com.codeclan.example.backend.models.locations.Service;
import com.codeclan.example.backend.models.locations.ServiceType;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ServiceRepository extends JpaRepository<Service, Long> {

    List<Service> findServiceByRating(int rating);
    List<Service> findServiceByType(ServiceType type);
}
