package com.codeclan.example.backend.models.locations;


import javax.persistence.Entity;
import javax.persistence.Table;
import java.util.ArrayList;

@Entity
@Table(name="services")
public class Service extends Location {

    private ServiceType type;

    public Service(String name, int rating, String description, ArrayList<Double> coordinates, String pictureURL, ServiceType type) {
        super(name, rating, description, coordinates, pictureURL);
        this.type = type;
    }

    public Service() {
    }

    public ServiceType getType() {
        return type;
    }

    public void setType(ServiceType type) {
        this.type = type;
    }
}
