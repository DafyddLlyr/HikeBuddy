package com.codeclan.example.backend.models;

import org.hibernate.annotations.Cascade;

import javax.persistence.*;
import java.util.ArrayList;

@Entity
@Table(name="routes")
public class Route {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="id")
    private Long id;

    @Column(name="name")
    private String name;

    @ManyToOne
    @Cascade(org.hibernate.annotations.CascadeType.SAVE_UPDATE)
    @JoinColumn(name="user_id", nullable = false)
    private User user;

    @Column(name="geojson_data")
    private ArrayList<ArrayList<Double>> geoJsonData;

    @Column(name="length")
    private Double length;

    private boolean completed;

    public Route(String name, User user, ArrayList<ArrayList<Double>> geoJsonData, Double length) {
        this.name = name;
        this.user = user;
        this.geoJsonData = geoJsonData;
        this.length = length;
        this.completed = false;
    }

    public Route() {
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

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public ArrayList<ArrayList<Double>> getGeoJsonData() {
        return geoJsonData;
    }

    public void setGeoJsonData(ArrayList<ArrayList<Double>> geoJsonData) {
        this.geoJsonData = geoJsonData;
    }

    public Double getLength() {
        return length;
    }

    public void setLength(Double length) {
        this.length = length;
    }

    public boolean isCompleted() {
        return completed;
    }

    public void setCompleted(boolean completed) {
        this.completed = completed;
    }
}
