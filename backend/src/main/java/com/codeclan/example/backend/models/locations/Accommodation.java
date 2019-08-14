package com.codeclan.example.backend.models.locations;

import javax.persistence.Entity;
import javax.persistence.Table;
import java.util.ArrayList;

@Entity
@Table(name="accommodations")
public class Accommodation extends Location {

    private AccommodationType type;

    public Accommodation(String name, int rating, String description, ArrayList<Double> coordinates, String pictureURL, AccommodationType type) {
        super(name, rating, description, coordinates, pictureURL);
        this.type = type;
    }

    public Accommodation() {
    }

    public AccommodationType getType() {
        return type;
    }

    public void setType(AccommodationType type) {
        this.type = type;
    }
}
