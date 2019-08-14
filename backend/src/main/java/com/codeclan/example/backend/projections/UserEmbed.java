package com.codeclan.example.backend.projections;

import com.codeclan.example.backend.models.Route;
import com.codeclan.example.backend.models.User;
import com.codeclan.example.backend.models.locations.Location;
import org.springframework.data.rest.core.config.Projection;

import java.util.List;

@Projection(name = "userEmbed", types = User.class)
public interface UserEmbed {
    String getName();
    List<Location> getFavourites();
    List<Route> getRoutes();
    double getDistanceWalked();
}
