package com.codeclan.example.backend.projections;

import com.codeclan.example.backend.models.Route;
import com.codeclan.example.backend.models.User;
import org.springframework.data.rest.core.config.Projection;

import java.util.ArrayList;

@Projection(name = "routeEmbed", types = Route.class)
public interface RouteEmbed {
    Long getId();
    String getName();
    User getUser();
    ArrayList<ArrayList<Double>> getGeoJsonData();
    Double getLength();
    boolean getCompleted();
}
