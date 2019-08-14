package com.codeclan.example.backend.models.locations;

import com.codeclan.example.backend.models.User;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import org.hibernate.annotations.Cascade;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;


@Entity
@Inheritance(strategy = InheritanceType.TABLE_PER_CLASS)
public class Location {

    @Id
    @GeneratedValue(strategy = GenerationType.TABLE)
    private Long id;

    @Column(name="name")
    private String name;

    @Column(name="rating")
    private int rating;

    @Column(name="description")
    private String description;

    @Column(name="coordinates")
    private ArrayList<Double> coordinates;

    @Column(name="picture_url")
    private String pictureURL;

    @JsonIgnoreProperties
    @ManyToMany
    @Cascade(org.hibernate.annotations.CascadeType.SAVE_UPDATE)
    @JoinTable(
            name="user_locations",
            joinColumns = {@JoinColumn(name="location_id", nullable = false, updatable = false)},
            inverseJoinColumns = {@JoinColumn(name="user_id", nullable = false, updatable = false)}
    )
    private List<User> users;

    public Location(String name, int rating, String description, ArrayList<Double> coordinates, String pictureURL) {
        this.name = name;
        this.rating = rating;
        this.description = description;
        this.coordinates = coordinates;
        this.users = new ArrayList<>();
        this.pictureURL = pictureURL;
    }

    public Location() {
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

    public int getRating() {
        return rating;
    }

    public void setRating(int rating) {
        this.rating = rating;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public ArrayList<Double> getCoordinates() {
        return coordinates;
    }

    public void setCoordinates(ArrayList<Double> coordinates) {
        this.coordinates = coordinates;
    }

    public List<User> getUsers() {
        return users;
    }

    public void setUsers(List<User> users) {
        this.users = users;
    }

    public String getPictureURL() {
        return pictureURL;
    }

    public void setPictureURL(String pictureURL) {
        this.pictureURL = pictureURL;
    }
}
