package com.codeclan.example.backend.controllers;

import com.codeclan.example.backend.models.Route;
import com.codeclan.example.backend.repositories.RouteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;


@RestController
@RequestMapping(value="routes")

public class RouteController {

    @Autowired
    RouteRepository routeRepository;

    @GetMapping(value = "/user/{id}")
    public List<Route> getRoutesByUser(@PathVariable int id) {
        return routeRepository.findRouteByUserId(id);
    }

}
