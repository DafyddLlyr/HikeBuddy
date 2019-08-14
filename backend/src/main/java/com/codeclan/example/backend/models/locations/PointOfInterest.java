package com.codeclan.example.backend.models.locations;

import javax.persistence.Entity;
import javax.persistence.Table;
import java.util.ArrayList;

@Entity
@Table(name="points_of_interest")
public class PointOfInterest extends Location {

    private PointOfInterestType type;

    public PointOfInterest(String name, int rating, String description, ArrayList<Double> coordinates, String pictureURL, PointOfInterestType type) {
        super(name, rating, description, coordinates, pictureURL);
        this.type = type;
    }

    public PointOfInterest() {
    }

    public PointOfInterestType getType() {
        return type;
    }

    public void setType(PointOfInterestType type) {
        this.type = type;
    }
}
