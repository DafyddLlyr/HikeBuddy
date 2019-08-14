package com.codeclan.example.backend.models;

import com.codeclan.example.backend.models.locations.Location;
import com.codeclan.example.backend.projections.UserEmbed;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import org.hibernate.annotations.Cascade;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name="users")

public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="id")
    private Long id;

    @Column(name="name")
    private String name;

    @JsonIgnoreProperties
   @ManyToMany
   @Cascade(org.hibernate.annotations.CascadeType.SAVE_UPDATE)
   @JoinTable(
           joinColumns = {@JoinColumn(name="user_id", nullable = false, updatable = false)},
           inverseJoinColumns = {@JoinColumn(name="location_id", nullable = false, updatable = false)}
   )
    private List<Location> favourites;

    @OneToMany(mappedBy = "user")
    private List<Route> routes;

    public User(String name) {
        this.name = name;
        this.favourites = new ArrayList<>();
        this.routes = new ArrayList<>();
    }

    public User() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public List<Location> getFavourites() {
        return favourites;
    }

    public void setFavourites(ArrayList<Location> favourites) {
        this.favourites = favourites;
    }

    public List<Route> getRoutes() {
        return routes;
    }

    public void setRoutes(ArrayList<Route> routes) {
        this.routes = routes;
    }

    public void addLocation(Location location) {
        this.favourites.add(location);
    }

    public double getDistanceWalked() {
        double length = 0;
        for(Route route: this.routes) {
            if (route.isCompleted()) {
                length += route.getLength();
            }
        }
        return length;
    }
}
