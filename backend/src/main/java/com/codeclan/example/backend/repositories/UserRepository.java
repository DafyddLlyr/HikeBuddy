package com.codeclan.example.backend.repositories;

import com.codeclan.example.backend.models.User;
import com.codeclan.example.backend.projections.UserEmbed;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.stereotype.Repository;

@Repository
@RepositoryRestResource(excerptProjection = UserEmbed.class)
public interface UserRepository extends JpaRepository<User, Long> {
}
